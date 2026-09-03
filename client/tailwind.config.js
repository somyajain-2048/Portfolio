/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--color-bg)',
          dark: '#0f0b08',
          light: '#faf7f2',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          elevated: 'var(--color-surface-2)',
          dark: '#1a1511',
          darker: '#130e0a',
          light: '#ffffff',
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          brown: '#8b5e3c',
          brownLight: '#a0714d',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
          muted: 'var(--color-accent-muted)',
          gold: '#d4a373',
          goldLight: '#e8c99a',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          glow: 'var(--color-border-glow)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
          faint: 'var(--color-text-faint)',
        }
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-gold': 'var(--gradient-gold)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-surface': 'var(--gradient-surface)',
      },
      boxShadow: {
        'gold': '0 0 25px rgba(212, 163, 115, 0.25)',
        'glow': '0 0 40px rgba(139, 94, 60, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
