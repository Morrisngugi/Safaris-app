import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function StorySection() {
  return (
    <section className="bg-[var(--color-charcoal)] py-24 text-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">The Wild, Reimagined.</div>
            <h2 className="font-serif text-4xl leading-none text-white sm:text-5xl">Thoughtful travel, beautifully lived.</h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/70">
            <p>
              We believe African travel should feel immersive, considered, and quietly luxurious — not rushed, crowded, or overly scripted.
            </p>
            <p>
              Our approach blends personal itineraries, local expertise, and a deep appreciation for the landscapes we travel through. The result is a safari experience that feels authentic, restorative, and memorable from start to finish.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-0 border-y border-white/15 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Personal itineraries", "Every journey is designed around how you want to feel, move, and experience the destination."],
            ["Local knowledge", "Our planning is grounded in a detailed understanding of the landscapes, seasons, and hidden rhythms of the region."],
            ["Thoughtful service", "Seamless logistics and attentive guidance make the experience feel effortless and elevated."],
            ["Memorable moments", "From sunrise game drives to cultural encounters, every day is shaped around what matters most."],
          ].map(([title, text], index) => (
            <div key={title} className="border-b border-white/15 p-5 last:border-b-0 md:[&:nth-child(odd)]:border-r xl:border-b-0 xl:border-r xl:last:border-r-0 xl:p-7">
              <div className="mb-5 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[var(--color-gold)]"><span className="font-serif text-2xl">0{index + 1}</span><span>{title}</span></div>
              <p className="text-base leading-7 text-white/70">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/plan-your-safari" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[#1d1a17] transition hover:bg-[#c89d4f]">
            Plan Your Safari <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
