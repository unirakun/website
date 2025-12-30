const fabien = require("./fabien")
const guillaume = require("./guillaume")

module.exports = [
  { ...fabien, next: guillaume.id },
  { ...guillaume, next: fabien.id },
]
