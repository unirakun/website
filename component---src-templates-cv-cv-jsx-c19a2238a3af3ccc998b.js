(self.webpackChunkrakun_website=self.webpackChunkrakun_website||[]).push([[3],{5705:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return k}});var r=o(7294),i=o(3133),n=o(168),l=o(1883);var a=(0,i.default)((e=>{let{className:t,children:o}=e;return r.createElement("div",{className:t},o.map((e=>{let{name:t,skills:o}=e;return r.createElement(n.$L,{key:t,skills:o})})))})).withConfig({displayName:"skills",componentId:"sc-136incx-0"})(["min-height:10em;grid-area:skills;background-color:#0006;color:",";display:flex;justify-content:center;align-items:flex-start;margin-bottom:-4em;margin-top:4em;padding:1em;flex-wrap:wrap;& > ","{@media (max-width:550px){margin:1em 0;}}"],(e=>{let{theme:t}=e;return t.light}),n.$L);const s=e=>{let{className:t,id:o,next:i,who:s,skills:c}=e;const{name:m,firstName:f,what:d,birthday:p,worksSince:u,socials:h}=s;return r.createElement(n.Aq,{className:t,secondary:!0},r.createElement(n.qE,{className:"avatar",id:o}),r.createElement(l.Link,{to:"/"+i,className:"other"},r.createElement(n.qE,{className:"avatar",id:i})),r.createElement("div",{className:"description"},r.createElement("h1",null,f+" "+m),r.createElement("h2",null,d)),r.createElement("div",{className:"age-experience"},r.createElement(n.ZA,{from:p,suffix:" ans - "}),r.createElement(n.ZA,{from:u,suffix:" ans d'expérience"})),r.createElement("div",{className:"socials"},h.map((e=>r.createElement(n.g_,Object.assign({key:e.id},e,{text:!0}))))),r.createElement(a,null,c))};s.defaultProps={who:{socials:[]},skills:[]};var c=(0,i.default)(s).withConfig({displayName:"who",componentId:"sc-1y3kmbb-0"})(['min-height:20em;grid-area:who;padding-top:4em;padding-bottom:4em;display:grid;align-items:center;position:relative;grid-template-columns:5em 10em auto 1fr auto auto 5em;grid-template-rows:3em 3em 3em 3em auto;grid-template-areas:". socials avatar . . . ." ". socials avatar description . . ." ". socials avatar . . . ." ". socials avatar age-experience . . ." "skills skills skills skills skills skills skills";& > .other{font-size:0.5em;cursor:pointer;@media print{display:none;}& > .avatar{opacity:0.3;position:absolute;top:1em;right:1em;&:hover{opacity:1;}}}& > .avatar{grid-area:avatar;justify-self:end;margin:0 3em;}& > .description{grid-area:description;}& > .age-experience{grid-area:age-experience;min-height:1em;align-self:baseline;}& > .socials{grid-area:socials;justify-self:end;min-width:12em;& > ',"{display:flex;align-items:center;font-size:1em;color:",';& span{margin-left:1em;text-decoration:underline;}}& > *:not(:first-child){margin-top:1em;}}@media (max-width:850px){grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:auto;grid-template-areas:". socials avatar ." "description description description description" "age-experience age-experience age-experience age-experience" "skills skills skills skills";text-align:center;& > .avatar{justify-self:end;margin-left:3em;}}@media (max-width:500px){grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:auto;grid-template-areas:"socials avatar avatar ." "description description description description" "age-experience age-experience age-experience age-experience" "skills skills skills skills";& > .socials{min-width:inherit;justify-self:start;margin-left:1em;& > a{& > span{display:none;}}}& > .avatar{justify-self:center;}}& > *{z-index:10;}'],n.g_,(e=>{let{theme:t}=e;return t.light})),m=i.default.div.withConfig({displayName:"description",componentId:"sc-v4agc-0"})(["grid-area:description;padding:2em;margin:5em auto;border-radius:.2em;max-width:40em;color:",";box-shadow:0px 0px 20px -10px black;background-color:",";"],(e=>{let{theme:t}=e;return t.light}),(e=>{let{theme:t}=e;return t.fg})),f=o(4925),d=o.n(f);const p=e=>Array.isArray(e)?p(e[0])+"-array":e.title+"-"+e.dates.from;p.withHash=function(){return"#"+p.apply(void 0,arguments)};var u=p;var h=(0,i.default)((e=>{let{className:t,children:o,columns:i}=e;const n=[],l=Math.ceil(o.length/i);for(let r=0;r<o.length;r+=l)n.push(o.slice(r,r+l));return r.createElement("div",{className:t},r.createElement("div",{className:"shadow top"}),r.createElement("div",{className:"background"}),n.map((e=>r.createElement("ul",{key:u(e)},e.map((e=>r.createElement("li",{key:u(e)},r.createElement(d(),{href:u.withHash(e),offset:"100"},e.title,r.createElement("div",null,(e.client||e.for).name)))))))),r.createElement("div",{className:"shadow bottom"}))})).withConfig({displayName:"summary",componentId:"sc-1alzy5w-0"})(["display:flex;align-items:flex-start;justify-content:center;flex-wrap:wrap;margin:4em 0;padding:3em 0;position:relative;& > .background{background-color:#f3f3f3;position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;}& > .shadow.top{box-shadow:0 0 2em -0.4em #565656;width:70%;height:1em;z-index:0;position:absolute;top:0;}& > .shadow.bottom{box-shadow:0 0 2em -0.4em #565656;width:70%;height:1em;z-index:0;position:absolute;bottom:0;}& ul{list-style:none;padding:0;z-index:20;margin:0 2em;& > li{padding:1em;text-align:center;& > a{color:inherit;text-decoration:none;transition:transform 500ms ease-in-out;display:block;&:hover{transform:scale(1.1);}& > div{font-size:.8em;color:#9a9a9a;margin-top:0.5em;}}}}@media print{& > .background{background-color:white;}}"]);const g=e=>Array.isArray(e)?g(e[0])+"-array":e.text,v=e=>{let{children:t,className:o}=e;return r.createElement("ul",{className:o},(t||[]).map((e=>r.createElement(r.Fragment,{key:g(e)},r.createElement("li",{dangerouslySetInnerHTML:{__html:e.text.replace(/\n/g,"<br />")}}),e.children&&r.createElement(v,null,e.children)))))};var y=(0,i.default)(v).withConfig({displayName:"list",componentId:"sc-1a0tc-0"})(["text-align:justify;"]);const b=e=>{let{children:t}=e;return new Intl.DateTimeFormat(void 0,{year:"numeric",month:"long"}).format(t)};var w=(0,i.default)((e=>{const{className:t,title:o,client:i,dates:l,informations:a=[]}=e,{from:s,to:c}=l;return r.createElement("div",{className:t,id:o+"-"+s},r.createElement("h1",null,o),r.createElement("div",{className:"logos"},i&&r.createElement(n.qE,Object.assign({id:i.name},i)),r.createElement(n.qE,Object.assign({id:e.for.name},e.for))),r.createElement("h2",null,i&&i.name?r.createElement(r.Fragment,null,i.name,", pour le compte de ",e.for.name):e.for&&e.for.name),r.createElement("h3",null,r.createElement(b,null,s)," ➤ ",r.createElement(b,null,c)),r.createElement(y,null,a))})).withConfig({displayName:"experience",componentId:"sc-vyptfu-0"})(['display:grid;grid-template:"title logos" "title for" "title dates" "informations informations";& > h1{grid-area:title;display:flex;align-items:center;margin:0;}& > h2{grid-area:for;margin:0;margin-top:1em;font-size:.8em;display:flex;align-items:center;justify-content:flex-end;}& > h3{grid-area:dates;margin-top:1em;text-align:right;font-size:.8em;}& > ',"{grid-area:informations;margin-top:1em;padding:0;list-style:none;& > li{margin-top:1em;}}& > .logos{display:flex;align-items:center;justify-content:flex-end;& > ","{width:2.5em;height:2.5em;font-size:1.5em;transition:margin 100ms ease-in-out;& > .image{width:70%;}&:first-child{margin-right:-.5em;z-index:10;}}&:hover{& > ",':first-child{margin-right:.1em;}}}@media (max-width:800px){grid-template:"title logos" "for for" "dates dates" "informations informations";grid-template-columns:auto 8em;& > h1{font-size:1.6em;}& > h2{justify-content:flex-start;}& > h3{text-align:left;}}@media print{page-break-inside:avoid;font-size:.9em;}'],y,n.qE,n.qE);var x=(0,i.default)((e=>{let{className:t,children:o=[]}=e;return r.createElement("div",{className:t},r.createElement("h1",null,"Expériences"),r.createElement(h,{columns:2},o),o.map((e=>r.createElement(w,Object.assign({key:u(e)},e)))))})).withConfig({displayName:"experiences",componentId:"sc-180ugtr-0"})(["grid-area:experiences;margin:0 auto;padding:0 1em;& > h1{text-align:center;margin:0 auto;}& > ","{max-width:70em;margin:10em auto;}@media print{& > ","{max-width:70em;margin:5em auto;}& > ","{font-size:0.7em;}}"],w,w,h);const E=(0,i.default)(l.Link).withConfig({displayName:"cv__GoToHome",componentId:"sc-m35w9y-0"})(["position:absolute;top:1em;left:1em;z-index:1;outline:none;text-decoration:none;color:white;font-size:2em;@media print{display:none;}"]);var k=(0,i.default)((e=>{let{className:t,data:o}=e;return r.createElement(n.Ar,null,r.createElement(n.pQ,{title:o.members.who.firstName+" "+o.members.who.name}),r.createElement("div",{className:t},r.createElement(E,{to:"/"},r.createElement("i",{className:"brand-left-arrow"})),r.createElement(c,o.members),r.createElement(m,{dangerouslySetInnerHTML:{__html:o.members.description}}),r.createElement(x,null,o.members.experiences)))})).withConfig({displayName:"cv",componentId:"sc-m35w9y-1"})(['display:grid;background-color:#f3f3f3;color:#323232;grid-template-areas:"who" "description" "experiences";@media print{background-color:white;}'])},4925:function(e,t,o){var r;"undefined"!=typeof self&&self,r=function(e){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=o(1),n=(r=i)&&r.__esModule?r:{default:r};t.default=n.default},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),l=o(2),a=(r=l)&&r.__esModule?r:{default:r},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.smoothScroll=o.smoothScroll.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){o(3).polyfill()}},{key:"smoothScroll",value:function(e){var t=this;e.preventDefault();var o=function(){return 0};void 0!==this.props.offset&&(o=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(t.props.offset)});var r=e.currentTarget.getAttribute("href").slice(1),i=document.getElementById(r).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:i-o(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=(e.offset,function(e,t){var o={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o}(e,["offset"]));return a.default.createElement("a",i({},t,{onClick:this.smoothScroll}))}}]),t}(l.Component);t.default=s},function(t,o){t.exports=e},function(e,t,o){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var o,r=e.HTMLElement||e.Element,i=468,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||s,scrollIntoView:r.prototype.scrollIntoView},l=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(o=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?u.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):u.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;u.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var o=function(e){var o;do{o=(e=e.parentNode)===t.body}while(!1===o&&!1===d(e));return o=null,e}(this),r=o.getBoundingClientRect(),i=this.getBoundingClientRect();o!==t.body?(u.call(this,o,o.scrollLeft+i.left-r.left,o.scrollTop+i.top-r.top),"fixed"!==e.getComputedStyle(o).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function m(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function f(t,o){var r=e.getComputedStyle(t,null)["overflow"+o];return"auto"===r||"scroll"===r}function d(e){var t=m(e,"Y")&&f(e,"Y"),o=m(e,"X")&&f(e,"X");return t||o}function p(t){var o,r,n,a,s=(l()-t.startTime)/i;a=s=s>1?1:s,o=.5*(1-Math.cos(Math.PI*a)),r=t.startX+(t.x-t.startX)*o,n=t.startY+(t.y-t.startY)*o,t.method.call(t.scrollable,r,n),r===t.x&&n===t.y||e.requestAnimationFrame(p.bind(e,t))}function u(o,r,i){var a,c,m,f,d=l();o===t.body?(a=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,f=n.scroll):(a=o,c=o.scrollLeft,m=o.scrollTop,f=s),p({scrollable:a,method:f,startTime:d,startX:c,startY:m,x:r,y:i})}}}}()}])},e.exports=r(o(7294))}}]);
//# sourceMappingURL=component---src-templates-cv-cv-jsx-c19a2238a3af3ccc998b.js.map