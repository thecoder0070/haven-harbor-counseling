import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/austin-christian-therapist")({
  head: () => ({
    meta: [
      { title: "Austin Christian Therapist — Haven & Harbor" },
      {
        name: "description",
        content:
          "Christian therapist in Austin, TX offering faith-integrated counseling for trauma, anxiety, church hurt, and spiritual seasons — gentle, evidence-based, and on your terms.",
      },
      { property: "og:title", content: "Austin Christian Therapist — Haven & Harbor" },
      { property: "og:description", content: "Faith-integrated Christian therapy in Austin, TX." },
      { property: "og:url", content: "/austin-christian-therapist" },
    ],
    links: [{ rel: "canonical", href: "/austin-christian-therapist" }],
  }),
  component: AustinChristianPage,
});

function AustinChristianPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Christian Therapist · Austin, TX"
        title="A Christian therapist who speaks your language — and honors yours."
        subtitle="Faith-integrated therapy in Austin for trauma, anxiety, church hurt, and the seasons that test what you believe."
      />

      <section className="container-prose py-20">
        <div className="container-narrow space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Finding a Christian therapist in Austin who is both clinically excellent and
            spiritually grounded can be hard. Some practitioners check the "Christian" box but
            offer little integration. Others lead with theology and underweight the clinical work.
            Haven &amp; Harbor sits in the middle — evidence-based therapy with a therapist who
            can hold scripture and the nervous system in the same hand.
          </p>
          <h2 className="display pt-4 text-3xl">What faith-integrated therapy looks like</h2>
          <p>
            You set the spiritual temperature. In some sessions we pray. In some we sit with a
            scripture that's stuck in your chest. In others we never mention faith because what
            you need that hour is grief, or skills, or just to be heard. All of it is sacred work.
          </p>
          <h2 className="display pt-4 text-3xl">Common reasons Christian clients come</h2>
          <ul className="list-disc space-y-2 pl-6 text-foreground/80">
            <li>Trauma processed within a Christian framework</li>
            <li>Church hurt, spiritual abuse, and pastoral betrayal</li>
            <li>Faith deconstruction without losing yourself</li>
            <li>Anxiety and perfectionism dressed up as obedience</li>
            <li>Marriage, identity, and calling in a faith context</li>
            <li>Grief and the dark night of the soul</li>
          </ul>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift"
            >
              Reach out to schedule
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
