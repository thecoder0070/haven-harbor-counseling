import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Heart, Compass, Anchor, Sparkles, Quote } from "lucide-react";
import hero from "@/assets/hero-harbor.jpg";
import journal from "@/assets/journal.jpg";
import office from "@/assets/office.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Haven & Harbor Counseling — Austin Trauma Therapy" },
      {
        name: "description",
        content:
          "Compassionate, trauma-informed counseling in Austin, Texas. Faith-friendly therapy for individuals navigating trauma, anxiety, grief, and life transitions.",
      },
      { property: "og:title", content: "Haven & Harbor Counseling — Austin, TX" },
      { property: "og:description", content: "Trauma-informed, faith-friendly therapy in Austin, Texas." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: hero },
      { property: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-prose grid items-center gap-12 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow">Austin, Texas · Trauma-Informed Therapy</p>
            <h1 className="display mt-5 text-5xl md:text-6xl lg:text-7xl">
              A safe harbor for healing.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Haven &amp; Harbor Counseling offers gentle, evidence-based therapy for people
              carrying the weight of trauma, anxiety, and hard seasons — with space for faith
              when you want it.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/schedule"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition hover:bg-primary/90"
              >
                Book a Free Consult
              </Link>
              <Link
                to="/approach"
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                Our Approach
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
              <span>Trauma-Informed</span>
              <span className="text-sage">•</span>
              <span>Faith-Friendly</span>
              <span className="text-sage">•</span>
              <span>In-Person &amp; Telehealth</span>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={hero}
                alt="Calm watercolor harbor at golden hour evoking peace and refuge"
                width={1600}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-2xl bg-card p-5 shadow-lift md:block">
              <div className="flex items-center gap-3">
                <Anchor className="h-5 w-5 text-primary" />
                <p className="font-serif text-lg">Steady ground</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Therapy that meets you where you are — and walks alongside you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="container-prose py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Welcome</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              You're carrying more than most people see.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80 md:col-span-7">
            <p>
              Maybe you've held it together for a long time. Maybe the past keeps surfacing in
              ways you didn't expect — in your relationships, your body, your faith. Maybe you're
              just tired.
            </p>
            <p>
              Whatever brought you here, you don't have to keep doing this alone. Haven &amp;
              Harbor is a small, intentional practice in Austin where you can slow down, be
              honest, and begin to heal.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="bg-secondary/40 py-24">
        <div className="container-prose">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow">How I can help</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">Specialties</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Trauma & PTSD",
                body: "Childhood wounds, single-incident trauma, complex PTSD, and the quiet kind that's hard to name.",
              },
              {
                icon: Compass,
                title: "Anxiety & Overwhelm",
                body: "When your mind won't slow down — chronic worry, panic, perfectionism, and the weight of always being 'on.'",
              },
              {
                icon: Sparkles,
                title: "Faith & Identity",
                body: "Spiritual hurt, deconstruction, and integrating faith with the rest of who you are — at your own pace.",
              },
            ].map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl border border-border/60 bg-card p-8 transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/services" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* THERAPIST INTRO */}
      <section className="container-prose py-24">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="relative md:col-span-5">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={office}
                alt="Warm, sunlit Austin counseling office with linen armchairs"
                width={1400}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow">Meet your therapist</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              Warm, honest, and steady.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              I'm a licensed counselor in Austin who specializes in trauma. My work is rooted in
              evidence-based modalities — and shaped by a deep respect for each person's story,
              body, and beliefs. For clients who want it, I integrate Christian faith with care
              and gentleness; for those who don't, the work is just as welcoming.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:bg-muted"
            >
              About the practice
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-primary/[0.06] py-24">
        <div className="container-narrow text-center">
          <Quote className="mx-auto h-8 w-8 text-primary" />
          <blockquote className="display mt-6 text-3xl leading-snug md:text-4xl">
            "He leads me beside still waters; he restores my soul."
          </blockquote>
          <p className="mt-5 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Psalm 23
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-prose py-24">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow">What to expect</p>
          <h2 className="display mt-4 text-4xl md:text-5xl">Starting is simple.</h2>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Reach out", b: "Send a short note through the contact page. I'll get back within two business days." },
            { n: "02", t: "Free 15-min consult", b: "A no-pressure call to see if we're a good fit — and answer your questions." },
            { n: "03", t: "Your first session", b: "We'll go at your pace. No need to have it figured out before you walk in." },
          ].map((step) => (
            <li key={step.n} className="rounded-2xl border border-border/60 bg-card p-8">
              <span className="font-serif text-3xl text-sage-deep">{step.n}</span>
              <h3 className="mt-3 font-serif text-2xl">{step.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.b}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* RESOURCES TEASER */}
      <section className="container-prose pb-8">
        <div className="grid items-center gap-10 rounded-3xl bg-secondary/60 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="eyebrow">Resources</p>
            <h3 className="display mt-3 text-3xl md:text-4xl">
              Reflections on trauma, faith, and slow healing.
            </h3>
            <p className="mt-4 text-muted-foreground">
              Short, honest writings to help you think through what you're carrying — written for
              real life, not the waiting room.
            </p>
            <Link
              to="/resources"
              className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Read the journal
            </Link>
          </div>
          <img
            src={journal}
            alt="Open book and tea on warm linen"
            width={1200}
            height={900}
            loading="lazy"
            className="h-64 w-full rounded-2xl object-cover md:h-80"
          />
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
