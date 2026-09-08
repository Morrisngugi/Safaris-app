import Image from "next/image";
import Link from "next/link";
import { journalArticles } from "@/data/journal";

export default function JournalPage() {
  return (
    <main>
      <section className="bg-[var(--color-charcoal)] text-white">
        <div className="mx-auto max-w-[1400px] px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">Travel journal</div>
            <h1 className="font-serif text-5xl leading-none sm:text-7xl">Stories, advice, and inspiration for your next journey.</h1>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)] py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {journalArticles.map((article) => (
              <article key={article.slug} className="overflow-hidden rounded-[1.8rem] border border-[var(--color-border)] bg-white shadow-[0_18px_52px_rgba(24,18,12,0.05)]">
                <div className="relative h-72 overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                </div>
                <div className="space-y-4 p-6">
                  <div className="text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-gold)]">{article.category}</div>
                  <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)]">{article.title}</h2>
                  <p className="text-sm leading-7 text-[var(--color-muted)]">{article.excerpt}</p>
                  <Link href={`/journal/${article.slug}`} className="inline-flex items-center text-sm font-medium text-[var(--color-charcoal)] transition hover:text-[var(--color-gold)]">
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
