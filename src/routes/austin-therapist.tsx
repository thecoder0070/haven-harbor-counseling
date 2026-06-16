import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

const URL = "https://haven-harbor-counseling.lovable.app/austin-therapist";
const HEADWAY = "https://care.headway.co/providers/brittany-zientek";

const FAQ = [
  {
    q: "How do I find a good therapist in Austin?",
    a: "Look for a Texas-licensed clinician (LPC, LCSW, or psychologist) whose specialties match what you're working on, and book a free consult so you can feel the fit. Most Austin therapists offer a 15-minute call before you commit.",
  },
  {
    q: "What are your credentials?",
    a: "Brittany Zientek is a Licensed Professional Counselor (LPC) in Texas with 8 years of clinical experience. Trained in EMDR, Internal Family Systems (IFS), somatic work, and Trauma-Focused CBT.",
  },
  {
    q: "What do you treat?",
    a: "Trauma and PTSD (including complex/childhood trauma), anxiety and high-functioning perfectionism, grief and life transitions, and faith and identity work — including Christian counseling for clients who want it.",
  },
  {
    q: "Do you take insurance?",
    a: "Yes. Through Headway, Brittany is in-network with Aetna, Cigna, United Healthcare, Oscar, Oxford, and Anthem. Self-pay is $130–$225, and superbills are available for out-of-network reimbursement.",
  },
  {
    q: "How do I book a session?",
    a: "Start with a free 15-minute consult. We'll talk briefly about what's bringing you in and whether we're a good fit. No pressure, no commitment.",
  },
];

export const Route = createFileRoute("/austin-therapist")({
  head: () => ({
    meta: [
      { title: "Austin Therapist — Trauma, Anxiety & Christian Counseling" },
      {
        name: "description",
        content:
          "Looking for a therapist in Austin, TX? Haven & Harbor offers trauma-informed, evidence-based counseling for adults — in-person in Austin and via telehealth across Texas.",
      },
      { property: "og:title", content: "Austin Therapist — Haven & Harbor Counseling" },
      {
        property: "og:description",
        content:
          "Trauma-informed therapy in Austin with Brittany Zientek, LPC. EMDR, IFS & faith-friendly care.",
      },
      { property: "og:url", content: URL },
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
            "Austin therapist Brittany Zientek, LPC — trauma, anxiety, grief, and faith-integrated therapy.",
          medicalSpecialty: "Psychiatric",
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
          priceRange: "$130–$225",
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
    ],
  }),
  component: AustinTherapistPage,
});

function AustinTherapistPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Austin, Texas"
        title="Looking for a therapist in Austin?"
        subtitle="Haven & Harbor is a small, intentional Austin counseling practice specializing in trauma, anxiety, grief, and life transitions for adults."
      />

      <section className="container-prose py-20">
        <div className="container-narrow space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Finding the right therapist in Austin can feel overwhelming. There are a lot of
            options, a lot of acronyms, and a lot of pressure to figure it out quickly. The good
            news: you don't have to get it perfect. You just have to find someone you feel safe
            enough with to begin.
          </p>
          <p>
            Haven &amp; Harbor is an Austin-based counseling practice serving adults across the
            city — Zilker, Travis Heights, South Congress, Bouldin, Mueller, and beyond — both
            in-person and via telehealth across Texas.
          </p>
          <h2 className="display pt-4 text-3xl">What I help with</h2>
          <ul className="list-disc space-y-2 pl-6 text-foreground/80">
            <li>Trauma and PTSD (including complex/childhood trauma)</li>
            <li>Anxiety, panic, and high-functioning perfectionism</li>
            <li>Grief, loss, and major life transitions</li>
            <li>Faith and identity questions</li>
            <li>Christian counseling, for clients who want faith integrated</li>
          </ul>
          <h2 className="display pt-4 text-3xl">How to get started</h2>
          <p>
            The simplest first step is a free 15-minute consultation. We'll talk briefly about
            what's bringing you in and whether we'd be a good fit. No pressure, no commitment.
          </p>
          <div className="pt-2">
            <a
              href={HEADWAY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift"
            >
              Schedule a free consult
            </a>
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
          <p className="mt-10 text-base text-foreground/80">
            See also:{" "}
            <Link to="/austin-therapy" className="text-primary underline-offset-4 hover:underline">Austin therapy</Link>,{" "}
            <Link to="/austin-counseling" className="text-primary underline-offset-4 hover:underline">Austin counseling</Link>,{" "}
            <Link to="/austin-trauma-therapist" className="text-primary underline-offset-4 hover:underline">trauma therapist</Link>, or{" "}
            <Link to="/austin-christian-therapist" className="text-primary underline-offset-4 hover:underline">Christian therapist</Link>.
          </p>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
