import { cn } from "lib/utils";
import { site } from "lib/content";

const LOCKUP = {
  src: "/logo-lockup.png",
  width: 1355,
  height: 745,
} as const;

export function LogoMark({
  className,
  decorative = true,
}: {
  className?: string;
  decorative?: boolean;
}) {
  return (
    <img
      src="/logo.png"
      alt={decorative ? "" : site.legal}
      width={512}
      height={512}
      className={cn("size-11 shrink-0 object-contain", className)}
    />
  );
}

export function BrandLockup({
  className,
  size = "header",
}: {
  className?: string;
  size?: "header" | "footer" | "hero";
}) {
  return (
    <img
      src={LOCKUP.src}
      alt={site.legal}
      width={LOCKUP.width}
      height={LOCKUP.height}
      className={cn(
        "w-auto shrink-0 object-contain object-left",
        size === "header" && "h-12 sm:h-14",
        size === "footer" && "h-14 sm:h-16",
        size === "hero" && "h-14 sm:h-16",
        className,
      )}
    />
  );
}
