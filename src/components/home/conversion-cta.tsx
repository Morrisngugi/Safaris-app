import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

export function ConversionCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-charcoal)] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.2rem] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <Image src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1800&q=85" alt="African landscape at golden hour" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,15,13,0.88),rgba(16,15,13,0.48),rgba(16,15,13,0.38))]" />
          <div className="relative max-w-3xl">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Your story starts in Africa.</div>
            <h2 className="font-serif text-5xl leading-[0.92] text-white sm:text-7xl">Tell us how you imagine your journey.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              We&apos;ll take care of the details, from the first idea to the final farewell.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/plan-your-safari" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3.5 text-sm font-medium text-[#1d1a17] transition hover:bg-[#c89d4f]">
              Start Planning <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10">
              <MessageCircle size={16} /> Talk to Our Safari Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
