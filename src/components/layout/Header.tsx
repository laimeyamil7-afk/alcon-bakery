"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site.config";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-white/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
      <Container className="flex h-[5.25rem] min-w-0 items-center justify-between gap-3 sm:h-[5.75rem] sm:gap-6">
        <Logo />
        <nav
          className="hidden min-w-0 flex-1 items-center justify-end gap-6 xl:gap-8 lg:flex"
          aria-label="Principal"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[0.9375rem] font-medium text-espresso/80 transition hover:text-brand xl:text-base"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand/15 text-brand lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
