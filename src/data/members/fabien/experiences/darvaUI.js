module.exports = {
  title: 'Lead Frontend Developer',
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
    to: Date.UTC(2022, 0),
  },
  informations: [
    { text: 'DARVA is a company expert in web solutions and EDI (Electronic Data Interchange) based in Niort and serving all professional insurance actors.' },
    { text: 'With Nicolas REMISE (internal DARVA) and Guillaume CRESPEL, we helped the BI service facilitate access and governance of "claims data" for DARVA employees as well as insurance industry actors.' },
    { text: 'We simplified the visualization and editing of insurance data structures through a new graphical interface. The goal was to replace an old editing tool, and allow all employees to regain ownership of the knowledge related to this data.' },
    { text: 'To facilitate access to this knowledge, we had to offer an ergonomic, responsive, and understandable graphical interface. We relied on well-known graphical representations such as trees (treeview) or graphs (radial). And for editing, when appropriate, we used drag\'n\'drop. All using the ReactJS ecosystem.' },
    {
      text: 'Missions:',
      children: [
        { text: 'UX / UI Workshop' },
        { text: 'Front-End development for graphical visualization of the datalake' },
        { text: 'Front-End development for datalake editing' },
      ],
    },
    {
      text: 'Technologies used:',
      children: [
        { text: 'ReactJS, D3 and homemade Layout' },
        { text: 'NodeJS, Typescript, Apollo GraphQL, NestJS, Mongoose' },
        { text: 'Babel, Prettier, ESLint' },
        { text: 'Storybook, Cypress, Jest' },
        { text: 'Docker' },
        { text: 'Github' },
      ],
    },
  ],
}
