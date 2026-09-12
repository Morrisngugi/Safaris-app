import Image from "next/image";
import Link from "next/link";
import { collaborators } from "@/data/collaborators";

export function CollaboratorsSection() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-ivory)] py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
            In Collaboration With
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {collaborators.map((collaborator) => (
            <Link
              key={collaborator.name}
              href={collaborator.website ?? "/"}
              aria-label={`Return to the homepage via ${collaborator.name}`}
              className="group flex min-h-[180px] items-center justify-center rounded-[1.5rem] border border-[var(--color-border)] bg-white/60 px-6 py-5 shadow-[0_12px_32px_rgba(24,18,12,0.02)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[var(--color-gold)]"
            >
              <div className="relative flex h-28 w-full items-center justify-center overflow-hidden">
                <Image
                  src={collaborator.logo}
                  alt={collaborator.alt ?? collaborator.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 20vw"
                  className="object-contain p-2 transition duration-200 group-hover:scale-[1.02]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
