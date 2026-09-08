import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { journalArticles } from "@/data/journal";

export function generateStaticParams() {
  return journalArticles.map((article) => ({ slug: article.slug }));
}

export default async function JournalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = journalArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-[var(--color-ivory)] text-[var(--color-charcoal)]">
      <section className="bg-[var(--color-charcoal)] text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
          <Link href="/journal" className="mb-6 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
            <ArrowLeft size={15} /> Back to journal
          </Link>
          <div className="max-w-4xl">
            <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">{article.category}</div>
            <h1 className="font-serif text-[clamp(2.5rem,10vw,4.5rem)] leading-none sm:text-7xl">{article.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span>{article.publishedAt}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white shadow-[0_18px_52px_rgba(24,18,12,0.04)]">
          <div className="relative h-[520px]">
            <Image src={article.image} alt={article.title} fill sizes="(max-width: 1024px) 100vw, 1200px" priority loading="eager" className="object-cover" />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-8 text-[var(--color-muted)]">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
