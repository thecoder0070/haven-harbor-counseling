## Goal

Connect your Google Drive (your account) so we can:
1. **Link** to specific Drive files from site pages (e.g., intake PDF, resource handouts)
2. **Import** Drive doc content into pages (e.g., turn a Google Doc into a blog post / resource page)

## Steps

1. **Connect Google Drive** via the connector picker (`standard_connectors--connect` with `google_drive`). You authorize once with your Google account.
   - Also connect **Google Docs** so we can read Doc content as structured JSON for imports.

2. **Add a small server helper** `src/lib/gdrive.functions.ts`:
   - `listDriveFiles({ query })` — search your Drive by name/type, returns `{id, name, mimeType, webViewLink}`.
   - `getDocContent({ documentId })` — fetches a Google Doc and converts it to clean HTML/markdown for rendering.
   - Both call the Lovable connector gateway server-side (keys stay on server).

3. **Linking flow** (no UI build needed beyond what exists):
   - For any page where you want to attach a Drive file, paste the Drive share URL and I'll wire it into the page as a button/link (e.g., "Download intake form"). Make sure the file's Drive sharing is set to "Anyone with the link".

4. **Import flow** for a Doc → page:
   - You give me the Doc URL.
   - I run `getDocContent` once, save the rendered content into the existing `src/lib/posts.ts` (or a new resource route), and commit it as static content. This keeps the published site fast and avoids per-request Drive calls.
   - To refresh later, just ask me to re-import.

## What I won't build (unless you ask)
- A live admin UI that browses your Drive in the browser
- Visitor-facing uploads to your Drive
- Auto-sync (changes in Drive auto-updating the site) — imports are on-demand

## After you approve
First action will be to prompt the Google Drive + Google Docs connection. Then tell me which file(s) to link or which Doc to import first.
