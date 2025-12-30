module.exports = {
  title: "Architecture and Project Management Consultant",
  client: {
    name: "Metroscope",
    color: "#0052a9",
  },
  for: {
    name: "unirakun",
    color: "white",
  },
  dates: {
    from: Date.UTC(2018, 2),
    to: Date.UTC(2018, 5),
  },
  informations: [
    {
      text: "Metroscope is a startup, subsidiary of the EDF group, composed of about ten people. Metroscope allows rapid determination of anomalies occurring in nuclear power plant cooling systems.",
    },
    {
      text: "With Guillaume CRESPEL, we challenged their MVP in order to produce a first version on a solid and efficient stack while keeping in mind the needs and constraints of a large structure like EDF.",
    },
    {
      text: "Missions:",
      children: [
        { text: "Database structure design" },
        {
          text: "Selection of appropriate Front-end and Back-end technologies to use",
        },
        {
          text: "Implementation of Front-End and Back-End technical foundation",
        },
        { text: "Implementation of CI / CD" },
        { text: "UX / UI Workshop" },
        { text: "Project management assistance and agile consulting" },
      ],
    },
    {
      text: "Technologies used:",
      children: [
        { text: "ReactJS / Redux / k-ramel / react-vis / D3.js / JSS" },
        { text: "Java 8 / SpringBoot" },
        { text: "Webpack / Babel / ESLint" },
        { text: "Cypress / Jest" },
        { text: "Docker / CircleCI / Kubernetes / GKE (google cloud)" },
        { text: "Github / Jira" },
      ],
    },
  ],
}
