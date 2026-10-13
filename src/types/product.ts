export type ProductUnit = "docena" | "bandeja" | "unidad" | "kg" | "caja";

export interface WholesaleProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  units: ProductUnit[];
  defaultUnit: ProductUnit;
  /** Precio orientativo mayorista; oculto si showWholesalePrices es false */
  wholesalePriceArs?: number;
}

export interface CafeHighlight {
  id: string;
  name: string;
  description: string;
  priceLabel?: string;
}
