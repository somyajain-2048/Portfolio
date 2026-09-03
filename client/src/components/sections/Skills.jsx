import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../lib/constants';
import SectionLabel from '../ui/SectionLabel';
import {
  Code2, Layers, Wrench, Globe, Sparkles,
} from 'lucide-react';
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss, SiMysql,
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress,
  SiMongodb, SiGit, SiGithub, SiPostman, SiPrisma, SiLinux,
  SiLangchain, SiDocker, SiNetlify, SiVercel, SiRedis,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

// Skill → brand icon + color
const skillIconMap = {
  'JavaScript':         { icon: SiJavascript,  color: '#F7DF1E' },
  'TypeScript':         { icon: SiTypescript,  color: '#3178C6' },
  'Core Java':          { icon: FaJava,        color: '#ED8B00' },
  'C++':                { icon: Code2,         color: '#00599C' },
  'HTML':               { icon: SiHtml5,       color: '#E34F26' },
  'CSS':                { icon: SiCss,         color: '#1572B6' },
  'SQL':                { icon: SiMysql,       color: '#4479A1' },
  'React.js':           { icon: SiReact,       color: '#61DAFB' },
  'Next.js':            { icon: SiNextdotjs,   color: '#e2e8f0' },
  'Tailwind CSS':       { icon: SiTailwindcss, color: '#06B6D4' },
  'Node.js':            { icon: SiNodedotjs,   color: '#68A063' },
  'Express.js':         { icon: SiExpress,     color: '#e2e8f0' },
  'MongoDB':            { icon: SiMongodb,     color: '#47A248' },
  'JWT Authentication': { icon: Code2,         color: '#d4a373' },
  'Git':                { icon: SiGit,         color: '#F05032' },
  'GitHub':             { icon: SiGithub,      color: '#e2e8f0' },
  'Postman':            { icon: SiPostman,     color: '#FF6C37' },
  'Prisma':             { icon: SiPrisma,      color: '#5A67D8' },
  'Linux':              { icon: SiLinux,       color: '#FCC624' },
  'Redis':              { icon: SiRedis,       color: '#DC382D' },
  'LangChain':          { icon: SiLangchain,   color: '#1DB954' },
  'LangGraph':          { icon: Sparkles,      color: '#d4a373' },
  'RAG':                { icon: Sparkles,      color: '#8b5e3c' },
  'Netlify':            { icon: SiNetlify,     color: '#00C7B7' },
  'Render':             { icon: Globe,         color: '#46E3B7' },
  'Vercel':             { icon: SiVercel,      color: '#e2e8f0' },
  'Docker':             { icon: SiDocker,      color: '#2496ED' },
};

// Category config — icon, colors, gradient
const categoryConfig = {
  'languages': {
    icon: Code2,
    label: 'Languages',
    headerGradient: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    borderColor: 'border-amber-500/30',
    hoverBorder: 'hover:border-amber-500/50',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
    accentDot: 'bg-amber-400',
    chipHover: 'hover:border-amber-400/50 hover:shadow-[0_2px_12px_rgba(251,191,36,0.15)]',
  },
  'tech-stack': {
    icon: Layers,
    label: 'Tech Stack',
    headerGradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    borderColor: 'border-blue-500/30',
    hoverBorder: 'hover:border-blue-500/50',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400',
    accentDot: 'bg-blue-400',
    chipHover: 'hover:border-blue-400/50 hover:shadow-[0_2px_12px_rgba(96,165,250,0.15)]',
  },
  'tools': {
    icon: Wrench,
    label: 'Tools',
    headerGradient: 'from-accent/20 via-accent-gold/10 to-transparent',
    borderColor: 'border-accent/30',
    hoverBorder: 'hover:border-accent/50',
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
    accentDot: 'bg-accent',
    chipHover: 'hover:border-accent/50 hover:shadow-[0_2px_12px_rgba(139,94,60,0.2)]',
  },
  'platforms': {
    icon: Globe,
    label: 'Platforms',
    headerGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    borderColor: 'border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-500/50',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
    accentDot: 'bg-emerald-400',
    chipHover: 'hover:border-emerald-400/50 hover:shadow-[0_2px_12px_rgba(52,211,153,0.15)]',
  },
};

// Total skill count across all categories
const totalSkills = SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0);

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* ── Section Header ── */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <SectionLabel number="03">Technical Skills</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text">
          Skills &amp; <span className="text-gradient-gold">Technologies</span>
        </h2>
        <p className="text-text-muted text-base sm:text-lg">
          Languages, frameworks, developer tools, and deployment platforms I work with.
        </p>
        {/* total count pill */}
        <div className="flex items-center justify-center pt-1">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 font-mono text-xs text-accent">
            <Sparkles className="w-3 h-3" />
            {totalSkills}+ Technologies
          </span>
        </div>
      </div>

      {/* ── Bento Grid — all categories always visible ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        {SKILL_CATEGORIES.map((cat, catIdx) => {
          const cfg = categoryConfig[cat.id] || categoryConfig['tools'];
          const CatIcon = cfg.icon;

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card rounded-2xl border ${cfg.borderColor} ${cfg.hoverBorder} overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] group`}
            >
              {/* ── Card Header ── */}
              <div className={`bg-gradient-to-r ${cfg.headerGradient} px-6 py-5 border-b border-border/60`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${cfg.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <CatIcon className={`w-5 h-5 ${cfg.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-text">{cfg.label}</h3>
                      <p className="font-mono text-[10px] text-text-muted">{cat.skills.length} technologies</p>
                    </div>
                  </div>
                  <span className={`w-2 h-2 rounded-full ${cfg.accentDot} shadow-[0_0_8px_currentColor]`} />
                </div>
              </div>

              {/* ── Skills Grid ── */}
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, idx) => {
                    const skillData = skillIconMap[skill];
                    const SkillIcon = skillData?.icon;
                    const iconColor = skillData?.color || '#d4a373';

                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.08 + idx * 0.04, duration: 0.3 }}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface/70 border border-border/80 ${cfg.chipHover} transition-all duration-200 group/chip cursor-default select-none`}
                      >
                        {SkillIcon && (
                          <SkillIcon
                            className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover/chip:scale-110"
                            style={{ color: iconColor }}
                          />
                        )}
                        <span className="font-sans font-medium text-sm text-text-muted group-hover/chip:text-text transition-colors duration-200 whitespace-nowrap">
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}

