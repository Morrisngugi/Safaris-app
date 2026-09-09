import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFab } from "@/components/ui/whatsapp-fab";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ivoryatlastours.com"),
  title: {
    default: "Ivory Atlas Tours & Safaris Ltd.",
    template: "%s | Ivory Atlas",
  },
  description:
    "Ivory Atlas creates premium safari and travel experiences across Kenya with thoughtful itineraries and unforgettable journeys.",
  openGraph: {
    title: "Ivory Atlas Tours & Safaris Ltd.",
    description:
      "The Wild, Reimagined. Premium Kenyan safaris, luxury travel, and thoughtfully curated journeys.",
    url: "https://ivoryatlastours.com",
    siteName: "Ivory Atlas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivory Atlas Tours & Safaris Ltd.",
    description:
      "The Wild, Reimagined. Thoughtful Kenyan travel and premium safari experiences.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--color-ivory)] text-[var(--color-charcoal)]">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
          <WhatsAppFab />
        </div>
      </body>
    </html>
  );
}
