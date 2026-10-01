import { Link } from "react-router-dom";
import { Container } from "components/container";
import { EarlyAccessForm } from "components/early-access-form";
import { FrameImage } from "components/frame-image";
import { AudiencePath } from "components/audience-path";
import { PageIntro } from "components/page-intro";
import { SectionHeading } from "components/section-heading";
import { Button } from "components/ui/button";
import { BaselineDrift } from "components/baseline-drift";
import { buyers, helpCases, site } from "lib/content";

export function SolutionsPage() {
  return (
    <main>
      <PageIntro
        kicker="Who it's for"
        title="Three audiences. One physiological model."
        lede="The same intelligence, three views. The person who wants to understand their health. The clinician they choose to share it with. Research, later. Wellness and remote monitoring today, on the way toward clinical care."
      />

      <Container className="pb-8">
        <AudiencePath />
      </Container>

      <Container className="py-10 sm:py-12">
        <div className="space-y-12">
          {buyers.map((buyer, index) => (
            <article
              key={buyer.id}
              id={buyer.id}
              className="grid gap-6 border-t border-border pt-8 lg:grid-cols-2 lg:items-center lg:gap-10"
            >
              <FrameImage
                src={buyer.image}
                alt={buyer.alt}
                className="aspect-[4/3]"
              />
              <div>
                <p className="kicker text-primary">
                  0{index + 1} · {buyer.kicker}
                </p>
                <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-5xl">
                  {buyer.title}
                </h2>
                <p className="mt-5 font-display text-xl leading-snug italic text-primary sm:text-2xl">
                  {buyer.question}
                </p>
                <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                  {buyer.body}
                </p>
                <ul className="mt-7 space-y-3">
                  {buyer.points.map((point) => (
                    <li
                      key={point}
                      className="border-l-2 border-cyan pl-4 text-sm leading-relaxed text-foreground sm:text-base"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <section className="border-t border-border">
        <Container className="py-12 sm:py-16">
          <SectionHeading
            kicker="How it helps"
            title="The same model, in the situations that matter."
            lede="One physiological model. A different view for the person, the clinician, and — later — research."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {helpCases.map((item) => (
              <article key={item.n} className="overflow-hidden rounded-2xl bg-paper shadow-border">
                {item.n === "02" ? (
                  <BaselineDrift />
                ) : (
                  <img src={item.image} alt={item.alt} className="aspect-[16/10] w-full object-cover" />
                )}
                <div className="p-6">
                  <p className="kicker text-primary">{item.n}</p>
                  <h3 className="mt-3 font-display text-2xl leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-paper">
        <Container className="max-w-3xl py-12 sm:py-16">
          <SectionHeading
            title="The person, then the clinician."
            lede="The reading starts with the individual. The clinician sees the same evidence and decides. Research across many people comes only after that."
          />
          <div className="mt-8">
            <Button asChild>
              <Link to="/contact">Talk to the founder</Link>
            </Button>
          </div>
          <div className="mt-10">
            <EarlyAccessForm />
          </div>
          <p className="mt-6 text-xs text-muted-foreground">{site.legal}</p>
        </Container>
      </section>
    </main>
  );
}
