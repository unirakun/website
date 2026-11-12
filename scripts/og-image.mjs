// Builds public/og.png (1200x630), the image shown when the site is shared:
// the raccoon wordmark on the site's grey, in a tilted "carnet" card.
// Run with: node scripts/og-image.mjs
import sharp from "sharp"

const W = 1200
const H = 630
const logo = await sharp("src/images/us/banner.png")
  .resize({ height: 400 })
  .png()
  .toBuffer()
const { width: lw = 0, height: lh = 0 } = await sharp(logo).metadata()

const card = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ededed"/>
  <g transform="rotate(-2 600 315)">
    <rect x="${(W - lw) / 2 - 46}" y="${(H - lh) / 2 - 36}" width="${lw + 92}" height="${lh + 72}" rx="36" fill="#4d6cfa" transform="translate(14 14)"/>
    <rect x="${(W - lw) / 2 - 46}" y="${(H - lh) / 2 - 36}" width="${lw + 92}" height="${lh + 72}" rx="36" fill="#ffffff" stroke="#1d1d1d" stroke-width="6"/>
  </g>
</svg>`)

await sharp(card)
  .composite([
    {
      input: logo,
      left: Math.round((W - lw) / 2),
      top: Math.round((H - lh) / 2),
    },
  ])
  .png()
  .toFile("public/og.png")
console.log("public/og.png written")
