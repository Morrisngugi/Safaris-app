import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactConfig, navItems } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-charcoal)] text-[var(--color-ivory)]">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/15 bg-white/5">
                <Image src="/brand/logo.jpg" alt="Ivory Atlas logo" width={48} height={48} className="object-cover" />
              </div>
              <div>
                <div className="font-serif text-xl tracking-[0.18em] text-[var(--color-gold)]">IVORY ATLAS</div>
                <div className="text-[0.66rem] uppercase tracking-[0.24em] text-white/70">Tours & Safaris</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
              Thoughtful safari journeys across East Africa, shaped by local knowledge, refined service, and a love for the wild.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Navigate</h3>
            <ul className="space-y-3 text-sm text-white/75">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Destinations</h3>
            <ul className="space-y-3 text-sm text-white/75">
              {['Maasai Mara', 'Amboseli', 'Serengeti', 'Zanzibar', 'Samburu'].map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Contact</h3>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3"><Phone size={16} className="mt-0.5 text-[var(--color-gold)]" /> <span>{contactConfig.phone}</span></li>
              <li className="flex items-start gap-3"><Mail size={16} className="mt-0.5 text-[var(--color-gold)]" /> <span>{contactConfig.email}</span></li>
              <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-[var(--color-gold)]" /> <span>{contactConfig.address}</span></li>
              <li className="flex items-start gap-3"><MessageCircle size={16} className="mt-0.5 text-[var(--color-gold)]" /> <span>WhatsApp</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Ivory Atlas Tours & Safaris Ltd.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
