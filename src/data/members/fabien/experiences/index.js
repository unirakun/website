const chargeProjet = require('./chargeProjet')
const concepteur = require('./concepteur')
const darva = require('./darva')
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
  darva,
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
