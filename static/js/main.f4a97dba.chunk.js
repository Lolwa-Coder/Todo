(this.webpackJsonptodo1=this.webpackJsonptodo1||[]).push([[0],{16:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(8),o=n.n(r),u=(n(7),n(9)),i=n(4),a=n(3),b=n(10),j=n(0),l=function(t){var e=t.onSubmit,n=function(t){var e=Object(c.useState)(t),n=Object(a.a)(e,2),r=n[0],o=n[1];return{value:r,onChange:function(t){return o(t.target.value)},resetValue:function(){return o("")}}}(""),r=n.resetValue,o=Object(b.a)(n,["resetValue"]);return Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),e(o.value),r()},children:Object(j.jsx)("input",Object(i.a)({},o))})},s=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)("To DO? or not to DO?"),b=Object(a.a)(o,2),s=b[0],O=b[1],d=function(t){return t%2!==0?"left":"right"};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{id:"h1wrap",children:Object(j.jsx)("h1",{children:s})}),Object(j.jsx)("button",{id:"butt",onClick:function(){return r([])},children:"Break Bricks"}),Object(j.jsx)(l,{onSubmit:function(t){return r([{text:t,complete:!1}].concat(Object(u.a)(n)))}}),Object(j.jsx)("div",{onClick:function(){return O("DO IT NIGGA!")},id:"to",children:n.map((function(t,e){var c=t.text,o=t.complete1;return Object(j.jsxs)("div",{onClick:function(){return function(t){return r(n.map((function(e,n){return n===t?Object(i.a)(Object(i.a)({},e),{},{complete1:!e.complete1}):e})))}(e)},style:{color:o?"brown":"",borderColor:o?"brown":"",float:d(e),textAlign:d(e+1)},children:[c,"?"]},c)}))})]})};o.a.render(Object(j.jsx)(s,{}),document.getElementById("root"))},7:function(t,e,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.f4a97dba.chunk.js.map