import { Link } from "react-router-dom";
import { Container } from "components/container";
import { EarlyAccessForm } from "components/early-access-form";
import { FrameImage } from "components/frame-image";
import { SignalPath } from "components/signal-path";
import { HowItWorks } from "components/how-it-works";
import { PageIntro } from "components/page-intro";
import { SectionHeading } from "components/section-heading";
import { Button } from "components/ui/button";
import { notThis, site } from "lib/content";

export function ApproachPage() {
  return (
    <main>
      <PageIntro
        kicker="How it works"
        title="From the signal to the clinician."
        lede={`${site.legal} reads the path from signal to clinician. ECG, a ring, and later CGM enter one pipeline. Correlation is the brain. AI Assist carries the full picture to the clinician dashboard. Wellness and remote monitoring today, on the way toward clinical care.`}
      />

      <Container className="pb-6">
        <SignalPath />
      </Container>

      <Container className="pb-8">
        <HowItWorks />
      </Container>

      <Container className="grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-10">
        <FrameImage
          src="/images/tablet.jpg"
          alt="Hands holding a tablet of connected physiological nodes"
          className="aspect-[4/3]"
        />
        <div>
          <p className="kicker text-primary">Onboarding</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-5xl">
            24 hours to a baseline. Not a score.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            The first day is observation, not conclusion. The platform learns
            how this body usually behaves. After those 24 hours, every later
            drift — and the rest of health — is measured against that personal
            baseline. What you see is one reading, not a wall of charts.
          </p>
        </div>
      </Container>

      <section className="bg-ink text-primary-foreground">
        <Container className="py-12 sm:py-16">
          <SectionHeading
            title="What we are not"
            tone="dark"
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {notThis.map((item) => (
              <article key={item.title}>
                <h3 className="font-display text-2xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Container className="max-w-3xl py-12 sm:py-16">
        <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
          Request early access
        </h2>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
          Not on the market yet. Leave your interest. We will write when a
          place is ready.
        </p>
        <div className="mt-10">
          <EarlyAccessForm />
        </div>
        <Button asChild variant="link" className="mt-6">
          <Link to="/story">Read the full story</Link>
        </Button>
      </Container>
    </main>
  );
}
