import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

const faqs = [
  {
    q: "Do I have to be Christian to come here?",
    a: "Not at all. Haven & Harbor is faith-friendly, not faith-required. Many clients have no spiritual background or are actively questioning theirs. The work is just as careful and welcoming either way.",
  },
  {
    q: "Are you taking new clients?",
    a: "Yes — usually. The best way to find out is to reach out through the contact page. If there's a waitlist, I'll let you know and offer referrals to trusted Austin colleagues.",
  },
  {
    q: "Do you take insurance?",
    a: "Haven & Harbor is an out-of-network provider, which means payment is due at the time of session. I provide a monthly superbill that many clients submit to their insurance for partial reimbursement. Call your insurance and ask about 'out-of-network outpatient mental health' coverage.",
  },
  {
    q: "How much does a session cost?",
    a: "Individual 50-minute sessions are $165. Extended 80-minute sessions (often used for EMDR) are $245. The initial 15-minute consultation is free.",
  },
  {
    q: "How long is therapy?",
    a: "It depends. Some clients come for a focused season of work (8–16 sessions). Others stay longer, especially when working through complex trauma. We'll talk regularly about how things are going and what you need.",
  },
  {
    q: "Do you offer telehealth?",
    a: "Yes. Telehealth is available for any client physically located in Texas at the time of the session. The Austin office is in 78704 for in-person sessions.",
  },
  {
    q: "What if I'm in crisis?",
    a: "Haven & Harbor is not a crisis service. If you are in immediate danger, please call or text 988 (Suicide & Crisis Lifeline), call 911, or go to your nearest emergency room.",
  },
  {
    q: "What ages do you see?",
    a: "Adults and young adults, ages 18 and up.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Haven & Harbor Counseling | Austin, TX" },
      { name: "description", content: "Common questions about therapy, insurance, fees, and Christian counseling at Haven & Harbor in Austin." },
      { property: "og:title", content: "FAQ — Haven & Harbor Counseling" },
      { property: "og:description", content: "Therapy FAQ for clients in Austin, TX." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
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
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="FAQ"
        title="Common questions, honest answers."
        subtitle="If you don't see your question, please reach out — I'm happy to talk it through."
      />

      <section className="container-prose py-20">
        <div className="container-narrow">
          <dl className="divide-y divide-border">
            {faqs.map((f) => (
              <div key={f.q} className="py-7">
                <dt className="font-serif text-xl text-foreground">{f.q}</dt>
                <dd className="mt-3 leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
