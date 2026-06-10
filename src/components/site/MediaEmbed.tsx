import { ExternalLink } from "lucide-react";
import type { MediaItem } from "@/lib/media";
import { MEDIA_TYPE_LABELS } from "@/lib/media";

interface MediaEmbedProps {
  item: MediaItem;
  /** When true, renders without the surrounding card chrome (e.g. inside an article). */
  bare?: boolean;
}

function getEmbedUrl(item: MediaItem): string {
  switch (item.type) {
    case "spotify-episode":
      return `https://open.spotify.com/embed/episode/${item.embedRef}?utm_source=generator&theme=0`;
    case "spotify-show":
      return `https://open.spotify.com/embed/show/${item.embedRef}?utm_source=generator&theme=0`;
    case "apple-podcast":
      // embedRef is a full URL like https://podcasts.apple.com/us/podcast/.../id123?i=456
      return item.embedRef.replace("https://podcasts.apple.com", "https://embed.podcasts.apple.com");
    case "youtube":
      return `https://www.youtube.com/embed/${item.embedRef}`;
    case "instagram":
      // embedRef can be full URL or shortcode
      if (item.embedRef.startsWith("http")) {
        const clean = item.embedRef.replace(/\/$/, "");
        return `${clean}/embed`;
      }
      return `https://www.instagram.com/p/${item.embedRef}/embed`;
    case "tiktok":
      // embedRef is the video id
      if (item.embedRef.startsWith("http")) return item.embedRef;
      return `https://www.tiktok.com/embed/v2/${item.embedRef}`;
  }
}

function getFrameHeight(type: MediaItem["type"]): string {
  switch (type) {
    case "spotify-show":
    case "spotify-episode":
      return "h-[232px]";
    case "apple-podcast":
      return "h-[175px]";
    case "youtube":
      return "aspect-video";
    case "instagram":
      return "h-[640px]";
    case "tiktok":
      return "h-[740px]";
  }
}

export function MediaEmbed({ item, bare = false }: MediaEmbedProps) {
  const src = getEmbedUrl(item);
  const heightClass = getFrameHeight(item.type);
  const isAspect = heightClass.startsWith("aspect");

  const frame = (
    <div className={`w-full overflow-hidden rounded-xl bg-secondary/40 ${isAspect ? heightClass : ""}`}>
      <iframe
        src={src}
        title={`${item.title} — ${item.creator}`}
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        className={`w-full ${isAspect ? "h-full" : heightClass} border-0`}
      />
    </div>
  );

  if (bare) {
    return <div className="my-8">{frame}</div>;
  }

  return (
    <article className="flex flex-col rounded-2xl border border-border/60 bg-card p-6 transition hover:shadow-lift">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
        <span className="rounded-full bg-secondary px-3 py-1 text-foreground/70">
          {MEDIA_TYPE_LABELS[item.type]}
        </span>
        <span>{item.category}</span>
      </div>
      <h3 className="mt-4 font-serif text-xl leading-snug text-foreground">{item.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{item.creator}</p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{item.description}</p>
      <div className="mt-5">{frame}</div>
      <MediaLinks item={item} />
    </article>
  );
}

interface PlatformLink {
  label: string;
  href: string;
}

function getPlatformLinks(item: MediaItem): PlatformLink[] {
  const links: PlatformLink[] = [];
  if (item.spotifyUrl) links.push({ label: "Open Spotify", href: item.spotifyUrl });
  if (item.youtubeUrl) links.push({ label: "Open YouTube", href: item.youtubeUrl });
  if (item.instagramUrl) links.push({ label: "Open Instagram", href: item.instagramUrl });
  if (item.tiktokUrl) links.push({ label: "Open TikTok", href: item.tiktokUrl });
  if (links.length === 0 && item.externalUrl) {
    links.push({ label: "Open original", href: item.externalUrl });
  }
  return links;
}

function MediaLinks({ item }: { item: MediaItem }) {
  const links = getPlatformLinks(item);
  if (links.length === 0) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          {l.label} <ExternalLink className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  );
}

