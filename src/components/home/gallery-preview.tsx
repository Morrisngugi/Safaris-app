import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryItems } from "@/data/gallery";

export function GalleryPreview() {
  return (
    <section className="bg-[var(--color-ivory)] py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Moments worth holding</div>
            <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-5xl">Gallery</h2>
          </div>
          <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)] transition hover:text-[var(--color-gold)]">
            View gallery <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid auto-rows-[200px] gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {galleryItems.slice(0, 6).map((item, index) => (
            <div
              key={item.title}
              className={
                index % 3 === 0
                  ? "relative overflow-hidden rounded-[1.8rem] sm:col-span-2"
                  : index % 2 === 0
                    ? "relative overflow-hidden rounded-[1.8rem] xl:row-span-2"
                    : "relative overflow-hidden rounded-[1.8rem]"
              }
            >
              <div className="relative h-full w-full">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,14,12,0.1),rgba(17,14,12,0.72))]" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="text-[0.62rem] uppercase tracking-[0.2em] text-white/70">{item.category}</div>
                <h3 className="mt-2 font-serif text-3xl leading-none">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
