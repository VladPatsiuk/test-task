(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{16:function(e,t,a){e.exports=a(44)},21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),s=a.n(c),l=(a(21),a(3)),o=a.n(l),u=a(14),i=a(2),m=(a(23),a(24),function(e){var t=Object(n.useState)(new Array(12).fill("")),a=Object(i.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){var t=function(e){return e.map((function(e){return e>11?"red":e>7?"green":e>3?"blue":"grey"}))}(e.users.reduce((function(e,t){return e[new Date(t.dob).getMonth()]++,e}),new Array(12).fill(0)));s(t)}),[e.users]),r.a.createElement("div",{className:"months"},r.a.createElement("div",{className:"box"},r.a.createElement("ul",{className:"circle-container"},["January","February","March","April","May","June","July","August","September","October","November","December"].map((function(t,a){return r.a.createElement("li",{key:t,onMouseEnter:function(){return e.getMonth(a)},onMouseLeave:function(){return e.getMonth(null)}},r.a.createElement("div",{className:"".concat(c[a])},t))})),r.a.createElement("li",null,r.a.createElement("div",{className:"start"},r.a.createElement("span",{role:"img","aria-label":"star"},"\u2b50"))))))}),f=(a(25),a(26),function(e){return r.a.createElement("div",{className:"user"},e.user.firstName," ",e.user.lastName)}),p=function(e){var t=r.a.createElement("div",{className:"users__hint"},r.a.createElement("p",null,"Hi there ",r.a.createElement("span",{role:"img","aria-label":"waving-hand"},"\ud83d\udc4b")),r.a.createElement("p",null,"Please hover over any month!"));return r.a.createElement("div",{className:"users"},r.a.createElement("div",{className:"users__container"},r.a.createElement("div",{className:"users__title"},r.a.createElement("p",null,"\\ Awesome dudes ",r.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40"),"/")),0!==e.users.length?r.a.createElement("ul",null,e.users.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(f,{user:e}))}))):t))},E=a(15),h=a.n(E).a.create({baseURL:"https://yalantis-react-school-api.yalantis.com/api/",responseType:"json"}),d=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),l=Object(i.a)(s,2),f=l[0],E=l[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("task0/users");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return r.a.createElement("div",{className:"app"},r.a.createElement(m,{users:a,getMonth:function(e){var t=a.filter((function(t){return new Date(t.dob).getMonth()===e}));E(t)}}),r.a.createElement(p,{users:f}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.7cab90a4.chunk.js.map