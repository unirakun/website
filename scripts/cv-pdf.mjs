// Prints every résumé, in French and in English, to dist/cv/<id>-<lang>.pdf,
// the files behind the "Download PDF" button. Run after `astro build` (the
// `build` script does both). It serves dist/ locally, opens each page in
// Chromium and prints it with the page's own print styles: A4, backgrounds on,
// no browser header or footer.
// Needs Playwright's Chromium: pnpm exec playwright install chromium
import { createServer } from "node:http"
import { copyFile, mkdir, readFile, stat } from "node:fs/promises"
import { extname, join, normalize } from "node:path"
import { chromium } from "playwright"
import members from "../src/data/members/index.js"

const DIST = new URL("../dist/", import.meta.url).pathname
// A copy goes to public/cv/ (git-ignored) so `astro dev` serves the latest
// PDFs too.
const PUBLIC_CV = new URL("../public/cv/", import.meta.url).pathname
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".json": "application/json",
}

const server = createServer(async (req, res) => {
  try {
    let path = normalize(
      decodeURIComponent(new URL(req.url, "http://x").pathname)
    )
    let file = join(DIST, path)
    if ((await stat(file).catch(() => null))?.isDirectory())
      file = join(file, "index.html")
    res.writeHead(200, {
      "content-type": TYPES[extname(file)] ?? "application/octet-stream",
    })
    res.end(await readFile(file))
  } catch {
    res.writeHead(404).end()
  }
})
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve))
const base = `http://127.0.0.1:${server.address().port}`

await mkdir(join(DIST, "cv"), { recursive: true })
await mkdir(PUBLIC_CV, { recursive: true })
const browser = await chromium.launch()
try {
  const page = await browser.newPage({ colorScheme: "light" })
  for (const member of members) {
    for (const lang of ["fr", "en"]) {
      const prefix = lang === "fr" ? "" : "/en"
      await page.goto(`${base}${prefix}/${member.id}/`, {
        waitUntil: "networkidle",
      })
      await page.evaluate(async () => {
        await document.fonts.ready
        await Promise.all(
          [...document.images].map((img) =>
            img.complete
              ? null
              : new Promise((r) =>
                  img.addEventListener("load", r, { once: true })
                )
          )
        )
      })
      const out = join(DIST, "cv", `${member.id}-${lang}.pdf`)
      await page.pdf({
        path: out,
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: false,
      })
      await copyFile(out, join(PUBLIC_CV, `${member.id}-${lang}.pdf`))
      console.log(`cv-pdf: ${out.replace(DIST, "dist/")}`)
    }
  }
} finally {
  await browser.close()
  server.close()
}
