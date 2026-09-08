import Image from "next/image";
import { galleryItems } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <main>
      <section className="bg-[var(--color-charcoal)] text-white">
        <div className="mx-auto max-w-[1400px] px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Gallery</div>
            <h1 className="font-serif text-5xl leading-none sm:text-7xl">Moments from the wild.</h1>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)] py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid auto-rows-[220px] gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {galleryItems.map((item, index) => (
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
                  <Image src={item.image} alt={item.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,14,12,0.1),rgba(17,14,12,0.74))]" />
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
    </main>
  );
}
