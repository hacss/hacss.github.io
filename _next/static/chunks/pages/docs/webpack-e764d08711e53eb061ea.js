_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"+MtP":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/webpack",function(){return t("+Qst")}])},"+Qst":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var a=t("rePB"),r=t("Ff2n"),o=(t("q1tI"),t("7ljp")),c=t("xFV3"),i=t("fK+J");function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b={};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",s(s(s({},b),t),{},{components:n,mdxType:"MDXLayout"}),Object(o.b)(c.a,{title:"Webpack",subtitle:"Integrate Hacss with your build process",mdxType:"Article"},Object(o.b)("p",null,"Hacss is a bit different than other CSS tools (e.g. preprocessors) that you may\nhave used with Webpack in the past. With Hacss, you don't simply author a style\nsheet in a compile-to-CSS language; rather, the style sheet is entirely\ngenerated."),Object(o.b)("p",null,"While your Webpack configuration will continue to leverage\n",Object(o.b)("a",s({parentName:"p"},{href:"https://github.com/webpack-contrib/css-loader"}),"css-loader")," and\n",Object(o.b)("a",s({parentName:"p"},{href:"https://github.com/webpack-contrib/style-loader"}),"style-loader"),",\nyou will also use the lesser-known\n",Object(o.b)("a",s({parentName:"p"},{href:"https://github.com/webpack-contrib/val-loader"}),"val-loader"),"\nto generate a CSS module dynamically using Hacss."),Object(o.b)("h1",null,"Installation"),Object(o.b)("p",null,"If you have not done so already, install the required packages:"),Object(o.b)(i.a,{mdxType:"ShellCommand"},"npm install -D val-loader css-loader style-loader @hacss/build"),Object(o.b)("h1",null,"Webpack Configuration"),Object(o.b)("p",null,"Two small changes in the Webpack configuration (i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"webpack.config.js")," are\nnecessary to enable Hacss."),Object(o.b)("h2",null,"Entry"),Object(o.b)("p",null,"The first change required is to insert an additional\n",Object(o.b)("a",s({parentName:"p"},{href:"https://webpack.js.org/concepts/entry-points/"}),"entry point"),". This likely means\nchanging the existing ",Object(o.b)("inlineCode",{parentName:"p"},"entry")," value from a string to an array and adding\n",Object(o.b)("inlineCode",{parentName:"p"},"@hacss/build"),":"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  entry: ["./src/main.js", "@hacss/build"]\n};\n')),Object(o.b)("h2",null,"Rule"),Object(o.b)("p",null,"The next step is to create a\n",Object(o.b)("a",s({parentName:"p"},{href:"https://webpack.js.org/configuration/module/#rule"}),"rule")," that specifies how to\nload the ",Object(o.b)("inlineCode",{parentName:"p"},"@hacss/build")," module you referenced in the ",Object(o.b)("inlineCode",{parentName:"p"},"entry")," array."),Object(o.b)("p",null,"As a starting point, you can use the rule configuration below, setting the\n",Object(o.b)("inlineCode",{parentName:"p"},"sources")," option in the ",Object(o.b)("inlineCode",{parentName:"p"},"val-loader")," configuration to a glob pattern that\ncaptures all source files containing CSS classes that should be included in the\ngenerated style sheet (e.g. HTML templates and/or UI component modules)."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  module: {\n    rules: [\n      {\n        test: /@hacss\\/build/,\n        use: [\n          "style-loader",\n          "css-loader",\n          { loader: "val-loader", options: { sources: "src/*.js" } },\n        ]\n      }\n    ]\n  }\n};\n')),Object(o.b)("h1",null,"Conclusion"),Object(o.b)("p",null,"A generated style sheet will now be added to the page automatically. At this\npoint, you can add a ",Object(o.b)("inlineCode",{parentName:"p"},"hacss.config.js")," file alongside ",Object(o.b)("inlineCode",{parentName:"p"},"webpack.config.js")," if\nnecessary; or you can specify an additional ",Object(o.b)("inlineCode",{parentName:"p"},"val-loader")," option config which\ncontains the path to your Hacss configuration file. See the\n",Object(o.b)("a",s({parentName:"p"},{href:"./configuration"}),"configuration guide")," for more details.")))}p.isMDXComponent=!0},"fK+J":function(e,n,t){"use strict";var a=t("nKUr");n.a=function(e){var n=e.children;return Object(a.jsxs)("div",{className:"\n      display:inline-flex;\n      align-items:center;\n      border-width:1px;\n      border-style:solid;\n      border-color:$gray10;\n      border-radius:$sm;\n      background:$gray05;\n      color:$gray95;\n      font:$code;\n    ",children:[Object(a.jsx)("div",{className:"padding:$len8;",children:n}),Object(a.jsx)("button",{className:"\n          appearance:none;\n          border:0;\n          margin:0;\n          padding:$len8\n          background:transparent;\n          color:$gray40;\n          :hover{color:$blue40}\n          :active{color:$red30}!\n          cursor:pointer;\n        ",children:Object(a.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14 12V2H4V0h12v12h-2zM0 4h12v12H0V4zm2 2v8h8V6H2z"})})})]})}}},[["+MtP",0,2,1,3,4]]]);