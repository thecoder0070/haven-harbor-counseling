import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

const posts = [
  {
    slug: "what-trauma-therapy-actually-looks-like",
    title: "What Trauma Therapy Actually Looks Like",
    excerpt: "A gentle walkthrough of what to expect in the first few sessions — and what trauma work isn't.",
    tag: "Trauma",
    date: "May 2026",
  },
  {
    slug: "faith-and-the-nervous-system",
    title: "Faith and the Nervous System",
    excerpt: "Why 'just trust God more' often makes anxiety worse — and what a more honest path can look like.",
    tag: "Faith",
    date: "April 2026",
  },
  {
    slug: "finding-a-christian-therapist-austin",
    title: "How to Find a Christian Therapist in Austin",
    excerpt: "What to look for, what questions to ask, and what the words 'Christian counseling' actually mean.",
    tag: "Austin",
    date: "March 2026",
  },
  {
    slug: "high-functioning-anxiety",
    title: "When You're 'Fine' but You're Not Fine",
    excerpt: "A piece on high-functioning anxiety — the kind nobody around you can see.",
    tag: "Anxiety",
    date: "February 2026",
  },
  {
    slug: "church-hurt-and-healing",
    title: "Church Hurt Is Real. Healing Is, Too.",
    excerpt: "How spiritual wounds show up in therapy, and what gentle repair can look like.",
    tag: "Faith",
    date: "January 2026",
  },
  {
    slug: "small-rituals-for-hard-seasons",
    title: "Small Rituals for Hard Seasons",
    excerpt: "Five quiet practices that help when life feels like too much.",
    tag: "Practices",
    date: "December 2025",
  },
];

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources & Journal — Haven & Harbor Counseling" },
      { name: "description", content: "Writings on trauma, faith, anxiety, and slow healing from an Austin, TX trauma therapist." },
      { property: "og:title", content: "Resources — Haven & Harbor Counseling" },
      { property: "og:description", content: "Reflections on trauma, faith, and healing." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Resources"
        title="Reflections on trauma, faith, and slow healing."
        subtitle="Short writings to help you think through what you're carrying."
      />

      <section className="container-prose py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="group flex flex-col rounded-2xl border border-border/60 bg-card p-7 transition hover:-translate-y-1 hover:shadow-lift">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                <span className="rounded-full bg-secondary px-3 py-1 text-foreground/70">{p.tag}</span>
                <span>{p.date}</span>
              </div>
              <h2 className="mt-5 font-serif text-2xl leading-snug text-foreground group-hover:text-primary">
                {p.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <span className="mt-6 text-sm font-semibold text-primary">Read soon →</span>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Full articles coming soon. In the meantime, <Link to="/contact" className="text-primary underline-offset-4 hover:underline">reach out</Link> with questions.
        </p>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
