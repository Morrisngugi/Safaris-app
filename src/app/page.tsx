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
