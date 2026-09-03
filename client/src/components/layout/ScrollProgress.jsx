import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-gold origin-left transition-transform duration-75 shadow-gold"
        style={{
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  );
}
