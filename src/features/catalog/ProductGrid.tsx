import { siteConfig } from "@/content/site.config";
import { wholesaleProducts } from "@/content/wholesale.products";
import { formatArs } from "@/lib/format/currency";

export function WholesaleCatalogPreview() {
  const preview = wholesaleProducts.slice(0, 6);

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {preview.map((p) => (
        <li
          key={p.id}
          className="rounded-2xl border border-espresso/10 bg-white p-5 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-brand">
            {p.category}
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold text-espresso">{p.name}</h3>
          <p className="mt-2 text-base text-espresso/65">{p.description}</p>
          {siteConfig.showWholesalePrices && p.wholesalePriceArs ? (
            <p className="mt-3 text-sm font-medium text-espresso">
              Desde {formatArs(p.wholesalePriceArs)}
            </p>
          ) : (
            <p className="mt-3 text-base text-espresso/50">Consultar lista de proveeduría</p>
          )}
        </li>
      ))}
    </ul>
  );
}
