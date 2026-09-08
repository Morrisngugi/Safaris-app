import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-[var(--color-sand)] py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Guest stories</div>
          <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-5xl">Kind words from travelers</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[1.8rem] border border-[var(--color-border)] bg-white p-8 shadow-[0_14px_36px_rgba(24,18,12,0.05)]">
              <p className="text-lg leading-8 text-[var(--color-muted)]">“{testimonial.quote}”</p>
              <div className="mt-8 border-t border-[var(--color-border)] pt-5">
                <div className="font-medium text-[var(--color-charcoal)]">{testimonial.name}</div>
                <div className="mt-1 text-sm text-[var(--color-muted)]">{testimonial.title}</div>
                <div className="mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-gold)]">{testimonial.destination}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
