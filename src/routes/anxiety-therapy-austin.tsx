import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Testimonials } from "@/components/site/Testimonials";
import { Brain, Heart, Activity, Sparkles } from "lucide-react";

const URL = "https://haven-harbor-counseling.lovable.app/anxiety-therapy-austin";
const HEADWAY = "https://care.headway.co/providers/brittany-zientek";

const FAQ = [
  {
    q: "What kind of anxiety therapy do you offer in Austin?",
    a: "CBT, MBCT (Mindfulness-Based Cognitive Therapy), IFS, and EMDR when trauma is underneath. We pay attention to both the thoughts and the body — because anxiety lives in both. The approach is shaped to your nervous system, not to a fixed protocol.",
  },
  {
    q: "Is anxiety therapy in Austin covered by insurance?",
    a: "Yes. Through Headway, Brittany is in-network with Aetna, Cigna, United Healthcare, Oscar, Oxford, and Anthem. Self-pay sessions are $130–$225, and superbills are available for out-of-network reimbursement.",
  },
  {
    q: "Will I have to talk about everything in the first session?",
    a: "No. We start where you're comfortable and build from there. You decide what to share and when. Most clients leave the first session feeling steadier, not more exposed.",
  },
  {
    q: "Do you offer in-person and online anxiety therapy?",
    a: "Both. The Austin office is at 6448 E Hwy 290, Ste E108, Austin, TX 78723. Telehealth is available across Texas — and works well for anxiety work.",
  },
];

export const Route = createFileRoute("/anxiety-therapy-austin")({
  head: () => ({
    meta: [
      { title: "Anxiety Therapy in Austin, TX | Panic, Worry, Perfectionism | Haven & Harbor" },
      {
        name: "description",
        content:
          "Anxiety therapy in Austin, TX for chronic worry, panic, perfectionism, and high-functioning anxiety. CBT, MBCT, IFS, and EMDR. In-person & telehealth.",
      },
      { property: "og:title", content: "Anxiety Therapy in Austin, TX | Haven & Harbor" },
      {
        property: "og:description",
        content:
          "Anxiety counseling in Austin for panic, worry, perfectionism, and high-functioning anxiety. In-person & telehealth across Texas.",
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
            "Anxiety therapy in Austin, TX. CBT, MBCT, IFS, and EMDR with Brittany Zientek, LPC.",
          medicalSpecialty: ["Psychotherapy", "Anxiety Therapy"],
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
            { "@type": "ListItem", position: 3, name: "Anxiety Therapy in Austin", item: URL },
          ],
        }),
      },
    ],
  }),
  component: AnxietyAustinPage,
});

function AnxietyAustinPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Austin, TX · In-Person & Telehealth"
        title="Anxiety Therapy in Austin, TX"
        subtitle="For chronic worry, panic, perfectionism, and the kind of high-functioning anxiety that nobody else sees."
      />

      <section className="container-prose py-20">
        <div className="container-narrow space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Anxiety isn't just thoughts that won't quiet down. It's a nervous system that learned
            it had to stay alert to stay safe — and now can't tell when the danger has passed.
            Real anxiety work pays attention to both: what the mind is doing, and what the body
            is bracing for.
          </p>
          <p>
            At Haven &amp; Harbor, we draw on CBT, MBCT (Mindfulness-Based Cognitive Therapy),
            IFS, and EMDR when trauma is underneath. The right combination depends on you — your
            history, your goals, your nervous system. No two clients are worked the same way.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-prose">
          <p className="eyebrow">What we treat</p>
          <h2 className="display mt-3 text-4xl">Forms of anxiety we work with</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { icon: Brain, title: "Chronic worry & GAD", body: "When the worry loop never quite turns off — about work, family, the news, the future, the worry itself." },
              { icon: Activity, title: "Panic attacks", body: "Sudden, body-level fear that can feel like a heart attack. We build tools first, then work upstream of the trigger." },
              { icon: Sparkles, title: "Perfectionism", body: "High-functioning anxiety that looks like 'achievement' from the outside and feels like white-knuckling from the inside." },
              { icon: Heart, title: "Trauma-rooted anxiety", body: "When the nervous system is bracing because something earlier in life didn't get to finish processing. EMDR and IFS help here." },
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
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl">CBT &amp; MBCT</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Cognitive tools to interrupt the worry loop, plus mindfulness-based work that
              changes your relationship to anxious thoughts instead of fighting them.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl">IFS &amp; EMDR</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              When anxiety is doing a protective job — or has a trauma underneath — IFS works with
              the part that's bracing, and EMDR helps the brain finish processing what's still
              raw.{" "}
              <Link to="/what-is-emdr" className="text-primary underline-offset-4 hover:underline">
                More on EMDR
              </Link>
              .
            </p>
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
