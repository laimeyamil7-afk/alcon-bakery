import { z } from "zod";

export const courseSignupSchema = z.object({
  fullName: z.string().min(2, "Nombre requerido"),
  phone: z.string().min(8, "WhatsApp inválido").max(20, "WhatsApp inválido"),
  email: z.string().email("Email inválido"),
  level: z.enum(["principiante", "intermedio", "avanzado"]),
  editionId: z.string().min(1, "Elegí una edición"),
  motivation: z
    .string()
    .min(20, "Contanos un poco más (mín. 20 caracteres)")
    .max(800, "Máximo 800 caracteres"),
});

export type CourseSignupFormValues = z.infer<typeof courseSignupSchema>;
