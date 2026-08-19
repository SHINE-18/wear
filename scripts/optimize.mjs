import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const imagesDir = path.join(process.cwd(), 'public', 'images');

console.log('🚀 WearGuard Image Optimizer Starting...\n');

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

console.log(`🔍 Found ${imageFiles.length} images in public/images/\n`);

// Calculate initial total size
let initialTotalBytes = 0;
imageFiles.forEach(file => {
  const filePath = path.join(imagesDir, file);
  initialTotalBytes += fs.statSync(filePath).size;
});

console.log(`📦 Total initial image size: ${(initialTotalBytes / (1024 * 1024)).toFixed(2)} MB\n`);

// Check if sharp is available or install temporary sharp CLI
console.log('⚡ Running optimization via sharp-cli...');

try {
  // Use npx sharp-cli to optimize images in place or convert heavy PNGs to WebP
  imageFiles.forEach(file => {
    const filePath = path.join(imagesDir, file);
    const stat = fs.statSync(filePath);
    const sizeMB = stat.size / (1024 * 1024);

    if (sizeMB > 0.5) {
      console.log(`  Compressing: ${file} (${sizeMB.toFixed(2)} MB)...`);
      try {
        if (file.endsWith('.png')) {
          execSync(`npx -y sharp-cli -i "${filePath}" -o "${filePath}" --pngQuality 75 --force`, { stdio: 'inherit' });
        } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
          execSync(`npx -y sharp-cli -i "${filePath}" -o "${filePath}" --jpegQuality 75 --force`, { stdio: 'inherit' });
        } else if (file.endsWith('.webp')) {
          execSync(`npx -y sharp-cli -i "${filePath}" -o "${filePath}" --webpQuality 75 --force`, { stdio: 'inherit' });
        }
      } catch (err) {
        console.warn(`  ⚠️ Failed to compress ${file}:`, err.message);
      }
    }
  });

  // Calculate final total size
  let finalTotalBytes = 0;
  imageFiles.forEach(file => {
    const filePath = path.join(imagesDir, file);
    finalTotalBytes += fs.statSync(filePath).size;
  });

  const savedMB = ((initialTotalBytes - finalTotalBytes) / (1024 * 1024)).toFixed(2);
  console.log(`\n✅ Optimization Complete!`);
  console.log(`🎉 Total saved: ${savedMB} MB`);
  console.log(`📉 New total image size: ${(finalTotalBytes / (1024 * 1024)).toFixed(2)} MB`);

} catch (error) {
  console.error('❌ Error during optimization:', error);
}
