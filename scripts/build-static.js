const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building static export for GitHub Pages...');

try {
  // Set production environment
  process.env.NODE_ENV = 'production';
  
  // Clean previous build
  if (fs.existsSync('out')) {
    fs.rmSync('out', { recursive: true, force: true });
  }
  if (fs.existsSync('.next')) {
    fs.rmSync('.next', { recursive: true, force: true });
  }

  // Build the project
  console.log('📦 Building Next.js project...');
  execSync('next build', { stdio: 'inherit' });

  // Fix asset paths for GitHub Pages
  console.log('🔧 Fixing asset paths for GitHub Pages...');
  fixAssetPaths();

  console.log('✅ Static export completed successfully!');
  console.log('📁 Static files are in the "out" directory');
  console.log('🌐 Ready for GitHub Pages deployment');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

function fixAssetPaths() {
  const indexPath = path.join('out', 'index.html');
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // Fix CSS paths
    content = content.replace(/href="\/_next\//g, 'href="./_next/');
    
    // Fix JS paths
    content = content.replace(/src="\/_next\//g, 'src="./_next/');
    
    // Fix image paths
    content = content.replace(/src="\/images\//g, 'src="./images/');
    
    // Fix font paths
    content = content.replace(/href="\/_next\/static\/media\//g, 'href="./_next/static/media/');
    
    // Fix any remaining absolute paths
    content = content.replace(/href="\//g, 'href="./');
    content = content.replace(/src="\//g, 'src="./');
    
    fs.writeFileSync(indexPath, content);
    console.log('✅ Fixed asset paths in index.html');
  }
  
  // Also fix any other HTML files
  const files = fs.readdirSync('out');
  files.forEach(file => {
    if (file.endsWith('.html') && file !== 'index.html') {
      const filePath = path.join('out', file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix all absolute paths
      content = content.replace(/href="\/_next\//g, 'href="./_next/');
      content = content.replace(/src="\/_next\//g, 'src="./_next/');
      content = content.replace(/src="\/images\//g, 'src="./images/');
      content = content.replace(/href="\/_next\/static\/media\//g, 'href="./_next/static/media/');
      content = content.replace(/href="\//g, 'href="./');
      content = content.replace(/src="\//g, 'src="./');
      
      fs.writeFileSync(filePath, content);
    }
  });
}
