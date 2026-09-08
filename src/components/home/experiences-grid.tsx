import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/data/experiences";

export function ExperiencesGrid() {
  return (
    <section className="bg-[var(--color-ivory)] py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Travel your way</div>
            <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-5xl">Experiences</h2>
          </div>
          <Link href="/experiences" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)] transition hover:text-[var(--color-gold)]">
            Explore all experiences <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {experiences.slice(0, 6).map((experience) => (
            <article key={experience.slug} className="group overflow-hidden rounded-[1.8rem] border border-[var(--color-border)] bg-white">
              <div className="relative h-64 overflow-hidden">
                <Image src={experience.image} alt={experience.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="font-serif text-3xl leading-none text-[var(--color-charcoal)]">{experience.title}</h3>
                <p className="text-sm leading-7 text-[var(--color-muted)]">{experience.description}</p>
                <div className="flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.14em] text-[var(--color-gold)]">
                  {experience.destinations.map((destination) => (
                    <span key={destination} className="rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 px-2.5 py-1.5">
                      {destination}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
