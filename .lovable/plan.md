
# Haven & Harbor — Sitewide Upgrade from the Google Doc

Applying sections 1–5, 9, and the consolidation in section 10. Keeping the current lovable.app domain in all canonicals, OG URLs, and JSON-LD. Leaving phone, license number, and Master's-institution placeholders untouched (you can fill in later). Footer email/address copy is updated to match the doc.

## 1. URL consolidation (canonical pattern: `[topic]-austin`)

Keepers (rewrite the existing files with the new copy where it applies):
- `/trauma-therapy-austin` ← new pillar file (use the existing `austin-trauma-therapy.tsx` content as the starting body)
- `/christian-counseling-austin` ← new pillar file (use `christian-counseling.tsx` body)
- `/anxiety-therapy-austin` ← new pillar file (new content from the doc + existing anxiety copy)
- `/services`, `/about`, `/contact`, `/`, `/faq`, `/resources`, `/what-is-emdr`, `/what-is-ifs-therapy`, `/cost-of-therapy-austin`, `/first-therapy-session`, `/schedule`, `/approach`, `/resources/media` — kept as is, copy refreshed where the doc provides it.

301-redirect (server-side redirect via the route's `beforeLoad`) the duplicates:

| From | → To |
|---|---|
| `/austin-trauma-therapy` | `/trauma-therapy-austin` |
| `/austin-trauma-therapist` | `/trauma-therapy-austin` |
| `/trauma-counseling-austin` | `/trauma-therapy-austin` |
| `/trauma-therapy-austin-guide` | `/trauma-therapy-austin` |
| `/austin-christian-therapist` | `/christian-counseling-austin` |
| `/christian-counseling` | `/christian-counseling-austin` |
| `/austin-counseling` | `/services` |
| `/austin-therapy` | `/services` |
| `/austin-therapist` | `/about` |

Each redirect file becomes a stub: `beforeLoad: () => { throw redirect({ to: '/...', statusCode: 301 }) }`. Internal `<Link>`s across the site are updated to point at the new canonical URLs.

Sitemap (`src/routes/sitemap[.]xml.ts`) is rewritten to list only the canonical keepers — redirect stubs are removed from the sitemap.

## 2. Page copy refreshes (from the doc)

- **`src/routes/index.tsx`** — Hero, Welcome, Specialties, Therapist intro, "Starting is simple" 3-step, resources teaser, closing CTA — replaced with the doc's tightened wording. New `<title>` / meta description / OG tags from doc §1.
- **`src/routes/services.tsx`** — Replaced with the expanded services hub (Trauma & PTSD, Anxiety & Panic, Christian Counseling, Grief & Loss, Life Transitions, Free Consult, Fees & Insurance, Office & Telehealth). Title + meta from doc §2.
- **`src/routes/about.tsx`** — Replaced with the doc's about copy: My approach (3 commitments), Training and credentials (with `[placeholders]` kept), What I work with most, What I don't work with, Outside the office placeholder, closing CTA. Title + meta from doc §3.
- **`src/routes/contact.tsx`** — Address, phone (placeholder), email `hello@havenandharborcounseling.com`, office hours, telehealth note, 988 crisis line. Doc §9.
- **`src/components/site/SiteFooter.tsx`** — NAP-consistent footer per doc §4 (address, email, license line, Explore links updated to canonical URLs, Insurance block, crisis 988 line, 2026 copyright).

## 3. New pillar pages

- **`src/routes/trauma-therapy-austin.tsx`** — new file. Starting body: existing `/austin-trauma-therapy` content, retitled and re-linked. Full FAQ block (4 Qs from doc §5c). Breadcrumb schema.
- **`src/routes/christian-counseling-austin.tsx`** — new file. Starting body: existing `/christian-counseling` content. FAQ + breadcrumb schema.
- **`src/routes/anxiety-therapy-austin.tsx`** — new file. Built from doc §2 anxiety section + a 3–4 Q FAQ derived in the same tone. FAQ + breadcrumb schema.

## 4. Schema (JSON-LD)

- **Root (`__root.tsx`)** — keep existing MedicalBusiness/LocalBusiness/Psychologist enhancements. Add `priceRange "$130-$225"`, `email`, `medicalSpecialty`, `availableService[]`, expanded `sameAs[]` (Headway, Psychology Today placeholder) from doc §5a. Existing `geo`, `hasMap`, `openingHoursSpecification` retained.
- **About (`about.tsx`)** — replace existing Person schema with the fuller version in doc §5b (jobTitle, hasCredential, alumniOf placeholder, knowsAbout[], sameAs[]).
- **FAQPage schema** — add via `head().scripts` on `/`, `/faq`, `/trauma-therapy-austin`, `/christian-counseling-austin`, `/anxiety-therapy-austin`. Each route's FAQ block in JSX must match its FAQPage JSON-LD (Google requires this).
- **BreadcrumbList schema** — add to every inner route via `head().scripts`.
- **Article schema** — add to `resources.$slug.tsx` from the post's loader data (headline, dates, author, publisher, mainEntityOfPage). The existing blog posts don't currently have it.

All schema URLs use `https://haven-harbor-counseling.lovable.app`.

## 5. Things I'm intentionally NOT doing

- Domain swap to `havenandharborcounseling.com` (you said: keep lovable.app for now).
- Replacing `[real phone]`, LPC license number, Master's institution, EMDR/IFS training org names (you said: skip).
- Off-site work (GBP, Psychology Today profile, Headway sameAs URL, review-link, citations) — these are doc §6, §7, §8, §12; they live in the existing `SEO-PLAYBOOK.md` and require external action, not code.
- Image format migration to WebP + srcset — out of scope for this turn unless you ask; current assets are already optimized.
- Buying / migrating to the custom domain — when you do, it's a one-line `BASE_URL` change in 4 places (sitemap, root schema, about Person schema, OG URLs).

## Technical details

- Redirects use `beforeLoad: () => { throw redirect({ to: '/trauma-therapy-austin', statusCode: 301 }) }` inside the legacy route file. Component becomes a noop. This is SSR-friendly and TanStack-native.
- FAQPage schema is injected per-route via `head().scripts` (not in `__root.tsx`) so each FAQ-bearing page emits its own.
- BreadcrumbList JSON-LD is generated inline in each leaf route's `head()` — no shared helper, to keep route files self-contained and SSR-safe.
- Sitemap stays a server route; only canonical URLs listed; `lastmod` omitted (matches current behavior).
- All internal `<Link to="...">` calls are updated to canonical URLs so the type-checked router doesn't compile against deleted/redirected paths.

## Files touched (approximate count)

- Edit: `index.tsx`, `about.tsx`, `services.tsx`, `contact.tsx`, `faq.tsx`, `SiteFooter.tsx`, `__root.tsx`, `sitemap[.]xml.ts`, `resources.$slug.tsx`, `SiteHeader.tsx` (nav links)
- Create: `trauma-therapy-austin.tsx`, `christian-counseling-austin.tsx`, `anxiety-therapy-austin.tsx`
- Convert to redirect stubs: `austin-trauma-therapy.tsx`, `austin-trauma-therapist.tsx`, `trauma-counseling-austin.tsx`, `trauma-therapy-austin-guide.tsx`, `austin-christian-therapist.tsx`, `christian-counseling.tsx`, `austin-counseling.tsx`, `austin-therapy.tsx`, `austin-therapist.tsx`
