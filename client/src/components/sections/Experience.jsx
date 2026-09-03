import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../../lib/constants';
import SectionLabel from '../ui/SectionLabel';

import {
  Building2,
  GitMerge,
  Calendar,
  MapPin,
  CheckCircle2,
  Clock,
} from 'lucide-react';

// Per-type config for color-coded distinction
const typeConfig = {
  Internship: {
    icon: Building2,
    dotBg: 'bg-accent-gold/20 border-accent-gold/70',
    dotGlow: 'shadow-[0_0_18px_rgba(212,163,115,0.5)]',
    headerBg: 'from-accent-gold/10 via-accent-gold/5 to-transparent',
    accentColor: 'text-accent-gold',
    badgeClass:
      'bg-accent-gold/15 text-accent-gold border-accent-gold/40 shadow-[0_0_10px_rgba(212,163,115,0.2)]',
    spineBg: 'bg-accent-gold',
    label: 'Internship',
  },
  'Open Source': {
    icon: GitMerge,
    dotBg: 'bg-accent/20 border-accent/70',
    dotGlow: 'shadow-[0_0_18px_rgba(139,94,60,0.5)]',
    headerBg: 'from-accent/10 via-accent/5 to-transparent',
    accentColor: 'text-accent',
    badgeClass:
      'bg-accent/15 text-accent border-accent/40 shadow-[0_0_10px_rgba(139,94,60,0.2)]',
    spineBg: 'bg-accent',
    label: 'Open Source',
  },
};

// Auto-calculate duration from period string like "Dec 2025 – April 2026"
function parseDuration(period) {
  const monthMap = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
  };
  try {
    const parts = period.split('–').map((s) => s.trim());
    if (parts.length !== 2) return null;
    const parse = (str) => {
      const tokens = str.split(' ');
      return { month: monthMap[tokens[0].toLowerCase().slice(0, 3)], year: parseInt(tokens[1]) };
    };
    const s = parse(parts[0]);
    const e = parse(parts[1]);
    const months = (e.year - s.year) * 12 + (e.month - s.month) + 1;
    return `${months} Month${months !== 1 ? 's' : ''}`;
  } catch {
    return null;
  }
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* ── Section Header ── */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
        <SectionLabel number="04">Experience</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text">
          Work &amp; <span className="text-gradient-gold">Contributions</span>
        </h2>
        <p className="text-text-muted text-base sm:text-lg">
          Hands-on industry internship experience and open-source contributions.
        </p>

        {/* Legend */}
        <div className="flex items-center justify-center gap-5 pt-2">
          <span className="flex items-center gap-2 text-xs font-mono text-accent-gold">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-gold shadow-[0_0_8px_rgba(212,163,115,0.6)] inline-block" />
            Internship
          </span>
          <span className="flex items-center gap-2 text-xs font-mono text-accent">
            <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(139,94,60,0.6)] inline-block" />
            Open Source
          </span>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="max-w-4xl mx-auto relative">
        {/* Spine */}
        <div className="absolute left-7 sm:left-9 top-6 bottom-6 w-px bg-gradient-to-b from-accent-gold/60 via-border/60 to-accent/40 rounded-full" />

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => {
            const cfg = typeConfig[exp.type] || typeConfig['Open Source'];
            const TypeIcon = cfg.icon;
            const duration = parseDuration(exp.period);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-5 sm:gap-7"
              >
                {/* ── Dot ── */}
                <div className="relative z-10 flex-shrink-0 mt-5">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.2 }}
                    className={`w-14 h-14 sm:w-[4.5rem] sm:h-[4.5rem] rounded-2xl border-2 flex items-center justify-center ${cfg.dotBg} ${cfg.dotGlow} transition-shadow duration-300`}
                  >
                    <TypeIcon className={`w-6 h-6 sm:w-7 sm:h-7 ${cfg.accentColor}`} />
                  </motion.div>
                </div>

                {/* ── Card ── */}
                <div className="flex-1 min-w-0">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="glass-card rounded-2xl border border-border/80 hover:border-accent/40 overflow-hidden hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-shadow duration-300"
                  >
                    {/* Gradient header */}
                    <div className={`bg-gradient-to-r ${cfg.headerBg} px-6 sm:px-8 pt-6 pb-5 border-b border-border/60`}>
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        {/* Role & company */}
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <h3 className="font-display font-bold text-xl sm:text-2xl text-text leading-tight">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                            <span className={`font-semibold ${cfg.accentColor}`}>{exp.company}</span>
                            <span className="text-border/60">·</span>
                            <span className="flex items-center gap-1 text-text-muted">
                              <MapPin className={`w-3.5 h-3.5 ${cfg.accentColor}`} />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        {/* Badges cluster */}
                        <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 flex-shrink-0">
                          {/* Type badge */}
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold border ${cfg.badgeClass}`}
                          >
                            <TypeIcon className="w-3 h-3" />
                            {cfg.label}
                          </span>

                          {/* Period */}
                          <span className="flex items-center gap-1.5 text-[11px] font-mono text-text-muted">
                            <Calendar className={`w-3 h-3 ${cfg.accentColor}`} />
                            {exp.period}
                          </span>

                          {/* Duration callout */}
                          {duration && (
                            <span className="flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-surface border border-border text-text-muted">
                              <Clock className="w-3 h-3" />
                              {duration}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="px-6 sm:px-8 py-5 space-y-5">
                      {/* Achievements */}
                      <ul className="space-y-3">
                        {exp.description.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3 group">
                            <CheckCircle2
                              className={`w-4 h-4 flex-shrink-0 mt-0.5 ${cfg.accentColor} group-hover:scale-110 transition-transform duration-200`}
                            />
                            <span className="text-sm text-text-muted leading-relaxed group-hover:text-text transition-colors duration-200">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>


                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline end cap */}
        <div className="absolute left-[23px] sm:left-[31px] bottom-0 w-3.5 h-3.5 rounded-full bg-border/40 border-2 border-border" />
      </div>
    </section>
  );
}
