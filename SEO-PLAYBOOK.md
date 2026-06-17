# Haven & Harbor — Off-Site SEO Playbook

The on-site work (titles, schema, FAQs, internal links, reviews component) is
shipped. These are the levers that actually move "austin counselor" /
"austin therapist" / "austin counseling" rankings. None of this can happen
inside Lovable — but it's where ~80% of head-term ranking comes from for a
local practice.

Work it top-to-bottom. The order is roughly ROI.

---

## 1. Google Business Profile — biggest single lever (do this week)

Local searches like "austin therapist" trigger Google's Map Pack before any
organic result. GBP is how you appear there.

1. **Claim & verify** at https://business.google.com
2. **NAP must match the website exactly** (Name, Address, Phone):
   - Haven & Harbor Counseling
   - 6448 E Hwy 290, Ste E108, Austin, TX 78723
   - [your phone]
3. **Primary category:** "Counselor"
4. **Secondary categories:** Mental Health Service, Psychotherapist,
   Family Counselor, Marriage Counselor (only ones that genuinely fit)
5. **Service areas:** Austin + surrounding ZIPs (78701–78759, plus 78610,
   78613, 78617, 78641, 78652, 78653, 78660, 78664, 78681, 78745, 78747)
6. **Photos (target 10+):** exterior of building, interior of office,
   waiting area, your headshot, logo. Geotag if your camera does. Re-upload
   monthly.
7. **Services:** list each as a separate item with descriptions —
   "Trauma Therapy (EMDR)", "Christian Counseling", "Anxiety Therapy",
   "IFS Therapy", "Telehealth Sessions". This generates internal GBP search
   matches.
