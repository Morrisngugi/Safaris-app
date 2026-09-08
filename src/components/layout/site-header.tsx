"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { navItems } from "@/data/site";
import { contactConfig } from "@/data/site";

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
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const headerClasses = scrolled || !isHome ? "bg-[#1d1a17]/90 shadow-[0_12px_30px_rgba(17,14,12,0.12)] text-white" : "bg-transparent text-white";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Ivory Atlas home">
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
              <div className="mt-1 text-[0.58rem] uppercase tracking-[0.32em] text-white/80">Tours & Safaris</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? "text-sm font-medium text-[var(--color-gold)]"
                      : "text-sm font-medium text-white/80 transition hover:text-white"
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 lg:hidden"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-white/10 bg-[#1d1a17]/95 pb-4 pt-3 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm text-white/85 transition hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/plan-your-safari"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-4 py-2.5 text-sm font-medium text-[#1d1a17]"
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
