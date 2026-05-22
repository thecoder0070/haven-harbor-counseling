import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Heart, Brain, Users, Cross, Leaf, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Trauma Therapy, Anxiety & Christian Counseling in Austin" },
      {
        name: "description",
        content:
          "Individual therapy in Austin, TX for trauma, PTSD, anxiety, grief, life transitions, and faith-integrated Christian counseling. In-person and telehealth.",
      },
      { property: "og:title", content: "Services — Haven & Harbor Counseling" },
      { property: "og:description", content: "Trauma, anxiety, grief, and Christian counseling in Austin." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Heart,
    title: "Trauma & PTSD Therapy",
    body: "Single-incident trauma, complex/childhood trauma, and the quiet kind that lives in the body. Modalities include EMDR, somatic work, and Internal Family Systems.",
  },
  {
    icon: Brain,
    title: "Anxiety & Panic",
    body: "Chronic worry, panic attacks, perfectionism, and the kind of high-functioning anxiety that nobody else sees.",
  },
  {
    icon: Leaf,
    title: "Grief & Loss",
    body: "Death, divorce, miscarriage, estrangement, deconstruction — the losses we name and the ones we don't.",
  },
  {
    icon: Users,
    title: "Life Transitions",
    body: "Career shifts, marriage, motherhood, identity, midlife — the seasons that ask us to become someone new.",
  },
  {
    icon: Cross,
    title: "Christian Counseling",
    body: "For clients who want faith integrated into their work — gently, honestly, and on your terms. Optional, never assumed.",
  },
  {
    icon: MessageCircle,
    title: "Free 15-min Consult",
    body: "A no-pressure phone or video call to see if we're a good fit before scheduling a first session.",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Services"
        title="Therapy shaped to your story."
        subtitle="Individual therapy for adults in Austin, Texas — available in-person and via telehealth across the state."
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
              Individual sessions are 50 minutes. Haven &amp; Harbor is an out-of-network
              provider; superbills are provided each month for clients who would like to submit
              for partial reimbursement through their insurance.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              <li>• 50-min individual session — $165</li>
              <li>• 80-min extended/EMDR session — $245</li>
              <li>• 15-min consult — Free</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-8">
            <p className="eyebrow">Logistics</p>
            <h3 className="mt-4 font-serif text-2xl">Office &amp; telehealth</h3>
            <p className="mt-3 text-muted-foreground">
              The Austin office is located in South Austin (78704), with easy parking and a
              quiet, calm waiting area. Telehealth is available for any client physically
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
