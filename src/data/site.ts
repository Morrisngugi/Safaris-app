import type { ContactConfig, NavItem } from "@/types/site";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Destinations", href: "/destinations" },
  { label: "Safaris", href: "/safaris" },
  { label: "Experiences", href: "/experiences" },
  { label: "Gallery", href: "/gallery" },
  { label: "Travel Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export const contactConfig: ContactConfig = {
  company: "Ivory Atlas Tours & Safaris Ltd.",
  tagline: "The Wild, Reimagined.",
  phone: "+254 700 000 000",
  whatsapp: "+254700000000",
  email: "hello@ivoryatlas.com",
  address: "Nairobi, Kenya",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export const siteDefaults = {
  title: "Ivory Atlas Tours & Safaris Ltd.",
  description:
    "Ivory Atlas creates premium safari and African travel experiences across East Africa with thoughtful itineraries and unforgettable journeys.",
};
