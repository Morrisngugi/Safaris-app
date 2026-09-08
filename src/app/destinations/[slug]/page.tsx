import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";
import { safaris } from "@/data/safaris";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    notFound();
  }

  const relatedSafaris = safaris.filter((trip) => destination.safariSlugs.includes(trip.slug));

  return (
    <main className="bg-[var(--color-ivory)] text-[var(--color-charcoal)]">
      <section className="relative overflow-hidden bg-[var(--color-charcoal)] text-white">
        <div className="relative h-[560px]">
          <Image src={destination.image} alt={destination.name} fill sizes="100vw" priority loading="eager" className="object-cover opacity-80" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,15,13,0.8),rgba(16,15,13,0.4),rgba(16,15,13,0.6))]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1400px] px-4 pb-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">{destination.region}</div>
            <h1 className="font-serif text-[clamp(2.5rem,10vw,4.5rem)] leading-none sm:text-7xl">{destination.name}</h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div>
              <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Overview</div>
              <p className="text-lg leading-8 text-[var(--color-muted)]">{destination.description}</p>
            </div>

            <div>
              <div className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Highlights</div>
              <div className="grid gap-3 md:grid-cols-2">
                {destination.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-4 text-base text-[var(--color-muted)]">
                    <Check size={18} className="text-[var(--color-gold)]" /> {highlight}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Best time to visit</div>
              <div className="rounded-[1.8rem] border border-[var(--color-border)] bg-white p-6 text-lg text-[var(--color-muted)]">
                {destination.bestTime}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[1.8rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_48px_rgba(24,18,12,0.04)]">
              <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Experiences</div>
              <ul className="space-y-3 text-sm text-[var(--color-muted)]">
                {destination.experiences.map((experience) => (
                  <li key={experience} className="flex items-center gap-3"><Check size={16} className="text-[var(--color-gold)]" /> {experience}</li>
                ))}
              </ul>
              <Link href="/plan-your-safari" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-medium text-[#1d1a17] transition hover:bg-[#c89d4f]">
                Enquire about this destination <ArrowRight size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Related safaris</div>
          <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-5xl">Explore journeys in {destination.name}</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {relatedSafaris.map((trip) => (
            <Link key={trip.slug} href={`/safaris/${trip.slug}`} className="group overflow-hidden rounded-[1.8rem] border border-[var(--color-border)] bg-white">
              <div className="relative h-72 overflow-hidden">
                <Image src={trip.image} alt={trip.name} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  <span>{trip.destination}</span>
                  <span>{trip.duration}</span>
                </div>
                <h3 className="font-serif text-3xl leading-none text-[var(--color-charcoal)]">{trip.name}</h3>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)]">
                  View safari <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
