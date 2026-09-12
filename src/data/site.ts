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
  tagline: "THE WILD, REIMAGINED.",
  phoneDisplay: "+254181457571",
  phoneHref: "tel:+254181457571",
  email: "info@ivoryatlastours.com",
  whatsappNumber: "+254181457571",
  address: "Nairobi, Kenya",
};

export const siteDefaults = {
  title: "Ivory Atlas Tours & Safaris Ltd.",
  description:
    "Ivory Atlas creates premium safari and African travel experiences across Kenya with thoughtful itineraries and unforgettable journeys.",
};
