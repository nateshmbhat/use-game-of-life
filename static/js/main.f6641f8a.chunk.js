(this["webpackJsonpuse-game-of-life-example"]=this["webpackJsonpuse-game-of-life-example"]||[]).push([[0],{10:function(n,e,t){},12:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),u=t(2),a=t.n(u),c=(t(10),t(1)),i=function(n){var e=n.updateInterval,t=void 0===e?500:e,o=n.gridRows,u=void 0===o?50:o,a=n.gridColumns,i=void 0===a?50:a,l=n.randomizeGrid,f=void 0!==l&&l,s=n.randomGridAlivePercent,d=void 0===s?50:s,m=function(){for(var n=[],e=0;e<u;e++)n.push(Array.from(new Array(i),(function(){return 0})));return n},p=Object(r.useRef)(!1),v=Object(r.useState)(!1),g=v[0],b=v[1],k=Object(r.useState)((function(){return f?function(){for(var n=[],e=0;e<u;e++)n.push(Array.from(new Array(i),(function(){return Math.random()<d/100?1:0})));return n}():m()})),h=k[0],y=k[1],C=Object(r.useCallback)((function(n,e,t){var r=0;return[[-1,-1],[-1,0],[-1,1],[0,1],[0,-1],[1,-1],[1,0],[1,1]].forEach((function(o){var a=e+o[0],c=t+o[1];a>=0&&a<u&&c>=0&&c<i&&1==n[a][c]&&(r+=1)})),r}),[]),E=Object(r.useCallback)((function(){p.current&&(y((function(n){return Object(c.a)(n,(function(e){return e.forEach((function(t,r){return t.forEach((function(t,o){var u=C(n,r,o);0==e[r][o]&&3==u?e[r][o]=1:(u<2||u>3)&&(e[r][o]=0)}))}))}))})),setTimeout(E,t))}),[]);return{grid:h,setCell:function(n,e,t){y((function(r){return Object(c.a)(r,(function(r){r[n][e]=t?1:0}))}))},start:function(){b(!0),p.current=!0,E()},stop:function(){b(!1),p.current=!1},isRunning:function(){return g},clearGrid:function(){y(m())}}},l=function(){var n=i({updateInterval:25,randomizeGrid:!0,randomGridAlivePercent:30}),e=n.grid,t=n.setCell,r=n.start,u=n.stop,a=n.isRunning;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App",style:{display:"grid",gridTemplateColumns:"repeat(50 , 1fr)",gridAutoRows:"19px"}},e.map((function(n,r){return n.map((function(n,u){return o.a.createElement("div",{key:"".concat(r,"-").concat(u),style:{border:"1px solid black",backgroundColor:e[r][u]?"green":void 0},onClick:function(){t(r,u,!e[r][u]),console.log("You clicked ",r,u)}})}))}))),o.a.createElement("button",{onClick:function(){a()?u():r()}},a()?"Stop":"Start"))};a.a.render(o.a.createElement(l,null),document.getElementById("root"))},3:function(n,e,t){n.exports=t(12)}},[[3,1,2]]]);
//# sourceMappingURL=main.f6641f8a.chunk.js.map