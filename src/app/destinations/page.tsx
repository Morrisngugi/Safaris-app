import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function DestinationsPage() {
  return (
    <main>
      <section className="bg-[var(--color-charcoal)] text-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-28 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Destinations</div>
            <h1 className="font-serif text-[clamp(2.5rem,10vw,4.5rem)] leading-none sm:text-7xl">Discover Africa at its most elemental.</h1>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10">
            <Image src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1400&q=80" alt="Wildlife landscape in the Maasai Mara" fill sizes="(max-width: 1024px) 100vw, 50vw" priority loading="eager" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)] py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-5xl">Every destination opens a different chapter of the continent.</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {destinations.map((destination) => (
              <Link key={destination.slug} href={`/destinations/${destination.slug}`} className="group overflow-hidden rounded-[1.8rem] border border-[var(--color-border)] bg-white shadow-[0_18px_52px_rgba(24,18,12,0.05)] transition hover:-translate-y-1">
                <div className="relative h-80 overflow-hidden">
                  <Image src={destination.image} alt={destination.name} fill sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,12,9,0.2),rgba(15,12,9,0.76))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-[0.62rem] uppercase tracking-[0.22em] text-white/75">{destination.region}</div>
                    <h3 className="mt-2 font-serif text-4xl leading-none">{destination.name}</h3>
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <p className="text-sm leading-7 text-[var(--color-muted)]">{destination.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.accents.slice(0, 3).map((accent) => (
                      <span key={accent} className="rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 px-2.5 py-1.5 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--color-gold)]">{accent}</span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)]">
                    Explore destination <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
