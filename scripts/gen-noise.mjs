import fs from 'fs'
import zlib from 'zlib'

function createNoisePNG(width, height, filename) {
  // Raw RGBA pixels
  const rowSize = width * 4 + 1 // +1 for filter byte
  const rawData = Buffer.alloc(rowSize * height)

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize
    rawData[rowOffset] = 0 // Filter type 0 (None)

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4
      // Base dark gray with high-contrast fine monochrome noise
      // base around 18-24, grain spikes up to 60-90
      const rand = Math.random()
      let v = 18 + Math.floor(rand * 50)
      if (Math.random() < 0.15) {
        v = Math.min(255, v + Math.floor(Math.random() * 45))
      }

      rawData[pxOffset] = v     // R
      rawData[pxOffset + 1] = v // G
      rawData[pxOffset + 2] = v // B
      rawData[pxOffset + 3] = 255 // A
    }
  }

  const compressedData = zlib.deflateSync(rawData)

  // PNG Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])

  // IHDR chunk
  const ihdrData = Buffer.alloc(13)
  ihdrData.writeUInt32BE(width, 0)
  ihdrData.writeUInt32BE(height, 4)
  ihdrData[8] = 8 // bit depth
  ihdrData[9] = 6 // color type RGBA
  ihdrData[10] = 0 // compression method
  ihdrData[11] = 0 // filter method
  ihdrData[12] = 0 // interlace method

  const ihdrChunk = createChunk('IHDR', ihdrData)
  const idatChunk = createChunk('IDAT', compressedData)
  const iendChunk = createChunk('IEND', Buffer.alloc(0))

  const png = Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk])
  fs.writeFileSync(filename, png)
  console.log(`Generated ${filename} (${png.length} bytes)`)
}

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

// CRC32 table & calc
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

createNoisePNG(256, 256, 'public/images/carbon-grain-texture.png')
