import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, CircleDashed } from "lucide-react";
import { notFound } from "next/navigation";
import { safaris } from "@/data/safaris";
import { PageCta } from "@/components/ui/page-cta";

export function generateStaticParams() {
  return safaris.map((safari) => ({ slug: safari.slug }));
}

export default async function SafariDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const safari = safaris.find((item) => item.slug === slug);

  if (!safari) {
    notFound();
  }

  const relatedSafaris = safaris.filter((item) => item.slug !== safari.slug).slice(0, 3);

  return (
    <main className="bg-[var(--color-ivory)] text-[var(--color-charcoal)]">
      <section className="relative overflow-hidden bg-[var(--color-charcoal)] text-white">
        <div className="relative h-[620px]">
          <Image src={safari.image} alt={safari.name} fill sizes="100vw" priority loading="eager" className="object-cover opacity-80" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,15,13,0.82),rgba(16,15,13,0.35),rgba(16,15,13,0.55))]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1400px] px-4 pb-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">{safari.region}</div>
            <h1 className="font-serif text-[clamp(2.5rem,10vw,4.5rem)] leading-none sm:text-7xl">{safari.name}</h1>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/75">
              <span>{safari.destination}</span>
              <span>•</span>
              <span>{safari.duration}</span>
              <span>•</span>
              <Link href="/plan-your-safari" className="text-[var(--color-gold)]">Request a Quote <ArrowRight className="ml-1 inline" size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-8">
            <div>
              <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Overview</div>
              <p className="max-w-3xl text-lg leading-8 text-[var(--color-muted)]">{safari.description}</p>
            </div>

            <div>
              <div className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Trip highlights</div>
              <div className="grid gap-3 md:grid-cols-2">
                {safari.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-4 text-base text-[var(--color-muted)]">
                    <Check size={18} className="text-[var(--color-gold)]" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Day by day</div>
              <div className="space-y-4">
                {safari.itinerary.map((item) => (
                  <div key={item.day} className="rounded-[1.6rem] border border-[var(--color-border)] bg-white p-6">
                    <div className="mb-2 text-[0.66rem] uppercase tracking-[0.22em] text-[var(--color-gold)]">{item.day}</div>
                    <h3 className="font-serif text-3xl leading-none text-[var(--color-charcoal)]">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border-y border-[var(--color-border)] py-6">
              <div className="text-[0.62rem] uppercase tracking-[0.22em] text-[var(--color-gold)]">Tailored journey</div>
              <div className="mt-2 font-serif text-4xl text-[var(--color-charcoal)]">Request a Quote</div>
              <div className="mt-5 space-y-3 text-sm text-[var(--color-muted)]">
                <div className="flex items-center gap-2"><Check size={16} className="text-[var(--color-gold)]" /> <span>Tailored itinerary</span></div>
                <div className="flex items-center gap-2"><Check size={16} className="text-[var(--color-gold)]" /> <span>Expert local guide</span></div>
                <div className="flex items-center gap-2"><Check size={16} className="text-[var(--color-gold)]" /> <span>Seamless logistics</span></div>
              </div>
              <Link href="/plan-your-safari" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-medium text-[#1d1a17] transition hover:bg-[#c89d4f]">
                Plan Your Safari <ArrowRight size={15} />
              </Link>
            </div>

            <div className="border-y border-[var(--color-border)] bg-transparent py-6">
              <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Accommodations</div>
              <ul className="space-y-3 text-sm text-[var(--color-muted)]">
                {safari.accommodations.map((item) => (
                  <li key={item} className="flex items-center gap-3"><CircleDashed size={16} className="text-[var(--color-gold)]" /> {item}</li>
                ))}
              </ul>
            </div>

            <div className="border-y border-[var(--color-border)] bg-transparent py-6">
              <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Includes</div>
              <ul className="space-y-3 text-sm text-[var(--color-muted)]">
                {safari.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3"><Check size={16} className="text-[var(--color-gold)]" /> {item}</li>
                ))}
              </ul>
              <div className="mt-6 mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Excludes</div>
              <ul className="space-y-3 text-sm text-[var(--color-muted)]">
                {safari.excludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <PageCta eyebrow="Plan this journey" title="Looking for something more personal?" description="Tell us what you want this journey to feel like and we&apos;ll shape the details around you." image={safari.image} />

      <section className="mx-auto max-w-[1400px] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Gallery</div>
          <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-5xl">A closer look at the journey</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {safari.gallery.map((image, index) => (
            <div key={image + index} className="relative h-80 overflow-hidden rounded-[1.8rem] border border-[var(--color-border)] bg-white">
              <Image src={image} alt={`${safari.name} gallery ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-sand)] py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">More journeys</div>
            <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-5xl">You may also like</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {relatedSafaris.map((item) => (
              <Link key={item.slug} href={`/safaris/${item.slug}`} className="group overflow-hidden rounded-[1.8rem] border border-[var(--color-border)] bg-white">
                <div className="relative h-72 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    <span>{item.destination}</span>
                    <span>{item.duration}</span>
                  </div>
                  <h3 className="font-serif text-3xl leading-none text-[var(--color-charcoal)]">{item.name}</h3>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)]">
                    Explore trip <ArrowRight size={15} />
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