8. **Q&A:** seed 5–10 yourself ("Do you take insurance?", "Do you offer
   telehealth?"). Answer them yourself with the office account.
9. **Google Posts weekly.** Easiest source: repurpose your existing blog
   posts in `/resources`. 100 words + image + link.
10. **Reviews — the real ranking signal.** Target 25+ reviews in 90 days
    to break into the Map Pack for competitive terms. Template below.

---

## 2. Reviews flywheel (do alongside GBP)

Google ranks GBP listings partly on review count, recency, and keyword
matches inside reviews ("Brittany helped me with **trauma**…" is gold).

**Get your review link:** GBP dashboard → "Get more reviews" → copy the
short link. It looks like `https://g.page/r/XXXXX/review`.

**Email template (send 1 week after a session, with consent):**

> Subject: A quick favor?
>
> Hi [name],
>
> Thank you again for trusting me with your story this week. If our work
> together has felt helpful, the single biggest thing you can do to help
> other people in Austin find this practice is to leave an honest Google
> review.
>
> Here's the link: [review link]
>
> No pressure at all — and please skip if it doesn't feel right. Either
> way I'm grateful you're doing this work.
>
> — Brittany

**Cadence:** ask everyone you've worked with for 4+ sessions, once.

Once you have 5+ reviews on Google, paste a handful into
`src/lib/testimonials.ts` (with permission) and the on-site testimonial
section + AggregateRating schema turns on automatically.

---

## 3. Citations / directories (one afternoon of work, free)

A "citation" is a NAP listing on a third-party site. Consistency across
these tells Google your business is real. NAP **must match GBP exactly** —
no "Ste E-108" on one and "Suite E108" on another.

**Mental-health specific (high value, do all of these):**
- [ ] Psychology Today — https://www.psychologytoday.com/us/therapists (paid, ~$30/mo, worth it)
- [ ] TherapyDen — https://www.therapyden.com (free)
- [ ] GoodTherapy — https://www.goodtherapy.org (paid)
- [ ] Inclusive Therapists — https://www.inclusivetherapists.com (free + paid tier)
- [ ] Open Path Collective — https://openpathcollective.org (free if you offer 1–2 sliding-scale slots)
- [ ] Mental Health Match — https://mentalhealthmatch.com (free)
- [ ] Zencare — https://zencare.co (vetted, paid)
- [ ] Christian Counselors Network / AACC directory (your niche)
- [ ] Faithful Counseling provider directory

**General local (free, ~10 min each):**
- [ ] Yelp for Business
- [ ] Better Business Bureau
- [ ] Bing Places for Business
- [ ] Apple Maps Connect (Apple Business Connect)
- [ ] Nextdoor Business
- [ ] Yellowpages.com
- [ ] Foursquare for Business

**Austin-specific:**
- [ ] AustinChamber.com member directory (if you join)
- [ ] DoAustin / 365 Things Austin business listings

---

## 4. Backlinks — the real KD-50+ unlock

For "austin therapist" (KD 56), you need 10–30 quality backlinks pointing
to your homepage and money pages. Quality > quantity.

**Easiest wins (no pitching required):**
- Every directory in section 3 above gives a backlink
- Headway provider profile → request a link from your bio if it isn't there
- Your alma mater (Dallas Baptist University) — alumni profile / counseling
  program "where are they now" page
- Texas LPC board profile

**Austin churches with "counseling resources" pages (pitch each):**
Search Google for `site:[church].org "counseling"` for these — most will
list licensed local Christian counselors if asked. Email the office:

- [ ] Austin Stone Community Church
- [ ] The Austin Stone (Downtown / St. John / South / West)
- [ ] Hill Country Bible Church
- [ ] Gateway Church Austin
- [ ] The Vine Church Austin
- [ ] Mosaic Church Austin
- [ ] Restore Austin
- [ ] Austin New Church
- [ ] Christ Church Austin
- [ ] Vox Veniae
- [ ] Reform Austin (PCA)
- [ ] Redeemer Presbyterian Austin
- [ ] Trinity Anglican Mission
- [ ] All Saints' Episcopal
- [ ] Westlake Bible Church

**Pitch template:**

> Subject: Christian counselor referral for [Church Name] members
>
> Hi — I'm Brittany Zientek, a Licensed Professional Counselor in East
> Austin. I work with clients who want to integrate their faith into
> trauma and anxiety therapy (EMDR, IFS).
>
> If [Church Name] keeps a list of trusted counselors for members, I'd
> be honored to be considered. My practice info is at
> https://haven-harbor-counseling.lovable.app and I'm happy to talk by
> phone first if helpful.
>
> Thanks for what you do for Austin.
> — Brittany

**Press / guest posts (1 per quarter is plenty):**
- [ ] Austin Woman magazine — pitch a "mental health in Austin" angle
- [ ] Austinot, Austin Monthly — local-business features
- [ ] Tribeza — wellness section
- [ ] Headway's provider blog — they accept clinician-written posts
- [ ] HARO / Qwoted / Featured.com — sign up free, respond to journalist
      queries on trauma, anxiety, faith & mental health. 1 quote landed
      = 1 high-DA backlink. ~15 min/day.

---

## 5. On-site content cadence (you already have a blog at `/resources`)

Publish 1 post per month minimum. Topics that match underserved search
intent for Austin:

- "EMDR therapists in Austin: what to look for"
- "Cost of trauma therapy in Austin (2026 prices, insurance, sliding scale)"
- "Christian counseling vs. pastoral counseling — what's the difference?"
- "Best neighborhoods in Austin for accessible therapy" (mentions GBP location)
- Year-in-review / Austin mental health resources roundup

Each post should:
1. Internally link to the matching money page (`/austin-trauma-therapy`,
   `/christian-counseling`, etc.)
2. Get its own social share on whatever platform you use
3. Be reposted as a Google Post on GBP

---

## 6. Tracking — know if any of this is working

- **Google Search Console** — already verified. Watch "Performance" for
  impressions on "austin counselor / therapist / counseling" weekly.
- **Google Business Profile Insights** — direction requests, calls,
  website clicks. Monthly.
- **Semrush position tracking** (already connected) — track the 4 head
  terms + the 4 niche terms weekly.

---

## Realistic timeline

| Lever | Time to impact |
|---|---|
| GBP claim + 10 reviews | 30–60 days (Map Pack) |
| Citations (15 directories) | 60–90 days |
| 5 church backlinks | 90–120 days |
| Blog cadence | 6+ months (compounding) |
| Press / guest posts | 6–12 months |

Head-term organic ranking for "austin therapist" (1300/mo, KD 56) is a
6–12 month project. The Map Pack is achievable in 60–90 days once GBP +
reviews are in place — and the Map Pack typically gets more clicks than
position 1 organic for local searches anyway.
