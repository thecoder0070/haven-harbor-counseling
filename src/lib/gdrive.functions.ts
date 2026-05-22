import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const DRIVE_GATEWAY = "https://connector-gateway.lovable.dev/google_drive/drive/v3";
const DOCS_GATEWAY = "https://connector-gateway.lovable.dev/google_docs/v1";

function requireKeys() {
  const lovable = process.env.LOVABLE_API_KEY;
  if (!lovable) throw new Error("LOVABLE_API_KEY is not configured");
  const drive = process.env.GOOGLE_DRIVE_API_KEY;
  if (!drive) throw new Error("GOOGLE_DRIVE_API_KEY is not configured");
  const docs = process.env.GOOGLE_DOCS_API_KEY;
  if (!docs) throw new Error("GOOGLE_DOCS_API_KEY is not configured");
  return { lovable, drive, docs };
}

export const listDriveFiles = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      query: z.string().max(500).optional(),
      pageSize: z.number().min(1).max(100).optional(),
    })
  )
  .handler(async ({ data }) => {
    const { lovable, drive } = requireKeys();
    const params = new URLSearchParams({
      pageSize: String(data.pageSize ?? 25),
      fields: "files(id,name,mimeType,webViewLink,modifiedTime,iconLink)",
      orderBy: "modifiedTime desc",
    });
    if (data.query) params.set("q", data.query);

    const res = await fetch(`${DRIVE_GATEWAY}/files?${params}`, {
      headers: {
        Authorization: `Bearer ${lovable}`,
        "X-Connection-Api-Key": drive,
      },
    });
    const json = await res.json();
    if (!res.ok) throw new Error(`Drive list failed [${res.status}]: ${JSON.stringify(json)}`);
    return { files: json.files ?? [] };
  });

// Convert a Google Doc structural body to a simple HTML string.
function docToHtml(doc: any): string {
  const inlineObjects = doc.inlineObjects ?? {};
  const blocks: string[] = [];

  const renderRuns = (elements: any[]): string => {
    return elements
      .map((el: any) => {
        if (el.textRun) {
          let text = (el.textRun.content ?? "").replace(/\n$/, "");
          if (!text) return "";
          const esc = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
          const s = el.textRun.textStyle ?? {};
          let html = esc;
          if (s.link?.url) html = `<a href="${s.link.url}">${html}</a>`;
          if (s.bold) html = `<strong>${html}</strong>`;
          if (s.italic) html = `<em>${html}</em>`;
          if (s.underline) html = `<u>${html}</u>`;
          if (s.strikethrough) html = `<s>${html}</s>`;
          return html;
        }
        if (el.inlineObjectElement) {
          const obj = inlineObjects[el.inlineObjectElement.inlineObjectId];
          const uri =
            obj?.inlineObjectProperties?.embeddedObject?.imageProperties?.contentUri;
          if (uri) return `<img src="${uri}" alt="" />`;
        }
        return "";
      })
      .join("");
  };

  for (const item of doc.body?.content ?? []) {
    if (!item.paragraph) continue;
    const style = item.paragraph.paragraphStyle?.namedStyleType ?? "NORMAL_TEXT";
    const inner = renderRuns(item.paragraph.elements ?? []);
    if (!inner.trim()) {
      blocks.push("");
      continue;
    }
    const match = /^HEADING_(\d)$/.exec(style);
    if (match) {
      const level = Math.min(6, Number(match[1]));
      blocks.push(`<h${level}>${inner}</h${level}>`);
    } else if (style === "TITLE") {
      blocks.push(`<h1>${inner}</h1>`);
    } else if (style === "SUBTITLE") {
      blocks.push(`<h2>${inner}</h2>`);
    } else {
      blocks.push(`<p>${inner}</p>`);
    }
  }
  return blocks.filter(Boolean).join("\n");
}

export const getDocContent = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      documentId: z.string().min(5).max(200).regex(/^[a-zA-Z0-9_-]+$/),
    })
  )
  .handler(async ({ data }) => {
    const { lovable, docs } = requireKeys();
    const res = await fetch(`${DOCS_GATEWAY}/documents/${data.documentId}`, {
      headers: {
        Authorization: `Bearer ${lovable}`,
        "X-Connection-Api-Key": docs,
      },
    });
    const json = await res.json();
    if (!res.ok) throw new Error(`Docs fetch failed [${res.status}]: ${JSON.stringify(json)}`);
    return {
      title: json.title as string,
      documentId: json.documentId as string,
      html: docToHtml(json),
    };
  });
