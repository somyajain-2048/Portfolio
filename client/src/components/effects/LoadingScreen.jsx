import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { PERSONAL_INFO } from '../../lib/constants';

export default function LoadingScreen() {
  const { isLoading, setLoading } = useStore();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 8;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999] bg-bg-dark flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-96 h-96 bg-accent/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center space-y-8 text-center px-4">
            {/* Center Logo with Rotating Gradient Ring */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Rotating outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/40 animate-spin-slow" />
              <div className="absolute inset-2 rounded-full border border-accent/20" />

              {/* Logo emblem */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-gold p-0.5 shadow-glow flex items-center justify-center">
                <div className="w-full h-full bg-bg-dark rounded-[14px] flex items-center justify-center">
                  <span className="font-display font-black text-2xl text-gradient-gold">
                    SJ
                  </span>
                </div>
              </div>
            </div>

            {/* Name & Title */}
            <div className="space-y-1.5">
              <h2 className="font-display font-bold text-2xl text-text tracking-wide">
                {PERSONAL_INFO.name}
              </h2>
              <p className="font-mono text-xs text-accent uppercase tracking-widest">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Progress Bar & Counter */}
            <div className="w-48 sm:w-64 space-y-2">
              <div className="w-full h-1.5 bg-surface-darker rounded-full overflow-hidden border border-border/60">
                <motion.div
                  className="h-full bg-gradient-gold rounded-full shadow-gold"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <div className="flex justify-between items-center font-mono text-[11px] text-text-muted">
                <span>Initializing Portfolio</span>
                <span className="text-accent font-semibold">{Math.min(progress, 100)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
