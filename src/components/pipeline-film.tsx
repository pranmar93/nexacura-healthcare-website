import { ArrowRight } from "lucide-react";
import { cn } from "lib/utils";

const stages = [
  {
    src: "/images/pipeline-devices.png",
    title: "Data collection",
    note: "ECG, ring, CGM later",
  },
  {
    src: "/images/pipeline-funnel.png",
    title: "Unified pipeline",
    note: "Synced and prepared",
  },
  {
    src: "/images/pipeline-sphere.png",
    title: "Correlation engine",
    note: "The brain",
  },
  {
    src: "/images/pipeline-clinician.png",
    title: "AI Assist",
    note: "Clinician dashboard",
  },
] as const;

export function PipelineFilm({ active = 0 }: { active?: number }) {
  return (
    <figure
      className="overflow-hidden rounded-2xl border border-border bg-background shadow-border"
      aria-label="Looping path: ECG, ring, and CGM enter the unified pipeline, then the correlation engine, then AI Assist on the clinician dashboard"
    >
      <div className="grid grid-cols-4">
        {stages.map((stage, index) => {
          const on = active === index;
          return (
            <div
              key={stage.title}
              className={cn(
                "border-border bg-background transition-colors duration-300",
                index > 0 && "border-l",
                on && "bg-secondary",
              )}
            >
              <div className="relative px-1 pt-2 sm:px-3 sm:pt-4">
                <img
                  src={stage.src}
                  alt=""
                  className="mx-auto aspect-square w-full max-w-56 object-contain"
                />
                {index < stages.length - 1 ? (
                  <span
                    className="absolute top-1/2 right-0 z-10 hidden translate-x-1/2 -translate-y-1/2 text-primary sm:flex"
                    aria-hidden="true"
                  >
                    <ArrowRight className="size-4" />
                  </span>
                ) : null}
              </div>
              <div className="border-t border-border px-1.5 py-3 text-center sm:px-3">
                <p className="text-xs font-medium tracking-tight text-foreground sm:text-sm">
                  {stage.title}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{stage.note}</p>
              </div>
            </div>
          );
        })}
      </div>
    </figure>
  );
}
