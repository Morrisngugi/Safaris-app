import { Hero } from "@/components/home/hero";
import { BrandIntro } from "@/components/home/brand-intro";
import { FeaturedSafaris } from "@/components/home/featured-safaris";
import { DestinationsPreview } from "@/components/home/destinations-preview";
import { ExperiencesGrid } from "@/components/home/experiences-grid";
import { StorySection } from "@/components/home/story-section";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { Testimonials } from "@/components/home/testimonials";
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
      <StorySection />
      <GalleryPreview />
      <Testimonials />
      <JournalPreview />
      <CollaboratorsSection />
      <ConversionCta />
    </main>
  );
}
