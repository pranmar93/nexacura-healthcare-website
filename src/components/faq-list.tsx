import { faq } from "lib/content";

export function FaqList() {
  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl bg-paper shadow-border">
      {faq.map((item) => (
        <details key={item.q} className="group px-5 py-1 sm:px-7">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-display text-xl tracking-tight text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-lg leading-none text-primary transition-transform duration-150 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="pb-6 pr-12 text-sm leading-relaxed text-ink-soft sm:text-base">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
