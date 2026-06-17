import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

interface TestimonialsProps {
  heading?: string;
  eyebrow?: string;
  className?: string;
}

export function Testimonials({
  heading = "What clients say",
  eyebrow = "Testimonials",
  className = "",
}: TestimonialsProps) {
  if (testimonials.length === 0) return null;

  return (
    <section className={`container-prose py-20 ${className}`}>
      <div className="mb-12 max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display mt-4 text-3xl md:text-4xl">{heading}</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 6).map((t, i) => (
          <figure
            key={i}
            className="flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-soft"
          >
            <Quote className="h-5 w-5 text-primary" aria-hidden />
            {typeof t.rating === "number" && (
              <div className="mt-3 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${idx < (t.rating ?? 0) ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>
            )}
            <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/85">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 text-sm text-muted-foreground">
              — {t.author}
              {t.source ? ` · ${t.source}` : ""}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
