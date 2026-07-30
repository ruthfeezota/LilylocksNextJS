import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://lilylocks.com";

const pages = [
  {
    path: "",
    priority: 1.0,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/shop",
    priority: 0.95,
    changeFrequency: "daily" as const,
  },
  {
    path: "/cheer-bows",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/ponytails",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/team-orders",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/team-partnership",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/color-match",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/hair-care-guide",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/faq",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/about",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/contact",
    priority: 0.6,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/blackwatch",
    priority: 0.4,
    changeFrequency: "yearly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}