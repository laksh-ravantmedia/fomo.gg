# Component Documentation

## UI Components

### Button (`components/ui/Button/`)
**Purpose:** Reusable button component with variants for app stores and primary actions.

**Variants:**
- `app-store` - Apple App Store download button with icon
- `play-store` - Google Play Store download button with icon  
- `primary` - Standard purple gradient button

**Props:**
- `variant`: Button style variant
- `children`: Button content
- `onClick`: Click handler function
- `className`: Additional CSS classes

**Usage:**
```tsx
import { AppStoreButton, PlayStoreButton, Button } from '@/components/ui/Button/Button';

<AppStoreButton />
<PlayStoreButton />
<Button variant="primary" onClick={handleClick}>Click Me</Button>
```

---

### Card (`components/ui/Card/`)
**Purpose:** Flexible card container with glow effects and style variants.

**Variants:**
- `default` - Standard card with subtle border
- `step` - Cards for step-by-step processes (hover lift effect)
- `metric` - Small metric display cards
- `token` - Token/coin display cards

**Props:**
- `variant`: Card style variant (default: 'default')
- `glowColor`: Optional glow color (hex or rgb)
- `children`: Card content
- `className`: Additional CSS classes

**Usage:**
```tsx
import { Card } from '@/components/ui/Card/Card';

<Card variant="step" glowColor="#8b5cf6">
  <h3>Step 1</h3>
  <p>Content here</p>
</Card>
```

---

### GlowEffect (`components/ui/GlowEffect/`)
**Purpose:** Animated glow/gradient background effect.

**Props:**
- `color`: Glow color - 'purple' | 'blue' | 'green'
- `size`: Effect size - 'sm' | 'md' | 'lg'
- `intensity`: Opacity (0-1)
- `className`: Additional CSS classes

**Usage:**
```tsx
import { GlowEffect } from '@/components/ui/GlowEffect/GlowEffect';

<GlowEffect color="purple" size="lg" intensity={0.3} />
```

---

## Layout Components

### Navigation (`components/layout/Navigation/`)
**Purpose:** Fixed header navigation with logo.

**Features:**
- Fixed positioning
- Backdrop blur effect
- Responsive height (130px desktop, 80px mobile)

---

### Footer (`components/layout/Footer/`)
**Purpose:** Page footer with logo, links, and copyright.

**Features:**
- Responsive layout (horizontal desktop, stacked mobile)
- Navigation links
- Accessible ARIA labels

---

## Section Components

### HeroSection (`components/sections/HeroSection/`)
**Purpose:** Landing page hero with animated card grid and CTA buttons.

**Sub-components:**
- `HeroCardGrid` - Animated floating cards background
- `HeroContent` - Title, subtitle, and download buttons

**Features:**
- Parallax card animations
- Gradient text
- Glow effects
- Priority image loading

---

### AssetTicker (`components/sections/AssetTicker/`)
**Purpose:** Horizontal crypto asset ticker with connection lines.

**Sub-components:**
- `TickerChip` - Individual crypto asset card

**Props (TickerChip):**
- `asset`: CryptoAsset object
- `index`: Index for stagger animation

---

### HowItWorks (`components/sections/HowItWorks/`)
**Purpose:** 3-step process explanation section.

**Data:** Uses `PROCESS_STEPS` from `lib/constants/mockData.ts`

**Features:**
- Scroll-triggered animations
- Step cards with numbering
- Responsive grid (3-col → 1-col)

---

### CreateCoin (`components/sections/CreateCoin/`)
**Purpose:** Visual showcase of coin creation with bonding curve.

**Features:**
- Animated bonding curve progress bar
- Metrics display (Price, Volume, Market Cap)
- Rotating avatar glow effect

---

### TradingCoins (`components/sections/TradingCoins/`)
**Purpose:** Display trending coins with price changes.

**Data:** Uses `TRENDING_TOKENS` from `lib/constants/mockData.ts`

**Features:**
- Token cards with hover effects
- Positive/negative price indicators
- Market cap display

---

### Momentum (`components/sections/Momentum/`)
**Purpose:** Feature showcase with animated chart visualization.

**Features:**
- Animated bar chart
- SVG trend line animation
- Feature list

---

### TradeTools (`components/sections/TradeTools/`)
**Purpose:** Token grid with buy/sell actions.

**Features:**
- Buy/sell buttons per token
- Price display with change indicator
- Responsive grid layout

---

### FastTrading (`components/sections/FastTrading/`)
**Purpose:** Feature highlights for trading speed.

**Features:**
- 3 feature cards
- Icon-based display
- Hover lift effects

---

### Discovery (`components/sections/Discovery/`)
**Purpose:** Discovery feature with pulse animation.

**Features:**
- Animated pulse rings
- Search icon with glow
- Feature breakdown

---

### InstallCTA (`components/sections/InstallCTA/`)
**Purpose:** Call-to-action for app downloads.

**Features:**
- App Store & Play Store buttons
- Gradient background effect
- Centered layout

---

## Utilities

### Animation Variants (`lib/utils/animations.ts`)
**Exports:**
- `fadeInUp` - Fade in with upward motion
- `fadeIn` - Simple fade in
- `slideInLeft` - Slide from left
- `slideInRight` - Slide from right
- `staggerContainer` - Container with staggered children
- `scaleIn` - Scale up animation
- `floatingAnimation` - Continuous floating motion

**Usage:**
```tsx
import { fadeInUp } from '@/lib/utils/animations';

<motion.div variants={fadeInUp} initial="hidden" whileInView="visible">
  Content
</motion.div>
```

---

### useReducedMotion Hook (`lib/utils/useReducedMotion.ts`)
**Purpose:** Detect user's reduced motion preference.

**Returns:** boolean

**Usage:**
```tsx
import { useReducedMotion } from '@/lib/utils/useReducedMotion';

const prefersReducedMotion = useReducedMotion();
const shouldAnimate = !prefersReducedMotion;
```

---

### Analytics (`lib/analytics.ts`)
**Purpose:** Analytics tracking utilities (placeholder for GA).

**Methods:**
- `pageView(url)` - Track page views
- `event(action, params)` - Track custom events
- `trackButtonClick(name, location)` - Track button clicks
- `trackSectionView(section)` - Track section views
- `trackDownloadClick(platform)` - Track app downloads

---

## Type Definitions (`lib/types/index.ts`)

```typescript
interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  price: string;
  marketCap: string;
  athValue: string;
  avatar: string;
  glowColor: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface TokenCard {
  name: string;
  symbol: string;
  price: string;
  change: string;
  marketCap: string;
  avatar: string;
}
```

---

## Performance Optimizations

1. **Dynamic Imports:** Below-fold sections use `next/dynamic` for code splitting
2. **React.memo:** Pure components wrapped for re-render prevention
3. **Next.js Image:** All images use optimized Image component
4. **Framer Motion:** Animations use `whileInView` for viewport-triggered effects
5. **CSS Modules:** Scoped styles with automatic tree-shaking
