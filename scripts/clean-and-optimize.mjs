import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const imagesDir = path.join(rootDir, 'public', 'images');

// Critical files to NEVER delete regardless of casing
const keepAlways = new Set([
  'vector.svg',
  'Vector.svg',
  'screen.svg',
  'velvet-matte-grain.png',
  'dark-noise-texture.png',
  'wearguard-hero-reel.mp4',
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  'asphalt-plant-hero.png',
  'wearguard.png',
  'wear-liners-3d.png',
  'wearguard-hero-3d.png',
  'wearguard-parts.png'
]);

const scanDirs = ['app', 'components', 'lib'];
const referencedImages = new Set();

function scanDir(dir) {
  const fullPath = path.join(rootDir, dir);
  if (!fs.existsSync(fullPath)) return;
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(fullPath, entry.name);
    if (entry.isDirectory()) {
      scanDir(path.relative(rootDir, entryPath));
    } else if (/\.(tsx|ts|jsx|js|css|json)$/i.test(entry.name)) {
      const content = fs.readFileSync(entryPath, 'utf8');
      const matches = content.matchAll(/\/images\/([a-zA-Z0-9_\-\. %&]+)/g);
      for (const match of matches) {
        referencedImages.add(match[1].trim());
        referencedImages.add(match[1].trim().toLowerCase());
      }
    }
  }
}

scanDirs.forEach(scanDir);

const allImages = fs.readdirSync(imagesDir);
let deletedCount = 0;
let deletedBytes = 0;

for (const file of allImages) {
  const lower = file.toLowerCase();
  const isReferenced = referencedImages.has(file) || referencedImages.has(lower) || keepAlways.has(file) || keepAlways.has(lower);

  if (!isReferenced) {
    const filePath = path.join(imagesDir, file);
    const size = fs.statSync(filePath).size;
    deletedBytes += size;
    fs.unlinkSync(filePath);
    console.log(`🗑️ Deleted unused: ${file} (${(size / 1024).toFixed(1)} KB)`);
    deletedCount++;
  }
}

console.log(`\n🎉 Deleted ${deletedCount} unused files. Freed ${(deletedBytes / (1024 * 1024)).toFixed(2)} MB.`);

