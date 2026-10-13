import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Privacidad",
  description: "Política de privacidad simple para formularios de Alcon Bakery.",
  path: "/privacidad",
});

export default function PrivacidadPage() {
  return (
    <Section className="page-top-spacing !pt-[5.25rem] sm:!pt-[5.75rem]" title="Privacidad">
      <div className="max-w-2xl space-y-4 leading-relaxed text-espresso/75">
        <p>
          Los formularios de pedido de proveeduría e inscripción a cursos no guardan datos en servidores
          propios: al enviar, se abre WhatsApp con el texto que completaste para que puedas
          revisarlo antes de mandarlo.
        </p>
        <p>
          Si en el futuro agregamos analítica o cookies de medición, actualizaremos esta página y
          te daremos opción de gestionarlas.
        </p>
      </div>
    </Section>
  );
}
