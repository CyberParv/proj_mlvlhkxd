import HeroImage from '@/components/HeroImage';
import PricingTable from '@/components/PricingTable';
import CTABanner from '@/components/CTABanner';

export default function ServicesPage() {
  const categories = [
    {
      title: 'Exterior Services',
      items: [
        {
          title: 'Express Exterior Wash',
          subtitle: '$49 • 30 minutes',
          description: 'Hand wash, dry, tire shine, and window cleaning',
        },
        {
          title: 'Premium Exterior Detail',
          subtitle: '$149 • 2-3 hours',
          description: 'Hand wash, clay bar, polish, wax, tire dressing, trim restoration',
        },
        {
          title: 'Paint Correction',
          subtitle: 'From $349 • 6-8 hours',
          description: 'Multi-stage machine polish to remove swirls, scratches, and oxidation',
        },
        {
          title: 'Ceramic Coating',
          subtitle: 'From $599 • 1-2 days',
          description: 'Professional ceramic coating with 2-5 year protection warranty',
        },
      ],
    },
    {
      title: 'Interior Services',
      items: [
        {
          title: 'Interior Express',
          subtitle: '$69 • 45 minutes',
          description: 'Vacuum, wipe down, window cleaning, air freshener',
        },
        {
          title: 'Full Interior Detail',
          subtitle: '$179 • 3-4 hours',
          description: 'Deep vacuum, shampoo carpets & seats, leather conditioning, dashboard detail',
        },
        {
          title: 'Odor Elimination',
          subtitle: '$99 • 4-6 hours',
          description: 'Ozone treatment and deep cleaning to remove smoke, pet, and food odors',
        },
      ],
    },
    {
      title: 'Complete Packages',
      items: [
        {
          title: 'The Works',
          subtitle: '$299 • 5-6 hours',
          description: 'Complete interior and exterior detail with clay bar and wax protection',
        },
        {
          title: 'Ultimate Package',
          subtitle: '$799 • 2-3 days',
          description: 'Paint correction, ceramic coating, full interior detail — the complete transformation',
        },
      ],
    },
  ];

  return (
    <main>
      <section className="min-h-[70vh] bg-black text-white">
        <HeroImage
          title="Professional Detailing Services"
          subtitle="From quick washes to complete paint restoration — we have a package for every need and budget"
          imageSrc="/images/hero.jpg"
          primaryCtaLabel="Get A Quote"
          primaryCtaHref="/contact"
        />
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <PricingTable title="Service Menu" subtitle="Transparent pricing with premium results" items={categories} />
        </div>
      </section>

      <section className="bg-black py-20 text-white md:py-32">
        <CTABanner
          title="Not Sure Which Service You Need?"
          subtitle="Contact us for a free consultation and we'll recommend the perfect package for your vehicle"
          primaryCtaLabel="Get Free Consultation"
          primaryCtaHref="/contact"
        />
      </section>
    </main>
  );
}
