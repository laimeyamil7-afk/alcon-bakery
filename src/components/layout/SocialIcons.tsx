import { siteConfig } from "@/content/site.config";
import { buildWhatsAppUrl } from "@/lib/whatsapp/build-url";
import { cn } from "@/lib/cn";

const iconClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:border-cream/50 hover:bg-cream/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/40";

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2a10 10 0 0 0-8.6 15l-1.4 5.1 5.2-1.4A10 10 0 1 0 12 2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9.5c.3 1.8 2 3.5 3.6 4.1.5.2 1.2.4 1.2-.2v-.8c0-.2.5-.5 1-.9.5-.4.8-.7.8-.7s.1-.6-.3-.9c-.4-.3-1-.7-1.4-.9-.4-.2-.7-.1-1 .3-.3.4-1.1 1.4-1.1 1.4s-.2.2-.6.1c-.4-.1-1.7-.7-2.9-2.1-1.1-1.2-.9-1.7-1-2.1 0-.4.2-.6.2-.6s.2-.2.3-.5c.1-.3 0-.5-.1-.7-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.3 3.8 2.5 1 2.5.7 3 .7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.4-.2-.9-.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function SocialIcons({ className }: { className?: string }) {
  const wa = buildWhatsAppUrl("Hola Alcon Bakery, tengo una consulta.");

  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      <li>
        <a
          href={siteConfig.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </a>
      </li>
      <li>
        <a
          href={siteConfig.links.fudoMenu}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          aria-label="Menú online en Fudo"
        >
          <MenuIcon />
        </a>
      </li>
    </ul>
  );
}
