import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { safaris } from "@/data/safaris";

export function FeaturedSafaris() {
  const [featured, ...supporting] = safaris.slice(0, 4);

  return (
    <section className="bg-[var(--color-ivory)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Signature journeys</div>
            <h2 className="max-w-2xl font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-6xl">Africa, one remarkable journey at a time.</h2>
          </div>
          <Link href="/safaris" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)] transition hover:text-[var(--color-gold)]">
            View all safaris <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <Link href={`/safaris/${featured.slug}`} className="group relative isolate min-h-[520px] overflow-hidden rounded-[2rem] bg-[var(--color-charcoal)] text-white sm:min-h-[600px]">
            <Image src={featured.image} alt={featured.name} fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,12,9,0.08),rgba(15,12,9,0.86))] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(15,12,9,0.16),rgba(15,12,9,0.9))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <div className="mb-4 flex flex-wrap gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-white/70"><span>{featured.destination}</span><span>·</span><span>{featured.duration}</span></div>
              <h3 className="max-w-2xl font-serif text-5xl leading-[0.9] sm:text-7xl">{featured.name}</h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">{featured.summary}</p>
              <div className="mt-7 flex flex-wrap items-center gap-6 text-sm">
                <span className="text-[var(--color-gold)]">{featured.priceFrom}</span>
                <span className="inline-flex items-center gap-2 font-medium">Request a Quote <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
              </div>
            </div>
          </Link>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {supporting.map((safari) => (
              <Link key={safari.slug} href={`/safaris/${safari.slug}`} className="group relative isolate min-h-56 overflow-hidden rounded-[1.6rem] bg-[var(--color-charcoal)] text-white lg:min-h-0 lg:flex-1">
                <Image src={safari.image} alt={safari.name} fill sizes="(max-width: 1024px) 33vw, 35vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,12,9,0.05),rgba(15,12,9,0.86))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-gold)]">{safari.destination} · {safari.duration}</div>
                  <h3 className="mt-2 font-serif text-3xl leading-none">{safari.name}</h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm text-white/75">Explore <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
