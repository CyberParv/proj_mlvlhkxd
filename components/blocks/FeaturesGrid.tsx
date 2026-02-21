'use client';

import { Card, CardContent } from '@/components/ui/card';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}
interface FeaturesGridProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  items?: Feature[];
}

export default function FeaturesGrid({
  badge = 'Why Choose Us',
  title = 'Why Detailing Bros?',
  subtitle = "We're not just detailers — we're car enthusiasts who obsess over every detail",
  items = [],
}: FeaturesGridProps) {
  return (
    <section className="py-20 md:py-32 bg-black text-white">
      <div className="mx-auto max-w-4xl text-center">
        {badge && (
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-4">{badge}</span>
        )}
        <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
        {subtitle && <p className="mt-4 text-base md:text-lg text-white/70">{subtitle}</p>}
      </div>
      <div className="mx-auto max-w-7xl mt-16 px-2 grid gap-8 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {items.map((feature, idx) => (
          <Card
            key={feature.title + idx}
            className="border-0 bg-[#111]/90 shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardContent className="p-6 flex flex-col items-center text-center gap-2">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/20">
                {typeof feature.icon === 'function' ? <feature.icon className="h-8 w-8 text-primary" /> : feature.icon}
              </div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-sm text-white/80">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
