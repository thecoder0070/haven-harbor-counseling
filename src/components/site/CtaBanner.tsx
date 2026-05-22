import { Link } from "@tanstack/react-router";

export function CtaBanner() {
  return (
    <section className="container-prose py-24">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground md:px-16 md:py-20">
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
            Take the first step
          </p>
          <h2 className="display mt-4 text-4xl text-primary-foreground md:text-5xl">
            You don't have to carry it alone.
          </h2>
          <p className="mt-5 text-primary-foreground/85">
            Schedule a free 15-minute consultation to see if Haven &amp; Harbor is the right fit.
            No pressure, no commitment — just a conversation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/schedule"
              className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink shadow-lift transition hover:bg-cream-deep"
            >
              Book a Free Consult
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
        <div
          aria-hidden
          className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-sage/40 blur-3xl"
        />
      </div>
    </section>
  );
}
