(function(t){function e(e){for(var r,a,c=e[0],s=e[1],l=e[2],u=0,d=[];u<c.length;u++)a=c[u],o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="./";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var h=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"11d9":function(t,e,n){t.exports=n.p+"img/3.a60544bb.jpg"},2856:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"show"},[t._v(t._s(t.showText))]),n("canvas",{attrs:{id:"canvas"}})])},i=[],a=(n("a481"),n("11d9"),[{text:"root",level:0,children:[{text:"child1",level:1,children:[]},{text:"child2",level:1,children:[]},{text:"child3",level:1,children:[]},{text:"child1",level:1,children:[]},{text:"child2",level:1,children:[]},{text:"child3",level:1,children:[]},{text:"child1",level:1,children:[]},{text:"child2",level:1,children:[]},{text:"child3",level:1,children:[]},{text:"child1",level:1,children:[]},{text:"child2",level:1,children:[]},{text:"child3",level:1,children:[]}]}]),c=(n("6b54"),n("28a5"),function(){return"#"+parseInt(265*Math.random()).toString(16)+parseInt(265*Math.random()).toString(16)+parseInt(265*Math.random()).toString(16)}),s=function(t,e){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}},l=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},h=(n("6c7b"),n("c665")),u=n("aa9a"),d=function(){function t(e,n){Object(h["a"])(this,t),this.options=e,this.ctx=n,this.drawNode()}return Object(u["a"])(t,[{key:"drawNode",value:function(){if(this.ctx.beginPath(),this.ctx.strokeStyle=this.options.border.color,this.ctx.lineWidth=this.options.border.width,this.ctx.arc(this.options.currentPos.x,this.options.currentPos.y,this.options.radius,0,2*Math.PI),this.options.background.color&&(this.ctx.fillStyle=this.options.background.color,this.ctx.fill(),this.ctx.stroke(),this.options.startPos.x&&this.drawLine()),this.options.background.img){this.image=new Image;var t=this;this.ctx.fill(),this.image.onload=function(){t.ctx.globalCompositeOperation="source-atop",t.ctx.drawImage(t.image,t.options.currentPos.x-t.options.radius+2,t.options.currentPos.y-t.options.radius+2,2*t.options.radius-4,2*t.options.radius-4),t.ctx.beginPath(),t.ctx.strokeStyle=t.options.border.color,t.ctx.lineWidth=t.options.border.width,t.ctx.globalCompositeOperation="source-over",t.ctx.arc(t.options.currentPos.x,t.options.currentPos.y,t.options.radius,0,2*Math.PI),t.ctx.stroke()},this.image.src=this.options.background.img,this.options.startPos.x&&this.drawLine()}}},{key:"drawLine",value:function(){this.ctx.globalCompositeOperation="destination-over",this.ctx.beginPath(),this.ctx.moveTo(this.options.currentPos.x,this.options.currentPos.y),this.ctx.lineTo(this.options.startPos.x,this.options.startPos.y),this.ctx.stroke()}}]),t}(),p=d,f=n("9393"),v=(n("ac4d"),n("8a81"),n("ac6a"),function(){function t(e,n,r,o){Object(h["a"])(this,t),this.oldData=JSON.parse(JSON.stringify(e)),this.data=this.transData(this.oldData),this.drawNode(this.data)}return Object(u["a"])(t,[{key:"transData",value:function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t.entries()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var l=Object(f["a"])(a.value,2),h=l[0],u=l[1],d={data:{}};d.data.text=u.text,d.options={currentPos:this.getPos(h,u.level),border:{width:1,color:"#ff0000"},background:{color:c()},radius:20,startPos:e||{}},u.children&&(d.children=this.transData(u.children,d.options.currentPos,t.length)),n.push(d)}}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}},{key:"getPos",value:function(t,e){return 0===e?{x:this.cw/2,y:this.ch/2}:{x:this.cw/2-100*Math.cos(Math.PI/6*t),y:this.ch/2-100*Math.sin(Math.PI/6*t)}}},{key:"getY",value:function(t,e,n){var r;r=0===t?0:this.getLevelNum(t-1);var o=ch/(r+1)/(e+1)*++n;return console.log(o),o}},{key:"drawNode",value:function(t){var e=!0,n=!1,r=void 0;try{for(var o,i=t.entries()[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var a=Object(f["a"])(o.value,2),c=(a[0],a[1]);new p(c.options,this.ctx);c.children&&this.drawNode(c.children)}}catch(t){n=!0,r=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}}},{key:"getLevelNum",value:function(t){var e=0,n=this.getLevelArr(t,this.oldData),r=!0,o=!1,i=void 0;try{for(var a,c=tileArray(n)[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var s=a.value;e+=parseInt(s)}}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return e}},{key:"getLevelArr",value:function(t,e){if(Array.isArray(e)){var n=[];if(0==t)return n.push(e.length);if(e.length){var r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var s=a.value;s.level+1==t?n.push(s.children.length):n.push(this.getLevelArr(t,s.children))}}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}}else n.push(1);return n}}},{key:"refresh",value:function(){this.drawNode(this.data)}}]),t}()),y=v,x={name:"app",data:function(){return{showText:""}},mounted:function(){var t,e=document.getElementById("canvas"),n=e.getContext("2d"),r=document.getElementById("app"),o=e.width=window.getComputedStyle(r).width.replace("px",""),i=e.height=window.getComputedStyle(r).height.replace("px",""),c={},h={},u={},d=1.4,p=1;y.prototype.cw=o,y.prototype.ch=i,y.prototype.ctx=n,e.addEventListener("touchmove",function(t){t.preventDefault()}),e.addEventListener("touchstart",v),e.addEventListener("touchmove",v),e.addEventListener("touchcancel",v);var f=new y(a);function v(e){switch(e.type){case"touchstart":1===e.touches.length?h={x:e.touches[0].clientX,y:e.touches[0].clientY}:e.touches.length>1&&(c.start=l({x:e.touches[0].clientX,y:e.touches[0].clientY},{x:e.touches[1].clientX,y:e.touches[1].clientY}));break;case"touchmove":1===e.touches.length?(u={x:e.touches[0].clientX,y:e.touches[0].clientY},g()):2===e.touches.length&&(c.stop=l({x:e.touches[0].clientX,y:e.touches[0].clientY},{x:e.touches[1].clientX,y:e.touches[1].clientY}),t=s({x:event.touches[0].pageX,y:event.touches[0].pageY},{x:event.touches[1].pageX,y:event.touches[1].pageY}),d=c.stop/c.start,c.start=c.stop,x());break;case"touchend":d=1,x(d);break;case"touchcancel":d=1,x(d);break;default:}}function x(){n.clearRect(0,0,o,i),n.scale(d,d),p*=d,n.translate(-t.x*(d-1),-t.y*(d-1)),f.refresh()}function g(){var t=u.x-h.x,e=u.y-h.y;n.clearRect(0,0,o,i),n.translate(t/p,e/p),f.refresh(),h=u}}},g=x,b=(n("5c0b"),n("2877")),w=Object(b["a"])(g,o,i,!1,null,null,null);w.options.__file="App.vue";var m=w.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("2856"),o=n.n(r);o.a}});
//# sourceMappingURL=app.dde80c5a.js.map