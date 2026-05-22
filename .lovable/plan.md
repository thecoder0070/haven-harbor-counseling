# SEO improvements from README — items 1–3

## 1. Article JSON-LD per blog post
In `src/routes/resources.$slug.tsx`, extend the existing `head()` to add a `scripts` entry emitting `application/ld+json` with `@type: "Article"`. Fields derived from the post loader data:
- `headline` → post.title
- `description` → post.metaDescription
- `datePublished` → post.date
- `author` → `{ "@type": "Organization", "name": "Haven & Harbor Counseling" }`
- `publisher` → same org with logo
- `mainEntityOfPage` → canonical URL
- `articleSection` → post.category

## 2. LocalBusiness JSON-LD on homepage
In `src/routes/index.tsx` `head()`, add a `scripts` entry with `@type: "MedicalBusiness"` (more specific than LocalBusiness for a counseling practice):
- name, url, telephone (if available in current site), address (Austin, TX 78704 per README)
- `areaServed`: Austin + Texas (telehealth)
- `medicalSpecialty`: "Psychiatric"
- `priceRange`, `sameAs` for any social links already on site

I'll read the current homepage / contact info first to pull real values rather than invent them. If the street address isn't already in the codebase, I'll use only city/region/postal (78704) and leave streetAddress out.

## 3. Stagger publish dates per README cadence
Update `date` field on the 7 new posts in `src/lib/posts.ts` to weekly cadence starting this week:
- finding-a-trauma-therapist-in-austin → 2026-05-22 (week 1, today)
- what-to-expect-first-therapy-session → 2026-05-29 (week 2)
- what-is-christian-counseling → 2026-06-05 (week 3)
- high-functioning-anxiety → 2026-06-12 (week 4)
- emdr-cpt-trauma-therapy-modalities → 2026-06-19 (week 5)
- religious-trauma-when-faith-hurts → 2026-06-26 (week 6)
- complex-ptsd-vs-ptsd → 2026-07-03 (week 7)

The `resources.tsx` index already sorts by date desc, so future-dated posts will appear at the top as their date arrives. Sitemap `lastmod` will pick up the new dates automatically if it reads from `post.date` (will verify).

Note: future-dated posts still render today since there's no publish-gate filter. If you want them hidden until their date, say so and I'll add a filter in `resources.tsx` and the sitemap.

## Out of scope (per earlier decision)
- Per-post `og:image` (needs imagery)
- `/insurance` page (waiting on payer info)
