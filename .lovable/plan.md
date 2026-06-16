# Rank for "trauma counseling Austin"

## Where you stand

- Semrush has **no data** for haven-harbor-counseling.lovable.app — Google likely hasn't indexed the site yet (or only barely). That's the root cause of "doesn't pop up at all," not weak content.
- "trauma counseling austin" — 70 searches/mo, **KD 12 (very easy)**. Top results (austincts.com, atxtraumatherapycenter.com, Psychology Today) are beatable with focused on-page SEO + indexing.
- Broader nearby terms worth capturing: *trauma therapy austin*, *trauma therapy near me*, *ptsd counseling*, *emdr therapists austin*.
- You have landing pages for "austin trauma therapist" and "trauma therapy austin guide" — but **none targeting "trauma counseling austin"** specifically, and the homepage title doesn't include the phrase.

## Plan

### 1. Get indexed (highest priority — nothing else matters until this is done)
- Verify the site in Google Search Console (use the existing `google-site-verification` meta in `__root.tsx`).
- Submit `https://haven-harbor-counseling.lovable.app/sitemap.xml` in GSC.
- Use GSC "URL Inspection → Request Indexing" on the homepage and the 4–5 key landing pages.
- Recommend (for after this plan): point a real custom domain (e.g. havenandharborcounseling.com) at the site. `.lovable.app` subdomains rank poorly vs. a branded domain. I'll flag this but not act on it.

### 2. Create a dedicated `/trauma-counseling-austin` page
New route `src/routes/trauma-counseling-austin.tsx` targeting the exact phrase:
- H1: "Trauma Counseling in Austin, TX"
- Title: "Trauma Counseling in Austin, TX | Haven & Harbor Counseling" (<60 chars)
- Meta description with phrase + value prop (<160 chars)
- Sections: What is trauma counseling · Who it helps (PTSD, C-PTSD, religious trauma) · Modalities (EMDR, IFS, TF-CBT) · What to expect · About Brittany · Insurance & cost · FAQ · CTA to Headway
- Internal links to `/what-is-emdr`, `/what-is-ifs-therapy`, `/trauma-therapy-austin-guide`, `/about`, `/cost-of-therapy-austin`
- LocalBusiness + FAQPage JSON-LD
- Canonical + og:url self-referencing
- Add to `sitemap[.]xml.ts`

### 3. Tighten on-page SEO across existing pages
- **Homepage title** → "Trauma Counseling & Therapy in Austin, TX | Haven & Harbor" (currently "Austin Trauma Therapy" — add "counseling" variant)
- **Homepage H1** stays brand-forward, but add an H2 containing "Trauma counseling in Austin"
- **`austin-trauma-therapist.tsx`** — route path has a typo (`/aAustin_trauma-therapist`). Fix to `/austin-trauma-therapist` so the URL matches the intent and the existing sitemap entry.
- Ensure every landing page has a unique, keyword-targeted title + meta description (audit `austin-therapy`, `austin-therapist`, `trauma-therapy-austin-guide`).
- Add internal links from homepage "Specialties" → Trauma & PTSD card to the new `/trauma-counseling-austin` page.

### 4. LocalBusiness schema upgrade (in `__root.tsx`)
Current JSON-LD is missing key local-SEO signals. Add: full street address (6448 E Hwy 290, Ste E108, Austin TX 78723), telephone, geo coordinates, `priceRange`, `image`, `url`, `sameAs` (Headway profile, any social), and `openingHours`. Local pack ranking depends heavily on this + a Google Business Profile.

### 5. Google Business Profile (recommend — out of code scope)
The Austin "map pack" for trauma counseling is dominated by GBP listings. I can't create that for you, but it's the single biggest off-site lever. I'll note this in the closing message.

## Out of scope
- Building backlinks (off-site work)
- Switching to a custom domain (your decision — I'll flag the SEO benefit)
- Blog content beyond what already exists in `/resources`
- Paid ads

## Technical notes
- Sitemap is a server route at `src/routes/sitemap[.]xml.ts` — add the new path there.
- All new head tags follow the existing per-route `head()` pattern; canonical only on the leaf route.
- JSON-LD via the `scripts` array, as you already do elsewhere.
