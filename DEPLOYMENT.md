# Deployment Guide for HIGH HEAL Website

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: HIGH HEAL website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js configuration
   - Click "Deploy"

3. **Configure Custom Domain**
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add your domain: `high-heal.com`
   - Add `www.high-heal.com` as well (optional)
   - Follow Vercel's instructions to update your domain's DNS records

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

   Follow the prompts to link your project and deploy.

3. **Configure Domain**
   ```bash
   vercel domains add high-heal.com
   ```

## DNS Configuration

Update your domain registrar's DNS settings:

### For root domain (high-heal.com):
- Type: A
- Name: @
- Value: 76.76.21.21

### For www subdomain:
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

Vercel will provide specific DNS instructions in the dashboard.

## Environment Variables

Currently, the site doesn't require any environment variables. If you add external APIs or services later:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy for changes to take effect

## Post-Deployment Checklist

- [ ] Verify homepage loads at https://high-heal.com
- [ ] Test release page navigation
- [ ] Check all platform links work correctly
- [ ] Test on mobile devices
- [ ] Test on desktop browsers
- [ ] Verify images load correctly
- [ ] Check social media links in header
- [ ] Test 404 page

## Updating the Site

After making changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

Vercel will automatically deploy your changes.

## Performance Optimization

The site is already optimized with:
- Static Site Generation (SSG)
- Image optimization via Next.js Image component
- Tailwind CSS with production build purging
- Edge caching via Vercel

## Monitoring

Vercel provides built-in:
- Analytics (enable in project settings)
- Error tracking
- Performance metrics
- Deployment logs

Access these in the Vercel dashboard under your project.
