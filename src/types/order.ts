import type { ProductUnit } from "./product";

export interface WholesaleOrderLine {
  productId: string;
  productName: string;
  quantity: number;
  unit: ProductUnit;
}

export interface WholesaleOrder {
  businessName: string;
  contactName: string;
  phone: string;
  email?: string;
  deliveryAddress: string;
  deliveryZone: string;
  preferredDate: string;
  timeSlot: "manana" | "tarde" | "flexible";
  lines: WholesaleOrderLine[];
  notes?: string;
}

export interface CourseSignup {
  fullName: string;
  phone: string;
  email: string;
  level: "principiante" | "intermedio" | "avanzado";
  editionId: string;
  editionLabel: string;
  motivation: string;
}
