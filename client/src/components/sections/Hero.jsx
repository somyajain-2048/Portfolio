import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../lib/constants';
import { useTypewriter } from '../../hooks/useTypewriter';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import GradientText from '../ui/GradientText';
import SectionLabel from '../ui/SectionLabel';
import { ArrowRight, FileText, Mail, Code2 } from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa6';
import { SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';

export default function Hero() {
  const { displayText } = useTypewriter({
    words: PERSONAL_INFO.taglines,
    typingSpeed: 75,
    deletingSpeed: 40,
    pauseDuration: 1800,
  });

  const scrollToSection = (e, id) => {
    e.preventDefault();
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
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Lighting & Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-primary-brown/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent-gold/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Bio, Name & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 text-center lg:text-left space-y-6"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center">
            <SectionLabel number="01">Full Stack Developer</SectionLabel>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg md:text-xl font-mono text-text-muted tracking-wide">
              Hello, I am
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.08]">
              <GradientText>{PERSONAL_INFO.name}</GradientText>
            </h1>
          </div>

          {/* Dynamic Typewriter Headline */}
          <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
            <p className="text-lg sm:text-2xl font-mono text-accent font-medium flex items-center gap-1.5">
              <span>{displayText}</span>
              <span className="w-2.5 h-6 bg-accent animate-pulse" />
            </p>
          </div>

          {/* Intro Description */}
          <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
            {PERSONAL_INFO.bio}
          </p>

          {/* Tech Stack Highlights Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <Badge variant="glow" icon={FaReact}>React.js</Badge>
            <Badge variant="glow" icon={FaNodeJs}>Node.js</Badge>
            <Badge variant="glow" icon={SiMongodb}>MongoDB</Badge>
            <Badge variant="glow" icon={SiTailwindcss}>Tailwind CSS</Badge>
            <Badge variant="glow" icon={SiTypescript}>TypeScript</Badge>
          </div>

          {/* Call-to-action Button Group */}
          <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Button
              variant="primary"
              size="lg"
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              iconRight={ArrowRight}
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={PERSONAL_INFO.resumeUrl}
              download="Somya_Jain_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              icon={FileText}
            >
              Download Resume
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              icon={Mail}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Luxury Avatar & Floating Tech Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          {/* Outer Gold Glow Rings */}
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
            {/* Animated Rotating Border Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-accent/30 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-accent/20" />

            {/* Profile Center Mockup / Avatar Container */}
            <div className="w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76 rounded-full bg-gradient-gold p-1 shadow-glow relative z-10">
              <div className="w-full h-full rounded-full bg-surface-dark overflow-hidden flex flex-col items-center justify-center relative group p-6 text-center">
                <div className="absolute inset-0 bg-gradient-surface opacity-90" />

                <div className="relative z-10 space-y-2">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl bg-gradient-gold p-0.5 shadow-gold">
                    <div className="w-full h-full bg-bg-dark rounded-[14px] flex items-center justify-center">
                      <Code2 className="w-10 h-10 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-text">{PERSONAL_INFO.name}</h3>
                  <p className="font-mono text-xs text-accent">Full Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Orbiting / Floating Tech Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 left-6 sm:left-12 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 border border-accent/30 shadow-gold z-20"
            >
              <FaReact className="w-5 h-5 text-[#61DAFB]" />
              <span className="font-mono text-xs font-semibold text-text">React.js</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 -right-4 sm:-right-8 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 border border-accent/30 shadow-gold z-20"
            >
              <FaNodeJs className="w-5 h-5 text-[#68A063]" />
              <span className="font-mono text-xs font-semibold text-text">Node.js</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute -bottom-3 left-10 sm:left-16 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 border border-accent/30 shadow-gold z-20"
            >
              <SiMongodb className="w-5 h-5 text-[#47A248]" />
              <span className="font-mono text-xs font-semibold text-text">MongoDB</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        onClick={(e) => scrollToSection(e, 'about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors duration-200 group cursor-pointer"
        aria-label="Scroll to About Section"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-border group-hover:border-accent flex items-start justify-center p-1 transition-colors">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-accent rounded-full"
          />
        </div>
      </a>
    </section>
  );
}
