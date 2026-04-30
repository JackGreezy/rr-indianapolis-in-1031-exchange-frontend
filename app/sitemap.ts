import type { MetadataRoute } from "next";
import { locations, services, site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/about", "/services", "/locations", "/contact", "/privacy", "/terms"];
  return [
    ...staticRoutes.map((route) => ({ url: `${site.siteUrl}${route}`, lastModified: now, changeFrequency: "weekly" as const, priority: route === "" ? 1 : 0.8 })),
    ...services.map((service) => ({ url: `${site.siteUrl}/services/${service.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.75 })),
    ...locations.map((location) => ({ url: `${site.siteUrl}/locations/${location.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.75 })),
  ];
}
