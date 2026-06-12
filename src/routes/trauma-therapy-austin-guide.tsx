import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

const CANONICAL = "https://haven-harbor-counseling.lovable.app/trauma-therapy-austin-guide";

const FAQS: { q: string; a: string }[] = [
  {
    q: "What's the difference between PTSD and complex trauma (C-PTSD)?",
    a: "PTSD usually traces back to one or a few discrete events. Complex PTSD develops from prolonged, repeated trauma — often in childhood or in relationships you couldn't leave. C-PTSD adds layers most PTSD checklists miss: chronic shame, difficulty trusting, emotional flooding or numbness, and a shaky sense of who you are. Treatment for C-PTSD usually takes longer and starts with more stabilization before any memory work.",
  },
  {
    q: "Is EMDR the best therapy for trauma?",
    a: "EMDR is one of the most-researched trauma treatments and is recommended as a first-line therapy for PTSD by the WHO, the APA, and the VA. That said, 'best' depends on the person. For complex trauma, EMDR usually works best alongside parts work (IFS) and somatic skills, not as a standalone protocol.",
  },
  {
    q: "How long does trauma therapy take in Austin?",
    a: "Single-incident trauma often resolves in 6–12 sessions of active EMDR reprocessing. Complex trauma is a longer arc — typically several months of stabilization before reprocessing, and a year or more of overall work isn't unusual. A good therapist will give you a realistic frame in the first few sessions, not a sales pitch.",
  },
  {
    q: "Is EMDR covered by insurance in Texas?",
    a: "EMDR is a billing-neutral modality — it's billed as a standard psychotherapy session (CPT 90837), so most Texas insurance plans that cover therapy cover EMDR. Haven & Harbor accepts most major insurance plans; if your plan doesn't cover therapy, the out-of-pocket rate is $120 per session. For plans we aren't in-network with, we provide superbills for out-of-network reimbursement.",
  },
  {
    q: "What's somatic trauma therapy?",
    a: "Somatic work treats trauma as something stored in the nervous system, not just the mind. Sessions include tracking body sensations, breath, and subtle movement to help a chronically activated system come back to baseline. It pairs naturally with EMDR and IFS.",
  },
  {
    q: "How do I know if my therapist is actually trained in trauma?",
    a: "Ask directly. A trauma specialist should be able to name their training (EMDRIA-approved EMDR training, IFS Level 1+, Somatic Experiencing, Sensorimotor Psychotherapy, etc.) and describe their phased approach to complex trauma. 'Trauma-informed' is a baseline, not a specialty.",
  },
  {
    q: "Do you offer trauma therapy online for clients outside Austin?",
    a: "Yes. We see clients across Texas via secure telehealth. EMDR works well online with a few small adjustments to bilateral stimulation.",
  },
  {
    q: "Will I have to talk about everything that happened?",
    a: "No. Good trauma therapy doesn't require you to retell every detail. EMDR in particular works on the memory network without requiring a full verbal recounting. You stay in the driver's seat for what you share.",
  },
];

