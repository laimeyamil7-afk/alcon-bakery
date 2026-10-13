import type { CourseSignup, WholesaleOrder } from "@/types/order";
import { formatUnit } from "@/lib/format/units";

const MAX_NOTES_LENGTH = 500;

function truncateNotes(notes: string | undefined): string {
  if (!notes) return "";
  return notes.length > MAX_NOTES_LENGTH
    ? `${notes.slice(0, MAX_NOTES_LENGTH)}…`
    : notes;
}

const timeSlotLabels = {
  manana: "Mañana",
  tarde: "Tarde",
  flexible: "Flexible",
} as const;

export function buildWholesaleOrderMessage(order: WholesaleOrder): string {
  const lines = order.lines
    .map(
      (line, i) =>
        `${i + 1}. ${line.productName} — ${formatUnit(line.unit, line.quantity)}`,
    )
    .join("\n");

  const notes = truncateNotes(order.notes);

  return [
    "🥐 *Pedido proveeduría — Alcon Bakery*",
    "",
    `*Local:* ${order.businessName}`,
    `*Contacto:* ${order.contactName}`,
    `*Tel:* ${order.phone}`,
    order.email ? `*Email:* ${order.email}` : null,
    "",
    `*Entrega:* ${order.deliveryAddress} (${order.deliveryZone})`,
    `*Fecha deseada:* ${order.preferredDate}`,
    `*Franja:* ${timeSlotLabels[order.timeSlot]}`,
    "",
    "*Detalle del pedido:*",
    lines,
    notes ? `\n*Observaciones:*\n${notes}` : null,
    "",
    "Enviado desde alconbakery.com",
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildCourseSignupMessage(signup: CourseSignup): string {
  const levelLabels = {
    principiante: "Principiante",
    intermedio: "Intermedio",
    avanzado: "Avanzado",
  } as const;

  return [
    "📚 *Inscripción curso de laminados — Alcon Bakery*",
    "",
    `*Nombre:* ${signup.fullName}`,
    `*WhatsApp:* ${signup.phone}`,
    `*Email:* ${signup.email}`,
    `*Nivel:* ${levelLabels[signup.level]}`,
    `*Edición:* ${signup.editionLabel}`,
    "",
    "*Motivación:*",
    truncateNotes(signup.motivation) || "—",
    "",
    "Enviado desde alconbakery.com",
  ].join("\n");
}
