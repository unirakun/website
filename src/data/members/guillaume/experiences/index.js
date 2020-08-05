const cgi = require('./cgi')
const euriware = require('./euriware')
const siao = require('./siao')
const contentFlow = require('./contentFlow')
const santeclair = require('./santeclair')
const metroscopeArchi = require('./metroscopeArchi')
const metroscopeDev = require('./metroscopeDev')
const darvaFormation = require('./darvaFormation')
const darva = require('./darva')
const sparklane = require('./sparklane')

module.exports = [
  cgi,
  euriware,
  siao,
  contentFlow,
  santeclair,
  sparklane,
  metroscopeArchi,
  metroscopeDev,
  darvaFormation,
  darva,
].sort((expA, expB) => {
  if (expA.dates.to === undefined) return 1
  return (expB.dates.to - expA.dates.to)
})
