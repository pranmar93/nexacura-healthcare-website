import { cn } from "lib/utils";

/** Small geometric Venn — used as a decorative accent, not the official logo. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("size-7", className)}
    >
      <circle cx="12.5" cy="16" r="8.2" fill="var(--color-cyan)" />
      <circle cx="19.5" cy="16" r="8.2" fill="var(--color-primary)" />
      <circle
        cx="19.5"
        cy="16"
        r="8.2"
        fill="#1a5c86"
        clipPath="url(#nexa-left)"
      />
      <defs>
        <clipPath id="nexa-left">
          <circle cx="12.5" cy="16" r="8.2" />
        </clipPath>
      </defs>
    </svg>
  );
}
