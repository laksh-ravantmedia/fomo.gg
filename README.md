# FOMO.gg - Landing Page

A high-performance, scalable single-page landing page built from Figma design with optimal code structure, responsive design, and animation-ready architecture.

## Tech Stack

- **Next.js 14** (App Router) - React framework with server components
- **TypeScript** - Strict type safety
- **CSS Modules** - Scoped styling with zero runtime overhead
- **Framer Motion** - 60fps animations
- **Geist Font** - Modern typography

## Architecture Highlights

- **No Tailwind dependency** - Custom CSS variables design system
- **Component-based** - Reusable atomic components
- **Mobile-first responsive** - 320px to 2560px+ breakpoints
- **Performance optimized** - < 150KB bundle target
- **Clean code** - < 200 lines per component, DRY principles

## Project Structure

```
app/                        # Next.js App Router
  ├── layout.tsx           # Root layout with fonts
  ├── page.tsx             # Main landing page
  └── globals.css          # CSS variables + design system

components/
  ├── layout/              # Navigation, Footer
  ├── sections/            # Page sections (Hero, Ticker, etc.)
  └── ui/                  # Reusable components (Button, Card, etc.)

lib/
  ├── constants/           # Mock data, assets
  ├── types/               # TypeScript interfaces
  └── utils/               # Animation variants
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Implementation Status

✅ **All 12 Sections:** Complete landing page implementation
✅ **Performance:** Optimized with Next.js Image, code splitting, React.memo
✅ **Accessibility:** WCAG 2.1 AA compliant with focus states and ARIA labels
✅ **SEO:** Enhanced meta tags, OG images, robots.txt, sitemap ready
✅ **Analytics:** Google Analytics integration ready (needs GA ID)
✅ **Documentation:** Complete component docs, dev guide, deployment guide
✅ **Production Ready:** Fully optimized and ready for deployment

## Responsive Breakpoints

- **Mobile:** 320-639px (single column, stacked)
- **Tablet:** 640-1023px (2-column grids)
- **Desktop:** 1024-1439px (3-column grids)
- **Desktop XL:** 1440px+ (design specs)

## Performance Goals

- **FCP:** < 1.2s
- **LCP:** < 2.5s
- **TTI:** < 3.5s
- **CLS:** < 0.1
- **Bundle:** < 150KB initial JS

## Design System

All styling uses CSS variables defined in `app/globals.css`:
- Colors (dark theme with purple/blue accents)
- Spacing (8px base scale)
- Typography (Geist font family)
- Border radius, shadows, transitions

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Documentation

- **[Component Documentation](./COMPONENTS.md)** - Detailed component API and usage
- **[Development Guide](./DEVELOPMENT.md)** - Development workflow and best practices
- **[Deployment Guide](./DEPLOYMENT.md)** - Production deployment instructions

## Build & Deploy

Production build:

```bash
npm run build
npm start
```

Deploy to Vercel (recommended), Netlify, or any Next.js-compatible platform. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Performance Metrics

**Current Status:**
- ✅ Next.js Image optimization enabled
- ✅ Dynamic imports for code splitting
- ✅ React.memo on reusable components
- ✅ Framer Motion with viewport detection
- ✅ CSS Modules with zero runtime overhead
- ✅ Reduced motion support

**Target Metrics (Lighthouse):**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95
