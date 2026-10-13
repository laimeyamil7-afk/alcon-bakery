"use client";

import dynamic from "next/dynamic";

export const WholesaleOrderForm = dynamic(
  () =>
    import("./WholesaleOrderForm").then((mod) => mod.WholesaleOrderForm),
  {
    ssr: false,
    loading: () => (
      <p className="text-sm text-espresso/60">Cargando formulario de pedido…</p>
    ),
  },
);
