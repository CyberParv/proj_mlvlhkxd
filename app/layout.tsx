import './globals.css';
import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-barlow',
});

export const metadata: Metadata = {
  title: 'Detailing Bros | Premium Auto Detailing in Austin, TX',
  description:
    "Austin's trusted auto detailing experts. Professional car wash, paint correction, ceramic coating & interior detailing. Book online or call (555) 234-5678.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <html lang="en" className={barlow.variable}>
      <body className="bg-background text-foreground">
        <Navbar items={navItems} ctaLabel="Book Now" ctaHref="/contact" />
        {children}
        <Footer
          items={navItems}
          phone="(555) 234-5678"
          email="info@detailingbros.com"
          address="4521 Motor City Drive, Suite 100"
          city="Austin, TX 78745"
        />
      </body>
    </html>
  );
}
