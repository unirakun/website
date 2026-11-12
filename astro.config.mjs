// @ts-check
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://unirakun.fr",
  trailingSlash: "ignore",
  build: { format: "directory" },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "fr",
        locales: { fr: "fr-FR", en: "en-US" },
      },
    }),
  ],
})
