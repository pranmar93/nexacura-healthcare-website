import { gallery } from "lib/content";

export function PhotoStrip() {
  return (
    <div>
      <div className="max-w-2xl">
        <p className="kicker text-primary">Signals we read</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          Every vital, named.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-ink-soft">
          Heart rate, ECG, sleep, oxygen, breathing, temperature, activity, and
          HRV. Each one is shown as itself — never as a mystery score.
        </p>
      </div>
      <p className="mt-3 text-sm text-muted-foreground lg:hidden">Swipe to see each signal.</p>
      <div className="-mx-5 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-8 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
        {gallery.map((item) => (
          <figure
            key={item.label}
            className="w-[82%] shrink-0 snap-start overflow-hidden rounded-2xl bg-paper shadow-border sm:w-[46%] lg:w-auto"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="aspect-[16/10] w-full object-cover object-center"
            />
            <figcaption className="p-4">
              <p className="font-display text-xl leading-tight tracking-tight">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-primary">{item.value}</p>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft">{item.note}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
