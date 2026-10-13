import type { WholesaleProduct } from "@/types/product";

/** Catálogo mayorista editable — reemplazar con lista real del obrador */
export const wholesaleProducts: WholesaleProduct[] = [
  {
    id: "medialuna-manteca",
    name: "Medialuna de manteca",
    category: "Facturas",
    description: "Receta campeona nacional. Tamaño estándar para vitrina.",
    units: ["docena", "bandeja"],
    defaultUnit: "docena",
  },
  {
    id: "medialuna-xl",
    name: "Medialuna XL",
    category: "Facturas",
    description: "Formato retail ampliado, ideal para locales de alto volumen.",
    units: ["docena", "unidad"],
    defaultUnit: "docena",
  },
  {
    id: "medialuna-grasa",
    name: "Medialuna de grasa",
    category: "Facturas",
    description: "Clásica de grasa, hojaldrada y liviana.",
    units: ["docena", "bandeja"],
    defaultUnit: "docena",
  },
  {
    id: "croissant",
    name: "Croissant de manteca",
    category: "Laminados",
    description: "Laminado artesanal, mantequilla y fermentación lenta.",
    units: ["docena", "unidad"],
    defaultUnit: "docena",
  },
  {
    id: "pain-chocolat",
    name: "Pain au chocolat",
    category: "Laminados",
    description: "Chocolate belga, capas crocantes.",
    units: ["docena", "unidad"],
    defaultUnit: "docena",
  },
  {
    id: "palmerita",
    name: "Palmerita",
    category: "Laminados",
    description: "Azúcar caramelizada, muy pedida en el local.",
    units: ["docena", "unidad"],
    defaultUnit: "docena",
  },
  {
    id: "cookie-variedades",
    name: "Cookies surtidas",
    category: "Pastelería",
    description: "Nutella, pistacho y variedades de temporada.",
    units: ["docena", "unidad"],
    defaultUnit: "docena",
  },
  {
    id: "torta-individual",
    name: "Tortas por porción",
    category: "Pastelería",
    description: "Cheesecake y tortas de vitrina — consultar disponibilidad.",
    units: ["unidad", "bandeja"],
    defaultUnit: "unidad",
  },
  {
    id: "congelados-laminados",
    name: "Laminados congelados (para hornear)",
    category: "Congelados",
    description: "Medialunas y laminados listos para hornear en tu local.",
    units: ["caja", "docena"],
    defaultUnit: "caja",
  },
];

export const wholesaleCategories = [
  ...new Set(wholesaleProducts.map((p) => p.category)),
];
