import type { CourseSignup, WholesaleOrder } from "@/types/order";
import { buildWhatsAppUrl } from "@/lib/whatsapp/build-url";
import {
  buildCourseSignupMessage,
  buildWholesaleOrderMessage,
} from "@/lib/whatsapp/messages";

export interface OrderChannel {
  submitWholesaleOrder(payload: WholesaleOrder): Promise<void>;
  submitCourseSignup(payload: CourseSignup): Promise<void>;
}

export class WhatsAppOrderChannel implements OrderChannel {
  async submitWholesaleOrder(payload: WholesaleOrder): Promise<void> {
    const url = buildWhatsAppUrl(buildWholesaleOrderMessage(payload));
    window.location.href = url;
  }

  async submitCourseSignup(payload: CourseSignup): Promise<void> {
    const url = buildWhatsAppUrl(buildCourseSignupMessage(payload));
    window.location.href = url;
  }
}

export const orderChannel: OrderChannel = new WhatsAppOrderChannel();
