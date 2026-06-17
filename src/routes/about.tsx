import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import brittany from "@/assets/brittany-zientek.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Brittany Zientek, LPC — Haven & Harbor Counseling | Austin Therapist" },
      {
        name: "description",
        content:
          "Meet Brittany Zientek, LPC — a Licensed Professional Counselor in Austin, TX with 8 years of experience supporting clients with anxiety, trauma, PTSD, and relationship concerns.",
      },
      { property: "og:title", content: "About Brittany Zientek, LPC — Haven & Harbor Counseling" },
      { property: "og:description", content: "An Austin-based LPC specializing in anxiety, trauma, and relationship issues." },
      { property: "og:url", content: "https://haven-harbor-counseling.lovable.app/about" },
      { property: "og:image", content: brittany },
    ],
    links: [{ rel: "canonical", href: "https://haven-harbor-counseling.lovable.app/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Brittany Zientek",
          honorificSuffix: "LPC",
          jobTitle: "Licensed Professional Counselor",
          description:
            "Licensed Professional Counselor in Austin, TX with 8 years of experience in trauma, anxiety, PTSD, and relationship concerns. Trained in EMDR, IFS, Trauma-Focused CBT, MBCT, and SFBT.",
          url: "https://haven-harbor-counseling.lovable.app/about",
          image: "https://haven-harbor-counseling.lovable.app/brittany.jpg",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Dallas Baptist University",
          },
          knowsAbout: [
            "EMDR",
            "Internal Family Systems",
            "Trauma-Focused CBT",
            "Christian counseling",
            "Anxiety",
            "PTSD",
            "Complex trauma",
          ],
          worksFor: { "@id": "https://haven-harbor-counseling.lovable.app/#business" },
          sameAs: ["https://care.headway.co/providers/brittany-zientek"],
        }),
      },
    ],
  }),
  component: AboutPage,
});


function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="Brittany Zientek, LPC"
        subtitle="A Licensed Professional Counselor in Austin, Texas — warm, collaborative, and committed to helping you create positive change."
      />

      <section className="container-prose grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src={brittany}
            alt="Headshot of Brittany Zientek, LPC"
            width={1000}
            height={1250}
            loading="lazy"
            className="rounded-3xl object-cover shadow-soft"
          />
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:col-span-7">
          <p>
            Hi, I'm Brittany — a Licensed Professional Counselor based in Austin, Texas with
            8 years of experience. I understand that life can sometimes feel overwhelming, and
            asking for help can feel impossible at times.
          </p>
          <p>
            My approach is warm, collaborative, and tailored to your unique needs and goals.
            I specialize in supporting clients navigating anxiety, trauma, and relationship
            concerns, drawing from a variety of evidence-based approaches to provide
            personalized care.
          </p>
          <p>
            In our first session, we'll spend time getting to know one another and talking
            about what has been going on in your life recently. We'll discuss your goals for
            counseling and work together to develop a plan that feels supportive, meaningful,
            and personalized to you. I'm committed to helping clients gain insight, build
            confidence, and create positive changes that support their overall well-being.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-prose grid gap-10 md:grid-cols-3">
          {[
            { k: "Training", v: "M.A. in Counseling, Dallas Baptist University" },
            { k: "License", v: "Licensed Professional Counselor (Texas)" },
            { k: "Experience", v: "8 years of clinical experience" },
            { k: "Methods", v: "CBT, Trauma-Focused CBT, MBCT, SFBT" },
            { k: "Population", v: "Adolescents & Adults · Individual therapy" },
            { k: "Setting", v: "In-person in East Austin · Virtual across Texas" },
          ].map((d) => (
            <div key={d.k} className="rounded-2xl border border-border/60 bg-card p-6">
              <p className="eyebrow">{d.k}</p>
              <p className="mt-3 font-serif text-xl">{d.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="container-narrow space-y-10">
          <div>
            <p className="eyebrow">Specialties</p>
            <h2 className="display mt-4 text-3xl md:text-4xl">What I help with</h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Top specialties include <strong>anxiety, relationship issues, trauma, and PTSD</strong>.
              I also work with ADHD, depression, OCD, grief and loss, maternal mental health,
              eating disorders, bipolar disorder, panic, stress and anger management, family
              issues, women's issues, and identity concerns.
            </p>
          </div>
          <div>
            <p className="eyebrow">Insurance accepted</p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
              Aetna, Ascension, Carelon Behavioral Health, and Cigna.
            </p>
          </div>
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
