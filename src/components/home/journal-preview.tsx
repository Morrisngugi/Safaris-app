import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { journalArticles } from "@/data/journal";

export function JournalPreview() {
  return (
    <section className="bg-[var(--color-ivory)] py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">From the journal</div>
            <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-5xl">Travel Journal</h2>
          </div>
          <Link href="/journal" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)] transition hover:text-[var(--color-gold)]">
            Read more <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {journalArticles.map((article) => (
            <article key={article.slug} className="group overflow-hidden rounded-[1.8rem] border border-[var(--color-border)] bg-white shadow-[0_18px_42px_rgba(24,18,12,0.04)] transition hover:-translate-y-1">
              <div className="relative h-72 overflow-hidden">
                <Image src={article.image} alt={article.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-[var(--color-gold)]">
                  <span>{article.category}</span>
                  <span className="text-[var(--color-muted)]">•</span>
                  <span className="text-[var(--color-muted)]">{article.readTime}</span>
                </div>
                <h3 className="font-serif text-3xl leading-none text-[var(--color-charcoal)]">{article.title}</h3>
                <p className="text-sm leading-7 text-[var(--color-muted)]">{article.excerpt}</p>
                <Link href={`/journal/${article.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)] transition hover:text-[var(--color-gold)]">
                  Read article <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
