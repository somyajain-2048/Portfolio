import React from 'react';
import { cn } from '../../lib/utils';

export function Skeleton({ className = '', ...props }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-xl bg-surface-elevated/70 border border-border/40',
        className
      )}
      {...props}
    />
  );
}

export function SkeletonSection({ title = 'Loading section...' }) {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="text-center max-w-md mx-auto space-y-3">
        <Skeleton className="h-4 w-32 mx-auto rounded-full" />
        <Skeleton className="h-10 w-64 mx-auto rounded-xl" />
        <Skeleton className="h-4 w-80 mx-auto rounded-md" />
      </div>

      {/* Content Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="w-12 h-12 rounded-xl" />
              <Skeleton className="w-16 h-6 rounded-full" />
            </div>
            <Skeleton className="h-6 w-3/4 rounded-md" />
            <Skeleton className="h-16 w-full rounded-md" />
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-6 w-16 rounded-md" />
              <Skeleton className="h-6 w-16 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
