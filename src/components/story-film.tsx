import { useEffect, useState } from "react";
import { cn } from "lib/utils";

const rooms = [
  { name: "Sleep", alone: "5.6 h", note: "A short night" },
  { name: "Rhythm", alone: "81 bpm", note: "Above usual" },
  { name: "Load", alone: "3.4k steps", note: "A heavy day" },
] as const;

const beats = [
  {
    kicker: "How care is built",
    line: "Sleep in one room. Rhythm in another. The warning arrives last.",
  },
  {
    kicker: "How the body works",
    line: "None of it happens alone. The systems were never in separate rooms.",
  },
  {
    kicker: "What we surface",
    line: "One pattern, while there is still time. Someone who can act is listening.",
  },
] as const;

export function StoryFilm() {
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

  const step = reduce ? 2 : beat;
  const joined = step > 0;
  const reading = step > 1;

  return (
    <figure
      className="overflow-hidden rounded-2xl bg-paper shadow-border"
      aria-label="The manifesto, in motion: separate rooms become one pattern, and someone is listening"
    >
      <div className="grid gap-6 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1fr_16rem] lg:items-center">
        <div>
          <div className="grid grid-cols-3 gap-3">
            {rooms.map((room) => (
              <div
                key={room.name}
                className={cn(
                  "rounded-xl border border-border bg-background px-3 py-4 transition-colors duration-500",
                  joined && "border-primary bg-secondary",
                )}
              >
                <p className="kicker text-primary">{room.name}</p>
                <p className="mt-2 font-display text-2xl tracking-tight sm:text-3xl">
                  {room.alone}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{room.note}</p>
              </div>
            ))}
          </div>
          <div
            className={cn(
              "mt-3 h-px bg-border transition-colors duration-500",
              joined && "bg-primary",
            )}
            aria-hidden="true"
          />
          <p className="mt-4 min-h-16 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
            {reading
              ? "Sleep shortened, rhythm rose, and the day got heavier. Read together, this is one pattern — not three alarms. The clinician decides."
              : joined
                ? "The same three signals, now read as one conversation."
                : "Three signals. Three rooms. Nothing connects them."}
          </p>
        </div>
        <div>
          <p className="kicker text-primary">{beats[step].kicker}</p>
          <p className="mt-3 font-display text-2xl leading-snug tracking-tight">
            {beats[step].line}
          </p>
        </div>
      </div>
    </figure>
  );
}
