const chargeProjet = require('./chargeProjet')
const concepteur = require('./concepteur')
const darvaExpertise = require('./darvaExpertise')
const darvaBatchDatalake = require('./darvaBatchDatalake')
const darvaUI = require('./darvaUI')
const developpeur = require('./developpeur')
const ge = require('./ge')
const ices = require('./ices')
const maif = require('./maif')
const mcomm = require('./mcomm')
const metroscopeArchi = require('./metroscopeArchi')
const metroscopeDev = require('./metroscopeDev')
const santeclair = require('./santeclair')
const sparklane = require('./sparklane')

module.exports = [
  chargeProjet,
  concepteur,
  darvaBatchDatalake,
  darvaExpertise,
  darvaUI,
  developpeur,
  ge,
  ices,
  maif,
  mcomm,
  metroscopeArchi,
  metroscopeDev,
  santeclair,
  sparklane,
].sort((expA, expB) => {
  if (expA.dates.to === undefined) return 1
  return (expB.dates.to - expA.dates.to)
})
