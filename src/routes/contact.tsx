import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Haven & Harbor Counseling | Austin Therapist" },
      { name: "description", content: "Reach out to schedule a free 15-minute consultation with an Austin trauma therapist at Haven & Harbor Counseling." },
      { property: "og:title", content: "Contact — Haven & Harbor Counseling" },
      { property: "og:description", content: "Book a free 15-minute consult with an Austin therapist." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Reach out. We'll go from there."
        subtitle="Send a short note — I'll respond within two business days to set up a free 15-minute consult."
      />

      <section className="container-prose -mt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-secondary/40 p-5 text-sm">
          <p className="text-foreground/80">
            Prefer to book directly? Use online scheduling or start the secure intake form.
          </p>
          <div className="flex gap-2">
            <a href="https://care.headway.co/providers/brittany-zientek" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
              Book online
            </a>
            <a href="https://care.headway.co/providers/brittany-zientek" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold">
              Intake form
            </a>
          </div>
        </div>
      </section>


      <section className="container-prose py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            {[
              { icon: Mail, label: "Email", value: "hello@havenandharborcounseling.com" },
              { icon: Phone, label: "Phone", value: "(512) 555-0140" },
              { icon: MapPin, label: "Office", value: "6448 E Hwy 290, Ste E108 · Austin, TX 78723" },
              { icon: Clock, label: "Hours", value: "Mon–Thu · 9am–6pm CT" },
            ].map((it) => (
              <div key={it.label} className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="eyebrow">{it.label}</p>
                  <p className="mt-1 font-serif text-lg">{it.value}</p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-secondary/60 p-6 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">In crisis?</p>
              <p className="mt-2">
                Haven &amp; Harbor isn't a crisis service. If you're in immediate danger, call or
                text <strong>988</strong>, call 911, or go to the nearest ER.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="rounded-3xl border border-border/60 bg-card p-10 text-center">
                <h2 className="display text-3xl">Thank you.</h2>
                <p className="mt-4 text-muted-foreground">
                  Your note made it through. I'll be in touch within two business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-5 rounded-3xl border border-border/60 bg-card p-8 shadow-soft md:p-10"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Phone (optional)" name="phone" type="tel" />
                <div>
                  <label className="block text-sm font-semibold text-foreground">
                    What brings you in?
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="A few sentences is plenty. You don't have to have it figured out."
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-input accent-primary" required />
                  <span>
                    I understand that email isn't fully confidential and that submitting this
                    form doesn't create a therapist–client relationship.
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition hover:bg-primary/90"
                >
                  Send note
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
