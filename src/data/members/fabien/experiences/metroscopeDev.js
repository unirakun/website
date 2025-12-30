module.exports = {
  title: 'Frontend Developer',
  client: {
    name: 'Metroscope',
    color: '#0052a9',
  },
  for: {
    name: 'unirakun',
    color: 'white',
  },
  dates: {
    from: Date.UTC(2018, 6),
    to: Date.UTC(2019, 2),
  },
  informations: [
    { text: 'Metroscope is a startup, subsidiary of the EDF group, composed of about ten people. Metroscope allows rapid determination of anomalies occurring in nuclear power plant cooling systems.' },
    { text: 'With Guillaume CRESPEL, we implemented and continued to develop the Metroscope product on the Front-End side, remotely. Once it was secured and in production, we trained our successors so they could be autonomous on the implemented stack.' },
    {
      text: 'Missions:',
      children: [
        { text: 'Front-End Development' },
        { text: 'UX / UI Workshop' },
        { text: 'Recruitment assistance: interviews and selection of successors' },
        { text: 'Training of successors' },
      ],
    },
    {
      text: 'Technologies used:',
      children: [
        { text: 'ReactJS / Redux / k-ramel / react-vis / D3.js / JSS' },
        { text: 'Java 8 / SpringBoot' },
        { text: 'Webpack / Babel / ESLint' },
        { text: 'Cypress / Jest' },
        { text: 'Docker / CircleCI / Kubernetes / GKE (google cloud)' },
        { text: 'Github / Jira' },
      ],
    },
  ],
}
