(function(e){function t(t){for(var a,o,l=t[0],u=t[1],i=t[2],s=0,f=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},c={app:0},r=[];function o(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4e145935","chunk-2d0bfeb3":"a7e5b465"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=c[e]=[t,a]}));t.push(n[2]=a);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(e);var i=new Error;r=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,n[1](i)}c[e]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2be9":function(e,t,n){},"31fc":function(e,t,n){},5517:function(e,t,n){"use strict";n("31fc")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(e,t){var n=Object(a["w"])("router-view");return Object(a["p"])(),Object(a["d"])(n)}n("5517");const r={};r.render=c;var o=r,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),u=Object(a["g"])("header",{class:"header"},[Object(a["g"])("h1",{class:" text-7xl "},"To do list")],-1),i={class:" text-5xl p-10 space-y-10"},s=Object(a["f"])(" OK "),d=Object(a["g"])("br",null,null,-1),f=Object(a["g"])("br",null,null,-1),b=Object(a["g"])("br",null,null,-1),p={class:"table border-separate"},h={class:"effects"},m={class:"flex items-center justify-between gap-2"},g={key:0,class:"task"},v={key:1,class:"task active"},j={class:"flex items-center cursor-pointer"},O=Object(a["g"])("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"},null,-1),y=Object(a["g"])("path",{d:"M45 0C20.1 0 0 20.1 0 45C0 69.9 20.1 90 45 90C69.9 90 90 69.9 90 45C90 20.1 69.9 0 45 0ZM66.3 59.9C67 60.6 67 61.6\n                66.3 62.3L62.2 66.4C61.5 67.1 60.5 67.1 59.8 66.4L45 51.4L30.1 66.3C29.4 67 28.4 67 27.7 66.3L23.6 62.2C22.9 61.5 22.9 60.5\n                23.6 59.8L38.6 45L23.7 30.1C23 29.4 23 28.4 23.7 27.7L27.8 23.6C28.5 22.9 29.5 22.9 30.2 23.6L45 38.6L59.9 23.7C60.6 23 61.6\n                23 62.3 23.7L66.4 27.8C67.1 28.5 67.1 29.5 66.4 30.2L51.4 45L66.3 59.9Z",fill:"black"},null,-1);function k(e,t,n,c,r,o){return Object(a["p"])(),Object(a["d"])(a["a"],null,[u,Object(a["g"])("div",i,[Object(a["g"])("h2",null,Object(a["y"])(this.$store.state.username)+"'s tasks ",1)]),Object(a["g"])("button",{class:"bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500\n     hover:border-transparent rounded",onClick:t[3]||(t[3]=function(){return o.change&&o.change.apply(o,arguments)}),key:"change"},[Object(a["D"])(Object(a["g"])("input",{class:"  border-none text-black mr-3 focus:outline-none",placeholder:"Change your name",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.changeName.username=e}),onKeyup:t[2]||(t[2]=Object(a["E"])((function(){return o.change&&o.change.apply(o,arguments)}),["enter"]))},null,544),[[a["A"],r.changeName.username]]),s]),d,f,b,Object(a["g"])("div",p,[Object(a["g"])("table",null,[Object(a["g"])("ul",null,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(this.$store.state.tasks,(function(e,n){return Object(a["p"])(),Object(a["d"])("li",{key:e,ref:"id"},[Object(a["g"])("div",h,[Object(a["g"])("div",m,[r.line?(Object(a["p"])(),Object(a["d"])("span",v,Object(a["y"])(e),1)):(Object(a["p"])(),Object(a["d"])("span",g,Object(a["y"])(e),1)),Object(a["g"])("div",j,[(Object(a["p"])(),Object(a["d"])("svg",{class:"w-12 h-12 svg",viewBox:"0 0 16 16",onClick:t[4]||(t[4]=function(e){return o.methodLine()}),fill:"black",xmlns:"http://www.w3.org/2000/svg"},[O])),(Object(a["p"])(),Object(a["d"])("svg",{class:" cursor-pointer svg",width:"20",height:"20",onClick:function(e){return o.del(n)},viewBox:"0 0 90 90",xmlns:"http://www.w3.org/2000/svg"},[y],8,["onClick"]))])])])],512)})),128))])])]),Object(a["g"])("div",null,[Object(a["D"])(Object(a["g"])("input",{class:"border-none text-black mr-3 py-1 px-2 focus:outline-none w-50",type:"text",placeholder:"Write your task",onKeyup:t[5]||(t[5]=Object(a["E"])((function(){return o.add&&o.add.apply(o,arguments)}),["enter"])),ref:"item.id","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.form.nome=e})},null,544),[[a["A"],r.form.nome]]),Object(a["g"])("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:t[7]||(t[7]=function(){return o.add&&o.add.apply(o,arguments)}),key:"Add"}," Add ")])],64)}var w=n("5530"),x=n("5502"),C=(n("a589"),{data:function(){return{line:!1,form:{nome:""},changeName:{username:""}}},computed:Object(w["a"])({},Object(x["b"])(["username"])),methods:{methodLine:function(){this.line=!this.line},change:function(){0!=this.changeName.username.length&&(this.$store.commit("setUsername",this.changeName.username),this.changeName.username="")},add:function(){0!=this.form.nome.length&&(this.$store.commit("addTask",this.form.nome),this.form.nome="")},del:function(e){this.$store.commit("removeTask",e)}}});C.render=k;var _=C,S=Object(a["g"])("h1",null,"Hello Test",-1),L=Object(a["g"])("br",null,null,-1);function A(e,t,n,c,r,o){return Object(a["p"])(),Object(a["d"])("div",null,[S,Object(a["g"])("h2",null," Username: ("+Object(a["y"])(e.username)+")",1),Object(a["g"])("ul",null,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(r.connected,(function(e){return Object(a["p"])(),Object(a["d"])("li",{key:e},Object(a["y"])(e),1)})),128))]),Object(a["D"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.form.nome=e})},null,512),[[a["A"],r.form.nome]]),Object(a["g"])("button",{onClick:t[2]||(t[2]=function(){return o.add&&o.add.apply(o,arguments)})},"Adicionar"),L,Object(a["g"])("a",{href:"#",onClick:t[3]||(t[3]=Object(a["F"])((function(){return o.change&&o.change.apply(o,arguments)}),["prevent"]))},"click")])}var N=Object(a["G"])("data-v-5cc7f8f0");Object(a["s"])("data-v-5cc7f8f0");var P={class:"hello"},T=Object(a["e"])('<p data-v-5cc7f8f0> For a guide and recipes on how to configure / customize this project,<br data-v-5cc7f8f0> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-cli documentation</a>. </p><h3 data-v-5cc7f8f0>Installed CLI Plugins</h3><ul data-v-5cc7f8f0><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5cc7f8f0>babel</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5cc7f8f0>router</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-5cc7f8f0>vuex</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5cc7f8f0>eslint</a></li></ul><h3 data-v-5cc7f8f0>Essential Links</h3><ul data-v-5cc7f8f0><li data-v-5cc7f8f0><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>Core Docs</a></li><li data-v-5cc7f8f0><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>Forum</a></li><li data-v-5cc7f8f0><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>Community Chat</a></li><li data-v-5cc7f8f0><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5cc7f8f0>Twitter</a></li><li data-v-5cc7f8f0><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>News</a></li></ul><h3 data-v-5cc7f8f0>Ecosystem</h3><ul data-v-5cc7f8f0><li data-v-5cc7f8f0><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-router</a></li><li data-v-5cc7f8f0><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vuex</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-devtools</a></li><li data-v-5cc7f8f0><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-loader</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5cc7f8f0>awesome-vue</a></li></ul>',7);Object(a["q"])();var I=N((function(e,t,n,c,r,o){return Object(a["p"])(),Object(a["d"])("div",P,[Object(a["g"])("h1",null,Object(a["y"])(n.msg),1),T])})),J={name:"HelloWorld",props:{msg:String}};n("7a76");J.render=I,J.__scopeId="data-v-5cc7f8f0";var M=J,U={data:function(){var e;return{connected:null!==(e=JSON.parse(localStorage.getItem("connected")))&&void 0!==e?e:[],form:{nome:""}}},computed:Object(w["a"])({},Object(x["b"])(["username"])),methods:{change:function(){this.$store.dispatch("changename",Math.random())},add:function(){0!=this.form.nome.length&&(this.connected.push(this.form.nome),this.form.nome="",localStorage.setItem("connected",JSON.stringify(this.connected)))}},components:{HelloWorld:M}};U.render=A;var E,$=U,D=(n("7e55"),n("ab03"),n("a2c6"),[{path:"/",name:"Home",component:_},{path:"/test",name:"Test",component:$},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/Add",name:"Add",component:function(){return Promise.resolve().then(n.bind(null,"7e55"))}},{path:"/changeName",name:"changeName",component:function(){return Promise.resolve().then(n.bind(null,"ab03"))}},{path:"/edit",name:"edit",component:function(){return Promise.resolve().then(n.bind(null,"a2c6"))}},{path:"/delete",name:"delete",component:function(){return n.e("chunk-2d0bfeb3").then(n.bind(null,"4023"))}}]),V=Object(l["a"])({history:Object(l["b"])(),routes:D}),H=V,F=(n("a434"),Object(x["a"])({state:{username:"Pecris",tasks:null!==(E=JSON.parse(localStorage.getItem("tasks")))&&void 0!==E?E:[]},mutations:{setUsername:function(e,t){e.username=t},addTask:function(e,t){e.tasks.push(t),localStorage.setItem("tasks",JSON.stringify(e.tasks))},removeTask:function(e,t){e.tasks.splice(t,1),localStorage.setItem("tasks",JSON.stringify(e.tasks))}}}));n("a766");Object(a["c"])(o).use(F).use(H).mount("#app")},"7a76":function(e,t,n){"use strict";n("2be9")},"7e55":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c={class:"table"},r=Object(a["g"])("h1",null,"Add tarefa",-1),o=Object(a["f"])();function l(e,t,n,l,u,i){var s=Object(a["w"])("center");return Object(a["p"])(),Object(a["d"])("body",null,[Object(a["g"])("h2",null," Username: ("+Object(a["y"])(e.username)+")",1),Object(a["g"])("div",c,[Object(a["g"])(s,null,{default:Object(a["C"])((function(){return[Object(a["g"])("table",null,[Object(a["g"])("ul",null,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(u.connected,(function(e){return Object(a["p"])(),Object(a["d"])("li",{key:e},[Object(a["g"])("h1",null,Object(a["y"])(e),1)])})),128))])])]})),_:1}),r,Object(a["D"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return u.form.nome=e})},null,512),[[a["A"],u.form.nome]]),o,Object(a["g"])("button",{onClick:t[2]||(t[2]=function(){return i.add&&i.add.apply(i,arguments)}),key:"Add"},"Add")])])}var u=n("5530"),i=(n("a589"),n("5502")),s={data:function(){var e;return{connected:null!==(e=JSON.parse(localStorage.getItem("connected")))&&void 0!==e?e:[],form:{nome:""}}},computed:Object(u["a"])({},Object(i["b"])(["username"])),components:{},methods:{add:function(){0!=this.form.nome.length&&(this.connected.push(this.form.nome),this.form.nome="",localStorage.setItem("connected",JSON.stringify(this.connected)))},change:function(){}}};s.render=l;t["default"]=s},a2c6:function(e,t,n){"use strict";n.r(t);var a=n("7a23");function c(e,t){return Object(a["p"])(),Object(a["d"])("h1",null,"under development")}const r={};r.render=c;t["default"]=r},a589:function(e,t,n){},a766:function(e,t,n){},ab03:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=Object(a["g"])("h1",null,"Change your username",-1),r=Object(a["g"])("br",null,null,-1),o=Object(a["g"])("br",null,null,-1),l=Object(a["g"])("br",null,null,-1),u=Object(a["g"])("br",null,null,-1);function i(e,t,n,i,s,d){return Object(a["p"])(),Object(a["d"])("div",null,[c,Object(a["g"])("h2",null,"Actually your username is "+Object(a["y"])(e.username),1),r,o,Object(a["D"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return s.form.nome=e})},null,512),[[a["A"],s.form.nome]]),l,u,Object(a["g"])("button",{onClick:t[2]||(t[2]=function(){return d.change&&d.change.apply(d,arguments)})},"Change name")])}var s=n("5530"),d=n("5502"),f={data:function(){return{form:{nome:""}}},computed:Object(s["a"])({},Object(d["b"])(["username"])),methods:{change:function(){this.$store.dispatch("changename",Math.random())}},components:{}};f.render=i;t["default"]=f}});
//# sourceMappingURL=app.d80a6d96.js.map