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
  // Get repository name from package.json or environment
  const repoName = process.env.REPO_NAME || 'portofolio';
  const basePath = repoName ? `/${repoName}` : '';
  
  console.log(`🔧 Fixing asset paths for GitHub Pages (base path: ${basePath || 'root'})`);
  
  const processHtmlFile = (filePath) => {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      if (basePath) {
        // For GitHub Pages with subdirectory
        // Fix all asset paths to include the basePath prefix
        content = content.replace(/href="\.\/_next\//g, `href="${basePath}/_next/`);
        content = content.replace(/src="\.\/_next\//g, `src="${basePath}/_next/`);
        content = content.replace(/src="\.\/images\//g, `src="${basePath}/images/`);
        content = content.replace(/href="\.\/_next\/static\/media\//g, `href="${basePath}/_next/static/media/`);
        
        // Fix absolute paths that start with /
        content = content.replace(/href="\/_next\//g, `href="${basePath}/_next/`);
        content = content.replace(/src="\/_next\//g, `src="${basePath}/_next/`);
        content = content.replace(/src="\/images\//g, `src="${basePath}/images/`);
        content = content.replace(/href="\/_next\/static\/media\//g, `href="${basePath}/_next/static/media/`);
        
        // Fix any remaining absolute paths
        content = content.replace(/href="\/(?!portofolio)/g, `href="${basePath}/`);
        content = content.replace(/src="\/(?!portofolio)/g, `src="${basePath}/`);
      } else {
        // For root domain deployment (ensure relative paths)
        content = content.replace(/href="\/_next\//g, 'href="./_next/');
        content = content.replace(/src="\/_next\//g, 'src="./_next/');
        content = content.replace(/src="\/images\//g, 'src="./images/');
        content = content.replace(/href="\/_next\/static\/media\//g, 'href="./_next/static/media/');
        content = content.replace(/href="\//g, 'href="./');
        content = content.replace(/src="\//g, 'src="./');
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed asset paths in ${path.basename(filePath)}`);
    }
  };

  processHtmlFile(path.join('out', 'index.html'));
  
  const files = fs.readdirSync('out');
  files.forEach(file => {
    if (file.endsWith('.html') && file !== 'index.html') {
      processHtmlFile(path.join('out', file));
    }
  });
}
