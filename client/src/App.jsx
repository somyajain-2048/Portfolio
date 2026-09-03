import React, { useEffect, Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { useStore } from './store/useStore';
import Navbar from './components/layout/Navbar';
import MobileDrawer from './components/layout/MobileDrawer';
import ScrollProgress from './components/layout/ScrollProgress';
import Footer from './components/layout/Footer';

// Visual Effects
import LoadingScreen from './components/effects/LoadingScreen';
import CustomCursor from './components/effects/CustomCursor';
import ParticleBackground from './components/effects/ParticleBackground';
import { SkeletonSection } from './components/ui/Skeleton';

// Code-split Lazy-loaded Sections for high performance & fast initial paint
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Education = lazy(() => import('./components/sections/Education'));
const Contact = lazy(() => import('./components/sections/Contact'));

export default function App() {
  const { theme, setActiveSection } = useStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Global intersection observer to synchronize activeSection in Zustand store
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { threshold: 0.25 }
        );
        observer.observe(element);
        observers.push({ element, observer });
      }
    });

    return () => {
      observers.forEach(({ element, observer }) => observer.unobserve(element));
    };
  }, [setActiveSection]);

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent selection:text-bg-dark transition-colors duration-300 flex flex-col font-sans relative">
      {/* Screen Reader Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:px-4 focus:py-2 focus:bg-accent focus:text-bg-dark focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Branded Loading Screen */}
      <LoadingScreen />

      {/* Luxury Custom Cursor (Desktop only) */}
      <CustomCursor />

      {/* Ambient Particle Background */}
      <ParticleBackground />

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: theme === 'dark' ? '#1a1511' : '#ffffff',
            color: theme === 'dark' ? '#f5f5f5' : '#1a1511',
            border: '1px solid #d4a373',
            boxShadow: '0 0 20px rgba(212, 163, 115, 0.25)',
            fontFamily: 'Inter, sans-serif',
          },
        }}
      />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation Headers */}
      <Navbar />
      <MobileDrawer />

      {/* Main Content Sections with Lazy Loading Suspense */}
      <main id="main-content" className="flex-grow relative z-10">
        <Suspense fallback={<SkeletonSection title="Loading Hero..." />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<SkeletonSection title="Loading About..." />}>
          <About />
        </Suspense>

        <Suspense fallback={<SkeletonSection title="Loading Skills..." />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SkeletonSection title="Loading Experience..." />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SkeletonSection title="Loading Projects..." />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SkeletonSection title="Loading Education..." />}>
          <Education />
        </Suspense>

        <Suspense fallback={<SkeletonSection title="Loading Contact..." />}>
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
