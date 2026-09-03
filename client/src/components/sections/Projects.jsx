import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../../lib/constants';
import SectionLabel from '../ui/SectionLabel';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import {
  ExternalLink,
  CheckCircle2,
  Layers,
  X,
  ShoppingBag,
  Users,
  CheckSquare,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const projectVisuals = {
  'price-tracker': {
    icon: ShoppingBag,
    gradient: 'from-[#8b5e3c]/25 via-[#d4a373]/15 to-transparent',
  },
  'commute-platform': {
    icon: Users,
    gradient: 'from-[#1a1511] via-[#8b5e3c]/20 to-transparent',
  },
  'taskflow': {
    icon: CheckSquare,
    gradient: 'from-[#241d17] via-[#d4a373]/15 to-transparent',
  },
};

export default function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <SectionLabel number="05">Projects</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text">
          Featured <span className="text-gradient-gold">Projects</span>
        </h2>
        <p className="text-text-muted text-base sm:text-lg">
          Web applications and browser extensions I have built with modern technologies.
        </p>
      </div>

      {/* 3 Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => {
          const visual = projectVisuals[project.id] || projectVisuals['price-tracker'];
          const VisualIcon = visual.icon;

          return (
            <Card
              key={project.id}
              variant="gradient"
              interactive
              className="p-0 overflow-hidden flex flex-col h-full group"
            >
              {/* Visual Banner */}
              <div className={`h-40 relative overflow-hidden bg-gradient-to-br p-6 flex flex-col justify-between border-b border-border/60 ${visual.gradient}`}>
                <div className="flex items-center justify-between">
                  <Badge variant="glow" size="xs">
                    {project.category}
                  </Badge>
                  <div className="w-9 h-9 rounded-xl bg-surface/90 backdrop-blur-md border border-border flex items-center justify-center text-accent shadow-gold">
                    <VisualIcon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-text group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-1">
                    <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                      Key Features
                    </span>
                    <ul className="space-y-1.5 text-xs text-text-muted">
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Badges & CTAs */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="surface" size="xs">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-border/60">
                    {project.demo && (
                      <Button
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="sm"
                        className="flex-1 justify-center shadow-gold text-xs"
                        iconRight={ExternalLink}
                      >
                        Live Demo
                      </Button>
                    )}
                    <Button
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                      className="flex-1 justify-center text-xs"
                      icon={FaGithub}
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedCaseStudy(project)}
                      icon={Layers}
                      title="View Details"
                      className="text-xs"
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCaseStudy(null)}
            className="fixed inset-0 bg-bg-dark/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card p-6 sm:p-8 rounded-3xl border border-accent/40 shadow-2xl relative space-y-6"
            >
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="space-y-1">
                  <Badge variant="glow">{selectedCaseStudy.category}</Badge>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-text">
                    {selectedCaseStudy.title}
                  </h3>
                </div>
                <Button
                  variant="icon"
                  size="sm"
                  onClick={() => setSelectedCaseStudy(null)}
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-accent" />
                </Button>
              </div>

              <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
                <h4 className="font-display font-semibold text-lg text-text">Overview</h4>
                <p>{selectedCaseStudy.description}</p>

                <h4 className="font-display font-semibold text-lg text-text pt-2">Features & Implementation</h4>
                <ul className="space-y-2">
                  {selectedCaseStudy.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-display font-semibold text-lg text-text pt-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.tech.map((t) => (
                    <Badge key={t} variant="gold">{t}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-border pt-4">
                {selectedCaseStudy.demo && (
                  <Button
                    href={selectedCaseStudy.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    iconRight={ExternalLink}
                  >
                    Live Demo
                  </Button>
                )}
                <Button
                  href={selectedCaseStudy.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  icon={FaGithub}
                >
                  View on GitHub
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
