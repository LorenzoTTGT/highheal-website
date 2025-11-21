# Quick Start Guide

## View Your Site Locally

The development server is already running at:
👉 **http://localhost:3000**

Open this URL in your browser to see your site!

## What You'll See

### Homepage (/)
- HIGH HEAL header with social links
- Grid of releases (currently showing "Eggs" by THELIA)
- Click on a release to view details

### Release Page (/release/eggs)
- Large artwork display
- Linktree-style platform buttons
- Full tracklist
- Release info and credits

## Making Changes

### Add a New Release

1. **Add artwork image**
   ```bash
   # Place your image in:
   public/images/your-release-artwork.jpg
   ```

2. **Add release data**
   Edit `data/releases.ts` and add a new object to the `releases` array:
   ```typescript
   {
     id: 'your-release-slug',
     title: 'Release Title',
     artist: 'Artist Name',
     artwork: '/images/your-release-artwork.jpg',
     description: 'Release description...',
     releaseDate: 'Month Day, Year',
     credits: 'Credits text...',
     tracks: [
       { number: 1, title: 'Track Name', duration: '03:30' },
       // ... more tracks
     ],
     links: [
       { platform: 'Bandcamp', url: 'https://...', icon: '🎵' },
       // ... more platforms
     ]
   }
   ```

3. **Save and refresh** - Changes appear automatically!

### Update Platform Links

Edit the `links` array in `data/releases.ts`:
```typescript
links: [
  {
    platform: 'Spotify',
    url: 'https://open.spotify.com/album/YOUR_ALBUM_ID',
    icon: '🎧'
  },
  // Add more platforms...
]
```

### Change Colors

Edit `app/globals.css`:
```css
:root {
  --background: #0a0a0a;  /* Dark background */
  --foreground: #ededed;  /* Light text */
}
```

Or use Tailwind classes in your components:
- `bg-[#1a1a1a]` - Background colors
- `text-white` - Text colors
- `hover:bg-[#2a2a2a]` - Hover states

## Deploy to Vercel

### Quick Deploy
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

# 2. Go to vercel.com
# 3. Import your repository
# 4. Click "Deploy"
```

### Add Your Domain
1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add `high-heal.com`
4. Follow DNS instructions

See `DEPLOYMENT.md` for detailed instructions.

## Useful Commands

```bash
npm run dev      # Start development (already running!)
npm run build    # Test production build
npm run start    # Run production server locally
npm run lint     # Check code quality
```

## Project Structure

```
📁 app/
  ├── page.tsx              ← Homepage
  ├── layout.tsx            ← Site-wide layout
  └── release/[id]/
      └── page.tsx          ← Individual release pages

📁 data/
  └── releases.ts           ← All your release data

📁 public/
  └── images/               ← Your artwork images
```

## Getting Help

- 📖 Read `PROJECT_SUMMARY.md` for full project overview
- 🚀 Read `DEPLOYMENT.md` for deployment instructions
- 📝 Read `README.md` for technical details

## Stop the Server

Press `Ctrl+C` in the terminal where the dev server is running.

## Restart the Server

```bash
npm run dev
```

---

🎵 **Your HIGH HEAL website is ready to go!**
