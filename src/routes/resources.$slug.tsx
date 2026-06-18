import { createFileRoute, redirect } from "@tanstack/react-router";
import { LEGACY_SLUG_REDIRECTS } from "@/lib/posts";

export const Route = createFileRoute("/resources/$slug")({
  beforeLoad: ({ params }) => {
    const target = LEGACY_SLUG_REDIRECTS[params.slug] ?? params.slug;
    throw redirect({ to: "/blog/$slug", params: { slug: target }, statusCode: 301 });
  },
  component: () => null,
});
