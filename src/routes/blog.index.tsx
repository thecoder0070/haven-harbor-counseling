import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { posts } from "@/lib/posts";

const SITE = "https://haven-harbor-counseling.lovable.app";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Trauma, Faith & Anxiety Therapy in Austin | Haven & Harbor" },
      {
        name: "description",
        content:
          "Honest, jargon-free articles on trauma therapy, Christian counseling, anxiety care, EMDR, and IFS — from a licensed Austin therapist.",
      },
      { property: "og:title", content: "Blog — Haven & Harbor Counseling" },
      { property: "og:description", content: "Articles on trauma, faith, anxiety, and slow healing." },
      { property: "og:url", content: `${SITE}/blog` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/blog` }],
  }),
  component: BlogIndexPage,
});

const guides = [
  { to: "/cost-of-therapy-austin", title: "How much does therapy cost in Austin?", body: "A clear guide to fees, insurance, superbills, and HSA/FSA." },
  { to: "/what-is-emdr", title: "What is EMDR therapy?", body: "How EMDR actually works and what a session feels like." },
  { to: "/what-is-ifs-therapy", title: "What is IFS therapy?", body: "Internal Family Systems explained without the jargon." },
  { to: "/first-therapy-session", title: "What to expect in your first session", body: "A no-pressure walkthrough of your first 50 minutes." },
] as const;

const tags = ["All", ...Array.from(new Set(posts.map((p) => p.tag)))];

function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Blog"
        title="Reflections on trauma, faith, anxiety, and slow healing."
        subtitle="Plain-language guides to therapy in Austin, written by a licensed therapist."
      />

      <section className="container-prose py-12">
        <h2 className="display text-3xl">Guides</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.to}
              to={g.to}
              className="group flex flex-col rounded-2xl border border-border/60 bg-card p-7 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <h3 className="font-serif text-2xl group-hover:text-primary">{g.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{g.body}</p>
              <span className="mt-5 text-sm font-semibold text-primary">Read guide →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-prose pt-4">
        <Link
          to="/resources/media"
          className="group flex flex-col items-start gap-3 rounded-3xl border border-border/60 bg-gradient-to-br from-secondary/60 to-card p-8 transition hover:-translate-y-1 hover:shadow-lift md:flex-row md:items-center md:justify-between md:p-10"
        >
          <div>
            <p className="eyebrow">Media library</p>
            <h2 className="display mt-2 text-3xl md:text-4xl">Podcasts & creators</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Recommended podcasts and creators on relationships, trauma, and faith — searchable and embedded right here.
            </p>
          </div>
          <span className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            Explore media →
          </span>
        </Link>
      </section>

      <section className="container-prose py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="display text-3xl">Latest articles</h2>
          <span className="text-sm text-muted-foreground">{sorted.length} posts</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-secondary px-3 py-1">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col rounded-2xl border border-border/60 bg-card p-7 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                <span className="rounded-full bg-secondary px-3 py-1 text-foreground/70">{p.tag}</span>
                <span>{p.dateLabel}</span>
                <span className="text-foreground/50">· {p.readingTime}</span>
              </div>
              <h3 className="mt-5 font-serif text-2xl leading-snug text-foreground group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <span className="mt-6 text-sm font-semibold text-primary">Read article →</span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
