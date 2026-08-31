import fs from 'fs'
import zlib from 'zlib'

const srcPath = 'C:\\Users\\shine\\.gemini\\antigravity-ide\\brain\\72c10531-1b33-4c68-9b31-80035683ca24\\.user_uploaded\\media_1788160468363.png'
const buf = fs.readFileSync(srcPath)

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
  } else if (type === 'IDAT') {
    idatChunks.push(buf.subarray(pos + 8, pos + 8 + len))
  }
  pos += 12 + len
}

const decompressed = zlib.inflateSync(Buffer.concat(idatChunks))
const bpp = 4
const rowSize = 1 + width * bpp

let min = 255, max = 0, sum = 0, count = 0

// Sample bottom-right quadrant
for (let y = Math.floor(height * 0.6); y < height; y++) {
  const offset = y * rowSize
  for (let x = Math.floor(width * 0.5); x < width; x++) {
    const px = offset + 1 + x * bpp
    const r = decompressed[px]
    const g = decompressed[px + 1]
    const b = decompressed[px + 2]
    min = Math.min(min, r, g, b)
    max = Math.max(max, r, g, b)
    sum += (r + g + b) / 3
    count++
  }
}

console.log(`RGB Stats - Min: ${min}, Max: ${max}, Avg: ${(sum / count).toFixed(2)}`)
