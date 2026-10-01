const path = [
  {
    time: "15:00",
    mark: "Moved",
    title: "Steps drop",
    body: "Activity falls away from this person’s own afternoon.",
  },
  {
    time: "Later",
    mark: "Moved",
    title: "Heart rate rises. HRV falls.",
    body: "Both shift against the 24-hour baseline, and they move with the drop in steps.",
  },
  {
    time: "Night",
    mark: "Moved",
    title: "Sleep comes in short",
    body: "Shorter, and more broken, than that same baseline.",
  },
  {
    time: "Held",
    mark: "Steady",
    title: "These did not join the pattern",
    body: "SpO2, ECG, temperature, and breathing stay near baseline.",
  },
  {
    time: "Tonight",
    mark: "Clinician",
    title: "How sure: high. These signals agree.",
    body: "Protect sleep. No medical action indicated. The clinician decides.",
  },
] as const;

export function EvidencePath() {
  return (
    <figure className="overflow-hidden rounded-2xl bg-paper text-foreground shadow-border">
      <header className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
        <div>
          <p className="text-sm font-medium tracking-tight">Evidence path</p>
          <p className="text-xs text-muted-foreground">Same afternoon · open to inspect</p>
        </div>
        <p className="kicker text-primary">Not a diagnosis</p>
      </header>
      <ol className="px-5 py-2 sm:px-6">
        {path.map((step, index) => {
          const last = index === path.length - 1;
          return (
            <li key={step.time} className="flex gap-3 sm:gap-4">
              <p className="w-16 shrink-0 pt-5 text-right font-mono text-xs tracking-wide text-primary sm:w-20">
                {step.time}
              </p>
              <div
                className={
                  last
                    ? "border-l border-primary py-5 pl-4"
                    : "border-l border-border py-5 pl-4"
                }
              >
                <p className="kicker text-muted-foreground">{step.mark}</p>
                <p className="mt-1 font-display text-xl leading-snug tracking-tight">
                  {step.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
