import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import HoursDisplay from '@/components/HoursDisplay';

interface FooterLink {
  label: string;
  href: string;
}

interface Props {
  title?: string;
  items?: FooterLink[];
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
}

export default function Footer({
  title = 'Detailing Bros',
  items = [
    { label: 'Inventory', href: '#inventory' },
    { label: 'Financing', href: '#financing-cta' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  phone = '(555) 234-5678',
  email = 'info@detailingbros.com',
  address = '4521 Motor City Drive, Suite 100',
  city = 'Austin, TX 78745',
}: Props) {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              DB
            </div>
            <span className="text-lg font-bold uppercase tracking-wider">{title}</span>
          </div>
          <p className="text-sm text-white/70">
            Premium detailing and curated automotive experiences for drivers who demand performance-level care.
          </p>
          <div className="flex gap-3">
            <a href="https://facebook.com" className="rounded-full border border-white/20 p-2 hover:border-primary">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" className="rounded-full border border-white/20 p-2 hover:border-primary">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://youtube.com" className="rounded-full border border-white/20 p-2 hover:border-primary">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {items.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {address}, {city}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              {phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              {email}
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">Business Hours</h4>
          <HoursDisplay
            items={[
              { title: 'Monday - Friday', subtitle: '8:00 AM - 6:00 PM' },
              { title: 'Saturday', subtitle: '9:00 AM - 5:00 PM' },
              { title: 'Sunday', subtitle: 'Closed' },
            ]}
          />
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {title}. All rights reserved.
      </div>
    </footer>
  );
}
