import bereal from "./bereal.js"
import cantina from "./cantina.js"
import darvaBatchDatalake from "./darvaBatchDatalake.js"
import darvaExpertise from "./darvaExpertise.js"
import darvaUI from "./darvaUI.js"
import metroscopeArchi from "./metroscopeArchi.js"
import metroscopeDev from "./metroscopeDev.js"

export default [
  cantina,
  bereal,
  darvaBatchDatalake,
  darvaExpertise,
  darvaUI,
  metroscopeArchi,
  metroscopeDev,
].sort((expA, expB) => {
  if (expA.dates.to === undefined) return -1
  if (expB.dates.to === undefined) return 1
  return expB.dates.to - expA.dates.to
})
