# HIGH HEAL - Music Label Website

A mobile-first music label website for HIGH HEAL, featuring release pages with Linktree-style platform links.

## Features

- Mobile-first responsive design
- Individual release pages with artwork and platform links
- Linktree-style streaming platform buttons
- Static site generation for optimal performance
- TypeScript and Tailwind CSS
- Ready for Vercel deployment

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Deployment

This site is configured for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure your custom domain (high-heal.com) in Vercel settings
4. Deploy!

Vercel will automatically:
- Build your Next.js application
- Deploy to edge locations worldwide
- Serve from the Paris region (cdg1) as configured

## Adding New Releases

Edit the `data/releases.ts` file to add new releases. Each release should include:

- `id`: URL-friendly identifier
- `title`: Release title
- `artist`: Artist name
- `artwork`: Image URL or path
- `description`: Release description
- `releaseDate`: Release date string
- `credits`: Credits text
- `tracks`: Array of tracks with number, title, and duration
- `links`: Array of streaming platform links

## Future CMS Integration

The data structure is ready for integration with a headless CMS. You can easily replace the hardcoded data in `data/releases.ts` with API calls to your CMS of choice (Contentful, Sanity, Strapi, etc.).

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Vercel (deployment)

## License

© 2025 HIGH HEAL. All rights reserved.
