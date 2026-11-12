// Every visible string of the home page, in French (the default, served at /)
// and English (served at /en/). The copy talks about the visitor's problems
// and how we help, not about us. In headlines, *starred* words get the blue
// pen underline (see KeyText.astro); `plain()` strips the stars.

export type Lang = "fr" | "en"

export const WHATSAPP_NUMBER = "33770402721"

export const plain = (text: string) => text.replace(/[*~]/g, "")

const fr = {
  htmlLang: "fr",
  locale: "fr_FR",
  meta: {
    title: "uni rakun · Logiciels sur mesure et applications boostées par l'IA",
    description:
      "Tableurs, ressaisies, outils qui ne se parlent pas ? uni rakun conçoit avec vous le logiciel sur mesure qui colle à votre métier, boosté par l'IA là où elle aide. Pour entrepreneurs, startups, TPE et PME, à Nantes et Saumur.",
  },
  skip: "Aller au contenu",
  nav: {
    services: "Ce qu'on apporte",
    how: "Méthode",
    apps: "Nos apps",
    team: "L'équipe",
    faq: "FAQ",
  },
  langLabel: "Langue",
  themeLabel: "Changer de thème",
  kicker: "Studio produit · Nantes et Saumur",
  title1: "Votre logiciel,",
  title2: "*sur mesure*",
  lead: "Vos journées filent entre tableurs, ressaisies et outils qui ne se parlent pas ? On prend le temps de comprendre votre métier, puis on construit avec vous le logiciel qui vous rend ces heures, avec de l'IA là où elle aide vraiment.",
  cta1: "Parlons de votre projet",
  cta2: "Voir comment on vous accompagne",
  promises: [
    "Deux interlocuteurs, du premier échange à la mise en ligne",
    "Une maquette à tester avant d'engager le développement",
    "Des livraisons courtes : vous voyez votre outil avancer",
  ],
  servicesTitle: "Ce qu'on vous *apporte*",
  servicesLead:
    "Vous savez ce qui vous ralentit au quotidien. Notre travail, c'est de le transformer en un outil simple que vos équipes ont envie d'utiliser.",
  services: [
    {
      icon: "layout",
      title: "Un outil qui colle à votre métier",
      body: "Vos process vivent dans des tableurs, des e-mails et trois abonnements qui ne se parlent pas. On les réunit dans un logiciel pensé pour votre façon de travailler.",
    },
    {
      icon: "ai",
      title: "Moins de tâches répétitives",
      body: "Trier les e-mails, ressaisir, relancer, rédiger le même rapport : l'IA prend le relais sur ce qui vous fait perdre du temps, et vous gardez la main sur chaque décision.",
    },
    {
      icon: "shield",
      title: "Un logiciel qui tient dans la durée",
      body: "Testé, surveillé, maintenu, prêt à suivre la croissance de votre activité. Et après la mise en ligne, on reste là.",
    },
  ],
  stamp: "Pas de ~vibe coding~",
  stampLine:
    "L'IA nous fait gagner du temps, et vous en fait gagner. Mais votre logiciel est relu, testé et mis en production par des ingénieurs.",
  howTitle: "Comment on vous *accompagne*",
  howLead:
    "De la première discussion à la mise en ligne, vous savez toujours où en est votre projet",
  steps: [
    {
      title: "On part de votre quotidien",
      body: "Vos irritants, vos outils, vos objectifs",
    },
    {
      title: "Vous testez une maquette",
      body: "Un prototype cliquable avant d'engager le budget",
    },
    {
      title: "On construit avec vous",
      body: "Des livraisons courtes, validées au fil de l'eau",
    },
    {
      title: "On reste à vos côtés",
      body: "Suivi, évolutions, nouvelles idées",
    },
  ],
  appsTitle: "Des apps qui servent déjà des *pros*",
  appsLead:
    "Artisans du bâtiment, coachs sportifs, agents immobiliers, équipes tech : on construit et on fait tourner nos propres apps pour eux. Votre logiciel profite de tout ce qu'on y a appris.",
  swipe: "Faites glisser pour voir la suite",
  teamTitle: "Les deux *RAKUN*",
  teamLead:
    "Deux interlocuteurs pour tout votre projet : l'un comprend votre métier, l'autre garantit que votre logiciel tient",
  gRole: "Le produit",
  gLine:
    "Il commence par comprendre votre métier, puis le transforme en un produit que vos équipes utilisent vraiment. C(P)TO et développeur freelance, à Nantes.",
  fRole: "La tech",
  fLine:
    "Il s'assure que votre logiciel est rapide, fiable et prêt à grandir. Ingénieur logiciel chez Cantina Labs, passé par BeReal.",
  resume: "Voir le CV",
  faqTitle: "Questions *fréquentes*",
  faq: [
    {
      q: "uni rakun, c'est quoi ?",
      a: "Un studio produit fondé par Guillaume CRESPEL (produit) et Fabien JUIF (tech), entre Nantes et Saumur. On conçoit avec vous des logiciels sur mesure et des applications boostées par l'IA.",
    },
    {
      q: "Mon entreprise est-elle trop petite ?",
      a: "Non. On travaille avec des entrepreneurs, des startups, des TPE et des PME. Si un outil sur mesure peut vous faire gagner du temps chaque semaine, ça vaut la peine d'en parler.",
    },
    {
      q: "Par où commencer ?",
      a: "Par une discussion sur votre quotidien et ce qui vous ralentit. On vous dit franchement si un logiciel sur mesure est la bonne réponse, et sinon ce qu'on ferait à votre place.",
    },
    {
      q: "Vous ne faites que des applications d'IA ?",
      a: "Non. On met de l'IA là où elle fait gagner du temps (lire, trier, rédiger, planifier), toujours avec une validation humaine. Beaucoup de problèmes se règlent très bien sans.",
    },
    {
      q: "C'est du vibe coding ?",
      a: "Non. On utilise des agents de code tous les jours pour aller plus vite, mais l'architecture, la revue, les tests et la mise en production restent un travail d'ingénieur.",
    },
    {
      q: "Avec quelles technologies ?",
      a: "TypeScript, React, Node.js et Go côté code ; Kubernetes et Google Cloud côté infrastructure ; Claude, les agents et MCP côté IA. On choisit selon votre projet, pas l'inverse.",
    },
  ],
  contactTitle: "On en *parle* ?",
  contactLead:
    "Racontez-nous ce qui vous fait perdre du temps. On revient vers vous avec des idées concrètes, sur WhatsApp ou sur LinkedIn.",
  waCta: "WhatsApp · 07 70 40 27 21",
  waText: "Bonjour uni rakun, j'aimerais vous parler d'un projet.",
  footer: "Nantes et Saumur",
  otherLang: { href: "/en/", label: "EN", name: "English" },
}

