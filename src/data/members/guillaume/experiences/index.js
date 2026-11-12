import cgi from "./cgi.js"
import euriware from "./euriware.js"
import siao from "./siao.js"
import contentFlow from "./contentFlow.js"
import santeclair from "./santeclair.js"
import metroscopeArchi from "./metroscopeArchi.js"
import metroscopeDev from "./metroscopeDev.js"
import darvaFormation from "./darvaFormation.js"
import darvaBatchDatalake from "./darvaBatchDatalake.js"
import darvaUI from "./darvaUI.js"
import sparklane from "./sparklane.js"
import sgmarket from "./sgmarket.js"
import decathlon from "./decathlon.js"
import cockpitAgriculture from "./cockpitAgriculture.js"
import kojimo from "./kojimo.js"
import acolad from "./acolad.js"

export default [
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
  decathlon,
  cockpitAgriculture,
  kojimo,
  acolad,
].sort(
  // Most recent first; a role without an end date is ongoing, so it comes first.
  (expA, expB) =>
    (expB.dates.to ?? Infinity) - (expA.dates.to ?? Infinity) ||
    expB.dates.from - expA.dates.from
)
