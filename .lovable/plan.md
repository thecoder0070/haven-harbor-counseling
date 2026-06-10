
## 1. Pricing & insurance copy (site-wide)

Current copy says Haven & Harbor is **out-of-network only** with **$165 / $245** session fees. New truth: **insurance is accepted**, and the **out-of-pocket / uncovered rate is $120** per 50-minute session.

Consistent wording: *"Haven & Harbor accepts most major insurance plans. If your plan doesn't cover therapy, the out-of-pocket rate is $120 per 50-minute session."*

Files to update:
- `src/routes/faq.tsx` — "Do you take insurance?" + "What are your fees?"
- `src/routes/services.tsx` — "Fees & Insurance" block (drop $165/$245 bullets, out-of-network paragraph)
- `src/routes/cost-of-therapy-austin.tsx` — insurance Q, superbill Q (reframe as backup for plans we're not in-network with), $175 reference in body copy
- `src/routes/austin-therapy.tsx` — "Insurance: Out-of-network…" bullet
- `src/routes/trauma-therapy-austin-guide.tsx` — soften Haven & Harbor self-reference in the EMDR/insurance Q
- `src/lib/posts.ts` — Christian-counseling insurance snippet if it asserts out-of-network

Will ask after approval: which insurance networks to name (Aetna, BCBS, Cigna, United…) vs. keep generic.

## 2. Media library: data-model upgrade

Today each `MediaItem` = one platform (single "Open original" link). New requirement: each podcast card shows **Open Spotify** and **Open YouTube** side by side.

Update `src/lib/media.ts`:

```ts
export interface MediaItem {
  id: string;
  title: string;
  creator: string;
  category: string;
  type: MediaType;       // drives the embed
  embedRef: string;
  description: string;
  spotifyUrl?: string;   // NEW
  youtubeUrl?: string;   // NEW
  instagramUrl?: string; // NEW (optional)
  tiktokUrl?: string;    // NEW (optional)
  externalUrl?: string;  // kept as fallback for one-off Reels/TikToks
}
```

Collapse current "one show, three entries" pattern into **one entry per podcast** — Spotify embed by default + populated `spotifyUrl` + `youtubeUrl` (+ optional Instagram).

Update `src/components/site/MediaEmbed.tsx` footer: replace the single "Open original" link with a row of links — Spotify → YouTube → Instagram → TikTok → externalUrl, rendering only the ones present. Same underlined-link styling + `ExternalLink` icon. For one-off Reels/TikToks (no Spotify/YouTube), the row collapses to a single "Open Instagram" / "Open TikTok" link.

## 3. Fix broken Spotify entries

- **Motion (JB Copeland)** — re-search Spotify, swap the current `apple-podcast` entry for `type: "spotify-show"` with the correct show id.
- **Modern Wisdom** — already on Spotify (`4DDsabHrM9BcEgsXMrtTBu`); re-verify and add `youtubeUrl` for the new dual-link row.

## 4. Add 5 new podcasts

| Show | Host | Category |
|---|---|---|
| Your World Within | Eddie Pinero | Self-Knowledge |
| The Mindset Mentor | Rob Dial | Self-Knowledge |
| Joel Osteen Podcast | Joel Osteen | Faith & Identity |
| A Bit of Optimism | Simon Sinek | Self-Knowledge |
| Know Thyself | André Duqum | Self-Knowledge |

Each entry: Spotify embed + `spotifyUrl` + `youtubeUrl` (+ Instagram URL if official). If a Spotify show id can't be confirmed, fall back to `apple-podcast` for that single entry and still populate `youtubeUrl`.

## 5. One-off Instagram Reels from the Google Sheet

Pulled from the linked sheet (`1-2Cew3h5So7AQRitiIkf8JP94MqRJEp0_ShcrKeunCE`). Add 6 individual-post items + 2 creator-profile items to `media`:

Individual reels/posts (`type: "instagram"`, `embedRef` = full URL, `category` = TBD via lookup — likely Relationships / Mental Health / Trauma & Healing based on each creator):
1. `https://www.instagram.com/reel/DZL1oF4hV8G/`
2. `https://www.instagram.com/p/DYGUyIZDN4X/`
3. `https://www.instagram.com/reel/DXMij-JGnrl/`
4. `https://www.instagram.com/reel/DXR5jDtjNVd/`
5. `https://www.instagram.com/p/DXAnymPD4Jo/`
6. `https://www.instagram.com/reel/DYS9KbAANG8/`

Creator profiles (also `type: "instagram"`; embed renders the profile's recent reel grid):
7. `@prestonrack` → `https://www.instagram.com/prestonrack`
8. `@mindfulmft` → `https://www.instagram.com/mindfulmft`

**Per-reel lookup:** For each of the 6 individual URLs, fetch the post page to read creator handle + caption snippet so the card has a meaningful title/description/category, rather than guessing. If a post is private/unavailable, skip that one and note it.

## 6. Alphabetical order

After consolidation, sort the `media` array alphabetically by `title`, ignoring leading "The " / "A " (library convention). Encode as a one-time manual reorder in source so the file reads alphabetically; no runtime sort. Instagram reels grouped together at the bottom (or sorted by creator handle) so the alphabetized podcast list stays clean — will confirm placement during build.

## 7. Verify

- Open `/resources/media` — confirm cards render alphabetically, each podcast shows both "Open Spotify" + "Open YouTube", the Motion and Modern Wisdom Spotify iframes load, and the 8 Instagram items appear under the Instagram type filter.
- Spot-check `/faq`, `/services`, `/cost-of-therapy-austin`, `/austin-therapy` for consistent $120 / insurance wording.

## Technical notes

- Pricing change is copy-only.
- Media model change is additive (new optional fields) — existing one-off Reel/TikTok seeds continue to work via `externalUrl`.
- No new routes / components — edits land in `src/lib/media.ts`, `src/components/site/MediaEmbed.tsx`, and the listed route/copy files.
- Google Sheets connector is now linked; reading the reels sheet works through the gateway and needs no further setup.
