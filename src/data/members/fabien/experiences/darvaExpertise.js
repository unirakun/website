module.exports = {
  title: 'NodeJS Expert and Trainer',
  client: {
    name: 'DARVA',
    color: '#748694',
  },
  for: {
    name: 'unirakun',
    color: 'white',
  },
  dates: {
    from: Date.UTC(2018, 0),
    to: Date.UTC(2018, 11),
  },
  informations: [
    { text: 'DARVA is a company expert in web solutions and EDI (Electronic Data Interchange) based in Niort and serving all professional insurance actors' },
    { text: 'I worked with the BI service to help them create NodeJS scripts for data preparation in their MongoDB datalake.' },
    { text: 'This service was provided partly remotely and I worked a few days spread throughout the year.' },
    {
      text: 'Missions:',
      children: [
        { text: 'Implementation of the "monorepo" architecture for the datalake views management project' },
        { text: 'Advice and code reviews of code produced by the BI team' },
        { text: 'NodeJS training for the BI team' },
        { text: 'Development of tools to help develop data preparation scripts' },
        { text: 'Implementation of quality tools: generated documentation (JSDoc), unit tests (Jest), integration tests (Jest + Docker)' },
      ],
    },
    {
      text: 'Technologies used:',
      children: [
        { text: 'Github / Jenkins' },
        { text: 'NodeJS' },
        { text: 'MongoDB' },
        { text: 'Jest' },
        { text: 'Docker' },
        { text: 'Various NodeJS libraries' },
      ],
    },
  ],
}
