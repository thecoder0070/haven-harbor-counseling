# Re-import blog post bodies from Google Drive

The 7 posts have entries in `src/lib/posts.ts`, but the user is reporting empty/missing content. The likely cause is silent truncation or block-encoding errors from the earlier import pass (e.g. paragraphs collapsed into `"h2: "` placeholders, list items missed, or trailing sections cut).

## What I'll do

1. **Re-fetch all 7 Google Docs** via the `google_docs/v1/documents/{id}` API:
   - `01-finding-trauma-therapist-austin.md`
   - `02-what-is-christian-counseling.md`
   - `03-emdr-cpt-trauma-therapies.md`
   - `04-religious-trauma.md`
   - `05-complex-ptsd-vs-ptsd.md`
   - `06-first-therapy-session.md`
   - `07-high-functioning-anxiety.md`

2. **Parse each doc fully**, preserving every paragraph, heading, and list item:
   - `HEADING_2`/`HEADING_3` → `"h2: ..."` block
   - Bulleted/numbered lists → `"ul: a | b | c"` block (one per consecutive run)
   - All other paragraphs → plain `"..."` block
   - YAML frontmatter at top → drop from body, use `title`/`meta_description`/`category` if present to update metadata fields

3. **Rebuild the 7 post entries in `src/lib/posts.ts`**, replacing each post's `body: [...]` with the freshly-parsed blocks. Keep current `slug`, `date`, `dateLabel`, `readingTime`, `tag` unchanged (those were already curated/staggered). Update `title` and `excerpt` only if the Doc's frontmatter has cleaner versions.

4. **Verify** by counting body blocks per post before/after and spot-checking the last block of each (to confirm nothing was truncated at the end).

## Out of scope
- The 4 original seed posts (`signs-of-complex-trauma`, `christian-counseling-vs-secular-therapy`, `trauma-and-sleep`, `how-to-know-if-you-need-therapy`) — leave as-is.
- Styling, layout, or any change to `resources.tsx` / `resources.$slug.tsx`.

## Note
The published site (`haven-harbor-counseling.lovable.app`) currently doesn't include the latest changes; a republish will be needed after the import to see updated content on the live URL. The preview URL reflects changes immediately.
