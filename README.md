# 🌟 Somya Jain — Full Stack Developer Portfolio

A production-ready, luxury-themed portfolio website engineered for **Somya Jain** (Full Stack Developer & MERN Architect). Crafted with a dark-first brown & gold aesthetic, glassmorphism, 60fps micro-interactions, responsive navigation, and complete Node.js + Express backend persistence with MongoDB.

---

## 📸 Architecture & Tech Stack

### Frontend
- **Framework:** [React.js](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) + Custom Glassmorphic Design System
- **Animations:** [Framer Motion](https://www.framer.com/motion/) + Canvas Particle Engine
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) Schema Validation
- **Icons:** [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/)

### Backend
- **Runtime:** [Node.js](https://nodejs.org/)
- **Server:** [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)
- **Security:** [Helmet](https://helmetjs.github.io/), [CORS](https://github.com/expressjs/cors), and [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit)
- **Validation:** [express-validator](https://express-validator.github.io/)

---

## ✨ Features & Capabilities

1. **Luxury Theme Engine:**
   - Default Dark Theme (`#0f0b08` / `#1a1511`) + Light Theme Toggle (`#faf7f2` / `#ffffff`).
   - Elegant Brown (`#8b5e3c`) + Gold (`#d4a373`) luxury color accents.
   - Frosted glass cards (`backdrop-blur-md`) and glowing gradient borders.

2. **Full Section Suite:**
   - **Hero:** Dynamic typewriter role cycling, tech badge pills, and floating ambient icons.
   - **About:** Career narrative and 4 animated statistics counters (`10+ Projects`, `2+ Internships`, `15+ Tech`, `100+ DSA`).
   - **Skills:** Interactive category tabs (`Frontend`, `Backend`, `Database`, `Tools`) with animated proficiency progress bars.
   - **Experience:** Vertical timeline with pulsing nodes and detailed internship responsibility points.
   - **Projects:** Filterable grid with 4 featured systems (*Product Price Tracker*, *Temp Mail Server*, *Community Discussion Platform*, *Listify Chrome Extension*) and interactive Case Study modals.
   - **Education:** B.Tech Information Technology at Indira Gandhi Engineering College (2022–2026).
   - **Contact:** Real-time validated contact form with direct email copy and social media links.

3. **Advanced Motion & FX:**
   - Branded splash loading screen with rotating gold emblem.
   - Dual-layer desktop custom cursor with spring physics.
   - Lightweight 60fps canvas particle background.
   - Fixed 3px gold scroll progress indicator.
   - IntersectionObserver scroll spy active section highlighting.

4. **Performance & SEO:**
   - Full code splitting and `React.lazy()` chunking with custom skeleton fallback states.
   - JSON-LD structured data for Google Search.
   - Reduced motion accessibility (`@media (prefers-reduced-motion)`).
   - Responsive across 320px mobile portrait to 4K displays.

---

## 📁 Repository Structure

```
Portfolio/
├── client/                     # Frontend Application
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── effects/        # CustomCursor, LoadingScreen, ParticleBackground, ScrollReveal
│   │   │   ├── layout/         # Navbar, MobileDrawer, Footer, ScrollProgress
│   │   │   ├── sections/       # Hero, About, Skills, Experience, Projects, Education, Contact
│   │   │   └── ui/             # Button, Badge, Card, SectionLabel, GradientText, Skeleton
│   │   ├── hooks/              # useScrollProgress, useTypewriter, useCounter
│   │   ├── lib/                # api.js, animations.js, constants.js, utils.js
│   │   ├── store/              # useStore.js (Zustand state)
│   │   ├── styles/             # globals.css (CSS variables & glass tokens)
│   │   ├── App.jsx             # Main Application Assembler
│   │   └── main.jsx            # React Entrypoint
│   ├── index.html              # HTML with Fonts & SEO
│   ├── tailwind.config.js      # Tailwind Configuration
│   ├── vite.config.js          # Vite Bundler & Aliases
│   └── package.json
│
├── server/                     # Backend API Service
│   ├── config/                 # MongoDB database configuration
│   ├── controllers/            # Contact message controllers
│   ├── middleware/             # Rate limiter and input validators
│   ├── models/                 # Mongoose Contact model schema
│   ├── routes/                 # Contact route definitions
│   ├── .env.example            # Environment template
│   ├── server.js               # Express Server Entrypoint
│   └── package.json
│
├── design.md                   # Full UI/UX Design System Specification
├── agents.md                   # 6-Phase Agent Implementation Blueprint
└── README.md                   # Project Documentation
```

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js:** v18.0.0 or later
- **npm:** v9.0.0 or later
- **MongoDB:** (Optional for local persistent storage, server operates gracefully in standalone mode)

---

### 1. Start Frontend (Client)

```bash
# Navigate to client directory
cd client

# Install dependencies (if not already installed)
npm install

# Start Vite Development Server
npm run dev
```

Frontend will run at: **`http://localhost:5173`**

To produce an optimized production build:
```bash
npm run build
npm run preview
```

---

### 2. Start Backend (Server)

```bash
# Open a new terminal and navigate to server directory
cd server

# Install dependencies (if not already installed)
npm install

# Create local environment configuration
cp .env.example .env

# Start Server
npm run dev
```

Backend API will run at: **`http://localhost:5000`**
- Health Check: `GET http://localhost:5000/api/contact/health`
- Contact Endpoint: `POST http://localhost:5000/api/contact`

---

## 🔒 Environment Variables

### Server (`server/.env`)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio_somya
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173

# Optional Email Dispatch
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
NOTIFICATION_EMAIL=somyajain.dev@gmail.com
```

### Client (`client/.env`)
```env
VITE_API_URL=http://localhost:5000
```

---

## 🌐 Deployment Guidelines

- **Frontend:** Deploy `client/dist` directly to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or [Cloudflare Pages](https://pages.cloudflare.com/).
- **Backend:** Deploy `server/` to [Render](https://render.com/), [Railway](https://railway.app/), or [Fly.io](https://fly.io/) with a [MongoDB Atlas](https://www.mongodb.com/atlas) connection string in `MONGODB_URI`.

---

## 📄 License
MIT © 2026 Somya Jain. All rights reserved.
