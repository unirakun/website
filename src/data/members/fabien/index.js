const description = require('./description')
const experiences = require('./experiences')
const skills = require('./skills')
const who = require('./who')

module.exports = {
  id: `${who.firstName}-${who.name}`,
  who,
  description,
  skills,
  experiences,
}
