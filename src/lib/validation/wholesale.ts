import { z } from "zod";

export const wholesaleLineSchema = z.object({
  productId: z.string().min(1, "Elegí un producto"),
  quantity: z
    .number({ error: "Cantidad inválida" })
    .int("Cantidad entera")
    .min(1, "Mínimo 1")
    .max(9999, "Cantidad muy alta"),
  unit: z.enum(["docena", "bandeja", "unidad", "kg", "caja"]),
});

export const wholesaleOrderSchema = z.object({
  businessName: z.string().min(2, "Nombre del local requerido"),
  contactName: z.string().min(2, "Nombre de contacto requerido"),
  phone: z
    .string()
    .min(8, "Teléfono inválido")
    .max(20, "Teléfono inválido"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  deliveryAddress: z.string().min(5, "Dirección requerida"),
  deliveryZone: z.string().min(2, "Zona requerida"),
  preferredDate: z.string().min(1, "Elegí una fecha"),
  timeSlot: z.enum(["manana", "tarde", "flexible"]),
  lines: z.array(wholesaleLineSchema).min(1, "Agregá al menos un producto"),
  notes: z.string().max(500, "Máximo 500 caracteres").optional(),
});

export type WholesaleOrderFormValues = z.infer<typeof wholesaleOrderSchema>;
