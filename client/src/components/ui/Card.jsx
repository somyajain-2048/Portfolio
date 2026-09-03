import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { cardHover } from '../../lib/animations';

export default function Card({
  children,
  variant = 'glass',
  interactive = false,
  className = '',
  ...props
}) {
  const variants = {
    glass: 'glass-card rounded-2xl p-6',
    gradient: 'gradient-border-card rounded-2xl p-6',
    surface: 'bg-surface/90 border border-border rounded-2xl p-6 shadow-md',
    flat: 'bg-surface-elevated border border-border/60 rounded-xl p-5',
  };

  const combinedClasses = cn(
    'relative transition-all duration-300',
    variants[variant],
    className
  );

  if (interactive) {
    return (
      <motion.div
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        className={combinedClasses}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}
