import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  subtitle: string;
  imageSrc: string;
  rating: number;
  text: string;
}

export default function TestimonialCard({
  title,
  subtitle,
  imageSrc,
  rating,
  text,
}: Props) {
  return (
    <Card className="border-border/20 bg-black/70 text-white">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center gap-4">
          <Image
            src={imageSrc}
            alt={title + ' avatar'}
            width={800}
            height={600}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-semibold">{title}</p>
            <p className="text-xs uppercase tracking-widest text-white/60">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cn('h-4 w-4', index < rating ? 'text-primary' : 'text-white/20')}
            />
          ))}
        </div>
        <p className="text-sm text-white/80">"{text}"</p>
      </CardContent>
    </Card>
  );
}
