export type NavItem = {
  label: string;
  href: string;
};

export type Destination = {
  slug: string;
  name: string;
  region: string;
  summary: string;
  description: string;
  image: string;
  accents: string[];
  bestTime: string;
  highlights: string[];
  experiences: string[];
  safariSlugs: string[];
};

export type Safari = {
  slug: string;
  name: string;
  destination: string;
  region: string;
  duration: string;
  summary: string;
  description: string;
  image: string;
  gallery: string[];
  priceFrom: string;
  badge?: string;
  highlights: string[];
  itinerary: Array<{ day: string; title: string; description: string }>;
  accommodations: string[];
  includes: string[];
  excludes: string[];
  experience: string;
};

export type Experience = {
  slug: string;
  title: string;
  description: string;
  image: string;
  destinations: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  destination: string;
};

export type GalleryItem = {
  title: string;
  image: string;
  alt: string;
  category: string;
  caption?: string;
};

export type JournalArticle = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  publishedAt: string;
  readTime: string;
  body: string[];
};

export type ContactConfig = {
  company: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
};
