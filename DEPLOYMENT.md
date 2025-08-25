# Deployment Guide

## GitHub Pages Deployment

### Option 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Add portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy on push

### Option 2: Manual Deployment

1. **Build the static export**
   ```bash
   npm run export
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### Option 3: Manual Upload

1. **Build the static export**
   ```bash
   npm run export
   ```

2. **Upload to GitHub Pages**
   - Go to repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Upload the contents of the `out` folder

## Other Deployment Options

### Netlify
1. Drag and drop the `out` folder to Netlify
2. Or connect your GitHub repository

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect Next.js

### AWS S3
1. Upload the contents of `out` folder to an S3 bucket
2. Configure static website hosting

## Troubleshooting

### CSS Not Loading
- Make sure all asset paths are relative (starting with `./`)
- Check that `_next/static/css/` files are included

### Images Not Loading
- Verify image paths are correct
- Check that `images/` folder is included in deployment

### JavaScript Not Working
- Ensure all `_next/static/chunks/` files are deployed
- Check browser console for errors
