import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EDUCATION_DATA, CERTIFICATES } from '../../lib/constants';
import SectionLabel from '../ui/SectionLabel';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section id="education" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <SectionLabel number="06">Academic & Credentials</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text">
          Education & <span className="text-gradient-gold">Certificates</span>
        </h2>
        <p className="text-text-muted text-base sm:text-lg">
          Formal engineering degree in Information Technology along with verified foundation training.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <Card variant="gradient" interactive className="p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold p-0.5 shadow-gold flex-shrink-0">
                  <div className="w-full h-full bg-bg-dark rounded-[14px] flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-text">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <p className="font-sans text-accent font-medium text-sm sm:text-base">
                    {EDUCATION_DATA.institution}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2">
                <Badge variant="gold" size="sm">
                  {EDUCATION_DATA.status}
                </Badge>
                <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>{EDUCATION_DATA.period}</span>
                </div>
              </div>
            </div>

            {/* Academic Highlights & Coursework */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <BookOpen className="w-4 h-4" />
                <span>Core Academic Coursework</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {EDUCATION_DATA.courses.map((course) => (
                  <Badge key={course} variant="surface">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Certificates Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="flex items-center gap-2 text-accent font-semibold text-base mb-2">
            <Award className="w-5 h-5" />
            <span>Certifications & Programs</span>
          </div>

          {CERTIFICATES.map((cert, idx) => (
            <Card key={idx} variant="glass" interactive className="p-5 space-y-1.5 border border-border/80">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-semibold text-sm sm:text-base text-text">{cert.title}</h4>
                  <p className="font-mono text-xs text-accent">{cert.issuer}</p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
