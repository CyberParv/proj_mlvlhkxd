'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Phone } from 'lucide-react';

interface NavbarItem {
  label: string;
  href: string;
}

interface Props {
  title?: string;
  items?: NavbarItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Navbar({
  title = 'Detailing Bros',
  items = [
    { label: 'Inventory', href: '#inventory' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  ctaLabel = 'Book Now',
  ctaHref = '#contact',
}: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-black/95 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            DB
          </div>
          <span className="text-lg font-bold uppercase tracking-wider">{title}</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-widest text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 text-sm text-white/70 md:flex">
            <Phone className="h-4 w-4 text-primary" />
            <span>(555) 234-5678</span>
          </div>
          <a href={ctaHref}>
            <Button className="rounded-md px-6 py-3 text-xs font-bold uppercase tracking-widest">
              {ctaLabel}
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
