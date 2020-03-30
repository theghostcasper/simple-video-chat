(function(e){function n(n){for(var r,c,i=n[0],s=n[1],u=n[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(n);while(f.length)f.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,i=1;i<t.length;i++){var s=t[i];0!==a[s]&&(r=!1)}r&&(o.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},a={app:0},o=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var d=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1:function(e,n){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],c=(t("5c0b"),t("2877")),i={},s=Object(c["a"])(i,a,o,!1,null,null,null),u=s.exports,d=t("8c4f"),l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("VideoChat")],1)},f=[],p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"video-chat"},[t("nav",{staticClass:"video-chat-toolbar"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Choose a name"},domProps:{value:e.username},on:{input:function(n){n.target.composing||(e.username=n.target.value)}}}),t("button",{staticClass:"btn",on:{click:e.connect}},[e._v("Connect")]),e.connected?t("p",[e._v("Connected")]):t("p",[e._v("Not Connected")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.friendname,expression:"friendname"}],attrs:{type:"text",placeholder:"Who you want to call"},domProps:{value:e.friendname},on:{input:function(n){n.target.composing||(e.friendname=n.target.value)}}}),t("button",{staticClass:"btn",on:{click:e.call}},[e._v("Call")])]),e._m(0)])},m=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"video-chat-body"},[t("video",{attrs:{id:"userVideo",autoplay:""}}),t("video",{attrs:{id:"friendVideo",autoplay:""}})])}],v=t("b85c"),h=(t("96cf"),t("1da1")),b=t("8055"),g=t.n(b),y={name:"videoChat",data:function(){return{username:"",connected:!1,friendname:"",peerConnection:null,socket:null}},methods:{send:function(e){this.socket.emit("peerData",e)},connect:function(){var e=this;this.socket=g.a.connect("13.52.80.50:8008"),this.socket.on("connect",(function(){e.socket.emit("user-connect",{username:e.username}),e.connected=!0})),this.socket.on("handshake",function(){var n=Object(h["a"])(regeneratorRuntime.mark((function n(t){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.offer&&e.applyHandshake(null,JSON.parse(t.offer)),t.candidate&&e.applyHandshake(JSON.parse(t.candidate),null),!t.forAnswer){n.next=9;break}return n.next=5,e.peerConnection.createAnswer();case 5:return r=n.sent,n.next=8,e.peerConnection.setLocalDescription(r);case 8:e.send({sender:e.username,receiver:e.friendname,offer:JSON.stringify(r)});case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),this.socket.on("incoming",(function(n){e.friendname=n.sender,e.answer()}))},applyHandshake:function(e,n){n&&this.peerConnection.setRemoteDescription(n),e&&this.peerConnection.addIceCandidate(e)},call:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var t,r,a,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.socket.emit("make-call",{sender:e.username,receiver:e.friendname}),n.next=3,navigator.mediaDevices.getUserMedia({video:{width:{min:640,max:1920},height:{min:400,max:1080},aspectRatio:1.777777778,frameRate:{max:30}},audio:{sampleSize:16,channelCount:2}});case 3:t=n.sent,document.getElementById("userVideo").srcObject=t,e.peerConnection=new RTCPeerConnection,r=Object(v["a"])(t.getTracks());try{for(r.s();!(a=r.n()).done;)o=a.value,e.peerConnection.addTrack(o,t)}catch(i){r.e(i)}finally{r.f()}return e.peerConnection.ontrack=function(e){return document.getElementById("friendVideo").srcObject=e.streams[0]},n.next=11,e.peerConnection.createOffer();case 11:return c=n.sent,n.next=14,e.peerConnection.setLocalDescription(c);case 14:e.send({sender:e.username,receiver:e.friendname,offer:JSON.stringify(c),candidate:null,forAnswer:!0}),e.peerConnection.onicecandidate=function(n){e.send({sender:e.username,receiver:e.friendname,candidate:JSON.stringify(n.candidate),offer:null})};case 16:case"end":return n.stop()}}),n)})))()},answer:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var t,r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:t=n.sent,document.getElementById("userVideo").srcObject=t,e.peerConnection=new RTCPeerConnection,r=Object(v["a"])(t.getTracks());try{for(r.s();!(a=r.n()).done;)o=a.value,e.peerConnection.addTrack(o,t)}catch(c){r.e(c)}finally{r.f()}e.peerConnection.ontrack=function(e){return document.getElementById("friendVideo").srcObject=e.streams[0]},e.peerConnection.onicecandidate=function(n){e.send({sender:e.username,receiver:e.friendname,candidate:JSON.stringify(n.candidate)})};case 9:case"end":return n.stop()}}),n)})))()}}},C=y,w=Object(c["a"])(C,p,m,!1,null,"048aad3c",null),O=w.exports,k={name:"Home",components:{VideoChat:O}},x=k,j=Object(c["a"])(x,l,f,!1,null,null,null),_=j.exports;r["a"].use(d["a"]);var S=[{path:"/",name:"Home",component:_}],P=new d["a"]({mode:"history",base:"/simple-video-chat/",routes:S}),R=P,N=t("2f62");r["a"].use(N["a"]);var T=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:R,store:T,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("9c0c"),a=t.n(r);a.a},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.ae79090b.js.map