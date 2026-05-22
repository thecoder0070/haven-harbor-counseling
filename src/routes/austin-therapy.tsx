import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/austin-therapy")({
  head: () => ({
    meta: [
      { title: "Therapy in Austin, TX — Trauma, Anxiety & Faith-Friendly Counseling" },
      {
        name: "description",
        content:
          "Therapy in Austin, Texas focused on trauma, anxiety, and faith-friendly counseling. Evidence-based modalities including EMDR, IFS, and somatic work.",
      },
      { property: "og:title", content: "Therapy in Austin, TX — Haven & Harbor" },
      { property: "og:description", content: "Trauma-informed therapy in Austin." },
      { property: "og:url", content: "/austin-therapy" },
    ],
    links: [{ rel: "canonical", href: "/austin-therapy" }],
  }),
  component: AustinTherapyPage,
});

function AustinTherapyPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Therapy in Austin"
        title="Slow, careful therapy — for real Austin lives."
        subtitle="EMDR, IFS, somatic, and faith-friendly work in a calm South Austin office."
      />

      <section className="container-prose py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              Austin asks a lot of you. Long commutes. A fast city that pretends to be slow. The
              quiet pressure to be okay because, on paper, you should be. Therapy makes space
              for the parts of your life that don't fit on paper.
            </p>
            <p>
              At Haven &amp; Harbor, sessions are intentionally unhurried. We move at the pace
              your nervous system can actually tolerate, using modalities like EMDR (for trauma
              reprocessing), IFS (working with the protective parts of you), somatic skills,
              and CBT.
            </p>
            <p>
              For clients who want it, Christian faith is welcome as part of the work. For those
              who don't, the work is just as full.
            </p>
          </div>
          <aside className="md:col-span-5">
            <div className="rounded-2xl border border-border/60 bg-card p-7">
              <p className="eyebrow">At a glance</p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                <li><strong>Location:</strong> South Austin (78704)</li>
                <li><strong>Telehealth:</strong> Anywhere in Texas</li>
                <li><strong>Ages:</strong> Adults 18+</li>
                <li><strong>Specialties:</strong> Trauma, anxiety, grief, faith</li>
                <li><strong>Insurance:</strong> Out-of-network, superbills provided</li>
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Book a consult
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
