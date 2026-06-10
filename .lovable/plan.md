
## Goal

Grow `src/lib/media.ts` so the `/resources/media` page shows the new shows the user listens to, fix the 3 existing Spotify IDs that returned 404, and make sure one-off Instagram Reels and TikTok videos can be embedded the same way podcasts already are.

## 1. Add 10 new podcasts

For each show below, add **three** entries to `media.ts` — one Spotify show, one YouTube channel/show, one Instagram profile — so the user can pick the format they like best on the media page. Categories drawn from the existing set (`Self-Knowledge`, `Relationships`, `Mental Health`, `Trauma & Healing`, `Faith & Identity`).

| Show | Host | Category |
|---|---|---|
| The Daily Stoic | Ryan Holiday | Self-Knowledge |
| The Daily Motivation | Lewis Howes | Self-Knowledge |
| ReThinking | Adam Grant | Self-Knowledge |
| On Purpose | Jay Shetty | Self-Knowledge |
| Jillian on Love | Jillian Turecki | Relationships |
| The Mel Robbins Podcast | Mel Robbins | Mental Health |
| The Sabrina Zohar Show | Sabrina Zohar | Relationships |
| Solved | Mark Manson | Self-Knowledge |
| Motion | JB Copeland | Self-Knowledge |
| The Pocket | Chris Griffin | Self-Knowledge |

Lookup approach (build mode): use `websearch--web_search` for each show's official Spotify show URL, YouTube channel/@handle, and Instagram handle, then extract the canonical IDs (`spotify.com/show/<id>`, `youtube.com/@<handle>` or video id, `instagram.com/<handle>`). If a show is missing one platform, skip that single entry rather than guessing.

## 2. Re-verify 3 broken Spotify shows

Re-search for the correct Spotify show IDs for:
- Where Should We Begin? with Esther Perel
- Therapy Chat (Laura Reagan)
- The Holy Post (Phil Vischer & Skye Jethani)

Replace the existing `embedRef` values in `src/lib/media.ts` and update `externalUrl` to match.

## 3. One-off Reels and TikToks

`MediaEmbed.tsx` already handles Instagram and TikTok embeds from either a full URL or a shortcode/id — no component changes needed. To make this usable:

- Add a short comment block in `src/lib/media.ts` documenting how to add a single Reel or TikTok (paste the full URL into `embedRef`; set `type: "instagram"` or `"tiktok"`; category and creator drive filtering).
- Seed 2 example items (one Reel, one TikTok) from creators already in the library (e.g. Jay Shetty Reel, Mel Robbins TikTok) so the grid demonstrates the format and the user has a template to copy.

## 4. Verify

After edits:
- Run a quick build check.
- Open `/resources/media` in the preview, confirm new cards render, the Spotify iframes for the 3 fixed shows load, and the Reel/TikTok examples appear under the Instagram/TikTok type filters.

## Technical notes

- All changes are confined to `src/lib/media.ts` (data only) plus a brief comment; no schema, route, or component changes required.
- `MediaItem.embedRef` semantics by type are already defined in `src/lib/media.ts` — Spotify uses the bare id, YouTube uses the video id, Instagram/TikTok/Apple accept a full URL.
- For YouTube, prefer a representative recent episode video id over a channel link (the embed renderer expects a video id, not a channel).
