## Goal
Move beyond on-page tweaks. Build the on-site infrastructure that compounds rankings (content, reviews, schema) and hand you a focused off-site checklist for the work that has to happen outside Lovable (GBP, directories, links).

## What I'll build

### 1. Blog engine (`/blog`, `/blog/$slug`)
File-based posts in `src/content/blog/*.mdx` (or `.md`) with frontmatter (title, description, date, tags, ogImage). Loader reads filesystem at build time.
- `/blog` index — list of posts, grouped/filterable by tag
- `/blog/$slug` — Article JSON-LD, BreadcrumbList, author byline (Brittany), TOC, related posts, CTA to consult
- Each post: self-referencing canonical + og:url, Article schema with `datePublished`/`dateModified`/`author`/`publisher`
- Added to `sitemap.xml.ts` dynamically

**Seed with 6 starter posts** (drafts you can edit):
1. EMDR vs IFS for trauma — which is right for you
2. What to expect in your first trauma therapy session in Austin
3. How to find a Christian therapist in Austin (without the red flags)
4. Faith deconstruction and therapy — a non-judgmental guide
5. Does insurance cover trauma therapy in Austin? (Headway + out-of-network)
6. Signs you're carrying unprocessed trauma (and what helps)

Each ~800–1,200 words, internally linked to the matching money page.

### 2. Reviews / testimonials section + AggregateRating schema
- New `<Testimonials />` component on home + each money page
- Static testimonial data file (`src/lib/testimonials.ts`) — you fill in real Google/Headway quotes
- `AggregateRating` added to the `MedicalBusiness` JSON-LD in `__root.tsx` (driven by the same data)
- Note: AggregateRating requires real reviews to be ethical/compliant — I'll leave it commented until you confirm you have ≥5

### 3. LocalBusiness schema upgrade
Current `MedicalBusiness` is good but missing fields Google's local algorithm reads:
- `geo` (lat/lng for 6448 E Hwy 290)
- `hasMap` (Google Maps URL)
- `telephone`
- `image` array (interior, exterior, headshot — uses existing assets)
- `knowsAbout` (EMDR, IFS, TF-CBT, trauma, anxiety, Christian counseling)

### 4. Internal linking hub
Add a contextual "Related" block component used at the bottom of every money page, pointing across the trauma ↔ Christian ↔ generic clusters. Better internal PageRank flow.

### 5. Author / E-E-A-T page
New `/about/brittany-zientek` route with full bio, license number, education, modalities, schema.org `Person` JSON-LD with `sameAs` (Headway, LinkedIn if you have one). Every blog post bylines to this page.

## Off-site playbook (delivered as `SEO-PLAYBOOK.md` in the repo)

The on-site work above gets you ranking-ready. These are the actual needles for "austin therapy/counselor" head terms:

**Google Business Profile (biggest single lever)**
- Claim/verify at business.google.com
- Exact NAP: Haven & Harbor Counseling / 6448 E Hwy 290, Ste E108, Austin, TX 78723 / phone
- Primary category: "Counselor" + secondaries (Mental Health Service, Psychotherapist, Family Counselor)
- Service areas: Austin + surrounding ZIPs
- 10+ photos (interior, exterior, headshot, logo)
- Weekly "Google Posts" (can be reposts of blog content)
- Request reviews from every past client — target 25+ to break into the map pack

**Citations / directories (free, ~2 hrs of work)**
Target list with exact URLs: Psychology Today, TherapyDen, GoodTherapy, Inclusive Therapists, Open Path Collective, Mental Health Match, Zencare, Yelp, BBB, Bing Places, Apple Maps, Nextdoor Business. NAP must match GBP exactly.

**Backlinks (the real KD-50+ unlock)**
- Austin church directories (your niche): list of 15 Austin churches with "counseling resources" pages to pitch
- Local press: Austin Woman, Austinot, Austin Monthly — pitch angles
- Guest posts: Headway provider blog, Faithful Counseling, Christian therapist podcasts
- HARO / Qwoted / Featured.com: daily mental-health queries from journalists

**Reviews flywheel**
- Email template to send 1 week post-session asking for a Google review
- Link shortener pointing to your GBP review URL

## Out of scope (this round)
- Writing all 6 blog posts to publishable quality (I'll seed drafts; you/an editor polish)
- Actually claiming GBP, submitting to directories, sending outreach — those need your credentials and voice
- Paid ads, custom domain

## Honest expectation
On-site changes ship today. GBP + 10 reviews + 5 directory listings is what moves "austin counselor"/"austin therapist" in 60–90 days. Blog content compounds over 3–6 months. Backlinks are the slowest but highest-ceiling lever.
