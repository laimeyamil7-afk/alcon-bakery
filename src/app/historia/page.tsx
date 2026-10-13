import { siteConfig } from "@/content/site.config";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Historia",
  description:
    "Brian Alcon, campeón nacional de medialuna FITHEP 2024, de la proveeduría a 16 cafeterías y el local en Caballito.",
  path: "/historia",
});

export default function HistoriaPage() {
  return (
    <Section
      className="page-top-spacing !pt-[5.25rem] sm:!pt-[5.75rem]"
      eyebrow="Origen"
      title="De la escuela a la proveeduría"
    >
      <div className="max-w-3xl space-y-4 leading-relaxed text-espresso/75">
        <p>
          Brian Alcon creció en Villa Soldati y empezó a hornear de adolescente: budines, donas y
          ventas en el recreo. Esa curiosidad lo llevó a estudiar gastronomía y a especializarse
          en pastelería y laminados.
        </p>
        <p>
          En 2024 ganó el{" "}
          <strong>{siteConfig.stats.awardTitle}</strong>, consolidando la receta de medialuna de
          manteca que hoy es el corazón del negocio. Antes de abrir el local en Caballito, ya
          producía en solitario para más de una docena de cafeterías de especialidad.
        </p>
        <p>
          Hoy Alcon Bakery concentra tres frentes:{" "}
          <strong>proveeduría</strong> para {siteConfig.stats.wholesaleClients} clientes,{" "}
          <strong>cafetería</strong> en {siteConfig.address.street} y{" "}
          <strong>cursos</strong> de laminados para quienes quieren aprender la técnica en serio.
        </p>
        <p>
          Materia prima cuidada, fermentaciones lentas y producción artesanal — de a una tanda
          seria, no de volumen industrial disfrazado.
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
        <Button
          href={siteConfig.links.fithepArticle}
          external
          variant="outline"
          className="w-full min-[480px]:w-auto"
        >
          Leer entrevista
        </Button>
        <Button href="/proveeduria" className="w-full min-[480px]:w-auto">
          Pedido proveeduría
        </Button>
      </div>
    </Section>
  );
}
