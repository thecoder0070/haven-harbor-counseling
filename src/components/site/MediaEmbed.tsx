import { useEffect, useRef } from "react";
import { ExternalLink, Instagram, Youtube, Link as LinkIcon } from "lucide-react";
import type { MediaItem, MediaType } from "@/lib/media";
import { MEDIA_TYPE_LABELS } from "@/lib/media";

interface MediaEmbedProps {
  item: MediaItem;
  /** When true, renders without the surrounding card chrome (e.g. inside an article). */
  bare?: boolean;
}

type Platform = "spotify" | "apple" | "youtube" | "instagram" | "tiktok";

function getPlatform(type: MediaType): Platform {
  if (type === "spotify-episode" || type === "spotify-show") return "spotify";
  if (type === "apple-podcast") return "apple";
  return type; // "youtube" | "instagram" | "tiktok"
}

/** Returns a valid embed URL only if the item can actually be embedded. */
function getEmbedUrl(item: MediaItem): string | null {
  switch (item.type) {
    case "spotify-episode":
      return `https://open.spotify.com/embed/episode/${item.embedRef}?utm_source=generator&theme=0`;
    case "spotify-show":
      return `https://open.spotify.com/embed/show/${item.embedRef}?utm_source=generator&theme=0`;
    case "apple-podcast":
      return item.embedRef.replace(
        "https://podcasts.apple.com",
        "https://embed.podcasts.apple.com",
      );
    case "youtube": {
      // Only embed when we have a real video — either a bare ID or an /embed/ URL.
      const ref = item.embedRef;
      if (/^https?:\/\/(www\.)?youtube\.com\/embed\/[\w-]+/.test(ref)) return ref;
      if (/^[\w-]{8,15}$/.test(ref)) return `https://www.youtube-nocookie.com/embed/${ref}`;
      return null; // channel pages, @handles, etc — fall back to link card
    }
    case "instagram":
      // Only individual posts / reels / TV are embeddable — never profiles.
      return null; // Instagram uses its official blockquote embed (see InstagramEmbed)
    case "tiktok":
      if (item.embedRef.startsWith("http")) return item.embedRef;
      return `https://www.tiktok.com/embed/v2/${item.embedRef}`;
  }
}

function isInstagramPostLike(url: string): boolean {
  return /^https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)\/[\w-]+/.test(url);
}

function getFrameHeight(type: MediaType): string {
  switch (type) {
    case "spotify-show":
    case "spotify-episode":
      return "h-[232px]";
    case "apple-podcast":
      return "h-[175px]";
    case "youtube":
      return "aspect-video";
    case "tiktok":
      return "h-[740px]";
    default:
      return "h-[480px]";
  }
}

/* ─────────────────────────── Instagram official embed ─────────────────────── */

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

function loadInstagramEmbedScript() {
  if (typeof window === "undefined") return;
  if (window.instgrm) {
    window.instgrm.Embeds.process();
    return;
  }
  const existing = document.querySelector<HTMLScriptElement>('script[src="https://www.instagram.com/embed.js"]');
  if (existing) {
    existing.addEventListener("load", () => window.instgrm?.Embeds.process());
    return;
  }
  const s = document.createElement("script");
  s.src = "https://www.instagram.com/embed.js";
  s.async = true;
  document.body.appendChild(s);
}

function InstagramEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLQuoteElement>(null);
  useEffect(() => {
    loadInstagramEmbedScript();
    // Re-process when a new embed mounts.
    const t = setTimeout(() => window.instgrm?.Embeds.process(), 300);
    return () => clearTimeout(t);
  }, [url]);
  return (
    <blockquote
      ref={ref}
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: 12,
        margin: 0,
        maxWidth: "100%",
        minWidth: 280,
        padding: 0,
        width: "100%",
      }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        View this post on Instagram
      </a>
    </blockquote>
  );
}

/* ─────────────────────────────── Link card ────────────────────────────────── */

function platformLabel(p: Platform): string {
  switch (p) {
    case "spotify":
      return "Spotify";
    case "apple":
      return "Apple Podcasts";
    case "youtube":
      return "YouTube";
    case "instagram":
      return "Instagram";
    case "tiktok":
      return "TikTok";
  }
}

function PlatformIcon({ platform }: { platform: Platform }) {
  if (platform === "instagram") return <Instagram className="h-7 w-7" />;
  if (platform === "youtube") return <Youtube className="h-7 w-7" />;
  return <LinkIcon className="h-7 w-7" />;
}

