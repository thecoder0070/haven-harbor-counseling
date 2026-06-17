// Testimonials shown on home + money pages and used to drive AggregateRating
// schema in src/routes/__root.tsx.
//
// IMPORTANT — ethics & Google policy:
//   - Only paste REAL quotes from real clients who gave written permission.
//   - Texas LPC ethics: avoid quotes that could identify a client. First-name +
//     last initial, or "Client, Austin" is safer. Pseudonyms are fine if
//     disclosed (e.g. "name changed").
//   - AggregateRating only fires when there are ≥ MIN_REVIEWS_FOR_RATING.
//     Don't fabricate ratings — Google penalizes fake review markup.
//
// To go live: replace the empty array with real entries. The <Testimonials/>
// component auto-hides when empty; rich results turn on automatically once
// you cross the threshold.

export interface Testimonial {
  quote: string;
  author: string;       // e.g. "Sarah M." or "Client, Austin"
  rating?: number;      // 1–5; omit if not collected
  source?: string;      // "Google", "Headway", etc.
  date?: string;        // ISO yyyy-mm-dd
}

export const testimonials: Testimonial[] = [
  // {
  //   quote: "Brittany made me feel safe enough to actually do the hard work.",
  //   author: "Sarah M.",
  //   rating: 5,
  //   source: "Google",
  //   date: "2025-09-12",
  // },
];

export const MIN_REVIEWS_FOR_RATING = 5;

export function aggregateRating() {
  const rated = testimonials.filter((t) => typeof t.rating === "number");
  if (rated.length < MIN_REVIEWS_FOR_RATING) return null;
  const avg = rated.reduce((s, t) => s + (t.rating ?? 0), 0) / rated.length;
  return {
    "@type": "AggregateRating",
    ratingValue: avg.toFixed(1),
    reviewCount: rated.length,
    bestRating: "5",
    worstRating: "1",
  };
}
