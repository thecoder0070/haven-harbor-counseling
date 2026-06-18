import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Heart, Brain, Users, Cross, Leaf, MessageCircle } from "lucide-react";

const URL = "https://haven-harbor-counseling.lovable.app/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Counseling Services in Austin, TX | Trauma, Anxiety, Christian | Haven & Harbor" },
      {
        name: "description",
        content:
          "Individual therapy in Austin for trauma, PTSD, anxiety, grief, life transitions, and Christian counseling. EMDR, IFS, and Trauma-Focused CBT. In-person & telehealth.",
      },
      { property: "og:title", content: "Counseling Services in Austin, TX | Haven & Harbor" },
      { property: "og:description", content: "Trauma, anxiety, grief, and Christian counseling in Austin." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://haven-harbor-counseling.lovable.app" },
            { "@type": "ListItem", position: 2, name: "Services", item: URL },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Heart,
    title: "Trauma & PTSD Therapy",
    body: "For single-incident trauma, complex PTSD, and the quiet kind that lives in the body. Modalities include EMDR (first-line treatment for PTSD), Internal Family Systems (IFS), and Trauma-Focused CBT. The work is phase-based and unhurried — stabilization first, then memory reprocessing, then integration. You stay in control of what you share and when.",
    to: "/trauma-therapy-austin" as const,
    linkLabel: "Trauma therapy in Austin →",
  },
  {
    icon: Brain,
    title: "Anxiety & Panic Therapy",
    body: "For chronic worry, panic attacks, perfectionism, and the kind of high-functioning anxiety that nobody else sees. Treatment draws on CBT, MBCT, IFS, and EMDR when trauma is underneath. We pay attention to both the thoughts and the body — because anxiety lives in both.",
    to: "/anxiety-therapy-austin" as const,
    linkLabel: "Anxiety therapy in Austin →",
  },
  {
    icon: Cross,
    title: "Christian Counseling",
    body: "Licensed, evidence-based therapy with a Christian therapist — for clients who want faith integrated into the work, on their terms. Not pastoral counseling. Not Bible study with a couch. Real therapy with room for scripture, prayer, and theology when you want them — and never when you don't.",
    to: "/christian-counseling-austin" as const,
    linkLabel: "Christian counseling in Austin →",
  },
  {
    icon: Leaf,
    title: "Grief & Loss",
    body: "For death, divorce, miscarriage, estrangement, deconstruction, and the losses we name and the ones we don't. Some grief requires therapy and some doesn't. We'll figure out which together. EMDR for traumatic loss; IFS for the complex parts of complicated grief; gentle witnessing for what just needs to be carried with someone.",
  },
  {
    icon: Users,
    title: "Life Transitions",
    body: "For career shifts, marriage, motherhood, identity, midlife — the seasons that ask us to become someone new. Solution-Focused Brief Therapy for time-limited, focused work. Longer-term work when the transition has surfaced deeper material.",
  },
  {
    icon: MessageCircle,
    title: "Free 15-Minute Consult",
    body: "A no-pressure phone or video call to see if we're a good fit before scheduling a first session. The consult is free, and there's no obligation to schedule.",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Counseling services in Austin, TX"
        title="Therapy shaped to your story."
        subtitle="Individual therapy for adults in Austin — available in-person at the office in 78723 and via telehealth across Texas. In-network with Aetna, Cigna, United Healthcare, Oscar, Oxford, and Anthem through Headway."
      />

      <section className="container-prose py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="rounded-2xl border border-border/60 bg-card p-8 transition hover:-translate-y-1 hover:shadow-lift">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-serif text-2xl">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              {s.to && (
                <Link to={s.to} className="mt-5 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline">
                  {s.linkLabel}
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-prose grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Investment</p>
            <h2 className="display mt-4 text-4xl">Fees &amp; Insurance</h2>
            <p className="mt-5 text-foreground/80">
              Individual sessions are 50 minutes.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">
              <li>
                <strong>In-network insurance (via Headway):</strong> Aetna, Cigna, United
                Healthcare, Oscar, Oxford, Anthem. Most clients pay a small copay per session.
              </li>
              <li>
                <strong>Self-pay / out-of-pocket:</strong> $130–$225 per session depending on
                session type. Superbills available for out-of-network reimbursement.
              </li>
              <li>
                <strong>Free 15-min consult:</strong> Always free.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-8">
            <p className="eyebrow">Office &amp; telehealth</p>
            <h3 className="mt-4 font-serif text-2xl">In-person in Austin · Telehealth across Texas</h3>
            <p className="mt-3 text-muted-foreground">
              The Austin office is located at 6448 East Hwy 290, Ste E108, Austin, TX 78723 —
              easy parking, quiet waiting area. Telehealth is available for any client physically
              located in Texas at the time of session.
            </p>
            <Link to="/contact" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
              Reach out
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
