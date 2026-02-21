import HeroImage from '@/components/HeroImage';
import ContactForm from '@/components/ContactForm';
import HoursDisplay from '@/components/HoursDisplay';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <main>
      <section className="min-h-[70vh] bg-black text-white">
        <HeroImage
          title="Let's Get Your Car Looking Fresh"
          subtitle="Book an appointment, request a quote, or just say hello"
          imageSrc="/images/hero.jpg"
          primaryCtaLabel="Call (555) 234-5678"
          primaryCtaHref="tel:5552345678"
        />
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <Card className="p-8">
            <h2 className="text-3xl font-bold md:text-5xl">Request Appointment</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Tell us about your vehicle and we will confirm your appointment within one business day.
            </p>
            <div className="mt-8">
              <ContactForm submitLabel="Request Appointment" />
            </div>
          </Card>
          <Card className="p-8">
            <h3 className="text-2xl font-bold">Contact Info</h3>
            <div className="mt-4 space-y-2 text-sm md:text-base">
              <p>4521 Motor City Drive, Suite 100</p>
              <p>Austin, TX 78745</p>
              <p>Phone: (555) 234-5678</p>
              <p>Email: info@detailingbros.com</p>
            </div>
            <div className="mt-6">
              <h4 className="text-xl font-semibold">Business Hours</h4>
              <HoursDisplay
                items={[
                  { title: 'Monday - Friday', subtitle: '8:00 AM - 6:00 PM' },
                  { title: 'Saturday', subtitle: '9:00 AM - 5:00 PM' },
                  { title: 'Sunday', subtitle: 'Closed' },
                ]}
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
                <a href="https://instagram.com/detailingbros" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </Button>
              <Button asChild className="rounded-md px-8 py-4 font-bold uppercase tracking-wider" variant="outline">
                <a href="https://facebook.com/detailingbros" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </Button>
              <Button asChild className="rounded-md px-8 py-4 font-bold uppercase tracking-wider" variant="outline">
                <a href="https://tiktok.com/@detailingbros" target="_blank" rel="noreferrer">
                  TikTok
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
