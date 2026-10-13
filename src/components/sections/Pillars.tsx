import { Section } from "@/components/ui/Section";

const pillars = [
  {
    title: "Proveeduría",
    description:
      "Facturas, laminados y pastelería para cafeterías de especialidad. Pedidos por formulario y confirmación por WhatsApp.",
    href: "/proveeduria",
    cta: "Armar pedido",
  },
  {
    title: "Cafetería",
    description:
      "Medialuna XL, café de especialidad y laminados en Río de Janeiro y Ángel Gallardo.",
    href: "/cafeteria",
    cta: "Ver menú",
  },
  {
    title: "Cursos",
    description:
      "Técnicas de laminado con Brian Alcon. Cupos limitados — inscripción por WhatsApp.",
    href: "/cursos",
    cta: "Consultar cupo",
  },
];

export function Pillars() {
  return (
    <Section
      eyebrow="Tres formas de conocernos"
      title="Proveeduría, mostrador y aula"
      description="Mismo estándar de producto: producción artesanal, materia prima cuidada y fermentaciones lentas."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-2xl border border-brand/10 bg-white p-6 shadow-sm shadow-brand/5"
          >
            <h3 className="font-display text-xl font-semibold text-brand-dark">{p.title}</h3>
            <p className="mt-3 flex-1 text-base leading-relaxed text-espresso/70">
              {p.description}
            </p>
            <a
              href={p.href}
              className="mt-6 text-sm font-semibold text-brand underline-offset-4 hover:underline"
            >
              {p.cta} →
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
