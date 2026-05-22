I’ll change the blog setup so the Journal posts are sourced from the Google Docs you shared, instead of relying only on hardcoded local body text.

Plan:
1. Add Google Doc IDs to the blog post records in `src/lib/posts.ts`, keeping the current slugs, titles, excerpts, tags, dates, and SEO metadata.
2. Add a server-side Google Docs loader that fetches each document through the connected Google Docs integration and converts the document structure into the existing blog block format (`h2:`, `ul:`, paragraphs).
3. Update `/resources/$slug` so the detail page fetches the matching Google Doc content at page load and renders that content, with a safe fallback to the current local body if the doc fetch fails.
4. Keep the Resources listing page fast and unchanged visually; it will still use the local titles/excerpts while detail pages pull full article content from the docs.
5. Verify one of the shared URLs, such as `/resources/what-is-christian-counseling`, displays the Google Doc body text on the article page.