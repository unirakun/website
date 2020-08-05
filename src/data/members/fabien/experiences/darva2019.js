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
    from: Date.UTC(2019, 05),
    to: Date.now(),
  },
  informations: [
    { text: 'DARVA est une entreprise experte en solutions web et EDI (Echanges de Données Informatisés) basée à Niort et destiné à tous les acteurs professionnels de l\'assurance.' },
    { text: 'Avec Guillaume CRESPEL, nous aidons le service BI à faciliter l\'accès et la gouvernance des "données sinistres" pour les collaborateurs de Darva ainsi que les acteurs des métiers de l\'assurance.' },
    { text: 'Nous agissons sur le stockage des données des assureurs au travers de batch NodeJS, mais aussi sur l\'exploitation de celle-ci avec une UI utilisant l’écosystème ReactJS.' },
    {
      text: 'Missions :',
      children: [
        { text: 'Développement du Batch d\'alimentation du datalake' },
        { text: 'Développement Front-End de visualisation graphique du datalake' },
        { text: 'Développement Front-End d\'édition du datalake' },
        { text: 'Atelier UX / UI' },
      ],
    },
    {
      text: 'Technologies utilisées : ',
      children: [
        { text: 'ReactJS, Représentation Graphique (SVG Vanilla)' },
        { text: 'NodeJS, Typescript, Apollo GraphQL, MongoDB' },
        { text: 'NestJS, Babel, Prettier' },
        { text: 'Storybook, Cypress / Jest' },
        { text: 'Docker' },
        { text: 'Github' },
      ],
    },
  ],
}
