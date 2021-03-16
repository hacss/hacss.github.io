_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"1NHZ":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/style-guide",function(){return n("qL0K")}])},qL0K:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n("rePB"),i=n("Ff2n"),r=(n("q1tI"),n("7ljp")),o=n("xFV3");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",s(s(s({},c),n),{},{components:t,mdxType:"MDXLayout"}),Object(r.b)(o.a,{title:"Style Guide",subtitle:"Best practices when using Hacss",mdxType:"Article"},Object(r.b)("h1",null,"Atomic Classes"),Object(r.b)("h2",null,"Suggestion"),Object(r.b)("p",null,"Use classes as single-purpose units of style. In practice, this generally means\nincluding only one declaration per class."),Object(r.b)("h2",null,"Justification"),Object(r.b)("p",null,"While a single class can include multiple declarations (e.g.\n",Object(r.b)("inlineCode",{parentName:"p"},"background:red;color:white;"),") each additional declaration affects composability\nand reuse of the rule. Separating this example into two classes\n(",Object(r.b)("inlineCode",{parentName:"p"},"background:red;")," and ",Object(r.b)("inlineCode",{parentName:"p"},"color:white;"),")\nwould allow the ",Object(r.b)("inlineCode",{parentName:"p"},"color:white;")," CSS to be reused with other classes such as\n",Object(r.b)("inlineCode",{parentName:"p"},"background:blue;")),Object(r.b)("h1",null,"Shorthand Properties"),Object(r.b)("h2",null,"Suggestion"),Object(r.b)("p",null,"Use shorthand properties with caution."),Object(r.b)("h2",null,"Justification"),Object(r.b)("p",null,"It makes sense, in a way, to apply a class ",Object(r.b)("inlineCode",{parentName:"p"},"margin:8px;")," to the same element as\na class ",Object(r.b)("inlineCode",{parentName:"p"},"margin-left:0;"),": You would probably be trying to achieve 8-pixel top,\nright, and bottom margins; and, in some cases, you may even get the expected\nresult. However, because ",Object(r.b)("inlineCode",{parentName:"p"},"margin:8px;")," sets all margins to the same value (not\njust undefined ones), the left margin would be reset to 8px if the ",Object(r.b)("inlineCode",{parentName:"p"},"margin:8px;"),"\nrule appeared later in the generated style sheet."),Object(r.b)("p",null,"A few options exist to make the above example work consistently, including:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Merging the rules, which would guarantee their application in the correct\norder: ",Object(r.b)("inlineCode",{parentName:"li"},"margin:8px;margin-left:0;")),Object(r.b)("li",{parentName:"ul"},"Avoiding the shorthand property altogether:\n",Object(r.b)("inlineCode",{parentName:"li"},"margin-top:8px;")," ",Object(r.b)("inlineCode",{parentName:"li"},"margin-right:8px;")," ",Object(r.b)("inlineCode",{parentName:"li"},"margin-bottom:8px;")," ",Object(r.b)("inlineCode",{parentName:"li"},"margin-left:0;")),Object(r.b)("li",{parentName:"ul"},"Using a more explicit form of the shorthand property:\n",Object(r.b)("inlineCode",{parentName:"li"},"margin:8px__8px__8px__0;")),Object(r.b)("li",{parentName:"ul"},"Applying ",Object(r.b)("a",s({parentName:"li"},{href:"https://github.com/kinday/postcss-axis"}),"postcss-axis")," or similar to\nthe Hacss-generated style sheet to enable more selective shorthand properties\nsuch as ",Object(r.b)("inlineCode",{parentName:"li"},"margin-x")," and ",Object(r.b)("inlineCode",{parentName:"li"},"margin-y"),".")),Object(r.b)("h1",null,"Rule Consistency"),Object(r.b)("h2",null,"Suggestion"),Object(r.b)("p",null,"Write a given style rule as consistently as possible throughout the codebase,\navoiding, for example, such classes as ",Object(r.b)("inlineCode",{parentName:"p"},"background:red;")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"background-color:red;")," that achieve the same effect in two different ways."),Object(r.b)("h2",null,"Justification"),Object(r.b)("p",null,"Because each style rule adds bytes to the generated style sheet, inconsistent\nstyle can affect the performance of your Web site.")))}b.isMDXComponent=!0}},[["1NHZ",0,2,1,3,4]]]);