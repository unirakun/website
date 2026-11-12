// The apps uni rakun builds and runs. `pitch` sells the app in one line,
// `body` backs it up; both exist in French and English.

import type { Lang } from "../i18n/copy"

type Text = Record<Lang, string>

export interface Product {
  id: "kojimo" | "wagle" | "qrakun" | "brikia" | "moovi" | "woof"
  name: string
  url: string
  domain: string
  category: string
  /** Background of the logo tile, from each app's own brand. */
  iconBg: string
  /** The app's colour (hard shadow) and a text-safe shade of it (link),
   *  for the light and the dark theme. */
  color: string
  colorDark: string
  ink: string
  inkDark: string
  pitch: Text
  body: Text
}

export const PRODUCTS: Product[] = [
  {
    id: "brikia",
    name: "Brikia",
    url: "https://brikia.app",
    domain: "brikia.app",
    category: "BusinessApplication",
    iconBg: "#C8553D",
    color: "#C8553D",
    colorDark: "#C8553D",
    ink: "#a8432d",
    inkDark: "#f0a08e",
    pitch: {
      fr: "L'app des pros du BTP",
      en: "The app for construction pros",
    },
    body: {
      fr: "Demandes, rapports et devis réunis au même endroit : moins de paperasse, plus de chantiers",
      en: "Requests, reports and quotes in one place: less paperwork, more time on site",
    },
  },
  {
    id: "moovi",
    name: "Moovi",
    url: "https://moovi.run",
    domain: "moovi.run",
    category: "HealthApplication",
    iconBg: "#0a0a0a",
    color: "#0a0a0a",
    colorDark: "#efe9de",
    ink: "#0a0a0a",
    inkDark: "#efe9de",
    pitch: {
      fr: "Simplifie le travail des coachs sportifs",
      en: "Makes coaches' work simpler",
    },
    body: {
      fr: "Le plan suit la douleur, le cycle et les pauses, et arrive tout seul sur la montre",
      en: "Plans follow pain, cycle and breaks, and land on the watch on their own",
    },
  },
  {
    id: "woof",
    name: "Woof",
    url: "https://woof-board.sh",
    domain: "woof-board.sh",
    category: "DeveloperApplication",
    iconBg: "#27302b",
    color: "#27302b",
    colorDark: "#c9d4cc",
    ink: "#27302b",
    inkDark: "#c9d4cc",
    pitch: {
      fr: "Vos agents IA, sur un kanban",
      en: "Your AI agents, on a kanban",
    },
    body: {
      fr: "Une carte en « Ready » : l'agent code, pose ses questions et ramène une pull request",
      en: "Drop a card in Ready: the agent codes, asks when stuck and brings back a pull request",
    },
  },
  {
    id: "wagle",
    name: "Wagle",
    url: "https://wagle.sh",
    domain: "wagle.sh",
    category: "DeveloperApplication",
    iconBg: "#151a21",
    color: "#f2a93b",
    colorDark: "#f2a93b",
    ink: "#9a6205",
    inkDark: "#f2a93b",
    pitch: {
      fr: "Les feature flags que vos agents pilotent",
      en: "Feature flags your agents can drive",
    },
    body: {
      fr: "Activez, ciblez et déployez en douceur, depuis la console ou par MCP",
      en: "Toggle, target and roll out safely, from the console or over MCP",
    },
  },
  {
    id: "qrakun",
    name: "QRakun",
    url: "https://qr.rakun.sh",
    domain: "qr.rakun.sh",
    category: "BusinessApplication",
    iconBg: "#ffffff",
    color: "#4f39f6",
    colorDark: "#9d90ff",
    ink: "#4f39f6",
    inkDark: "#b3a9ff",
    pitch: {
      fr: "Suivre vos campagnes, simplement",
      en: "Campaign tracking made simple",
    },
    body: {
      fr: "Chaque lien et chaque QR code mesurés en temps réel",
      en: "Every link and QR code measured in real time",
    },
  },
  {
    id: "kojimo",
    name: "Kojimo",
    url: "https://kojimo.fr",
    domain: "kojimo.fr",
    category: "BusinessApplication",
    iconBg: "#ffffff",
    color: "#214da4",
    colorDark: "#8fb0ff",
    ink: "#214da4",
    inkDark: "#a9c1ff",
    pitch: {
      fr: "Le coup d'accélérateur des agents immobiliers",
      en: "The business accelerator for estate agents",
    },
    body: {
      fr: "Tout ce qu'il faut pour développer son activité d'agent, au même endroit",
      en: "Everything an agent needs to grow their business, in one place",
    },
  },
]
