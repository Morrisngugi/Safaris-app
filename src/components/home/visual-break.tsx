import Image from "next/image";

export function VisualBreak() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[560px]">
        <Image
          src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1800&q=80"
          alt="Wildlife in the African wilderness"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,8,0.58),rgba(12,10,8,0.18),rgba(12,10,8,0.50))]" />
      </div>
      <div className="absolute inset-0 mx-auto flex max-w-[1400px] items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl text-white">
          <div className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">A different perspective</div>
          <h2 className="mt-4 font-serif text-5xl leading-none text-white sm:text-6xl">Some journeys change the way you see the world.</h2>
        </div>
      </div>
    </section>
  );
}
