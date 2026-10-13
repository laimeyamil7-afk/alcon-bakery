import { cn } from "@/lib/cn";
import { Container } from "./Container";

export function Section({
  id,
  className,
  children,
  eyebrow,
  title,
  description,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section id={id} className={cn("py-12 sm:py-16 lg:py-20", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <header className="mb-10 max-w-2xl">
            {eyebrow ? (
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-balance font-display text-2xl font-semibold tracking-tight text-espresso sm:text-3xl lg:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-espresso/70">
                {description}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
