# Apply Doc Content — Pillars + 26 Blog Posts

## Decisions confirmed
- Blog URL: **/blog/{slug}** (canonical). Existing `/resources/{slug}` URLs 301 → `/blog/{slug}`.
- Pillar pages: **full replace** of bodies with doc copy + FAQ schema + internal links.
- Existing 11 posts: **replace overlapping bodies** with new doc copy at the new `/blog/` slug; keep non-overlapping ones (move them to `/blog/` too so all posts live under one path).

## Slug mapping (existing → new)
Overlapping (replace body with doc version):
- `finding-a-trauma-therapist-in-austin` → `/blog/finding-trauma-therapist-austin`
- `what-to-expect-first-therapy-session` → `/blog/first-therapy-session-austin`
- `high-functioning-anxiety` → `/blog/high-functioning-anxiety-austin`
- `signs-of-complex-trauma` → `/blog/signs-of-complex-ptsd-austin`
- (no exact doc match for `emdr-cpt-trauma-therapy-modalities`, `religious-trauma-when-faith-hurts`, `complex-ptsd-vs-ptsd`, `what-is-christian-counseling`, `christian-counseling-vs-secular-therapy`, `trauma-and-sleep`, `how-to-know-if-you-need-therapy` — keep as-is, just remount under `/blog/` with old slug)

Final blog count: 26 new + 7 carry-over = **33 posts** under `/blog/`.

## File changes

### 1. Posts data (`src/lib/posts.ts`)
- Add 26 new posts parsed from the three blog Google Docs (title, slug, date, description, keywords, full body as markdown-ish blocks already supported by the existing renderer in `resources.$slug.tsx`).
- Keep 7 non-overlapping existing posts; remove the 4 overlapping ones (their content is superseded).
- Each post: `slug`, `title`, `description` (meta), `date` (use 2026-01-15 staggered weekly), `keywords[]`, `content` blocks.

### 2. New route: `/blog/{slug}` and `/blog`
- Create `src/routes/blog.$slug.tsx` (copy of current `resources.$slug.tsx`, paths swapped to `/blog/$slug`, Article schema, breadcrumb, FAQPage when post has FAQ).
- Create `src/routes/blog.index.tsx` (copy of `resources.index.tsx`, listing all posts at `/blog`).
- Keep `resources.media.tsx` as-is (it's not a post).

### 3. Redirect stubs (301 → `/blog/...`)
- Convert `src/routes/resources.$slug.tsx` and `src/routes/resources.index.tsx` to `beforeLoad` redirect routes that throw `redirect({ to: '/blog/$slug' | '/blog', statusCode: 301 })`.

### 4. Pillar pages — full replace
Replace bodies of these 3 routes with doc copy verbatim, including:
- Long-form sections (Who this is for, What we treat, Modalities, What sessions look like, Pricing, FAQ, internal links).
- FAQPage JSON-LD in `head().scripts` built from each doc's FAQ block.
- BreadcrumbList JSON-LD.
- Internal links to the matching new `/blog/...` posts mentioned in the doc.

Files:
- `src/routes/trauma-therapy-austin.tsx`
- `src/routes/christian-counseling-austin.tsx`
- `src/routes/anxiety-therapy-austin.tsx`

### 5. Sitemap (`src/routes/sitemap[.]xml.ts`)
- Replace old `/resources/{slug}` entries with all 33 `/blog/{slug}` entries.
- Keep canonical pillar + core routes.

### 6. Internal links
- `SiteHeader.tsx` / `SiteFooter.tsx`: update any `/resources` link to `/blog`.
- `resources.media.tsx`: leave URL as-is (media page is separate) OR rename to `/media`. **Will leave at `/resources/media`** to minimize scope; just update its internal back-links.

## Out of scope (intentionally)
- No domain swap from `lovable.app`.
- No real phone / license / training-org placeholders changed.
- No design / theme changes.
- Off-site SEO playbook (GBP, citations, Psychology Today) — unchanged.

## Technical notes
- Doc parsing happens once at plan-execution time; I'll write a one-off Node script in `/tmp` to chunk each doc into `{slug, title, meta, body}` and emit a TS array I paste into `posts.ts`. The script is throwaway, not committed.
- Body format mirrors existing posts in `posts.ts` (array of `{ type: 'p' | 'h2' | 'h3' | 'ul' | 'ol', ... }` blocks) so the existing `resources.$slug.tsx` renderer works unchanged when copied to `blog.$slug.tsx`.
- FAQ blocks in each post become a `faq: [{q, a}]` field; renderer emits `<details>` and FAQPage schema when present.

## Expected outcome
- 33 posts live under `/blog/{slug}` with proper SEO heads, breadcrumb + Article + (optional) FAQ schema.
- 11 old `/resources/{slug}` URLs 301 to new canonical.
- 3 pillar pages now full long-form with FAQ schema and links into the new blog hub.
- Sitemap updated; no broken internal links.