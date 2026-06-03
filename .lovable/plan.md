## Goal

Create a long-form, in-depth guide page targeting long-tail trauma keywords (KD low-to-mid) where a real Austin specialist can outrank directories and Facebook listings.

## Target keywords

- Primary: "EMDR trauma therapist Austin"
- Secondary: "complex trauma therapy Austin", "C-PTSD therapist Austin", "somatic trauma therapy Austin", "childhood trauma therapy Austin"
- Question variants: "how does EMDR work", "EMDR vs talk therapy", "how long does trauma therapy take", "is EMDR covered by insurance in Texas"

## New route

`src/routes/trauma-therapy-austin-guide.tsx` → URL `/trauma-therapy-austin-guide`

Why a new page (not edits to `/austin-trauma-therapist`): the existing page is a short service page optimized for the head term. The guide is a separate long-form asset (~2,000–2,500 words) targeting long-tail informational queries, internally linking back to the service page and `/contact`.

## Page structure (sections)

1. Hero / PageHeader — H1: "EMDR & Complex Trauma Therapy in Austin: A Complete Guide"
2. TL;DR summary box (3–4 bullets, scannable)
3. What counts as trauma (single-incident vs complex/C-PTSD vs attachment)
4. EMDR explained — 8 phases, what a session looks like, who it helps
5. Complex trauma (C-PTSD) — why standard talk therapy often stalls, phased approach (stabilization → processing → integration)
6. Other modalities used alongside — IFS, somatic experiencing, parts work
7. What to expect: first session, timeline, typical length of treatment
8. How to choose an Austin trauma therapist (credentials, training, fit) — with subtle differentiation
9. Cost, insurance, and superbills in Texas (link to `/cost-of-therapy-austin`)
10. FAQ (8–10 questions, marked up with FAQPage JSON-LD)
11. Related reading — internal links to `/austin-trauma-therapist`, `/what-is-emdr`, `/what-is-ifs-therapy`, `/first-therapy-session`
12. CTA banner

## SEO wiring

- `head()` with unique title (~58 chars), meta description (~155 chars), canonical, og:title/description/url
- JSON-LD: `Article` + `FAQPage` (inline `<script type="application/ld+json">` in head meta)
- Add the new URL to `src/routes/sitemap[.]xml.ts`
- Internal links from `/austin-trauma-therapist`, `/what-is-emdr`, `/resources` index pointing to the guide
- Use existing `SiteLayout`, `PageHeader`, `CtaBanner` for visual consistency — no new components

## Files to change

- **Create** `src/routes/trauma-therapy-austin-guide.tsx`
- **Edit** `src/routes/sitemap[.]xml.ts` (add new URL)
- **Edit** `src/routes/austin-trauma-therapist.tsx` (add "Read the full guide" link)
- **Edit** `src/routes/what-is-emdr.tsx` (add contextual link to guide)

## Out of scope

- No new shared components or design system changes
- No backend / database work
- Copy will be drafted by me as a strong first pass; you can edit anything that doesn't sound like you before publishing
