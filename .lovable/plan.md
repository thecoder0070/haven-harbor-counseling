I found the article data is present in `src/lib/posts.ts` (the imported posts have ~8k–10k characters each), but visiting `/resources/what-is-christian-counseling` renders the `/resources` listing page. The likely issue is route matching: the static `/resources` route is taking precedence over the dynamic detail route.

Plan:

1. Replace the current flat dynamic blog route with a nested route file under `src/routes/resources.$slug.tsx` if needed by TanStack’s route convention for this project, ensuring `/resources/:slug` resolves to the article component.
2. Keep the existing article renderer and post data intact, since the body content is already in the data file.
3. Verify in preview that `/resources/what-is-christian-counseling` shows the title plus the full article body beginning with `"Christian counseling" can mean a lot of things...` instead of the Journal listing.
4. Check one more article URL to confirm all blog detail links render full content.