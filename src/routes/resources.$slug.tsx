import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { findPost, posts, type BlogPost } from "@/lib/posts";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const post = findPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ params, loaderData }) => {
    const post = loaderData as BlogPost | undefined;
    const url = `https://haven-harbor-counseling.lovable.app/resources/${params.slug}`;
    const title = post ? `${post.title} — Haven & Harbor Counseling` : "Article — Haven & Harbor Counseling";
    const description = post?.excerpt ?? "Reflections on trauma, faith, and slow healing from an Austin therapist.";
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
      scripts: post
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: post.title,
                description: post.excerpt,
                datePublished: post.date,
                author: { "@type": "Organization", name: "Haven & Harbor Counseling" },
                publisher: { "@type": "Organization", name: "Haven & Harbor Counseling" },
                mainEntityOfPage: url,
              }),
            },
          ]
        : [],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <SiteLayout>
      <section className="container-prose py-32 text-center">
        <h1 className="display text-4xl">Article not found</h1>
        <p className="mt-4 text-muted-foreground">
          <Link to="/resources" className="text-primary underline-offset-4 hover:underline">Back to resources</Link>
        </p>
      </section>
    </SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout>
      <section className="container-prose py-32 text-center">
        <h1 className="display text-4xl">Something went wrong</h1>
        <p className="mt-4 text-muted-foreground">
          <Link to="/resources" className="text-primary underline-offset-4 hover:underline">Back to resources</Link>
        </p>
      </section>
    </SiteLayout>
  ),
});

function PostPage() {
  const post = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <SiteLayout>
      <article className="container-narrow py-20">
        <Link to="/resources" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
          ← All resources
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
          {post.body.map((block, i) => renderBlock(block, i))}
        </div>

        <div className="mt-16 rounded-3xl border border-border/60 bg-secondary/40 p-8 text-center">
          <p className="font-serif text-2xl">Want to talk it through?</p>
          <p className="mt-3 text-sm text-muted-foreground">A free 15-minute consult is the simplest first step.</p>
          <Link
            to="/schedule"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition hover:bg-primary/90"
          >
            Book a Free Consult
          </Link>
        </div>
      </article>

      <section className="container-prose pb-8">
        <h2 className="display text-3xl">Keep reading</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              to="/resources/$slug"
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
  return <p key={key}>{block}</p>;
}
