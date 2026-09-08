import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[var(--color-charcoal)] text-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-28 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">About us</div>
            <h1 className="font-serif text-[clamp(2.5rem,10vw,4.5rem)] leading-none sm:text-7xl">A more thoughtful way to travel Africa.</h1>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10">
            <Image src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80" alt="Safari landscape" fill sizes="(max-width: 1024px) 100vw, 40vw" priority loading="eager" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)] py-24">
        <div className="mx-auto max-w-[1200px] space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Our story</div>
            <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-5xl">Ivory Atlas was built around the idea that travel should feel personal, immersive, and beautifully paced.</h2>
          </div>
          <p className="max-w-4xl text-lg leading-8 text-[var(--color-muted)]">
            We craft journeys across East Africa for travelers who want more than a standard itinerary. At Ivory Atlas, each trip is shaped around the pace you enjoy, the landscapes you value, and the kind of memories you want to bring home. We balance wildlife, culture, comfort, and local understanding so the experience feels both elevated and authentic.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-sand)] py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Our philosophy</div>
            <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-5xl">At the heart of every trip, a deeper connection to place.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Thoughtful planning", "We design journeys with clarity, rhythm, and intention so every day feels rewarding."],
              ["Local expertise", "Our planning is informed by the realities of the regions we know best."],
              ["Responsible travel", "We believe meaningful travel should also respect the environments and communities we visit."],
              ["Elegant comfort", "Luxury is expressed through seamless service, beautiful stays, and well-paced experiences."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.7rem] border border-[var(--color-border)] bg-white p-7">
                <div className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[var(--color-gold)]">{title}</div>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)] py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-8">
              <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Mission</div>
              <h3 className="font-serif text-4xl leading-none text-[var(--color-charcoal)]">To craft extraordinary journeys that feel personal, seamless, and unforgettable.</h3>
            </div>
            <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-8">
              <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Values</div>
              <ul className="space-y-3 text-base leading-7 text-[var(--color-muted)]">
                <li>• Authenticity over excess</li>
                <li>• Personal attention and care</li>
                <li>• Responsible, respectful travel</li>
                <li>• Quality over volume</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-charcoal)] py-24 text-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Why travel with us</div>
            <h2 className="font-serif text-4xl leading-none text-white sm:text-5xl">A boutique approach to East African travel.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "We blend safari adventure with refined, human-centered service.",
              "We work closely with trusted local partners to shape better experiences on the ground.",
              "We design time with intention so your trip feels restorative rather than rushed.",
              "We focus on the details that make a journey memorable: the right camp, the right timing, the right pace."
            ].map((point) => (
              <div key={point} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-base leading-7 text-white/75">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)] py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            <div>
              <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Start planning</div>
              <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-5xl">Let us shape your next African story.</h2>
            </div>
            <Link href="/plan-your-safari" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[#1d1a17] transition hover:bg-[#c89d4f]">
              Plan Your Safari <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
