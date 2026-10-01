const views = [
  {
    src: "/images/home.jpg",
    label: "The person",
    note: "Understands their own health",
  },
  {
    src: "/images/consult.jpg",
    label: "The clinician",
    note: "Sees it only when shared",
  },
  {
    src: "/images/lab.jpg",
    label: "Research, later",
    note: "Many people, after that",
  },
] as const;

export function AudiencePath() {
  return (
    <figure
      className="overflow-hidden rounded-2xl border border-border bg-paper shadow-border"
      aria-label="Three views of the same intelligence: the person, the clinician they share with, and research later"
    >
      <div className="grid grid-cols-3">
        {views.map((view, index) => (
          <div
            key={view.label}
            className={index > 0 ? "border-l border-border" : undefined}
          >
            <img
              src={view.src}
              alt=""
              className="aspect-[3/4] w-full object-cover sm:aspect-[4/5]"
            />
            <div className="px-2 py-3 text-center sm:px-4 sm:py-4 sm:text-left">
              <p className="text-xs font-medium tracking-tight sm:text-sm">{view.label}</p>
              <p className="mt-1 hidden text-xs leading-relaxed text-muted-foreground sm:block">
                {view.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}
