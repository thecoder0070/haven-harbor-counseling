# Rank for "Austin trauma therapy" and "Austin trauma counseling"

## Landscape

| Keyword | Volume | Difficulty | Status |
|---|---|---|---|
| trauma therapy austin | 140/mo | 28 (easy) | No exact-match page |
| austin trauma therapy | 90/mo | 25 (easy) | No exact-match page |
| trauma counseling austin | 70/mo | 12 | Covered by `/trauma-counseling-austin` (just shipped) |
| austin trauma counseling | 20/mo | 0 | Same page covers it |

Top of SERP for "austin trauma therapy" is atxtraumatherapycenter.com (exact-match domain) and Psychology Today. Beatable with a dedicated, content-rich page + the indexing work you still need to do in GSC.

The existing `/trauma-therapy-austin-guide` already targets nearby long-tail terms and ranks well as a guide — don't repoint it. We need a separate **service page** that owns the head term head-on.

## Plan

### 1. New page: `/austin-trauma-therapy`
A service page (not a guide) targeting the highest-volume phrase. Distinct from both `/austin-trauma-therapist` (about the therapist) and `/trauma-therapy-austin-guide` (long-form educational).

- H1: "Trauma Therapy in Austin, TX"
- Title: "Trauma Therapy in Austin, TX | Haven & Harbor" (<60 chars)
- Meta description leading with "Trauma therapy in Austin" + value prop
- Sections: Intro · Types of trauma we treat · Modalities (EMDR/IFS/TF-CBT) · What sessions look like · Insurance & cost · About Brittany · FAQ · CTA to Headway
- LocalBusiness + FAQPage JSON-LD; canonical and og:url self-referencing
- Internal links: `/trauma-therapy-austin-guide` (deep dive), `/what-is-emdr`, `/what-is-ifs-therapy`, `/about`, `/cost-of-therapy-austin`, and cross-link to `/trauma-counseling-austin`
- Add to `sitemap[.]xml.ts`

### 2. Strengthen `/trauma-counseling-austin` cross-linking
Add a clear in-content link from `/trauma-counseling-austin` → `/austin-trauma-therapy` (and vice versa) so Google sees them as a connected service cluster, not duplicates.

### 3. Tighten titles & meta on adjacent pages
- `/austin-therapy` — broaden title to include "Austin Therapy & Counseling" so it stops competing on "trauma therapy" head term (let the new page own that).
- `/austin-trauma-therapist` — already good; leave alone.
- `/trauma-therapy-austin-guide` — change title to make its "guide" intent clearer (e.g. "Trauma Therapy in Austin: Complete Guide to EMDR, IFS & C-PTSD"). Prevents it from cannibalizing the new service page.

### 4. Homepage internal-link boost
Add a contextual link from the homepage Trauma & PTSD specialty card → `/austin-trauma-therapy`. Homepage has the most internal authority; one solid link there moves the needle.

### 5. Sitemap + indexing reminder
- Add `/austin-trauma-therapy` to `sitemap[.]xml.ts`.
- Remind you to "Request Indexing" on the new URL in Google Search Console (and resubmit the sitemap).

## Out of scope
- Building backlinks (off-site)
- Custom domain switch (flagged previously — still your highest non-code lever)
- Google Business Profile setup (flagged previously)
- Blog content beyond `/resources`

## Technical notes
- Same per-route `head()` pattern, canonical/og:url self-reference.
- Reuse `SiteLayout`, `PageHeader`, `CtaBanner`.
- All booking CTAs go to the Headway URL (existing convention).
- No new dependencies.
