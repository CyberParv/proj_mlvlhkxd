import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  price?: string;
  subtitle?: string;
  items?: string[];
  description: string;
  featured?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ServiceCard({
  title,
  price,
  subtitle = 'Signature Detailing',
  items = [
    'Exterior foam bath and decon',
    'Interior vacuum + steam refresh',
    'Paint protection sealant',
  ],
  description,
  featured,
  ctaLabel,
  ctaHref,
}: Props) {
  return (
    <Card
      className={cn(
        'rounded-lg border border-border/20 bg-card text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/60',
        'bg-black/80',
        featured && 'border-primary/80 ring-2 ring-primary/50'
      )}
    >
      <CardHeader className="space-y-2">
        <CardTitle className="text-xl font-bold uppercase tracking-wide text-white">{title}</CardTitle>
        <p className="text-sm uppercase tracking-widest text-white/60">
          {subtitle || (price ? price : 'Signature Detailing')}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {price && (
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-bold text-primary">{price}</span>
            <span className="text-xs uppercase tracking-widest text-white/60">Per Vehicle</span>
          </div>
        )}
        <p className="text-sm text-white/70">{description}</p>
        <ul className="space-y-2 text-sm text-white/80">
          {(items ?? []).map((feature) =>
            <li key={feature} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              {feature}
            </li>
          )}
        </ul>
        {ctaLabel && ctaHref && (
          <div className="pt-2">
            <a href={ctaHref}
               className="inline-block rounded-md bg-primary px-8 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50">
              {ctaLabel}
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
