interface HourItem {
  title: string;
  subtitle: string;
}

interface Props {
  items?: HourItem[];
}

export default function HoursDisplay({
  items = [
    { title: 'Monday', subtitle: '8:00 AM - 6:00 PM' },
    { title: 'Tuesday', subtitle: '8:00 AM - 6:00 PM' },
    { title: 'Wednesday', subtitle: '8:00 AM - 6:00 PM' },
    { title: 'Thursday', subtitle: '8:00 AM - 6:00 PM' },
    { title: 'Friday', subtitle: '8:00 AM - 7:00 PM' },
    { title: 'Saturday', subtitle: '9:00 AM - 4:00 PM' },
    { title: 'Sunday', subtitle: 'Closed' },
  ],
}: Props) {
  return (
    <div className="space-y-2 text-sm text-white/70">
      {items.map((item) => (
        <div key={item.title} className="flex items-center justify-between">
          <span>{item.title}</span>
          <span className="font-semibold text-white/80">{item.subtitle}</span>
        </div>
      ))}
    </div>
  );
}
