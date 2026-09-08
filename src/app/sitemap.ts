import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { safaris } from "@/data/safaris";
import { journalArticles } from "@/data/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";
  const routes = [
    "",
    "/about",
    "/destinations",
    "/experiences",
    "/gallery",
    "/journal",
    "/contact",
    "/safaris",
    "/plan-your-safari",
  ];

  const staticUrls = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const dynamicUrls = [
    ...destinations.map((destination) => ({
      url: `${baseUrl}/destinations/${destination.slug}`,
      lastModified: new Date(),
    })),
    ...safaris.map((safari) => ({
      url: `${baseUrl}/safaris/${safari.slug}`,
      lastModified: new Date(),
    })),
    ...journalArticles.map((article) => ({
      url: `${baseUrl}/journal/${article.slug}`,
      lastModified: new Date(),
    })),
  ];

  return [...staticUrls, ...dynamicUrls];
}
