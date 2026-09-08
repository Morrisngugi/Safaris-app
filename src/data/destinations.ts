import type { Destination } from "@/types/site";

export const destinations: Destination[] = [
  {
    slug: "maasai-mara",
    name: "Maasai Mara",
    region: "Kenya",
    summary: "The iconic Great Migration meeting ground for dramatic plains and big cat encounters.",
    description:
      "Set across the rolling grasslands of southwestern Kenya, the Maasai Mara is where the wild feels cinematic. Guests enjoy sunrise game drives, luxury tented camps, and the unforgettable rhythm of the Great Migration.",
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80",
    accents: ["Great Migration", "Big Cats", "Luxury Camps"],
    bestTime: "July to October",
    highlights: ["Hot air balloon safari", "Big five tracking", "Mara River crossings"],
    experiences: ["Wildlife safaris", "Luxury escapes", "Private bush dinners"],
    safariSlugs: ["mara-great-migration", "maasai-mara-signature"],
  },
  {
    slug: "amboseli",
    name: "Amboseli",
    region: "Kenya",
    summary: "Elephants framed by the unmistakable silhouette of Mount Kilimanjaro.",
    description:
      "Amboseli is celebrated for its open plains, big elephant herds, and extraordinary views of Kili. It is an ideal destination for guests looking for dramatic wildlife photography and a more intimate safari rhythm.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    accents: ["Elephants", "Kilimanjaro Views", "Photographic Safaris"],
    bestTime: "June to October",
    highlights: ["Elephant herds", "Lake Amboseli", "Iconic mountain backdrop"],
    experiences: ["Photography tours", "Private bush drives", "Luxury camp stays"],
    safariSlugs: ["amboseli-elephant-experience"],
  },
  {
    slug: "serengeti",
    name: "Serengeti",
    region: "Tanzania",
    summary: "An endless wilderness of golden plains and extraordinary predator sightings.",
    description:
      "The Serengeti is one of the most iconic safari landscapes on earth, rich in wildlife and legendary migration routes. It offers vast horizons, immersive game drives, and some of Africa's most spectacular predator moments.",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80",
    accents: ["Migration", "Predators", "Open Plains"],
    bestTime: "June to October",
    highlights: ["Migration viewing", "Cheetah and lion sightings", "Remote luxury camps"],
    experiences: ["Wildlife safaris", "Adventure travel", "Exclusive mobile camps"],
    safariSlugs: ["serengeti-immersion"],
  },
  {
    slug: "ngorongoro",
    name: "Ngorongoro",
    region: "Tanzania",
    summary: "A caldera of extraordinary biodiversity and sweeping highland scenery.",
    description:
      "Ngorongoro combines volcanic landscapes, dense wildlife populations, and high-altitude beauty in a single unforgettable destination. It is a superb choice for families and travelers who want both scenery and varied animal encounters.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    accents: ["Crater Lodge", "Conservation", "Highland Views"],
    bestTime: "June to March",
    highlights: ["Crater drives", "Big five encounters", "Unique geological landscape"],
    experiences: ["Family safaris", "Cultural journeys", "Wildlife viewing"],
    safariSlugs: ["ngorongoro-highlands"],
  },
  {
    slug: "zanzibar",
    name: "Zanzibar",
    region: "Tanzania",
    summary: "Island beaches, spice trails, and laid-back luxury after the safari rush.",
    description:
      "Zanzibar blends white-sand beaches, historic Stone Town, and warm turquoise waters. It is the perfect coastal counterpoint to a safari itinerary, offering rest, culture, and ocean-front elegance.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    accents: ["Beach Retreat", "Stone Town", "Luxury Coast"],
    bestTime: "June to October",
    highlights: ["Beach escapes", "Spice tours", "Sunset dhow cruises"],
    experiences: ["Beach holidays", "Honeymoons", "Cultural experiences"],
    safariSlugs: ["zanzibar-beach-combine"],
  },
  {
    slug: "samburu",
    name: "Samburu",
    region: "Kenya",
    summary: "A striking northern frontier rich in dry-country wildlife and cultural heritage.",
    description:
      "Samburu offers a more rugged and intimate safari experience, with dramatic desert landscapes and unique species such as Grevy's zebra and reticulated giraffe. It is ideal for travelers seeking a distinctive and bold African journey.",
    image:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=80",
    accents: ["Northern Kenya", "Rare Species", "Cultural Encounters"],
    bestTime: "June to September",
    highlights: ["Unique wildlife", "River walks", "Community visits"],
    experiences: ["Adventure travel", "Cultural journeys", "Private guiding"],
    safariSlugs: ["samburu-northern-frontier"],
  },
];
