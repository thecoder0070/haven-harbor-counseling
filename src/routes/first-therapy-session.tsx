import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

const faqs = [
  {
    q: "Do I need to have it all figured out before the first session?",
    a: "No. You don't have to know your diagnosis, your goals, or even the words for what's wrong. A good therapist can work with 'I just know something needs to change.'",
  },
  {
    q: "What if I cry the whole time? Or don't cry at all?",
    a: "Both are completely normal. Tears, numbness, laughter, awkward silence — none of it is the 'wrong' way to start therapy.",
  },
  {
    q: "How long until I feel better?",
    a: "Many people notice some relief within 4–6 sessions just from being heard well. Deeper trauma work usually takes longer — typically several months of consistent weekly sessions.",
  },
  {
    q: "What should I wear?",
    a: "Whatever's comfortable. There's no dress code. Many clients in telehealth sessions sit on their couch with a blanket and tea.",
  },
  {
    q: "Will you tell my employer or family anything I say?",
    a: "No. What you share is confidential, with a few legally required exceptions (imminent harm to self or others, abuse of a child or elder). We'll walk through these in the first session.",
  },
];

export const Route = createFileRoute("/first-therapy-session")({
  head: () => ({
    meta: [
      { title: "What to Expect in Your First Therapy Session | Austin, TX" },
      { name: "description", content: "A gentle walkthrough of your first therapy session in Austin — what we talk about, how to prepare, and what's totally normal to feel beforehand." },
      { property: "og:title", content: "What to Expect in Your First Therapy Session" },
      { property: "og:description", content: "An honest, no-pressure guide to what really happens in a first therapy session." },
      { property: "og:url", content: "https://haven-harbor-counseling.lovable.app/first-therapy-session" },
    ],
    links: [{ rel: "canonical", href: "https://haven-harbor-counseling.lovable.app/first-therapy-session" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FirstSessionPage,
});

function FirstSessionPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Starting therapy"
        title="What to expect in your first session."
        subtitle="If you've been putting off booking because you don't know what happens — here's exactly what to expect."
      />

      <section className="container-prose pb-8">
        <div className="prose-narrow">
          <h2>Before the session</h2>
          <p>
            After you book, you'll receive a secure link to complete intake paperwork — basic
            background, what's bringing you in, and consent forms. It takes about 15 minutes and
            saves the bulk of our first session for actually talking.
          </p>
          <p>
            On the day of, you don't need to prepare. No talking points, no script. Show up as
            you are. If telehealth: find a quiet, private spot. If in-person: arrive a few minutes
            early so you can settle.
          </p>

          <h2>The first 50 minutes</h2>
          <p>The first session usually moves through three things, gently:</p>
          <ol>
            <li>
              <strong>What's bringing you in.</strong> You share, in whatever way comes out, what's
              been hard. There's no right way. Many people stumble or apologize for not knowing
              where to start — that's completely fine.
            </li>
            <li>
              <strong>A little background.</strong> Family, history, what's helped before, what
              hasn't. Just enough to give the work context.
            </li>
            <li>
              <strong>Where we might go next.</strong> Before you leave, we'll talk briefly about
              what therapy might look like together, what modalities might fit (EMDR, IFS,
              somatic, talk), and a tentative cadence.
            </li>
          </ol>

          <h2>What it's <em>not</em></h2>
          <ul>
            <li><strong>Not a deep dive into the worst thing that's ever happened to you.</strong> Good trauma therapy moves at the pace of safety, not speed.</li>
            <li><strong>Not advice.</strong> A therapist's job is to help you find your own answers, not hand you a script.</li>
            <li><strong>Not a commitment.</strong> If we're not the right fit after the first session, I'll happily refer you to someone who is.</li>
          </ul>

          <h2>Common feelings beforehand</h2>
          <p>
            Most people show up to their first session somewhere between nervous and slightly
            nauseous. That's normal. Telling someone the truth about your inner life — sometimes
            for the first time — is a big deal. Your nervous system is paying attention to that,
            and that's actually a good sign.
          </p>

          <h2>What helps after</h2>
          <p>
            Plan something gentle for the rest of your day. A walk, a quiet meal, an early
            bedtime. First sessions can stir more than you expect, even when nothing dramatic
            happens. Hydrate. Don't book something stressful right after.
          </p>

          <h2>Frequently asked</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border/60 bg-card p-6">
                <summary className="cursor-pointer font-serif text-lg text-foreground marker:hidden">{f.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>

          <h2>Ready when you are</h2>
          <p>
            <a href="https://care.headway.co/providers/brittany-zientek" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">Book a free 15-minute consult</a>{" "}
            and we'll figure out the rest together. Curious about{" "}
            <Link to="/cost-of-therapy-austin" className="text-primary underline-offset-4 hover:underline">cost and insurance</Link>?
          </p>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
