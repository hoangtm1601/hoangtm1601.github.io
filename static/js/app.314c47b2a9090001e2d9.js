webpackJsonp([1],{NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var a=e("VU/8")({name:"App"},i,!1,function(t){e("gsu9")},null,null).exports,c=e("/ocq"),o={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("Test router")])},staticRenderFns:[]};var r=e("VU/8")({name:"TestRouter"},o,!1,function(t){e("UDns")},"data-v-d84831c6",null).exports,u={name:"CountDown",data:function(){return{day:0,hour:0,minute:0,second:0}},methods:{calculateETA:function(t){var s=new Date("2021-02-12").setHours(0,0,0,0)-t;s=(s-s%1e3)/1e3,this.second=this.addDigit(s%60),s=(s-this.second)/60,this.minute=this.addDigit(s%60),s=(s-this.minute)/60,this.hour=this.addDigit(s%24),this.day=this.addDigit((s-this.hour)/24)},addDigit:function(t){return t>=10?t:"0"+t}},created:function(){var t=this;setInterval(function(){var s=new Date;t.calculateETA(s)},1e3)}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main"},[e("div",{staticClass:"countdown"},[e("div",{staticClass:"block"},[e("p",{staticClass:"digit"},[t._v(t._s(t.day))]),t._v(" "),e("p",{staticClass:"text"},[t._v("Days")])]),t._v(" "),e("div",{staticClass:"block"},[e("p",{staticClass:"digit"},[t._v(t._s(t.hour))]),t._v(" "),e("p",{staticClass:"text"},[t._v("Hours")])]),t._v(" "),e("div",{staticClass:"block"},[e("p",{staticClass:"digit"},[t._v(t._s(t.minute))]),t._v(" "),e("p",{staticClass:"text"},[t._v("Minutes")])]),t._v(" "),e("div",{staticClass:"block"},[e("p",{staticClass:"digit"},[t._v(t._s(t.second))]),t._v(" "),e("p",{staticClass:"text"},[t._v("Seconds")])])])])},staticRenderFns:[]};var l=e("VU/8")(u,d,!1,function(t){e("teAX")},"data-v-20e42fcc",null).exports;n.a.use(c.a);var v=new c.a({mode:"history",routes:[{path:"/",name:"count-down",component:l},{path:"/test",name:"test",component:r}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:v,components:{App:a},template:"<App/>"})},UDns:function(t,s){},gsu9:function(t,s){},teAX:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.314c47b2a9090001e2d9.js.map
