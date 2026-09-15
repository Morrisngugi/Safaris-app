import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/seo/contact-form";

export const metadata: Metadata = pageMetadata({
  title: "Contact Ivory Atlas Tours & Safaris",
  description:
    "Contact Ivory Atlas to plan a bespoke Kenya safari, discuss your ideal itinerary, and explore destinations including Maasai Mara, Amboseli, Samburu and Diani.",
  path: "/contact",
  image: "/brand/logo.jpg",
});

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
              <div className="flex items-start gap-3"><MapPin className="mt-1 text-[var(--color-gold)]" size={18} /> <span>{contactConfig.address}</span></div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
