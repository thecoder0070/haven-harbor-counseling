import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Testimonials } from "@/components/site/Testimonials";

import { Brain, Heart, Shield, Sparkles } from "lucide-react";

const URL = "https://haven-harbor-counseling.lovable.app/trauma-therapy-austin";
const HEADWAY = "https://care.headway.co/providers/brittany-zientek";

const FAQ = [
  {
    q: "What kind of trauma therapy do you offer in Austin?",
    a: "Brittany is trained in EMDR, IFS (Internal Family Systems), and Trauma-Focused CBT, with CBT, MBCT, and Solution-Focused Brief Therapy as supporting modalities. She tailors the approach to your nervous system and your goals — not to a fixed protocol.",
  },
  {
    q: "Is trauma therapy in Austin covered by insurance?",
    a: "Yes. Through Headway, Brittany is in-network with Aetna, Cigna, United Healthcare, Oscar, Oxford, and Anthem. Self-pay sessions are also available, and superbills can be provided for out-of-network reimbursement.",
  },
  {
    q: "How long does trauma therapy take?",
    a: "Single-incident trauma often improves in 8–12 sessions. Complex or developmental trauma typically takes longer — several months of stabilization before deeper reprocessing, often a year or more of overall work.",
  },
  {
    q: "Do you offer in-person and online trauma therapy?",
    a: "Both. The Austin office is at 6448 E Hwy 290, Ste E108, Austin, TX 78723. Telehealth is available across Texas, and EMDR works well online with small adjustments.",
  },
  {
    q: "How is trauma therapy different from regular talk therapy?",
    a: "Trauma-focused therapy goes beyond talking about what happened. EMDR helps the brain finish processing memories that still feel raw. IFS works with the protective parts of you that learned to keep you safe. Both move at your pace — you stay in control of what you share.",
  },
];

export const Route = createFileRoute("/trauma-therapy-austin")({
  head: () => ({
    meta: [
      { title: "Trauma Therapy in Austin, TX | EMDR, IFS, TF-CBT | Haven & Harbor" },
      {
        name: "description",
        content:
          "Trauma therapy in Austin, TX with a licensed therapist trained in EMDR, IFS, and Trauma-Focused CBT. In-person & telehealth. In-network with major insurance.",
      },
      { property: "og:title", content: "Trauma Therapy in Austin, TX | Haven & Harbor" },
      {
        property: "og:description",
        content:
          "EMDR, IFS, and Trauma-Focused CBT in Austin with Brittany Zientek, LPC. In-person & telehealth across Texas.",
      },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Haven & Harbor Counseling",
          url: URL,
          description:
            "Trauma therapy in Austin, TX. EMDR, IFS, and Trauma-Focused CBT with Brittany Zientek, LPC.",
          medicalSpecialty: ["Psychotherapy", "Trauma Therapy"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "6448 E Hwy 290, Ste E108",
            addressLocality: "Austin",
            addressRegion: "TX",
            postalCode: "78723",
            addressCountry: "US",
          },
          areaServed: [
            { "@type": "City", name: "Austin" },
            { "@type": "State", name: "Texas" },
          ],
          priceRange: "$130-$225",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://haven-harbor-counseling.lovable.app" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://haven-harbor-counseling.lovable.app/services" },
            { "@type": "ListItem", position: 3, name: "Trauma Therapy in Austin", item: URL },
          ],
        }),
      },
    ],
  }),
  component: TraumaTherapyAustinPage,
});

function TraumaTherapyAustinPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Austin, TX · In-Person & Telehealth"
        title="Trauma Therapy in Austin, TX"
        subtitle="Evidence-based, unhurried care for PTSD, complex trauma, anxiety, and grief — with Brittany Zientek, LPC."
      />

      <section className="container-prose py-20">
        <div className="container-narrow space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Looking for trauma therapy in Austin? Haven &amp; Harbor is a small, intentional
            practice focused on helping adults move through trauma and its long shadow — without
            being rushed, retraumatized, or asked to perform.
          </p>
          <p>
            Brittany Zientek, LPC, has eight years of experience treating PTSD, complex trauma,
            anxiety, and relationship concerns using EMDR, IFS, and Trauma-Focused CBT. Faith is
            welcome in the work when you want it; the work stands on its own when you don't.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-prose">
          <p className="eyebrow">What we treat</p>
          <h2 className="display mt-3 text-4xl">Types of trauma we work with</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Shield,
                title: "PTSD",
                body: "Symptoms after a discrete event — accidents, assault, medical trauma, sudden loss, military or first-responder exposure.",
              },
              {
                icon: Heart,
                title: "Complex Trauma (C-PTSD)",
                body: "Ongoing experiences from childhood: emotional neglect, abuse, family dysfunction, attachment wounds.",
              },
              {
                icon: Sparkles,
                title: "Religious & Spiritual Trauma",
                body: "Church hurt, spiritual abuse, high-control environments — held with care for where you are now.",
              },
              {
                icon: Brain,
                title: "Trauma-Related Anxiety & Grief",
                body: "Chronic anxiety, panic, hypervigilance, and complicated grief that traces back to earlier wounds.",
              },
            ].map((c) => (
              <article key={c.title} className="rounded-2xl border border-border/60 bg-card p-7">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-20">
        <p className="eyebrow">How we work</p>
        <h2 className="display mt-3 text-4xl">Evidence-based modalities</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl">EMDR</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A first-line PTSD treatment recommended by the APA, WHO, and VA. Helps the brain
              finish processing memories that still feel raw.{" "}
              <Link to="/what-is-emdr" className="text-primary underline-offset-4 hover:underline">
                Learn more
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl">Internal Family Systems (IFS)</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Works with the protective parts of you that learned to keep you safe — especially
              powerful for complex trauma.{" "}
              <Link to="/what-is-ifs-therapy" className="text-primary underline-offset-4 hover:underline">
                Learn more
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl">Trauma-Focused CBT</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Structured, well-researched therapy that gently restructures the thoughts and
              beliefs trauma left behind. Paired with CBT, MBCT, and SFBT as needed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary/[0.05] py-20">
        <div className="container-prose">
          <p className="eyebrow">What sessions look like</p>
          <h2 className="display mt-3 text-4xl">Unhurried, collaborative, paced to you</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Stabilization", b: "Before any memory work, we build tools for nervous-system regulation and safety. No reprocessing until you're ready." },
              { n: "02", t: "Reprocessing", b: "Using EMDR and/or IFS, we work through the memories and parts that drive current symptoms." },
              { n: "03", t: "Integration", b: "We translate the shifts into your daily life — relationships, work, faith, body. The wins stick because they're integrated." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border/60 bg-card p-7">
                <span className="font-serif text-3xl text-sage-deep">{s.n}</span>
                <h3 className="mt-2 font-serif text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            New to therapy? See{" "}
            <Link to="/first-therapy-session" className="text-primary underline-offset-4 hover:underline">
              what to expect at your first session
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Your therapist</p>
            <h2 className="display mt-3 text-3xl">Brittany Zientek, LPC</h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              Licensed Professional Counselor in Austin with eight years of experience in trauma,
              anxiety, PTSD, and relationship concerns. Warm, collaborative, and committed to
              going at your pace.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:bg-muted"
            >
              More about Brittany
            </Link>
          </div>
          <div>
            <p className="eyebrow">Insurance &amp; investment</p>
            <h2 className="display mt-3 text-3xl">In-network with major plans</h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              Aetna, Cigna, United Healthcare, Oscar, Oxford, and Anthem through Headway. Self-pay
              sessions are $130–$225. Superbills available for out-of-network reimbursement.
            </p>
            <Link
              to="/cost-of-therapy-austin"
              className="mt-6 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              More on the cost of therapy in Austin →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-prose">
          <p className="eyebrow">FAQ</p>
          <h2 className="display mt-3 text-4xl">Common questions</h2>
          <div className="mt-10 space-y-6">
            {FAQ.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border/60 bg-card p-6">
                <h3 className="font-serif text-xl">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a
              href={HEADWAY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift"
            >
              Book a free consult
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBanner />
    </SiteLayout>
  );
}
