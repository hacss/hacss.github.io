_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"7ljp":function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r("q1tI"),c=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,c=function(e,n){if(null==e)return{};var r,t,c={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(c[r]=e[r]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),b=function(e){var n=c.a.useContext(s),r=n;return e&&(r="function"===typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=b(e.components);return c.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(r),d=t,f=u["".concat(o,".").concat(d)]||u[d]||p[d]||a;return r?c.a.createElement(f,i(i({ref:n},s),{},{components:r})):c.a.createElement(f,i({ref:n},s))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"===typeof e||t){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"===typeof e?e:t,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},Ff2n:function(e,n,r){"use strict";function t(e,n){if(null==e)return{};var r,t,c=function(e,n){if(null==e)return{};var r,t,c={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(c[r]=e[r]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}r.d(n,"a",(function(){return t}))},MTJX:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/api",function(){return r("WHDL")}])},WHDL:function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return u}));var t=r("rePB"),c=r("Ff2n"),a=(r("q1tI"),r("7ljp")),o=r("xFV3"),i=r("fK+J");function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){Object(t.a)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var b={};function u(e){var n=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",s(s(s({},b),r),{},{components:n,mdxType:"MDXLayout"}),Object(a.b)(o.a,{title:"API",subtitle:"Use Hacss programmatically",mdxType:"Article"},Object(a.b)("p",null,"In addition to CLI and Webpack options, Hacss offers a simple API for advanced\nuse cases."),Object(a.b)("h1",null,"Installation"),Object(a.b)(i.a,{mdxType:"ShellCommand"},"npm install @hacss/core"),Object(a.b)("h1",null,"Usage"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-javascript"}),'const hacss = require("@hacss/core");\n')),Object(a.b)("h1",null,Object(a.b)("inlineCode",{parentName:"h1"},"hacss(code, [config])")),Object(a.b)("p",null,"Generates a style sheet from the specified code."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"code {String}")," The code containing style classes that Hacss should analyze"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"config {Object}")," The configuration object as documented in the configuration guide"),Object(a.b)("p",null,"return: ",Object(a.b)("inlineCode",{parentName:"p"},"String")," The generated style sheet"),Object(a.b)("p",null,"throws: ",Object(a.b)("inlineCode",{parentName:"p"},"Error"))))}u.isMDXComponent=!0},"fK+J":function(e,n,r){"use strict";var t=r("nKUr");n.a=function(e){var n=e.children;return Object(t.jsxs)("div",{className:"\n      display:inline-flex;\n      align-items:center;\n      border-width:1px;\n      border-style:solid;\n      border-color:$gray10;\n      border-radius:$sm;\n      background:$gray05;\n      color:$gray95;\n      font:$code;\n    ",children:[Object(t.jsx)("div",{className:"padding:$len8;",children:n}),Object(t.jsx)("button",{className:"\n          appearance:none;\n          border:0;\n          margin:0;\n          padding:$len8\n          background:transparent;\n          color:$gray40;\n          :hover{color:$blue40}\n          :active{color:$red30}!\n          cursor:pointer;\n        ",children:Object(t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:Object(t.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14 12V2H4V0h12v12h-2zM0 4h12v12H0V4zm2 2v8h8V6H2z"})})})]})}},xFV3:function(e,n,r){"use strict";var t=r("rePB"),c=r("Ff2n"),a=r("nKUr"),o=(r("q1tI"),r("YFqc")),i=r.n(o),l=r("7ljp"),s=r("GqNI");function b(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?b(Object(r),!0).forEach((function(n){Object(t.a)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}n.a=function(e){var n=e.children,r=e.title,t=e.subtitle;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(s.a,{subtitle:r,description:t}),Object(a.jsxs)("div",{className:"padding-x:$len64; padding-y:$len32; max-width:60rem;",children:[Object(a.jsx)("h1",{className:"font:$h1; margin:0;",children:r}),t&&Object(a.jsx)("h2",{className:"font:$h2; margin:0; color:$gray70;",children:t}),Object(a.jsx)("hr",{className:"\n        border-width:$len1;\n        border-style:solid;\n        border-color:$gray10;\n        height:0;\n        margin-y:$len16;\n      "}),Object(a.jsx)("section",{children:Object(a.jsx)(l.a,{components:p,children:n})})]})]})};var p={a:function(e){var n=e.children,r=e.className,t=e.href,o=Object(c.a)(e,["children","className","href"]);return Object(a.jsx)(i.a,{href:t,children:Object(a.jsx)("a",u(u({className:"\n          ".concat(r||"","\n          color:$blue80;\n          :hover{color:$blue60}\n          :active{color:$red60}!\n        ")},o),{},{children:n}))})},code:function(e){var n=e.children,r=e.className,t=Object(c.a)(e,["children","className"]);return Object(a.jsx)("code",u(u({},t),{},{className:"".concat(r||""," font:inherit;"),children:n}))},h1:function(e){var n=e.children,r=e.className,t=Object(c.a)(e,["children","className"]);return Object(a.jsx)("h3",u(u({},t),{},{className:"".concat(r||""," font:$h3; margin-y:$len16;"),children:n}))},h2:function(e){var n=e.children,r=e.className,t=Object(c.a)(e,["children","className"]);return Object(a.jsx)("h4",u(u({},t),{},{className:"".concat(r||""," font:$h4; margin-y:$len16;"),children:n}))},h3:function(e){var n=e.children,r=e.className,t=Object(c.a)(e,["children","className"]);return Object(a.jsx)("h5",u(u({},t),{},{className:"".concat(r||""," font:$h5; margin-y:$len16;"),children:n}))},hr:function(){return Object(a.jsx)("div",{className:"height:0; border-width:$len1; border-style:solid; border-color:$gray10;"})},inlineCode:function(e){var n=e.children,r=e.className,t=Object(c.a)(e,["children","className"]);return Object(a.jsx)("code",u(u({},t),{},{className:"".concat(r||""," font-family:$mono; font-size:0.875em; vertical-align:0.0625em;"),children:n}))},pre:function(e){var n=e.children,r=e.className,t=Object(c.a)(e,["children","className"]);return Object(a.jsx)("pre",u(u({},t),{},{className:"".concat(r||""," font:$code; margin:0;"),children:n}))}}}},[["MTJX",0,2,1,3]]]);