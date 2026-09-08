import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/data/experiences";

export default function ExperiencesPage() {
  return (
    <main>
      <section className="bg-[var(--color-charcoal)] text-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-28 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Experiences</div>
            <h1 className="font-serif text-[clamp(2.5rem,10vw,4.5rem)] leading-none sm:text-7xl">Travel the way you want to remember it.</h1>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10">
            <Image src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1400&q=80" alt="Luxury safari camp" fill sizes="(max-width: 1024px) 100vw, 50vw" priority loading="eager" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)] py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {experiences.map((experience) => (
              <article key={experience.slug} className="overflow-hidden rounded-[1.8rem] border border-[var(--color-border)] bg-white shadow-[0_18px_52px_rgba(24,18,12,0.05)]">
                <div className="relative h-72 overflow-hidden">
                  <Image src={experience.image} alt={experience.title} fill sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover" />
                </div>
                <div className="space-y-5 p-6">
                  <h3 className="font-serif text-4xl leading-none text-[var(--color-charcoal)]">{experience.title}</h3>
                  <p className="text-sm leading-7 text-[var(--color-muted)]">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.destinations.map((destination) => (
                      <span key={destination} className="rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 px-2.5 py-1.5 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--color-gold)]">{destination}</span>
                    ))}
                  </div>
                  <Link href="/plan-your-safari" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)] transition hover:text-[var(--color-gold)]">
                    Enquire now <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
