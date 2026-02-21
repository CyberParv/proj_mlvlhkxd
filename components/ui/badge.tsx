import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground',
        className
      )}
      {...props}
    />
  );
}

export { Badge };
