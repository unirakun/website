module.exports = {
  title: 'Lead Développeur Backend',
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
    to: Date.UTC(2019, 11),
  },
  informations: [
    { text: 'DARVA est une entreprise experte en solutions web et EDI (Echanges de Données Informatisés) basée à Niort et destiné à tous les acteurs professionnels de l\'assurance.' },
    { text: 'Avec Guillaume CRESPEL, nous aidons le service BI à facilité l\'accès et la gouvernance des "données sinistres" pour les collaborateurs de DARVA ainsi que les acteurs des métiers de l\'assurance.' },
    { text: 'Nous agissons sur le stockage des données des assureurs au travers d\'un batch NodeJS modulaire avec la problématique de traiter un flux de données important alimentant le datalake.' },
    { text: 'Afin de maitriser la performance de ce batch, nous avons mis en place des métriques permettant de suivre la vélocité de nos algorithmes de désérialisation tout au long de nos développements.' },
    { text: 'Une fois cette mission terminée, nous avons réalisé le POC d\'une interface graphique pour exploiter le datalake.'},
    {
      text: 'Missions :',
      children: [
        { text: 'Développement du Batch de désérialisation et d\'alimentation du datalake' },
        { text: 'Algorithme et métriques de performance' },
        { text: 'Proposition d\'un POC d\'une interface graphique de naviguation dans la structure des données' },
      ],
    },
    {
      text: 'Technologies utilisées : ',
      children: [
        { text: 'Javascript, NodeJS, MongoDB' },
        { text: 'ReactJS, D3 et Layout homemade' },
        { text: 'Jest et tests de performances sur-mesure' },
        { text: 'Docker' },
        { text: 'Github' },
      ],
    },
  ],
}
