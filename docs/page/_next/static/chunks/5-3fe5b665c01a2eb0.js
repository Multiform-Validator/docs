(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5],{7138:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var a=r(231),o=r.n(a)},6463:function(e,t,r){"use strict";var a=r(1169);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}})},5476:function(e,t,r){"use strict";r.d(t,{default:function(){return d}});var a=r(7437);r(593);var o=r(2265),n=r(9690);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var c=function(e){var t,r=e.open,a=e.onClose,n=e.children,c=e.style,l=e.enableOverlay,s=e.overlayColor,h=e.overlayOpacity,d=e.zIndex,v=void 0===d?100:d,f=e.duration,m=e.direction,u=e.size,x=e.className,g=e.customIdSuffix,b=e.lockBackgroundScroll,p=void 0!==b&&b,j=e.overlayClassName,N=(0,o.useRef)(null);(0,o.useEffect)(function(){N.current=window.document.querySelector("body"),N.current&&p&&(N.current.style.overflow=r?"hidden":"")},[r]);var y=(0,o.useMemo)(function(){return g||(Math.random()+1).toString(36).substring(7)},[g]),w={backgroundColor:(void 0===s?"#000":s).toString(),opacity:void 0===h?.4:h,zIndex:v},L=i({zIndex:v+1,transitionDuration:(void 0===f?500:f)+"ms"},{left:{top:0,left:0,transform:"translate3d(-100%, 0, 0)",width:t=void 0===u?250:u,height:"100vh"},right:{top:0,right:0,transform:"translate3d(100%, 0, 0)",width:t,height:"100vh"},bottom:{left:0,right:0,bottom:0,transform:"translate3d(0, 100%, 0)",width:"100%",height:t},top:{left:0,right:0,top:0,transform:"translate3d(0, -100%, 0)",width:"100%",height:t}}[m],c);return o.createElement("div",{id:"EZDrawer"+y,className:"EZDrawer"},o.createElement("input",{type:"checkbox",id:"EZDrawer__checkbox"+y,className:"EZDrawer__checkbox",onChange:void 0===a?function(){}:a,checked:r}),o.createElement("nav",{role:"navigation",id:"EZDrawer__container"+y,style:L,className:"EZDrawer__container "+x},n),(void 0===l||l)&&o.createElement("label",{htmlFor:"EZDrawer__checkbox"+y,id:"EZDrawer__overlay"+y,className:"EZDrawer__overlay "+(void 0===j?"":j),style:w}))},l=r(7138),s=r(6463);function h(){let e=(0,s.usePathname)(),t="/documentation/js/functions";return(0,a.jsxs)("ul",{className:"p-2",children:[(0,a.jsx)("li",{className:"mb-6 mt-2 rounded p-2 text-center text-white ".concat("/documentation/js"===e&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-light hover:font-medium",href:"/documentation/js",children:"Documentation"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/home")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"/",children:"Home"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/cnpjIsValid")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/cnpjIsValid"),children:"cnpjIsValid"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/cpfIsValid")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/cpfIsValid"),children:"cpfIsValid"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/getOnlyEmail")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/getOnlyEmail"),children:"getOnlyEmail"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/identifyFlagCard")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/identifyFlagCard"),children:"identifyFlagCard"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isAscii")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isAscii"),children:"isAscii"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isBase64")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isBase64"),children:"isBase64"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isCEP")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isCEP"),children:"isCEP"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isCreditCardValid")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isCreditCardValid"),children:"isCreditCardValid"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isDate")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isDate"),children:"isDate"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isDecimal")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isDecimal"),children:"isDecimal"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isEmail")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isEmail"),children:"isEmail"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isEmpty")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isEmpty"),children:"isEmpty"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isMACAddress")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isMACAddress"),children:"isMACAddress"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isMD5")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isMD5"),children:"isMD5"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isNumber")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isNumber"),children:"isNumber"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isPort")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isPort"),children:"isPort"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isPostalCode")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isPostalCode"),children:"isPostalCode"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isTime")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isTime"),children:"isTime"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isValidAudio")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isValidAudio"),children:"isValidAudio"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isValidImage")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isValidImage"),children:"isValidImage"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isValidPdf")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isValidPdf"),children:"isValidPdf"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isValidTxt")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isValidTxt"),children:"isValidTxt"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/isValidVideo")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/isValidVideo"),children:"isValidVideo"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/passwordStrengthTester")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/passwordStrengthTester"),children:"passwordStrengthTester"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/validateBRPhoneNumber")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/validateBRPhoneNumber"),children:"validateBRPhoneNumber"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/validateEmail")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/validateEmail"),children:"validateEmail"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/validateName")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/validateName"),children:"validateName"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/validatePassportNumber")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/validatePassportNumber"),children:"validatePassportNumber"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/validatePassword")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/validatePassword"),children:"validatePassword"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/validatePhoneNumber")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/validatePhoneNumber"),children:"validatePhoneNumber"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/validateSurname")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/validateSurname"),children:"validateSurname"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/validateTextarea")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/validateTextarea"),children:"validateTextarea"})}),(0,a.jsx)("li",{className:"rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/validateUsername")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/validateUsername"),children:"validateUsername"})}),(0,a.jsx)("li",{className:"mb-4 rounded px-4 py-2 text-white hover:bg-hoverLi ".concat(e==="".concat(t,"/validateUSPhoneNumber")&&"bg-hoverLi"),children:(0,a.jsx)(l.default,{className:"font-extralight hover:font-normal",href:"".concat(t,"/validateUSPhoneNumber"),children:"validateUSPhoneNumber"})})]})}function d(){let[e,t]=(0,o.useState)(!1),r=()=>{t(e=>!e)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{open:e,onClose:r,direction:"left",className:"my-drawer",children:(0,a.jsx)("section",{className:"hide-scrollbar h-screen overflow-y-auto border-r-2 border-gray-700 bg-black",children:(0,a.jsx)(h,{})})}),(0,a.jsx)("button",{onClick:r,children:(0,a.jsx)(n.qTj,{size:32})})]})}},593:function(){},1810:function(e,t,r){"use strict";r.d(t,{w_:function(){return h}});var a=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(o),i=["attr","size","title"];function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var a,o;a=t,o=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function h(e){return t=>a.createElement(d,c({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,s({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:o,size:n,title:l}=e,h=function(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,i),d=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,h,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return void 0!==n?a.createElement(n.Consumer,null,e=>t(e)):t(o)}}}]);