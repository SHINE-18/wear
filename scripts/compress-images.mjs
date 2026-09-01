import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');

async function run() {
  let sharp;
  try {
    const sharpModule = await import('sharp');
    sharp = sharpModule.default;
  } catch (e) {
    console.log('sharp not installed locally, will try dynamic require or npx...');
  }

  const files = fs.readdirSync(imagesDir);
  console.log(`Checking ${files.length} active image files for compression...`);

  let initialBytes = 0;
  let finalBytes = 0;

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const stat = fs.statSync(filePath);
    const sizeMB = stat.size / (1024 * 1024);
    initialBytes += stat.size;

    if (sharp && sizeMB > 0.3 && !file.endsWith('.mp4') && !file.endsWith('.svg')) {
      console.log(`⚡ Compressing: ${file} (${sizeMB.toFixed(2)} MB)...`);
      try {
        const ext = path.extname(file).toLowerCase();
        const buffer = fs.readFileSync(filePath);
        
        let optimizedBuffer;
        if (ext === '.png') {
          optimizedBuffer = await sharp(buffer)
            .png({ quality: 80, compressionLevel: 9, palette: true })
            .toBuffer();
        } else if (ext === '.jpg' || ext === '.jpeg') {
          optimizedBuffer = await sharp(buffer)
            .jpeg({ quality: 80, mozjpeg: true })
            .toBuffer();
        } else if (ext === '.webp') {
          optimizedBuffer = await sharp(buffer)
            .webp({ quality: 80, effort: 6 })
            .toBuffer();
        }

        if (optimizedBuffer && optimizedBuffer.length < stat.size) {
          fs.writeFileSync(filePath, optimizedBuffer);
          const newSizeMB = optimizedBuffer.length / (1024 * 1024);
          console.log(`   ✓ Reduced to ${newSizeMB.toFixed(2)} MB (saved ${(((stat.size - optimizedBuffer.length) / stat.size) * 100).toFixed(0)}%)`);
        }
      } catch (err) {
        console.warn(`   ⚠️ Could not optimize ${file}: ${err.message}`);
      }
    }
  }

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    finalBytes += fs.statSync(filePath).size;
  }

  console.log(`\n📦 Total public/images folder size: ${(finalBytes / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`🎉 Total saved: ${((initialBytes - finalBytes) / (1024 * 1024)).toFixed(2)} MB`);
}

run();
