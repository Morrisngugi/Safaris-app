"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { experiences } from "@/data/experiences";

export function ExperiencesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experiences[activeIndex];

  return (
    <section className="bg-[var(--color-charcoal)] py-24 text-white sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Travel your way</div>
            <h2 className="max-w-xl font-serif text-5xl leading-[0.92] text-white sm:text-7xl">Not just where you go. How you experience it.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-white/65 lg:pb-2">Choose the rhythm, texture, and feeling that should shape your time in East Africa.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-black sm:min-h-[560px]">
            {experiences.slice(0, 6).map((experience, index) => (
              <Image
                key={experience.slug}
                src={experience.image}
                alt={experience.title}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className={`object-cover transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,12,9,0.02),rgba(15,12,9,0.7))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <div className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-gold)]">0{activeIndex + 1} / 06</div>
              <h3 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">{activeExperience.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/75">{activeExperience.description}</p>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-white/15">
            {experiences.slice(0, 6).map((experience, index) => (
              <Link
                key={experience.slug}
                href={`/experiences#${experience.slug}`}
                className={`group flex min-h-16 items-center justify-between gap-4 py-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-gold)] sm:min-h-20 ${index === activeIndex ? "text-white" : "text-white/55 hover:text-white"}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <span className="flex items-center gap-4"><span className="text-[0.68rem] tracking-[0.18em] text-[var(--color-gold)]">0{index + 1}</span><span className="font-serif text-2xl sm:text-3xl">{experience.title.replace(" Safaris", "").replace("Beach Holidays", "Safari & Beach")}</span></span>
                <ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            ))}
            <Link href="/experiences" className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-[var(--color-gold)] transition hover:text-white">Explore all experiences <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
