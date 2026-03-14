# Deployment Guide

## Production Deployment

### Vercel (Recommended)

#### Initial Setup

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository

2. **Configure Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables**
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (Google Analytics ID)
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy

#### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain: `fomo.gg`
3. Configure DNS:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Netlify

#### Deployment Steps

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import from Git"
   - Select your repository

2. **Build Settings**
   - Base directory: (leave empty)
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add: `NEXT_PUBLIC_GA_ID`

4. **Deploy**
   - Click "Deploy site"

### Self-Hosted (VPS/Server)

#### Prerequisites

- Node.js 18+ installed
- PM2 or similar process manager
- Nginx for reverse proxy

#### Steps

1. **Build Application**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   # Using PM2
   pm2 start npm --name "fomo-gg" -- start
   pm2 save
   pm2 startup
   ```

3. **Nginx Configuration**
   ```nginx
   server {
       listen 80;
       server_name fomo.gg www.fomo.gg;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **SSL Certificate**
   ```bash
   sudo certbot --nginx -d fomo.gg -d www.fomo.gg
   ```

## Environment Variables

### Required

```env
# Analytics (Optional but recommended)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Adding to Vercel

```bash
vercel env add NEXT_PUBLIC_GA_ID
```

### Adding to Netlify

1. Site settings → Environment variables
2. Add variable
3. Redeploy site

## Post-Deployment Checklist

### Functionality

- [ ] Homepage loads correctly
- [ ] All sections render properly
- [ ] Navigation works
- [ ] Animations play smoothly
- [ ] Images load correctly
- [ ] Buttons are clickable
- [ ] No console errors

### Performance

- [ ] Run Lighthouse audit
- [ ] Performance score > 90
- [ ] FCP < 1.2s
- [ ] LCP < 2.5s
- [ ] CLS < 0.1

### SEO

- [ ] Meta tags present
- [ ] OG image loads
- [ ] robots.txt accessible
- [ ] Sitemap accessible (if generated)
- [ ] Google Search Console verified

### Accessibility

- [ ] WCAG 2.1 AA compliant
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Focus states visible
- [ ] Color contrast sufficient

### Mobile

- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Touch targets > 44px
- [ ] No horizontal scroll
- [ ] Responsive layouts work

### Cross-Browser

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

## Analytics Setup

### Google Analytics

1. **Create GA4 Property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Add to Environment**
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Verify Tracking**
   - Open site
   - Check GA4 Realtime reports
   - Confirm events are being tracked

### Enable Analytics Code

Uncomment the Google Analytics script in `app/layout.tsx`:

```tsx
import Script from 'next/script';

// Add inside <body>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

## Monitoring

### Uptime Monitoring

Recommended services:
- [UptimeRobot](https://uptimerobot.com) - Free
- [Pingdom](https://pingdom.com) - Paid
- [StatusCake](https://statuscake.com) - Free tier

### Error Tracking

Consider adding:
- [Sentry](https://sentry.io) - Error tracking
- [LogRocket](https://logrocket.com) - Session replay

## Performance Optimization

### CDN

Vercel/Netlify automatically provide CDN. For self-hosted:
- CloudFlare (free)
- AWS CloudFront
- Fastly

### Caching Headers

Configured in `next.config.mjs`:

```js
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, must-revalidate',
        },
      ],
    },
  ];
}
```

### Image Optimization

Next.js automatically optimizes images. Ensure:
- WebP format enabled (default)
- Responsive sizes configured
- Lazy loading for below-fold images

## Rollback Strategy

### Vercel

1. Go to Deployments
2. Find previous working deployment
3. Click "Promote to Production"

### Netlify

1. Go to Deploys
2. Find previous deployment
3. Click "Publish deploy"

### Self-Hosted

```bash
# Using PM2
pm2 stop fomo-gg
git checkout <previous-commit>
npm install
npm run build
pm2 restart fomo-gg
```

## Troubleshooting

### Build Fails

1. Check error logs
2. Verify dependencies installed
3. Ensure Node.js version matches (18+)
4. Clear cache and rebuild

### Images Not Loading

1. Check `next.config.mjs` remote patterns
2. Verify image URLs are accessible
3. Check network tab for 403/404 errors

### 404 on Refresh

Ensure hosting provider supports SPA routing:
- Vercel: Automatic
- Netlify: Add `_redirects` file
  ```
  /*    /index.html   200
  ```

### Slow Performance

1. Run Lighthouse audit
2. Check bundle size
3. Verify dynamic imports working
4. Check for render-blocking resources

## Security

### HTTPS

- Required for production
- Vercel/Netlify: Automatic
- Self-hosted: Use Let's Encrypt

### Headers

Add security headers in `next.config.mjs`:

```js
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ];
}
```

## Support

For deployment issues:
- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Review platform-specific guides
- Check error logs
- Contact support team
