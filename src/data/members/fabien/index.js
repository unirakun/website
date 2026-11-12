import description from "./description.js"
import experiences from "./experiences/index.js"
import skills from "./skills.js"
import who from "./who.js"

export default {
  id: `${who.firstName}-${who.name}`,
  lang: "en",
  who,
  description,
  skills,
  experiences,
}
