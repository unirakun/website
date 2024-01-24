const cgi = require('./cgi')
const euriware = require('./euriware')
const siao = require('./siao')
const contentFlow = require('./contentFlow')
const santeclair = require('./santeclair')
const metroscopeArchi = require('./metroscopeArchi')
const metroscopeDev = require('./metroscopeDev')
const darvaFormation = require('./darvaFormation')
const darvaBatchDatalake = require('./darvaBatchDatalake')
const darvaUI = require('./darvaUI')
const sparklane = require('./sparklane')
const sgmarket = require('./sgmarket')

module.exports = [
  cgi,
  contentFlow,
  darvaBatchDatalake,
  darvaFormation,
  darvaUI,
  euriware,
  metroscopeArchi,
  metroscopeDev,
  santeclair,
  siao,
  sparklane,
  sgmarket,
].sort((expA, expB) => {
  if (expA.dates.to === undefined) return 1
  return (expB.dates.to - expA.dates.to)
})
