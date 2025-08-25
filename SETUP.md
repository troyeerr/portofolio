# Portfolio Setup Guide

## Prerequisites

You need to install Node.js to run this Next.js portfolio. Here are your options:

### Option 1: Install Node.js (Recommended)

1. **Download Node.js** from [https://nodejs.org/](https://nodejs.org/)
   - Choose the LTS version (Long Term Support)
   - Download the Windows installer (.msi file)

2. **Install Node.js**
   - Run the downloaded .msi file
   - Follow the installation wizard
   - Make sure to check "Add to PATH" during installation

3. **Verify Installation**
   - Open a new PowerShell/Command Prompt
   - Run: `node --version`
   - Run: `npm --version`

### Option 2: Use Node Version Manager (nvm) for Windows

1. **Install nvm-windows** from [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Install Node.js** using nvm:
   ```bash
   nvm install 18.17.0
   nvm use 18.17.0
   ```

## Running the Portfolio

Once Node.js is installed:

1. **Open PowerShell/Command Prompt** in the portfolio directory
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Open browser** and go to: [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Troubleshooting

### "npm is not recognized"
- Make sure Node.js is installed and added to PATH
- Restart your terminal after installation
- Try running `node --version` first

### Port already in use
- The default port is 3000
- If it's busy, Next.js will automatically use the next available port
- Check the terminal output for the actual URL

### Build errors
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run type-check`
- Run linting: `npm run lint`

## Project Structure

```
portofolio/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Skills.tsx     # Skills section
│   ├── Experience.tsx # Experience section
│   ├── Projects.tsx   # Projects section
│   ├── Contact.tsx    # Contact section
│   └── Footer.tsx     # Footer
├── package.json        # Dependencies
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Customization

After getting it running, you can customize:

1. **Personal Information**: Update content in component files
2. **Styling**: Modify `tailwind.config.js` for colors
3. **Projects**: Add your own projects in `components/Projects.tsx`
4. **Contact**: Update contact details in `components/Contact.tsx`

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Options
- Netlify
- AWS Amplify
- Docker

## Support

If you encounter issues:
1. Check the terminal for error messages
2. Ensure Node.js version is 18+ (`node --version`)
3. Try deleting `node_modules` and running `npm install` again
4. Check the Next.js documentation: [https://nextjs.org/docs](https://nextjs.org/docs)
