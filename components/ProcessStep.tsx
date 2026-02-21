import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  number: string;
  description: string;
}

export default function ProcessStep({
  title,
  number,
  description,
}: Props) {
  return (
    <Card className="border-border/20 bg-white text-black shadow-lg">
      <CardContent className="flex items-start gap-6 p-6">
        <div
          className={cn(
            'flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground'
          )}
        >
          {number}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold uppercase tracking-wider">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
