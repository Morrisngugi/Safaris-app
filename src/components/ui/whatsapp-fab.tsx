import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { contactConfig } from "@/data/site";

export function WhatsAppFab() {
  const message = encodeURIComponent(
    "Hello Ivory Atlas, I would like to plan a safari and learn more about your travel options."
  );

  return (
    <Link
      href={`https://wa.me/${contactConfig.whatsapp.replace(/\s+/g, "")}?text=${message}`}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_34px_rgba(32,183,93,0.35)] transition hover:scale-[1.04]"
    >
      <MessageCircle size={24} />
    </Link>
  );
}
