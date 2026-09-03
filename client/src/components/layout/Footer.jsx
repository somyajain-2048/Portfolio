import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, NAV_LINKS, SOCIAL_LINKS } from '../../lib/constants';
import { Heart, ArrowUp, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { useStore } from '../../store/useStore';

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
};

export default function Footer() {
  const { setActiveSection } = useStore();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('home');
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
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
    <footer className="relative bg-surface-elevated/40 border-t border-border/80 pt-16 pb-12 overflow-hidden">
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-border/60">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-gold p-0.5 flex items-center justify-center shadow-gold">
                <div className="w-full h-full bg-bg-dark rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-bold text-lg text-gradient-gold">SJ</span>
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-text">{PERSONAL_INFO.name}</h3>
                <p className="font-mono text-xs text-accent uppercase tracking-wider">{PERSONAL_INFO.title}</p>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, and MongoDB.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for Full-Stack Roles & Internships
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 md:pl-8">
            <h4 className="font-display font-semibold text-base text-text">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-text-muted hover:text-accent transition-colors duration-200 py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-base text-text">Contact Information</h4>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-mono text-xs sm:text-sm text-accent hover:underline flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="font-mono text-xs sm:text-sm text-text-muted hover:text-accent flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.name] || FaGithub;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-lg border border-border bg-surface text-text-muted hover:text-accent hover:border-accent hover:shadow-gold transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:border-accent hover:text-accent text-text-muted transition-all duration-200 text-xs font-mono group cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
