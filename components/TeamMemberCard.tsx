import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

export default function TeamMemberCard({ title, subtitle, description, imageSrc }: Props) {
  return (
    <Card className="border-border/20 bg-black/70 text-white">
      <CardContent className="space-y-4 p-6">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={600}
          className="h-56 w-full rounded-lg object-cover"
        />
        <div className="space-y-1">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-xs uppercase tracking-widest text-white/60">{subtitle}</p>
        </div>
        <p className="text-sm text-white/70">{description}</p>
      </CardContent>
    </Card>
  );
}
