/**
 * Recorta el círculo azul del logo desde una captura (p. ej. perfil de Instagram).
 * Uso: node scripts/crop-logo.mjs [entrada.jpg] [salida.png]
 */
import sharp from "sharp";

const input = process.argv[2] ?? "public/images/logo-alcon.jpg";
const output = process.argv[3] ?? "public/images/logo-alcon.png";

const isBlue = (r, g, b) => b >= 150 && r <= 80 && g <= 120 && b > r + 50;

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

const yStart = Math.floor(info.height * 0.24);
const yEnd = Math.floor(info.height * 0.58);

let bestY = 0;
let bestW = 0;
let bestCx = info.width / 2;

for (let y = yStart; y <= yEnd; y++) {
  let rowMin = info.width;
  let rowMax = -1;
  for (let x = 0; x < info.width; x++) {
    const i = (y * info.width + x) * 4;
    if (isBlue(data[i], data[i + 1], data[i + 2])) {
      rowMin = Math.min(rowMin, x);
      rowMax = Math.max(rowMax, x);
    }
  }
  const w = rowMax >= 0 ? rowMax - rowMin + 1 : 0;
  if (w > bestW) {
    bestW = w;
    bestY = y;
    bestCx = (rowMin + rowMax) / 2;
  }
}

if (bestW < 50) {
  console.error("No se detectó el círculo azul. Ajustá isBlue o el rango Y.");
  process.exit(1);
}

const size = Math.round(bestW);
const left = Math.round(Math.max(0, Math.min(info.width - size, bestCx - size / 2)));
const top = Math.round(Math.max(0, Math.min(info.height - size, bestY - size / 2)));

const square = await sharp(input)
  .extract({ left, top, width: size, height: size })
  .ensureAlpha()
  .png()
  .toBuffer();

const mask = Buffer.from(
  `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`,
);

await sharp(square).composite([{ input: mask, blend: "dest-in" }]).png().toFile(output);

console.log(`OK → ${output} (${size}×${size}, origen ${left},${top})`);
