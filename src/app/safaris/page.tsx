import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { safaris } from "@/data/safaris";
import { PageCta } from "@/components/ui/page-cta";

export default function SafarisPage() {
  return (
    <main>
      <section className="bg-[var(--color-charcoal)] text-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-28 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Safari journeys</div>
            <h1 className="font-serif text-[clamp(2.5rem,10vw,4.5rem)] leading-none sm:text-7xl">Journeys shaped for wonder.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">Thoughtfully paced itineraries designed around remarkable wildlife, beautiful places and the way you want to travel.</p>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10">
            <Image src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1400&q=80" alt="African safari landscape" fill sizes="(max-width: 1024px) 100vw, 50vw" priority loading="eager" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)] py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-6xl">Curated journeys for the way you want to travel.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {safaris.map((safari, index) => (
              <article key={safari.slug} className={`group overflow-hidden border-b border-[var(--color-border)] pb-8 ${index === 0 ? "lg:col-span-2" : ""}`}>
                <div className={`relative overflow-hidden ${index === 0 ? "h-[420px]" : "h-72"}`}>
                  <Image src={safari.image} alt={safari.name} fill sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  {safari.badge ? (
                    <div className="absolute left-4 top-4 rounded-full bg-[rgba(24,18,12,0.72)] px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.18em] text-white">{safari.badge}</div>
                  ) : null}
                </div>
                <div className="space-y-5 p-6">
                  <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    <span>{safari.destination}</span>
                    <span>{safari.duration}</span>
                  </div>
                  <h3 className="font-serif text-4xl leading-none text-[var(--color-charcoal)]">{safari.name}</h3>
                  <p className="text-sm leading-7 text-[var(--color-muted)]">{safari.summary}</p>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-4">
                    <div className="text-sm font-medium text-[var(--color-gold)]">Request a Quote</div>
                    <Link href={`/safaris/${safari.slug}`} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-charcoal)] px-4 py-2 text-sm font-medium text-[var(--color-charcoal)] transition hover:bg-[var(--color-charcoal)] hover:text-white">
                      View trip <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PageCta eyebrow="Looking for something more personal?" title="We&apos;ll shape the journey around you." description="Start with a conversation about the places, pace and experiences that matter most." image={safaris[0].image} />
    </main>
  );
}
