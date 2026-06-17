import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Testimonials } from "@/components/site/Testimonials";

import journal from "@/assets/journal.jpg";

const URL = "https://haven-harbor-counseling.lovable.app/christian-counseling";
const HEADWAY = "https://care.headway.co/providers/brittany-zientek";

const FAQ = [
  {
    q: "What is Christian counseling?",
    a: "Christian counseling is licensed, evidence-based therapy provided by a clinician who can integrate Christian faith into the work when the client wants it. At Haven & Harbor it's not pastoral counseling or a Bible study — it's professional therapy with room for scripture, prayer, and theology when those are helpful to you.",
  },
  {
    q: "Is this pastoral counseling or licensed therapy?",
    a: "Licensed therapy. Brittany Zientek is a Licensed Professional Counselor (LPC) in Texas with 8 years of clinical experience. Sessions are confidential, insurance-billable, and use evidence-based modalities (EMDR, IFS, Trauma-Focused CBT).",
  },
  {
    q: "Will you use scripture and prayer in sessions?",
    a: "Only if you want us to. You set the spiritual temperature of the room every week. Some sessions include prayer or sitting with a scripture; others never mention faith. Both are full therapy.",
  },
  {
    q: "Do you take insurance?",
    a: "Yes. Through Headway, Brittany is in-network with Aetna, Cigna, United Healthcare, Oscar, Oxford, and Anthem. Self-pay sessions are $130–$225, and superbills are available for out-of-network reimbursement.",
  },
  {
    q: "Do you offer in-person or online Christian counseling?",
    a: "Both. The Austin office is at 6448 E Hwy 290, Ste E108. Telehealth is available across Texas.",
  },
  {
    q: "What if I'm deconstructing or unsure about my faith?",
    a: "You're welcome here. Many clients come in the middle of deconstruction, church hurt, or a 'dark night of the soul.' The work is to help you heal — not to defend a particular theology or rush you back to certainty.",
  },
];

export const Route = createFileRoute("/christian-counseling")({
  head: () => ({
    meta: [
      { title: "Christian Counseling in Austin, TX | Haven & Harbor" },
      {
        name: "description",
        content:
          "Christian counseling in Austin, TX. Licensed, faith-integrated therapy for trauma, anxiety, church hurt, and spiritual seasons. In-person & telehealth.",
      },
      { property: "og:title", content: "Christian Counseling in Austin, TX | Haven & Harbor" },
      {
        property: "og:description",
        content:
          "Licensed Christian counseling in Austin with Brittany Zientek, LPC. EMDR, IFS, and faith-integrated therapy. In-person & telehealth.",
      },
      { property: "og:url", content: URL },
      { property: "og:image", content: journal },
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
            "Christian counseling in Austin, TX. Licensed, faith-integrated therapy with Brittany Zientek, LPC.",
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
  component: ChristianPage,
});

function ChristianPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Christian Counseling · Austin, TX"
        title="Faith-integrated therapy, on your terms."
        subtitle="For clients who want their relationship with God to be part of the work — without sermons, scripts, or pressure."
      />

      <section className="container-prose grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src={journal}
            alt="Open journal with olive branch and tea"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-3xl object-cover shadow-soft"
          />
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:col-span-7">
          <p>
            For many of my clients, faith is not separate from the healing process — it's woven
            into how they understand suffering, identity, and hope. Christian counseling at
            Haven &amp; Harbor honors that. We hold scripture, prayer, and theology with the same
            care we hold psychology and the nervous system.
          </p>
          <p>
            This isn't pastoral counseling, and it isn't a Bible study. It's evidence-based
            therapy with a Christian therapist who can speak the language of your faith when
            that's helpful — and who will never weaponize it when it isn't.
          </p>
          <p>
            Many clients come carrying spiritual wounds: church hurt, performance-based faith,
            shame, deconstruction, or the grief of belief that doesn't feel the way it used to.
            All of that is welcome here.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-prose">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow">Common reasons clients come</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">You don't have to choose.</h2>
            <p className="mt-5 text-muted-foreground">
              Between your faith and your healing. Between honesty and hope. Between the church
              you grew up in and the God you're still learning to trust.
            </p>
          </div>
          <ul className="grid gap-3 md:grid-cols-2">
            {[
              "Church hurt and spiritual abuse",
              "Faith deconstruction and reconstruction",
              "Shame-based or performance-based religion",
              "Trauma alongside Christian belief",
              "Anxiety, perfectionism, and 'doing it right'",
              "Marriage and identity in a faith context",
              "Grief, doubt, and dark nights of the soul",
              "Reclaiming a felt sense of God's presence",
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
        <div className="container-narrow rounded-3xl bg-primary/[0.06] p-10 text-center">
          <p className="eyebrow">A note on faith</p>
          <p className="mt-4 font-serif text-2xl leading-snug text-foreground">
            You set the spiritual temperature of the room. Always.
          </p>
          <p className="mt-4 text-muted-foreground">
            Some sessions include prayer or scripture. Some don't mention faith at all. That's
            yours to shape, and it can change week to week. My job is to follow your lead with
            wisdom and respect.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-prose">
          <p className="eyebrow">FAQ</p>
          <h2 className="display mt-3 text-4xl">Common questions about Christian counseling in Austin</h2>
          <div className="mt-10 space-y-6">
            {FAQ.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border/60 bg-card p-6">
                <h3 className="font-serif text-xl">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-base text-foreground/80">
            Looking for a{" "}
            <Link to="/austin-christian-therapist" className="text-primary underline-offset-4 hover:underline">
              Christian therapist in Austin
            </Link>{" "}
            specifically, or interested in{" "}
            <Link to="/trauma-counseling-austin" className="text-primary underline-offset-4 hover:underline">
              trauma counseling in Austin
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

      <Testimonials />
      <CtaBanner />

    </SiteLayout>
  );
}
