import { proof } from "lib/content";
import { Container } from "components/container";

export function ProofBar() {
  return (
    <section className="border-y border-border bg-paper">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 sm:py-12 lg:grid-cols-4">
        {proof.map((item) => (
          <div key={item.value}>
            <p className="font-display text-2xl tracking-tight sm:text-3xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
