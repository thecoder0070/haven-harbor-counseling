import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

const faqs = [
  {
    q: "How much does therapy cost in Austin, TX?",
    a: "In Austin, individual therapy with a licensed therapist typically ranges from $120 to $250 per 50-minute session. Specialized trauma work (EMDR, IFS) and therapists with advanced training often sit at the higher end of that range. At Haven & Harbor, the standard fee for a 50-minute session is $175.",
  },
  {
    q: "Do you take insurance?",
    a: "Haven & Harbor is an out-of-network (private-pay) practice. This lets us protect your privacy, avoid restrictive diagnoses on your medical record, and give you longer, less rushed sessions. We provide a monthly superbill you can submit to your insurance for possible reimbursement.",
  },
  {
    q: "What is a superbill and how does it work?",
    a: "A superbill is a detailed receipt with the diagnostic and procedure codes your insurance company needs. You pay at the time of session, then submit the superbill to your insurer. If you have out-of-network mental health benefits, they reimburse you directly — often 40–80% of the session fee after your deductible.",
  },
  {
    q: "How do I check my out-of-network benefits?",
    a: "Call the member services number on the back of your insurance card and ask: (1) Do I have out-of-network outpatient mental health benefits? (2) What is my out-of-network deductible, and how much have I met? (3) What percentage do you reimburse per session after the deductible? (4) Is pre-authorization required?",
  },
  {
    q: "Do you offer sliding-scale fees?",
    a: "A small number of reduced-fee spots are reserved for clients in financial hardship. If cost is a barrier, please mention it on your consult call — we'd rather have an honest conversation than have you walk away.",
  },
  {
    q: "Is therapy worth the money?",
    a: "For most people who stay with the work, yes — research consistently shows therapy produces meaningful, lasting change for trauma, anxiety, depression, and relationship struggles. Think of it the way you'd think about any other investment in your long-term health.",
  },
  {
    q: "Can I use HSA or FSA funds for therapy?",
    a: "Yes. Therapy with a licensed clinician is an eligible HSA and FSA expense. You can pay directly with your HSA/FSA card or use the superbill for reimbursement.",
  },
];

export const Route = createFileRoute("/cost-of-therapy-austin")({
  head: () => ({
    meta: [
      { title: "How Much Does Therapy Cost in Austin? (2026 Guide)" },
      { name: "description", content: "What therapy costs in Austin, TX: typical session fees, insurance vs. private pay, superbills, sliding scale, and how to check your benefits." },
      { property: "og:title", content: "How Much Does Therapy Cost in Austin, TX?" },
      { property: "og:description", content: "Session fees, insurance, superbills, and HSA/FSA — everything you need to budget for therapy in Austin." },
      { property: "og:url", content: "https://haven-harbor-counseling.lovable.app/cost-of-therapy-austin" },
    ],
    links: [{ rel: "canonical", href: "https://haven-harbor-counseling.lovable.app/cost-of-therapy-austin" }],
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
  component: CostPage,
});

function CostPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Cost & Insurance"
        title="How much does therapy cost in Austin?"
        subtitle="An honest, jargon-free guide to what therapy in Austin actually costs — and how to make it work."
      />

      <section className="container-prose pb-8">
        <div className="prose-narrow">
          <p>
            If you're searching for therapy in Austin, the cost question is usually one of the first
            things you want a straight answer to. This page walks through what a private-pay
            session typically costs in our city, how insurance and superbills work, and where
            Haven &amp; Harbor fits in.
          </p>

          <h2>The short answer</h2>
          <p>
            In Austin, expect to pay <strong>$120–$250 per 50-minute session</strong> with a
            licensed therapist. Specialized trauma work (EMDR, IFS, somatic) and clinicians with
            advanced training generally fall toward the higher end of that range. At Haven &amp;
            Harbor, our standard rate is <strong>$175 per session</strong>. Free 15-minute
            consultations are always available before you book.
          </p>

          <h2>Why so many Austin therapists are private-pay</h2>
          <p>
            Most trauma-focused practices in Austin (including ours) are out-of-network. There are
            a few reasons for that:
          </p>
          <ul>
            <li><strong>Your privacy.</strong> Insurance requires a mental-health diagnosis to be added to your medical record. Private pay keeps your story between you and your therapist.</li>
            <li><strong>Better care.</strong> Insurance often dictates how many sessions you can have and what counts as "medically necessary." Trauma work doesn't always fit those boxes.</li>
            <li><strong>Therapist availability.</strong> Reimbursement rates are so low that most experienced trauma clinicians can't sustain a practice on insurance alone.</li>
          </ul>

          <h2>Using your insurance through a superbill</h2>
          <p>
            If you have out-of-network mental health benefits, you can often get reimbursed for a
            meaningful portion of what you pay. Here's how it works:
          </p>
          <ol>
            <li>You pay your therapist directly at the time of session.</li>
            <li>At the end of each month, you receive a <strong>superbill</strong> — an itemized receipt with the codes your insurance company needs.</li>
            <li>You submit the superbill to your insurance (most have an app or online portal).</li>
            <li>Once your deductible is met, your insurer reimburses you directly, typically 40–80% of the session fee.</li>
          </ol>

          <h2>Five questions to ask your insurance</h2>
          <p>Before your first session, call the number on the back of your card and ask:</p>
          <ol>
            <li>Do I have <strong>out-of-network outpatient mental health benefits</strong>?</li>
            <li>What is my <strong>out-of-network deductible</strong>, and how much have I met this year?</li>
            <li>What <strong>percentage</strong> do you reimburse per session after the deductible?</li>
            <li>Is there a <strong>session limit</strong> per year?</li>
            <li>Is <strong>pre-authorization</strong> required for outpatient therapy?</li>
          </ol>

          <h2>HSA, FSA, and sliding-scale options</h2>
          <p>
            Therapy with a licensed clinician is an eligible <strong>HSA</strong> and{" "}
            <strong>FSA</strong> expense — you can pay directly with the card. A small number of
            reduced-fee spots at Haven &amp; Harbor are reserved for clients facing financial
            hardship; if cost is a real barrier, please bring it up during your consult.
          </p>

          <h2>Frequently asked questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border/60 bg-card p-6">
                <summary className="cursor-pointer font-serif text-lg text-foreground marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>

          <h2>Ready to talk about it?</h2>
          <p>
            The best way to get personalized cost info — including whether your insurance is likely
            to reimburse — is a free 15-minute consult.{" "}
            <Link to="/schedule" className="text-primary underline-offset-4 hover:underline">Book yours here</Link>{" "}
            or read about <Link to="/first-therapy-session" className="text-primary underline-offset-4 hover:underline">what to expect in your first session</Link>.
          </p>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
