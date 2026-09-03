import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

const variants = {
  primary: `
    bg-gradient-gold text-bg-dark font-semibold shadow-gold 
    hover:opacity-95 hover:shadow-glow
    border border-accent/40
  `,
  secondary: `
    bg-surface/80 text-accent font-medium backdrop-blur-md
    border border-accent/40 hover:bg-accent/15 hover:border-accent
    hover:shadow-gold
  `,
  ghost: `
    bg-transparent text-text-muted hover:text-accent hover:bg-surface/50
    border border-transparent hover:border-border
  `,
  outline: `
    bg-transparent text-text border border-border hover:border-accent hover:text-accent
  `,
  icon: `
    p-2.5 rounded-full bg-surface/80 text-text hover:text-accent 
    border border-border hover:border-accent/50 hover:shadow-gold
    backdrop-blur-md flex items-center justify-center
  `
};

const sizes = {
  sm: 'px-3.5 py-1.5 text-xs rounded-md gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-lg gap-2',
  lg: 'px-7 py-3.5 text-base rounded-xl gap-2.5',
  icon: 'w-10 h-10',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  isLoading = false,
  disabled = false,
  icon: Icon,
  iconRight: IconRight,
  onClick,
  type = 'button',
  asChild = false,
  href,
  target,
  rel,
  ...props
}) {
  const isIconButton = variant === 'icon';
  const sizeClasses = isIconButton ? sizes.icon : sizes[size];
  const combinedClasses = cn(
    'inline-flex items-center justify-center font-sans transition-all duration-300 relative select-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
    variants[variant],
    sizeClasses,
    className
  );

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
      {!isLoading && Icon && <Icon className={cn('w-4 h-4', children ? '' : 'mx-auto')} />}
      {children}
      {!isLoading && IconRight && <IconRight className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={combinedClasses}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      whileHover={{ scale: disabled || isLoading ? 1 : 1.02, y: disabled || isLoading ? 0 : -2 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
      className={combinedClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
}
