import { useEffect, useState } from "react";
import { cn } from "lib/utils";

const beats = [
  {
    src: "/images/pipeline-devices.png",
    line: "ECG, a ring, and later CGM enter one pipeline.",
  },
  {
    src: "/images/pipeline-funnel.png",
    line: "In that pipeline, the signals sync and are prepared.",
  },
  {
    src: "/images/pipeline-sphere.png",
    line: "Correlation is the brain.",
  },
  {
    src: "/images/pipeline-clinician.png",
    line: "AI Assist carries the full picture to the clinician dashboard.",
  },
] as const;

export function SignalPath() {
  const [beat, setBeat] = useState(0);
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
      setBeat((current) => (current + 1) % beats.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduce]);

  const step = reduce ? 0 : beat;
  const frame = beats[step];

  return (
    <figure
      className="overflow-hidden rounded-2xl border border-border bg-paper shadow-border"
      aria-label="The path from signal to clinician: ECG, a ring, and later CGM enter one pipeline. Correlation is the brain. AI Assist carries the full picture to the clinician dashboard."
    >
      <div className="grid items-center gap-2 sm:grid-cols-[12rem_1fr] sm:gap-6 sm:pr-8">
        <img
          src={frame.src}
          alt=""
          className="mx-auto aspect-square w-full max-w-48 object-contain sm:max-w-none"
        />
        <div className="px-5 pb-5 sm:px-0 sm:py-6">
          <p className="font-display text-2xl leading-snug tracking-tight sm:text-3xl">
            {frame.line}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Wellness and remote monitoring today, on the way toward clinical care.
          </p>
          <div className="mt-4 flex gap-1.5" aria-hidden="true">
            {beats.map((item, index) => (
              <span
                key={item.src}
                className={cn(
                  "h-1.5 w-6 rounded-full bg-border",
                  index === step && "bg-primary",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}
