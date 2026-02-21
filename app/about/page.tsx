import HeroImage from '@/components/HeroImage';
import TeamMemberCard from '@/components/TeamMemberCard';
import FeaturesGrid from '@/components/FeaturesGrid';
import { Card } from '@/components/ui/card';
import { BadgeCheck, ShieldCheck, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      title: 'Mike Thompson',
      subtitle: 'Co-Founder & Lead Technician',
      description:
        'IDA Certified Detailer with 12+ years experience. Specializes in paint correction and ceramic coatings.',
      imageSrc: '/images/team.jpg',
    },
    {
      title: 'Jake Thompson',
      subtitle: 'Co-Founder & Operations',
      description:
        'Manages day-to-day operations and ensures every customer leaves happy. Car collector and enthusiast.',
      imageSrc: '/images/team.jpg',
    },
    {
      title: 'Carlos Mendez',
      subtitle: 'Senior Detailer',
      description: '5 years with Detailing Bros. Expert in interior restoration and leather care.',
      imageSrc: '/images/team.jpg',
    },
    {
      title: 'Ashley Park',
      subtitle: 'Customer Experience',
      description:
        'Your first point of contact. Ashley ensures scheduling is seamless and every question is answered.',
      imageSrc: '/images/team.jpg',
    },
  ];

  const certifications = [
    {
      icon: ShieldCheck,
      title: 'IDA Certified Detailer',
      description: 'Industry-recognized training and standards for professional detailing.',
    },
    {
      icon: BadgeCheck,
      title: 'Ceramic Pro Certified Installer',
      description: 'Authorized for premium ceramic coating applications with warranty.',
    },
    {
      icon: Sparkles,
      title: 'Gtechniq Accredited Detailer',
      description: 'Expertise in advanced paint correction and protection.',
    },
  ];

  return (
    <main>
      <section className="min-h-[70vh] bg-black text-white">
        <HeroImage
          title="The Detailing Bros Story"
          subtitle="Two brothers, one passion: making every car look its absolute best"
          imageSrc="/images/about.jpg"
        />
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <Card className="p-8">
            <h2 className="text-3xl font-bold md:text-5xl">Started In A Garage, Now We're Here</h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              Detailing Bros was founded in 2014 by brothers Mike and Jake Thompson. What started as a weekend side
              hustle washing cars in their parents' driveway has grown into Austin's most trusted auto detailing shop.
              Our obsession with perfection and genuine love for cars drives everything we do. We've detailed over
              5,000 vehicles — from daily drivers to exotic supercars — and we treat every single one like it's our own.
            </p>
          </Card>
          <Card className="overflow-hidden">
            <img src="/images/about.jpg" alt="Founders working on a car together" className="h-full w-full object-cover" />
          </Card>
        </div>
      </section>

      <section className="bg-black py-20 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">Meet The Team</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <TeamMemberCard
                key={member.title}
                title={member.title}
                subtitle={member.subtitle}
                description={member.description}
                imageSrc={member.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FeaturesGrid
            title="Certified & Trusted"
            subtitle="We invest in ongoing training and top-tier certifications"
            items={certifications}
          />
        </div>
      </section>
    </main>
  );
}
