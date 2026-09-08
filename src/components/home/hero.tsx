"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const scenes = [
  {
    location: "MAASAI MARA · KENYA",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=2000&q=85",
    alt: "Golden plains of the Maasai Mara at dawn",
  },
  {
    location: "AMBOSELI · KENYA",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=85",
    alt: "Elephants moving across an East African plain",
  },
  {
    location: "SERENGETI · TANZANIA",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=85",
    alt: "Wildlife and open landscape in the Serengeti",
  },
  {
    location: "ZANZIBAR · INDIAN OCEAN",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85",
    alt: "Turquoise water along the Zanzibar coast",
  },
];

export function Hero() {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveScene((current) => (current + 1) % scenes.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, []);

  const scene = scenes[activeScene];

  return (
    <section className="relative isolate overflow-hidden bg-[#1d1a17]">
      <div className="absolute inset-0">
        {scenes.map((item, index) => (
          <Image
            key={item.location}
            src={item.image}
            alt={item.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover transition-[opacity,transform] duration-[1600ms] motion-reduce:transition-none ${index === activeScene ? "scale-[1.03] opacity-70" : "scale-100 opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,15,13,0.82),rgba(16,15,13,0.32),rgba(16,15,13,0.42))]" />
      </div>

      <div className="relative mx-auto flex min-h-[680px] max-w-[1400px] items-end px-4 pb-14 pt-28 sm:min-h-[760px] sm:px-6 sm:pb-16 sm:pt-32 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/80">
            <span>{scene.location}</span>
            <span className="h-px w-10 bg-[var(--color-gold)]" />
          </div>

          <h1 className="max-w-2xl font-serif text-[clamp(2.5rem,10vw,5rem)] leading-[0.92] text-white sm:text-6xl lg:text-8xl">
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
              Plan My Safari <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-white/60">
            <span className="h-px w-16 bg-[var(--color-gold)]" />
            <span>The Wild, Reimagined.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
