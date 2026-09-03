import React from 'react';
import { cn } from '../../lib/utils';

export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
  icon: Icon,
  ...props
}) {
  const variants = {
    default: 'bg-accent/10 text-accent border-accent/25 hover:border-accent/40',
    gold: 'bg-gradient-gold text-bg-dark font-medium border-transparent',
    surface: 'bg-surface text-text-muted border-border hover:text-text',
    glow: 'bg-accent/15 text-accent border-accent/40 shadow-gold',
    outline: 'bg-transparent text-accent border-accent/40',
  };

  const sizes = {
    xs: 'text-[10px] px-2 py-0.5 rounded gap-1 font-mono',
    sm: 'text-xs px-2.5 py-1 rounded-md gap-1.5 font-mono',
    md: 'text-sm px-3.5 py-1.5 rounded-lg gap-2 font-mono',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center font-medium border transition-colors duration-200 select-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}
