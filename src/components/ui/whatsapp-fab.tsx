import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { contactConfig } from "@/data/site";

export function WhatsAppFab() {
  if (!contactConfig.whatsappNumber) return null;

  const message = encodeURIComponent(
    "Hello Ivory Atlas, I would like to plan a safari and learn more about your travel options."
  );

  return (
    <Link
      href={`https://wa.me/${contactConfig.whatsappNumber.replace(/\s+/g, "")}?text=${message}`}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_34px_rgba(32,183,93,0.35)] transition hover:scale-[1.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-charcoal)]"
    >
      <MessageCircle size={24} />
    </Link>
  );
}
