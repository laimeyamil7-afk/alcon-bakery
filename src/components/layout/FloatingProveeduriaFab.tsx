"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function FloatingProveeduriaFab() {
  const pathname = usePathname();
  if (pathname === "/proveeduria") return null;

  return (
    <Link
      href="/proveeduria"
      className="fixed z-40 flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 right-4 sm:left-auto sm:right-6 sm:max-w-[17rem] sm:px-5 sm:py-3.5"
    >
      <span aria-hidden className="text-lg">
        🥐
      </span>
      <span className="truncate">Pedido proveeduría</span>
    </Link>
  );
}
