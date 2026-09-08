import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1d1a17]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1800&q=80"
          alt="Safari plains in East Africa"
          fill
          priority
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,15,13,0.82),rgba(16,15,13,0.32),rgba(16,15,13,0.42))]" />
      </div>

      <div className="relative mx-auto flex min-h-[760px] max-w-[1400px] items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white/85 backdrop-blur-sm">
            Ivory Atlas Tours & Safaris
          </div>

          <h1 className="max-w-2xl font-serif text-5xl leading-[0.92] text-white sm:text-6xl lg:text-8xl">
            Journeys Through Africa,
            <span className="mt-2 block text-[var(--color-gold)]">Thoughtfully Crafted.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/75 sm:text-xl">
            Discover extraordinary safaris, remarkable landscapes and deeply personal travel experiences across East Africa.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/safaris"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3.5 text-sm font-medium text-[#1d1a17] transition hover:bg-[#c89d4f]"
            >
              Explore Safaris <ArrowRight size={18} />
            </Link>
            <Link
              href="/plan-your-safari"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <Play size={16} className="fill-current" /> Plan Your Journey
            </Link>
          </div>

          <div className="mt-10 text-sm uppercase tracking-[0.28em] text-white/60">The Wild, Reimagined.</div>
        </div>
      </div>
    </section>
  );
}
