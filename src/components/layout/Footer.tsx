import Link from "next/link";
import { siteConfig } from "@/content/site.config";
import { Container } from "@/components/ui/Container";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-brand-dark/20 bg-brand text-cream">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-xl font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-2 text-base leading-relaxed text-white/75">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">El sitio</p>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacidad" className="hover:text-white">
                Privacidad
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Seguinos</p>
          <div className="mt-4">
            <SocialIcons />
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Local</p>
          <address className="mt-4 space-y-1 text-sm not-italic text-white/75">
            <p>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.corner}
              <br />
              {siteConfig.address.neighborhood}, {siteConfig.address.city}
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </p>
          </address>
        </div>
      </Container>
      <div className="border-t border-white/15 py-6 text-center text-xs text-white/50">
        © 2026 {siteConfig.name}
      </div>
    </footer>
  );
}
