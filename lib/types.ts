export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceFeature {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ServiceCategory {
  name: string;
  services: Array<{
    name: string;
    price: string;
    description: string;
    duration: string;
  }>;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  alt: string;
  category: string;
}

export interface Testimonial {
  name: string;
  vehicle: string;
  rating: number;
  text: string;
  image: string;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface BusinessHour {
  days: string;
  time: string;
}

export interface ContactField {
  name: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  label: string;
  required: boolean;
  options?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  handle?: string;
}

export interface ContactInfo {
  address: string;
  city: string;
  phone: string;
  email: string;
  hours: BusinessHour[];
  mapEmbed: boolean;
  socialLinks?: SocialLink[];
}