const en: typeof fr = {
  htmlLang: "en",
  locale: "en_US",
  meta: {
    title: "uni rakun · Custom software and AI-powered apps",
    description:
      "Spreadsheets, double entry, tools that don't talk to each other? uni rakun builds with you the custom software that fits your business, with AI where it helps. For founders, startups and small businesses, from Nantes, France.",
  },
  skip: "Skip to content",
  nav: {
    services: "What you get",
    how: "Method",
    apps: "Our apps",
    team: "Team",
    faq: "FAQ",
  },
  langLabel: "Language",
  themeLabel: "Switch theme",
  kicker: "Product studio · Nantes and Saumur, France",
  title1: "Your own software,",
  title2: "*made to measure*",
  lead: "Are your days lost between spreadsheets, double entry and tools that don't talk to each other? We take the time to understand your business, then build with you the software that gives you those hours back, with AI where it really helps.",
  cta1: "Tell us about your project",
  cta2: "See how we work with you",
  promises: [
    "Two people you talk to, from the first call to launch",
    "A prototype to try before any development starts",
    "Short releases: you see your tool take shape",
  ],
  servicesTitle: "What you *get*",
  servicesLead:
    "You know what slows you down every day. Our job is to turn it into a simple tool your team actually wants to use.",
  services: [
    {
      icon: "layout",
      title: "A tool that fits your business",
      body: "Your processes live in spreadsheets, emails and three subscriptions that don't talk to each other. We bring them together in software shaped around the way you work.",
    },
    {
      icon: "ai",
      title: "Fewer repetitive tasks",
      body: "Sorting emails, re-typing, chasing, writing the same report again: AI takes over what wastes your time, and you keep the final say on every decision.",
    },
    {
      icon: "shield",
      title: "Software that lasts",
      body: "Tested, monitored, maintained and ready to grow with your business. And after launch, we stick around.",
    },
  ],
  stamp: "No ~vibe coding~",
  stampLine:
    "AI saves us time, and saves you time. But your software is still reviewed, tested and shipped by engineers.",
  howTitle: "How we work *with you*",
  howLead:
    "From the first conversation to launch, you always know where your project stands",
  steps: [
    {
      title: "We start from your day",
      body: "Your pain points, your tools, your goals",
    },
    {
      title: "You try a prototype",
      body: "Something clickable before the budget is committed",
    },
    {
      title: "We build it with you",
      body: "Short releases you validate as we go",
    },
    { title: "We stay by your side", body: "Monitoring, upgrades, new ideas" },
  ],
  appsTitle: "Apps already helping *professionals*",
  appsLead:
    "Builders, sports coaches, estate agents, tech teams: we build and run our own apps for them. Your software gets everything we learned along the way.",
  swipe: "Swipe to see more",
  teamTitle: "The two *RAKUN*",
  teamLead:
    "Two people for your whole project: one understands your business, the other makes sure your software holds up",
  gRole: "Product",
  gLine:
    "He starts by understanding your business, then turns it into a product your team actually uses. C(P)TO and freelance developer in Nantes.",
  fRole: "Engineering",
  fLine:
    "He makes sure your software is fast, reliable and ready to grow. Software engineer at Cantina Labs, previously at BeReal.",
  resume: "Résumé",
  faqTitle: "Common *questions*",
  faq: [
    {
      q: "What is uni rakun?",
      a: "A product studio founded by Guillaume CRESPEL (product) and Fabien JUIF (engineering), based in Nantes and Saumur, France. We build custom software and AI-powered apps with you.",
    },
    {
      q: "Is my company too small?",
      a: "No. We work with founders, startups and small and medium businesses. If a tailored tool can save you time every week, it is worth talking about.",
    },
    {
      q: "Where do we start?",
      a: "With a conversation about your day and what slows you down. We tell you honestly whether custom software is the right answer, and if not, what we would do in your place.",
    },
    {
      q: "Do you only build AI apps?",
      a: "No. We add AI where it saves time (reading, sorting, drafting, planning), always with a human in the loop. Plenty of problems are solved just fine without it.",
    },
    {
      q: "Is this vibe coding?",
      a: "No. We use coding agents every day to move faster, but architecture, review, testing and production remain engineering work.",
    },
    {
      q: "Which technologies?",
      a: "TypeScript, React, Node.js and Go for the code; Kubernetes and Google Cloud for infrastructure; Claude, agents and MCP for AI. We pick what fits your project, not the other way round.",
    },
  ],
  contactTitle: "Let's *talk*",
  contactLead:
    "Tell us what wastes your time. We will come back with concrete ideas, on WhatsApp or LinkedIn.",
  waCta: "WhatsApp · +33 7 70 40 27 21",
  waText: "Hi uni rakun, I'd like to talk about a project.",
  footer: "Nantes and Saumur, France",
  otherLang: { href: "/", label: "FR", name: "Français" },
}

export const COPY = { fr, en }

export const whatsappUrl = (lang: Lang) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(COPY[lang].waText)}`
