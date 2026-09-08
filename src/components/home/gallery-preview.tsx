import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryItems } from "@/data/gallery";

export function GalleryPreview() {
  const [hero, portrait, firstSmall, secondSmall] = galleryItems;

  return (
    <section className="bg-[var(--color-ivory)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Stories from the wild</div>
            <h2 className="font-serif text-5xl leading-none text-[var(--color-charcoal)] sm:text-6xl">Let the landscape speak.</h2>
          </div>
          <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)] transition hover:text-[var(--color-gold)]">Explore the gallery <ArrowRight size={16} /></Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr] lg:grid-rows-2 lg:gap-5">
          <Link href="/gallery" className="group relative min-h-[360px] overflow-hidden rounded-[1.8rem] sm:min-h-[480px] lg:row-span-2">
            <Image src={hero.image} alt={hero.alt} fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,12,9,0.02),rgba(15,12,9,0.55))]" />
            <div className="absolute bottom-0 p-6 text-white sm:p-8"><div className="text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-gold)]">{hero.category}</div><h3 className="mt-2 font-serif text-4xl">{hero.title}</h3></div>
          </Link>
          {[portrait, firstSmall, secondSmall].map((item, index) => (
            <Link key={item.title} href="/gallery" className={`group relative min-h-[220px] overflow-hidden rounded-[1.8rem] ${index === 0 ? "sm:min-h-[280px]" : ""}`}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 50vw, 35vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/30" />
              <div className="absolute bottom-0 p-5 text-white"><div className="text-[0.6rem] uppercase tracking-[0.18em] text-white/70">{item.category}</div><h3 className="mt-1 font-serif text-2xl">{item.title}</h3></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
