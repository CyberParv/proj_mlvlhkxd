'use client';

import { Button } from '@/components/ui/button';

interface HeroImageProps {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function HeroImage({
  imageSrc = '/images/hero.jpg',
  title = 'Your Ride Deserves The Best',
  subtitle = "Premium auto detailing services that transform your vehicle. From basic washes to full ceramic coating protection — we treat every car like it's our own.",
  primaryCtaLabel = 'Book Your Detail',
  primaryCtaHref = '/contact',
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroImageProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt="High-end sports car with glossy finish"
          className="h-full w-full object-cover"
        />
        {/* Overlay for dramatic contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>
      <div className="relative z-10 w-full container mx-auto max-w-7xl px-6 flex flex-col items-center text-center text-white py-20">
        <span className="inline-flex items-center rounded-full bg-primary/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
          Premium Auto Detailing
        </span>
        <h1 className="mt-6 text-5xl font-bold md:text-7xl lg:text-8xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/90">{subtitle}</p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row justify-center">
          <Button
            size="lg"
            className="rounded-md px-8 py-4 font-bold uppercase tracking-wider text-lg bg-primary text-white hover:bg-primary/90"
            asChild
          >
            <a href={primaryCtaHref}>{primaryCtaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button
              variant="outline"
              size="lg"
              className="rounded-md px-8 py-4 font-bold uppercase tracking-wider text-lg border-white text-white hover:bg-white/10"
              asChild
            >
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
