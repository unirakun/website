module.exports = {
  title: "Senior Software Engineer",
  for: {
    name: "BeReal",
    color: "#000000",
  },
  dates: {
    from: Date.UTC(2022, 0),
    to: Date.UTC(2024, 11),
  },
  informations: [
    {
      text: "BeReal is a social media app that allows users to share authentic, unfiltered moments with friends, capturing what they're doing at the moment.",
    },
    {
      text: "I started at BeReal as the 4th backend engineer during the company's high growth phase. Initially hired as a Fullstack engineer, I quickly transitioned to focus on backend development where the company needed me most.",
    },
    {
      text: "I redesigned and rewrote the moderation system to make it scalable, then designed and led the development of the friends of friends feed API.",
    },
    {
      text: "I co-designed and developed the chat API, which was the first Golang API for BeReal, using gRPC, Golang and Spanner.",
    },
    {
      text: "I designed and created the first microservice at BeReal: the feature flag system. This first gRPC/Golang microservice handles millions of requests per second with a P99 of 10ms and a median of 1ms.",
    },
    {
      text: "I designed and created the users microservice, now the most important service at BeReal. It serves 9M users per second, with a P99 of 30ms to retrieve 50 users and a P50 of 1ms.",
    },
    {
      text: "I introduced several key patterns still used at BeReal: auto-batching downstream requests in NodeJS and Golang, elastic Redis cluster using k8s informer pattern and consistent hashing, warmup procedures, and data migration procedures.",
    },
    {
      text: "I optimized the load balancing efficiency in the k8s cluster and reduced costs by improving the HPA scaling algorithm for faster scale-up and scale-down.",
    },
    {
      text: "I created a Job framework with UI designed on top of argo-events to provide a simple and efficient job system leveraging BeReal's specific needs.",
    },
    {
      text: "Missions:",
      children: [
        {
          text: "Redesigned and rewrote the moderation system for scalability",
        },
        { text: "Designed and led development of friends of friends feed API" },
        { text: "Co-designed and developed the chat API (first Golang API)" },
        {
          text: "Created the feature flag microservice (first gRPC/Golang microservice)",
        },
        { text: "Designed and created the users microservice (9M users/s)" },
        { text: "Introduced auto-batching patterns for NodeJS and Golang" },
        { text: "Implemented elastic Redis cluster with k8s informer pattern" },
        { text: "Optimized k8s load balancing and HPA scaling algorithm" },
        { text: "Created Job framework and UI on top of argo-events" },
        { text: "Set up proper Golang monorepo and CI configuration" },
      ],
    },
    {
      text: "Technologies used:",
      children: [
        { text: "Golang, NodeJS, TypeScript" },
        { text: "gRPC, GraphQL" },
        { text: "Google Cloud Spanner, Redis" },
        { text: "Kubernetes, Docker" },
        { text: "Argo Events" },
      ],
    },
  ],
}
