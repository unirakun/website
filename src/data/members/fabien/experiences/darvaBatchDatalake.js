module.exports = {
  title: "Lead Backend Developer",
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
      text: "DARVA is a company expert in web solutions and EDI (Electronic Data Interchange) based in Niort and serving all professional insurance actors.",
    },
    {
      text: "As DARVA wants to increasingly rely on the mass of data they process, it is necessary for them to integrate it into a datalake accessible to all services.",
    },
    {
      text: "To this end, we worked on storing claims-related data through a NodeJS batch. It must be modular, reusable, and very performant since several gigabytes of data must be processed in a short time window.",
    },
    {
      text: "Thanks to NodeJS streams, data is decoded, deserialized, and then stored in MongoDB database on the fly.",
    },
    {
      text: "In order to control the batch performance, we implemented metrics to track the velocity of our algorithms throughout our development.",
    },
    {
      text: "Once this mission was completed, we created a POC of a graphical interface allowing better understanding of the data structure.",
    },
    {
      text: "Missions:",
      children: [
        { text: "Development of a data integration batch" },
        { text: "Algorithm and performance metrics" },
        { text: "Knowledge transfer to internal teams" },
        {
          text: "Proposal of a POC for a graphical interface to navigate through data structure",
        },
      ],
    },
    {
      text: "Technologies used:",
      children: [
        { text: "Javascript, NodeJS, MongoDB" },
        { text: "ReactJS, D3 and homemade Layout" },
        { text: "Jest and custom performance tests" },
        { text: "Docker" },
        { text: "Github" },
      ],
    },
  ],
}
