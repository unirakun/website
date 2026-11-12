import fabien from "./fabien/index.js"
import guillaume from "./guillaume/index.js"

export default [
  { ...fabien, next: guillaume.id },
  { ...guillaume, next: fabien.id },
]
