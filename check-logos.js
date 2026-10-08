const fs = require('fs');

const blackSvg = fs.readFileSync('public/logo/black logo.svg', 'utf8');
const matchB = blackSvg.match(/href="data:image\/png;base64,([^"]+)"/);
if (matchB) {
  const buf = Buffer.from(matchB[1], 'base64');
  console.log('black logo base64 png size:', buf.length);
  fs.writeFileSync('public/logo/test-black.png', buf);
} else {
  console.log('No match for black logo');
}

const whiteSvg = fs.readFileSync('public/logo/final logo white.svg', 'utf8');
const matchW = whiteSvg.match(/href="data:image\/png;base64,([^"]+)"/);
if (matchW) {
  const bufW = Buffer.from(matchW[1], 'base64');
  console.log('white logo base64 png size:', bufW.length);
  fs.writeFileSync('public/logo/test-white.png', bufW);
} else {
  console.log('No match for white logo');
}
