"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isHome = pathname === "/";
  const isOverDarkHero = isHome && !scrolled;
  const headerClasses = isOverDarkHero
    ? "bg-transparent text-white"
    : "bg-[var(--color-ivory)] shadow-[0_12px_30px_rgba(17,14,12,0.12)] text-[var(--color-charcoal)]";
  const mutedTextClass = isOverDarkHero ? "text-white/80" : "text-[var(--color-deep-brown)]";
  const controlClass = isOverDarkHero
    ? "border-white/20 bg-white/5 hover:bg-white/10"
    : "border-[var(--color-border)] bg-[var(--color-sand)] hover:bg-white";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3" aria-label="Ivory Atlas home">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
              <Image
                src="/brand/logo.jpg"
                alt="Ivory Atlas logo"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="leading-none">
              <div className="font-serif text-[1.1rem] tracking-[0.2em] text-[var(--color-gold)]">IVORY ATLAS</div>
              <div className={`mt-1 text-[0.58rem] uppercase tracking-[0.32em] ${mutedTextClass}`}>Tours & Safaris</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    active
                      ? "text-sm font-medium text-[var(--color-gold)]"
                      : `text-sm font-medium ${mutedTextClass} transition hover:text-[var(--color-gold)]`
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/plan-your-safari"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-5 py-2.5 text-sm font-medium text-[#1d1a17] transition hover:bg-[#c8a55f]"
            >
              Plan Your Safari
            </Link>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)] lg:hidden ${controlClass}`}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-navigation"
            className={`max-h-[calc(100svh-5rem)] overflow-y-auto border-t pb-4 pt-3 lg:hidden ${
              isOverDarkHero
                ? "border-white/10 bg-[#1d1a17]/95"
                : "border-[var(--color-border)] bg-[var(--color-ivory)]"
            }`}
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-11 items-center rounded-xl px-3 py-2 text-sm transition hover:text-[var(--color-gold)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)] ${mutedTextClass}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/plan-your-safari"
                onClick={() => setIsOpen(false)}
                className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-gold)] px-4 py-2.5 text-sm font-medium text-[#1d1a17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Plan Your Safari
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
