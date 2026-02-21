import { Button } from '@/components/ui/button';

interface Props {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTABanner({
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel = 'View Inventory',
  secondaryCtaHref = '#inventory',
}: Props) {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">{title}</h2>
          <p className="max-w-xl text-sm text-white/70 md:text-base">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={primaryCtaHref}>
            <Button className="rounded-md px-8 py-4 text-xs font-bold uppercase tracking-widest">
              {primaryCtaLabel}
            </Button>
          </a>
          <a href={secondaryCtaHref}>
            <Button variant="outline" className="rounded-md px-8 py-4 text-xs font-bold uppercase tracking-widest">
              {secondaryCtaLabel}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
