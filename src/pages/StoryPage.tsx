import { Container } from "components/container";
import { FrameImage } from "components/frame-image";
import { StoryFilm } from "components/story-film";
import { PageIntro } from "components/page-intro";
import { SectionHeading } from "components/section-heading";
import { advisors, builders, founder, manifesto, site, thesis } from "lib/content";

function Linkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.6 4.8 6.1V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-4V8.5z" />
    </svg>
  );
}

export function StoryPage() {
  return (
    <main>
      <PageIntro
        kicker="Story"
        title="The body has always been telling the full story."
        lede={`${site.legal} starts as wellness and remote monitoring, on the way toward clinical care. The discipline is already in the work: a reading you can trace, and a clinician who decides.`}
      />

      <Container className="pb-8">
        <StoryFilm />
      </Container>

      <Container className="max-w-3xl pb-24">
        <p className="kicker text-primary">Manifesto</p>
        <div className="mt-8 space-y-7">
          {manifesto.map((part) => (
            <div key={part.means}>
              <p className="text-sm font-medium text-primary">{part.means}</p>
              <p className="mt-2 font-display text-xl leading-relaxed tracking-tight text-foreground sm:text-2xl">
                {part.text}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 font-display text-2xl italic leading-snug text-primary sm:text-3xl">
          Your body has always been speaking.
          <br />
          We make sure someone is always listening.
        </p>
      </Container>

      <section className="border-y border-border bg-paper">
        <Container className="max-w-3xl py-10 sm:py-12">
          <p className="kicker text-primary">Brand thesis</p>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            {thesis}
          </p>
        </Container>
      </section>

      <Container className="grid items-start gap-12 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            kicker="Origin"
            title="Two rooms. One conviction."
            lede={`${site.legal} was not founded on a whiteboard. It was founded in a hospital room, in a grieving family, and in years of quiet observation. Signals existed. No one connected them. Later, isolation made a second lesson unavoidable: disease never travels alone. Loneliness, stress, and biology answer one another.`}
          />
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            The human body is not a collection of isolated systems. It has
            never been. We have just built a healthcare system that treats it
            as if it is. The mission, stripped of technology: no human being
            should face their own body as a mystery, and no human being should
            face their health alone.
          </p>
        </div>
        <FrameImage
          src="/images/harbor.jpg"
          alt="Harbour and glass buildings at blue hour"
          className="aspect-[4/3]"
        />
      </Container>

      <section className="bg-ink text-primary-foreground">
        <Container className="py-12 sm:py-16">
          <SectionHeading
            kicker="People"
            title="One founder. Advisors. A team that builds."
            lede="Advisors advise. The founder decides. The team builds."
            tone="dark"
          />

          <article className="mt-14 grid items-center gap-8 md:grid-cols-[16rem_1fr] md:gap-12">
            <img
              src={founder.image}
              alt={founder.name}
              className="aspect-[3/4] w-full rounded-2xl object-cover object-top"
            />
            <div>
              <p className="kicker text-mist">Founder</p>
              <h3 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">{founder.name}</h3>
              <p className="mt-2 text-sm text-mist">{founder.role}</p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-mist sm:text-base">{founder.bio}</p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm text-primary-foreground underline-offset-4 hover:underline"
              >
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            </div>
          </article>

          <div className="mt-16">
            <p className="kicker text-mist">Advisors</p>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              {advisors.map((person) => (
                <article key={person.name} className="grid items-start gap-5 sm:grid-cols-[9rem_1fr]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full rounded-2xl object-contain"
                  />
                  <div>
                    <h3 className="font-display text-2xl tracking-tight">{person.name}</h3>
                    <p className="mt-2 text-sm text-mist">{person.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-mist sm:text-base">{person.bio}</p>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-primary-foreground underline-offset-4 hover:underline"
                    >
                      <Linkedin className="size-4" />
                      LinkedIn
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <p className="kicker text-mist">Team</p>
            <div className="mt-8 max-w-3xl">
              {builders.map((person) => (
                <article key={person.name} className="grid items-center gap-6 sm:grid-cols-[11rem_1fr] mt-6">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="aspect-[3/4] w-full rounded-2xl object-cover object-top"
                  />
                  <div>
                    <h3 className="font-display text-2xl tracking-tight">{person.name}</h3>
                    <p className="mt-2 text-sm text-mist">{person.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-mist sm:text-base">{person.bio}</p>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-primary-foreground underline-offset-4 hover:underline"
                    >
                      <Linkedin className="size-4" />
                      LinkedIn
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Container className="max-w-3xl py-12 sm:py-16">
        <blockquote className="font-display text-3xl leading-snug tracking-tight text-foreground sm:text-4xl">
          “No human being should ever face their own body as a mystery. And no
          human being should ever face their health alone.”
        </blockquote>
      </Container>
    </main>
  );
}
