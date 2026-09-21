import fs from 'fs'
import zlib from 'zlib'

function createLightNoisePNG(width, height, filename) {
  const rowSize = width * 4 + 1
  const rawData = Buffer.alloc(rowSize * height)

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize
    rawData[rowOffset] = 0 // Filter 0 (None)

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4

      // White noise / film grain with alpha transparency:
      // We produce fine micro-dots: some lighter (white), some slightly darker (slate),
      // with subtle alpha so it blends smoothly over #EDEDED.
      const r = Math.random()
      let colorVal = 255
      let alphaVal = 0

      if (r < 0.22) {
        // Subtle dark grain fleck (graphite / dark slate)
        colorVal = Math.floor(40 + Math.random() * 80)
        alphaVal = Math.floor(12 + Math.random() * 25) // ~5-15% alpha
      } else if (r < 0.55) {
        // Subtle white grain fleck
        colorVal = 255
        alphaVal = Math.floor(18 + Math.random() * 35) // ~7-20% alpha
      } else {
        // Very faint ambient grain
        colorVal = Math.random() > 0.5 ? 255 : 120
        alphaVal = Math.floor(4 + Math.random() * 10) // ~2-5% alpha
      }

      rawData[pxOffset] = colorVal     // R
      rawData[pxOffset + 1] = colorVal // G
      rawData[pxOffset + 2] = colorVal // B
      rawData[pxOffset + 3] = alphaVal // A
    }
  }

  const compressedData = zlib.deflateSync(rawData)

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const ihdrData = Buffer.alloc(13)
  ihdrData.writeUInt32BE(width, 0)
  ihdrData.writeUInt32BE(height, 4)
  ihdrData[8] = 8 // bit depth
  ihdrData[9] = 6 // color type RGBA
  ihdrData[10] = 0
  ihdrData[11] = 0
  ihdrData[12] = 0

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

  const ihdrChunk = createChunk('IHDR', ihdrData)
  const idatChunk = createChunk('IDAT', compressedData)
  const iendChunk = createChunk('IEND', Buffer.alloc(0))

  const png = Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk])
  fs.writeFileSync(filename, png)
  console.log(`Generated light noise grain: ${filename} (${png.length} bytes)`)
}

createLightNoisePNG(200, 200, 'public/images/light-noise-grain.png')
createLightNoisePNG(200, 200, 'public/images/white-noise-grain.png')
