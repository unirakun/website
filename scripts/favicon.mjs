// Builds the site's icons from the raccoon head of the header logo:
// - public/favicon.svg: the head in ink, redrawn in light ink when the
//   browser is dark, so it stays visible on dark tabs;
// - public/favicon.png: the fallback for browsers without SVG favicons, on a
//   paper tile so it reads on light and dark tabs alike;
// - public/apple-touch-icon.png: the home screen icon, on paper (iOS fills a
//   transparent icon with black).
// Run after a build (it reads the header from dist/): node scripts/favicon.mjs
import { readFile, writeFile } from "node:fs/promises"
import { chromium } from "playwright"
import sharp from "sharp"

// The ink of the light and dark themes (--fg in src/styles/global.css).
const INK = "#1f1c18"
const INK_DARK = "#efe9de"
const PAPER = "#efede8"

// The head crop of src/components/Raccoon.astro, and the clip that hides the
// tip of the "N" next to the chin.
const VB = { x: 763, y: 39, w: 602, h: 503 }
const CLIP = [
  { x0: 763, x1: 1365, y0: 39, y1: 496 },
  { x0: 763, x1: 1292, y0: 496, y1: 542 },
]

const html = await readFile(new URL("../dist/index.html", import.meta.url))
const svg = html
  .toString()
  .match(/<svg[^>]*class="raccoon brand-logo[\s\S]*?<\/svg>/)?.[0]
if (!svg) throw new Error("favicon: no raccoon head in dist/index.html")

// Keep only the paths that show inside the head crop: the wordmark below
// would weigh down the icon for nothing.
const browser = await chromium.launch()
const page = await browser.newPage()
await page.setContent(
  `<body style="margin:0">${svg.replace("<svg", `<svg width="${VB.w}" height="${VB.h}"`)}</body>`
)
const paths = await page.evaluate(
  ({ VB, CLIP }) => {
    const root = document.querySelector("svg").getBoundingClientRect()
    return [...document.querySelectorAll("svg path")]
      .filter((p) => {
        const r = p.getBoundingClientRect()
        if (!r.width && !r.height) return false
        const box = {
          x0: r.left - root.left + VB.x,
          x1: r.right - root.left + VB.x,
          y0: r.top - root.top + VB.y,
          y1: r.bottom - root.top + VB.y,
        }
        return CLIP.some(
          (c) =>
            box.x0 < c.x1 && box.x1 > c.x0 && box.y0 < c.y1 && box.y1 > c.y0
        )
      })
      .map((p) => {
        const attrs = [...p.attributes]
          .filter((a) => a.name !== "class")
          .map((a) => `${a.name}="${a.value.replace(/\s+/g, " ").trim()}"`)
        return `<path ${attrs.join(" ")}/>`
      })
  },
  { VB, CLIP }
)
await browser.close()

// A square canvas, the head centred in it.
const side = VB.w
const square = `${VB.x} ${VB.y - (side - VB.h) / 2} ${side} ${side}`
const polygon = "763,39 1365,39 1365,496 1292,496 1292,542 763,542"
const icon = (style) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${square}" fill="currentColor">` +
  `<style>${style}</style>` +
  `<clipPath id="c"><polygon points="${polygon}"/></clipPath>` +
  `<g clip-path="url(#c)">${paths.join("")}</g></svg>`

const favicon = icon(
  `svg{color:${INK}}@media (prefers-color-scheme:dark){svg{color:${INK_DARK}}}`
)
await writeFile(new URL("../public/favicon.svg", import.meta.url), favicon)

// The PNGs: the ink head on a paper background.
const inked = Buffer.from(icon(`svg{color:${INK}}`))
const tile = async (size, headSize, radius, out) => {
  const head = await sharp(inked, { density: 300 })
    .resize(headSize, headSize)
    .png()
    .toBuffer()
  const offset = Math.round((size - headSize) / 2)
  await sharp(
    Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="${PAPER}"/></svg>`
    )
  )
    .composite([{ input: head, left: offset, top: offset }])
    .png()
    .toFile(new URL(`../public/${out}`, import.meta.url).pathname)
}
await tile(48, 40, 10, "favicon.png")
await tile(180, 136, 0, "apple-touch-icon.png")

console.log(
  `favicon: ${paths.length} paths, favicon.svg ${(favicon.length / 1024).toFixed(1)} kB`
)
