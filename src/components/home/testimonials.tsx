import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const testimonial = testimonials[0];

  return (
    <section className="bg-[var(--color-sand)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1000px] px-4 text-center sm:px-6">
        <div className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Guest stories · placeholder copy</div>
        <div className="mx-auto mb-8 h-px w-16 bg-[var(--color-gold)]" />
        <blockquote className="font-serif text-4xl leading-[0.98] text-[var(--color-charcoal)] sm:text-6xl">“{testimonial.quote}”</blockquote>
        <div className="mt-8 text-sm text-[var(--color-muted)]"><span className="font-medium text-[var(--color-charcoal)]">{testimonial.name}</span> · {testimonial.title} · {testimonial.destination}</div>
      </div>
    </section>
  );
}
