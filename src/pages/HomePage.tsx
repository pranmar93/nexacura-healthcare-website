import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "components/container";
import { ConversationLoop } from "components/conversation-loop";
import { EarlyAccessForm } from "components/early-access-form";
import { FaqList } from "components/faq-list";
import { EvidencePath } from "components/evidence-path";
import { PhotoStrip } from "components/photo-strip";
import { ProofBar } from "components/proof-bar";
import { SectionHeading } from "components/section-heading";
import { SignalMarquee } from "components/signal-marquee";
import { Button } from "components/ui/button";
import { site } from "lib/content";

export function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <Container className="grid items-start gap-8 pt-10 sm:pt-12 lg:grid-cols-2 lg:gap-10 lg:pt-14">
          <div>
            <p className="kicker text-primary">{site.category}</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-6xl">
              Your body has always been{" "}
              <em className="font-display italic text-primary">speaking.</em>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              {site.promise}
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row">
              <Button asChild size="lg">
                <Link to="/contact">
                  Request early access
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/approach">See how it works</Link>
              </Button>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              {site.covenant}
            </p>
          </div>
          <ConversationLoop />
        </Container>
        <Container className="mt-8 pb-10 sm:mt-10">
          <PhotoStrip />
        </Container>
      </section>

      <ProofBar />
      <SignalMarquee />

      <section className="relative overflow-hidden bg-ink text-primary-foreground">
        <img
          src="/images/lenses.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        <Container className="relative grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-10">
          <SectionHeading
            kicker="The evidence path"
            title="The sentence is short. The path behind it is open."
            lede="The reading above is one line. This is what a clinician can inspect: when each signal moved, which ones moved together, and how sure we are."
            tone="dark"
          />
          <EvidencePath />
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-16">
          <SectionHeading
            kicker="Questions, plainly"
            title="A short briefing"
          />
          <div className="mt-12">
            <FaqList />
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-paper">
        <Container className="grid items-start gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              Request early access
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              Not on the market yet. Leave your interest. We will write when a
              place is ready.
            </p>
          </div>
          <EarlyAccessForm />
        </Container>
      </section>
    </main>
  );
}
