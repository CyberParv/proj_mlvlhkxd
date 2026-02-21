import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

interface PricingItem {
  title: string;
  price: string;
  description: string;
  items: string[];
  subtitle?: string;
}

interface Props {
  items?: PricingItem[];
}

export default function PricingTable({
  items = [
    {
      title: 'Essential Detail',
      price: '$189',
      description: 'Quick reset for daily drivers with a glossy finish.',
      subtitle: 'Starter',
      items: ['Exterior wash + wax', 'Interior vacuum', 'Tire shine'],
    },
    {
      title: 'Performance Detail',
      price: '$329',
      description: 'Deep clean and protection for performance vehicles.',
      subtitle: 'Most Popular',
      items: ['Clay bar decon', 'Interior steam', 'Paint sealant', 'Engine bay wipe'],
    },
    {
      title: 'Showroom Elite',
      price: '$549',
      description: 'Full correction and ceramic boost for collectors.',
      subtitle: 'Premium',
      items: ['Two-stage polish', 'Ceramic topper', 'Leather conditioning', 'Glass coating'],
    },
  ],
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((plan) => (
        <Card key={plan.title} className="relative border-border/20 bg-black/80 text-white">
          {plan.subtitle === 'Most Popular' && (
            <Badge className="absolute right-5 top-5">Most Popular</Badge>
          )}
          <CardHeader className="space-y-2">
            <CardTitle className="text-xl font-bold uppercase tracking-wide">{plan.title}</CardTitle>
            <p className="text-xs uppercase tracking-widest text-white/60">{plan.subtitle}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold text-primary">{plan.price}</div>
            <p className="text-sm text-white/70">{plan.description}</p>
            <ul className="space-y-2 text-sm text-white/80">
              {plan.items.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
