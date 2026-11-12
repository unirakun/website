// Technology logos from Simple Icons (CC0, with each brand's own colour),
// imported at build time only: the pages ship the SVG paths, not the library.
// `techLogo(skill)` serves the skills grid; `logosIn(text)` finds the logos of
// every tool named in a "Technologies used" line. Tools Simple Icons does not
// carry (AWS, Azure, C#, gRPC…) simply get no logo, or initials for skills.

import {
  siAngular,
  siApachemaven,
  siApachetomcat,
  siApollographql,
  siArgo,
  siBabel,
  siCircleci,
  siCodeceptjs,
  siCypress,
  siD3,
  siDatadog,
  siDocker,
  siDotnet,
  siEclipseide,
  siElasticsearch,
  siEslint,
  siExpress,
  siGithub,
  siGo,
  siGooglecloud,
  siGooglecloudspanner,
  siGraphql,
  siJavascript,
  siJenkins,
  siJest,
  siJira,
  siJunit5,
  siKubernetes,
  siLinux,
  siMongodb,
  siMongoose,
  siNestjs,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPrettier,
  siQuarkus,
  siReact,
  siRedis,
  siRedux,
  siReduxsaga,
  siRust,
  siSocketdotio,
  siSpring,
  siSpringboot,
  siStorybook,
  siSupabase,
  siTypescript,
  siVite,
  siVitest,
  siWebpack,
} from "simple-icons"

type SimpleIcon = { title: string; path: string; hex: string }

// Every spelling used in the résumés, lower-cased, mapped to its icon.
const BY_NAME: Record<string, SimpleIcon> = {
  javascript: siJavascript,
  typescript: siTypescript,
  go: siGo,
  golang: siGo,
  rust: siRust,
  react: siReact,
  reactjs: siReact,
  "react-vis": siReact,
  angularjs: siAngular,
  apollo: siApollographql,
  "apollo graphql": siApollographql,
  redux: siRedux,
  rtk: siRedux,
  rtkquery: siRedux,
  "redux-saga": siReduxsaga,
  nodejs: siNodedotjs,
  graphql: siGraphql,
  "koa / express": siExpress,
  express: siExpress,
  nestjs: siNestjs,
  "socket.io": siSocketdotio,
  vite: siVite,
  vitejs: siVite,
  vitest: siVitest,
  nextjs: siNextdotjs,
  codeceptjs: siCodeceptjs,
  cypress: siCypress,
  jest: siJest,
  junit: siJunit5,
  storybook: siStorybook,
  webpack: siWebpack,
  babel: siBabel,
  eslint: siEslint,
  prettier: siPrettier,
  d3: siD3,
  "d3.js": siD3,
  mongodb: siMongodb,
  mongoose: siMongoose,
  postgresql: siPostgresql,
  redis: siRedis,
  elasticsearch: siElasticsearch,
  spanner: siGooglecloudspanner,
  "google cloud spanner": siGooglecloudspanner,
  supabase: siSupabase,
  docker: siDocker,
  kubernetes: siKubernetes,
  k8s: siKubernetes,
  "gnu/linux": siLinux,
  gcp: siGooglecloud,
  gke: siGooglecloud,
  "gke (google cloud)": siGooglecloud,
  "argo events": siArgo,
  circleci: siCircleci,
  jenkins: siJenkins,
  datadog: siDatadog,
  nginx: siNginx,
  github: siGithub,
  jira: siJira,
  ".net": siDotnet,
  java: siOpenjdk,
  "java 6": siOpenjdk,
  "java 7": siOpenjdk,
  "java 8": siOpenjdk,
  j2e: siOpenjdk,
  maven: siApachemaven,
  "tomcat 6.0": siApachetomcat,
  eclipse: siEclipseide,
  spring: siSpring,
  springboot: siSpringboot,
  quarkus: siQuarkus,
}

export interface TechLogo {
  title?: string
  path?: string
  /** Brand colour, or undefined when it is too dark to read on the page
   *  (black logos then follow the ink colour in both themes). */
  color?: string
  initials: string
}

const luminance = (hex: string) => {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

const toLogo = (icon: SimpleIcon, initials = ""): TechLogo => ({
  title: icon.title,
  path: icon.path,
  color: luminance(icon.hex) < 0.02 ? undefined : `#${icon.hex}`,
  initials,
})

export const techLogo = (skill: string): TechLogo => {
  const icon = BY_NAME[skill.toLowerCase()]
  const initials = skill.replace(/[^A-Za-z0-9]/g, "").slice(0, 2)
  return icon ? toLogo(icon, initials) : { initials }
}

/** The logos of the tools named in a line like "Golang, NodeJS, TypeScript". */
export const logosIn = (text: string): TechLogo[] => {
  const seen = new Set<string>()
  return text
    .split(/,|\/| et | and |\+/)
    .map((token) => token.trim().toLowerCase())
    .map((token) => BY_NAME[token] ?? BY_NAME[token.replace(/\s*\(.*\)$/, "")])
    .filter((icon): icon is SimpleIcon => {
      if (!icon || seen.has(icon.title)) return false
      seen.add(icon.title)
      return true
    })
    .map((icon) => toLogo(icon))
}
