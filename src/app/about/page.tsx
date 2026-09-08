import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const philosophy = [
  ["Thoughtful planning", "Every journey is shaped with clarity, rhythm and intention so each day feels rewarding rather than rushed."],
  ["Local expertise", "Our approach is informed by an understanding of the destinations, seasons and experiences that define East Africa."],
  ["Responsible travel", "Meaningful travel should respect the landscapes, wildlife and communities that make each journey possible."],
  ["Elegant comfort", "Luxury is not excess. It is thoughtful service, beautiful stays, seamless logistics and space to enjoy the journey."],
];

const values = [
  "Authenticity over excess",
  "Personal attention and care",
  "Respect for place and people",
  "Quality over volume",
];

const difference = [
  ["Personal by design", "Every itinerary begins with the traveller, not a template. The pace, places and experiences should reflect how they want to experience Africa."],
  ["Rooted in East Africa", "Journeys are shaped by an understanding of the destinations, seasons and experiences that make the region extraordinary."],
  ["Considered from start to finish", "From the rhythm of an itinerary to accommodation and logistics, every element should work together naturally."],
  ["Personal communication", "Travel planning should feel reassuring and uncomplicated, with clear communication throughout the journey-planning process."],
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[var(--color-charcoal)] text-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-8 lg:pb-32">
          <div className="relative z-10 lg:-mr-28 lg:pb-10">
            <div className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">About Ivory Atlas</div>
            <h1 className="max-w-3xl font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.86]">Africa is more than a destination. It&apos;s a story you step into.</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">We create thoughtful journeys through East Africa, shaped around remarkable places, meaningful encounters and the freedom to experience them at your own pace.</p>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-white/10 sm:min-h-[560px]">
            <Image src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1600&q=85" alt="African wildlife moving across open plains" fill sizes="(max-width: 1024px) 100vw, 65vw" priority loading="eager" className="object-cover transition duration-1000 hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,12,9,0.02),rgba(15,12,9,0.42))]" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.22em] text-white/75 sm:bottom-7 sm:left-7"><span className="h-px w-10 bg-[var(--color-gold)]" /> East Africa, thoughtfully experienced</div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)] py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-[1.8rem] sm:min-h-[600px] lg:order-2">
            <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=85" alt="Elephants crossing an East African landscape" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover transition duration-1000 hover:scale-[1.03]" />
          </div>
          <div className="max-w-2xl lg:order-1 lg:pl-12">
            <div className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Our story</div>
            <h2 className="font-serif text-5xl leading-[0.92] text-[var(--color-charcoal)] sm:text-7xl">Born from a different idea of African travel.</h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-[var(--color-muted)]">
              <p>Ivory Atlas is built around a simple belief: the best journeys are not rushed, generic or defined only by a checklist of places.</p>
              <p>We create travel experiences shaped around the traveller - balancing wildlife, landscapes, culture, comfort and time to genuinely experience each destination.</p>
              <p>Every journey should feel personal, beautifully paced and worth remembering long after the traveller returns home.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-sand)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Our philosophy</div>
            <h2 className="font-serif text-5xl leading-[0.92] text-[var(--color-charcoal)] sm:text-7xl">Travel should leave you with more than photographs.</h2>
          </div>
          <div className="mt-16 divide-y divide-[var(--color-charcoal)]/15 border-y border-[var(--color-charcoal)]/15">
            {philosophy.map(([title, text]) => (
              <div key={title} className="grid gap-4 py-7 sm:grid-cols-[0.7fr_1.3fr] sm:gap-12 sm:py-9">
                <h3 className="font-serif text-3xl leading-none text-[var(--color-charcoal)] sm:text-4xl">{title}</h3>
                <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[var(--color-charcoal)]">
        <div className="relative min-h-[520px] sm:min-h-[640px]">
          <Image src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1800&q=85" alt="Expansive Serengeti landscape under a wide sky" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,15,13,0.75),rgba(16,15,13,0.18),rgba(16,15,13,0.42))]" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1400px] px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
            <div className="max-w-xl text-white"><div className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">The wild, reimagined.</div><p className="mt-5 font-serif text-4xl leading-none sm:text-6xl">Travel deeper. Stay longer. Remember more.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)] py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-2xl"><div className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Mission</div><h2 className="font-serif text-5xl leading-[0.92] text-[var(--color-charcoal)] sm:text-7xl">To craft extraordinary journeys that feel personal, seamless and unforgettable.</h2></div>
          <div className="border-t border-[var(--color-border)] pt-6"><div className="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Values</div><ul className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">{values.map((value) => <li key={value} className="py-4 text-lg text-[var(--color-muted)]">{value}</li>)}</ul></div>
        </div>
      </section>

      <section className="bg-[var(--color-charcoal)] py-24 text-white sm:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div><div className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">The Ivory Atlas difference</div><h2 className="font-serif text-5xl leading-[0.92] sm:text-7xl">Designed around you. Grounded in Africa.</h2><div className="relative mt-10 hidden min-h-[280px] overflow-hidden rounded-[1.5rem] lg:block"><Image src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1000&q=85" alt="A refined safari camp in East Africa" fill sizes="30vw" className="object-cover" /></div></div>
          <div className="divide-y divide-white/15 border-y border-white/15">{difference.map(([title, text]) => <div key={title} className="py-7 sm:py-9"><h3 className="font-serif text-3xl text-white sm:text-4xl">{title}</h3><p className="mt-3 max-w-xl text-base leading-7 text-white/65">{text}</p></div>)}</div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[var(--color-charcoal)] text-white">
        <div className="absolute inset-0"><Image src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1800&q=85" alt="Wildlife in an East African landscape" fill sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,15,13,0.88),rgba(16,15,13,0.5),rgba(16,15,13,0.4))]" /></div>
        <div className="relative mx-auto max-w-[1400px] px-4 py-28 sm:px-6 sm:py-36 lg:px-8"><div className="max-w-2xl"><div className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Ready when you are</div><h2 className="font-serif text-5xl leading-[0.9] sm:text-7xl">Let Africa become part of your story.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/75">Tell us how you imagine your journey. We&apos;ll help shape the experience around you.</p><div className="mt-9 flex flex-col gap-4 sm:flex-row"><Link href="/plan-your-safari" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[#1d1a17] transition hover:bg-[#c89d4f]">Plan Your Safari <ArrowRight size={16} /></Link><Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">Talk to Us <ArrowRight size={16} /></Link></div></div></div>
      </section>
    </main>
  );
}