function LinkCard({ item, href, note }: { item: MediaItem; href: string; note?: string }) {
  const platform = getPlatform(item.type);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-[260px] w-full flex-col items-center justify-center gap-4 rounded-xl bg-gradient-to-br from-secondary/60 to-secondary/20 p-8 text-center transition hover:shadow-lift"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background/70 text-foreground">
        <PlatformIcon platform={platform} />
      </div>
      <p className="max-w-sm text-sm text-foreground/70">
        {note ?? `Open this on ${platformLabel(platform)} to view ${item.creator}'s content.`}
      </p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
        Open {platformLabel(platform)} <ExternalLink className="h-3.5 w-3.5" />
      </span>
    </a>
  );
}

/* ─────────────────────────────── Main render ──────────────────────────────── */

/** Pick the best external link for the link-card fallback. */
function pickFallbackHref(item: MediaItem): string | null {
  const platform = getPlatform(item.type);
  if (platform === "youtube" && item.youtubeUrl) return item.youtubeUrl;
  if (platform === "instagram" && item.instagramUrl) return item.instagramUrl;
  if (platform === "spotify" && item.spotifyUrl) return item.spotifyUrl;
  if (platform === "instagram" && item.embedRef.startsWith("http")) return item.embedRef;
  if (platform === "youtube" && item.embedRef.startsWith("http")) return item.embedRef;
  return item.externalUrl ?? item.spotifyUrl ?? item.youtubeUrl ?? item.instagramUrl ?? item.tiktokUrl ?? null;
}

function renderFrame(item: MediaItem) {
  // Instagram — use official blockquote embed for /p/ /reel/ /tv/, else link card.
  if (item.type === "instagram") {
    if (item.embedRef.startsWith("http") && isInstagramPostLike(item.embedRef)) {
      return <InstagramEmbed url={item.embedRef} />;
    }
    const href = item.instagramUrl ?? (item.embedRef.startsWith("http") ? item.embedRef : null);
    if (!href) return null;
    return (
      <LinkCard
        item={item}
        href={href}
        note={`Instagram only allows individual posts to embed — not profiles. Open to see ${item.creator}'s latest.`}
      />
    );
  }

  // YouTube — never embed channel pages. Only embed real video URLs/IDs.
  if (item.type === "youtube") {
    const embed = getEmbedUrl(item);
    if (!embed) {
      const href = pickFallbackHref(item);
      if (!href) return null;
      return <LinkCard item={item} href={href} />;
    }
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-secondary/40">
        <iframe
          src={embed}
          title={`${item.title} — ${item.creator}`}
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    );
  }

  // Spotify / Apple / TikTok — unchanged iframe behaviour.
  const embed = getEmbedUrl(item);
  if (!embed) {
    const href = pickFallbackHref(item);
    if (!href) return null;
    return <LinkCard item={item} href={href} />;
  }
  const heightClass = getFrameHeight(item.type);
  const isAspect = heightClass.startsWith("aspect");
  return (
    <div className={`w-full overflow-hidden rounded-xl bg-secondary/40 ${isAspect ? heightClass : ""}`}>
      <iframe
        src={embed}
        title={`${item.title} — ${item.creator}`}
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        className={`w-full ${isAspect ? "h-full" : heightClass} border-0`}
      />
    </div>
  );
}

export function MediaEmbed({ item, bare = false }: MediaEmbedProps) {
  const frame = renderFrame(item);

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
      {frame ? <div className="mt-5">{frame}</div> : null}
      <MediaLinks item={item} />
    </article>
  );
}

interface PlatformLinkEntry {
  label: string;
  href: string;
}

function getPlatformLinks(item: MediaItem): PlatformLinkEntry[] {
  const links: PlatformLinkEntry[] = [];
  if (item.spotifyUrl) links.push({ label: "Open Spotify", href: item.spotifyUrl });
  if (item.youtubeUrl) links.push({ label: "Open YouTube", href: item.youtubeUrl });
  if (item.instagramUrl) links.push({ label: "Open Instagram", href: item.instagramUrl });
  if (item.tiktokUrl) links.push({ label: "Open TikTok", href: item.tiktokUrl });
  if (links.length === 0 && item.externalUrl) {
    links.push({ label: "Open original", href: item.externalUrl });
  }
  return links.filter((l) => typeof l.href === "string" && l.href.length > 0);
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
          rel="noopener noreferrer external"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          {l.label} <ExternalLink className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  );
}
