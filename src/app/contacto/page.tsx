import { siteConfig } from "@/content/site.config";
import { buildWhatsAppUrl } from "@/lib/whatsapp/build-url";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Contacto",
  description: "WhatsApp, Instagram, email y dirección de Alcon Bakery en Caballito, CABA.",
  path: "/contacto",
});

export default function ContactoPage() {
  const wa = buildWhatsAppUrl("Hola Alcon Bakery, quiero hacer una consulta.");
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address.mapsQuery)}&output=embed`;

  return (
    <>
      <Section
        className="page-top-spacing !pt-[5.25rem] sm:!pt-[5.75rem]"
        eyebrow="Contacto"
        title="Escribinos"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-espresso/75">
            <p>
              Para pedidos de proveeduría usá el{" "}
              <a href="/proveeduria" className="font-medium text-brand underline">
                formulario de proveeduría
              </a>
              . Para el local, menú online en Fudo.
            </p>
            <ul className="space-y-3">
              <li>
                <span className="font-medium text-espresso">WhatsApp: </span>
                <a href={wa} className="underline" target="_blank" rel="noopener noreferrer">
                  +54 11 2253-6506
                </a>
              </li>
              <li>
                <span className="font-medium text-espresso">Instagram: </span>
                <a
                  href={siteConfig.links.instagram}
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @alconbakery
                </a>
              </li>
              <li>
                <span className="font-medium text-espresso">Email: </span>
                <a href={`mailto:${siteConfig.email}`} className="underline">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="font-medium text-espresso">Dirección: </span>
                {siteConfig.address.street}, {siteConfig.address.corner},{" "}
                {siteConfig.address.neighborhood}, {siteConfig.address.city}
              </li>
            </ul>
            <Button href={wa} external>
              Abrir WhatsApp
            </Button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-espresso/10">
            <iframe
              title="Mapa Alcon Bakery"
              src={mapsEmbed}
              className="aspect-square w-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </>
  );
}
