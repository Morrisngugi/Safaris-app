import { Mail, Phone } from "lucide-react";
import { contactConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[var(--color-charcoal)] text-white">
        <div className="mx-auto max-w-[1400px] px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Contact Ivory Atlas</div>
            <h1 className="font-serif text-[clamp(2.5rem,10vw,4.5rem)] leading-none sm:text-7xl">Let&apos;s start with a conversation.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">Whether you already know where you want to go or are only beginning to imagine the journey, tell us what you have in mind.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)] py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-6 border-y border-[var(--color-border)] bg-transparent py-8">
            <div>
              <div className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Get in touch</div>
              <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)]">Our team is ready to help.</h2>
            </div>

            <div className="space-y-5 text-base text-[var(--color-muted)]">
              <div className="flex items-start gap-3"><Phone className="mt-1 text-[var(--color-gold)]" size={18} /> <a href={contactConfig.phoneHref} className="transition hover:text-[var(--color-gold)]">{contactConfig.phoneDisplay}</a></div>
              <div className="flex items-start gap-3"><Mail className="mt-1 text-[var(--color-gold)]" size={18} /> <a href={`mailto:${contactConfig.email}`} className="transition hover:text-[var(--color-gold)]">{contactConfig.email}</a></div>
            </div>
          </div>

          <form className="rounded-[2rem] border border-[var(--color-border)] bg-white p-8 shadow-[0_18px_52px_rgba(24,18,12,0.04)]">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Full name</span>
                <input type="text" autoComplete="name" className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-gold)]" placeholder="Your name" />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Email</span>
                <input type="email" autoComplete="email" className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-gold)]" placeholder="you@example.com" />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Phone</span>
                <input type="tel" autoComplete="tel" className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-gold)]" placeholder="+254 ..." />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)]">
                <span>Country</span>
                <input type="text" autoComplete="country-name" className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-gold)]" placeholder="Country" />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)] md:col-span-2">
                <span>Destinations of interest</span>
                <input type="text" className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-gold)]" placeholder="Maasai Mara, Zanzibar, Serengeti..." />
              </label>
              <label className="space-y-2 text-sm text-[var(--color-muted)] md:col-span-2">
                <span>Message</span>
                <textarea rows={5} className="min-h-32 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-gold)]" placeholder="Tell us about your ideal trip..." />
              </label>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[#1d1a17] transition hover:bg-[#c89d4f]">
              Send enquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
