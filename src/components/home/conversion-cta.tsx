import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function ConversionCta() {
  return (
    <section className="bg-[var(--color-ivory)] py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.2rem] bg-[radial-gradient(circle_at_top_left,#f4e6c9_0%,#f2e9d8_25%,#1d1a17_25%,#1d1a17_100%)] px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
          <div className="max-w-3xl">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Begin your journey</div>
            <h2 className="font-serif text-4xl leading-none text-white sm:text-5xl">Your African Journey Starts Here.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              Share your dream itinerary and let us shape a safari that matches your pace, priorities, and sense of adventure.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/plan-your-safari" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3.5 text-sm font-medium text-[#1d1a17] transition hover:bg-[#c89d4f]">
              Plan Your Safari <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/254700000000?text=Hello%20Ivory%20Atlas%2C%20I%20would%20like%20to%20plan%20a%20safari." className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10">
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
