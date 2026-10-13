import { siteConfig } from "@/content/site.config";

export function buildWhatsAppUrl(message: string, phone?: string): string {
  const number = (phone ?? siteConfig.whatsappNumber).replace(/\D/g, "");
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${number}?text=${encoded}`;
}
