## Goal
Make every "Book a Consult / Schedule" CTA across the site open `https://care.headway.co/providers/brittany-zientek` in a new tab.

## Approach
Centralize the URL in `src/lib/booking.ts`, then replace internal `<Link to="/schedule">` and `<a href="/schedule">` booking CTAs with external anchors that open Headway in a new tab. Leave the `/schedule` route in place but repoint its primary scheduler button to Headway as well (in case anyone reaches it via old links). Intake button on `/schedule` stays as-is (still placeholder).

## Changes

1. **`src/lib/booking.ts`** — set `SCHEDULE_URL = "https://care.headway.co/providers/brittany-zientek"` and `SCHEDULE_IS_PLACEHOLDER = false`.

2. **Header / Footer / CTA banner** (always go external, new tab):
   - `src/components/site/SiteHeader.tsx` (2 CTAs — desktop + mobile)
   - `src/components/site/SiteFooter.tsx`
   - `src/components/site/CtaBanner.tsx`

3. **Page-level booking buttons / links** — swap `<Link to="/schedule">` or `<a href="/schedule">` for `<a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">`:
   - `src/routes/index.tsx`
   - `src/routes/contact.tsx` (both "Book online" and the second `/schedule` anchor)
   - `src/routes/resources.$slug.tsx`
   - `src/routes/what-is-ifs-therapy.tsx`
   - `src/routes/what-is-emdr.tsx`
   - `src/routes/cost-of-therapy-austin.tsx`
   - `src/routes/trauma-therapy-austin-guide.tsx`
   - `src/routes/first-therapy-session.tsx`
   - `src/routes/austin-trauma-therapist.tsx`
   - `src/routes/austin-therapist.tsx`
   - `src/routes/austin-therapy.tsx`
   - `src/routes/austin-christian-therapist.tsx` (if it has a `/schedule` link)

4. **`src/routes/schedule.tsx`** — the "Open scheduler" button already reads `SCHEDULE_URL`, so updating the constant in step 1 fixes it automatically. No structural changes; keep the page reachable.

## Out of scope
- Intake URL (still placeholder)
- Removing the `/schedule` page entirely
- Copy edits beyond URL changes
