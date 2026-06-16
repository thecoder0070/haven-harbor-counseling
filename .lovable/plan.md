# Rank for the four target phrases

## Status check

| Keyword | Volume | Difficulty | Current coverage |
|---|---|---|---|
| trauma therapy austin | 140/mo | 28 | ✅ `/austin-trauma-therapy` (shipped last turn) |
| austin trauma therapy | 90/mo | 25 | ✅ same page |
| trauma counseling austin | 70/mo | 12 | ✅ `/trauma-counseling-austin` (shipped earlier) |
| austin trauma counseling | 20/mo | 0 | ✅ same page |
| christian counseling austin | 210/mo | 28 | ⚠️ `/christian-counseling` exists but thin, no schema |
| austin christian therapist | 70/mo | 26 | ⚠️ `/austin-christian-therapist` exists but short, no schema |
| austin christian counseling | 30/mo | 0 | ⚠️ same as above |
| austin christian therapy | <10/mo | 0 | ⚠️ same as above |

**Trauma side is done.** This plan upgrades the Christian-counseling side to match.

## Plan

### 1. Upgrade `/christian-counseling` (primary money page — 210/mo head term)
- Retitle: "Christian Counseling in Austin, TX | Haven & Harbor" (<60 chars, head term first).
- Tighten meta description to include "Christian counseling in Austin" exactly.
- Switch canonical + og:url to absolute URLs.
- Add **MedicalBusiness JSON-LD** (street address, price range, area served — same shape used on the trauma pages).
- Add **FAQPage JSON-LD** + a visible FAQ section with 5–6 Qs: *Is this Christian counseling or pastoral counseling? Will you use scripture and prayer? Are you a Christian therapist? Do you take insurance? In-person or telehealth? What if I'm deconstructing?*
- Add internal links to `/austin-christian-therapist`, `/trauma-counseling-austin`, `/about`, `/cost-of-therapy-austin`.

### 2. Upgrade `/austin-christian-therapist` (secondary — 70/mo)
- Retitle: "Christian Therapist in Austin, TX | Haven & Harbor".
- Switch canonical + og:url to absolute URLs.
- Add MedicalBusiness + FAQPage JSON-LD (3–4 therapist-specific Qs).
- Cross-link to `/christian-counseling` so Google treats them as a cluster, not duplicates.

### 3. Homepage internal-link boost
The Specialties section already has a "Faith & Identity" card. Add a contextual "Christian counseling in Austin →" link beside the existing "Trauma therapy in Austin →" link below the cards, pointing to `/christian-counseling`. Homepage authority is the strongest internal lever.

### 4. Sitemap
Both pages are already in `sitemap[.]xml.ts`. No change.

## Out of scope
- Building backlinks (off-site)
- Custom domain (your highest non-code lever — flagged before)
- Google Business Profile (required for the local map pack — flagged before)
- New blog posts

## Technical notes
- Same per-route `head()` pattern with absolute canonical/og:url.
- Reuse `MedicalBusiness` + `FAQPage` JSON-LD shapes from the trauma pages.
- Additive content edits — no layout/component changes, no new deps.
- Keep titles distinct (`/christian-counseling` owns "counseling", `/austin-christian-therapist` owns "therapist") to avoid cannibalization.
