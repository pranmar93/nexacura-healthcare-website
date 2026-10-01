import { Link } from "react-router-dom";
import { BrandLockup } from "components/logo";
import { nav, site } from "lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="max-w-sm">
          <BrandLockup size="footer" />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {site.legal}. {site.tagline} Wellness and remote monitoring today,
            on the way toward clinical care.
          </p>
        </div>

        <div>
          <p className="kicker text-muted-foreground">Explore</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                to="/"
                className="text-sm text-ink-soft transition-colors duration-150 hover:text-foreground"
              >
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm text-ink-soft transition-colors duration-150 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="kicker text-muted-foreground">{site.legal}</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li>{site.category}</li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors duration-150 hover:text-foreground"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="transition-colors duration-150 hover:text-foreground"
              >
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Not a diagnostic device.</p>
          <p>{site.covenant}</p>
        </div>
      </div>
    </footer>
  );
}
