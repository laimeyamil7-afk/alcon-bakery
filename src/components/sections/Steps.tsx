import { Section } from "@/components/ui/Section";

const steps = [
  {
    n: "01",
    title: "Completás el formulario",
    body: "Elegís productos, cantidades y fecha de entrega. Sin idas y vueltas innecesarias.",
  },
  {
    n: "02",
    title: "WhatsApp confirma",
    body: "Te respondemos con disponibilidad, totales y coordinación logística.",
  },
  {
    n: "03",
    title: "Producción y entrega",
    body: "Horneamos en nuestra producción y entregamos según la fecha acordada.",
  },
];

export function Steps() {
  return (
    <Section
      className="bg-brand-light/30"
      eyebrow="Cómo funciona"
      title="Tres pasos para tu pedido de proveeduría"
      description="Pensado para dueños de cafeterías que necesitan claridad y respuesta rápida."
    >
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n} className="relative pl-14">
            <span className="absolute left-0 top-0 font-display text-3xl font-semibold text-brand/80">
              {s.n}
            </span>
            <h3 className="font-display text-lg font-semibold text-espresso">{s.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-espresso/70">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
