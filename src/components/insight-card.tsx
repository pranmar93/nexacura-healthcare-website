export function InsightCard() {
  return (
    <article className="rounded-xl bg-paper p-5 shadow-border sm:p-7">
      <p className="kicker text-primary">Insight · tonight</p>
      <h3 className="mt-3 font-display text-2xl leading-snug tracking-tight text-foreground">
        This may indicate a demanding day rather than an acute event.
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        Sustained elevations in stress-related signals and slightly reduced
        recovery capacity. Associated with reduced movement after 15:00 and
        later-than-usual meals.
      </p>
      <dl className="mt-6 grid gap-4 border-t border-border pt-5 sm:grid-cols-3">
        <div>
          <dt className="kicker text-muted-foreground">How sure</dt>
          <dd className="mt-1 text-sm text-foreground">High — these signals agree</dd>
        </div>
        <div>
          <dt className="kicker text-muted-foreground">Evidence</dt>
          <dd className="mt-1 text-sm text-foreground">HRV + RHR + activity, 14 h</dd>
        </div>
        <div>
          <dt className="kicker text-muted-foreground">Next</dt>
          <dd className="mt-1 text-sm text-foreground">
            Protect sleep. No medical action indicated.
          </dd>
        </div>
      </dl>
    </article>
  );
}
