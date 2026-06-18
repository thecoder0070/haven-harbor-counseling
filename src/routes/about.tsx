import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import brittany from "@/assets/brittany-zientek.jpg";

const URL = "https://haven-harbor-counseling.lovable.app/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Brittany Zientek, LPC | Trauma Therapist in Austin, TX" },
      {
        name: "description",
        content:
          "Brittany Zientek is a Licensed Professional Counselor in Austin specializing in trauma, anxiety, and Christian counseling. EMDR, IFS, and Trauma-Focused CBT.",
      },
      { property: "og:title", content: "About Brittany Zientek, LPC | Haven & Harbor Counseling" },
      { property: "og:description", content: "An Austin-based LPC specializing in trauma, anxiety, and Christian counseling." },
      { property: "og:url", content: URL },
      { property: "og:image", content: brittany },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Brittany Zientek, LPC",
          jobTitle: "Licensed Professional Counselor",
          description:
            "Licensed Professional Counselor in Austin, TX specializing in trauma, anxiety, and Christian counseling. Trained in EMDR, IFS, and Trauma-Focused CBT.",
          image: "https://haven-harbor-counseling.lovable.app/brittany.jpg",
          url: URL,
          worksFor: { "@type": "Organization", name: "Haven & Harbor Counseling" },
          hasCredential: [
            {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "License",
              name: "Licensed Professional Counselor (LPC) - State of Texas",
            },
          ],
          alumniOf: [{ "@type": "EducationalOrganization", name: "Dallas Baptist University" }],
          knowsAbout: [
            "Trauma Therapy",
            "PTSD Treatment",
            "Complex PTSD",
            "EMDR",
            "Internal Family Systems",
            "Christian Counseling",
            "Religious Trauma",
            "Anxiety Therapy",
          ],
          sameAs: ["https://care.headway.co/providers/brittany-zientek"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://haven-harbor-counseling.lovable.app" },
            { "@type": "ListItem", position: 2, name: "About", item: URL },
          ],
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
        subtitle="Trauma therapist · Anxiety counselor · Christian therapist · Austin, TX"
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
            I'm Brittany — a Licensed Professional Counselor in Texas with eight years of clinical
            experience supporting adults through trauma, anxiety, and the deeper questions that
            bring people to therapy.
          </p>
          <p>
            I founded Haven &amp; Harbor because I wanted to build a small, intentional practice
            where the work could be unhurried, where clients didn't feel rushed through their own
            healing, and where faith could be welcome when wanted — and quietly held when not. The
            practice has grown around that intention.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-prose">
          <p className="eyebrow">My approach</p>
          <h2 className="display mt-4 text-4xl">Three commitments shape everything I do.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                k: "Unhurried",
                v: "Trauma cannot be rushed. Anxiety quiets when the nervous system feels safe, not when it's pressured. I work at your pace. You decide what to share and when.",
              },
              {
                k: "Integrative",
                v: "I draw on EMDR, IFS, Trauma-Focused CBT, CBT, MBCT, and SFBT depending on what your nervous system needs. The right combination matters more than dogmatic adherence to one school.",
              },
              {
                k: "Faith-friendly",
                v: "I'm a Christian, and many of my clients share that frame. The integration is real, not bolted on. But you set the spiritual temperature of every session, and many of my clients are not Christian.",
              },
            ].map((d) => (
              <div key={d.k} className="rounded-2xl border border-border/60 bg-card p-7">
                <p className="eyebrow">{d.k}</p>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">{d.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="container-narrow space-y-12">
          <div>
            <p className="eyebrow">Training and credentials</p>
            <ul className="mt-5 space-y-2 text-base leading-relaxed text-foreground/80">
              <li>• Licensed Professional Counselor (LPC) in the State of Texas — License number [to be added]</li>
              <li>• Master's degree in counseling — Dallas Baptist University</li>
              <li>• EMDR-trained</li>
              <li>• IFS-trained</li>
              <li>• Trauma-Focused CBT</li>
              <li>• Continuing education in CBT, MBCT, and Solution-Focused Brief Therapy</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">What I work with most</p>
            <ul className="mt-5 grid gap-2 text-base text-foreground/80 md:grid-cols-2">
              <li>• PTSD and complex trauma</li>
              <li>• Religious trauma and church hurt</li>
              <li>• Anxiety, panic, and high-functioning worry</li>
              <li>• Grief and complicated loss</li>
              <li>• Christian clients integrating faith into the work</li>
              <li>• Adults in seasons of transition or deconstruction</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">What I don't work with</p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              To protect the quality of care, there are areas I refer out:
            </p>
            <ul className="mt-3 space-y-2 text-base text-foreground/80">
              <li>• Couples therapy (I refer to trusted Austin couples therapists)</li>
              <li>• Children and adolescents</li>
              <li>• Active substance-use disorder requiring specialized treatment</li>
              <li>• Severe eating disorders requiring medical oversight</li>
              <li>• Acute crises requiring inpatient care</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              If you reach out with one of these, I'll do my best to point you to someone in
              Austin who can help.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
