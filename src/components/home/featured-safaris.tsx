import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { safaris } from "@/data/safaris";

export function FeaturedSafaris() {
  const featured = safaris.slice(0, 4);

  return (
    <section className="bg-[var(--color-ivory)] py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Featured journeys</div>
            <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-5xl">Featured Safaris</h2>
          </div>
          <Link href="/safaris" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)] transition hover:text-[var(--color-gold)]">
            View all safaris <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {featured.map((safari) => (
            <article key={safari.slug} className="group overflow-hidden rounded-[1.8rem] border border-[var(--color-border)] bg-white shadow-[0_18px_50px_rgba(24,18,12,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(24,18,12,0.11)]">
              <div className="relative h-72 overflow-hidden">
                <Image src={safari.image} alt={safari.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                {safari.badge ? (
                  <div className="absolute left-4 top-4 rounded-full bg-[rgba(24,18,12,0.7)] px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {safari.badge}
                  </div>
                ) : null}
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-4 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  <span>{safari.destination}</span>
                  <span>{safari.duration}</span>
                </div>

                <h3 className="font-serif text-3xl leading-none text-[var(--color-charcoal)]">{safari.name}</h3>
                <p className="text-sm leading-7 text-[var(--color-muted)]">{safari.summary}</p>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <div className="text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-gold)]">From</div>
                    <div className="mt-1 text-2xl font-semibold text-[var(--color-charcoal)]">{safari.priceFrom.replace("From ", "")}</div>
                  </div>
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
  );
}
