import { Link } from "@tanstack/react-router";

/**
 * Render the long-form body of a pillar page from the block array in src/lib/pillars.ts.
 * Block grammar matches src/lib/posts.ts:
 *   "h2: ..."  -> <h2>
 *   "ul: a | b" -> <ul><li>
 *   anything else -> <p>
 *
 * Links to /blog/{slug} are injected automatically when the prose mentions them.
 */
export function PillarLongForm({ body }: { body: string[] }) {
  // Skip a leading H2 (it would duplicate the page hero title) and any subtitle line under it.
  const blocks = body.slice(body[0]?.startsWith("h2:") ? 1 : 0);

  return (
    <section className="container-prose py-16">
      <div className="prose-narrow container-narrow">
        {blocks.map((b, i) => renderBlock(b, i))}
        <div className="not-prose mt-12 rounded-3xl border border-border/60 bg-secondary/40 p-8 text-center">
          <p className="font-serif text-2xl">Ready to take the next step?</p>
          <p className="mt-3 text-sm text-muted-foreground">
            A free 15-minute consult is the simplest way to see if we're a fit.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition hover:bg-primary/90"
          >
            Book a Free Consult
          </Link>
        </div>
      </div>
    </section>
  );
}

function renderBlock(block: string, key: number) {
  if (block.startsWith("h2: ")) {
    return <h2 key={key}>{block.slice(4)}</h2>;
  }
  if (block.startsWith("h3: ")) {
    return <h3 key={key}>{block.slice(4)}</h3>;
  }
  if (block.startsWith("ul: ")) {
    const items = block.slice(4).split(" | ");
    return (
      <ul key={key}>
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    );
  }
  return <p key={key}>{block}</p>;
}
