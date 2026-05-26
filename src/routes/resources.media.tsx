import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { MediaEmbed } from "@/components/site/MediaEmbed";
import { Input } from "@/components/ui/input";
import { media, getMediaCategories, MEDIA_TYPE_LABELS, type MediaType } from "@/lib/media";

const TYPE_FILTERS: Array<{ label: string; value: "all" | "podcast" | "instagram" | "tiktok" | "youtube" }> = [
  { label: "All", value: "all" },
  { label: "Podcasts", value: "podcast" },
  { label: "Instagram", value: "instagram" },
  { label: "TikTok", value: "tiktok" },
  { label: "Video", value: "youtube" },
];

function matchesType(itemType: MediaType, filter: (typeof TYPE_FILTERS)[number]["value"]): boolean {
  if (filter === "all") return true;
  if (filter === "podcast")
    return itemType === "spotify-episode" || itemType === "spotify-show" || itemType === "apple-podcast";
  if (filter === "youtube") return itemType === "youtube";
  return itemType === filter;
}

export const Route = createFileRoute("/resources/media")({
  head: () => ({
    meta: [
      { title: "Recommended Podcasts, Creators & Media — Haven & Harbor Counseling" },
      {
        name: "description",
        content:
          "Curated podcasts, Instagram, and TikTok creators on relationships, trauma, faith, and mental health — recommended by an Austin, TX therapist.",
      },
      { property: "og:title", content: "Recommended Podcasts & Creators — Haven & Harbor" },
      {
        property: "og:description",
        content: "Trusted voices on relationships, trauma, and mental health — embeddable, listenable, watchable.",
      },
      { property: "og:url", content: "https://haven-harbor-counseling.lovable.app/resources/media" },
    ],
    links: [{ rel: "canonical", href: "https://haven-harbor-counseling.lovable.app/resources/media" }],
  }),
  component: MediaPage,
});

function MediaPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [typeFilter, setTypeFilter] = useState<(typeof TYPE_FILTERS)[number]["value"]>("all");

  const categories = useMemo(() => getMediaCategories(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return media.filter((m) => {
      if (category !== "All" && m.category !== category) return false;
      if (!matchesType(m.type, typeFilter)) return false;
      if (!q) return true;
      return (
        m.title.toLowerCase().includes(q) ||
        m.creator.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q) ||
        MEDIA_TYPE_LABELS[m.type].toLowerCase().includes(q)
      );
    });
  }, [query, category, typeFilter]);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Media Library"
        title="Voices worth listening to."
        subtitle="A curated, growing collection of podcasts, creators, and conversations on relationships, trauma, faith, and the everyday work of being human."
      />

      <section className="container-prose py-10">
        {/* Search */}
        <div className="relative max-w-xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by show, creator, or topic…"
            className="h-12 rounded-full border-border/70 bg-card pl-11 text-base"
            aria-label="Search media"
          />
        </div>

        {/* Category chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                category === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/70 hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Type filter */}
        <div className="mt-3 flex flex-wrap gap-2">
          {TYPE_FILTERS.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setTypeFilter(t.value)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                typeFilter === t.value
                  ? "border-foreground bg-foreground text-background"
                  : "border-border/60 bg-transparent text-muted-foreground hover:bg-muted"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "result" : "results"}
        </p>

        {/* Grid */}
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {filtered.map((m) => (
            <MediaEmbed key={m.id} item={m} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-2xl border border-border/60 bg-card p-10 text-center">
            <p className="font-serif text-2xl">Nothing matches that search yet.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different keyword, category, or media type.
            </p>
          </div>
        )}
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
