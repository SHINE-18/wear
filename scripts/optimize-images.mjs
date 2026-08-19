import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const imagesDir = path.join(process.cwd(), 'public', 'images');

console.log('🖼️  Checking images in:', imagesDir);

if (!fs.existsSync(imagesDir)) {
  console.error('Directory not found:', imagesDir);
  process.exit(1);
}

const files = fs.readdirSync(imagesDir);

// Filter files > 500 KB
const largeFiles = files.filter(file => {
  const filePath = path.join(imagesDir, file);
  const stat = fs.statSync(filePath);
  return stat.isFile() && stat.size > 500 * 1024;
});

console.log(`Found ${largeFiles.length} large images (>500KB) to optimize:\n`);

largeFiles.forEach(file => {
  const filePath = path.join(imagesDir, file);
  const sizeMB = (fs.statSync(filePath).size / (1024 * 1024)).toFixed(2);
  console.log(` - ${file} (${sizeMB} MB)`);
});

console.log('\n--- Optimization Instructions ---');
console.log('To automatically compress all images using sharp-cli, run:');
console.log('npx sharp-cli -i public/images/*.png -o public/images/ --pngQuality 80');
