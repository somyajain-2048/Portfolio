# 🤖 Agent Build Plan — Phase Breakdown
## Somya Jain — Full Stack Developer Portfolio

> **Document Type:** Implementation Strategy & Agent Orchestration Guide  
> **Version:** 1.0.0  
> **Last Updated:** August 2026  
> **Build Strategy:** Sequential Phases · Agent-per-Phase · Incremental Delivery

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Folder Structure](#folder-structure)
3. [Phase Summary](#phase-summary)
4. [Phase 1 — Foundation & Setup](#phase-1--foundation--setup)
5. [Phase 2 — Frontend Core & Global Components](#phase-2--frontend-core--global-components)
6. [Phase 3 — All Portfolio Sections](#phase-3--all-portfolio-sections)
7. [Phase 4 — Advanced UI Features](#phase-4--advanced-ui-features)
8. [Phase 5 — Backend API & Database](#phase-5--backend-api--database)
9. [Phase 6 — Polish, SEO & Deployment](#phase-6--polish-seo--deployment)
10. [Dependency Map](#dependency-map)
11. [Acceptance Criteria](#acceptance-criteria)

---

## 1. Project Overview

| Property       | Value                                      |
|----------------|--------------------------------------------|
| **Project**    | Somya Jain — Full Stack Developer Portfolio |
| **Frontend**   | React.js (Vite) + Tailwind CSS v3          |
| **Animation**  | Framer Motion                              |
| **Routing**    | React Router v6                            |
| **Backend**    | Node.js + Express.js                       |
| **Database**   | MongoDB + Mongoose                         |
| **State**      | Zustand (theme + global UI state)          |
| **Forms**      | React Hook Form + Zod                      |
| **Total Phases**| 6                                         |
| **Estimated Files** | ~60–80 files                         |

---

## 2. Folder Structure

```
portfolio/
├── client/                          # React Vite frontend
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── og-image.jpg
│   │   └── resume.pdf
│   ├── src/
│   │   ├── assets/
│   │   │   ├── icons/               # Tech SVG icons
│   │   │   ├── images/              # Profile, project images
│   │   │   └── fonts/
│   │   ├── components/
│   │   │   ├── ui/                  # Reusable base components
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Badge.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── SectionLabel.jsx
│   │   │   │   ├── GradientText.jsx
│   │   │   │   ├── Tooltip.jsx
│   │   │   │   └── Toast.jsx
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── MobileDrawer.jsx
│   │   │   │   └── ScrollProgress.jsx
│   │   │   ├── effects/
│   │   │   │   ├── CustomCursor.jsx
│   │   │   │   ├── ParticleBackground.jsx
│   │   │   │   ├── FloatingIcons.jsx
│   │   │   │   └── LoadingScreen.jsx
│   │   │   └── sections/
│   │   │       ├── Hero.jsx
│   │   │       ├── About.jsx
│   │   │       ├── Skills.jsx
│   │   │       ├── Experience.jsx
│   │   │       ├── Projects.jsx
│   │   │       ├── Education.jsx
│   │   │       └── Contact.jsx
│   │   ├── hooks/
│   │   │   ├── useTheme.js
│   │   │   ├── useScrollProgress.js
│   │   │   ├── useIntersection.js
│   │   │   ├── useCounter.js
│   │   │   └── useTypewriter.js
│   │   ├── store/
│   │   │   └── useStore.js          # Zustand store
│   │   ├── lib/
│   │   │   ├── animations.js        # Framer Motion variants
│   │   │   ├── constants.js         # Nav links, skills data, etc.
│   │   │   └── utils.js
│   │   ├── styles/
│   │   │   └── globals.css          # CSS variables + base styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── server/                          # Node.js Express backend
│   ├── config/
│   │   └── db.js                    # MongoDB connection
│   ├── models/
│   │   └── Contact.js               # Mongoose model
│   ├── routes/
│   │   └── contact.js               # POST /api/contact
│   ├── middleware/
│   │   ├── rateLimiter.js
│   │   └── validator.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── .env
│   ├── .env.example
│   ├── server.js
│   └── package.json
│
├── design.md                        # Design specification
├── agents.md                        # This file
└── README.md
```

---

## 3. Phase Summary

| Phase | Name                              | Agent Role              | Deliverables                        | Est. Files |
|-------|-----------------------------------|-------------------------|-------------------------------------|------------|
| **1** | Foundation & Setup                | DevOps / Scaffold Agent | Project init, config, design tokens | 8          |
| **2** | Frontend Core & Global Components | UI Component Agent      | Navbar, Footer, base UI lib         | 14         |
| **3** | All Portfolio Sections            | Section Build Agent     | 7 sections fully implemented        | 14         |
| **4** | Advanced UI Features              | Animation & FX Agent    | Cursor, particles, loaders, scroll  | 8          |
| **5** | Backend API & Database            | Backend Agent           | Express API, MongoDB, email         | 10         |
| **6** | Polish, SEO & Deployment          | QA & Deploy Agent       | SEO, perf, a11y, README             | 6          |

---

## Phase 1 — Foundation & Setup

### 🎯 Goal
Bootstrap the entire project scaffold with all configurations, design tokens, and base architecture so every subsequent phase can build without revisiting setup.

### 👤 Agent Role: **Scaffold & Config Agent**

### 📋 Tasks

#### 1.1 — Initialize Frontend (Vite + React)
```bash
cd portfolio
npx create-vite@latest client -- --template react
cd client
npm install
```

**Install all dependencies:**
```bash
npm install \
  tailwindcss@3 postcss autoprefixer \
  framer-motion \
  react-router-dom \
  zustand \
  react-hook-form \
  zod \
  @hookform/resolvers \
  axios \
  lucide-react \
  react-icons \
  react-hot-toast \
  react-intersection-observer \
  react-countup \
  react-type-animation \
  @radix-ui/react-tooltip

npx tailwindcss init -p
```

#### 1.2 — Initialize Backend (Node.js)
```bash
mkdir server && cd server
npm init -y
npm install express mongoose cors dotenv express-rate-limit helmet express-validator nodemailer
npm install --save-dev nodemon
```

#### 1.3 — Tailwind Configuration
**File: `client/tailwind.config.js`**
- Extend theme with custom colors (all CSS variable references)
- Add custom font families (display, sans, mono)
- Add custom screens (xs breakpoint)
- Configure content paths
- Add animation utilities

#### 1.4 — CSS Design Tokens
**File: `client/src/styles/globals.css`**
- All CSS custom properties for dark theme (`:root[data-theme="dark"]`)
- All CSS custom properties for light theme (`:root[data-theme="light"]`)
- Base reset and typography styles
- Scrollbar styling
- Selection highlighting
- Glass card utility classes
- Gradient border utility classes

#### 1.5 — Vite Configuration
**File: `client/vite.config.js`**
- Path aliases (`@/` → `./src/`)
- Chunk splitting for lazy loading
- Image optimization plugin

#### 1.6 — Animation Library
**File: `client/src/lib/animations.js`**
- Export all Framer Motion variants:
  - `fadeUp`, `fadeDown`, `fadeIn`
  - `slideLeft`, `slideRight`
  - `scaleIn`, `scaleOut`
  - `staggerContainer`
  - `cardHover`
  - `pageTransition`

#### 1.7 — Data Constants
**File: `client/src/lib/constants.js`**
- `NAV_LINKS` array
- `SKILLS_DATA` (categorized)
- `PROJECTS_DATA` (all 4 projects with full details)
- `EXPERIENCE_DATA`
- `EDUCATION_DATA`
- `SOCIAL_LINKS`
- `STATS_DATA`

#### 1.8 — Zustand Store
**File: `client/src/store/useStore.js`**
```js
// State:
- theme: 'dark' | 'light'
- toggleTheme()
- isMenuOpen: boolean
- setMenuOpen()
- activeSection: string
- setActiveSection()
- isLoading: boolean
- setLoading()
```

### ✅ Deliverables
- [ ] `client/` — Vite React project initialized
- [ ] `server/` — Node.js project initialized
- [ ] `tailwind.config.js` — Fully extended
- [ ] `globals.css` — All CSS tokens defined
- [ ] `vite.config.js` — Aliases + splitting
- [ ] `animations.js` — All variants exported
- [ ] `constants.js` — All data populated
- [ ] `useStore.js` — Zustand store ready

### 🔗 Dependencies
- None (this is the first phase)

---

## Phase 2 — Frontend Core & Global Components

### 🎯 Goal
Build all reusable UI primitives and layout components (Navbar, Footer, effects) that every section will use.

### 👤 Agent Role: **UI Component Agent**

### 📋 Tasks

#### 2.1 — Base UI Components (`src/components/ui/`)

**Button.jsx**
- `variant` prop: `primary | secondary | ghost | icon`
- `size` prop: `sm | md | lg`
- Framer Motion hover/tap animations
- Loading state with spinner
- Icon support (left/right)

**Badge.jsx**
- Tech tag display
- `variant` prop: `default | outline | filled`
- Monospace font, accent color

**Card.jsx**
- `variant` prop: `glass | gradient-border | solid`
- Framer Motion hover lift effect
- Composable with children

**SectionLabel.jsx**
- Renders the section tag label (e.g., "ABOUT ME")
- Uppercase, accent color, letter-spacing

**GradientText.jsx**
- Wrapper for gold gradient text
- `as` prop for semantic heading level

**Toast.jsx**
- Success / Error / Info toast styles
- Integrates with react-hot-toast
- Gold accent styling

#### 2.2 — Custom Hooks (`src/hooks/`)

**useTheme.js**
- Read/set theme from Zustand store
- Apply `data-theme` attribute to `<html>`
- Persist to `localStorage`
- Detect system preference on first load

**useScrollProgress.js**
- Track `window.scrollY / (document.body.scrollHeight - window.innerHeight)`
- Return `progress` (0–1)
- Throttled with `requestAnimationFrame`

**useIntersection.js**
- Wrapper around `react-intersection-observer`
- Returns `{ ref, inView }`
- Default: `threshold: 0.1, triggerOnce: true`

**useCounter.js**
- Count up from 0 to `target` when `inView`
- Configurable duration
- Returns current count value

**useTypewriter.js**
- Cycle through array of strings
- Configurable typing speed, delete speed, pause duration
- Returns current display string + cursor state

#### 2.3 — Navbar (`src/components/layout/Navbar.jsx`)

- Sticky top, z-50
- Transparent → glass on scroll (threshold: 50px)
- Logo: "SJ" in Playfair Display, gradient gold
- Nav links: map `NAV_LINKS`, smooth scroll on click
- Active link detection via `useScrollSpy` (highlight current section)
- Theme toggle button (sun/moon icon, animated swap)
- Mobile: hamburger → `MobileDrawer` overlay
- Framer Motion: fade + slide down on mount

**MobileDrawer.jsx**
- Full-screen overlay (80% width, from right)
- `AnimatePresence` controlled
- Stagger-animated nav links
- Close on link click or overlay tap
- `aria-modal`, focus trap for a11y

#### 2.4 — Footer (`src/components/layout/Footer.jsx`)

- 3-column grid (logo+tagline | quick links | social icons)
- Top border: 1px gradient-gold
- Bottom: copyright row
- Social icons from `lucide-react` + Simple Icons
- Hover: icon glows, lifts

#### 2.5 — Scroll Progress (`src/components/layout/ScrollProgress.jsx`)

- Fixed top-0, full width bar
- Height: 3px
- Background: gradient-gold
- Width: `${progress * 100}%`
- Smooth transition: 0.1s ease

#### 2.6 — App.jsx & main.jsx

- Wrap with `<BrowserRouter>`
- Apply `ThemeProvider` pattern (reads store)
- `<ScrollProgress />` always rendered
- `<Navbar />` and `<Footer />` layout
- `<Suspense>` with skeleton for lazy sections
- `<Toaster />` from react-hot-toast

### ✅ Deliverables
- [ ] `Button.jsx` — All variants
- [ ] `Badge.jsx` — Tech tags
- [ ] `Card.jsx` — Glass + gradient border
- [ ] `SectionLabel.jsx` + `GradientText.jsx`
- [ ] `Toast.jsx` — Custom styled
- [ ] `useTheme.js`, `useScrollProgress.js`, `useIntersection.js`, `useCounter.js`, `useTypewriter.js`
- [ ] `Navbar.jsx` — Full with scroll behavior
- [ ] `MobileDrawer.jsx` — Animated overlay
- [ ] `Footer.jsx` — 3-col layout
- [ ] `ScrollProgress.jsx` — Gold bar
- [ ] `App.jsx` + `main.jsx` — App shell

### 🔗 Dependencies
- Phase 1 must be complete (tokens, store, animations, constants)

---

## Phase 3 — All Portfolio Sections

### 🎯 Goal
Build all 7 content sections as fully animated, data-driven, responsive React components.

### 👤 Agent Role: **Section Build Agent**

### 📋 Tasks

#### 3.1 — Hero Section (`Hero.jsx`)

**Layout:** 2-col (desktop) / 1-col centered (mobile), 100vh

**Components to build inside:**
- `HeroText` — Char-by-char name reveal using Framer Motion
- `TypewriterTag` — Uses `useTypewriter` hook for role cycling
- `TechPills` — Row of tech badge components
- `HeroCTA` — Button group (View Projects, Download Resume, Contact)
- `ProfileImage` — Circular image with gradient ring + glow pulse
- `ScrollIndicator` — Bottom-center, bouncing mouse icon

**Animations:**
- Entry: staggered fade up (greeting → name → typewriter → intro → pills → CTAs)
- Background: animated mesh gradient blobs (CSS keyframe)
- Profile: scale in with spring, border pulse

#### 3.2 — About Section (`About.jsx`)

**Layout:** 2-col desktop / 1-col mobile

**Left:**
- Section label + heading (Playfair)
- 3 paragraphs: summary, journey, objective
- `[Download Resume]` button → links to `/resume.pdf`

**Right:**
- `StatCard` grid (2×2) using `useCounter` + `useIntersection`
- Optional decorative image or code window mockup

**Animations:**
- Left slides in from left, right slides in from right
- Stats count up on first view

#### 3.3 — Skills Section (`Skills.jsx`)

**Tab system:**
- Category tabs: Frontend / Backend / Database / Tools
- Active tab: gold underline indicator slides with `layoutId`
- Tab content: `AnimatePresence` mode="wait"

**SkillCard:**
- Tech icon (devicon SVG or react-icons)
- Skill name
- Progress bar (animated width from 0 on view)
- Percentage label

**Grid:** 3 col / 2 col / 1 col responsive

#### 3.4 — Experience Section (`Experience.jsx`)

**Vertical Timeline:**
- Center line (gradient-gold, animated height from 0 on scroll)
- Items alternate left/right on desktop, all-left on mobile

**TimelineItem:**
- Dot: gold circle with pulsing ring
- Date badge
- Card (glass): company, role, location, type badge
- Bullet list of responsibilities
- Tech tag badges at bottom

**Animation:**
- Items fade in from alternating sides on scroll
- Line "draws" downward using SVG pathLength or height animation

#### 3.5 — Projects Section (`Projects.jsx`)

**Filter bar:**
- `[All] [Frontend] [Backend] [Full Stack] [Extension]`
- Active: gradient-gold background
- Filter with `AnimatePresence` + `layout` prop for smooth reflow

**Projects (4 total):**
1. **Product Price Tracker** — React, Node, MongoDB, Puppeteer, JWT
2. **Temp Mail Server** — React, Node, SQLite, Socket.io, Postfix
3. **Community Discussion Platform** — Next.js, PostgreSQL, Prisma, Socket.io
4. **Listify Chrome Extension** — React, Node.js

**ProjectCard:**
- Image area (16:9, hover overlay with "View Project" button)
- Title + description
- Features list (first 3, expandable)
- Tech badge row
- Action buttons: [GitHub ↗] [Live Demo ↗] [Case Study ▶]
- Hover: lift + gold glow + gradient border

**Layout:** 2-col grid desktop / 1-col mobile

#### 3.6 — Education Section (`Education.jsx`)

**Centered layout**

**EducationCard:**
- 🎓 icon
- Degree: B.Tech Information Technology
- Institute: Indira Gandhi Engineering College
- Year: 2022 – 2026
- Status badge: [Current]
- Divider
- Achievements / coursework list

**Decorative:** floating blurred shapes behind card

#### 3.7 — Contact Section (`Contact.jsx`)

**50/50 split**

**Left Panel:**
- Section label + heading
- Brief availability copy
- Email button (clickable `mailto:`)
- Social grid: GitHub, LinkedIn, Twitter, LeetCode
  - Each: icon + handle, hover accent

**Right Panel (Form):**
```
Field: Name      → required, min 2 chars
Field: Email     → required, valid email format
Field: Subject   → required, min 5 chars
Field: Message   → required, min 20 chars, textarea 6 rows
Button: [Send Message →]
```
- React Hook Form + Zod validation
- On submit: `POST /api/contact` via axios
- Loading: button spinner + disabled
- Success: `react-hot-toast` success toast + form reset
- Error: toast error + shake animation on form

### ✅ Deliverables
- [ ] `Hero.jsx` — Full animated hero
- [ ] `About.jsx` — 2-col with animated stats
- [ ] `Skills.jsx` — Tabbed with progress bars
- [ ] `Experience.jsx` — Animated timeline
- [ ] `Projects.jsx` — Filter + cards
- [ ] `Education.jsx` — Elegant card
- [ ] `Contact.jsx` — Split layout + working form

### 🔗 Dependencies
- Phase 1 (constants, animations, tokens)
- Phase 2 (UI components, hooks, base layout)

---

## Phase 4 — Advanced UI Features

### 🎯 Goal
Layer in all premium UI effects: custom cursor, loading screen, particle backgrounds, floating icons, and section reveal system.

### 👤 Agent Role: **Animation & FX Agent**

### 📋 Tasks

#### 4.1 — Loading Screen (`LoadingScreen.jsx`)
- Full-screen overlay over `var(--color-bg)`
- Center: "SJ" initials in Playfair Display
- Animated ring: CSS `conic-gradient` rotating
- Duration: 1500ms
- Exit: `AnimatePresence` fade + scale up
- Triggers: controlled by `isLoading` in Zustand store
- Set `isLoading = false` after 1500ms in `App.jsx`

#### 4.2 — Custom Cursor (`CustomCursor.jsx`)
- Two layers:
  1. Small dot (12px): follows mouse exactly
  2. Large ring (40px): follows with lag (lerp)
- Color: `var(--color-accent)`
- Blend mode: `mix-blend-mode: difference` on dot
- State changes:
  - Default: dot + ring visible
  - On hover (links, buttons): ring expands to 60px
  - On click: brief scale-down on dot
- Hide native cursor: `cursor: none` on `body`
- Only render on desktop (detect touch device)
- `useEffect` with `mousemove` listener

#### 4.3 — Particle Background (`ParticleBackground.jsx`)
- Canvas or CSS-based
- 60–80 small particles (2px circles, accent color 20% opacity)
- Slow random drift animation
- No libraries — pure requestAnimationFrame canvas
- Responsive: redraws on resize
- Render behind hero section only

#### 4.4 — Floating Tech Icons (`FloatingIcons.jsx`)
- 6–8 tech SVG icons floating around profile image in Hero
- Each icon:
  - Random orbit radius (80–140px from center)
  - Random starting angle
  - Gentle float animation (translateY ±10px loop)
  - Slight rotation
  - Glass pill background
- Framer Motion `animate` with `repeat: Infinity, repeatType: 'reverse'`

#### 4.5 — Scroll Reveal System
- HOC or hook: `useScrollReveal`
- Wraps `motion.div` + `useIntersection`
- Presets: `fadeUp | fadeLeft | fadeRight | scaleIn | stagger`
- Apply to every section heading, card group, stat grid
- `triggerOnce: true` — animates only on first view

#### 4.6 — Animated Counters
- `useCounter` hook drives number animation
- Format: `10+`, `2+`, `15+`, `100+`
- Uses `react-countup` or custom easing
- Triggers on intersection of About section

#### 4.7 — Scroll Spy (Active Section Detection)
- `IntersectionObserver` on each section
- Updates `activeSection` in Zustand store
- Navbar reads store to apply active styles
- Threshold: 0.4 (section must be 40% visible)

#### 4.8 — Gradient Background Blobs
- Hero section: 3 blurred gradient blobs
- CSS:
  ```css
  .blob { filter: blur(80px); opacity: 0.15; position: absolute; border-radius: 50%; }
  .blob-1 { background: #8b5e3c; width: 400px; height: 400px; top: 10%; left: -5%; }
  .blob-2 { background: #d4a373; width: 300px; height: 300px; top: 40%; right: 0; }
  .blob-3 { background: #8b5e3c; width: 250px; height: 250px; bottom: 5%; left: 30%; }
  ```
- Subtle CSS keyframe drift animation (20s loop)

### ✅ Deliverables
- [ ] `LoadingScreen.jsx` — Branded entry screen
- [ ] `CustomCursor.jsx` — Two-layer cursor
- [ ] `ParticleBackground.jsx` — Canvas particles
- [ ] `FloatingIcons.jsx` — Orbiting tech icons
- [ ] `useScrollReveal` — HOC/hook for reveal
- [ ] Animated counters wired to About stats
- [ ] Scroll spy wired to Navbar active states
- [ ] Gradient blobs in Hero background

### 🔗 Dependencies
- Phase 2 (App shell must be ready)
- Phase 3 (sections must exist to apply reveal to)

---

## Phase 5 — Backend API & Database

### 🎯 Goal
Build a production-ready Node.js + Express API with MongoDB for storing contact form submissions.

### 👤 Agent Role: **Backend Agent**

### 📋 Tasks

#### 5.1 — Server Entry (`server/server.js`)
```js
- Express app initialization
- Middleware: helmet, cors, express.json, rate limiting
- Route mounting: /api/contact
- MongoDB connection (config/db.js)
- Error handling middleware
- Listen on PORT from .env
```

#### 5.2 — Database Connection (`server/config/db.js`)
```js
- mongoose.connect() with options
- Connection event handlers (connected, error, disconnected)
- Export connectDB function
```

#### 5.3 — Contact Model (`server/models/Contact.js`)
```js
const ContactSchema = new mongoose.Schema({
  name:      { type: String, required: true, trim: true, maxlength: 100 },
  email:     { type: String, required: true, lowercase: true },
  subject:   { type: String, required: true, maxlength: 200 },
  message:   { type: String, required: true, maxlength: 2000 },
  ip:        { type: String },
  userAgent: { type: String },
  isRead:    { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
```

#### 5.4 — Contact Routes (`server/routes/contact.js`)
```
POST /api/contact
  - Input validation (express-validator)
  - Rate limit: 5 requests per 15 minutes per IP
  - Controller: contactController.sendMessage
  - Response: { success: true, message: '...' }

GET /api/contact/health
  - Simple health check endpoint
```

#### 5.5 — Contact Controller (`server/controllers/contactController.js`)
```js
sendMessage:
  1. Validate req.body (name, email, subject, message)
  2. Save to MongoDB via Contact.create()
  3. (Optional) Send notification email via nodemailer
  4. Return 201 success response
  5. Handle errors with try/catch → 500 response
```

#### 5.6 — Rate Limiter Middleware (`server/middleware/rateLimiter.js`)
```js
- express-rate-limit: windowMs: 15 * 60 * 1000, max: 5
- Custom error response in JSON
```

#### 5.7 — Input Validator Middleware (`server/middleware/validator.js`)
```js
- express-validator rules for contact form
- name: notEmpty, trim, isLength(2, 100)
- email: isEmail, normalizeEmail
- subject: notEmpty, isLength(5, 200)
- message: notEmpty, isLength(20, 2000)
- validationResult check → 400 with errors
```

#### 5.8 — Environment Config (`server/.env.example`)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NOTIFICATION_EMAIL=somya@example.com
```

#### 5.9 — Frontend API Integration

**`client/src/lib/api.js`**
```js
import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });
export const sendContactMessage = (data) => api.post('/api/contact', data);
```

**Vite env:** `VITE_API_URL=http://localhost:5000`

#### 5.10 — CORS & Security Config
```js
cors({ origin: process.env.CORS_ORIGIN, credentials: true })
helmet({ contentSecurityPolicy: false })
```

### ✅ Deliverables
- [ ] `server.js` — Express app with all middleware
- [ ] `config/db.js` — MongoDB connection
- [ ] `models/Contact.js` — Mongoose model
- [ ] `routes/contact.js` — API routes
- [ ] `controllers/contactController.js` — Business logic
- [ ] `middleware/rateLimiter.js` — IP rate limiting
- [ ] `middleware/validator.js` — Input validation
- [ ] `.env.example` — All required env vars
- [ ] `client/src/lib/api.js` — Axios API client
- [ ] Contact form wired to real API

### 🔗 Dependencies
- Phase 3 (Contact section form must exist)

---

## Phase 6 — Polish, SEO & Deployment

### 🎯 Goal
Final quality pass: SEO metadata, performance optimization, accessibility audit, documentation, and deployment-ready configuration.

### 👤 Agent Role: **QA & Deploy Agent**

### 📋 Tasks

#### 6.1 — SEO & Meta Tags (`client/index.html`)
```html
<title>Somya Jain | Full Stack Developer</title>
<meta name="description" content="Somya Jain is a Full Stack Developer specializing in MERN stack, building premium web applications. Available for internships and full-time roles.">
<meta name="keywords" content="Full Stack Developer, MERN Stack, React, Node.js, Portfolio">
<meta name="author" content="Somya Jain">

<!-- Open Graph -->
<meta property="og:title" content="Somya Jain | Full Stack Developer">
<meta property="og:description" content="Premium portfolio of Somya Jain, Full Stack Developer">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Somya Jain | Full Stack Developer">
<meta name="twitter:image" content="/og-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

#### 6.2 — Performance Optimizations

**Lazy Loading (Code Splitting):**
```js
// App.jsx — lazy load all sections
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
// ... etc
```

**Image Optimization:**
- All images in `webp` format
- `loading="lazy"` on non-critical images
- `width` and `height` attributes to prevent CLS

**Bundle Analysis:**
```bash
npm run build -- --analyze
```
- Chunk splitting in `vite.config.js`:
```js
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom', 'framer-motion'],
        router: ['react-router-dom'],
        ui: ['lucide-react', 'react-icons'],
      }
    }
  }
}
```

#### 6.3 — Skeleton Loaders
- `SkeletonCard.jsx` — Shimmer animation, card dimensions
- `SkeletonText.jsx` — Line placeholders
- Used inside `<Suspense fallback={<SkeletonCard />}>` boundaries
- Shimmer: CSS gradient animation left-to-right

#### 6.4 — Accessibility Audit
- Run `axe-core` DevTools audit
- Fix all critical / serious issues
- Ensure all images have `alt` text
- All icon buttons have `aria-label`
- Focus ring visible on all interactive elements
- `aria-current="page"` on active nav link
- Skip-to-main link: `<a href="#main" className="sr-only focus:not-sr-only">`

#### 6.5 — Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```
- Framer Motion: check `useReducedMotion()` hook in animation components

#### 6.6 — README.md
```markdown
# Somya Jain Portfolio

## Tech Stack
## Getting Started (Frontend)
## Getting Started (Backend)
## Environment Variables
## Folder Structure
## Deployment
## License
```

### ✅ Deliverables
- [ ] Full SEO meta tags in `index.html`
- [ ] Lazy loading for all sections
- [ ] Code split chunks configured in Vite
- [ ] `SkeletonCard.jsx` + `SkeletonText.jsx`
- [ ] Accessibility fixes from audit
- [ ] Reduced motion CSS + Framer Motion hook
- [ ] `README.md` — Full documentation

### 🔗 Dependencies
- All phases 1–5 must be complete

---

## 10. Dependency Map

```
Phase 1 (Foundation)
    │
    ├──► Phase 2 (Core Components)
    │        │
    │        ├──► Phase 3 (Sections)
    │        │        │
    │        │        ├──► Phase 4 (Advanced FX)
    │        │        │        │
    │        │        │        └──► Phase 6 (Polish)
    │        │        │
    │        │        └──► Phase 5 (Backend)
    │        │                 │
    │        │                 └──► Phase 6 (Polish)
    │        │
    │        └──► Phase 4 (Advanced FX) [partial]
    │
    └──► Phase 5 (Backend) [independent, can run parallel to Phases 2-4]
```

> **Parallelization Note:** Phase 5 (Backend) can be built concurrently with Phases 2, 3, and 4 since it's entirely independent. Connect the frontend to the API in Phase 3 (Contact form) or Phase 6 (final wiring).

---

## 11. Acceptance Criteria

### Per-Phase Checklist

| Criteria                              | Phase |
|---------------------------------------|-------|
| Vite dev server starts without errors | 1     |
| Tailwind classes apply correctly      | 1     |
| Dark/light theme toggles correctly    | 2     |
| Navbar hides/shows on mobile          | 2     |
| All 7 sections render                 | 3     |
| All Framer Motion animations play     | 3, 4  |
| Loading screen appears + dismisses   | 4     |
| Custom cursor follows mouse           | 4     |
| Contact form submits successfully     | 5     |
| MongoDB stores submission             | 5     |
| Rate limiting blocks >5 req/15min     | 5     |
| Lighthouse Performance ≥ 90           | 6     |
| Lighthouse Accessibility ≥ 95         | 6     |
| Lighthouse SEO ≥ 95                   | 6     |
| No WCAG AA violations                 | 6     |
| Mobile responsive on 375px–1920px     | All   |
| No console errors in production build | All   |

### Definition of Done

A phase is **DONE** when:
1. All tasks in the phase checklist are marked complete ✅
2. The dev server runs without errors
3. Visual output matches the design spec in `design.md`
4. No TypeScript/ESLint errors (if applicable)
5. The next phase can begin without blockers

---

*End of Agent Build Plan — v1.0.0*
