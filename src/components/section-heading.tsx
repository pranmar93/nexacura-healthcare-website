import type { ReactNode } from "react";
import { cn } from "lib/utils";

export function SectionHeading({
  kicker,
  title,
  lede,
  align = "left",
  tone = "light",
}: {
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {kicker ? (
        <p
          className={cn(
            "kicker",
            tone === "dark" ? "text-ice" : "text-primary",
          )}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl leading-tight tracking-tight sm:text-5xl",
          kicker && "mt-4",
          tone === "dark" ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-mist" : "text-ink-soft",
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
