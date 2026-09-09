import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";
import { safaris } from "@/data/safaris";
import { PageCta } from "@/components/ui/page-cta";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) notFound();
  const relatedSafaris = safaris.filter((trip) => destination.safariSlugs.includes(trip.slug));
  const experiences = [...destination.highlights, ...destination.experiences].slice(0, 6);

  return (
    <main className="bg-[var(--color-ivory)] text-[var(--color-charcoal)]">
      <section className="relative isolate min-h-[650px] overflow-hidden bg-[var(--color-charcoal)] text-white sm:min-h-[760px]">
        <Image src={destination.heroImage ?? destination.image} alt={destination.name} fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,15,13,0.82),rgba(16,15,13,0.3),rgba(16,15,13,0.52))]" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1400px] px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-gold)]">{destination.name} · {destination.region}</div>
            <h1 className="font-serif text-[clamp(3.2rem,8vw,8rem)] leading-[0.84]">{destination.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{destination.summary}</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)] py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div><div className="mb-5 text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-gold)]">Sense of place</div><h2 className="font-serif text-5xl leading-[0.9] sm:text-7xl">A place with its own rhythm.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">{destination.description}</p></div>
          <div className="border-y border-[var(--color-border)] py-6"><div className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-gold)]">Best time to visit</div><p className="mt-3 font-serif text-4xl">{destination.bestTime}</p><p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">The right timing depends on the atmosphere, wildlife and pace you want from your journey.</p></div>
        </div>
      </section>

      <section className="bg-[var(--color-sand)] py-24 sm:py-32"><div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><div className="mb-5 text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-gold)]">Why go</div><h2 className="font-serif text-5xl leading-[0.9] sm:text-7xl">The experiences that define {destination.name}.</h2></div><div className="mt-14 grid gap-0 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)] sm:grid-cols-2 sm:divide-x sm:divide-y-0">{experiences.map((item) => <div key={item} className="p-6 sm:p-8"><div className="mb-4 h-px w-10 bg-[var(--color-gold)]" /><p className="font-serif text-3xl">{item}</p></div>)}</div></div></section>

      <section className="bg-[var(--color-charcoal)] py-24 text-white sm:py-32"><div className="mx-auto grid max-w-[1400px] gap-8 px-4 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8"><div className="relative min-h-[480px] overflow-hidden rounded-[1.8rem]"><Image src={destination.heroImage ?? destination.image} alt={`${destination.name} landscape`} fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" /></div><div className="flex flex-col justify-end"><div className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-gold)]">A closer look</div><p className="mt-5 font-serif text-5xl leading-[0.9] sm:text-6xl">Let the landscape set the pace.</p></div></div></section>

      <section className="bg-[var(--color-ivory)] py-24 sm:py-32"><div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8"><div className="mb-10"><div className="mb-4 text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-gold)]">Related journeys</div><h2 className="font-serif text-5xl leading-[0.9] sm:text-7xl">Journeys through {destination.name}.</h2></div><div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">{relatedSafaris.map((trip) => <Link key={trip.slug} href={`/safaris/${trip.slug}`} className="group flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between"><div><div className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-gold)]">{trip.duration} · {trip.experience}</div><h3 className="mt-2 font-serif text-4xl">{trip.name}</h3><p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">{trip.summary}</p></div><span className="inline-flex items-center gap-2 text-sm">View journey <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div></section>
      <PageCta eyebrow="Not sure where to begin?" title="Let&apos;s find the places that fit your journey." description="Tell us what draws you to Africa and we&apos;ll help shape the destinations around your journey." image={destination.heroImage ?? destination.image} />
    </main>
  );
}
