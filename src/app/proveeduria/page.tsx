import { Section } from "@/components/ui/Section";
import { WholesaleOrderForm } from "@/features/wholesale/WholesaleOrderFormLazy";
import { wholesaleCategories } from "@/content/wholesale.products";
import { siteConfig } from "@/content/site.config";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Proveeduría",
  description:
    "Pedidos de proveeduría: facturas, laminados y pastelería para cafeterías. Formulario y confirmación por WhatsApp.",
  path: "/proveeduria",
});

export default function ProveeduriaPage() {
  return (
    <>
      <Section
        className="page-top-spacing border-b border-brand/10 bg-white pb-10 !pt-[5.25rem] sm:!pt-[5.75rem]"
        eyebrow="B2B"
        title="Provisión para cafeterías de especialidad"
        description={`Abastecemos ${siteConfig.stats.wholesaleClients} locales con la misma receta campeona de medialuna. Completá el pedido y te confirmamos por WhatsApp.`}
      >
        <ul className="flex flex-wrap gap-2">
          {wholesaleCategories.map((cat) => (
            <li
              key={cat}
              className="rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand-dark"
            >
              {cat}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Formulario de pedido" className="pt-10 pb-24">
        <WholesaleOrderForm />
      </Section>
    </>
  );
}
