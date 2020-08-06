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
    { text: 'Avec Guillaume CRESPEL, nous aidons le service BI à faciliter l\'accès et la gouvernance des "données sinistres" pour les collaborateurs de DARVA ainsi que les acteurs des métiers de l\'assurance.' },
    { text: 'Nous simplifions la visualisation et l\'édition de la structure de données des assureurs grâce à une interface graphique ergonomique à base d\'arbre et de graphe en utilisant l’écosystème ReactJS.' },
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
        { text: 'NodeJS, Typescript, Apollo GraphQL, MongoDB' },
        { text: 'NestJS, Babel, Prettier' },
        { text: 'Storybook, Cypress, Jest' },
        { text: 'Docker' },
        { text: 'Github' },
      ],
    },
  ],
}
