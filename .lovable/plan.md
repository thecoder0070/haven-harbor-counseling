## Scope

Build the items from the SEO audit plus scheduling + intake link, and swap the text wordmark for the uploaded logo.

## 1. Brand: use uploaded logo

- Copy `Haven_and_harbor_logo.png` → `src/assets/haven-harbor-logo.png`
- `SiteHeader.tsx`: replace the "Haven & Harbor Counseling" text wordmark with the logo image (height ~44px, alt: "Haven & Harbor Counseling — Austin, Texas")
- `SiteFooter.tsx`: smaller logo at top of footer in place of text wordmark
- `public/favicon.ico` / `apple-touch-icon`: regenerate from logo

## 2. Scheduling + Intake (external links, no backend)

Add two reusable config constants in `src/lib/booking.ts`:

```ts
export const SCHEDULE_URL = "https://YOUR-PORTAL-LINK"; // placeholder
export const INTAKE_URL  = "https://YOUR-INTAKE-LINK"; // placeholder
```

- New route `src/routes/schedule.tsx` — Schedule page explaining what to expect, "Book a free 15-min consult" button → `SCHEDULE_URL` (opens new tab, rel="noopener"), and a secondary "Start the intake form" button → `INTAKE_URL`. Includes note that the portal is HIPAA-secure.
- Update `SiteHeader` primary CTA from "Contact" emphasis to **"Book Consult"** → `/schedule`
- Update `CtaBanner` and homepage hero CTA to point to `/schedule`
- Contact page: add the scheduling + intake buttons alongside the existing contact info

Leaving the two URLs as placeholders her client portal links drop in later — one file, two strings.

## 3. New SEO pages

Each is a new TanStack route with route-specific `head()` (title, description, og:title/description/url, canonical), an H1, supporting H2s, and internal links to related pages.

| Route | Target query |
|---|---|
| `src/routes/cost-of-therapy-austin.tsx` | "how much does therapy cost", "therapy cost austin" |
| `src/routes/what-is-emdr.tsx` | "what is emdr", "emdr therapy austin" |
| `src/routes/what-is-ifs-therapy.tsx` | "what is ifs therapy", "internal family systems austin" |
| `src/routes/first-therapy-session.tsx` | "what to expect first therapy session", "starting therapy" |

Blog posts (4) under `src/routes/resources.$slug.tsx` dynamic route + a small in-file content map (no CMS needed):

- `signs-of-complex-trauma`
- `christian-counseling-vs-secular-therapy`
- `trauma-and-sleep`
- `how-to-know-if-you-need-therapy`

The `resources` index page gets cards linking to each post. Dynamic route uses `head()` with loader-driven title/description and Article JSON-LD.

## 4. JSON-LD additions

- `cost-of-therapy-austin`: FAQPage schema (5–7 Q&A about cost, sliding scale, superbills)
- `what-is-emdr` + `what-is-ifs-therapy`: MedicalTherapy schema
- `first-therapy-session`: FAQPage schema
- Blog posts: Article schema

## 5. Plumbing

- Add new routes to header nav under a "Learn" dropdown (Resources, Cost, EMDR, IFS, First Session, FAQ) to avoid header overflow
- Add all 11 new URLs to `src/routes/sitemap[.]xml.ts`
- Fix the small hydration whitespace bug in `SiteFooter` email line at the same time

## Out of scope

- No database, no form submission backend (intake is an external HIPAA link per your choice)
- No image generation for the new pages (keeps build fast; can add hero images later)

## What I'll need from you after build

The two real URLs for `SCHEDULE_URL` and `INTAKE_URL` — paste them and I'll swap the placeholders.
