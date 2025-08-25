const fs = require('fs');
const path = require('path');

console.log('🧪 Testing build output...');

const outDir = path.join(__dirname, '..', 'out');

// Check if out directory exists
if (!fs.existsSync(outDir)) {
  console.error('❌ out directory not found. Run "npm run export" first.');
  process.exit(1);
}

// Check for essential files
const requiredFiles = [
  'index.html',
  '_next/static/css',
  '_next/static/chunks',
  'images/projects'
];

let allGood = true;

requiredFiles.forEach(file => {
  const filePath = path.join(outDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.error(`❌ ${file} missing`);
    allGood = false;
  }
});

// Check index.html content
const indexPath = path.join(outDir, 'index.html');
if (fs.existsSync(indexPath)) {
  const content = fs.readFileSync(indexPath, 'utf8');
  
  // Check for CSS link
  if (content.includes('_next/static/css')) {
    console.log('✅ CSS files referenced in HTML');
  } else {
    console.error('❌ CSS files not found in HTML');
    allGood = false;
  }
  
  // Check for JS scripts
  if (content.includes('_next/static/chunks')) {
    console.log('✅ JavaScript files referenced in HTML');
  } else {
    console.error('❌ JavaScript files not found in HTML');
    allGood = false;
  }
  
  // Check for relative paths
  if (content.includes('./_next/')) {
    console.log('✅ Relative paths used (good for GitHub Pages)');
  } else {
    console.warn('⚠️  Absolute paths detected (may cause issues on GitHub Pages)');
  }
}

if (allGood) {
  console.log('\n🎉 Build test passed! Your portfolio is ready for deployment.');
  console.log('📁 Upload the contents of the "out" folder to GitHub Pages.');
} else {
  console.log('\n❌ Build test failed. Please check the issues above.');
  process.exit(1);
}
