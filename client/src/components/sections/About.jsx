import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PERSONAL_INFO, STATS } from '../../lib/constants';
import { useCounter } from '../../hooks/useCounter';
import SectionLabel from '../ui/SectionLabel';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { FileText, Mail, Award, CheckCircle, Layers, GitPullRequest } from 'lucide-react';

function AnimatedStatCard({ label, value, suffix, description, inView }) {
  const count = useCounter(value, 1800, inView);

  return (
    <Card variant="glass" interactive className="text-center p-4 sm:p-5 space-y-1.5 relative overflow-hidden group">
      <div className="text-3xl lg:text-4xl font-display font-extrabold text-gradient-gold">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm font-semibold text-text">{label}</div>
      <div className="text-[11px] text-text-muted leading-tight">{description}</div>
    </Card>
  );
}

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <SectionLabel number="02">About Me</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text">
          Full Stack Developer & <span className="text-gradient-gold">MERN Engineer</span>
        </h2>
        <p className="text-text-muted text-base sm:text-lg">
          Specializing in end-to-end web engineering, RESTful APIs, and browser tools.
        </p>
      </div>

      {/* 2-Column Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="space-y-4 text-text-muted leading-relaxed font-sans text-base sm:text-lg">
            {PERSONAL_INFO.aboutDetailed.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Key Pillars */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2.5 text-sm text-text bg-surface/80 p-3 rounded-xl border border-border">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
              <span>Scalable MERN Architectures</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-text bg-surface/80 p-3 rounded-xl border border-border">
              <GitPullRequest className="w-4 h-4 text-accent flex-shrink-0" />
              <span>Open Source Contributions (GSSoC)</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-text bg-surface/80 p-3 rounded-xl border border-border">
              <Layers className="w-4 h-4 text-accent flex-shrink-0" />
              <span>REST & WebSocket APIs</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-text bg-surface/80 p-3 rounded-xl border border-border">
              <Award className="w-4 h-4 text-accent flex-shrink-0" />
              <span>B.Tech Information Technology</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="md"
              href={PERSONAL_INFO.resumeUrl}
              download="Somya_Jain_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              icon={FileText}
            >
              Download Resume
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="#contact"
              icon={Mail}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Statistics Grid & Education */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {STATS.map((stat, idx) => (
              <AnimatedStatCard
                key={idx}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                description={stat.description}
                inView={inView}
              />
            ))}
          </div>

          {/* Education Snapshot */}
          <Card variant="gradient" className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-display font-bold text-lg text-text">Education</h4>
              <span className="font-mono text-xs text-accent px-2.5 py-1 rounded bg-accent/15 border border-accent/30">
                2022 — 2026
              </span>
            </div>
            <p className="text-sm font-semibold text-accent">Bachelor of Technology - Information Technology</p>
            <p className="text-xs text-text-muted">Indira Gandhi Government Engineering College, Sagar</p>
            <p className="text-xs text-text-muted leading-relaxed pt-1">
              Courses: Data Structures, DBMS, Networking, Object Oriented Programming, Software Engineering, Agile Methodologies
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
