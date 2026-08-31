import fs from 'fs'
import path from 'path'

const src = 'C:\\Users\\shine\\.gemini\\antigravity-ide\\brain\\72c10531-1b33-4c68-9b31-80035683ca24\\.user_uploaded\\media_1788159195129.png'
const dest1 = 'd:\\PROJECTS\\Wearguarddddd\\public\\images\\carbon-grain.png'
const dest2 = 'd:\\PROJECTS\\Wearguarddddd\\public\\images\\dark-noise-texture.png'

const data = fs.readFileSync(src)
fs.writeFileSync(dest1, data)
fs.writeFileSync(dest2, data)

console.log('Copied user texture image successfully! Size:', data.length)
