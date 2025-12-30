const darvaBatchDatalake = require('./darvaBatchDatalake')
const darvaExpertise = require('./darvaExpertise')
const darvaUI = require('./darvaUI')
const metroscopeArchi = require('./metroscopeArchi')
const metroscopeDev = require('./metroscopeDev')

module.exports = [
  darvaBatchDatalake,
  darvaExpertise,
  darvaUI,
  metroscopeArchi,
  metroscopeDev,
].sort((expA, expB) => {
  if (expA.dates.to === undefined) return 1
  return (expB.dates.to - expA.dates.to)
})
