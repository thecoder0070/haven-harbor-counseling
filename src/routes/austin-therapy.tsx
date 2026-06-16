import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

const URL = "https://haven-harbor-counseling.lovable.app/austin-therapy";
const HEADWAY = "https://care.headway.co/providers/brittany-zientek";

const FAQ = [
  {
    q: "How much does therapy cost in Austin?",
    a: "Self-pay therapy in Austin typically runs $130–$250 per session. Haven & Harbor is $130–$225 self-pay. Through Headway, insurance plans accepted include Aetna, Cigna, United Healthcare, Oscar, Oxford, and Anthem — most insured clients pay a copay.",
  },
  {
    q: "Do you offer in-person or online therapy in Austin?",
    a: "Both. The Austin office is at 6448 E Hwy 290, Ste E108. Telehealth is available anywhere in Texas.",
  },
  {
    q: "What kinds of therapy do you offer?",
    a: "EMDR (for trauma reprocessing), Internal Family Systems (IFS), somatic skills, Trauma-Focused CBT, and faith-integrated work for clients who want it. We pick the approach together — you don't have to know any of this going in.",
  },
  {
    q: "Who is the therapist?",
    a: "Brittany Zientek, Licensed Professional Counselor (LPC) in Texas with 8 years of clinical experience. She works with adults 18+.",
  },
  {
    q: "What do you specialize in?",
    a: "Trauma (including complex/childhood trauma), anxiety and perfectionism, grief, life transitions, and faith and identity work. Most clients come for one of those, though many overlap.",
  },
  {
    q: "How do I start therapy?",
    a: "Book a free 15-minute consult. We'll talk briefly about what's bringing you in and whether we're a good fit. No pressure, no commitment.",
  },
];

export const Route = createFileRoute("/austin-therapy")({
  head: () => ({
    meta: [
      { title: "Austin Therapy — Trauma, Anxiety & Faith-Friendly Care" },
      {
        name: "description",
        content:
          "Austin therapy for adults — trauma, anxiety, grief, and faith-integrated care. EMDR, IFS, and unhurried sessions with Brittany Zientek, LPC. In-person & telehealth.",
      },
      { property: "og:title", content: "Austin Therapy — Haven & Harbor Counseling" },
      {
        property: "og:description",
        content:
          "Trauma, anxiety, grief, and faith-friendly therapy in Austin. EMDR & IFS with Brittany Zientek, LPC.",
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
            "Austin therapy with Brittany Zientek, LPC. EMDR, IFS, and faith-friendly care for trauma, anxiety, and grief.",
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
  component: AustinTherapyPage,
});

function AustinTherapyPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Therapy in Austin"
        title="Slow, careful therapy — for real Austin lives."
        subtitle="EMDR, IFS, somatic, and faith-friendly work in a calm South Austin office, or by telehealth across Texas."
      />

      <section className="container-prose py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              Austin asks a lot of you. Long commutes. A fast city that pretends to be slow. The
              quiet pressure to be okay because, on paper, you should be. Therapy makes space
              for the parts of your life that don't fit on paper.
            </p>
            <p>
              At Haven &amp; Harbor, sessions are intentionally unhurried. We move at the pace
              your nervous system can actually tolerate, using modalities like EMDR (for trauma
              reprocessing), IFS (working with the protective parts of you), somatic skills,
              and CBT.
            </p>
            <p>
              For clients who want it, Christian faith is welcome as part of the work. For those
              who don't, the work is just as full.
            </p>
          </div>
          <aside className="md:col-span-5">
            <div className="rounded-2xl border border-border/60 bg-card p-7">
              <p className="eyebrow">At a glance</p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                <li><strong>Therapist:</strong> Brittany Zientek, LPC</li>
                <li><strong>Office:</strong> 6448 E Hwy 290, Ste E108, Austin</li>
                <li><strong>Telehealth:</strong> Anywhere in Texas</li>
                <li><strong>Ages:</strong> Adults 18+</li>
                <li><strong>Cost:</strong> $130–$225 self-pay; insurance via Headway</li>
              </ul>
              <a
                href={HEADWAY}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Book a free consult
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-prose">
          <p className="eyebrow">FAQ</p>
          <h2 className="display mt-3 text-4xl">Common questions about therapy in Austin</h2>
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
            <Link to="/austin-therapist" className="text-primary underline-offset-4 hover:underline">Austin therapist</Link>,{" "}
            <Link to="/austin-counseling" className="text-primary underline-offset-4 hover:underline">Austin counseling</Link>,{" "}
            <Link to="/trauma-counseling-austin" className="text-primary underline-offset-4 hover:underline">trauma counseling in Austin</Link>,{" "}
            <Link to="/christian-counseling" className="text-primary underline-offset-4 hover:underline">Christian counseling</Link>, or our{" "}
            <Link to="/cost-of-therapy-austin" className="text-primary underline-offset-4 hover:underline">cost guide</Link>.
          </p>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
