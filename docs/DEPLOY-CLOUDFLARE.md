# Cloudflare — guía rápida (Alcon Bakery)

Sitio **HTML estático** en `out/` (Next `output: "export"`).

Hay **dos tipos** de proyecto en el panel. El formulario cambia según cuál tengas.

---

## A) Workers con build en Git (Deploy command obligatorio)

Si **no te deja guardar** con Deploy command vacío y el valor por defecto es `npx wrangler deploy`, estás en este flujo.

**Workers & Pages** → proyecto → **Settings** → **Builds** → **Edit**

| Campo | Valor |
|--------|--------|
| **Build command** | `npm run build` |
| **Deploy command** | `npx wrangler deploy` |
| Build output / path | vacío o `/` (lo importante es `wrangler.jsonc` → `./out`) |

El repo incluye [`wrangler.jsonc`](../wrangler.jsonc) con `assets.directory: "./out"`. Sin ese archivo, `wrangler deploy` falla con *Missing entry-point to Worker script or to assets directory*.

**Importante:** el campo `"name"` en `wrangler.jsonc` debe coincidir con el **nombre del proyecto** en Cloudflare (por defecto `alcon-bakery`).

**Environment variables (Production):**

- `NEXT_PUBLIC_SITE_URL` = `https://tu-proyecto.pages.dev`
- `NEXT_PUBLIC_WHATSAPP_NUMBER` = `541122536506`

Luego **Deployments** → **Retry deployment** (después de pushear cambios si tocaste el repo).

---

## B) Cloudflare Pages clásico (Git → carpeta `out`)

Si el asistente es **Pages** y **sí** podés dejar Deploy command vacío:

| Campo | Valor |
|--------|--------|
| Framework preset | **Next.js (Static HTML Export)** o **None** |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Deploy command** | vacío |

No hace falta `wrangler deploy`. Podés borrar `wrangler.jsonc` en ese caso (opcional).

Si el panel **obliga** Deploy command pero el proyecto es Pages, usá:

```bash
npx wrangler pages deploy out --project-name=alcon-bakery
```

(Ajustá `--project-name` al nombre real del proyecto.)

---

## GitHub Actions (opcional)

Deploy desde GitHub sin depender del build de Cloudflare:

1. Secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
2. Workflow [`.github/workflows/cloudflare-pages.yml`](../.github/workflows/cloudflare-pages.yml)
3. Proyecto en Cloudflare llamado **`alcon-bakery`**

Si usás solo Actions, desactivá deployments automáticos del Git en Cloudflare (si aparece la opción).

---

## Comprobar

- Log: `npm run build` OK y subida desde `out/`
- Sitio carga sin error **1101**
- `/mayorista` → `/proveeduria` ([`public/_redirects`](../public/_redirects))
