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

✅ **Phase 1:** Foundation (CSS variables, folder structure)
✅ **Phase 2:** Core UI components (Button, Card, GlowEffect)
✅ **Phase 3:** Hero Section with animated card grid
✅ **Phase 4:** Asset Ticker with crypto chips
✅ **Phase 5:** How It Works section
🚧 **In Progress:** Additional content sections
⏳ **Pending:** Polish, optimization, production ready

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

## Build & Deploy

Production build:

```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any Next.js-compatible platform.
