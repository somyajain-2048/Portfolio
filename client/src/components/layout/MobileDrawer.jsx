import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { NAV_LINKS, PERSONAL_INFO, SOCIAL_LINKS } from '../../lib/constants';
import Button from '../ui/Button';
import { FileText, X } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { cn } from '../../lib/utils';

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
};

export default function MobileDrawer() {
  const { isMenuOpen, setMenuOpen, activeSection, setActiveSection } = useStore();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, setMenuOpen]);

  const handleLinkClick = (e, id) => {
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
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-bg-dark/80 backdrop-blur-md z-50 md:hidden"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-surface/95 backdrop-blur-2xl border-l border-border z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-gold p-0.5 flex items-center justify-center shadow-gold">
                  <div className="w-full h-full bg-bg-dark rounded-[6px] flex items-center justify-center">
                    <span className="font-display font-bold text-xs text-gradient-gold">SJ</span>
                  </div>
                </div>
                <span className="font-display font-bold text-sm text-text">{PERSONAL_INFO.name}</span>
              </div>
              <Button
                variant="icon"
                size="sm"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation"
              >
                <X className="w-4 h-4 text-accent" />
              </Button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-2 py-6">
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    className={cn(
                      'px-4 py-3 rounded-xl font-medium text-base transition-all duration-200 flex items-center justify-between',
                      isActive
                        ? 'bg-gradient-gold text-bg-dark font-semibold shadow-gold'
                        : 'text-text-muted hover:text-accent hover:bg-surface-elevated'
                    )}
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs opacity-60">0{idx + 1}</span>
                  </motion.a>
                );
              })}
            </nav>

            {/* Footer / Socials / Resume */}
            <div className="border-t border-border/60 pt-6 space-y-4">
              <Button
                href={PERSONAL_INFO.resumeUrl}
                download="Somya_Jain_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={FileText}
              >
                Download Resume
              </Button>

              <div className="flex items-center justify-center gap-3 pt-2">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = iconMap[social.name] || FaGithub;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-border/80 bg-surface-elevated/80 text-text-muted hover:text-accent hover:border-accent hover:shadow-gold transition-all duration-200"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
