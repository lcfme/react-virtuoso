(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1319:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(1291),c=n(1293),o=n(1292),u=n(1295),i=n(1294),m=function(e){return a.a.createElement(i.f,{user:Object(u.b)(e),index:e})},s=function(){var e=Object(l.useState)("start"),t=e[0],n=e[1],r=Object(l.useRef)(null);return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",null,a.a.createElement(o.b,{totalCount:1e3,overscan:200,ref:r,item:m,style:{height:"400px",width:"350px"}})),a.a.createElement("div",null,a.a.createElement("ul",{className:"knobs"},a.a.createElement("li",null,a.a.createElement("button",{onClick:function(){return r.current.scrollToIndex({index:0,align:t}),!1}},"Scroll To 1")),a.a.createElement("li",null,a.a.createElement("button",{onClick:function(){return r.current.scrollToIndex({index:499,align:t}),!1}},"Scroll To 500")),a.a.createElement("li",null,a.a.createElement("button",{onClick:function(){return r.current.scrollToIndex({index:999,align:t}),!1}},"Scroll To 1000")),a.a.createElement("li",null,a.a.createElement("label",null,"Align:",a.a.createElement("select",{value:t,onChange:function(e){return n(e.target.value)}},a.a.createElement("option",{value:"start"},"Start"),a.a.createElement("option",{value:"center"},"Center"),a.a.createElement("option",{value:"end"},"End")))))))},d=n(123);t.default=function(){return a.a.createElement(r.a,{sidebar:function(){return a.a.createElement(c.a,{path:"ScrollToIndex"})}},a.a.createElement(d.Helmet,null,a.a.createElement("meta",{name:"description",content:"React Virtuoso live example with large data set with dynamic height."})),a.a.createElement("h2",null,"Scroll to index"),a.a.createElement("p",null,"The Virtuoso component exposes an imperative"," ",a.a.createElement("code",null,"scrollToIndex")," method, which can be used to scroll the passed index into view."),a.a.createElement("p",null,"The ",a.a.createElement("code",null,"scrollToIndex")," method accepts either"," ",a.a.createElement("code",null,"number")," or"," ",a.a.createElement("code",null,"{ index: number, align: 'start' | 'center' | 'end' }")," ","as an argument."),a.a.createElement(s,null))}}}]);
//# sourceMappingURL=component---src-pages-scroll-to-index-js-4dff2035cd39342a969e.js.map