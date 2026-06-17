import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="container-narrow text-center">
        <p className="eyebrow">404</p>
        <h1 className="display mt-4 text-5xl">This page wandered off.</h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for isn't here. Let's get you back to safe harbor.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="container-narrow text-center">
        <h1 className="display text-3xl">This page didn't load.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. Please try again.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-2 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "google-site-verification", content: "p83thhUKKyygoMovqYSFfuxwP4ITdbuX6Fsgpov1FU8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#7d9b76" },
      { property: "og:site_name", content: "Haven & Harbor Counseling" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Haven & Harbor Counseling" },
      { property: "og:title", content: "Haven & Harbor Counseling" },
      { name: "twitter:title", content: "Haven & Harbor Counseling" },
      { name: "description", content: "Haven & Harbor Austin offers counseling services for trauma, with a focus on Christian clients." },
      { property: "og:description", content: "Haven & Harbor Austin offers counseling services for trauma, with a focus on Christian clients." },
      { name: "twitter:description", content: "Haven & Harbor Austin offers counseling services for trauma, with a focus on Christian clients." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/As3tevxj29Yaj3OMHYixZlaQ7ct1/social-images/social-1779481632573-Haven_and_harbor_logo.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/As3tevxj29Yaj3OMHYixZlaQ7ct1/social-images/social-1779481632573-Haven_and_harbor_logo.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "@id": "https://haven-harbor-counseling.lovable.app/#business",
          name: "Haven & Harbor Counseling",
          url: "https://haven-harbor-counseling.lovable.app",
          description:
            "Trauma counseling and therapy in Austin, Texas. EMDR, IFS, and Trauma-Focused CBT with Brittany Zientek, LPC.",
          image: [
            "https://storage.googleapis.com/gpt-engineer-file-uploads/As3tevxj29Yaj3OMHYixZlaQ7ct1/social-images/social-1779481632573-Haven_and_harbor_logo.webp",
          ],
          logo: "https://storage.googleapis.com/gpt-engineer-file-uploads/As3tevxj29Yaj3OMHYixZlaQ7ct1/social-images/social-1779481632573-Haven_and_harbor_logo.webp",
          priceRange: "$130–$225",
          medicalSpecialty: "Psychiatric",
          address: {
            "@type": "PostalAddress",
            streetAddress: "6448 E Hwy 290, Ste E108",
            addressLocality: "Austin",
            addressRegion: "TX",
            postalCode: "78723",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 30.3076,
            longitude: -97.6717,
          },
          hasMap:
            "https://www.google.com/maps/search/?api=1&query=Haven+%26+Harbor+Counseling+6448+E+Hwy+290+Austin+TX+78723",
          areaServed: [
            { "@type": "City", name: "Austin" },
            { "@type": "State", name: "Texas" },
          ],
          knowsAbout: [
            "EMDR therapy",
            "Internal Family Systems (IFS) therapy",
            "Trauma-Focused CBT",
            "Trauma and PTSD",
            "Complex trauma",
            "Anxiety therapy",
            "Christian counseling",
            "Faith-integrated therapy",
            "Grief counseling",
          ],
          sameAs: ["https://care.headway.co/providers/brittany-zientek"],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "17:00",
            },
          ],
        }),
      },
    ],

  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
