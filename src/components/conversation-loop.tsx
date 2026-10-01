import { useEffect, useState } from "react";
import { cn } from "lib/utils";

const vitals = [
  { id: "hr", name: "Heart rate", calm: "68", moved: "81", unit: "bpm" },
  { id: "ecg", name: "ECG", calm: "Sinus", moved: "Sinus", unit: "" },
  { id: "spo2", name: "SpO2", calm: "98", moved: "97", unit: "%" },
  { id: "rr", name: "Resp. rate", calm: "14", moved: "16", unit: "/min" },
  { id: "temp", name: "Temperature", calm: "36.6", moved: "36.8", unit: "°C" },
  { id: "sleep", name: "Sleep", calm: "7.4", moved: "5.6", unit: "h" },
  { id: "act", name: "Activity", calm: "8.1k", moved: "3.4k", unit: "steps" },
  { id: "hrv", name: "HRV", calm: "52", moved: "31", unit: "ms" },
] as const;

const linked = new Set(["hr", "sleep", "act", "hrv"]);

const readout =
  "Heart rate rose from 68 to 81 while HRV fell from 52 to 31 ms. Steps dropped after 15:00, and sleep was 5.6 hours — shorter than this person’s own baseline. SpO2 held at 97%, ECG stayed sinus, and temperature and breathing did not enter a concerning range. Together this reads as a demanding day, not an acute event. Protect sleep tonight. No medical action indicated. The evidence path is open for the clinician.";

const CYCLE = 48;

export function ConversationLoop() {
  const [step, setStep] = useState(30);
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
      setStep((current) => (current + 1) % CYCLE);
    }, 280);
    return () => window.clearInterval(id);
  }, [reduce]);

  const live = reduce ? CYCLE - 1 : step;
  const arrived = live >= 8;
  const correlating = live >= 14;
  const chars = correlating
    ? Math.min(readout.length, (live - 14) * 22)
    : 0;
  const spoken = readout.slice(0, chars);
  const stillWriting = correlating && chars < readout.length;

  return (
    <figure
      className="w-full overflow-hidden rounded-2xl bg-paper text-foreground shadow-border"
      aria-label="Live dashboard: vitals update, correlation runs, and AI Assist reads the situation in plain language"
    >
      <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
        <div>
          <p className="text-sm font-medium tracking-tight">AI Assist</p>
          <p className="text-xs text-muted-foreground">
            One person · this afternoon
          </p>
        </div>
        <p className="kicker text-primary">{arrived ? "Correlating" : "Signals in"}</p>
      </header>

      <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
        {vitals.map((vital, index) => {
          const showMoved = arrived && live >= 8 + index;
          const value = showMoved ? vital.moved : vital.calm;
          const changed = showMoved && vital.calm !== vital.moved;
          const inLink = correlating && linked.has(vital.id);
          return (
            <div
              key={vital.id}
              className={cn(
                "bg-paper px-3 py-3 transition-colors duration-300",
                inLink && "bg-secondary",
              )}
            >
              <p className="kicker text-muted-foreground">{vital.name}</p>
              <p className="mt-1 flex items-baseline gap-1 font-display text-2xl leading-none tracking-tight">
                <span>{value}</span>
                {vital.unit ? (
                  <span className="font-sans text-xs text-muted-foreground">
                    {vital.unit}
                  </span>
                ) : null}
              </p>
              <p className="mt-1 text-xs text-ink-soft">
                {changed ? "Moved from baseline" : "Near baseline"}
              </p>
            </div>
          );
        })}
      </div>

      <div className="border-t border-border px-4 py-3 sm:px-5">
        <p className="kicker text-primary">
          {correlating ? "Correlation" : "Waiting on the window"}
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          {correlating
            ? "Heart rate, HRV, activity, and sleep moved together. SpO2, ECG, temperature, and breathing did not."
            : "Vitals are still arriving. Correlation starts once the afternoon window is in."}
        </p>
      </div>

      <div className="border-t border-border bg-background px-4 py-4 sm:px-5">
        <p className="kicker text-muted-foreground">AI Assist readout</p>
        <p
          className="mt-2 min-h-28 font-display text-lg leading-snug tracking-tight text-foreground"
          aria-live="polite"
        >
          {spoken || "Listening across the vitals before it speaks."}
          {stillWriting ? (
            <span className="ml-0.5 inline-block h-4 w-px bg-primary align-middle" />
          ) : null}
        </p>
      </div>
    </figure>
  );
}
