import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFab } from "@/components/ui/whatsapp-fab";
import { organizationJsonLd, SITE_NAME, SITE_TAGLINE, SITE_URL, websiteJsonLd } from "@/lib/seo";
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
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: `Ivory Atlas Tours & Safaris Ltd. | ${SITE_TAGLINE}`,
    template: "%s | Ivory Atlas Tours & Safaris",
  },
  description:
    "Ivory Atlas designs thoughtful Kenya safari journeys, from iconic game reserves to relaxed coast and beach escapes, with elegant planning and authentic local expertise.",
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_NAME,
    description:
      "Thoughtfully curated safari and travel experiences across Kenya, including Maasai Mara, Amboseli, Samburu, Ol Pejeta, and tropical coast escapes.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/brand/logo.jpg", alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Tailored Kenya safari experiences shaped around wildlife, landscapes, and beautifully paced travel.",
    images: ["/brand/logo.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/brand/logo.jpg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--color-ivory)] text-[var(--color-charcoal)]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }} />
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
