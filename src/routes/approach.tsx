import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — Trauma-Informed Therapy in Austin, TX" },
      {
        name: "description",
        content:
          "Haven & Harbor's approach to therapy blends EMDR, IFS, somatic work, and (optionally) Christian faith — gentle, evidence-based, and paced by you.",
      },
      { property: "og:title", content: "Our Approach — Haven & Harbor Counseling" },
      { property: "og:description", content: "Gentle, evidence-based trauma therapy in Austin." },
      { property: "og:url", content: "/approach" },
    ],
    links: [{ rel: "canonical", href: "/approach" }],
  }),
  component: ApproachPage,
});

const pillars = [
  {
    title: "Trauma-Informed",
    body: "Trauma changes the nervous system, not just the story. We move at the pace your body can tolerate — never pushing past your window of tolerance.",
  },
  {
    title: "Evidence-Based",
    body: "EMDR for memory reprocessing. IFS (parts work) for inner conflict. CBT and somatic tools for daily life. Real techniques, used with care.",
  },
  {
    title: "Relational",
    body: "The relationship between us is the most important tool in the room. We build trust slowly, honestly, and on your terms.",
  },
  {
    title: "Faith-Friendly",
    body: "If your faith matters to you, it gets a seat at the table. If it doesn't, the work is just as full. You set the spiritual temperature.",
  },
];

const modalities = [
  { name: "EMDR", desc: "Eye Movement Desensitization and Reprocessing — for trauma stored in the body and mind." },
  { name: "IFS", desc: "Internal Family Systems — working gently with the protective parts of you." },
  { name: "Somatic", desc: "Body-based practices to settle the nervous system." },
  { name: "CBT", desc: "Cognitive tools for unhelpful thought patterns." },
  { name: "Attachment", desc: "Understanding how early relationships shaped how you connect today." },
  { name: "Faith Integration", desc: "Optional, client-led integration of Christian spirituality." },
];

function ApproachPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Approach"
        title="Gentle. Evidence-based. Paced by you."
        subtitle="Therapy that respects your nervous system, your story, and your beliefs."
      />

      <section className="container-prose py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border/60 bg-card p-8">
              <h2 className="font-serif text-2xl">{p.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-prose">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow">Modalities</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">The tools in the room.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modalities.map((m) => (
              <div key={m.name} className="rounded-xl border border-border/60 bg-card p-6">
                <h3 className="font-serif text-xl text-primary">{m.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
