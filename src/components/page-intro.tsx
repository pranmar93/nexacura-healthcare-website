export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="mx-auto max-w-3xl px-5 pb-8 pt-10 text-center sm:px-8 sm:pb-10 sm:pt-14">
      <p className="kicker text-primary">{kicker}</p>
      <h1 className="mt-5 font-display text-4xl leading-[1.1] tracking-tight text-foreground sm:text-6xl">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {lede}
      </p>
    </header>
  );
}
