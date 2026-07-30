import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://lilylocks.com/sitemap.xml",
    host: "https://lilylocks.com",
  };
}