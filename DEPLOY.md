# Wankelworld - Deployment Guide

## What Was Built

A complete, modern website rebuilt from your DrMaz.com archive:

**8 HTML Pages:**
- `index.html` - Homepage with hero section
- `mazda.html` - Complete Mazda rotary model history (Cosmo → RX-8)
- `rotary.html` - Technical deep-dive (10A through Renesis)
- `felix-wankel.html` - Biography of the inventor
- `aviation.html` - Rotary-powered aircraft & UAVs
- `memorabilia.html` - Die-cast models & collecting guide
- `gallery.html` - Photo gallery & motorsport heritage
- `links.html` - Forums, suppliers, clubs, resources

**Features:**
- Responsive design (mobile-friendly)
- Dark theme with Mazda Soul Red accents
- Smooth animations & scroll effects
- All original DrMaz.com images included
- No external dependencies (except Google Fonts)

## File Location

```
~/.openclaw/workspace/wankelworld/
├── public/              # All website files (deploy this folder)
│   ├── index.html
│   ├── mazda.html
│   ├── rotary.html
│   ├── felix-wankel.html
│   ├── aviation.html
│   ├── memorabilia.html
│   ├── gallery.html
│   ├── links.html
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   └── assets/
│       └── images/      # All original DrMaz.com images
├── package.json
├── README.md
└── .gitignore
```

## How to Deploy

### Option 1: GitHub → Netlify (Recommended)

1. **Create GitHub repo:**
   - Go to https://github.com/new
   - Name: `wankelworld`
   - Don't initialize with README
   - Create repository

2. **Push from terminal:**
   ```bash
   cd ~/.openclaw/workspace/wankelworld
   git branch -m main
   git remote add origin https://github.com/YOUR_USERNAME/wankelworld.git
   git push -u origin main
   ```

3. **Deploy to Netlify:**
   - Go to https://app.netlify.com
   - "Add new site" → "Import from GitHub"
   - Select your wankelworld repo
   - Build settings: Leave default (no build command needed)
   - Publish directory: `public`
   - Deploy!

4. **Connect domain:**
   - In Netlify: Domain settings → Add custom domain
   - Enter: `wankelworld.com`
   - Update DNS with your registrar to point to Netlify

### Option 2: Traditional Web Hosting

Simply upload the contents of `public/` folder to your web host's public_html directory.

### Option 3: GitHub Pages

1. Push to GitHub (as above)
2. Go to repo Settings → Pages
3. Source: Deploy from a branch
4. Branch: main, Folder: /public
5. Your site will be at: https://yourusername.github.io/wankelworld

## Images Included

All original images from DrMaz.com:
- `drmaz_loggo_needle_001.jpg` - The classic "incurable addiction" logo
- `drmazfront1111.JPG` - Collage with 787B, RX-7s, Felix Wankel
- `Dr_maz_title.JPG` - Purple Dr Maz's title graphic
- Plus flags, buttons, model kit images, and more

## Next Steps

1. ✅ Review the site locally (open `public/index.html` in browser)
2. ✅ Push to GitHub
3. ⬜ Deploy to your host
4. ⬜ Connect wankelworld.com domain
5. ⬜ Add more images to gallery as desired
6. ⬜ Set up contact form (if needed)

## Local Preview

```bash
cd ~/.openclaw/workspace/wankelworld
npx serve public
```

Then open http://localhost:3000

---

**Original:** DrMaz.com (circa 2003)
**Rebuilt:** Wankelworld (2026)
**Built by:** Monty for Stan O'Donnell
