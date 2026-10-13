import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
    >
      <span className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-[4.5rem] sm:w-[4.5rem]">
        <Image
          src="/images/logo-alcon.png"
          alt={siteConfig.name}
          fill
          sizes="72px"
          className="object-cover"
          priority
        />
      </span>
      <span className="sr-only">{siteConfig.name}</span>
    </Link>
  );
}
