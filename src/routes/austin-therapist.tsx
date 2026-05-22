import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/austin-therapist")({
  head: () => ({
    meta: [
      { title: "Austin Therapist — Trauma & Anxiety Counseling | Haven & Harbor" },
      {
        name: "description",
        content:
          "Looking for a therapist in Austin, TX? Haven & Harbor offers trauma-informed, evidence-based counseling for adults — in-person in South Austin and via telehealth.",
      },
      { property: "og:title", content: "Austin Therapist — Haven & Harbor Counseling" },
      { property: "og:description", content: "Trauma-informed therapy in Austin, Texas." },
      { property: "og:url", content: "/austin-therapist" },
    ],
    links: [{ rel: "canonical", href: "/austin-therapist" }],
  }),
  component: AustinTherapistPage,
});

function AustinTherapistPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Austin, Texas"
        title="Looking for a therapist in Austin?"
        subtitle="Haven & Harbor is a small, intentional Austin counseling practice specializing in trauma, anxiety, grief, and life transitions for adults."
      />

      <section className="container-prose py-20">
        <div className="container-narrow space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Finding the right therapist in Austin can feel overwhelming. There are a lot of
            options, a lot of acronyms, and a lot of pressure to figure it out quickly. The good
            news: you don't have to get it perfect. You just have to find someone you feel safe
            enough with to begin.
          </p>
          <p>
            Haven &amp; Harbor is an Austin-based counseling practice serving adults across the
            city — Zilker, Travis Heights, South Congress, Bouldin, Mueller, and beyond — both
            in-person (in 78704) and via telehealth across Texas.
          </p>
          <h2 className="display pt-4 text-3xl">What I help with</h2>
          <ul className="list-disc space-y-2 pl-6 text-foreground/80">
            <li>Trauma and PTSD (including complex/childhood trauma)</li>
            <li>Anxiety, panic, and high-functioning perfectionism</li>
            <li>Grief, loss, and major life transitions</li>
            <li>Faith and identity questions</li>
            <li>Christian counseling, for clients who want faith integrated</li>
          </ul>
          <h2 className="display pt-4 text-3xl">How to get started</h2>
          <p>
            The simplest first step is a free 15-minute consultation. We'll talk briefly about
            what's bringing you in and whether we'd be a good fit. No pressure, no commitment.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift"
            >
              Schedule a free consult
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
