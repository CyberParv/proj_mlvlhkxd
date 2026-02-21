'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  value: number;
  subtitle?: string;
}

export default function StatCounter({ title, value, subtitle }: Props) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const nextValue = Math.floor(progress * value);
      if (nextValue !== start) {
        start = nextValue;
        setDisplayValue(nextValue);
      }
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <div className="space-y-2 text-center">
      <div className={cn('text-4xl font-bold text-primary')}>
        {displayValue.toLocaleString()}
      </div>
      <div className="text-sm font-semibold uppercase tracking-widest text-white/70">{title}</div>
      {subtitle && <div className="text-xs text-white/50">{subtitle}</div>}
    </div>
  );
}
