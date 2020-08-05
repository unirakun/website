const chargeProjet = require('./chargeProjet')
const concepteur = require('./concepteur')
const darva2018 = require('./darva2018')
const darva2019 = require('./darva2019')
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
  darva2018,
  darva2019,
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
