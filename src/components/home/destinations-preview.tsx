import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/data/destinations";

export function DestinationsPreview() {
  const topDestinations = destinations.slice(0, 4);

  return (
    <section className="bg-[var(--color-sand)] py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Explore Africa</div>
            <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-5xl">Destinations</h2>
          </div>
          <Link href="/destinations" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)] transition hover:text-[var(--color-gold)]">
            See all destinations <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {topDestinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white"
            >
              <div className="relative h-[500px]">
                <Image src={destination.cardImage ?? destination.image} alt={destination.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,12,9,0.18),rgba(15,12,9,0.72))] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(15,12,9,0.28),rgba(15,12,9,0.84))]" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white transition-transform duration-500 group-hover:-translate-y-2">
                <div className="text-[0.62rem] uppercase tracking-[0.24em] text-white/75">{destination.region}</div>
                <h3 className="mt-3 font-serif text-4xl leading-none text-white">{destination.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">{destination.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--color-gold)]">Explore {destination.name} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
