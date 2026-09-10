import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/about", "/pricing", "/booking", "/contact", "/privacy", "/impressum"];
  return ["de", "en"].flatMap((locale) =>
    pages.map((page) => ({
      url: `${siteConfig.url}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : page === "/booking" ? 0.9 : 0.7,
    })),
  );
}
