import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { BrandIntro } from "@/components/home/brand-intro";
import { FeaturedSafaris } from "@/components/home/featured-safaris";
import { DestinationsPreview } from "@/components/home/destinations-preview";
import { ExperiencesGrid } from "@/components/home/experiences-grid";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { VisualBreak } from "@/components/home/visual-break";
import { JournalPreview } from "@/components/home/journal-preview";
import { ConversionCta } from "@/components/home/conversion-cta";
import { CollaboratorsSection } from "@/components/home/collaborators-section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Ivory Atlas Tours & Safaris | Kenya Safari Experiences",
  description:
    "Ivory Atlas creates thoughtfully crafted Kenya safari journeys across iconic destinations such as Maasai Mara, Amboseli, Samburu and Ol Pejeta, with easy extensions to the coast and Diani beach.",
  path: "/",
  image: "/brand/logo.jpg",
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BrandIntro />
      <FeaturedSafaris />
      <DestinationsPreview />
      <ExperiencesGrid />
      <GalleryPreview />
      <VisualBreak />
      <JournalPreview />
      <CollaboratorsSection />
      <ConversionCta />
    </main>
  );
}
