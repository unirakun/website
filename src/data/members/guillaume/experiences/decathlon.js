export default {
  title: "Développeur Frontend Senior",
  client: {
    name: "Decathlon",
    color: "white",
  },
  for: {
    name: "unirakun",
    color: "white",
  },
  dates: {
    from: Date.UTC(2024, 3),
    to: Date.UTC(2025, 5),
  },
  informations: [
    {
      text: "Objectif : monter une petite équipe pour redéfinir le système de caisse de Decathlon dans le monde entier.",
    },
    {
      text: "Missions :",
      children: [
        {
          text: "Création d'un frontend modulable qui s'adapte aux cas d'usage de chaque pays",
        },
        {
          text: "Réflexion et mise en place d'une architecture hexagonale dans un contexte DDD",
        },
        { text: "Communication avec les périphériques, comme les bacs RFID" },
        {
          text: "Intégration des services sur le matériel existant, dans un environnement Kubernetes",
        },
        {
          text: "Pyramide de tests respectée, avec des tests E2E et d'intégration",
        },
      ],
    },
    {
      text: "Technologies utilisées : ",
      children: [
        { text: "TypeScript, Java" },
        { text: "ReactJS, zustand, Quarkus" },
        { text: "PostgreSQL, WebSocket, REST" },
        { text: "Kubernetes, Datadog" },
      ],
    },
  ],
}
