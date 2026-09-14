import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PlanYourSafariForm } from "@/components/seo/plan-your-safari-form";

export const metadata: Metadata = pageMetadata({
  title: "Plan Your Safari | Ivory Atlas Tours & Safaris",
  description:
    "Share your dream itinerary and preferred destinations to begin planning a tailored Kenya safari with Ivory Atlas.",
  path: "/plan-your-safari",
  image: "/brand/logo.jpg",
});

export default function PlanYourSafariPage() {
  return <PlanYourSafariForm />;
}
