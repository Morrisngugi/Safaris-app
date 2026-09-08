import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return <main className="bg-[var(--color-charcoal)] text-white"><section className="mx-auto flex min-h-[70vh] max-w-[1000px] items-center px-4 py-28 sm:px-6 lg:px-8"><div><div className="mb-5 text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-gold)]">Ivory Atlas</div><h1 className="max-w-3xl font-serif text-6xl leading-[0.86] sm:text-8xl">You&apos;ve wandered off the map.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-white/70">The page you were looking for is not here. There are still beautiful places to discover.</p><div className="mt-9 flex flex-wrap gap-4"><Link href="/" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[#1d1a17]">Return Home <ArrowRight size={16} /></Link><Link href="/destinations" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm">Explore Destinations <ArrowRight size={16} /></Link></div></div></section></main>;
}
