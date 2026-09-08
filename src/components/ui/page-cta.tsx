import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageCta({ eyebrow, title, description, image, primaryLabel = "Plan Your Safari", primaryHref = "/plan-your-safari", secondaryLabel = "Talk to Us", secondaryHref = "/contact" }: PageCtaProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-charcoal)] text-white">
      <div className="absolute inset-0"><Image src={image} alt="African landscape" fill sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,15,13,0.9),rgba(16,15,13,0.5),rgba(16,15,13,0.35))]" /></div>
      <div className="relative mx-auto max-w-[1400px] px-4 py-24 sm:px-6 sm:py-32 lg:px-8"><div className="max-w-2xl"><div className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">{eyebrow}</div><h2 className="font-serif text-5xl leading-[0.9] sm:text-7xl">{title}</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/75">{description}</p><div className="mt-9 flex flex-col gap-4 sm:flex-row"><Link href={primaryHref} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[#1d1a17] transition hover:bg-[#c89d4f]">{primaryLabel} <ArrowRight size={16} /></Link><Link href={secondaryHref} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">{secondaryLabel} <ArrowRight size={16} /></Link></div></div></div>
    </section>
  );
}
