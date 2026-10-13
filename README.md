# Alcon Bakery — sitio web

Sitio marketing y conversión para [Alcon Bakery](https://www.instagram.com/alconbakery/): mayorista, cafetería y cursos. Pedidos e inscripciones se envían por **WhatsApp** (sin backend en v1).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- react-hook-form + Zod

## Desarrollo

```bash
cp .env.example .env.local
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

### Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (SEO / Open Graph) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número sin `+`, ej. `541122536506` |

## Editar contenido (sin tocar formularios)

| Archivo | Qué cambia |
|---------|------------|
| [`src/content/site.config.ts`](src/content/site.config.ts) | Contacto, nav, stats, flags |
| [`src/content/wholesale.products.ts`](src/content/wholesale.products.ts) | Catálogo mayorista |
| [`src/content/cafe.highlights.ts`](src/content/cafe.highlights.ts) | Destacados cafetería |
| [`src/content/courses.config.ts`](src/content/courses.config.ts) | Ediciones del curso |

Imágenes: carpeta [`public/images/`](public/images/) (crear al sumar fotos).

## Arquitectura

- **`src/features/`** — formularios y lógica de dominio (mayorista, cursos)
- **`src/lib/orders/channel.ts`** — hoy `WhatsAppOrderChannel`; mañana API / checkout
- **`src/components/`** — UI y secciones reutilizables

## Deploy

### Cloudflare Pages (recomendado para este repo)

El sitio se exporta como HTML estático (`output: "export"`) para evitar el error **1101 Worker threw exception** del runtime Next en Workers.

En **Workers & Pages → tu proyecto → Settings → Builds**:

| Campo | Valor |
|--------|--------|
| Framework preset | **None** |
| Build command | `npm run build` |
| Build output directory | **`out`** |
| Node.js version | **20** o **22** |

Variables de entorno (Production): `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`.

Redirect `/mayorista` → `/proveeduria`: [`public/_redirects`](public/_redirects).

### Vercel

Quitar `output: "export"` en [`next.config.ts`](next.config.ts) si necesitás SSR; configurá las mismas env vars y `npm run build`.

## Scripts

- `npm run dev` — desarrollo
- `npm run build` — producción
- `npm run lint` — ESLint
- `npm run format` — Prettier (si está configurado en package.json)
