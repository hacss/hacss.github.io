_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"7ljp":function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t("q1tI"),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,d=u["".concat(i,".").concat(f)]||u[f]||b[f]||o;return t?a.a.createElement(d,c(c({ref:n},p),{},{components:t})):a.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"===typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},EtO7:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/configuration",function(){return t("tWlf")}])},Ff2n:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,"a",(function(){return r}))},Qetd:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},rePB:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}))},tWlf:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t("rePB"),a=t("Ff2n"),o=(t("q1tI"),t("7ljp")),i=t("xFV3");function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p={};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",l(l(l({},p),t),{},{components:n,mdxType:"MDXLayout"}),Object(o.b)(i.a,{title:"Configuration",subtitle:"Use variables and media queries throughout your site",mdxType:"Article"},Object(o.b)("p",null,"This guide explains how to configure Hacss to support variables\n(i.e. named constants) and at-scopes (e.g. media queries)."),Object(o.b)("h3",null,"Configuration Module"),Object(o.b)("p",null,"Both the ",Object(o.b)("a",l({parentName:"p"},{href:"./cli"}),"CLI")," and the ",Object(o.b)("a",l({parentName:"p"},{href:"./webpack"}),"Webpack integration")," will look for a\n",Object(o.b)("inlineCode",{parentName:"p"},"hacss.config.js")," file in the working directory (i.e. the project root). You can\nspecify an alternate configuration file path by using the explicit ",Object(o.b)("inlineCode",{parentName:"p"},"config"),"\noption. See the CLI and Webpack guides for more information."),Object(o.b)("p",null,"The configuration module must export an object, which can contain either or both\nof the keys ",Object(o.b)("inlineCode",{parentName:"p"},"atScopes")," and ",Object(o.b)("inlineCode",{parentName:"p"},"variables"),"."),Object(o.b)("h4",null,"Variables"),Object(o.b)("p",null,"This is a map of variables that can be used in style rules. A rule\n",Object(o.b)("inlineCode",{parentName:"p"},":hover{color:$red500}"),", for example, requires a corresponding key ",Object(o.b)("inlineCode",{parentName:"p"},"red500")," in\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"variables")," map."),Object(o.b)("p",null,"You can also define variables for specific properties. For example, you may want\na variable ",Object(o.b)("inlineCode",{parentName:"p"},"small")," to have a different value depending on the CSS property where\nit is used: Properties like ",Object(o.b)("inlineCode",{parentName:"p"},"box-shadow"),", ",Object(o.b)("inlineCode",{parentName:"p"},"font-size"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"border-radius"),' might\nall have some notion of a "small" variant. To define a variable for a specific\nproperty, simply nest it within another map as shown in the configuration\nexample below.'),Object(o.b)("h3",null,"Configuration Example"),Object(o.b)("pre",null,Object(o.b)("code",l({parentName:"pre"},{className:"language-javascript"}),'exports.variables = {\n  red500: "#c33",\n  "box-shadow": {\n    small: "0 2px 2px #0003"\n  },\n  "font-size": {\n    small: "12px"\n  },\n  "border-radius": {\n    small: "2px"\n  }\n};\n\nexports.atScopes = {\n  small: "media only screen and (max-width: 599px)",\n  medium: "media only screen and (min-width: 600px) and (max-width: 1199px)",\n  large: "media only screen and (min-width: 1200px)",\n};\n'))))}s.isMDXComponent=!0},xFV3:function(e,n,t){"use strict";var r=t("nKUr");n.a=function(e){var n=e.children,t=e.title,a=e.subtitle;return Object(r.jsxs)("div",{className:"padding-x:$len64; padding-y:$len32; max-width:60rem;",children:[Object(r.jsx)("h1",{className:"font:$h1; margin:0;",children:t}),a&&Object(r.jsx)("h2",{className:"font:$h2; margin:0; color:$gray70;",children:a}),Object(r.jsx)("hr",{className:"\n      border-width:$len1;\n      border-style:solid;\n      border-color:$gray10;\n      height:0;\n      margin-y:$len16;\n    "}),n]})}}},[["EtO7",0,1]]]);