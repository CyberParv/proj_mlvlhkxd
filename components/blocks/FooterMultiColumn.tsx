import Link from 'next/link';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand?: string;
  description?: string;
  columns?: FooterColumn[];
  copyright?: string;
}

export default function FooterMultiColumn({
  brand = 'Velocity Motors',
  description = 'Premium inventory, precision service, and performance-driven financing for enthusiasts who demand more.',
  columns = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Inventory', href: '/inventory' },
        { label: 'Financing', href: '/financing' },
        { label: 'Service Center', href: '/service' },
        { label: 'Book a Test Drive', href: '/test-drive' },
      ],
    },
    {
      title: 'Vehicles',
      links: [
        { label: 'Performance Coupes', href: '/inventory?type=coupe' },
        { label: 'Luxury SUVs', href: '/inventory?type=suv' },
        { label: 'Electric Sport', href: '/inventory?type=ev' },
        { label: 'Certified Pre-Owned', href: '/inventory?type=cpo' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'YouTube', href: 'https://youtube.com' },
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
      ],
    },
  ],
  copyright,
}: FooterMultiColumnProps) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold">{brand}</h3>
            <p className="mt-3 text-sm text-background/70">{description}</p>
            <div className="mt-6 space-y-2 text-sm text-background/70">
              <p>1280 Apex Drive, Los Angeles, CA</p>
              <p>(555) 482-9901</p>
              <p>concierge@velocitymotors.com</p>
            </div>
          </div>
          {columns.map(function (col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function (link) {
                    return (
                      <li key={link.href}>
                        <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-background">
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="my-8 h-px w-full bg-background/20" />
        <p className="text-center text-sm text-background/50">
          {copyright || ('© ' + new Date().getFullYear() + ' ' + brand + '. All rights reserved.')}
        </p>
      </div>
    </footer>
  );
}
