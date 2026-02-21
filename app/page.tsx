import HeroImage from '@/components/blocks/HeroImage';
import FeaturesGrid from '@/components/blocks/FeaturesGrid';
import ServiceCard from '@/components/ServiceCard';
import GalleryGrid from '@/components/GalleryGrid';
import TestimonialCard from '@/components/TestimonialCard';
import ProcessStep from '@/components/ProcessStep';
import StatCounter from '@/components/StatCounter';
import CTABanner from '@/components/CTABanner';
import HoursDisplay from '@/components/HoursDisplay';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Clock, Shield, Sparkles } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      title: 'Express Wash',
      price: '$49',
      duration: '30 min',
      description: 'Quick exterior hand wash, tire shine, and window cleaning',
      items: ['Hand wash', 'Tire dressing', 'Window cleaning', 'Air freshener'],
    },
    {
      title: 'Full Detail',
      price: '$199',
      duration: '3-4 hours',
      description: 'Complete interior and exterior detailing for a like-new finish',
      items: [
        'Hand wash & dry',
        'Clay bar treatment',
        'Interior vacuum & shampoo',
        'Leather conditioning',
        'Tire & trim dressing',
      ],
      featured: true,
    },
    {
      title: 'Ceramic Coating',
      price: '$599',
      duration: '1-2 days',
      description: 'Professional-grade ceramic protection for lasting shine',
      items: [
        'Paint correction',
        'Ceramic Pro coating',
        '5-year protection',
        'Hydrophobic finish',
        'UV protection',
      ],
    },
    {
      title: 'Paint Correction',
      price: '$349',
      duration: '6-8 hours',
      description: 'Remove swirls, scratches, and oxidation for a flawless finish',
      items: ['Multi-stage polish', 'Swirl removal', 'Scratch correction', 'High-gloss finish'],
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Premium Products Only',
      description:
        'We use only professional-grade products from brands like Ceramic Pro, Gtechniq, and Chemical Guys',
    },
    {
      icon: Award,
      title: 'Certified Technicians',
      description:
        'Our team is IDA certified with specialized training in paint correction and ceramic coatings',
    },
    {
      icon: Clock,
      title: 'Convenient Scheduling',
      description:
        'Book online 24/7. We offer mobile detailing and can come to your home or office',
    },
    {
      icon: Sparkles,
      title: 'Satisfaction Guaranteed',
      description:
        "Not happy? We'll re-detail your vehicle for free. That's our promise to you",
    },
  ];

  const galleryImages = [
    { imageSrc: '/images/gallery.jpg', alt: 'Black BMW M4 ceramic coating', category: 'Ceramic Coating' },
    { imageSrc: '/images/gallery.jpg', alt: 'Mercedes interior detail', category: 'Interior Detail' },
    { imageSrc: '/images/gallery.jpg', alt: 'Porsche 911 paint correction', category: 'Paint Correction' },
    { imageSrc: '/images/gallery.jpg', alt: 'Tesla Model S full detail', category: 'Full Detail' },
    { imageSrc: '/images/gallery.jpg', alt: 'Classic Mustang restoration detail', category: 'Classic Cars' },
    { imageSrc: '/images/gallery.jpg', alt: 'Range Rover wheel detail', category: 'Wheel Restoration' },
  ];

  const testimonials = [
    {
      name: 'Marcus Johnson',
      subtitle: '2023 BMW M3',
      rating: 5,
      text:
        "Brought my M3 in for ceramic coating and the results are insane. Water just beads right off. These guys know what they're doing.",
      imageSrc: '/images/team.jpg',
    },
    {
      name: 'Sarah Chen',
      subtitle: '2022 Tesla Model Y',
      rating: 5,
      text:
        'Best detailing service in the city, hands down. They got stains out of my seats that I thought were permanent. Highly recommend!',
      imageSrc: '/images/team.jpg',
    },
    {
      name: 'David Rodriguez',
      subtitle: '1967 Ford Mustang',
      rating: 5,
      text:
        'Trusted them with my classic Mustang and they treated it like their own. The paint correction brought back the original shine. True professionals.',
      imageSrc: '/images/team.jpg',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Book Online',
      description: 'Choose your service package and pick a time that works for you',
    },
    {
      number: '02',
      title: 'Drop Off or We Come To You',
      description: 'Bring your vehicle to our shop or schedule mobile detailing',
    },
    {
      number: '03',
      title: 'We Work Our Magic',
      description: 'Our certified technicians detail your vehicle with precision care',
    },
    {
      number: '04',
      title: 'Drive Away Happy',
      description: 'Pick up your showroom-ready vehicle and enjoy the shine',
    },
  ];

  return (
    <main>
      <section className="min-h-screen bg-black text-white">
        <HeroImage
          title="Your Ride Deserves The Best"
          subtitle="Premium auto detailing services that transform your vehicle. From basic washes to full ceramic coating protection — we treat every car like it's our own."
          imageSrc="/images/hero.jpg"
          primaryCtaLabel="Book Your Detail"
          primaryCtaHref="/contact"
          secondaryCtaLabel="View Services"
          secondaryCtaHref="/services"
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-20 md:grid-cols-3">
          <StatCounter value={5000} title="Cars Detailed" />
          <StatCounter value={10} title="Years Experience" />
          <StatCounter value={4.9} title="Google Rating" />
        </div>
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">Our Detailing Packages</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Professional-grade products and techniques for showroom results
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                subtitle={`${service.price} • ${service.duration}`}
                description={service.description}
                items={service.items}
                featured={service.featured}
                ctaLabel="Book Now"
                ctaHref="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FeaturesGrid
            title="Why Detailing Bros?"
            subtitle="We're not just detailers — we're car enthusiasts who obsess over every detail"
            items={features}
          />
        </div>
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">Our Work Speaks For Itself</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Before & after transformations that showcase our attention to detail
            </p>
          </div>
          <GalleryGrid items={galleryImages} />
        </div>
      </section>

      <section className="bg-black py-20 text-white md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">What Our Customers Say</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Join thousands of satisfied car owners
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                title={testimonial.name}
                subtitle={testimonial.subtitle}
                rating={testimonial.rating}
                text={testimonial.text}
                imageSrc={testimonial.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">How It Works</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Getting your car detailed has never been easier
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <ProcessStep key={step.number} title={step.title} number={step.number} description={step.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-white md:py-32">
        <CTABanner
          title="Ready To Transform Your Ride?"
          subtitle="Book your appointment today and get 15% off your first detail"
          primaryCtaLabel="Book Now"
          primaryCtaHref="/contact"
          secondaryCtaLabel="Call (555) 234-5678"
          secondaryCtaHref="tel:5552345678"
        />
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <Card className="p-8">
            <h2 className="text-3xl font-bold md:text-5xl">Visit Our Shop</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              4521 Motor City Drive, Suite 100, Austin, TX 78745
            </p>
            <div className="mt-6 space-y-2 text-sm md:text-base">
              <p>Phone: (555) 234-5678</p>
              <p>Email: info@detailingbros.com</p>
            </div>
            <div className="mt-6">
              <Button className="rounded-md px-8 py-4 font-bold uppercase tracking-wider" asChild>
                <a href="/contact">Get Directions</a>
              </Button>
            </div>
          </Card>
          <Card className="p-8">
            <h3 className="text-2xl font-bold">Business Hours</h3>
            <HoursDisplay
              items={[
                { title: 'Monday - Friday', subtitle: '8:00 AM - 6:00 PM' },
                { title: 'Saturday', subtitle: '9:00 AM - 5:00 PM' },
                { title: 'Sunday', subtitle: 'Closed' },
              ]}
            />
          </Card>
        </div>
      </section>
    </main>
  );
}
