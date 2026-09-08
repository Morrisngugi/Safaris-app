import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BrandIntro() {
  return (
    <section className="bg-[var(--color-ivory)] py-24">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-6 lg:grid-cols-[1.07fr_0.93fr] lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white shadow-[0_32px_60px_rgba(24,18,12,0.08)]">
          <div className="relative h-[540px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"
              alt="Elephants in an African landscape"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Ivory Atlas</div>
          <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-5xl">
            Africa, Beyond the Ordinary.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
            Ivory Atlas creates personalized African journeys that combine wildlife, landscape, culture, and beautifully paced luxury. Every itinerary is shaped around how you travel, what you value, and the kind of memories you want to return with.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-muted)]">
            From first impressions to final departures, we design journeys that feel considered, immersive, and deeply personal — never rushed, never generic.
          </p>
          <Link href="/about" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-charcoal)] px-6 py-3 text-sm font-medium text-[var(--color-charcoal)] transition hover:bg-[var(--color-charcoal)] hover:text-white">
            Discover Ivory Atlas <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
