_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"8c1N":function(e,n){function t(){return new DOMException("The request is not allowed","NotAllowedError")}e.exports=async function(e){try{await async function(e){if(!navigator.clipboard)throw t();return navigator.clipboard.writeText(e)}(e)}catch(n){try{await async function(e){const n=document.createElement("span");n.textContent=e,n.style.whiteSpace="pre",n.style.webkitUserSelect="auto",n.style.userSelect="all",document.body.appendChild(n);const r=window.getSelection(),a=window.document.createRange();r.removeAllRanges(),a.selectNode(n),r.addRange(a);let l=!1;try{l=window.document.execCommand("copy")}finally{r.removeAllRanges(),window.document.body.removeChild(n)}if(!l)throw t()}(e)}catch(r){throw r||n||t()}}}},BsWD:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("a3WO");function a(e,n){if(e){if("string"===typeof e)return Object(r.a)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(r.a)(e,n):void 0}}},ODXe:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("BsWD");function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(s){a=!0,l=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw l}}return t}}(e,n)||Object(r.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},a3WO:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,"a",(function(){return r}))},"fK+J":function(e,n,t){"use strict";var r=t("nKUr"),a=t("8c1N"),l=t.n(a);n.a=function(e){var n=e.children;return Object(r.jsxs)("div",{className:"\n      display:inline-flex;\n      align-items:center;\n      border-width:1px;\n      border-style:solid;\n      border-color:$gray10;\n      border-radius:$sm;\n      background:$gray05;\n      color:$gray95;\n      font:$code;\n      max-width:100%;\n    ",children:[Object(r.jsx)("div",{className:"\n        padding:$len8;\n        flex:1;\n        white-space:nowrap;\n        overflow-x:auto;\n      ",children:n}),Object(r.jsx)("button",{className:"\n          appearance:none;\n          border:0;\n          margin:0;\n          padding:$len8\n          background:transparent;\n          color:$gray40;\n          :hover{color:$blue40}\n          :active{color:$red30}!\n          cursor:pointer;\n        ",onClick:function(){l()(n instanceof Array?n.join(""):n)},children:Object(r.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14 12V2H4V0h12v12h-2zM0 4h12v12H0V4zm2 2v8h8V6H2z"})})})]})}},uFqo:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/shortcuts",function(){return t("yQj/")}])},usiv:function(e,n){const t={blue05:"hsl(208,100%,98%)",blue10:"hsl(208,100%,92%)",blue20:"hsl(208,100%,82%)",blue30:"hsl(208,100%,71%)",blue40:"hsl(208,100%,61%)",blue50:"hsl(208,100%,50%)",blue60:"hsl(208,100%,40%)",blue70:"hsl(208,100%,35%)",blue80:"hsl(208,100%,30%)",blue90:"hsl(208,100%,25%)",blue95:"hsl(208,100%,14%)",gray05:"hsl(220,11%,98%)",gray10:"hsl(220,11%,92%)",gray20:"hsl(220,11%,84%)",gray30:"hsl(220,11%,75%)",gray40:"hsl(220,11%,67%)",gray50:"hsl(220,11%,58%)",gray60:"hsl(220,11%,50%)",gray70:"hsl(220,11%,41%)",gray80:"hsl(220,11%,33%)",gray90:"hsl(220,11%,25%)",gray95:"hsl(220,11%,18%)",green05:"hsl(123,41%,98%)",green10:"hsl(123,41%,92%)",green20:"hsl(123,41%,83%)",green30:"hsl(123,41%,73%)",green40:"hsl(123,41%,64%)",green50:"hsl(123,41%,54%)",green60:"hsl(123,41%,45%)",green70:"hsl(123,41%,38%)",green80:"hsl(123,41%,32%)",green90:"hsl(123,41%,25%)",green95:"hsl(123,41%,15%)",orange05:"hsl(28,100%,98%)",orange10:"hsl(28,100%,92%)",orange20:"hsl(28,100%,84%)",orange30:"hsl(28,100%,75%)",orange40:"hsl(28,100%,67%)",orange50:"hsl(28,100%,58%)",orange60:"hsl(28,100%,50%)",orange70:"hsl(28,100%,41%)",orange80:"hsl(28,100%,33%)",orange90:"hsl(28,100%,25%)",orange95:"hsl(28,100%,13%)",pink05:"hsl(324,100%,98%)",pink10:"hsl(324,100%,92%)",pink20:"hsl(324,100%,84%)",pink30:"hsl(324,100%,76%)",pink40:"hsl(324,100%,68%)",pink50:"hsl(324,100%,60%)",pink60:"hsl(324,100%,52%)",pink70:"hsl(324,100%,43%)",pink80:"hsl(324,100%,34%)",pink90:"hsl(324,100%,25%)",pink95:"hsl(324,100%,13%)",purple05:"hsl(266,61%,98%)",purple10:"hsl(266,61%,92%)",purple20:"hsl(266,61%,84%)",purple30:"hsl(266,61%,75%)",purple40:"hsl(266,61%,67%)",purple50:"hsl(266,61%,59%)",purple60:"hsl(266,61%,51%)",purple70:"hsl(266,61%,42%)",purple80:"hsl(266,61%,34%)",purple90:"hsl(266,61%,25%)",purple95:"hsl(266,61%,17%)",red05:"hsl(0,87%,98%)",red10:"hsl(0,87%,92%)",red20:"hsl(0,87%,82%)",red30:"hsl(0,87%,72%)",red40:"hsl(0,87%,61%)",red50:"hsl(0,87%,51%)",red60:"hsl(0,87%,41%)",red70:"hsl(0,87%,36%)",red80:"hsl(0,87%,30%)",red90:"hsl(0,87%,25%)",red95:"hsl(0,87%,14%)",yellow05:"hsl(49,100%,98%)",yellow10:"hsl(49,100%,92%)",yellow20:"hsl(49,100%,84%)",yellow30:"hsl(49,100%,76%)",yellow40:"hsl(49,100%,69%)",yellow50:"hsl(49,100%,61%)",yellow60:"hsl(49,100%,53%)",yellow70:"hsl(49,100%,44%)",yellow80:"hsl(49,100%,34%)",yellow90:"hsl(49,100%,25%)",yellow95:"hsl(49,100%,12%)"};e.exports=({fontFamily:e="sans-serif",colors:n=t}={})=>({variables:{...n,len1:"0.0625rem",len2:"0.125rem",len4:"0.25rem",len8:"0.5rem",len12:"0.75rem",len16:"1rem",len20:"1.25rem",len24:"1.5rem",len32:"2rem",len40:"2.5rem",len48:"3rem",len56:"3.5rem",len64:"4rem",len80:"5rem",len96:"6rem",len112:"7rem",len128:"8rem",len144:"9rem",len160:"10rem",len176:"11rem",len192:"12rem",len224:"14rem",len256:"16rem",len320:"20rem",len384:"24rem",len448:"28rem",len512:"32rem",border1:"0.0625rem",border2:"0.125rem",border4:"0.25rem",border8:"0.5rem",font:{h1:`400 3.2rem/4rem ${e.h1||e.default||e}`,h2:`400 2.4rem/3rem ${e.h2||e.default||e}`,h3:`400 2.0rem/2.5rem ${e.h3||e.default||e}`,h4:`400 1.6rem/2rem ${e.h4||e.default||e}`,h5:`700 1.2rem/1.5rem ${e.h5||e.default||e}`,h6:`700 0.8rem/1rem ${e.h6||e.default||e}`,body1:`400 1rem/1.5rem ${e.body1||e.default||e}`,body2:`400 0.75rem/1.5rem ${e.body2||e.default||e}`,caption:`400 0.625/1rem ${e.caption||e.default||e}`,button:`500 0.875rem/0.875rem ${e.button||e.default||e}`},...["","-top-left","-top-right","-bottom-left","-bottom-right"].map((e=>[`border${e}-radius`,{xs:"0.125rem",sm:"0.25rem",md:"0.5rem",lg:"1rem",full:"9999px"}])).reduce(((e,[n,t])=>({...e,[n]:t})),{}),"box-shadow":{sm:"0 0.125rem 0.125rem rgba(0,0,0,0.1)",md:"0 0.25rem 0.25rem rgba(0,0,0,0.1),0 0.5rem 0.5rem rgba(0,0,0,0.08)",lg:"0 0.25rem 0.25rem rgba(0,0,0,0.1),0 0.5rem 0.5rem rgba(0,0,0,0.08),0 0.75rem 0.75rem rgba(0,0,0,0.06),0 1rem 1rem rgba(0,0,0,0.04)",xl:"0 0.25rem 0.25rem rgba(0,0,0,0.1),0 0.5rem 0.5rem rgba(0,0,0,0.09),0 0.75rem 0.75rem rgba(0,0,0,0.08),0 1rem 1rem rgba(0,0,0,0.07),0 1.25rem 1.25rem rgba(0,0,0,0.06),0 1.5rem 1.5rem rgba(0,0,0,0.05)",xxl:"0 0.25rem 0.25rem rgba(0,0,0,0.1),0 0.5rem 0.5rem rgba(0,0,0,0.09),0 0.75rem 0.75rem rgba(0,0,0,0.08),0 1rem 1rem rgba(0,0,0,0.07),0 1.25rem 1.25rem rgba(0,0,0,0.06),0 1.5rem 1.5rem rgba(0,0,0,0.05),0 1.75rem 1.75rem rgba(0,0,0,0.04),0 2rem 2rem rgba(0,0,0,0.03)",inner:"inset 0 0.125rem 0.25rem rgba(0,0,0,0.1)",...Object.entries(n).map((([e,n])=>[`outline-offset-${e}`,`0 0 0 0.125rem ${n}`])).reduce(((e,[n,t])=>({...e,[n]:t})),{}),...Object.entries(n).map((([e,n])=>[`outline-ring-${e}`,`0 0 0 0.25rem ${n}`])).reduce(((e,[n,t])=>({...e,[n]:t})),{})},outline:{none:"0.125rem solid transparent"}},atScopes:{sm:"media screen and (max-width:37.49999em)",md:"media screen and (min-width:37.5em) and (max-width:62.49999em)",lg:"media screen and (min-width:62.5em)"}})},"yQj/":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return I}));var r=t("rePB"),a=t("Ff2n"),l=t("q1tI"),o=t("7ljp"),i=t("xFV3"),s=t("fK+J"),c=t("ODXe"),b=t("nKUr"),d=t("usiv"),u=t.n(d),h=u()(),p=Object.entries(h.variables).filter((function(e){var n=Object(c.a)(e,1)[0];return/^border[0-9]+$/.test(n)})),m=function(){return Object(b.jsx)("div",{className:"margin-top:-#{$len8};",children:p.map((function(e){var n=Object(c.a)(e,2),t=n[0],r=n[1];return Object(b.jsxs)("div",{className:"\n            margin-top:$len8;\n            :not(:last-child){margin-right:$len8}\n            padding:$len8;\n            border-style:solid;\n            border-color:$gray70;\n            display:inline-block;\n            font:$code;\n          ",style:{borderWidth:r},children:["$",t]},t)}))})},j=u()(),g=Object.entries(j.variables["box-shadow"]).filter((function(e){var n=Object(c.a)(e,1)[0];return!/^outline/.test(n)})),f=function(){return Object(b.jsx)("div",{className:"margin-top:-#{$len32};",children:g.map((function(e){var n=Object(c.a)(e,2),t=n[0],r=n[1];return Object(b.jsxs)("div",{className:"\n            padding:$len16;\n            display:inline-block;\n            margin-top:$len32;\n            :not(:last-child){margin-right:$len32}\n            background:#fff;\n          ",style:{boxShadow:r},children:["$",t]},t)}))})};function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=u()(),w=Object.values(Object.entries(v.variables).filter((function(e){var n=Object(c.a)(e,1)[0];return/^(blue|gray|green|orange|pink|purple|red|yellow)\d{2}$/.test(n)})).reduce((function(e,n){var t=Object(c.a)(n,2),a=t[0],l=t[1],o=a.match(/^[a-z]+/);if(!o)return e;var i=o[0];return y(y({},e),{},i in e?Object(r.a)({},i,e[i].concat([[a,l]])):Object(r.a)({},i,[[a,l]]))}),{})),x=function(){return Object(b.jsx)("div",{children:w.map((function(e,n){return Object(b.jsx)("div",{className:":first-child{margin-top:-#{$len16}}",children:e.map((function(e){var n=Object(c.a)(e,2),t=n[0],r=n[1];return Object(b.jsxs)("div",{className:"\n                  display:inline-block;\n                  text-align:center;\n                  padding-x:$len2;\n                  margin-top:$len16;\n                ",children:[Object(b.jsx)("div",{className:"width:$len80; height:$len40; border-radius:$sm;",style:{background:r}}),Object(b.jsxs)("span",{className:"font:$code;",children:["$",t]})]},t)}))},n)}))})},$=u()(),N=Object.entries($.variables["border-radius"]),k=function(){return Object(b.jsx)("div",{className:"margin-top:-#{$len8};",children:N.map((function(e){var n=Object(c.a)(e,2),t=n[0],r=n[1];return Object(b.jsxs)("div",{className:"\n            background:$gray70;\n            color:$gray05;\n            display:inline-block;\n            font:$code;\n            padding:$len16;\n            margin-top:$len8;\n            :not(:last-child){margin-right:$len8}\n          ",style:{borderRadius:r},children:["$",t]})}))})},C=u()(),S=Object.entries(C.variables.font),T=function(){return Object(b.jsx)(b.Fragment,{children:S.map((function(e){var n=Object(c.a)(e,2),t=n[0],r=n[1];return Object(b.jsxs)("div",{className:"display:flex; align-items:center; margin-y:$len12;",children:[Object(b.jsxs)("div",{className:"font:$code; width:$len80;",children:["$",t]}),Object(b.jsx)("div",{style:{font:r},children:"Testing"},t)]},t)}))})};function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var D=u()(),E=Object.values(Object.entries(D.variables).filter((function(e){var n=Object(c.a)(e,1)[0];return/^(blue|gray|green|orange|pink|purple|red|yellow)\d{2}$/.test(n)})).reduce((function(e,n){var t=Object(c.a)(n,2),a=t[0],l=t[1],o=a.match(/^[a-z]+/);if(!o)return e;var i=o[0];return _(_({},e),{},i in e?Object(r.a)({},i,e[i].concat([[a,l]])):Object(r.a)({},i,[[a,l]]))}),{})),F=function(e){var n=e.value,t=e.onValueChange;return Object(b.jsx)("div",{className:"display:flex;",children:E.map((function(e,r){return Object(b.jsx)("div",{children:e.map((function(e){var r=Object(c.a)(e,2),a=r[0],l=r[1];return Object(b.jsx)("div",{className:"\n                    ".concat(a===n?"sel":"","\n                    width:$len16;\n                    height:$len16;\n                    .sel{box-shadow:0__0__0__#{$len1}__#000,#{$sm}}\n                    .sel{transform:scale(1.25)}\n                    cursor:pointer;\n                  "),style:{backgroundColor:l},onClick:function(){t(a)}},a)}))},r)}))})},z=function(){var e,n=Object(l.useState)("small"),t=n[0],r=n[1],a=Object(l.useState)("blue50"),o=a[0],i=a[1],s=Object(l.useState)("blue05"),c=s[0],d=s[1],u="0 0 0 0.125rem ".concat(D.variables["ring"===t?c:o]),h="$outline-sm-".concat("ring"===t?c:o),p="0 0 0 0.25rem ".concat(D.variables[o]),m="$outline-lg-".concat(o),j=[h,m].map((function(e){return"#{".concat(e,"}")})).join(","),g=D.variables[c],f=D.variables[o];switch(t){case"small":e=u,j=h;break;case"large":e=p,j=m;break;case"ring":e=[u,p].join(","),g=D.variables[o],f=D.variables[c]}return Object(b.jsxs)("div",{className:"\n      max-width:100%;\n      overflow-x:auto;\n      display:inline-flex;\n      flex-direction:column;\n      align-items:stretch;\n      box-shadow:$md;\n      border-width:$len1;\n      border-style:solid;\n      border-color:$gray10;\n      border-radius:$md;\n      overflow:hidden;\n    ",children:[Object(b.jsxs)("div",{style:{background:D.variables[c]},className:"\n          padding-y:$len32;\n          text-align:center;\n        ",children:[Object(b.jsx)("div",{style:{boxShadow:e,background:g,color:f},className:"\n            display:inline-block;\n            font:$button;\n            padding-x:$len16;\n            padding-y:$len12;\n            border-radius:$sm;\n            cursor:default;\n          ",children:"Button"}),Object(b.jsxs)("code",{className:"font:$code; display:block; margin-top:$len16;",style:{color:D.variables[o]},children:["box-shadow:",j,";"]})]}),Object(b.jsxs)("div",{className:"display:flex; padding:$len8;",children:[Object(b.jsxs)("div",{className:"padding:$len8; flex:1;",children:[Object(b.jsx)("div",{children:"Style"}),["small","large","ring"].map((function(e){return Object(b.jsxs)("label",{className:"display:flex; align-items:center;",children:[Object(b.jsx)("input",{type:"radio",name:"focusOutlineStyle",value:e,defaultChecked:t===e,onChange:function(n){n.currentTarget.checked&&r(e)}}),Object(b.jsx)("span",{className:"font:$body2; display:inline-block; margin-left:$len4;",children:e[0].toUpperCase()+e.substring(1)})]},e)}))]}),Object(b.jsxs)("label",{className:"padding:$len8;",children:[Object(b.jsx)("span",{className:"display:block;",children:"Outline Color"}),Object(b.jsx)(F,{value:o,onValueChange:i})]}),Object(b.jsxs)("label",{className:"padding:$len8;",children:[Object(b.jsx)("span",{className:"display:block;",children:"Surface Color"}),Object(b.jsx)(F,{value:c,onValueChange:d})]})]})]})},A=u()(),B=Object.entries(A.variables).filter((function(e){var n=Object(c.a)(e,1)[0];return/^len[0-9]+$/.test(n)})).reverse(),H=function(){var e=Object(l.useState)(1),n=e[0],t=e[1];return Object(l.useEffect)((function(){var e=function(){var e=matchMedia("(max-width: 62.49999em)").matches;t(e?.5:1)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(b.jsx)(b.Fragment,{children:B.map((function(e){var t=Object(c.a)(e,2),r=t[0],a=t[1];return Object(b.jsxs)("div",{className:"len .len+{margin-top:$len8} display:flex;",children:[Object(b.jsxs)("div",{className:"font:$code; width:$len64;",children:["$",r]}),Object(b.jsx)("div",{className:"height:$len16; background:$gray70;",style:{width:"calc(".concat(a,"*").concat(n,")")}})]},r)}))})};function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var W={};function I(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",U(U(U({},W),t),{},{components:n,mdxType:"MDXLayout"}),Object(o.b)(i.a,{title:"Shortcuts",subtitle:"Build your site faster with Hacss Shortcuts",mdxType:"Article"},Object(o.b)("p",null,"With the optional Shortcuts package, you can immediately focus on building your\nsite without creating a Hacss configuration or worrying about the lower-level\nunits of your design. The Shortcuts package provides a configuration that is\nready to use or extend, complete with a color palette, fonts, spacing presets,\nshadows, and more."),Object(o.b)("h1",null,"Installation"),Object(o.b)("p",null,"To get started, install the\n",Object(o.b)("a",U({parentName:"p"},{href:"https://www.npmjs.com/package/@hacss/shortcuts"}),Object(o.b)("inlineCode",{parentName:"a"},"@hacss/shortcuts"))," package:"),Object(o.b)(s.a,{mdxType:"ShellCommand"},"npm install @hacss/shortcuts"),Object(o.b)("p",null,"Then create a ",Object(o.b)("inlineCode",{parentName:"p"},"hacss.config.js")," file that exports a configuration from\n",Object(o.b)("inlineCode",{parentName:"p"},"@hacss/shortcuts"),":"),Object(o.b)("pre",null,Object(o.b)("code",U({parentName:"pre"},{className:"language-javascript"}),'const shortcuts = require("@hacss/shortcuts");\nmodule.exports = shortcuts();\n')),Object(o.b)("h1",null,"Usage"),Object(o.b)("p",null,"The Shortcuts package is essentially just an ordinary Hacss configuration and\nincludes a number of breakpoints and variables. Review the ",Object(o.b)("a",U({parentName:"p"},{href:"./syntax"}),"syntax"),"\nand ",Object(o.b)("a",U({parentName:"p"},{href:"./configuration"}),"configuration")," guides for more information."),Object(o.b)("h1",null,"Available Shortcuts"),Object(o.b)("h2",null,"Colors"),Object(o.b)("p",null,"The color palette includes several base colors, each with a full range of shades\nand tints. It provides a number of options that is small enough to promote\nconsistency throughout your site yet large enough to satisfy most use cases."),Object(o.b)(x,{mdxType:"ShortcutColors"}),Object(o.b)("div",{className:"height:$len16;"}),Object(o.b)("h2",null,"Lengths"),Object(o.b)("p",null,"These length abstractions improve the consistency of your layout by providing a\nfinite set of options for padding, margins, and other length properties. They\nalso allow you to think in terms of pixels while actually mapping to relative\nunits behind the scenes: For example, ",Object(o.b)("inlineCode",{parentName:"p"},"$len16")," has an underlying value of ",Object(o.b)("inlineCode",{parentName:"p"},"1rem"),"."),Object(o.b)(H,{mdxType:"ShortcutLengths"}),Object(o.b)("div",{className:"height:$len16;"}),Object(o.b)("h2",null,"Typography"),Object(o.b)("p",null,"Use these variables with the\n",Object(o.b)("a",U({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font"}),Object(o.b)("inlineCode",{parentName:"a"},"font"))," shorthand\nproperty. Not only is this more convenient than setting constituent properties\nindividually, but also it improves typographical consistency throughout your\nsite. If you need to override a constituent property, you can always use a rule\npriority as explained in the ",Object(o.b)("a",U({parentName:"p"},{href:"./syntax"}),"syntax guide"),"."),Object(o.b)(T,{mdxType:"ShortcutFonts"}),Object(o.b)("div",{className:"height:$len16;"}),Object(o.b)("h2",null,"Box Shadows"),Object(o.b)("p",null,"These work with the ",Object(o.b)("inlineCode",{parentName:"p"},"box-shadow")," property and can be used to emphasize an\nelement by adding elevation."),Object(o.b)(f,{mdxType:"ShortcutBoxShadows"}),Object(o.b)("div",{className:"height:$len16;"}),Object(o.b)("h2",null,"Borders"),Object(o.b)("p",null,"Like the length shortcuts, border widths are limited in number and aliased in\nterms of pixels, so choosing the right border width for your use case requires\nlittle effort."),Object(o.b)(m,{mdxType:"ShortcutBorders"}),Object(o.b)("div",{className:"height:$len16;"}),Object(o.b)("h2",null,"Corner Radii"),Object(o.b)("p",null,"The corner radius variables work with the ",Object(o.b)("inlineCode",{parentName:"p"},"border-radius")," property and its\nvarious constituent properties (",Object(o.b)("inlineCode",{parentName:"p"},"border-top-left-radius"),",\n",Object(o.b)("inlineCode",{parentName:"p"},"border-top-right-radius"),", etc.)"),Object(o.b)(k,{mdxType:"ShortcutCornerRadii"}),Object(o.b)("div",{className:"height:$len16;"}),Object(o.b)("h2",null,"Focus Outlines"),Object(o.b)("p",null,"Custom focus outlines are often achieved with the\n",Object(o.b)("a",U({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"}),Object(o.b)("inlineCode",{parentName:"a"},"box-shadow")),"\nproperty. The Shortcuts package offers a large set of outline box shadows based\non its color palette."),Object(o.b)("p",null,"Before applying these, you should suppress the browser's default outline using\nan ",Object(o.b)("inlineCode",{parentName:"p"},"outline:$none;")," class. The ",Object(o.b)("inlineCode",{parentName:"p"},"$none")," variable provides a transparent outline\nrather than removing it completely, providing a better experience in Windows\nHigh Contrast Mode as explained\n",Object(o.b)("a",U({parentName:"p"},{href:"https://sarahmhigley.com/writing/whcm-quick-tips/"}),"here"),"."),Object(o.b)(z,{mdxType:"ShortcutFocusOutlines"}),Object(o.b)("div",{className:"height:$len16;"}),Object(o.b)("h1",null,"Customization"),Object(o.b)("p",null,"You might have noticed earlier that the ",Object(o.b)("inlineCode",{parentName:"p"},"@hacss/shortcuts")," module exports a\nfunction that returns a Hacss configuration. This allows you to provide a custom\ncolor palette (upon which color and focus outline variables are based) and\nfont family (upon which font variables are based). To do so, just pass an\nargument consisting of an object with keys ",Object(o.b)("inlineCode",{parentName:"p"},"colors")," and/or ",Object(o.b)("inlineCode",{parentName:"p"},"fontFamily"),"."),Object(o.b)("h2",null,Object(o.b)("inlineCode",{parentName:"h2"},"colors")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"colors")," map will be included in the Hacss configuration such that each key\nwill be available as a variable and will be used to generate focus outline\nvariables. For example, given a key ",Object(o.b)("inlineCode",{parentName:"p"},"red500"),", the resulting configuration will\ninclude variables ",Object(o.b)("inlineCode",{parentName:"p"},"$red500"),", ",Object(o.b)("inlineCode",{parentName:"p"},"$outline-sm-red500"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"$outline-lg-red500"),"."),Object(o.b)("p",null,"Note that the default color palette above is provided when ",Object(o.b)("inlineCode",{parentName:"p"},"colors")," is not\nspecified."),Object(o.b)("h2",null,Object(o.b)("inlineCode",{parentName:"h2"},"fontFamily")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"fontFamily")," value is used in font variables. You can provide a string to be\nused in all font variables; or, you can provide a map to change the font family\nof each font variable listed above."),Object(o.b)("p",null,"In the latter case, use each font variable name listed in the ",Object(o.b)("em",{parentName:"p"},"Typography"),"\nsection above, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"body2"),", as the keys for the map. You can also include a\n",Object(o.b)("inlineCode",{parentName:"p"},"default")," key as a fallback in case you don't want to customize each font\nvariable explicitly.")))}I.isMDXComponent=!0}},[["uFqo",0,2,1,3,4]]]);