module.exports = {
  title: "Lead Développeur Backend",
  client: {
    name: "DARVA",
    color: "#748694",
  },
  for: {
    name: "unirakun",
    color: "white",
  },
  dates: {
    from: Date.UTC(2019, 05),
    to: Date.UTC(2019, 11),
  },
  informations: [
    {
      text: "DARVA est une entreprise experte en solutions web et EDI (Echanges de Données Informatisés) basée à Niort et destiné à tous les acteurs professionnels de l'assurance.",
    },
    {
      text: "DARVA souhaitant s'appuyer de plus en plus sur la masse de données qu'ils traitent, ils leur est nécessaire d'intégrer celles-ci dans un datalake accessible à tous les services.",
    },
    {
      text: "Dans ce but, nous avons agis sur le stockage des données liées aux sinistres au travers d'un batch NodeJS. Il se doit d'être modulaire, réutilisable, et très performant puisque plusieurs gigaoctets de données doivent être traitées dans une courte fenêtre de temps.",
    },
    {
      text: "Grâce aux streams NodeJS les données sont décodées, désérialisées, puis enregistrées en base de données MongoDB au fil de l'eau.",
    },
    {
      text: "Afin de maitriser la performance du batch, nous avons mis en place des métriques permettant de suivre la vélocité de nos algorithmes tout au long de nos développements.",
    },
    {
      text: "Une fois cette mission terminée, nous avons réalisé le POC d'une interface graphique permettant de mieux comprendre la structure des données concernées.",
    },
    {
      text: "Missions :",
      children: [
        { text: "Développement d'un Batch d'intégration de données" },
        { text: "Algorithme et métriques de performance" },
        { text: "Passage de connaissances aux équipes internes" },
        {
          text: "Proposition d'un POC d'une interface graphique de naviguation dans la structure des données",
        },
      ],
    },
    {
      text: "Technologies utilisées : ",
      children: [
        { text: "Javascript, NodeJS, MongoDB" },
        { text: "ReactJS, D3 et Layout homemade" },
        { text: "Jest et tests de performances sur-mesure" },
        { text: "Docker" },
        { text: "Github" },
      ],
    },
  ],
}
