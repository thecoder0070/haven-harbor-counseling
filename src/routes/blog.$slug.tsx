import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { MediaEmbed } from "@/components/site/MediaEmbed";
import { findPost, posts, type BlogPost } from "@/lib/posts";
import { media } from "@/lib/media";

const SITE = "https://haven-harbor-counseling.lovable.app";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): BlogPost => {
    const post = findPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ params, loaderData }) => {
    const post = loaderData as BlogPost | undefined;
    const url = `${SITE}/blog/${params.slug}`;
    const title = post ? `${post.title} — Haven & Harbor Counseling` : "Article — Haven & Harbor Counseling";
    const description = post?.excerpt ?? "Reflections on trauma, faith, and slow healing from an Austin therapist.";
    const scripts = post
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              dateModified: post.date,
              articleSection: post.tag,
              author: { "@type": "Organization", name: "Haven & Harbor Counseling", url: SITE },
              publisher: { "@type": "Organization", name: "Haven & Harbor Counseling", url: SITE },
              mainEntityOfPage: { "@type": "WebPage", "@id": url },
            }),
          },
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE },
                { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
                { "@type": "ListItem", position: 3, name: post.title, item: url },
              ],
            }),
          },
        ]
      : [];
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts,
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <SiteLayout>
      <section className="container-prose py-32 text-center">
        <h1 className="display text-4xl">Article not found</h1>
        <p className="mt-4 text-muted-foreground">
          <Link to="/blog" className="text-primary underline-offset-4 hover:underline">Back to the blog</Link>
        </p>
      </section>
    </SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout>
      <section className="container-prose py-32 text-center">
        <h1 className="display text-4xl">Something went wrong</h1>
        <p className="mt-4 text-muted-foreground">
          <Link to="/blog" className="text-primary underline-offset-4 hover:underline">Back to the blog</Link>
        </p>
      </section>
    </SiteLayout>
  ),
});

function PostPage() {
  const post = Route.useLoaderData();
  const related = posts
    .filter((p) => p.slug !== post.slug && p.tag === post.tag)
    .slice(0, 3);
  const fallback = related.length === 3
    ? related
    : [...related, ...posts.filter((p) => p.slug !== post.slug && !related.includes(p))].slice(0, 3);

  return (
    <SiteLayout>
      <article className="container-narrow py-20">
        <Link to="/blog" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
          ← All articles
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          <span className="rounded-full bg-secondary px-3 py-1 text-foreground/70">{post.tag}</span>
          <span>{post.dateLabel}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="display mt-5 text-4xl leading-tight md:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

        <div className="prose-narrow mt-12">
          {post.body.map((block: string, i: number) => renderBlock(block, i))}
        </div>

        <div className="mt-16 rounded-3xl border border-border/60 bg-secondary/40 p-8 text-center">
          <p className="font-serif text-2xl">Want to talk it through?</p>
          <p className="mt-3 text-sm text-muted-foreground">A free 15-minute consult is the simplest first step.</p>
          <a
            href="https://care.headway.co/providers/brittany-zientek"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition hover:bg-primary/90"
          >
            Book a Free Consult
          </a>
        </div>
      </article>

      <section className="container-prose pb-8">
        <h2 className="display text-3xl">Keep reading</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {fallback.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{p.tag}</span>
              <h3 className="mt-3 font-serif text-xl group-hover:text-primary">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <span className="mt-4 text-sm font-semibold text-primary">Read article →</span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}

function renderBlock(block: string, key: number) {
  if (block.startsWith("h2: ")) {
    return <h2 key={key}>{block.slice(4)}</h2>;
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
  if (block.startsWith("embed: ")) {
    const id = block.slice(7).trim();
    const item = media.find((m) => m.id === id);
    if (!item) return null;
    return <MediaEmbed key={key} item={item} bare />;
  }
  return <p key={key}>{block}</p>;
}
