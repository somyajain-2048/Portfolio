/**
 * Framer Motion Animation Variants & Easings
 * Luxury feel using custom cubic-bezier curves
 */

export const easings = {
  luxury: [0.16, 1, 0.3, 1], // Expo out for refined smoothness
  smooth: [0.4, 0.0, 0.2, 1.0],
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  bounce: { type: 'spring', stiffness: 400, damping: 10 }
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
      ease: easings.luxury
    }
  })
};

export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
      ease: easings.luxury
    }
  })
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: 'easeOut'
    }
  })
};

export const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.15,
      ease: easings.luxury
    }
  })
};

export const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.15,
      ease: easings.luxury
    }
  })
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: custom * 0.1,
      ease: easings.luxury
    }
  })
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  hover: {
    scale: 1.02,
    y: -6,
    transition: { duration: 0.3, ease: easings.luxury }
  }
};
