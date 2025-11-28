import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/insightsData";
import { serviceData } from "@/lib/serviceData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adelphibiosciences.com";

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Service category pages
  const serviceCategories: MetadataRoute.Sitemap = Object.keys(serviceData).map((category) => ({
    url: `${baseUrl}/services/${category}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Individual service pages
  const servicePages: MetadataRoute.Sitemap = Object.entries(serviceData).flatMap(
    ([category, data]) =>
      data.deliverables.map((deliverable) => ({
        url: `${baseUrl}/services/${category}/${deliverable.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
  );

  // Blog posts
  const blogPosts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...corePages, ...serviceCategories, ...servicePages, ...blogPages];
}
