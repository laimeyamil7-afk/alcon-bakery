import { Section } from "@/components/ui/Section";

/** Placeholders — reemplazar con capturas reales de clientes */
const quotes = [
  "«Tremenda la box! Probamos muy poco aún pero está buenísimo.»",
  "«La medialuna completamente imperdible, para llevarse la docena.»",
  "«Riquísimo y hermoso!!!!»",
  "«Qué lindo el box! Mis felicitaciones por la atención y la rapidez.»",
  "«El laminado es excelente. El café también muy rico.»",
  "«Superan a lo que probamos en otras cadenas — grandes y riquísimas.»",
];

export function Testimonials() {
  return (
    <Section
      eyebrow="Lo que nos escriben"
      title="Mensajes de clientes"
      description="Textos de referencia hasta sumar capturas de Instagram y WhatsApp."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quotes.map((q, i) => (
          <li
            key={i}
            className="rounded-2xl border border-brand/10 bg-brand-light/40 px-5 py-4 text-base leading-relaxed text-espresso/80"
          >
            {q}
          </li>
        ))}
      </ul>
    </Section>
  );
}
