import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  fadeUp,
  fadeDown,
  fadeIn,
  scaleIn,
  slideLeft,
  slideRight,
  staggerContainer,
} from '../../lib/animations';

const variantsMap = {
  fadeUp,
  fadeDown,
  fadeIn,
  scaleIn,
  slideLeft,
  slideRight,
  stagger: staggerContainer,
};

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  threshold = 0.12,
  triggerOnce = true,
  className = '',
  ...props
}) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  const selectedVariant = variantsMap[variant] || fadeUp;

  return (
    <motion.div
      ref={ref}
      variants={selectedVariant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={delay}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
