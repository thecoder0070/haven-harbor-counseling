import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Heart, Shield, Sparkles, Compass } from "lucide-react";

const URL = "https://haven-harbor-counseling.lovable.app/trauma-counseling-austin";
const HEADWAY = "https://care.headway.co/providers/brittany-zientek";

const FAQ = [
  {
    q: "What is trauma counseling?",
    a: "Trauma counseling is therapy focused on helping you process and recover from distressing experiences — whether a single event like an accident or assault, or ongoing experiences like childhood neglect, religious abuse, or relational harm. It works with both the story and the nervous system underneath.",
  },
  {
    q: "How is trauma counseling different from regular therapy?",
    a: "Trauma-focused therapy uses specific, evidence-based approaches like EMDR, IFS, and Trauma-Focused CBT to gently reprocess painful memories without re-traumatizing you. Brittany is trained in all three and paces sessions to your nervous system, not a protocol.",
  },
  {
    q: "How long does trauma counseling take?",
    a: "It varies. Some clients see meaningful change in 8–12 sessions for a single-incident trauma. Complex or developmental trauma typically takes longer — months to a year or more. We'll set realistic expectations together after your first few sessions.",
  },
  {
    q: "Do you take insurance?",
    a: "Yes. Brittany is in-network with Aetna, Cigna, United Healthcare, Oscar, Oxford, and Anthem through Headway. Out-of-pocket sessions are also available.",
  },
  {
    q: "Do you offer in-person or virtual sessions?",
    a: "Both. The office is at 6448 E Hwy 290, Ste E108, Austin, TX 78723. Telehealth is available across Texas.",
  },
];

export const Route = createFileRoute("/trauma-counseling-austin")({
  head: () => ({
    meta: [
      { title: "Trauma Counseling in Austin, TX | Haven & Harbor" },
      {
        name: "description",
        content:
          "Trauma counseling in Austin, TX with a licensed therapist trained in EMDR, IFS, and Trauma-Focused CBT. In-person and telehealth. In-network with major insurance.",
      },
      { property: "og:title", content: "Trauma Counseling in Austin, TX | Haven & Harbor" },
      {
        property: "og:description",
        content:
          "Evidence-based trauma counseling in Austin — EMDR, IFS, TF-CBT. In-person and telehealth. Brittany Zientek, LPC.",
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
            "Trauma counseling in Austin, TX. EMDR, IFS, and Trauma-Focused CBT with Brittany Zientek, LPC.",
          medicalSpecialty: "Psychiatric",
          telephone: "",
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
  component: TraumaCounselingAustinPage,
});

function TraumaCounselingAustinPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Austin, TX · In-Person & Telehealth"
        title="Trauma Counseling in Austin, TX"
        subtitle="Gentle, evidence-based therapy for PTSD, complex trauma, and the wounds that quietly shape daily life — with Brittany Zientek, LPC."
      />

      {/* INTRO */}
      <section className="container-prose py-20">
        <div className="container-narrow space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            If you're searching for trauma counseling in Austin, you probably already know
            something needs to shift. Maybe the past keeps showing up in places it doesn't belong
            — your sleep, your relationships, your faith, your body. Maybe you've tried regular
            talk therapy and it didn't quite reach what hurts.
          </p>
          <p>
            Haven &amp; Harbor is a small, intentional counseling practice in Austin focused on
            trauma. Brittany Zientek, LPC, has 8 years of experience helping clients move through
            PTSD, complex trauma, anxiety, and grief using approaches that respect both your
            story and your nervous system.
          </p>
        </div>
      </section>

      {/* WHO IT HELPS */}
      <section className="bg-secondary/40 py-20">
        <div className="container-prose">
          <p className="eyebrow">Who trauma counseling helps</p>
          <h2 className="display mt-3 text-4xl">What we work with</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Shield,
                title: "PTSD & Single-Incident Trauma",
                body: "Accidents, assault, medical trauma, sudden loss — the kind of events that leave a clear before and after.",
              },
              {
                icon: Heart,
                title: "Complex & Childhood Trauma (C-PTSD)",
                body: "Long-running experiences from early life: neglect, emotional abuse, attachment wounds, family dysfunction.",
              },
              {
                icon: Sparkles,
                title: "Religious & Spiritual Trauma",
                body: "Church hurt, spiritual abuse, high-control environments, deconstruction — held with care for where you are now.",
              },
              {
                icon: Compass,
                title: "Anxiety, Grief & Life Transitions",
                body: "When trauma shows up as chronic anxiety, panic, complicated grief, or feeling stuck in a hard season.",
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

      {/* MODALITIES */}
      <section className="container-prose py-20">
        <p className="eyebrow">How we work</p>
        <h2 className="display mt-3 text-4xl">Evidence-based trauma modalities</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl">EMDR</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Eye Movement Desensitization and Reprocessing helps the brain finish processing
              memories that still feel raw.{" "}
              <Link to="/what-is-emdr" className="text-primary underline-offset-4 hover:underline">
                Learn more
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl">IFS (Internal Family Systems)</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A compassionate way of working with the protective parts of you that learned to
              keep you safe.{" "}
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
              beliefs trauma left behind — paired with CBT, MBCT, and SFBT as needed.
            </p>
          </div>
        </div>
        <p className="mt-8 text-base text-foreground/80">
          For a deeper look at how these approaches work together, read our{" "}
          <Link
            to="/trauma-therapy-austin-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            complete guide to trauma therapy in Austin
          </Link>
          .
        </p>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-primary/[0.05] py-20">
        <div className="container-prose">
          <p className="eyebrow">What to expect</p>
          <h2 className="display mt-3 text-4xl">A gentle place to start</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Reach out", b: "Send a short note or book a free 15-minute consult to see if we're a fit." },
              { n: "02", t: "First session", b: "We go at your pace. No need to share your whole story before you're ready." },
              { n: "03", t: "Ongoing care", b: "Weekly or biweekly sessions, with regular check-ins on what's working." },
            ].map((s) => (
              <li key={s.n} className="rounded-2xl border border-border/60 bg-card p-7">
                <span className="font-serif text-3xl text-sage-deep">{s.n}</span>
                <h3 className="mt-2 font-serif text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted-foreground">
            New to therapy? See{" "}
            <Link to="/first-therapy-session" className="text-primary underline-offset-4 hover:underline">
              what to expect at your first session
            </Link>{" "}
            and our{" "}
            <Link to="/cost-of-therapy-austin" className="text-primary underline-offset-4 hover:underline">
              guide to the cost of therapy in Austin
            </Link>
            .
          </p>
        </div>
      </section>

      {/* INSURANCE & ABOUT */}
      <section className="container-prose py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Your therapist</p>
            <h2 className="display mt-3 text-3xl">Brittany Zientek, LPC</h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              Licensed Professional Counselor in Austin with 8 years of experience in trauma,
              anxiety, PTSD, and relationship concerns. Warm, collaborative, and unhurried.
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
              Brittany accepts Aetna, Cigna, United Healthcare, Oscar, Oxford, and Anthem through
              Headway. Self-pay sessions are $130–$225.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      <CtaBanner />
    </SiteLayout>
  );
}
