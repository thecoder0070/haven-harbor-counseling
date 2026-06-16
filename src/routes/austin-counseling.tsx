import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

const URL = "https://haven-harbor-counseling.lovable.app/austin-counseling";
const HEADWAY = "https://care.headway.co/providers/brittany-zientek";

const FAQ = [
  {
    q: "How do I find a good counselor in Austin?",
    a: "Look for a Texas-licensed clinician (LPC, LCSW, or psychologist) whose specialties match what you're working on, and book a free consult so you can feel whether the fit is right. Most Austin counselors offer a 15-minute call before you commit.",
  },
  {
    q: "What does counseling in Austin cost?",
    a: "Self-pay sessions in Austin typically run $130–$250. At Haven & Harbor, self-pay is $130–$225. Through Headway, Brittany is in-network with Aetna, Cigna, United Healthcare, Oscar, Oxford, and Anthem, so insured clients usually pay a copay.",
  },
  {
    q: "Do you offer in-person or online counseling in Austin?",
    a: "Both. The Austin office is at 6448 E Hwy 290, Ste E108. Telehealth is available anywhere in Texas.",
  },
  {
    q: "What does Haven & Harbor specialize in?",
    a: "Trauma (including complex/childhood trauma), anxiety and perfectionism, grief, life transitions, and faith-integrated work for clients who want it. Modalities include EMDR, IFS, somatic skills, and Trauma-Focused CBT.",
  },
  {
    q: "Who is the counselor?",
    a: "Brittany Zientek is a Licensed Professional Counselor (LPC) in Texas with 8 years of clinical experience. She works with adults 18+.",
  },
  {
    q: "What's the difference between a counselor and a therapist?",
    a: "In Texas, the terms are used interchangeably. 'Counselor' is part of the official LPC license title (Licensed Professional Counselor); 'therapist' is the more common everyday word. Both refer to licensed mental-health clinicians.",
  },
];

export const Route = createFileRoute("/austin-counseling")({
  head: () => ({
    meta: [
      { title: "Austin Counseling — Trauma, Anxiety & Faith | Haven & Harbor" },
      {
        name: "description",
        content:
          "Austin counseling for adults — trauma, anxiety, grief, and faith-integrated care. Licensed counselor Brittany Zientek, LPC. In-person & telehealth across Texas.",
      },
      { property: "og:title", content: "Austin Counseling — Haven & Harbor" },
      {
        property: "og:description",
        content:
          "Austin counseling for trauma, anxiety, grief & faith. Licensed counselor, EMDR & IFS. In-person & telehealth.",
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
            "Austin counseling with Brittany Zientek, LPC. Trauma, anxiety, grief, and faith-integrated care.",
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
  component: AustinCounselingPage,
});

function AustinCounselingPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Counseling · Austin, TX"
        title="Austin counseling that moves at your pace."
        subtitle="A small, intentional Austin counseling practice for adults working through trauma, anxiety, grief, and the seasons life keeps handing you."
      />

      <section className="container-prose py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              Finding a counselor in Austin can feel like one more task on a list that's already
              too long. There are a lot of options, a lot of acronyms, and a lot of pressure to
              get it right the first time. You don't have to.
            </p>
            <p>
              Haven &amp; Harbor is a small Austin counseling practice run by Brittany Zientek,
              a Licensed Professional Counselor (LPC) with eight years of clinical experience.
              Sessions are unhurried, evidence-based, and shaped around what your nervous
              system can actually tolerate — not what looks good on paper.
            </p>
            <p>
              Most clients come in for trauma, anxiety, grief, or a season of identity and
              faith change. Some want a counselor who can integrate Christian faith into the
              work; others don't. Both are full counseling.
            </p>
          </div>
          <aside className="md:col-span-5">
            <div className="rounded-2xl border border-border/60 bg-card p-7">
              <p className="eyebrow">At a glance</p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                <li><strong>Counselor:</strong> Brittany Zientek, LPC (Texas)</li>
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
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow">What we help with</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">Common reasons people come to counseling in Austin</h2>
          </div>
          <ul className="grid gap-3 md:grid-cols-2">
            {[
              "Trauma and PTSD (including complex/childhood trauma)",
              "Anxiety, panic, and high-functioning perfectionism",
              "Grief, loss, and major life transitions",
              "Burnout and the cost of always holding it together",
              "Faith deconstruction, church hurt, and spiritual seasons",
              "Christian counseling, for clients who want faith integrated",
              "Relationship patterns and attachment work",
              "Identity questions in midlife, motherhood, or career change",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border/60 bg-card p-5 text-foreground/85"
              >
                — {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="container-narrow space-y-6 text-lg leading-relaxed text-foreground/85">
          <h2 className="display text-3xl md:text-4xl">How counseling sessions work</h2>
          <p>
            Sessions are 50 minutes, weekly to start, in person at the Austin office or via
            secure video across Texas. Most people stay in counseling for a few months to a
            year, depending on what brought them in.
          </p>
          <p>
            The modalities I use most often are EMDR (for trauma reprocessing), Internal Family
            Systems (IFS, for the protective parts of you), somatic skills, and
            Trauma-Focused CBT. We pick what fits — you don't have to know any of this going in.
          </p>
          <p>
            The first step is a free 15-minute consult. We'll talk briefly about what's bringing
            you in and whether I'm the right counselor for the work. No pressure, no commitment.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-prose">
          <p className="eyebrow">FAQ</p>
          <h2 className="display mt-3 text-4xl">Common questions about Austin counseling</h2>
          <div className="mt-10 space-y-6">
            {FAQ.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border/60 bg-card p-6">
                <h3 className="font-serif text-xl">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-base text-foreground/80">
            Looking for an{" "}
            <Link to="/austin-therapist" className="text-primary underline-offset-4 hover:underline">
              Austin therapist
            </Link>{" "}
            specifically, or interested in{" "}
            <Link to="/trauma-counseling-austin" className="text-primary underline-offset-4 hover:underline">
              trauma counseling in Austin
            </Link>{" "}
            or{" "}
            <Link to="/christian-counseling" className="text-primary underline-offset-4 hover:underline">
              Christian counseling
            </Link>
            ? Read more{" "}
            <Link to="/about" className="text-primary underline-offset-4 hover:underline">
              about Brittany
            </Link>{" "}
            or our{" "}
            <Link to="/cost-of-therapy-austin" className="text-primary underline-offset-4 hover:underline">
              cost guide
            </Link>
            .
          </p>
          <div className="mt-8">
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

      <CtaBanner />
    </SiteLayout>
  );
}
