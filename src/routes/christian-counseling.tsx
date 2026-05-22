import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import journal from "@/assets/journal.jpg";

export const Route = createFileRoute("/christian-counseling")({
  head: () => ({
    meta: [
      { title: "Christian Counseling in Austin, TX — Faith-Integrated Therapy" },
      {
        name: "description",
        content:
          "Christian counseling in Austin, Texas. Faith-integrated therapy for trauma, anxiety, and spiritual struggle with a licensed Christian therapist.",
      },
      { property: "og:title", content: "Christian Counseling in Austin — Haven & Harbor" },
      { property: "og:description", content: "Faith-integrated Christian therapy in Austin, TX." },
      { property: "og:url", content: "/christian-counseling" },
      { property: "og:image", content: journal },
    ],
    links: [{ rel: "canonical", href: "/christian-counseling" }],
  }),
  component: ChristianPage,
});

function ChristianPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Christian Counseling · Austin, TX"
        title="Faith-integrated therapy, on your terms."
        subtitle="For clients who want their relationship with God to be part of the work — without sermons, scripts, or pressure."
      />

      <section className="container-prose grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src={journal}
            alt="Open journal with olive branch and tea"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-3xl object-cover shadow-soft"
          />
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:col-span-7">
          <p>
            For many of my clients, faith is not separate from the healing process — it's woven
            into how they understand suffering, identity, and hope. Christian counseling at
            Haven &amp; Harbor honors that. We hold scripture, prayer, and theology with the same
            care we hold psychology and the nervous system.
          </p>
          <p>
            This isn't pastoral counseling, and it isn't a Bible study. It's evidence-based
            therapy with a Christian therapist who can speak the language of your faith when
            that's helpful — and who will never weaponize it when it isn't.
          </p>
          <p>
            Many clients come carrying spiritual wounds: church hurt, performance-based faith,
            shame, deconstruction, or the grief of belief that doesn't feel the way it used to.
            All of that is welcome here.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-prose">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow">Common reasons clients come</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">You don't have to choose.</h2>
            <p className="mt-5 text-muted-foreground">
              Between your faith and your healing. Between honesty and hope. Between the church
              you grew up in and the God you're still learning to trust.
            </p>
          </div>
          <ul className="grid gap-3 md:grid-cols-2">
            {[
              "Church hurt and spiritual abuse",
              "Faith deconstruction and reconstruction",
              "Shame-based or performance-based religion",
              "Trauma alongside Christian belief",
              "Anxiety, perfectionism, and 'doing it right'",
              "Marriage and identity in a faith context",
              "Grief, doubt, and dark nights of the soul",
              "Reclaiming a felt sense of God's presence",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border/60 bg-card p-5 text-foreground/85"
              >
                — {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="container-narrow rounded-3xl bg-primary/[0.06] p-10 text-center">
          <p className="eyebrow">A note on faith</p>
          <p className="mt-4 font-serif text-2xl leading-snug text-foreground">
            You set the spiritual temperature of the room. Always.
          </p>
          <p className="mt-4 text-muted-foreground">
            Some sessions include prayer or scripture. Some don't mention faith at all. That's
            yours to shape, and it can change week to week. My job is to follow your lead with
            wisdom and respect.
          </p>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
