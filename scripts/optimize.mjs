import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const rootDir = process.cwd();
const targetDirs = [
  path.join(rootDir, 'public', 'images'),
  path.join(rootDir, 'public', 'new'),
];

// Noise textures and critical assets to leave untouched
const skipFiles = new Set([
  'dark-noise-texture.png',
  'velvet-matte-grain.png',
  'white-noise-exact.png',
  'white-noise-seamless.png',
  'light-noise-grain.svg',
  'wearguard-hero-reel.mp4',
]);

const imageExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif']);

function getAllImageFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllImageFiles(fullPath));
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (imageExtensions.has(ext) && !skipFiles.has(entry.name.toLowerCase())) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

console.log('🚀 WearGuard Comprehensive Image Optimizer Starting...\n');

let allImages = [];
for (const dir of targetDirs) {
  allImages = allImages.concat(getAllImageFiles(dir));
}

console.log(`🔍 Found ${allImages.length} raster images to examine across public/images/ and public/new/\n`);

async function optimizeAll() {
  let initialTotalBytes = 0;
  let finalTotalBytes = 0;
  let optimizedCount = 0;

  for (const filePath of allImages) {
    const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
    const stat = fs.statSync(filePath);
    const initialSize = stat.size;
    initialTotalBytes += initialSize;

    // Only process images over 80 KB
    if (initialSize <= 80 * 1024) {
      finalTotalBytes += initialSize;
      continue;
    }

    const ext = path.extname(filePath).toLowerCase();

    try {
      const inputBuffer = fs.readFileSync(filePath);
      const image = sharp(inputBuffer);
      const metadata = await image.metadata();

      let pipeline = sharp(inputBuffer);

      // Max width cap: 1600px for desktop sharpness without massive pixel bloat
      if (metadata.width && metadata.width > 1600) {
        pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
      }

      let buffer;
      if (ext === '.jpg' || ext === '.jpeg') {
        buffer = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
      } else if (ext === '.webp') {
        buffer = await pipeline.webp({ quality: 78, effort: 6 }).toBuffer();
      } else if (ext === '.png') {
        buffer = await pipeline.png({ quality: 80, compressionLevel: 9, palette: true }).toBuffer();
      } else if (ext === '.avif') {
        buffer = await pipeline.avif({ quality: 75 }).toBuffer();
      }

      if (buffer && buffer.length < initialSize) {
        fs.writeFileSync(filePath, buffer);
        const newSize = buffer.length;
        const reduction = (((initialSize - newSize) / initialSize) * 100).toFixed(0);
        console.log(`  ✓ ${relPath}: ${(initialSize / (1024 * 1024)).toFixed(2)} MB → ${(newSize / 1024).toFixed(1)} kB (-${reduction}%)`);
        finalTotalBytes += newSize;
        optimizedCount++;
      } else {
        finalTotalBytes += initialSize;
      }
    } catch (err) {
      console.warn(`  ⚠️ Could not optimize ${relPath}:`, err.message);
      finalTotalBytes += initialSize;
    }
  }

  const savedBytes = initialTotalBytes - finalTotalBytes;
  const savedMB = (savedBytes / (1024 * 1024)).toFixed(2);
  const initialMB = (initialTotalBytes / (1024 * 1024)).toFixed(2);
  const finalMB = (finalTotalBytes / (1024 * 1024)).toFixed(2);
  const totalPercent = (((initialTotalBytes - finalTotalBytes) / initialTotalBytes) * 100).toFixed(1);

  console.log(`\n========================================`);
  console.log(`✅ Image Optimization Complete!`);
  console.log(`📦 Optimized files: ${optimizedCount}`);
  console.log(`📉 Initial total:   ${initialMB} MB`);
  console.log(`📉 Final total:     ${finalMB} MB`);
  console.log(`🎉 Space saved:     ${savedMB} MB (-${totalPercent}%)`);
  console.log(`========================================\n`);
}

optimizeAll();
