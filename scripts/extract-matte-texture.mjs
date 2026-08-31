import fs from 'fs'
import zlib from 'zlib'

const srcPath = 'C:\\Users\\shine\\.gemini\\antigravity-ide\\brain\\72c10531-1b33-4c68-9b31-80035683ca24\\.user_uploaded\\media_1788160468363.png'
const buf = fs.readFileSync(srcPath)

// Parse PNG chunks
let pos = 8
let width = 0
let height = 0
const idatChunks = []

while (pos < buf.length) {
  const len = buf.readUInt32BE(pos)
  const type = buf.toString('ascii', pos + 4, pos + 8)
  if (type === 'IHDR') {
    width = buf.readUInt32BE(pos + 8)
    height = buf.readUInt32BE(pos + 12)
    console.log(`Image dimensions: ${width}x${height}`)
  } else if (type === 'IDAT') {
    idatChunks.push(buf.subarray(pos + 8, pos + 8 + len))
  }
  pos += 12 + len
}

const decompressed = zlib.inflateSync(Buffer.concat(idatChunks))
console.log(`Decompressed IDAT length: ${decompressed.length}`)

// Crop a clean 160x160 patch from bottom-right (away from text)
const cropW = 160
const cropH = 160
const startX = Math.max(0, width - cropW - 10)
const startY = Math.max(0, height - cropH - 10)

const bpp = 4 // RGBA
const srcRowSize = 1 + width * bpp
const outRowSize = 1 + cropW * bpp
const outRaw = Buffer.alloc(outRowSize * cropH)

for (let y = 0; y < cropH; y++) {
  const srcY = startY + y
  const srcOffset = srcY * srcRowSize
  const outOffset = y * outRowSize
  outRaw[outOffset] = 0 // Filter 0

  for (let x = 0; x < cropW; x++) {
    const srcX = startX + x
    const srcPx = srcOffset + 1 + srcX * bpp
    const outPx = outOffset + 1 + x * bpp

    outRaw[outPx] = decompressed[srcPx]         // R
    outRaw[outPx + 1] = decompressed[srcPx + 1] // G
    outRaw[outPx + 2] = decompressed[srcPx + 2] // B
    outRaw[outPx + 3] = 255                     // A
  }
}

// Re-encode PNG
function createChunk(type, data) {
  const len = data.length
  const buf = Buffer.alloc(4 + 4 + len + 4)
  buf.writeUInt32BE(len, 0)
  buf.write(type, 4, 4, 'ascii')
  data.copy(buf, 8)
  const crc = crc32(buf.subarray(4, 8 + len))
  buf.writeUInt32BE(crc >>> 0, 8 + len)
  return buf
}

const crcTable = new Uint32Array(256)
for (let i = 0; i < 256; i++) {
  let c = i
  for (let j = 0; j < 8; j++) {
    c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1)
  }
  crcTable[i] = c
}

function crc32(buf) {
  let crc = 0xffffffff
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8)
  }
  return crc ^ 0xffffffff
}

const comp = zlib.deflateSync(outRaw)
const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
const ihdr = Buffer.alloc(13)
ihdr.writeUInt32BE(cropW, 0)
ihdr.writeUInt32BE(cropH, 4)
ihdr[8] = 8
ihdr[9] = 6
ihdr[10] = 0
ihdr[11] = 0
ihdr[12] = 0

const outPng = Buffer.concat([
  sig,
  createChunk('IHDR', ihdr),
  createChunk('IDAT', comp),
  createChunk('IEND', Buffer.alloc(0))
])

fs.writeFileSync('d:\\PROJECTS\\Wearguarddddd\\public\\images\\carbon-grain.png', outPng)
fs.writeFileSync('d:\\PROJECTS\\Wearguarddddd\\public\\images\\dark-noise-texture.png', outPng)
console.log('Saved exact background texture patch to carbon-grain.png and dark-noise-texture.png!')
