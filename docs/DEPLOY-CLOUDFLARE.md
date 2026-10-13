# Cloudflare Pages — guía rápida (Alcon Bakery)

El sitio es **HTML estático** en la carpeta `out/` (sin Worker Next → evita error **1101**).

---

## Opción A — GitHub Actions (recomendada si no encontrás el menú de Builds)

1. **Token de Cloudflare**  
   Dashboard → perfil (arriba derecha) → **My Profile** → **API Tokens** → **Create Token** → plantilla **Edit Cloudflare Workers** (incluye Pages) → Create.

2. **Account ID**  
   Dashboard → **Workers & Pages** → columna derecha **Account ID** (copiá).

3. **Secrets en GitHub**  
   Repo `alcon-bakery` → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**:
   - `CLOUDFLARE_API_TOKEN` = el token
   - `CLOUDFLARE_ACCOUNT_ID` = el Account ID

4. (Opcional) **Variable** `NEXT_PUBLIC_SITE_URL` = tu URL final (`https://….pages.dev`).

5. En GitHub → pestaña **Actions** → workflow **Cloudflare Pages** → **Run workflow**, o hacé push a `main`.

6. En Cloudflare, el proyecto debe llamarse **`alcon-bakery`** (igual que en `wrangler.jsonc`). Si el nombre es otro, cambiá `projectName` en [`.github/workflows/cloudflare-pages.yml`](../.github/workflows/cloudflare-pages.yml).

**Evitar doble deploy:** Cloudflare → tu proyecto → **Settings** → **General** → desactivá deployments automáticos del Git si solo querés usar Actions (si ves esa opción).

---

## Opción B — Solo Git en Cloudflare (con `wrangler.jsonc`)

El repo incluye [`wrangler.jsonc`](../wrangler.jsonc) con `pages_build_output_dir: "./out"`.

1. **Workers & Pages** → proyecto **alcon-bakery**.
2. **Settings** → **Builds** (o **Build configuration**).
3. Tocá **Edit** / lápiz si hace falta:
   - **Framework preset:** `Next.js (Static HTML Export)` **o** `None`
   - **Build command:** `npm run build`
   - **Build output directory / Build directory:** `out`
4. **Settings** → **Environment variables** (Production):
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = `541122536506`
5. **Deployments** → **Retry deployment** en el último commit.

---

## Comprobar

- Build log termina sin error y sube archivos desde `out/`.
- Abrís la URL `.pages.dev` y carga la home (sin 1101).
- `/mayorista` redirige a `/proveeduria` ([`public/_redirects`](../public/_redirects)).
