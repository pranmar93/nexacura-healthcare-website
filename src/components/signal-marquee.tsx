import { signals } from "lib/content";

export function SignalMarquee() {
  const loop = [...signals, ...signals];
  return (
    <div className="overflow-hidden border-y border-border bg-background">
      <div className="animate-marquee flex items-center gap-10 py-4 pr-10">
        {loop.map((signal, i) => (
          <p
            key={`${signal.label}-${i}`}
            className="flex shrink-0 items-baseline gap-3"
          >
            <span className="kicker text-primary">{signal.hint}</span>
            <span className="font-display text-xl tracking-tight">
              {signal.label}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
