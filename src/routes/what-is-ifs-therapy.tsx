import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/what-is-ifs-therapy")({
  head: () => ({
    meta: [
      { title: "What is IFS Therapy? Internal Family Systems Explained | Austin" },
      { name: "description", content: "IFS (Internal Family Systems) therapy explained simply: parts work, the Self, what sessions look like, and how to find an IFS therapist in Austin." },
      { property: "og:title", content: "What is IFS Therapy? — Haven & Harbor Counseling" },
      { property: "og:description", content: "An honest, jargon-free guide to Internal Family Systems therapy from an Austin trauma therapist." },
      { property: "og:url", content: "https://haven-harbor-counseling.lovable.app/what-is-ifs-therapy" },
    ],
    links: [{ rel: "canonical", href: "https://haven-harbor-counseling.lovable.app/what-is-ifs-therapy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalTherapy",
          name: "Internal Family Systems (IFS) Therapy",
          alternateName: "IFS, Parts Work",
          description: "An evidence-based therapy that views the mind as made up of distinct parts, all welcome, led by an undamaged core Self. Especially effective for trauma, anxiety, and inner conflict.",
          relevantSpecialty: "Trauma therapy",
        }),
      },
    ],
  }),
  component: IfsPage,
});

function IfsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="IFS"
        title="What is IFS therapy?"
        subtitle="Internal Family Systems — the 'parts work' model — explained without the jargon."
      />

      <section className="container-prose pb-8">
        <div className="prose-narrow">
          <h2>The basic idea</h2>
          <p>
            Internal Family Systems (IFS) starts with an observation most of us can recognize:
            "Part of me wants to leave this job, and part of me is terrified to." "Part of me
            wants to text them back, part of me knows I shouldn't." IFS takes that experience
            seriously. It views the mind as naturally made up of distinct{" "}
            <strong>parts</strong>, each one trying — even when it's destructive — to protect or
            help you in some way.
          </p>
          <p>
            Underneath all those parts is what IFS calls the <strong>Self</strong>: a calm,
            compassionate, undamaged core that's always there, even when it's been buried by
            years of survival. The work of IFS is helping you lead from that Self and form a new
            relationship with the parts of you that have been carrying too much for too long.
          </p>

          <h2>The three kinds of parts</h2>
          <ul>
            <li><strong>Exiles</strong> — the wounded, young, or vulnerable parts that hold the pain of old experiences. Usually hidden because they hurt too much to feel.</li>
            <li><strong>Managers</strong> — the proactive protectors. Perfectionism, control, people-pleasing, hyper-competence, planning. They work hard to keep the exiles' pain from breaking through.</li>
            <li><strong>Firefighters</strong> — the reactive protectors. They show up when an exile's pain breaks through anyway, often through numbing, food, alcohol, scrolling, anger, or shutdown.</li>
          </ul>
          <p>
            IFS treats all of them as welcome. No part of you is bad — every part has a reason it
            started doing what it does.
          </p>

          <h2>What a session looks like</h2>
          <p>
            IFS work is mostly internal and conversational. We slow down, notice what's coming up,
            and turn toward a specific part with curiosity instead of judgment. Over time, parts
            relax, share their story, and let go of what they've been carrying — what IFS calls{" "}
            <strong>unburdening</strong>. Many people describe IFS as the first therapy where
            they actually felt <em>compassion</em> for the parts of themselves they used to fight.
          </p>

          <h2>What IFS helps with</h2>
          <ul>
            <li>Complex and developmental trauma</li>
            <li>Chronic inner critic, shame, and self-judgment</li>
            <li>Anxiety, perfectionism, and burnout</li>
            <li>Disordered eating, addiction, and compulsive behaviors</li>
            <li>Relationship patterns you keep repeating</li>
            <li>Spiritual struggles and religious trauma</li>
          </ul>

          <h2>IFS and Christian faith</h2>
          <p>
            For many Christian clients, IFS is the first therapy that feels spiritually coherent.
            The idea of an undamaged Self underneath the noise resonates with what scripture
            describes about being made in the image of God. IFS doesn't require Christian framing
            — and it doesn't conflict with it.{" "}
            <Link to="/christian-counseling" className="text-primary underline-offset-4 hover:underline">More on integrating faith in therapy</Link>.
          </p>

          <h2>Is IFS evidence-based?</h2>
          <p>
            Yes. IFS was developed by Dr. Richard Schwartz in the 1980s and was named an
            evidence-based practice by SAMHSA in 2015. A growing body of research supports its
            use for PTSD, depression, anxiety, and relational trauma.
          </p>

          <h2>How IFS and EMDR fit together</h2>
          <p>
            EMDR and IFS work beautifully alongside each other. IFS helps build internal safety
            and relationship with parts; EMDR helps reprocess specific stuck memories. Many
            sessions at Haven &amp; Harbor blend both depending on what your system needs that
            week.{" "}
            <Link to="/what-is-emdr" className="text-primary underline-offset-4 hover:underline">Read about EMDR here</Link>.
          </p>

          <h2>Trying IFS in Austin</h2>
          <p>
            If any of this sounds like what you've been looking for,{" "}
            <a href="https://care.headway.co/providers/brittany-zientek" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">book a free 15-minute consult</a>{" "}
            or learn about <Link to="/first-therapy-session" className="text-primary underline-offset-4 hover:underline">what to expect in your first session</Link>.
          </p>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
