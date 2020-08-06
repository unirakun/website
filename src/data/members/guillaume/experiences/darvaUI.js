module.exports = {
  title: 'Lead Développeur Frontend',
  client: {
    name: 'DARVA',
    color: '#748694',
  },
  for: {
    name: 'unirakun',
    color: 'white',
  },
  dates: {
    from: Date.UTC(2020, 0),
    to: Date.now(),
  },
  informations: [
    { text: 'DARVA est une entreprise experte en solutions web et EDI (Echanges de Données Informatisés) basée à Niort et destiné à tous les acteurs professionnels de l\'assurance.' },
    { text: 'Avec Nicolas REMISE (interne DARVA) et Fabien JUIF, nous avons aidé le service BI à faciliter l\'accès et la gouvernance des "données sinistres" pour les collaborateurs de DARVA ainsi que les acteurs des métiers de l\'assurance.' },
    { text: 'Nous simplifions la visualisation et l\'édition des structures de données assureurs grâce à une nouvelle interface graphique. Le but est de remplacer un vieil outil d\'édition, et de permettre à tous les collaborateurs de reprendre possession de la connaissance liée à ces données.' },
    { text: 'Pour faciliter l\'accès à cette connaissance nous nous devions de proposer une interface graphique ergonomique, réactive, et compréhensible. Nous nous étions appuyés sur des représentations graphiques bien connues comme des arbre (treeview) ou des graphes (radial). Et pour l\'édition, quand cela semblait opportun, nous avons utilisé du drag\'n\'drop. Le tout en utilisant l’écosystème ReactJS.' },
    {
      text: 'Missions :',
      children: [
        { text: 'Atelier UX / UI' },
        { text: 'Développement Front-End de visualisation graphique du datalake' },
        { text: 'Développement Front-End d\'édition du datalake' },
      ],
    },
    {
      text: 'Technologies utilisées : ',
      children: [
        { text: 'ReactJS, D3 et Layout homemade' },
        { text: 'NodeJS, Typescript, Apollo GraphQL, NestJS, Mongoose' },
        { text: 'Babel, Prettier, ESLint' },
        { text: 'Storybook, Cypress, Jest' },
        { text: 'Docker' },
        { text: 'Github' },
      ],
    },
  ],
}
