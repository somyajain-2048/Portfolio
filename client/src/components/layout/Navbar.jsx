import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { NAV_LINKS, PERSONAL_INFO } from '../../lib/constants';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const { theme, toggleTheme, activeSection, setActiveSection, isMenuOpen, toggleMenu, setMenuOpen } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMenuOpen(false);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'py-3.5 bg-bg/85 backdrop-blur-xl border-b border-border/80 shadow-glass'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="group flex items-center gap-3 select-none"
          aria-label="Somya Jain Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-gold p-0.5 flex items-center justify-center shadow-gold group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-bg-dark rounded-[10px] flex items-center justify-center">
              <span className="font-display font-bold text-lg text-gradient-gold">SJ</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base text-text tracking-wide group-hover:text-accent transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-[10px] text-accent tracking-widest uppercase">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full glass-card border border-border/60">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={cn(
                  'relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-300 select-none',
                  isActive
                    ? 'text-bg-dark font-semibold'
                    : 'text-text-muted hover:text-text hover:bg-surface/50'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-gold rounded-full -z-10 shadow-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Resume Quick CTA (Desktop) */}
          <div className="hidden lg:block">
            <Button
              href={PERSONAL_INFO.resumeUrl}
              download="Somya_Jain_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
              icon={FileText}
            >
              Resume
            </Button>
          </div>

          {/* Theme Toggle Button */}
          <Button
            variant="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-accent animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 text-primary-brown" />
            )}
          </Button>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden">
            <Button
              variant="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-accent" />
              ) : (
                <Menu className="w-5 h-5 text-text" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
