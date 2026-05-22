import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources & Journal — Haven & Harbor Counseling | Austin" },
      { name: "description", content: "Honest, jargon-free writings on trauma, faith, anxiety, and slow healing from an Austin, TX trauma therapist." },
      { property: "og:title", content: "Resources — Haven & Harbor Counseling" },
      { property: "og:description", content: "Reflections on trauma, faith, and slow healing." },
      { property: "og:url", content: "https://haven-harbor-counseling.lovable.app/resources" },
    ],
    links: [{ rel: "canonical", href: "https://haven-harbor-counseling.lovable.app/resources" }],
  }),
  component: ResourcesPage,
});

const guides = [
  { to: "/cost-of-therapy-austin", title: "How much does therapy cost in Austin?", body: "A clear guide to fees, insurance, superbills, and HSA/FSA." },
  { to: "/what-is-emdr", title: "What is EMDR therapy?", body: "How EMDR actually works and what a session feels like." },
  { to: "/what-is-ifs-therapy", title: "What is IFS therapy?", body: "Internal Family Systems explained without the jargon." },
  { to: "/first-therapy-session", title: "What to expect in your first session", body: "A no-pressure walkthrough of your first 50 minutes." },
] as const;

function ResourcesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Resources"
        title="Reflections on trauma, faith, and slow healing."
        subtitle="Short writings and guides to help you think through what you're carrying."
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

      <section className="container-prose py-16">
        <h2 className="display text-3xl">Journal</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/resources/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col rounded-2xl border border-border/60 bg-card p-7 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                <span className="rounded-full bg-secondary px-3 py-1 text-foreground/70">{p.tag}</span>
                <span>{p.dateLabel}</span>
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
