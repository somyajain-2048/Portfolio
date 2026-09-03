import React from 'react';
import { cn } from '../../lib/utils';

export default function SectionLabel({
  number,
  children,
  className = '',
}) {
  return (
    <div className={cn('inline-flex items-center gap-2 mb-3', className)}>
      <span className="h-px w-6 bg-accent/60"></span>
      <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
        {number && <span className="text-accent-light mr-1.5">{number}.</span>}
        {children}
      </span>
      <span className="h-px w-6 bg-accent/60"></span>
    </div>
  );
}
