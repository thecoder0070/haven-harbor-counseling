import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import office from "@/assets/office.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Haven & Harbor Counseling | Austin Therapist" },
      {
        name: "description",
        content:
          "Meet the therapist behind Haven & Harbor Counseling in Austin, TX — a trauma-informed, faith-friendly counselor walking alongside clients through healing.",
      },
      { property: "og:title", content: "About — Haven & Harbor Counseling" },
      { property: "og:description", content: "An Austin-based trauma therapist with a faith-friendly heart." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: office },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="Steady presence. Honest work."
        subtitle="A small, intentional Austin practice built around the belief that healing happens in relationship — slowly, gently, and with hope."
      />

      <section className="container-prose grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src={office}
            alt="Cozy Austin therapy office"
            width={1400}
            height={1000}
            loading="lazy"
            className="rounded-3xl object-cover shadow-soft"
          />
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:col-span-7">
          <p>
            I'm a Licensed Professional Counselor based in Austin, Texas. My practice grew out of
            years of walking with people through the after-effects of trauma — and a conviction
            that everyone deserves a counselor who is both clinically grounded and deeply human.
          </p>
          <p>
            My work draws on attachment-based, somatic, and evidence-based modalities including
            EMDR, IFS (parts work), and CBT. But underneath the techniques is something simpler:
            a willingness to sit with you, listen carefully, and not look away.
          </p>
          <p>
            For clients who want it, I'm honored to integrate Christian faith into the work — not
            as a script, but as a thread woven into the parts of you that already carry it. For
            clients who don't, the work is just as welcoming and just as careful.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-prose grid gap-10 md:grid-cols-3">
          {[
            { k: "Education", v: "M.A. in Clinical Mental Health Counseling" },
            { k: "License", v: "Licensed Professional Counselor (TX)" },
            { k: "Training", v: "EMDR, IFS, Trauma-Focused CBT" },
            { k: "Population", v: "Adults & Young Adults (18+)" },
            { k: "Setting", v: "In-person in South Austin · Telehealth across Texas" },
            { k: "Faith", v: "Optional integration of Christian faith" },
          ].map((d) => (
            <div key={d.k} className="rounded-2xl border border-border/60 bg-card p-6">
              <p className="eyebrow">{d.k}</p>
              <p className="mt-3 font-serif text-xl">{d.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="container-narrow">
          <p className="eyebrow text-center">Why Haven &amp; Harbor</p>
          <h2 className="display mt-4 text-center text-4xl md:text-5xl">
            A name with a promise.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            A <em>haven</em> is a place of refuge — somewhere safe enough to set things down.
            A <em>harbor</em> is where the work happens: where ships are repaired, restocked,
            and sent back out, stronger. This practice tries to be both. A quiet place to be
            honest about what hurts, and a steady place to grow into who you're meant to be.
          </p>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
