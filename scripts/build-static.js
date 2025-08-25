const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building static export...');

try {
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

  console.log('✅ Static export completed successfully!');
  console.log('📁 Static files are in the "out" directory');
  console.log('🌐 You can now deploy the "out" folder to any static hosting service');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
