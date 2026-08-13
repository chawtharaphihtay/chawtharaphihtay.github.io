import type { MetadataRoute } from "next";

const siteUrl = "https://chawtharaphihtay.dev"; // TODO: replace with your real domain

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
