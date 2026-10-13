import type { ProductUnit } from "@/types/product";

const unitLabels: Record<ProductUnit, string> = {
  docena: "docena(s)",
  bandeja: "bandeja(s)",
  unidad: "unidad(es)",
  kg: "kg",
  caja: "caja(s)",
};

export function formatUnit(unit: ProductUnit, quantity: number): string {
  const label = unitLabels[unit];
  return `${quantity} ${label}`;
}

export function unitLabel(unit: ProductUnit): string {
  return unitLabels[unit];
}
