import { siteConfig } from "@/content/site.config";
import { cafeHighlights } from "@/content/cafe.highlights";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Cafetería",
  description:
    "Cafetería en Caballito: medialuna campeona, laminados y café de especialidad. Menú online en Fudo.",
  path: "/cafeteria",
});

export default function CafeteriaPage() {
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address.mapsQuery)}&output=embed`;

  return (
    <>
      <Section
        className="page-top-spacing border-b border-brand/10 bg-white !pt-[5.25rem] sm:!pt-[5.75rem]"
        eyebrow="Mostrador"
        title="Cafetería en Caballito"
        description="Local chico, calido y atendido por quien hornea. Pedí en el mostrador o desde el menú online."
      >
        <div className="flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
          <Button
            href={siteConfig.links.fudoMenu}
            external
            variant="primary"
            className="w-full min-[480px]:w-auto"
          >
            Ver menú y pedir (Fudo)
          </Button>
          <Button href="/contacto" variant="outline" className="w-full min-[480px]:w-auto">
            Cómo llegar
          </Button>
        </div>
        <p className="mt-6 text-base text-espresso/60">{siteConfig.hours.schedule}</p>
      </Section>

      <Section title="Imperdibles de la carta">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cafeHighlights.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-espresso/10 bg-flour p-5"
            >
              <h3 className="font-display text-lg font-semibold text-espresso">{item.name}</h3>
              <p className="mt-2 text-base text-espresso/70">{item.description}</p>
              {item.priceLabel ? (
                <p className="mt-3 text-xs font-medium text-espresso/50">{item.priceLabel}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="pb-16" title="Ubicación">
        <div className="overflow-hidden rounded-2xl border border-espresso/10">
          <iframe
            title="Mapa Alcon Bakery"
            src={mapsEmbed}
            className="aspect-video w-full min-h-[280px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="mt-4 text-base text-espresso/70">
          {siteConfig.address.street}, {siteConfig.address.corner} —{" "}
          {siteConfig.address.neighborhood}, {siteConfig.address.city}
        </p>
      </Section>
    </>
  );
}