export const Route = createFileRoute("/trauma-therapy-austin-guide")({
  head: () => ({
    meta: [
      { title: "EMDR & Complex Trauma Therapy in Austin: Complete Guide" },
      {
        name: "description",
        content:
          "An in-depth guide to EMDR, complex trauma (C-PTSD), and somatic therapy in Austin, TX — how it works, what to expect, cost, and how to choose a therapist.",
      },
      { property: "og:title", content: "EMDR & Complex Trauma Therapy in Austin — A Complete Guide" },
      {
        property: "og:description",
        content:
          "EMDR, C-PTSD, somatic work, cost, and how to choose a trauma therapist in Austin — written by a licensed Austin trauma specialist.",
      },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "EMDR & Complex Trauma Therapy in Austin: A Complete Guide",
          description:
            "An in-depth guide to EMDR, complex trauma (C-PTSD), and somatic therapy in Austin, TX.",
          mainEntityOfPage: CANONICAL,
          author: { "@type": "Organization", name: "Haven & Harbor Counseling" },
          publisher: { "@type": "Organization", name: "Haven & Harbor Counseling" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: TraumaGuidePage,
});

function TraumaGuidePage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Guide · Austin, TX"
        title="EMDR & complex trauma therapy in Austin: a complete guide"
        subtitle="Everything we wish more people knew before searching for a trauma therapist — EMDR, C-PTSD, somatic work, cost, and how to choose well."
      />

      <section className="container-prose pb-8">
        <div className="prose-narrow">
          <div className="my-6 rounded-2xl border border-border bg-muted/40 p-6">
            <p className="m-0 text-sm font-semibold uppercase tracking-wide text-foreground/70">
              The short version
            </p>
            <ul className="mt-3 space-y-2 text-foreground/85">
              <li>EMDR is the most-researched trauma therapy, but it works best when paced inside a trusting therapy relationship — not as a quick fix.</li>
              <li>Complex trauma (C-PTSD) needs a phased approach: stabilization first, reprocessing second, integration third.</li>
              <li>Most Austin trauma specialists are out-of-network; superbills make insurance reimbursement realistic.</li>
              <li>The single biggest predictor of good outcomes is therapist fit and specialty — not modality alphabet soup.</li>
            </ul>
          </div>

          <h2>What we actually mean by "trauma"</h2>
          <p>
            Trauma isn't a ranking of what happened to you. It's what your nervous system
            couldn't fully process at the time. That's why two people can go through the
            same event and one walks away unchanged while the other carries it for decades.
            For our purposes, trauma falls into three rough categories:
          </p>
          <ul>
            <li>
              <strong>Single-incident trauma.</strong> Car accidents, assaults, medical events,
              natural disasters, a sudden loss. Often responds quickly to EMDR.
            </li>
            <li>
              <strong>Complex trauma (C-PTSD).</strong> Repeated, prolonged trauma — usually
              early, usually relational. Emotional neglect, chronic invalidation,
              abuse, growing up around addiction or untreated mental illness.
            </li>
            <li>
              <strong>Attachment and developmental wounds.</strong> The quieter category that
              rarely makes it onto a PTSD checklist but shapes how safe you feel in your
              own skin and in close relationships.
            </li>
          </ul>
          <p>
            More on the difference between PTSD and C-PTSD in our resource on{" "}
            <Link to="/resources/$slug" params={{ slug: "complex-ptsd-vs-ptsd" }} className="text-primary underline-offset-4 hover:underline">
              complex PTSD vs PTSD
            </Link>
            .
          </p>

          <h2>EMDR, plainly</h2>
          <p>
            EMDR (Eye Movement Desensitization and Reprocessing) is a structured, eight-phase
            therapy that helps the brain finish processing memories that got stuck. You don't
            lose control, you're not hypnotized, and you don't have to retell the whole story.
            You hold a target memory in mind while your therapist guides you through
            bilateral stimulation — usually eye movements, taps, or tones — in short sets.
            Over time, the memory's emotional charge comes down. The facts stay; the
            full-body panic doesn't.
          </p>
          <p>
            EMDR's eight phases, briefly: history-taking, preparation/resourcing, assessment,
            desensitization, installation, body scan, closure, and re-evaluation. A skilled
            EMDR therapist for complex trauma will spend serious time in phases 1–2 before
            ever touching a memory. That's a feature, not slow progress.
          </p>
          <p>
            For a deeper, plain-English walkthrough see{" "}
            <Link to="/what-is-emdr" className="text-primary underline-offset-4 hover:underline">
              What is EMDR therapy?
            </Link>
          </p>

          <h2>Why complex trauma needs a different game plan</h2>
          <p>
            Standard talk therapy often stalls with C-PTSD because the issue isn't really
            insight — most C-PTSD clients can analyze their childhood with painful accuracy.
            The issue is a nervous system that learned to brace, dissociate, or perform, and
            a sense of self built around protecting old wounds. That calls for a phased
            approach:
          </p>
          <ol>
            <li>
              <strong>Stabilization.</strong> Building real skills for grounding, affect
              regulation, and a felt sense of safety in the body. This phase alone changes
              lives.
            </li>
            <li>
              <strong>Reprocessing.</strong> Working with specific memories — usually with
              EMDR, sometimes with IFS-informed unburdening or somatic approaches —
              once there's enough internal stability to do it well.
            </li>
            <li>
              <strong>Integration.</strong> Rebuilding identity, relationships, work, and
              meaning around a system that no longer has to organize itself around survival.
            </li>
          </ol>

          <h2>The modalities we actually use alongside EMDR</h2>
          <ul>
            <li>
              <strong>Internal Family Systems (IFS).</strong> A parts-based model that
              treats the protective, perfectionist, numbing, or self-critical parts of you
              as adaptations rather than problems. It's especially useful for shame-heavy
              complex trauma. More in our guide to{" "}
              <Link to="/what-is-ifs-therapy" className="text-primary underline-offset-4 hover:underline">
                IFS therapy
              </Link>
              .
            </li>
            <li>
              <strong>Somatic skills.</strong> Tracking sensations, breath, posture, and
              small movements to help a chronically activated nervous system come back to
              baseline. Drawn from Somatic Experiencing and Sensorimotor Psychotherapy.
            </li>
            <li>
              <strong>Attachment-focused work.</strong> Using the therapy relationship
              itself to repair what wasn't safe earlier — paced carefully, named openly.
            </li>
          </ul>

          <h2>What to expect: timeline and rhythm</h2>
          <p>
            First session is usually a longer intake — history, goals, what's worked and
            what hasn't, and what you actually want out of therapy. Single-incident
            trauma often resolves in 6–12 sessions of active EMDR reprocessing.
            Complex trauma is a longer arc — typically several months of stabilization
            and skill-building before reprocessing, with a total course of work that
            often runs a year or more. Weekly sessions early on; some clients move to
            biweekly later.
          </p>
          <p>
            Walk-through of the first appointment in{" "}
            <Link to="/first-therapy-session" className="text-primary underline-offset-4 hover:underline">
              what to expect at your first therapy session
            </Link>
            .
          </p>

          <h2>How to choose a trauma therapist in Austin</h2>
          <p>
            "Trauma-informed" has become a baseline marketing phrase rather than a
            credential. A few questions that actually filter:
          </p>
          <ul>
            <li>Have you completed EMDRIA-approved EMDR training? (Basic vs Advanced vs Certified.)</li>
            <li>What's your approach to complex trauma specifically — and how do you decide when someone is ready for reprocessing?</li>
            <li>What other modalities are you trained in? (IFS, SE, Sensorimotor, AEDP, etc.)</li>
            <li>What percent of your caseload is trauma work?</li>
            <li>How do you handle dissociation or flooding in session?</li>
          </ul>
          <p>
            A confident specialist will answer these without hedging. If the answer is
            "I do a little of everything," that's useful information.
          </p>

          <h2>Cost, insurance, and superbills in Texas</h2>
          <p>
            Most trauma specialists in Austin operate out-of-network. Self-pay rates
            typically run $150–$225 per 50–60 minute session, with EMDR-intensive
            sessions sometimes priced higher. Out-of-network benefits on a Texas PPO
            often reimburse 50–80% after you meet your deductible — your therapist
            provides a monthly superbill, you submit it to your insurer.
          </p>
          <p>
            Full breakdown in our{" "}
            <Link to="/cost-of-therapy-austin" className="text-primary underline-offset-4 hover:underline">
              cost of therapy in Austin guide
            </Link>
            .
          </p>

          <h2>For Christian clients</h2>
          <p>
            EMDR and IFS are clinical methods, not worldviews. For Christian clients who
            want it, we integrate prayer, scripture, and a felt sense of God's presence
            into resourcing and reprocessing — without imposing it on anyone who doesn't.
            More in{" "}
            <Link to="/christian-counseling" className="text-primary underline-offset-4 hover:underline">
              Christian counseling
            </Link>
            .
          </p>

          <h2>Frequently asked questions</h2>
          {FAQS.map((f) => (
            <div key={f.q} className="mt-6">
              <h3 className="text-xl">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2 className="mt-10">Ready to talk to a trauma therapist in Austin?</h2>
          <p>
            Haven &amp; Harbor specializes in EMDR and complex trauma for adults — in
            South Austin and via telehealth across Texas.{" "}
            <a href="https://care.headway.co/providers/brittany-zientek" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">
              Book a free 15-minute consult
            </a>{" "}
            or read more about our{" "}
            <Link to="/austin-trauma-therapist" className="text-primary underline-offset-4 hover:underline">
              Austin trauma therapy services
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
