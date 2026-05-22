## Import 7 SEO Blog Posts from Google Drive

### 1. Fetch & parse
For each of the 7 `.md` Google Docs in Drive, fetch via the Google Docs connector and parse YAML frontmatter (`meta_title`, `meta_description`, `slug`, `keywords`, `canonical`, `category`, `read_time`, `publish_date`) plus the markdown body. Render markdown body to HTML.

### 2. Add to `src/lib/posts.ts`
Append the 7 posts using each post's `slug` for the URL (e.g. `/resources/finding-a-trauma-therapist-in-austin`). Store metadata + rendered HTML. Keep the 4 existing starter posts. The "first therapy session" post will coexist with the existing `/first-therapy-session` route under its own `/resources/...` slug.

### 3. Resources index (`src/routes/resources.tsx`)
List all posts sorted by `publish_date` desc, showing category badge + read time.

### 4. Post route (`src/routes/resources.$slug.tsx`)
Pull `meta_title` / `meta_description` from frontmatter into the route's `head()` for `<title>`, description, og:*, and canonical.

### 5. Sitemap & llms.txt
- Add the 7 new slugs to `src/routes/sitemap[.]xml.ts`.
- Add the 7 posts under Resources in `public/llms.txt`.

### Out of scope
- No staggered publishing (all 7 go live at once).
- No per-post `og:image` (root fallback).
- No `/insurance` page or `LocalBusiness` JSON-LD.