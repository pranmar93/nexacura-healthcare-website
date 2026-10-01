import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LogoMark } from "components/logo";
import { Button } from "components/ui/button";
import { nav, site } from "lib/content";
import { cn } from "lib/utils";

export function SiteHeader() {
  const pathname = useLocation().pathname;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between gap-4 px-5 sm:h-28 sm:px-8">
        <Link
          to="/"
          className="flex min-w-0 items-center transition-opacity duration-150 hover:opacity-80"
          aria-label={`${site.legal} home`}
        >
          <LogoMark className="size-14 sm:size-16" />
          <span className="ml-3 font-display text-xl tracking-tight text-foreground sm:text-2xl">
            {site.legal}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-sm tracking-tight text-muted-foreground transition-colors duration-150 hover:text-foreground",
                pathname === item.href && "text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link to="/contact">Request access</Link>
          </Button>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4"
            aria-label="Mobile"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex min-h-11 items-center rounded-md px-3 text-base text-ink-soft",
                  pathname === item.href && "bg-muted text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-3 w-full">
              <Link to="/contact">Request access</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
