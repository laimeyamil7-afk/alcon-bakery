"use client";

import { siteConfig } from "@/content/site.config";

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <nav
      id="mobile-nav"
      className="border-t border-brand/10 bg-white px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden"
      aria-label="Menú móvil"
    >
      <ul className="flex flex-col gap-1">
        {siteConfig.nav.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="block rounded-lg px-3 py-3 text-lg font-medium text-espresso hover:bg-brand-light/60 hover:text-brand"
              onClick={onClose}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
