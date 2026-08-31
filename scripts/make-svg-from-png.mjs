import fs from 'fs'

const imgPath = 'd:\\PROJECTS\\Wearguarddddd\\public\\images\\carbon-grain.png'
const imgBuffer = fs.readFileSync(imgPath)
const base64 = imgBuffer.toString('base64')
const dataUri = `data:image/png;base64,${base64}`

// Generate carbon-grain.svg
const svgMain = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
  <image href="${dataUri}" x="0" y="0" width="300" height="300" preserveAspectRatio="none" />
</svg>`
fs.writeFileSync('d:\\PROJECTS\\Wearguarddddd\\public\\images\\carbon-grain.svg', svgMain)

// Generate 3 micro-shifted frames for the subtle moving grain
const offsets = [
  { x: 0, y: 0 },
  { x: -12, y: -8 },
  { x: 8, y: -14 },
]

offsets.forEach((off, i) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
  <image href="${dataUri}" x="${off.x}" y="${off.y}" width="320" height="320" preserveAspectRatio="none" />
</svg>`
  fs.writeFileSync(`d:\\PROJECTS\\Wearguarddddd\\public\\images\\carbon-grain-${i + 1}.svg`, svg)
})

console.log('Successfully generated carbon-grain.svg and animated frames!')
