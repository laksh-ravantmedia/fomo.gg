# Development Guide

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/laksh-ravantmedia/fomo.gg.git
cd fomo.gg-landing-page

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
fomo.gg-landing-page/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main landing page
│   ├── globals.css          # Global styles & CSS variables
│   └── robots.txt           # SEO robots file
│
├── components/
│   ├── layout/              # Layout components
│   │   ├── Navigation/      # Header navigation
│   │   └── Footer/          # Page footer
│   │
│   ├── sections/            # Page sections (Hero, Ticker, etc.)
│   │   ├── HeroSection/
│   │   ├── AssetTicker/
│   │   ├── HowItWorks/
│   │   ├── CreateCoin/
│   │   ├── TradingCoins/
│   │   ├── Momentum/
│   │   ├── TradeTools/
│   │   ├── FastTrading/
│   │   ├── Discovery/
│   │   └── InstallCTA/
│   │
│   └── ui/                  # Reusable UI components
│       ├── Button/
│       ├── Card/
│       └── GlowEffect/
│
├── lib/
│   ├── constants/           # Mock data & constants
│   ├── types/               # TypeScript interfaces
│   ├── utils/               # Utility functions
│   └── analytics.ts         # Analytics helpers
│
└── public/                  # Static assets
    ├── images/
    ├── fonts/
    └── site.webmanifest
```

## Styling Approach

### CSS Modules

All components use CSS Modules for scoped styling:

```tsx
// Component.tsx
import styles from './Component.module.css';

export function Component() {
  return <div className={styles.container}>...</div>;
}
```

### CSS Variables

Design system defined in `app/globals.css`:

```css
:root {
  --color-bg-primary: #0a0a0f;
  --color-accent-purple: #8b5cf6;
  --space-4: 2rem;
  --font-size-lg: 1.125rem;
}
```

Use variables in CSS Modules:

```css
.container {
  background: var(--color-bg-primary);
  padding: var(--space-4);
  font-size: var(--font-size-lg);
}
```

## Adding New Sections

### 1. Create Section Component

```bash
mkdir components/sections/NewSection
touch components/sections/NewSection/NewSection.tsx
touch components/sections/NewSection/NewSection.module.css
```

### 2. Component Template

```tsx
// NewSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './NewSection.module.css';

export function NewSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Section Title</h2>
        {/* Content */}
      </div>
    </section>
  );
}
```

### 3. Add to Main Page

```tsx
// app/page.tsx
import { NewSection } from '@/components/sections/NewSection/NewSection';

// Or for below-fold sections:
const NewSection = dynamic(() => import('@/components/sections/NewSection/NewSection')
  .then(mod => ({ default: mod.NewSection })));
```

## Performance Guidelines

### Image Optimization

Always use Next.js Image component:

```tsx
import Image from 'next/image';

<Image 
  src="/path/to/image.png"
  alt="Description"
  width={200}
  height={200}
  priority={false}  // true for above-fold images
  quality={85}
  sizes="(max-width: 640px) 120px, 200px"
/>
```

### Animation Best Practices

Use Framer Motion with viewport detection:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Code Splitting

Dynamically import below-fold sections:

```tsx
const HeavySection = dynamic(() => 
  import('@/components/sections/HeavySection/HeavySection')
    .then(mod => ({ default: mod.HeavySection }))
);
```

### React Performance

Memoize pure components:

```tsx
export const Component = React.memo(function Component(props) {
  // Component logic
});
```

## Scripts

```bash
# Development
npm run dev          # Start dev server on localhost:3000

# Production Build
npm run build        # Create optimized production build
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

## TypeScript

### Adding New Types

```typescript
// lib/types/index.ts
export interface NewType {
  id: string;
  name: string;
  // ... other fields
}
```

### Using Types

```tsx
import { NewType } from '@/lib/types';

interface ComponentProps {
  data: NewType;
}
```

## Responsive Design

### Breakpoints

```css
/* Mobile: 320-639px (default styles) */
.container {
  padding: var(--space-2);
}

/* Tablet: 640-1023px */
@media (min-width: 640px) {
  .container {
    padding: var(--space-3);
  }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  .container {
    padding: var(--space-6);
  }
}
```

### Testing Responsive

Test at these widths:
- 375px (iPhone SE)
- 393px (iPhone 14 Pro)
- 768px (iPad)
- 1024px (Desktop)
- 1440px (Desktop XL)

## Analytics Integration

### Adding Event Tracking

```tsx
import { analytics } from '@/lib/analytics';

function handleClick() {
  analytics.trackButtonClick('Button Name', 'Section Name');
  // ... other logic
}
```

### Available Methods

- `analytics.pageView(url)` - Track page views
- `analytics.event(action, params)` - Custom events
- `analytics.trackButtonClick(name, location)` - Button clicks
- `analytics.trackSectionView(section)` - Section views
- `analytics.trackDownloadClick(platform)` - App downloads

## Common Issues

### Images Not Loading

Ensure external domains are configured in `next.config.mjs`:

```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'www.figma.com',
      pathname: '/api/mcp/asset/**',
    },
  ],
}
```

### CSS Not Applying

1. Ensure CSS Module is imported correctly
2. Check class name spelling
3. Verify CSS file exists in same directory

### Animation Not Working

1. Check component has `'use client'` directive
2. Verify Framer Motion is installed
3. Ensure `whileInView` has `viewport={{ once: true }}`

## Git Workflow

### Branch Strategy

```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes and commit
git add .
git commit -m "feat: add new section"

# Push to remote
git push origin feature/new-section
```

### Commit Convention

Use conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Code restructuring
- `perf:` - Performance improvement
- `test:` - Tests

## Debugging

### Dev Tools

```bash
# Check bundle size
npm run build
# Review .next/static output

# Type checking
npx tsc --noEmit

# Check for unused dependencies
npx depcheck
```

### Performance Profiling

1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit
4. Review metrics (FCP, LCP, CLS, etc.)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [CSS Modules Guide](https://github.com/css-modules/css-modules)
- [React Performance](https://react.dev/learn/render-and-commit)
