const fs = require('fs');
const path = require('path');

console.log('🧪 Testing GitHub Pages compatibility...');

const outDir = path.join(__dirname, '..', 'out');
const indexPath = path.join(outDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('❌ index.html not found. Run "npm run export" first.');
  process.exit(1);
}

const content = fs.readFileSync(indexPath, 'utf8');

// Check for GitHub Pages paths
const hasGitHubPagesPaths = content.includes('/portofolio/_next/');
const hasRelativePaths = content.includes('./_next/');

if (hasGitHubPagesPaths) {
  console.log('✅ GitHub Pages paths detected (/portofolio/_next/)');
  console.log('✅ Ready for GitHub Pages deployment');
} else if (hasRelativePaths) {
  console.log('✅ Relative paths detected (./_next/)');
  console.log('⚠️  This will work for root domain deployment');
  console.log('💡 For GitHub Pages subdirectory, use: REPO_NAME=portofolio npm run export');
} else {
  console.error('❌ No valid asset paths found');
  process.exit(1);
}

// Check for specific assets
const requiredAssets = [
  '_next/static/css',
  '_next/static/chunks',
  'images/projects'
];

let allAssetsFound = true;
requiredAssets.forEach(asset => {
  const assetPath = path.join(outDir, asset);
  if (fs.existsSync(assetPath)) {
    console.log(`✅ ${asset} exists`);
  } else {
    console.error(`❌ ${asset} missing`);
    allAssetsFound = false;
  }
});

if (allAssetsFound) {
  console.log('\n🎉 All assets are present!');
  console.log('📁 Upload the contents of the "out" folder to GitHub Pages.');
} else {
  console.log('\n❌ Some assets are missing. Please check the build.');
  process.exit(1);
}
