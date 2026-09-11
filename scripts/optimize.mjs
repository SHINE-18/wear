import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'public', 'images');

console.log('🚀 WearGuard In-Place Image Optimizer Starting...\n');

if (!fs.existsSync(imagesDir)) {
  console.error('❌ Directory not found:', imagesDir);
  process.exit(1);
}

const files = fs.readdirSync(imagesDir);
const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp'];

const imageFiles = files.filter(file => {
  const ext = path.extname(file).toLowerCase();
  return imageExtensions.includes(ext);
});

console.log(`🔍 Found ${imageFiles.length} raster images in public/images/\n`);

async function optimizeImages() {
  let initialTotalBytes = 0;
  let finalTotalBytes = 0;

  for (const file of imageFiles) {
    // Skip small textures
    if (file === 'dark-noise-texture.png' || file === 'velvet-matte-grain.png') {
      continue;
    }

    const filePath = path.join(imagesDir, file);
    const stat = fs.statSync(filePath);
    const initialSize = stat.size;
    initialTotalBytes += initialSize;

    const ext = path.extname(file).toLowerCase();

    // Only compress images over 100 kB
    if (initialSize > 100 * 1024) {
      try {
        const inputBuffer = fs.readFileSync(filePath);
        const image = sharp(inputBuffer);
        const metadata = await image.metadata();

        let pipeline = sharp(inputBuffer);

        // Max dimension cap to 1600px if oversized
        if (metadata.width && metadata.width > 1600) {
          pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
        }

        let buffer;
        if (ext === '.png') {
          buffer = await pipeline
            .png({ quality: 80, compressionLevel: 9, palette: true })
            .toBuffer();
        } else if (ext === '.jpg' || ext === '.jpeg') {
          buffer = await pipeline
            .jpeg({ quality: 78, mozjpeg: true })
            .toBuffer();
        } else if (ext === '.webp') {
          buffer = await pipeline
            .webp({ quality: 75, effort: 6 })
            .toBuffer();
        }

        if (buffer && buffer.length < initialSize) {
          fs.writeFileSync(filePath, buffer);
          const newSize = buffer.length;
          console.log(`  ✓ ${file}: ${(initialSize / 1024).toFixed(1)} kB → ${(newSize / 1024).toFixed(1)} kB (${(((initialSize - newSize) / initialSize) * 100).toFixed(0)}% reduction)`);
          finalTotalBytes += newSize;
        } else {
          console.log(`  - ${file}: Already optimal (${(initialSize / 1024).toFixed(1)} kB)`);
          finalTotalBytes += initialSize;
        }
      } catch (err) {
        console.warn(`  ⚠️ Failed to optimize ${file}:`, err.message);
        finalTotalBytes += initialSize;
      }
    } else {
      finalTotalBytes += initialSize;
    }
  }

  const savedKB = (initialTotalBytes - finalTotalBytes) / 1024;
  console.log(`\n✅ Optimization Complete!`);
  console.log(`🎉 Total saved: ${(savedKB / 1024).toFixed(2)} MB (${savedKB.toFixed(0)} kB)`);
  console.log(`📉 New total raster size: ${(finalTotalBytes / (1024 * 1024)).toFixed(2)} MB`);
}

optimizeImages();
