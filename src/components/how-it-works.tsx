import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { PipelineFilm } from "components/pipeline-film";
import { steps } from "lib/content";
import { cn } from "lib/utils";

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduce]);

  const focus = reduce ? -1 : active;

  return (
    <div>
      <PipelineFilm active={focus < 0 ? 0 : focus} />
      <ol className="mt-8 grid gap-3 lg:grid-cols-4 lg:gap-4">
        {steps.map((step, index) => {
          const on = focus === index;
          return (
            <li key={step.n} className="relative">
              <article
                className={cn(
                  "h-full rounded-2xl border border-border bg-paper p-5 transition-colors duration-300",
                  on && "border-primary bg-secondary",
                )}
              >
                <p className="kicker text-primary">{step.n}</p>
                <h3 className="mt-3 font-display text-2xl leading-snug tracking-tight">
                  {step.title}
                </h3>
                {step.n === "03" ? (
                  <p className="mt-1 text-xs text-muted-foreground">The brain</p>
                ) : null}
                {step.sources.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {step.sources.map((source) => (
                      <li
                        key={source}
                        className="rounded-full bg-background px-3 py-1 text-xs text-ink-soft"
                      >
                        {source}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </article>
              {index < steps.length - 1 ? (
                <span
                  className="flex justify-center py-1 text-primary lg:absolute lg:top-8 lg:right-0 lg:translate-x-1/2 lg:py-0"
                  aria-hidden="true"
                >
                  <ArrowDown className="size-4 lg:hidden" />
                  <ArrowRight className="hidden size-4 lg:block" />
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        {reduce
          ? "ECG and a ring now. CGM later. One pipeline, then the clinician."
          : `Step ${steps[active].n} of 04 · ${steps[active].title}`}
      </p>
    </div>
  );
}
