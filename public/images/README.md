# Image Assets Organization

This folder contains all static images and media assets for the FOMO.gg landing page.

## Folder Structure

```
public/images/
├── hero/              # Hero section card images
│   ├── card-01.png
│   ├── card-02.png
│   ├── card-03.png
│   ├── card-04.png
│   ├── card-05.png
│   ├── card-06.png
│   └── card-07.png
│
├── icons/             # App icons and favicons
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   └── android-chrome-512x512.png
│
├── app-stores/        # App store badges
│   ├── app-store-icon.png
│   ├── play-store-icon.png
│   └── google-play-logo.png
│
├── crypto/            # Cryptocurrency logos/avatars
│   ├── btc.png
│   ├── eth.png
│   ├── sol.png
│   └── ... (other coin logos)
│
└── og/                # Social media sharing images
    └── og-image.png   # 1200x630px for Open Graph
```

## Image Specifications

### Hero Cards
- **Format:** PNG or WebP
- **Dimensions:** ~204x646px (various heights)
- **Optimization:** Compress to < 100KB each
- **Naming:** `card-01.png`, `card-02.png`, etc.

### Icons/Favicons
- **favicon.ico:** 32x32px
- **apple-touch-icon.png:** 180x180px
- **android-chrome-192x192.png:** 192x192px
- **android-chrome-512x512.png:** 512x512px

### App Store Badges
- **Format:** PNG with transparency
- **Dimensions:** 
  - App Store icon: ~20x24px
  - Play Store icon: ~21x24px
  - Google Play logo: ~74x15px

### Crypto Logos
- **Format:** PNG with transparency or WebP
- **Dimensions:** 48x48px or 64x64px
- **Naming:** Use ticker symbol (lowercase): `btc.png`, `eth.png`

### OG Image
- **Format:** PNG or JPEG
- **Dimensions:** 1200x630px (exact)
- **Size:** < 300KB
- **Purpose:** Social media sharing (Twitter, Facebook, LinkedIn)

## Current Setup

**Note:** The app currently uses remote Figma URLs for images. To optimize performance:

1. Download images from Figma
2. Optimize them (compress, convert to WebP)
3. Save to appropriate folders above
4. Update image paths in components

## Optimization Tools

### Manual Tools
- [TinyPNG](https://tinypng.com) - PNG/JPEG compression
- [Squoosh](https://squoosh.app) - Convert to WebP/AVIF
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

### CLI Tools
```bash
# Install sharp for batch conversion
npm install -g sharp-cli

# Convert to WebP
sharp -i hero/*.png -o hero/ -f webp -q 85

# Resize images
sharp -i crypto/*.png -o crypto/ --resize 48
```

## Usage in Components

```tsx
import Image from 'next/image';

// Local image
<Image 
  src="/images/hero/card-01.png"
  alt="Description"
  width={204}
  height={646}
  priority
/>

// Or using require for better type safety
<Image 
  src={require('@/public/images/hero/card-01.png')}
  alt="Description"
  priority
/>
```

## Migration from Figma URLs

Current Figma URLs in use:
- Hero cards: 7 images
- App Store icon
- Play Store icon
- Google Play logo

**Steps to migrate:**
1. Download each image from Figma
2. Optimize and convert to WebP
3. Place in appropriate folder
4. Update imports in components
5. Test all images load correctly
6. Remove Figma URLs from `next.config.mjs`

## Best Practices

1. **Always use Next.js Image component** for automatic optimization
2. **Provide width and height** to prevent layout shift
3. **Use WebP/AVIF** for better compression
4. **Lazy load below-fold images** (don't use `priority`)
5. **Add descriptive alt text** for accessibility
6. **Keep file sizes small** (< 100KB for most images)
7. **Use descriptive filenames** (kebab-case)

## Need Help?

- Check the [Next.js Image Optimization docs](https://nextjs.org/docs/app/api-reference/components/image)
- Review `DEVELOPMENT.md` for image usage guidelines
