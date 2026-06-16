import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

const URL = "https://haven-harbor-counseling.lovable.app/austin-christian-therapist";
const HEADWAY = "https://care.headway.co/providers/brittany-zientek";

const FAQ = [
  {
    q: "Are you a licensed Christian therapist in Austin?",
    a: "Yes. Brittany Zientek is a Licensed Professional Counselor (LPC) in Texas with 8 years of clinical experience. She integrates Christian faith into the work for clients who want it — never required, never assumed.",
  },
  {
    q: "What kind of clients do you work with?",
    a: "Adults navigating trauma, anxiety, church hurt, deconstruction, grief, and life transitions — both inside and outside a Christian framework. You don't need to pass a faith test to work with Brittany.",
  },
  {
    q: "Do you take insurance?",
    a: "Yes — Aetna, Cigna, United Healthcare, Oscar, Oxford, and Anthem through Headway. Self-pay sessions are $130–$225.",
  },
  {
    q: "How is this different from pastoral counseling?",
    a: "Pastoral counseling is offered by clergy and centers on spiritual guidance. This is licensed psychotherapy — clinical training, evidence-based modalities (EMDR, IFS, Trauma-Focused CBT), confidentiality, and insurance-billable. Faith is welcome, not the curriculum.",
  },
];

export const Route = createFileRoute("/austin-christian-therapist")({
  head: () => ({
    meta: [
      { title: "Christian Therapist in Austin, TX | Haven & Harbor" },
      {
        name: "description",
        content:
          "Licensed Christian therapist in Austin, TX. Faith-integrated counseling for trauma, anxiety, church hurt, and deconstruction — with Brittany Zientek, LPC.",
      },
      { property: "og:title", content: "Christian Therapist in Austin, TX | Haven & Harbor" },
      { property: "og:description", content: "Licensed, faith-integrated therapy in Austin with Brittany Zientek, LPC." },
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
            "Christian therapist in Austin, TX. Licensed, faith-integrated therapy with Brittany Zientek, LPC.",
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
  component: AustinChristianPage,
});

function AustinChristianPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Christian Therapist · Austin, TX"
        title="A Christian therapist who speaks your language — and honors yours."
        subtitle="Faith-integrated therapy in Austin for trauma, anxiety, church hurt, and the seasons that test what you believe."
      />

      <section className="container-prose py-20">
        <div className="container-narrow space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Finding a Christian therapist in Austin who is both clinically excellent and
            spiritually grounded can be hard. Some practitioners check the "Christian" box but
            offer little integration. Others lead with theology and underweight the clinical work.
            Haven &amp; Harbor sits in the middle — evidence-based therapy with a therapist who
            can hold scripture and the nervous system in the same hand.
          </p>
          <h2 className="display pt-4 text-3xl">What faith-integrated therapy looks like</h2>
          <p>
            You set the spiritual temperature. In some sessions we pray. In some we sit with a
            scripture that's stuck in your chest. In others we never mention faith because what
            you need that hour is grief, or skills, or just to be heard. All of it is sacred work.
          </p>
          <h2 className="display pt-4 text-3xl">Common reasons Christian clients come</h2>
          <ul className="list-disc space-y-2 pl-6 text-foreground/80">
            <li>Trauma processed within a Christian framework</li>
            <li>Church hurt, spiritual abuse, and pastoral betrayal</li>
            <li>Faith deconstruction without losing yourself</li>
            <li>Anxiety and perfectionism dressed up as obedience</li>
            <li>Marriage, identity, and calling in a faith context</li>
            <li>Grief and the dark night of the soul</li>
          </ul>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift"
            >
              Reach out to schedule
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
