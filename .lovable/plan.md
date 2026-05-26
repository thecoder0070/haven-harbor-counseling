## Plan: Embeddable Media (Podcasts, Instagram, TikTok)

### 1. Media library data file
Create `src/lib/media.ts` with a typed `MediaItem` array. Each item has:
- `id`, `title`, `creator`, `category` (e.g. "Relationships", "Trauma", "Faith", "Mental Health")
- `type`: `"podcast" | "instagram" | "tiktok" | "youtube"`
- `embedId` or `embedUrl` (Spotify episode/show ID, Apple Podcasts URL, IG post URL, TikTok video URL, YouTube video ID)
- `description`, optional `externalUrl`

Seed with a starter list including Diary of a CEO and Modern Wisdom so the page isn't empty.

### 2. Reusable `<MediaEmbed />` component
`src/components/site/MediaEmbed.tsx` — switches on `type` and renders the correct iframe:
- **Spotify**: `https://open.spotify.com/embed/episode/{id}` or `/show/{id}`
- **Apple Podcasts**: `https://embed.podcasts.apple.com/...`
- **Instagram**: official `instagram.com/p/{id}/embed`
- **TikTok**: official `tiktok.com/embed/v2/{id}`
- **YouTube**: `youtube.com/embed/{id}`

All wrapped in a styled card with title, creator, description, and "Open original" link. Responsive aspect ratios via `AspectRatio`. Lazy-loaded iframes.

### 3. New `/resources/media` page
`src/routes/resources.media.tsx`:
- Hero with eyebrow + title ("Recommended Listening & Watching")
- Client-side **search input** (filters by title/creator/description)
- **Category filter chips** (All, Relationships, Trauma, Faith, etc.)
- **Type filter** (All, Podcasts, Instagram, TikTok)
- Grid of `<MediaEmbed />` cards
- Proper `head()` SEO metadata

### 4. Embeds inside journal posts
Extend the post block format in `src/lib/posts.ts` to support a new `embed:` block type (e.g. `"embed:spotify:episode-id"` or a structured object). Update the renderer in `src/routes/resources.$slug.tsx` to detect embed blocks and render `<MediaEmbed />` inline within an article.

### 5. Navigation
- Add "Media" link to the Resources index page (`src/routes/resources.index.tsx`) as a third section under Guides/Journal, or as a card linking to `/resources/media`.
- Add `/resources/media` to `src/routes/sitemap[.]xml.ts`.

### Out of scope
- No live web search (curated list, per your choice)
- No admin UI (you edit `src/lib/media.ts` directly)
- No backend / database needed
