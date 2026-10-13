"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { wholesaleProducts } from "@/content/wholesale.products";
import { orderChannel } from "@/lib/orders/channel";
import type { WholesaleOrder } from "@/types/order";
import {
  wholesaleOrderSchema,
  type WholesaleOrderFormValues,
} from "@/lib/validation/wholesale";
import { unitLabel } from "@/lib/format/units";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

const productOptions = wholesaleProducts.map((p) => ({
  value: p.id,
  label: `${p.name} (${p.category})`,
}));

const defaultLine = (): WholesaleOrderFormValues["lines"][number] => ({
  productId: wholesaleProducts[0]?.id ?? "",
  quantity: 1,
  unit: wholesaleProducts[0]?.defaultUnit ?? "docena",
});

export function WholesaleOrderForm() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<WholesaleOrderFormValues>({
    resolver: zodResolver(wholesaleOrderSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      phone: "",
      email: "",
      deliveryAddress: "",
      deliveryZone: "",
      preferredDate: "",
      timeSlot: "flexible",
      lines: [defaultLine()],
      notes: "",
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "lines" });
  const lines = watch("lines");

  const onSubmit = async (values: WholesaleOrderFormValues) => {
    const payload: WholesaleOrder = {
      businessName: values.businessName,
      contactName: values.contactName,
      phone: values.phone,
      email: values.email || undefined,
      deliveryAddress: values.deliveryAddress,
      deliveryZone: values.deliveryZone,
      preferredDate: values.preferredDate,
      timeSlot: values.timeSlot,
      notes: values.notes || undefined,
      lines: values.lines.map((line) => {
        const product = wholesaleProducts.find((p) => p.id === line.productId);
        return {
          productId: line.productId,
          productName: product?.name ?? line.productId,
          quantity: line.quantity,
          unit: line.unit,
        };
      }),
    };
    await orderChannel.submitWholesaleOrder(payload);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,20rem)] lg:gap-10"
      noValidate
    >
      <div className="min-w-0 space-y-6 sm:space-y-8">
        <fieldset className="space-y-4 rounded-2xl border border-brand/10 bg-white p-4 sm:p-6">
          <legend className="px-1 font-display text-lg font-semibold text-espresso">
            Datos del local
          </legend>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="Nombre comercial"
              {...register("businessName")}
              error={errors.businessName?.message}
            />
            <Input
              label="Persona de contacto"
              {...register("contactName")}
              error={errors.contactName?.message}
            />
            <Input
              label="Teléfono / WhatsApp"
              type="tel"
              autoComplete="tel"
              {...register("phone")}
              error={errors.phone?.message}
            />
            <Input
              label="Email (opcional)"
              type="email"
              autoComplete="email"
              {...register("email")}
              error={errors.email?.message}
            />
          </div>
        </fieldset>

        <fieldset className="space-y-4 rounded-2xl border border-brand/10 bg-white p-4 sm:p-6">
          <legend className="px-1 font-display text-lg font-semibold text-espresso">
            Entrega
          </legend>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="Dirección"
              {...register("deliveryAddress")}
              error={errors.deliveryAddress?.message}
            />
            <Input
              label="Zona / barrio"
              {...register("deliveryZone")}
              error={errors.deliveryZone?.message}
            />
            <Input
              label="Fecha deseada"
              type="date"
              {...register("preferredDate")}
              error={errors.preferredDate?.message}
            />
            <Select
              label="Franja horaria"
              options={[
                { value: "manana", label: "Mañana" },
                { value: "tarde", label: "Tarde" },
                { value: "flexible", label: "Flexible" },
              ]}
              {...register("timeSlot")}
              error={errors.timeSlot?.message}
            />
          </div>
        </fieldset>

        <fieldset className="space-y-4 rounded-2xl border border-brand/10 bg-white p-4 sm:p-6">
          <legend className="px-1 font-display text-lg font-semibold text-espresso">
            Productos
          </legend>
          {errors.lines?.message ? (
            <p className="text-xs text-red-600" role="alert">
              {errors.lines.message}
            </p>
          ) : null}
          <ul className="space-y-4">
            {fields.map((field, index) => {
              const productId = lines[index]?.productId;
              const product = wholesaleProducts.find((p) => p.id === productId);
              const unitOptions = (product?.units ?? ["docena"]).map((u) => ({
                value: u,
                label: unitLabel(u),
              }));

              return (
                <li
                  key={field.id}
                  className="space-y-3 rounded-xl bg-brand-light/35 p-4"
                >
                  <Select
                    label={`Producto ${index + 1}`}
                    options={productOptions}
                    placeholder="Elegí producto"
                    error={errors.lines?.[index]?.productId?.message}
                    {...register(`lines.${index}.productId`, {
                      onChange: (e) => {
                        const next = wholesaleProducts.find(
                          (p) => p.id === e.target.value,
                        );
                        if (next) {
                          setValue(`lines.${index}.unit`, next.defaultUnit);
                        }
                      },
                    })}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      label="Cant."
                      type="number"
                      min={1}
                      inputMode="numeric"
                      {...register(`lines.${index}.quantity`, { valueAsNumber: true })}
                      error={errors.lines?.[index]?.quantity?.message}
                    />
                    <Select
                      label="Unidad"
                      options={unitOptions}
                      {...register(`lines.${index}.unit`)}
                      error={errors.lines?.[index]?.unit?.message}
                    />
                  </div>
                  <button
                    type="button"
                    className="min-h-11 text-base text-espresso/60 underline-offset-2 hover:text-espresso hover:underline disabled:opacity-40"
                    onClick={() => remove(index)}
                    disabled={fields.length <= 1}
                  >
                    Quitar línea
                  </button>
                </li>
              );
            })}
          </ul>
          <Button
            type="button"
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => append(defaultLine())}
          >
            + Agregar producto
          </Button>
        </fieldset>

        <Textarea
          label="Observaciones"
          placeholder="Congelado, surtido, referencias de pedidos anteriores…"
          {...register("notes")}
          error={errors.notes?.message}
        />
      </div>

      <aside className="h-fit rounded-2xl border border-brand-dark/20 bg-brand p-4 text-white sm:p-6 lg:sticky lg:top-[calc(5.75rem+1.25rem)] lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto">
        <h3 className="font-display text-lg font-semibold">Resumen</h3>
        <ul className="mt-4 space-y-2 text-base text-white/85">
          {lines.map((line, i) => {
            const product = wholesaleProducts.find((p) => p.id === line.productId);
            if (!product) return null;
            return (
              <li key={i}>
                {product.name} — {line.quantity} {unitLabel(line.unit)}
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-xs text-white/65">
          Al enviar, se abre WhatsApp con el pedido prearmado. Confirmamos precio y
          disponibilidad por chat.
        </p>
        <Button
          type="submit"
          variant="secondary"
          className="mt-6 w-full"
          disabled={isSubmitting}
        >
          Enviar pedido por WhatsApp
        </Button>
      </aside>
    </form>
  );
}
