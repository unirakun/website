// Fails the build if a scroll-driven animation was folded into an `animation`
// shorthand. The production minifier merges `animation: …` and
// `animation-timeline: …` into one shorthand (`animation: linear both draw
// --how`), which browsers reject: the whole animation is dropped, and only
// in production, since dev serves the CSS unminified. Write those animations
// in longhands (animation-name, -timing-function, -fill-mode, -timeline).
// Run after `astro build` (the build scripts do).
import { readdir, readFile } from "node:fs/promises"

const DIR = new URL("../dist/_astro/", import.meta.url)
const merged =
  /animation:[^;}]*?(?:\bscroll\(|\bview\(|\s--[\w-]+\s*(?:[;},]|$))/g

let found = 0
for (const file of await readdir(DIR)) {
  if (!file.endsWith(".css")) continue
  const css = await readFile(new URL(file, DIR), "utf8")
  for (const [match] of css.matchAll(merged)) {
    console.error(`check-css: ${file}: ${match}`)
    found++
  }
}
if (found) {
  console.error(
    `check-css: ${found} scroll-driven animation(s) folded into the \`animation\` shorthand; browsers drop them. Use longhands.`
  )
  process.exit(1)
}
console.log("check-css: scroll-driven animations intact")
