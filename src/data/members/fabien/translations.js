// French translation of Fabien's résumé, keyed by the exact English source string.
export default {
  "Senior Software Engineer": "Ingénieur logiciel senior",
  "Fabien is a <b>fullstack developer</b> interested in everything, <b>Javascript</b> expert.\nHe is present on Youtube and Github where all his projects follow the same philosophy&nbsp;:&nbsp;aiming for the <b>cleanest code</b> possible and being <b>KISS.</b>\nHe worked at <b>BeReal</b> during their high growth phase, where he designed and built critical microservices serving <b>millions of requests per second</b>, including the users microservice handling <b>9M users/s</b>.\nWorking with Fabien means the assurance of a project that moves forward.\n":
    "Fabien est un <b>développeur fullstack</b> curieux de tout, expert <b>Javascript</b>.\nIl est présent sur Youtube et Github où tous ses projets suivent la même philosophie&nbsp;:&nbsp;viser le <b>code le plus propre</b> possible et rester <b>KISS.</b>\nIl a travaillé chez <b>BeReal</b> pendant leur phase de forte croissance, où il a conçu et construit des microservices critiques servant <b>des millions de requêtes par seconde</b>, dont le microservice utilisateurs gérant <b>9M users/s</b>.\nTravailler avec Fabien, c'est l'assurance d'un projet qui avance.\n",
  languages: "langages",
  databases: "bases de données",
  architecture: "architecture",
  frontend: "frontend",
  "Cloud providers": "Fournisseurs cloud",
  "BeReal is a social media app that allows users to share authentic, unfiltered moments with friends, capturing what they're doing at the moment.":
    "BeReal est une application de réseau social qui permet de partager des moments authentiques et sans filtre avec ses amis, en capturant ce qu'ils font sur le moment.",
  "I started at BeReal as the 4th backend engineer during the company's high growth phase. Initially hired as a Fullstack engineer, I quickly transitioned to focus on backend development where the company needed me most.":
    "J'ai rejoint BeReal en tant que 4ᵉ ingénieur backend pendant la phase de forte croissance de l'entreprise. Embauché au départ comme ingénieur Fullstack, je me suis rapidement orienté vers le développement backend, là où l'entreprise avait le plus besoin de moi.",
  "I redesigned and rewrote the moderation system to make it scalable, then designed and led the development of the friends of friends feed API.":
    "J'ai repensé et réécrit le système de modération pour le rendre scalable, puis j'ai conçu et piloté le développement de l'API du feed des amis d'amis.",
  "I co-designed and developed the chat API, which was the first Golang API for BeReal, using gRPC, Golang and Spanner.":
    "J'ai co-conçu et développé l'API de chat, la première API Golang de BeReal, avec gRPC, Golang et Spanner.",
  "I designed and created the first microservice at BeReal: the feature flag system. This first gRPC/Golang microservice handles millions of requests per second with a P99 of 10ms and a median of 1ms.":
    "J'ai conçu et créé le premier microservice de BeReal : le système de feature flags. Ce premier microservice gRPC/Golang gère des millions de requêtes par seconde avec un P99 de 10ms et une médiane de 1ms.",
  "I designed and created the users microservice, now the most important service at BeReal. It serves 9M users per second, with a P99 of 30ms to retrieve 50 users and a P50 of 1ms.":
    "J'ai conçu et créé le microservice utilisateurs, aujourd'hui le service le plus important de BeReal. Il sert 9M d'utilisateurs par seconde, avec un P99 de 30ms pour récupérer 50 utilisateurs et un P50 de 1ms.",
  "I introduced several key patterns still used at BeReal: auto-batching downstream requests in NodeJS and Golang, elastic Redis cluster using k8s informer pattern and consistent hashing, warmup procedures, and data migration procedures.":
    "J'ai introduit plusieurs patterns clés toujours utilisés chez BeReal : l'auto-batching des requêtes en aval en NodeJS et Golang, un cluster Redis élastique basé sur le pattern informer de k8s et le consistent hashing, des procédures de warmup et des procédures de migration de données.",
  "I optimized the load balancing efficiency in the k8s cluster and reduced costs by improving the HPA scaling algorithm for faster scale-up and scale-down.":
    "J'ai optimisé l'efficacité du load balancing dans le cluster k8s et réduit les coûts en améliorant l'algorithme de scaling du HPA pour des montées et descentes en charge plus rapides.",
  "I created a Job framework with UI designed on top of argo-events to provide a simple and efficient job system leveraging BeReal's specific needs.":
    "J'ai créé un framework de Jobs avec une UI, construit au-dessus d'argo-events, pour offrir un système de jobs simple et efficace, adapté aux besoins spécifiques de BeReal.",
  "Missions:": "Missions :",
  "Redesigned and rewrote the moderation system for scalability":
    "Refonte et réécriture du système de modération pour le rendre scalable",
  "Designed and led development of friends of friends feed API":
    "Conception et pilotage du développement de l'API du feed des amis d'amis",
  "Co-designed and developed the chat API (first Golang API)":
    "Co-conception et développement de l'API de chat (première API Golang)",
  "Created the feature flag microservice (first gRPC/Golang microservice)":
    "Création du microservice de feature flags (premier microservice gRPC/Golang)",
  "Designed and created the users microservice (9M users/s)":
    "Conception et création du microservice utilisateurs (9M users/s)",
  "Introduced auto-batching patterns for NodeJS and Golang":
    "Introduction de patterns d'auto-batching pour NodeJS et Golang",
  "Implemented elastic Redis cluster with k8s informer pattern":
    "Mise en place d'un cluster Redis élastique avec le pattern informer de k8s",
  "Optimized k8s load balancing and HPA scaling algorithm":
    "Optimisation du load balancing k8s et de l'algorithme de scaling du HPA",
  "Created Job framework and UI on top of argo-events":
    "Création d'un framework de Jobs et de son UI sur argo-events",
  "Set up proper Golang monorepo and CI configuration":
    "Mise en place d'un monorepo Golang propre et de sa configuration CI",
  "Technologies used:": "Technologies utilisées :",
  "Golang, NodeJS, TypeScript": "Golang, NodeJS, TypeScript",
  "gRPC, GraphQL": "gRPC, GraphQL",
  "Google Cloud Spanner, Redis": "Google Cloud Spanner, Redis",
  "Kubernetes, Docker": "Kubernetes, Docker",
  "Argo Events": "Argo Events",
  "Lead Frontend Developer": "Lead développeur frontend",
  "DARVA is a company expert in web solutions and EDI (Electronic Data Interchange) based in Niort and serving all professional insurance actors.":
    "DARVA est une entreprise experte en solutions web et en EDI (Échange de Données Informatisé), basée à Niort et au service de tous les acteurs professionnels de l'assurance.",
  'With Nicolas REMISE (internal DARVA) and Guillaume CRESPEL, we helped the BI service facilitate access and governance of "claims data" for DARVA employees as well as insurance industry actors.':
    "Avec Nicolas REMISE (interne DARVA) et Guillaume CRESPEL, nous avons aidé le service BI à faciliter l'accès et la gouvernance des « données sinistres » pour les collaborateurs de DARVA ainsi que pour les acteurs du secteur de l'assurance.",
  "We simplified the visualization and editing of insurance data structures through a new graphical interface. The goal was to replace an old editing tool, and allow all employees to regain ownership of the knowledge related to this data.":
    "Nous avons simplifié la visualisation et l'édition des structures de données d'assurance grâce à une nouvelle interface graphique. L'objectif était de remplacer un ancien outil d'édition et de permettre à tous les collaborateurs de se réapproprier la connaissance liée à ces données.",
  "To facilitate access to this knowledge, we had to offer an ergonomic, responsive, and understandable graphical interface. We relied on well-known graphical representations such as trees (treeview) or graphs (radial). And for editing, when appropriate, we used drag'n'drop. All using the ReactJS ecosystem.":
    "Pour faciliter l'accès à cette connaissance, il fallait proposer une interface graphique ergonomique, responsive et compréhensible. Nous nous sommes appuyés sur des représentations graphiques connues comme les arbres (treeview) ou les graphes (radial). Et pour l'édition, lorsque c'était pertinent, nous avons utilisé le drag'n'drop. Le tout avec l'écosystème ReactJS.",
  "UX / UI Workshop": "Atelier UX / UI",
  "Front-End development for graphical visualization of the datalake":
    "Développement Front-End de la visualisation graphique du datalake",
  "Front-End development for datalake editing":
    "Développement Front-End de l'édition du datalake",
  "ReactJS, D3 and homemade Layout": "ReactJS, D3 et Layout maison",
  "NodeJS, Typescript, Apollo GraphQL, NestJS, Mongoose":
    "NodeJS, Typescript, Apollo GraphQL, NestJS, Mongoose",
  "Babel, Prettier, ESLint": "Babel, Prettier, ESLint",
  "Storybook, Cypress, Jest": "Storybook, Cypress, Jest",
  Docker: "Docker",
  Github: "Github",
  "Lead Backend Developer": "Lead développeur backend",
  "As DARVA wants to increasingly rely on the mass of data they process, it is necessary for them to integrate it into a datalake accessible to all services.":
    "DARVA souhaitant s'appuyer de plus en plus sur la masse de données qu'elle traite, il lui est nécessaire de l'intégrer dans un datalake accessible à tous les services.",
  "To this end, we worked on storing claims-related data through a NodeJS batch. It must be modular, reusable, and very performant since several gigabytes of data must be processed in a short time window.":
    "Pour cela, nous avons travaillé sur le stockage des données liées aux sinistres via un batch NodeJS. Il devait être modulaire, réutilisable et très performant, car plusieurs gigaoctets de données doivent être traités dans une fenêtre de temps courte.",
  "Thanks to NodeJS streams, data is decoded, deserialized, and then stored in MongoDB database on the fly.":
    "Grâce aux streams NodeJS, les données sont décodées, désérialisées puis stockées à la volée dans la base MongoDB.",
  "In order to control the batch performance, we implemented metrics to track the velocity of our algorithms throughout our development.":
    "Afin de maîtriser les performances du batch, nous avons mis en place des métriques pour suivre la vélocité de nos algorithmes tout au long du développement.",
  "Once this mission was completed, we created a POC of a graphical interface allowing better understanding of the data structure.":
    "Une fois cette mission terminée, nous avons créé un POC d'interface graphique permettant de mieux comprendre la structure des données.",
  "Development of a data integration batch":
    "Développement d'un batch d'intégration de données",
  "Algorithm and performance metrics":
    "Algorithmie et métriques de performance",
  "Knowledge transfer to internal teams":
    "Transfert de connaissances aux équipes internes",
  "Proposal of a POC for a graphical interface to navigate through data structure":
    "Proposition d'un POC d'interface graphique pour naviguer dans la structure des données",
  "Javascript, NodeJS, MongoDB": "Javascript, NodeJS, MongoDB",
  "Jest and custom performance tests":
    "Jest et tests de performance sur mesure",
  "Frontend Developer": "Développeur frontend",
  "Metroscope is a startup, subsidiary of the EDF group, composed of about ten people. Metroscope allows rapid determination of anomalies occurring in nuclear power plant cooling systems.":
    "Metroscope est une startup, filiale du groupe EDF, composée d'une dizaine de personnes. Metroscope permet de déterminer rapidement les anomalies survenant dans les circuits de refroidissement des centrales nucléaires.",
  "With Guillaume CRESPEL, we implemented and continued to develop the Metroscope product on the Front-End side, remotely. Once it was secured and in production, we trained our successors so they could be autonomous on the implemented stack.":
    "Avec Guillaume CRESPEL, nous avons mis en place puis continué à développer le produit Metroscope côté Front-End, en télétravail. Une fois le produit sécurisé et en production, nous avons formé nos successeurs pour qu'ils soient autonomes sur la stack mise en place.",
  "Front-End Development": "Développement Front-End",
  "Recruitment assistance: interviews and selection of successors":
    "Aide au recrutement : entretiens et sélection des successeurs",
  "Training of successors": "Formation des successeurs",
  "ReactJS / Redux / k-ramel / react-vis / D3.js / JSS":
    "ReactJS / Redux / k-ramel / react-vis / D3.js / JSS",
  "Java 8 / SpringBoot": "Java 8 / SpringBoot",
  "Webpack / Babel / ESLint": "Webpack / Babel / ESLint",
  "Cypress / Jest": "Cypress / Jest",
  "Docker / CircleCI / Kubernetes / GKE (google cloud)":
    "Docker / CircleCI / Kubernetes / GKE (google cloud)",
  "Github / Jira": "Github / Jira",
  "NodeJS Expert and Trainer": "Expert et formateur NodeJS",
  "DARVA is a company expert in web solutions and EDI (Electronic Data Interchange) based in Niort and serving all professional insurance actors":
    "DARVA est une entreprise experte en solutions web et en EDI (Échange de Données Informatisé), basée à Niort et au service de tous les acteurs professionnels de l'assurance",
  "I worked with the BI service to help them create NodeJS scripts for data preparation in their MongoDB datalake.":
    "J'ai travaillé avec le service BI pour les aider à créer des scripts NodeJS de préparation de données dans leur datalake MongoDB.",
  "This service was provided partly remotely and I worked a few days spread throughout the year.":
    "Cette prestation a été réalisée en partie à distance, sur quelques jours répartis tout au long de l'année.",
  'Implementation of the "monorepo" architecture for the datalake views management project':
    "Mise en place de l'architecture « monorepo » pour le projet de gestion des vues du datalake",
  "Advice and code reviews of code produced by the BI team":
    "Conseils et revues de code du code produit par l'équipe BI",
  "NodeJS training for the BI team": "Formation NodeJS pour l'équipe BI",
  "Development of tools to help develop data preparation scripts":
    "Développement d'outils pour aider à écrire les scripts de préparation de données",
  "Implementation of quality tools: generated documentation (JSDoc), unit tests (Jest), integration tests (Jest + Docker)":
    "Mise en place d'outils qualité : documentation générée (JSDoc), tests unitaires (Jest), tests d'intégration (Jest + Docker)",
  "Github / Jenkins": "Github / Jenkins",
  NodeJS: "NodeJS",
  MongoDB: "MongoDB",
  Jest: "Jest",
  "Various NodeJS libraries": "Diverses bibliothèques NodeJS",
  "Architecture and Project Management Consultant":
    "Consultant en architecture et gestion de projet",
  "With Guillaume CRESPEL, we challenged their MVP in order to produce a first version on a solid and efficient stack while keeping in mind the needs and constraints of a large structure like EDF.":
    "Avec Guillaume CRESPEL, nous avons challengé leur MVP afin de produire une première version sur une stack solide et efficace, tout en gardant à l'esprit les besoins et contraintes d'une grande structure comme EDF.",
  "Database structure design":
    "Conception de la structure de la base de données",
  "Selection of appropriate Front-end and Back-end technologies to use":
    "Choix des technologies Front-end et Back-end adaptées",
  "Implementation of Front-End and Back-End technical foundation":
    "Mise en place des fondations techniques Front-End et Back-End",
  "Implementation of CI / CD": "Mise en place de la CI / CD",
  "Project management assistance and agile consulting":
    "Aide à la gestion de projet et conseil en agilité",
  "Software Engineer": "Ingénieur logiciel",
  "Building Social AI.": "Construire l'IA sociale.",
  "Cantina Labs is a social AI company developing a suite of advanced real-time models that push the boundaries of expression, personality and realism. Its flagship social AI platform, Cantina, brings characters to life and changes how people tell stories, connect and create.":
    "Cantina Labs est une entreprise d'IA sociale qui développe une suite de modèles temps réel avancés, repoussant les limites de l'expression, de la personnalité et du réalisme. Sa plateforme phare, Cantina, donne vie à des personnages et change la façon dont les gens racontent des histoires, se connectent et créent.",
  "Focus:": "Domaines :",
  "Software infrastructure": "Infrastructure logicielle",
  "Software design": "Conception de logiciels",
  "Senior Backend Developer, Core team (TS/Go)":
    "Développeur backend senior, Core team (TS/Go)",
  "Joined in March 2022 as a freelance Senior Full Stack Developer, then Senior Backend Developer in the core team (TypeScript) from May 2022, and on a permanent contract from October 2022 (TypeScript and Go).":
    "Arrivé en mars 2022 comme développeur full-stack senior en freelance, puis développeur backend senior dans la core team (TypeScript) à partir de mai 2022, et en CDI à partir d'octobre 2022 (TypeScript et Go).",
  "Led the development of a new elastic caching framework, using consistent hashing and gRPC":
    "Pilotage du développement d'un nouveau framework de cache élastique, avec consistent hashing et gRPC",
}
