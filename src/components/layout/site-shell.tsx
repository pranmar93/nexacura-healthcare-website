import type { ReactNode } from "react";
import { SiteFooter } from "components/layout/site-footer";
import { SiteHeader } from "components/layout/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <div id="main" className="flex-1">
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}
