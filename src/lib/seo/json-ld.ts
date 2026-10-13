import { siteConfig } from "@/content/site.config";

export function localBusinessJsonLd() {
  const { address, links, email, whatsappNumber } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email,
    telephone: `+${whatsappNumber}`,
    sameAs: [links.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.neighborhood,
      addressRegion: address.city,
      addressCountry: "AR",
    },
  };
}
