export const siteConfig = {
  name: "Alcon Bakery",
  tagline: "Proveeduría · Cafetería · Cursos",
  description:
    "Medialuna campeona nacional, laminados artesanales y provisión para cafeterías de especialidad en Buenos Aires.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alconbakery.com",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "541122536506",
  email: "alconbakery@gmail.com",
  address: {
    street: "Río de Janeiro 1086",
    corner: "esq. Ángel Gallardo",
    neighborhood: "Caballito",
    city: "CABA",
    country: "Argentina",
    mapsQuery: "Alcon Bakery Río de Janeiro 1086 Caballito",
  },
  hours: {
    label: "Horarios de cafetería",
    /** Actualizar cuando Brian confirme */
    schedule: "Consultá horarios actualizados por Instagram o WhatsApp.",
  },
  stats: {
    wholesaleClients: 16,
    awardYear: 2024,
    awardTitle: "Campeonato Nacional de la Medialuna Artesanal — FITHEP",
  },
  showWholesalePrices: false,
  links: {
    instagram: "https://www.instagram.com/alconbakery/",
    fudoMenu: "https://menu.fu.do/alconbakery",
    fithepArticle:
      "https://www.derechoenzapatillas.com/2025/hoy-todo-se-parece-a-todo-el-camino-de-brian-alcon-hacia-su-propia-medialuna/",
  },
  nav: [
    { href: "/proveeduria", label: "Proveeduría" },
    { href: "/cafeteria", label: "Cafetería" },
    { href: "/cursos", label: "Cursos" },
    { href: "/historia", label: "Historia" },
    { href: "/contacto", label: "Contacto" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
