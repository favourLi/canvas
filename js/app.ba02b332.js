(function(t){function e(e){for(var n,a,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)a=s[u],o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="./";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var h=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"11d9":function(t,e,r){t.exports=r.p+"img/3.a60544bb.jpg"},2856:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"show"},[t._v(t._s(t.showText))]),r("canvas",{attrs:{id:"canvas"}})])},i=[],a=(r("a481"),r("11d9"),[{text:"root",level:0,children:[{text:"child1",level:1,children:[]},{text:"child2",level:1,children:[]},{text:"child3",level:1,children:[]},{text:"child1",level:1,children:[]},{text:"child2",level:1,children:[]},{text:"child3",level:1,children:[]},{text:"child1",level:1,children:[]},{text:"child2",level:1,children:[]},{text:"child3",level:1,children:[]},{text:"child1",level:1,children:[]},{text:"child2",level:1,children:[]},{text:"child3",level:1,children:[]}]}]),s=(r("6b54"),r("28a5"),function(){return"#"+parseInt(265*Math.random()).toString(16)+parseInt(265*Math.random()).toString(16)+parseInt(265*Math.random()).toString(16)}),c=function(t,e){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}},l=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},h=(r("6c7b"),r("c665")),u=r("aa9a"),d=function(){function t(e,r){Object(h["a"])(this,t),this.options=e,this.ctx=r,this.drawNode()}return Object(u["a"])(t,[{key:"drawNode",value:function(){if(this.ctx.beginPath(),this.ctx.strokeStyle=this.options.border.color,this.ctx.lineWidth=this.options.border.width,this.ctx.arc(this.options.currentPos.x,this.options.currentPos.y,this.options.radius,0,2*Math.PI),this.options.background.color&&(this.ctx.fillStyle=this.options.background.color,this.ctx.fill(),this.ctx.stroke(),this.options.startPos.x&&this.drawLine()),this.options.background.img){this.image=new Image;var t=this;this.ctx.fill(),this.image.onload=function(){t.ctx.globalCompositeOperation="source-atop",t.ctx.drawImage(t.image,t.options.currentPos.x-t.options.radius+2,t.options.currentPos.y-t.options.radius+2,2*t.options.radius-4,2*t.options.radius-4),t.ctx.beginPath(),t.ctx.strokeStyle=t.options.border.color,t.ctx.lineWidth=t.options.border.width,t.ctx.globalCompositeOperation="source-over",t.ctx.arc(t.options.currentPos.x,t.options.currentPos.y,t.options.radius,0,2*Math.PI),t.ctx.stroke()},this.image.src=this.options.background.img,this.options.startPos.x&&this.drawLine()}}},{key:"drawLine",value:function(){this.ctx.globalCompositeOperation="destination-over",this.ctx.beginPath(),this.ctx.moveTo(this.options.currentPos.x,this.options.currentPos.y),this.ctx.lineTo(this.options.startPos.x,this.options.startPos.y),this.ctx.stroke()}}]),t}(),p=d,v=r("9393"),f=(r("ac4d"),r("8a81"),r("ac6a"),function(){function t(e,r,n,o){Object(h["a"])(this,t),this.oldData=JSON.parse(JSON.stringify(e)),this.data=this.transData(this.oldData),this.drawNode(this.data)}return Object(u["a"])(t,[{key:"transData",value:function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t.entries()[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){var l=Object(v["a"])(a.value,2),h=l[0],u=l[1],d={data:{}};d.data.text=u.text,d.options={currentPos:this.getPos(h,u.level),border:{width:1,color:"#ff0000"},background:{color:s()},radius:20,startPos:e||{}},u.children&&(d.children=this.transData(u.children,d.options.currentPos,t.length)),r.push(d)}}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}},{key:"getPos",value:function(t,e){return 0===e?{x:this.cw/2,y:this.ch/2}:{x:this.cw/2-100*Math.cos(Math.PI/6*t),y:this.ch/2-100*Math.sin(Math.PI/6*t)}}},{key:"getY",value:function(t,e,r){var n;n=0===t?0:this.getLevelNum(t-1);var o=ch/(n+1)/(e+1)*++r;return console.log(o),o}},{key:"drawNode",value:function(t){var e=!0,r=!1,n=void 0;try{for(var o,i=t.entries()[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var a=Object(v["a"])(o.value,2),s=(a[0],a[1]);new p(s.options,this.ctx);s.children&&this.drawNode(s.children)}}catch(t){r=!0,n=t}finally{try{e||null==i.return||i.return()}finally{if(r)throw n}}}},{key:"getLevelNum",value:function(t){var e=0,r=this.getLevelArr(t,this.oldData),n=!0,o=!1,i=void 0;try{for(var a,s=tileArray(r)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var c=a.value;e+=parseInt(c)}}catch(t){o=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return e}},{key:"getLevelArr",value:function(t,e){if(Array.isArray(e)){var r=[];if(0==t)return r.push(e.length);if(e.length){var n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var c=a.value;c.level+1==t?r.push(c.children.length):r.push(this.getLevelArr(t,c.children))}}catch(t){o=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}}else r.push(1);return r}}},{key:"refresh",value:function(){this.drawNode(this.data)}}]),t}()),y=f,x={name:"app",data:function(){return{showText:""}},mounted:function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),r=document.getElementById("app"),n=t.width=window.getComputedStyle(r).width.replace("px",""),o=t.height=window.getComputedStyle(r).height.replace("px",""),i={},s={},h={},u=1;y.prototype.cw=n,y.prototype.ch=o,y.prototype.ctx=e,document.addEventListener("touchmove",function(t){t.preventDefault()}),t.addEventListener("touchstart",p),t.addEventListener("touchmove",p),t.addEventListener("touchend",p),t.addEventListener("touchcancel",p);var d=new y(a);function p(t){switch(t.type){case"touchstart":1===t.touches.length?s={x:t.touches[0].screenX,y:t.touches[0].screenY}:t.touches.length>1&&(i.start=l({x:t.touches[0].screenX,y:t.touches[0].screenY},{x:t.touches[1].screenX,y:t.touches[1].screenY}));break;case"touchmove":1===t.touches.length?(u=1,h={x:t.touches[0].screenX,y:t.touches[0].screenY},f(s,h)):2===t.touches.length&&(c({x:event.touches[0].pageX,y:event.touches[0].pageY},{x:event.touches[1].pageX,y:event.touches[1].pageY}),i.stop=l({x:t.touches[0].screenX,y:t.touches[0].screenY},{x:t.touches[1].screenX,y:t.touches[1].screenY}),v(i.stop,i.start));break;case"touchend":u=1,v(u);break;case"touchcancel":u=1,v(u);break;default:}}function v(t,r){e.clearRect(0,0,n,o),e.scale(t/r,t/r),e.translate(-n/2*(t/r-1),-o/2*(t/r-1)),d.refresh(),r=t}function f(t){var r=h.x-s.x,i=h.y-s.y;e.clearRect(0,0,n,o),e.translate(r,i),d.refresh(),s=h}}},g=x,b=(r("5c0b"),r("2877")),w=Object(b["a"])(g,o,i,!1,null,null,null);w.options.__file="App.vue";var m=w.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("2856"),o=r.n(n);o.a}});
//# sourceMappingURL=app.ba02b332.js.map