import fs from 'fs'
import zlib from 'zlib'

function createVelvetMattePNG(width, height, filename) {
  const rowSize = width * 4 + 1
  const rawData = Buffer.alloc(rowSize * height)

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize
    rawData[rowOffset] = 0 // Filter 0

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4
      
      // Soft organic matte grain centered around dark charcoal (14 to 28)
      // Very gentle micro-variance: no harsh white spikes!
      const noise = (Math.random() - 0.5) * 14
      const v = Math.max(8, Math.min(32, Math.round(18 + noise)))

      rawData[pxOffset] = v     // R
      rawData[pxOffset + 1] = v // G
      rawData[pxOffset + 2] = v // B
      rawData[pxOffset + 3] = 255 // A
    }
  }

  const compressedData = zlib.deflateSync(rawData)

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const ihdrData = Buffer.alloc(13)
  ihdrData.writeUInt32BE(width, 0)
  ihdrData.writeUInt32BE(height, 4)
  ihdrData[8] = 8
  ihdrData[9] = 6
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
  console.log(`Generated silky smooth matte texture: ${filename} (${png.length} bytes)`)
}

createVelvetMattePNG(200, 200, 'd:\\PROJECTS\\Wearguarddddd\\public\\images\\velvet-matte-grain.png')
createVelvetMattePNG(200, 200, 'd:\\PROJECTS\\Wearguarddddd\\public\\images\\carbon-grain.png')
createVelvetMattePNG(200, 200, 'd:\\PROJECTS\\Wearguarddddd\\public\\images\\dark-noise-texture.png')
