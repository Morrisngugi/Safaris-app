type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl";

  return (
    <div className={alignClass}>
      <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">{eyebrow}</div>
      <h2 className="font-serif text-4xl leading-none text-[var(--color-charcoal)] sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{description}</p> : null}
    </div>
  );
}
