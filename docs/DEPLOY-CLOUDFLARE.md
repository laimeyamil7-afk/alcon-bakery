# Cloudflare Pages — guía rápida (Alcon Bakery)

Sitio **HTML estático** en `out/` (Next `output: "export"`). **No** uses `wrangler deploy` en el panel.

---

## Configuración en Cloudflare (Git → GitHub)

**Workers & Pages** → proyecto → **Settings** → **Builds** → **Edit**

| Campo | Valor |
|--------|--------|
| Framework preset | **Next.js (Static HTML Export)** o **None** |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Deploy command** | **vacío / no configurar** |

Si ves **Deploy command** con `npx wrangler deploy`, **borralo**. Eso causa:

`Missing entry-point to Worker script or to assets directory`

**Root directory:** vacío.

**Environment variables (Production):**

- `NEXT_PUBLIC_SITE_URL` = `https://tu-proyecto.pages.dev`
- `NEXT_PUBLIC_WHATSAPP_NUMBER` = `541122536506`

Luego **Deployments** → **Retry deployment**.

---

## GitHub Actions (opcional)

Si preferís deploy desde GitHub en lugar del build de Cloudflare:

1. Secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
2. Workflow [`.github/workflows/cloudflare-pages.yml`](../.github/workflows/cloudflare-pages.yml)
3. Proyecto en Cloudflare llamado **`alcon-bakery`**

Si usás solo Actions, desactivá deployments automáticos del Git en Cloudflare (si aparece la opción).

---

## Comprobar

- Log: `npm run build` OK y subida desde `out/`
- Sitio carga sin error **1101**
- `/mayorista` → `/proveeduria` ([`public/_redirects`](../public/_redirects))
