import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://haven-harbor-counseling.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const BLOG_SLUGS = [
  "finding-a-trauma-therapist-in-austin",
  "what-is-christian-counseling",
  "emdr-cpt-trauma-therapy-modalities",
  "religious-trauma-when-faith-hurts",
  "complex-ptsd-vs-ptsd",
  "what-to-expect-first-therapy-session",
  "high-functioning-anxiety",
  "signs-of-complex-trauma",
  "christian-counseling-vs-secular-therapy",
  "trauma-and-sleep",
  "how-to-know-if-you-need-therapy",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/approach", changefreq: "monthly", priority: "0.8" },
          { path: "/christian-counseling", changefreq: "monthly", priority: "0.9" },
          { path: "/faq", changefreq: "monthly", priority: "0.7" },
          { path: "/resources", changefreq: "weekly", priority: "0.7" },
          { path: "/resources/media", changefreq: "weekly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.9" },
          { path: "/schedule", changefreq: "monthly", priority: "0.9" },
          { path: "/cost-of-therapy-austin", changefreq: "monthly", priority: "0.9" },
          { path: "/what-is-emdr", changefreq: "monthly", priority: "0.9" },
          { path: "/what-is-ifs-therapy", changefreq: "monthly", priority: "0.9" },
          { path: "/first-therapy-session", changefreq: "monthly", priority: "0.9" },
          { path: "/austin-therapist", changefreq: "monthly", priority: "0.9" },
          { path: "/austin-therapy", changefreq: "monthly", priority: "0.9" },
          { path: "/austin-christian-therapist", changefreq: "monthly", priority: "0.9" },
          { path: "/austin-trauma-therapist", changefreq: "monthly", priority: "0.9" },
          { path: "/trauma-therapy-austin-guide", changefreq: "monthly", priority: "0.9" },
          ...BLOG_SLUGS.map((slug) => ({
            path: `/resources/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];

        const urls = entries.map((e) => {
          const path = e.path === "/" ? "/" : e.path;
          return [
            `  <url>`,
            `    <loc>${BASE_URL}${path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n");
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
