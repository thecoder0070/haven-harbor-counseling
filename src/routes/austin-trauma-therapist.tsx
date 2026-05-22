import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/austin-trauma-therapist")({
  head: () => ({
    meta: [
      { title: "Austin Trauma Therapist — EMDR & PTSD Care" },
      {
        name: "description",
        content:
          "Specialized trauma therapy in Austin, TX. EMDR, IFS, and somatic work for PTSD, complex trauma, and childhood wounds with a licensed Austin therapist.",
      },
      { property: "og:title", content: "Austin Trauma Therapist — Haven & Harbor" },
      { property: "og:description", content: "EMDR & trauma therapy in Austin." },
      { property: "og:url", content: "/austin-trauma-therapist" },
    ],
    links: [{ rel: "canonical", href: "/austin-trauma-therapist" }],
  }),
  component: AustinTraumaPage,
});

function AustinTraumaPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Trauma Therapist · Austin, TX"
        title="Trauma therapy that respects your pace."
        subtitle="EMDR, IFS, and somatic work for adults navigating PTSD, complex trauma, and the wounds that don't always have a name."
      />

      <section className="container-prose py-20">
        <div className="container-narrow space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Trauma is not just what happened to you. It's what your body learned to do to
            survive. Good trauma therapy works with both — the story and the system underneath.
          </p>
          <h2 className="display pt-4 text-3xl">What we work with</h2>
          <ul className="list-disc space-y-2 pl-6 text-foreground/80">
            <li>Single-incident trauma (accidents, assault, medical)</li>
            <li>Complex and childhood trauma (C-PTSD)</li>
            <li>Attachment wounds and relational trauma</li>
            <li>Spiritual abuse and church hurt</li>
            <li>The quieter kind that nobody believes is "trauma enough"</li>
          </ul>
          <h2 className="display pt-4 text-3xl">How we work</h2>
          <p>
            EMDR for reprocessing memories that still feel raw. IFS for the protective parts of
            you that learned to keep you safe. Somatic skills for a nervous system that's been
            on high alert too long. None of it is rushed.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift"
            >
              Book a free consult
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
