import { Container } from "components/container";
import { EarlyAccessForm } from "components/early-access-form";
import { BrandLockup } from "components/logo";
import { FrameImage } from "components/frame-image";
import { PageIntro } from "components/page-intro";
import { site } from "lib/content";

export function ContactPage() {
  return (
    <main>
      <PageIntro
        kicker="Contact"
        title="Request early access"
        lede="Not on the market yet. Leave your interest, or write about partnership, clinical collaboration, or investment. We will write when a place is ready."
      />

      <Container className="pb-8">
        <FrameImage
          src="/images/contact-banner.jpg"
          alt="An envelope, a pen, and a notebook on a pale table"
          className="aspect-[2400/528] h-auto object-cover"
        />
      </Container>

      <Container className="grid items-start gap-8 pb-16 pt-8 lg:grid-cols-2 lg:gap-10">
        <div className="rounded-2xl bg-paper p-6 shadow-border sm:p-8">
          <h2 className="font-display text-3xl tracking-tight">Request early access</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            One email. Tell us who you are. We will write when a place is ready.
          </p>
          <div className="mt-8">
            <EarlyAccessForm />
          </div>
        </div>

        <aside className="space-y-8">
          <BrandLockup size="hero" className="h-16 sm:h-20" />
          <div>
            <p className="kicker text-muted-foreground">{site.legal}</p>
            <p className="mt-3 font-display text-3xl tracking-tight">
              {site.category}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block text-base text-foreground underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="mt-1 block text-base text-foreground underline-offset-4 hover:underline"
            >
              {site.phone}
            </a>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">People</p>
            <p className="mt-1 text-base">Shivendra Singh — Founder & CEO</p>
          </div>
        </aside>
      </Container>
    </main>
  );
}
