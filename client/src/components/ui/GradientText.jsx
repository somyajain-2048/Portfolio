import React from 'react';
import { cn } from '../../lib/utils';

export default function GradientText({
  as: Component = 'span',
  children,
  className = '',
  gradient = 'gold',
  ...props
}) {
  const gradientStyles = {
    gold: 'text-gradient-gold',
    silver: 'bg-gradient-to-r from-text to-text-muted bg-clip-text text-transparent',
    accent: 'bg-gradient-to-r from-accent to-primary-brown bg-clip-text text-transparent',
  };

  return (
    <Component
      className={cn('inline-block font-display', gradientStyles[gradient], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
