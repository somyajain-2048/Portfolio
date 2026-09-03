# 🎨 Design System & UI/UX Specification
## Somya Jain — Full Stack Developer Portfolio

> **Document Type:** Design Reference & Style Guide  
> **Version:** 1.0.0  
> **Last Updated:** August 2026  
> **Design Philosophy:** Luxury Minimalism · Dark-First · Recruiter-Focused

---

## 📐 Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Component Library](#component-library)
6. [Animation System](#animation-system)
7. [Section-by-Section Specs](#section-by-section-specs)
8. [Responsive Breakpoints](#responsive-breakpoints)
9. [Accessibility Standards](#accessibility-standards)
10. [Asset Guidelines](#asset-guidelines)

---

## 1. Design Philosophy

### Core Principles

| Principle         | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **Luxury First**  | Every element should feel premium — no cheap UI patterns                    |
| **Dark Default**  | Dark theme is the primary experience; light theme is a polished alternative |
| **Recruiter UX**  | Information hierarchy optimized for fast scanning by hiring managers        |
| **Motion Aware**  | Animations add depth, never distract. Purposeful, 60fps smooth              |
| **Accessible**    | WCAG 2.1 AA compliant. High contrast. Keyboard navigable                    |

### Visual Language

- **Glassmorphism** — frosted-glass surfaces with `backdrop-blur` for cards and modals
- **Gradient Borders** — subtle gold gradient borders on interactive elements
- **Layered Depth** — background → surface → card → element hierarchy
- **Micro-Interactions** — every hover, click, and transition is intentional

---

## 2. Color System

### 2.1 Dark Theme (Default)

```css
:root[data-theme="dark"] {
  /* Base */
  --color-bg:           #0f0b08;   /* Deep espresso black */
  --color-surface:      #1a1511;   /* Rich dark brown surface */
  --color-surface-2:    #221c15;   /* Elevated surface */
  --color-border:       #2e2419;   /* Subtle border */
  --color-border-glow:  #8b5e3c40; /* Glowing border accent */

  /* Brand */
  --color-primary:      #8b5e3c;   /* Primary brown */
  --color-primary-hover:#a0714d;   /* Hover state */
  --color-accent:       #d4a373;   /* Gold accent */
  --color-accent-light: #e8c99a;   /* Light gold */
  --color-accent-muted: #d4a37340; /* Muted gold for backgrounds */

  /* Text */
  --color-text:         #f5f5f5;   /* Primary text */
  --color-text-muted:   #b7b7b7;   /* Secondary text */
  --color-text-faint:   #6b6b6b;   /* Placeholder / disabled */

  /* Semantic */
  --color-success:      #6bcb77;
  --color-warning:      #ffd166;
  --color-error:        #ef476f;
  --color-info:         #4ecdc4;

  /* Gradients */
  --gradient-hero:    linear-gradient(135deg, #0f0b08 0%, #1a1511 50%, #0f0b08 100%);
  --gradient-gold:    linear-gradient(135deg, #8b5e3c, #d4a373);
  --gradient-surface: linear-gradient(180deg, #1a1511 0%, #0f0b08 100%);
  --gradient-card:    linear-gradient(135deg, rgba(26,21,17,0.9), rgba(15,11,8,0.95));

  /* Glass */
  --glass-bg:         rgba(26, 21, 17, 0.6);
  --glass-border:     rgba(212, 163, 115, 0.15);
  --glass-blur:       blur(16px);

  /* Shadows */
  --shadow-sm:  0 2px 8px rgba(0, 0, 0, 0.4);
  --shadow-md:  0 8px 24px rgba(0, 0, 0, 0.5);
  --shadow-lg:  0 16px 48px rgba(0, 0, 0, 0.6);
  --shadow-gold: 0 0 20px rgba(212, 163, 115, 0.2);
  --shadow-glow: 0 0 40px rgba(139, 94, 60, 0.3);
}
```

### 2.2 Light Theme

```css
:root[data-theme="light"] {
  /* Base */
  --color-bg:           #faf7f2;   /* Warm off-white */
  --color-surface:      #ffffff;   /* Pure white surface */
  --color-surface-2:    #f0ebe3;   /* Warm tinted surface */
  --color-border:       #e8ddd0;   /* Soft warm border */
  --color-border-glow:  #8b5e3c30;

  /* Brand (same) */
  --color-primary:      #8b5e3c;
  --color-primary-hover:#7a5233;
  --color-accent:       #d4a373;
  --color-accent-light: #c4894f;
  --color-accent-muted: #d4a37320;

  /* Text */
  --color-text:         #1a1a1a;
  --color-text-muted:   #666666;
  --color-text-faint:   #999999;

  /* Glass */
  --glass-bg:         rgba(255, 255, 255, 0.7);
  --glass-border:     rgba(139, 94, 60, 0.2);
  --glass-blur:       blur(16px);

  /* Shadows */
  --shadow-sm:  0 2px 8px rgba(139, 94, 60, 0.08);
  --shadow-md:  0 8px 24px rgba(139, 94, 60, 0.12);
  --shadow-lg:  0 16px 48px rgba(139, 94, 60, 0.16);
  --shadow-gold: 0 0 20px rgba(212, 163, 115, 0.25);
}
```

### 2.3 Color Usage Rules

| Context              | Use                            |
|----------------------|--------------------------------|
| Page background      | `--color-bg`                   |
| Cards, panels        | `--color-surface` + glass      |
| Elevated UI          | `--color-surface-2`            |
| CTAs, links          | `--color-accent` (#d4a373)     |
| Borders              | `--color-border` or gradient   |
| Body copy            | `--color-text`                 |
| Labels, meta info    | `--color-text-muted`           |
| Decorative accents   | `--color-primary` (#8b5e3c)    |

---

## 3. Typography

### 3.1 Font Stack

```css
/* Headings — Luxury serif feel with modern weight */
--font-display: 'Playfair Display', 'Georgia', serif;

/* Body & UI — Clean, highly legible */
--font-sans: 'Inter', 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;

/* Code & tech labels */
--font-mono: 'Fira Code', 'JetBrains Mono', 'Courier New', monospace;
```

**Google Fonts Import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
```

### 3.2 Type Scale

| Token          | Size      | Weight | Line Height | Usage                        |
|----------------|-----------|--------|-------------|------------------------------|
| `--text-xs`    | 0.75rem   | 400    | 1.5         | Labels, badges               |
| `--text-sm`    | 0.875rem  | 400    | 1.6         | Captions, metadata           |
| `--text-base`  | 1rem      | 400    | 1.7         | Body text                    |
| `--text-lg`    | 1.125rem  | 500    | 1.6         | Lead text, cards             |
| `--text-xl`    | 1.25rem   | 600    | 1.5         | Sub-headings                 |
| `--text-2xl`   | 1.5rem    | 700    | 1.3         | Section sub-titles           |
| `--text-3xl`   | 1.875rem  | 700    | 1.2         | Section headings             |
| `--text-4xl`   | 2.25rem   | 700    | 1.1         | Page-level headings          |
| `--text-5xl`   | 3rem      | 800    | 1.05        | Hero name                    |
| `--text-6xl`   | 3.75rem   | 800    | 1.0         | Large display text           |
| `--text-7xl`   | 4.5rem    | 800    | 0.95        | XL hero on desktop           |

### 3.3 Typography Rules

- **Section Headings**: Playfair Display, gradient gold underline accent
- **Section Sub-labels**: Inter 500, `--color-accent`, uppercase, 1px letter-spacing
- **Body Copy**: Inter 400, `--color-text`, 1.7 line height
- **Code snippets**: Fira Code, dark surface background, gold syntax highlights
- **Button Labels**: Inter 600, uppercase tracking for primary; normal for secondary

---

## 4. Spacing & Layout

### 4.1 Spacing Scale (Tailwind-compatible)

```
4px   → spacing-1  (tight micro-gaps)
8px   → spacing-2  (icon-label gaps)
12px  → spacing-3  (input padding)
16px  → spacing-4  (component padding)
24px  → spacing-6  (card inner padding)
32px  → spacing-8  (section sub-spacing)
48px  → spacing-12 (component separation)
64px  → spacing-16 (section padding Y)
96px  → spacing-24 (large section gaps)
128px → spacing-32 (hero padding)
```

### 4.2 Grid System

- **Max Container Width**: 1280px (80rem)
- **Page Padding X**: 24px (mobile) → 48px (tablet) → 80px (desktop)
- **Grid Columns**: 12-column grid
- **Gutter**: 24px

### 4.3 Section Layout Template

```
Section Padding Top:    96px (desktop) / 64px (tablet) / 48px (mobile)
Section Padding Bottom: 96px (desktop) / 64px (tablet) / 48px (mobile)
Section Label:          12px bottom margin
Section Heading:        24px bottom margin
Section Description:    48px bottom margin
Content Grid:           varies per section
```

---

## 5. Component Library

### 5.1 Buttons

#### Primary Button
```
Background:     gradient-gold (#8b5e3c → #d4a373)
Text:           #0f0b08
Border-radius:  8px
Padding:        12px 28px
Font:           Inter 600, 0.875rem
Transition:     all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

Hover:          scale(1.02), shadow-gold
Active:         scale(0.98)
```

#### Secondary / Ghost Button
```
Background:     transparent
Border:         1px solid var(--color-accent)
Text:           var(--color-accent)
Border-radius:  8px
Padding:        11px 27px

Hover:          bg var(--color-accent-muted), glow effect
```

#### Icon Button
```
Size:           44x44px (touch target)
Border-radius:  50% or 10px
Background:     var(--glass-bg)
Border:         1px solid var(--glass-border)
```

### 5.2 Cards

#### Glass Card
```css
.card-glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  box-shadow: var(--shadow-md);
}
```

#### Gradient Border Card
```css
.card-gradient-border {
  position: relative;
  background: var(--color-surface);
  border-radius: 16px;
}
.card-gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: var(--gradient-gold);
  -webkit-mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
```

#### Stat Card
```
Padding:        32px 24px
Center-aligned: number + label
Number:         --text-4xl, gradient-gold
Label:          --text-sm, --color-text-muted
Icon:           40px, accent color
```

### 5.3 Badges / Tags

```
Background:   var(--color-accent-muted)
Border:       1px solid var(--color-accent) 30% opacity
Text:         var(--color-accent), --text-xs, font-mono
Border-radius: 6px
Padding:      4px 10px
```

### 5.4 Navigation Bar

```
Height:           72px (desktop) / 64px (mobile)
Background:       var(--glass-bg) with backdrop-blur
Border-bottom:    1px solid var(--glass-border)
Position:         sticky top-0, z-50
Transition:       background-color 0.3s on scroll

Logo:             Initials "SJ" in gradient-gold, Playfair Display
Nav Links:        Inter 500, --text-sm, gap 32px
Active Link:      gradient-gold underline, 2px thick
Theme Toggle:     Icon button, sun/moon icons
Mobile:           Hamburger → full-screen drawer
```

### 5.5 Section Label Pattern

```
[SECTION LABEL]   ← Accent colored, uppercase, Inter 600, tracking-widest
[Section Title]   ← Playfair Display, large, gradient or plain text
[Description]     ← Inter 400, --color-text-muted, max-width 600px
```

### 5.6 Form Elements

```
Input / Textarea:
  Background:     var(--color-surface-2)
  Border:         1px solid var(--color-border)
  Border-radius:  10px
  Padding:        14px 16px

  Focus:
    Border-color: var(--color-accent)
    Box-shadow:   0 0 0 3px var(--color-accent-muted)

  Error:
    Border-color: var(--color-error)
    Box-shadow:   0 0 0 3px rgba(239,71,111,0.15)
```

### 5.7 Scroll Progress Indicator

```
Position: fixed top-0, z-100
Height:   3px
Background: gradient-gold
Width:    % of page scroll (JS-controlled)
```

### 5.8 Custom Cursor

```
Default:  12px circle, accent gold, mix-blend-mode: difference
Hover:    40px circle, 0.5 opacity, scale with spring easing
Click:    Brief scale-down effect
```

---

## 6. Animation System

### 6.1 Easing Curves

```js
const easings = {
  smooth:   [0.4, 0.0, 0.2, 1.0],
  spring:   { type: 'spring', stiffness: 300, damping: 30 },
  bounce:   { type: 'spring', stiffness: 400, damping: 10 },
  luxury:   [0.16, 1, 0.3, 1],
};
```

### 6.2 Duration Scale

| Token          | Duration | Use Case                        |
|----------------|----------|---------------------------------|
| `--dur-instant`| 80ms     | Button press feedback           |
| `--dur-fast`   | 150ms    | Hover states, toggles           |
| `--dur-normal` | 300ms    | Standard transitions            |
| `--dur-slow`   | 500ms    | Page elements, reveals          |
| `--dur-slower` | 800ms    | Section entrances               |
| `--dur-long`   | 1200ms   | Hero entrance, loading screen   |

### 6.3 Framer Motion Variants

```js
// Fade Up (Section Entrance)
export const fadeUp = {
  hidden:  { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

// Stagger Container
export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

// Card Hover
export const cardHover = {
  rest:  { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4,
    transition: { duration: 0.3, ease: 'easeOut' } }
};

// Scale In
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

// Slide From Left / Right
export const slideLeft = {
  hidden:  { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
export const slideRight = {
  hidden:  { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
```

### 6.4 Page-Level Animation Table

| Element                | Animation                    | Trigger              |
|------------------------|------------------------------|----------------------|
| Loading screen         | Full-screen → scale + fade   | App mount            |
| Hero name              | Char-by-char reveal          | On load              |
| Hero typing text       | Typewriter effect            | After name reveal    |
| Section headings       | Fade up + blur               | IntersectionObserver |
| Cards                  | Stagger fade up              | IntersectionObserver |
| Timeline items         | Slide in alternating         | IntersectionObserver |
| Stat counters          | Count up animation           | IntersectionObserver |
| Skill progress bars    | Width expand from 0          | IntersectionObserver |
| Floating tech icons    | Gentle float loop            | Continuous           |
| Background particles   | Slow drift                   | Continuous           |
| Scroll indicator       | Bounce loop                  | Continuous           |

---

## 7. Section-by-Section Specs

### 7.1 Loading Screen

```
Duration:       1.5s → fade out
Background:     var(--color-bg)
Content:        "SJ" logo initials, animated ring
Exit:           Opacity 0, scale 1.05, unmount
```

### 7.2 Navigation

```
Desktop: [Logo] ←→ [Nav Links] [Theme Toggle]
Mobile:  [Logo] ←→ [Theme Toggle] [☰]
  Drawer: Full-screen overlay, 80% width from right

Scroll Behavior:
  0px     → transparent
  >50px   → glass bg + border + shadow
  Active  → gold underline + accent color

Smooth Scroll: scroll-behavior: smooth; offset = 72px
```

### 7.3 Hero Section

```
Layout: 100vh, 2-column desktop / 1-column mobile

Left:
  • "Hi, I'm" — Inter 500, muted
  • "Somya Jain" — Playfair 800, --text-7xl, gradient
  • Typing animation: Full Stack Developer | MERN Developer | Problem Solver
  • Professional intro (2-3 lines)
  • Tech stack pills (badges)
  • [View Projects] [Download Resume] [Contact Me]

Right:
  • Profile image — circular, gradient border, glow
  • Floating tech icons orbiting around image

Background:
  • Radial gradient mesh
  • Animated particles
  • Blurred blob gradients

Bottom-center: Scroll indicator (mouse + bouncing dot)
```

### 7.4 About Section

```
Layout: 2-column

Left:  Professional summary, career objective, [Download Resume]
Right: Stats grid (2×2) + image

Stats:
  [10+ Projects] [2+ Internships]
  [15+ Tech]     [100+ DSA Solved]
  Each: glass card, gradient border, animated counter
```

### 7.5 Skills Section

```
Tabs: [Frontend] [Backend] [Database] [Tools]
  → Tab underline slides to active
  → Content AnimatePresence fade

Skill Card:
  [ICON]  Tech Name
  ████████████░░░░  80%
  
Grid: 3 col desktop / 2 col tablet / 1 col mobile
```

### 7.6 Experience Section

```
Vertical timeline, center line
Items alternate left/right on desktop

Each Item:
  ● Date Range
    Company Name + Location
    Role / Position
    • Bullet responsibilities
    [Tech tag] [Tech tag] ...

Timeline line: gradient-gold, draws on scroll
Dot: gold circle + pulse ring
```

### 7.7 Projects Section

```
Filter: [All] [Frontend] [Backend] [Full Stack] [Extension]

Project Card:
  [Screenshot 16:9]
  Title | Description
  Features list
  [Tech badges]
  [GitHub] [Live] [Case Study]

Hover: lift + glow + gradient border + image overlay
AnimatePresence on filter change
```

### 7.8 Education Section

```
Centered, card-based

Card:
  🎓  B.Tech Information Technology
      Indira Gandhi Engineering College
      2022 – 2026          [Current]
  ─────────────────────────────────
  Achievements / Coursework

Decorative: floating geometric shapes
```

### 7.9 Contact Section

```
50/50 split desktop / stacked mobile

Left:
  "Let's Build Something Together"
  Email + Social links (GitHub, LinkedIn, Twitter, LeetCode)

Right (Form):
  [Name] [Email] [Subject] [Message textarea]
  [Send Message →]

  • Validation: Zod + react-hook-form
  • Loading: spinner on button
  • Success: animated checkmark toast
  • Error: shake animation
  API: POST /api/contact → MongoDB
```

### 7.10 Footer

```
3-col grid: [Logo + Tagline] | [Quick Links] | [Social Icons]
Bottom: © 2026 Somya Jain · All rights reserved
Top border: gradient-gold 1px
```

---

## 8. Responsive Breakpoints

```
xs:  < 480px    Mobile portrait
sm:  480–767px  Mobile landscape
md:  768–1023px Tablet
lg:  1024–1279px Large tablet / small desktop
xl:  1280–1535px Desktop
2xl: ≥ 1536px   Large desktop
```

| Component   | Mobile          | Tablet       | Desktop       |
|-------------|-----------------|--------------|---------------|
| Navbar      | Hamburger       | Hamburger    | Horizontal    |
| Hero        | 1 col, center   | 1 col        | 2 col         |
| About       | 1 col           | 1 col        | 2 col         |
| Stats       | 2×2 grid        | 2×2 grid     | 4-col row     |
| Skills      | 1 col           | 2 col        | 3 col         |
| Timeline    | Left-aligned    | Left-aligned | Center/alt    |
| Projects    | 1 col           | 2 col        | 2–3 col       |
| Contact     | Stacked         | Stacked      | 2 col split   |
| Footer      | 1 col           | 2 col        | 3 col         |

---

## 9. Accessibility Standards

- **Color Contrast**: All text ≥ 4.5:1 (gold on dark ✅ 7.2:1)
- **Focus Indicators**: 3px gold outline on all interactive elements
- **Keyboard Navigation**: Full tab order, no keyboard traps
- **Screen Readers**: `alt` text on all images, `aria-label` on icons
- **Reduced Motion**: `@media (prefers-reduced-motion)` disables animations
- **Semantic HTML**: Proper heading hierarchy, landmark regions
- **ARIA**: `role`, `aria-label`, `aria-current` on nav items

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Asset Guidelines

### Images

| Asset          | Dimensions   | Format | Notes                     |
|----------------|--------------|--------|---------------------------|
| Profile Photo  | 400×400px    | webp   | Circular crop             |
| Project Screenshots | 1200×675px | webp | 16:9 ratio              |
| OG Image       | 1200×630px   | jpg    | Social sharing            |
| Favicon        | Multi-size   | ICO+PNG| 16, 32, 180, 192, 512px  |

### Icon Libraries

- **Tech Icons**: devicons SVG
- **UI Icons**: Lucide React
- **Social Icons**: Simple Icons

### Performance Targets

| Metric                    | Target |
|---------------------------|--------|
| Lighthouse Performance    | ≥ 90   |
| Lighthouse Accessibility  | ≥ 95   |
| Lighthouse Best Practices | ≥ 95   |
| Lighthouse SEO            | ≥ 95   |
| First Contentful Paint    | < 1.5s |
| Time to Interactive       | < 3.5s |
| Bundle Size (gzipped)     | < 500KB|

---

*End of Design Specification — v1.0.0*
