import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/what-is-emdr")({
  head: () => ({
    meta: [
      { title: "What is EMDR Therapy? A Plain-English Guide | Austin, TX" },
      { name: "description", content: "EMDR therapy explained: how it works, what a session looks like, what it treats, and how to find an EMDR therapist in Austin, TX." },
      { property: "og:title", content: "What is EMDR Therapy? — Haven & Harbor Counseling" },
      { property: "og:description", content: "An honest, jargon-free explanation of EMDR therapy from an Austin trauma therapist." },
      { property: "og:url", content: "https://haven-harbor-counseling.lovable.app/what-is-emdr" },
    ],
    links: [{ rel: "canonical", href: "https://haven-harbor-counseling.lovable.app/what-is-emdr" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalTherapy",
          name: "EMDR Therapy (Eye Movement Desensitization and Reprocessing)",
          alternateName: "EMDR",
          description: "A structured, evidence-based therapy that helps the brain reprocess traumatic memories so they no longer trigger overwhelming reactions.",
          relevantSpecialty: "Trauma therapy",
        }),
      },
    ],
  }),
  component: EmdrPage,
});

function EmdrPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="EMDR"
        title="What is EMDR therapy?"
        subtitle="A clear, non-clinical explanation of how EMDR works — and what it's actually like in the room."
      />

      <section className="container-prose pb-8">
        <div className="prose-narrow">
          <h2>EMDR in one paragraph</h2>
          <p>
            EMDR stands for <strong>Eye Movement Desensitization and Reprocessing</strong>. It's a
            structured, evidence-based therapy developed in the late 1980s to help the brain
            finish processing traumatic or stuck memories. When something overwhelming happens, the
            memory can get "frozen" with all its original images, body sensations, and beliefs
            ("I'm not safe," "It was my fault"). EMDR helps your brain do what it couldn't do at
            the time — file that memory away as something that <em>happened</em> rather than
            something that's still happening.
          </p>

          <h2>How a session actually works</h2>
          <p>
            EMDR isn't hypnosis and you don't lose control. A typical session looks like this:
          </p>
          <ol>
            <li>You and your therapist pick a target memory or recurring trigger.</li>
            <li>You bring the memory to mind along with the feelings and beliefs that come with it.</li>
            <li>While you hold that in your awareness, your therapist guides you through <strong>bilateral stimulation</strong> — usually side-to-side eye movements, gentle taps, or alternating tones.</li>
            <li>You notice whatever comes up — images, sensations, thoughts — and we keep going in short sets until the memory feels less charged.</li>
            <li>Over time, the brain reorganizes the memory. The facts stay, but the panic, shame, or freeze response calms down.</li>
          </ol>

          <h2>What EMDR helps with</h2>
          <ul>
            <li>Single-incident trauma (car accidents, assaults, medical events)</li>
            <li>Childhood trauma and complex PTSD</li>
            <li>Anxiety and panic with a clear emotional root</li>
            <li>Grief that feels stuck</li>
            <li>Performance anxiety, phobias, and persistent negative self-beliefs</li>
            <li>Birth trauma and pregnancy loss</li>
          </ul>

          <h2>Does EMDR actually work?</h2>
          <p>
            EMDR is one of the most well-researched trauma therapies in the world. It's recommended
            by the World Health Organization, the American Psychiatric Association, and the
            Department of Veterans Affairs as a first-line treatment for PTSD. Many people notice
            meaningful relief within 6–12 sessions of active reprocessing, though complex trauma
            typically takes longer and includes more preparation.
          </p>

          <h2>What EMDR is <em>not</em></h2>
          <ul>
            <li>It's not hypnosis or mind control.</li>
            <li>It's not "watching a light bar fix you" — your brain is doing the work.</li>
            <li>It's not retraumatizing if it's paced well. A good EMDR therapist spends real time on stabilization first.</li>
            <li>It's not a replacement for the relational work of therapy — it works <em>inside</em> a trusting therapy relationship.</li>
          </ul>

          <h2>Can EMDR be integrated with Christian faith?</h2>
          <p>
            Yes. EMDR is a clinical method, not a worldview. For Christian clients who want it, we
            can integrate prayer, scripture, and a felt sense of God's presence into EMDR
            resourcing and reprocessing — without forcing it on anyone who doesn't.{" "}
            <Link to="/christian-counseling-austin" className="text-primary underline-offset-4 hover:underline">More on Christian counseling here</Link>.
          </p>

          <h2>Finding an EMDR therapist in Austin</h2>
          <p>
            Look for a therapist who has completed EMDR training through an EMDRIA-approved
            program and who specializes in trauma rather than treating EMDR as a side offering.
            Haven &amp; Harbor offers EMDR as part of an integrated, trauma-informed approach in
            South Austin and via telehealth across Texas.
          </p>
          <p>
            Curious whether EMDR is the right fit for you?{" "}
            <a href="https://care.headway.co/providers/brittany-zientek" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">Book a free 15-minute consult</a>,{" "}
            read our full{" "}
            <Link to="/trauma-therapy-austin" className="text-primary underline-offset-4 hover:underline">guide to trauma therapy in Austin</Link>,{" "}
            or learn about <Link to="/what-is-ifs-therapy" className="text-primary underline-offset-4 hover:underline">IFS, the other modality we use</Link>.
          </p>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
