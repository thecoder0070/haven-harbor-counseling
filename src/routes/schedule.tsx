import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Calendar, ClipboardList, ShieldCheck, Clock } from "lucide-react";
import { SCHEDULE_URL, INTAKE_URL, SCHEDULE_IS_PLACEHOLDER, INTAKE_IS_PLACEHOLDER } from "@/lib/booking";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule a Consult — Haven & Harbor Counseling | Austin, TX" },
      { name: "description", content: "Book a free 15-minute consultation with an Austin trauma & Christian therapist. HIPAA-secure online scheduling and intake." },
      { property: "og:title", content: "Schedule a Consult — Haven & Harbor Counseling" },
      { property: "og:description", content: "Book online with an Austin trauma & Christian therapist." },
      { property: "og:url", content: "https://haven-harbor-counseling.lovable.app/schedule" },
    ],
    links: [{ rel: "canonical", href: "https://haven-harbor-counseling.lovable.app/schedule" }],
  }),
  component: SchedulePage,
});

function ExternalButton({ href, primary, children, disabled }: { href: string; primary?: boolean; children: React.ReactNode; disabled?: boolean }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition";
  const cls = primary
    ? `${base} bg-primary text-primary-foreground shadow-lift hover:bg-primary/90`
    : `${base} border border-border bg-card text-foreground hover:bg-muted`;
  if (disabled) {
    return (
      <span className={`${cls} cursor-not-allowed opacity-60`} aria-disabled>
        {children}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  );
}

function SchedulePage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Schedule"
        title="Book your free 15-minute consult."
        subtitle="A short, no-pressure call to see if we're the right fit. If we are, we'll schedule your first session together."
      />

      <section className="container-prose py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-soft md:p-10">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Calendar className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-serif text-2xl">Book a free consult</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              15 minutes by phone or video. We'll talk about what's bringing you in and whether
              we're a good fit. No commitment — just a conversation.
            </p>
            <div className="mt-7">
              <ExternalButton href={SCHEDULE_URL} primary disabled={SCHEDULE_IS_PLACEHOLDER}>
                {SCHEDULE_IS_PLACEHOLDER ? "Coming soon" : "Open scheduler"}
              </ExternalButton>
            </div>
            {SCHEDULE_IS_PLACEHOLDER && (
              <p className="mt-4 text-xs text-muted-foreground">
                Online booking is being set up. In the meantime, <Link to="/contact" className="text-primary underline-offset-4 hover:underline">send a note</Link>.
              </p>
            )}
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-soft md:p-10">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <ClipboardList className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-serif text-2xl">Start the intake form</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Already scheduled? Complete the secure, HIPAA-compliant intake paperwork before
              your first session — it makes our first hour together count.
            </p>
            <div className="mt-7">
              <ExternalButton href={INTAKE_URL} disabled={INTAKE_IS_PLACEHOLDER}>
                {INTAKE_IS_PLACEHOLDER ? "Coming soon" : "Open intake form"}
              </ExternalButton>
            </div>
            {INTAKE_IS_PLACEHOLDER && (
              <p className="mt-4 text-xs text-muted-foreground">
                Intake portal is being finalized. You'll receive a secure link after your consult.
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-6 rounded-3xl bg-secondary/50 p-8 md:grid-cols-3 md:p-10">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold">HIPAA-secure</p>
              <p className="mt-1 text-sm text-muted-foreground">All scheduling and intake happen through an encrypted, HIPAA-compliant client portal.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold">Quick response</p>
              <p className="mt-1 text-sm text-muted-foreground">Most consult requests get a reply within two business days.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Calendar className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold">In-person & telehealth</p>
              <p className="mt-1 text-sm text-muted-foreground">Sessions available at the Austin office or online anywhere in Texas.</p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Questions before you book? Read about <Link to="/cost-of-therapy-austin" className="text-primary underline-offset-4 hover:underline">cost & insurance</Link>,{" "}
          <Link to="/first-therapy-session" className="text-primary underline-offset-4 hover:underline">what to expect in your first session</Link>, or{" "}
          <Link to="/contact" className="text-primary underline-offset-4 hover:underline">send a note</Link>.
        </p>
      </section>
    </SiteLayout>
  );
}
