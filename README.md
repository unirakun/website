## 🦝✨ Website

The site of [uni rakun](https://unirakun.fr), built with [Astro](https://astro.build): a static site in French (`/`) and English (`/en/`), plus the résumés of Guillaume (`/Guillaume-CRESPEL/`) and Fabien (`/Fabien-JUIF/`), each in French and in English (`/en/…`).

**🚀 Start developing** (Node 22.23.4 or later, pnpm)

```sh
pnpm install
pnpm dev
```

The site runs at `http://localhost:4321`.

**🚀 Build and preview**

```sh
pnpm build
pnpm preview
```

Pushing to `master` builds the site and publishes it to GitHub Pages (`.github/workflows/deploy.yml`).

**Where things live**

| Path                                 | Content                                                                                                              |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `src/i18n/copy.ts`                   | Every string of the home page, in French and English                                                                 |
| `src/data/products.ts`               | The apps shown on the home page                                                                                      |
| `src/data/members/`                  | The résumés: who, description, skills, experiences                                                                   |
| `src/components/home/`               | The home page sections                                                                                               |
| `src/components/cv/Resume.astro`     | The résumé page, served in French (`src/pages/[member].astro`) and English (`src/pages/en/[member].astro`)           |
| `src/data/members/*/translations.js` | Each résumé in its other language, keyed by the source strings                                                       |
| `public/llms.txt`                    | The site summarised for AI assistants                                                                                |
| `scripts/cv-pdf.mjs`                 | Prints each résumé to `dist/cv/<id>-<lang>.pdf` after the build (needs `pnpm exec playwright install chromium` once) |
| `scripts/og-image.mjs`               | Rebuilds `public/og.png`, the image shown when the site is shared                                                    |

# About uni rakun ![unirakun](https://avatars3.githubusercontent.com/u/26111459?s=50&v=4)

**uni rakun** is created by two passionate french developers.

Do you want to contact them ? Go to their [website](https://unirakun.fr)

<table border="0">
 <tr>
  <td align="center"><img src="https://avatars1.githubusercontent.com/u/26094222?s=460&v=4" width="100" /></td>
  <td align="center"><img src="https://avatars1.githubusercontent.com/u/17828231?s=460&v=4" width="100" /></td>
 </tr>
 <tr>
  <td align="center"><a href="https://github.com/guillaumecrespel">Guillaume CRESPEL</a></td>
  <td align="center"><a href="https://github.com/fabienjuif">Fabien JUIF</a></td>
</table>
