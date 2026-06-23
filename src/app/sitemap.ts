import { MetadataRoute } from "next";
import countries from "@/data/countries.json";
import devices from "@/data/devices.json";
import blogs from "@/data/blogs.json";

const locales = [
  "en",
  "es",
  "fr",
  "de",
  "pt",
  "ar",
  "hi",
  "ur",
  "tr",
  "it",
  "ru",
  "zh",
];

const staticPaths = [
  "",
  "/pricing",
  "/how-it-works",
  "/devices",
  "/channels",
  "/countries",
  "/languages",
  "/about",
  "/contact",
  "/faq",
  "/blog",
  "/testimonials",
  "/affiliates",
  "/support",
  "/terms",
  "/privacy",
  "/refund-policy",
  "/dmca",
  "/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://livetvservices.com";
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Static paths per locale
  locales.forEach((locale) => {
    staticPaths.forEach((path) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1.0 : 0.8,
      });
    });

    // 2. Programmatic Country landing pages per locale
    countries.forEach((country) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/countries/${country.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    });

    // 3. Programmatic Device installation guides per locale
    devices.forEach((device) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/devices/${device.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    });

    // 4. Programmatic Blog articles per locale
    blogs.forEach((post) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  return sitemapEntries;
}
