import type { Metadata } from "next";
import { siteConfig } from "@/content/site.config";

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} · ${siteConfig.name}`;
  const desc = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      locale: "es_AR",
      type: "website",
    },
  };
}
