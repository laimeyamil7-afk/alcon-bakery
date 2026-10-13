"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { coursesConfig } from "@/content/courses.config";
import { orderChannel } from "@/lib/orders/channel";
import type { CourseSignup } from "@/types/order";
import {
  courseSignupSchema,
  type CourseSignupFormValues,
} from "@/lib/validation/course";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

const editionOptions = coursesConfig.editions.map((e) => ({
  value: e.id,
  label: `${e.title} — ${e.dateLabel}`,
}));

export function CourseSignupForm() {
  const defaultEdition = coursesConfig.editions[0];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CourseSignupFormValues>({
    resolver: zodResolver(courseSignupSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      level: "principiante",
      editionId: defaultEdition?.id ?? "",
      motivation: "",
    },
  });

  const onSubmit = async (values: CourseSignupFormValues) => {
    const edition = coursesConfig.editions.find((e) => e.id === values.editionId);
    const payload: CourseSignup = {
      fullName: values.fullName,
      phone: values.phone,
      email: values.email,
      level: values.level,
      editionId: values.editionId,
      editionLabel: edition ? `${edition.title} (${edition.dateLabel})` : values.editionId,
      motivation: values.motivation,
    };
    await orderChannel.submitCourseSignup(payload);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full min-w-0 max-w-xl space-y-4 rounded-2xl border border-brand/10 bg-white p-4 shadow-sm sm:p-6"
      noValidate
    >
      <Input
        label="Nombre y apellido"
        autoComplete="name"
        {...register("fullName")}
        error={errors.fullName?.message}
      />
      <Input
        label="WhatsApp"
        type="tel"
        autoComplete="tel"
        {...register("phone")}
        error={errors.phone?.message}
      />
      <Input
        label="Email"
        type="email"
        autoComplete="email"
        {...register("email")}
        error={errors.email?.message}
      />
      <Select
        label="Nivel"
        options={[
          { value: "principiante", label: "Principiante" },
          { value: "intermedio", label: "Intermedio" },
          { value: "avanzado", label: "Avanzado" },
        ]}
        {...register("level")}
        error={errors.level?.message}
      />
      <Select
        label="Edición"
        options={editionOptions}
        {...register("editionId")}
        error={errors.editionId?.message}
      />
      <Textarea
        label="¿Por qué te interesa el curso?"
        placeholder="Contanos tu experiencia con pastelería y qué querés aprender."
        {...register("motivation")}
        error={errors.motivation?.message}
      />
      <p className="text-xs text-espresso/55">
        Cupos limitados. Te respondemos por WhatsApp para confirmar disponibilidad y pago.
      </p>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Consultar cupo por WhatsApp
      </Button>
    </form>
  );
}
