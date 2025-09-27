import { MetadataRoute } from "next";
import { projectsWithPhotos } from "@/data/projects";      // senin Projects dosyan

// İstersen domaini .env ile yönetecek şekilde yaz:
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aykproje.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Statik sayfalar
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                      lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/hakkimizda`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/hizmetler`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/projeler`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/iletisim`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Proje sayfaları (projectsWithPhotos)
  const projectPages: MetadataRoute.Sitemap = (projectsWithPhotos ?? []).map(p => ({
    url: `${BASE_URL}/projeler/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
