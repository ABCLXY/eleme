webpackJsonp([1],{"2CYb":function(t,e){},"5OHe":function(t,e){},A3lv:function(t,e){},J8wn:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},a,!1,function(t){s("2CYb")},null,null).exports,r=s("/ocq"),c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",[s("a",{on:{click:function(e){return t.direc("/msite")}}},[s("svg",{staticClass:"index-footerTabIcon_1EbB8wS"},[s("use",{attrs:{"xlink:href":"#h5-component-index"}})]),t._v(" "),s("span",[t._v("首页")])]),t._v(" "),s("a",{on:{click:function(e){return t.direc("/discover")}}},[s("svg",{staticClass:"index-footerTabIcon_1EbB8wS"},[s("use",{attrs:{"xlink:href":"#h5-component-discoverRegular"}})]),t._v(" "),s("span",[t._v("发现")])]),t._v(" "),s("a",{on:{click:function(e){return t.direc("/order")}}},[s("svg",{staticClass:"index-footerTabIcon_1EbB8wS"},[s("use",{attrs:{"xlink:href":"#h5-component-orderRegular"}})]),t._v(" "),s("span",[t._v("订单")])]),t._v(" "),s("a",{on:{click:function(e){return t.direc("/profile")}}},[s("svg",{staticClass:"index-footerTabIcon_1EbB8wS"},[s("use",{attrs:{"xlink:href":"#h5-component-profileRegular"}})]),t._v(" "),s("span",[t._v("我的")])])])])},staticRenderFns:[]};var o=s("VU/8")({methods:{direc:function(t){this.$router.push({path:t})}}},c,!1,function(t){s("ukGw")},"data-v-17660ed1",null).exports,l=s("//Fk"),u=s.n(l),v=s("aozt"),p=s.n(v);var _=s("psq8"),f=s.n(_),h=s("wSez"),d=(s("5OHe"),s("bghU"),{props:{score:Number,size:Number},computed:{starType:function(){return"star-"+this.size},starClasses:function(){for(var t=Math.floor(2*this.score)/2,e=Math.floor(t),s=t%1!=0,n=[],a=0;a<e;a++)n.push("on");for(s&&n.push("half");n.length<5;)n.push("off");return n}}}),m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"star",class:this.starType},this._l(this.starClasses,function(t,s){return e("span",{key:s,staticClass:"star-item",class:t})}),0)},staticRenderFns:[]};var g=s("VU/8")(d,m,!1,function(t){s("gQpz")},"data-v-10638d50",null).exports;n.default.component(h.Swipe.name,h.Swipe),n.default.component(h.SwipeItem.name,h.SwipeItem);var C={components:{"elm-tabbar":o,"elm-star":g},data:function(){return{hotsearch:[],entries:[],restaurants:[],page:1,limit:10}},created:function(){var t,e,s,n=this;(t=40.1144418,e=116.3579348,s={latitude:t,longitude:e},new u.a(function(t,e){p.a.get("static/1.json",{params:s}).then(function(e){t(e)}).catch(function(t){e(t)})})).then(function(t){n.hotsearch=t.data}).then(function(){var t,e,s;(t=40.1144418,e=116.3579348,s={latitude:t,longitude:e,"templates[]":"main_templates"},new u.a(function(t,e){p.a.get("static/entries.json",{params:s}).then(function(e){t(e)}).catch(function(t){e(err)})})).then(function(t){n.entries=f.a.chunk(t.data[0].entries,8),console.log(n.entries)})}).then(function(){(function(t,e,s,n){var a={latitude:t,longitude:e,offset:s,limit:n,"extras[]":"activites",terminal:"h5"};return new u.a(function(t,e){p.a.get("static/resteraunt.json",{params:a}).then(function(e){t(e)}).catch(function(t){e(t)})})})(40.1144418,116.3579348,(n.page-1)*n.limit,n.limit).then(function(t){console.log(t.data.items),n.restaurants=t.data.items})}).catch(function(t){console.log(t)})},filters:{imgUrl:function(t){var e="https://fuss10.elemecdn.com/",s=(e+=t.slice(0,1)+"/"+t.slice(1,3)+"/"+t.slice(3)).match(/jpeg|jpg|png$/);return console.log(s[0]),e+="."+s[0]+"?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",[s("div",{staticClass:"location"},[s("svg",{staticClass:"icon-location",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 31"}},[s("path",{attrs:{fill:"#FFF","fill-rule":"evenodd",d:"M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"}})]),t._v(" "),s("span",{staticClass:"icon-arrow"},[t._v("保定市人民政府")]),t._v(" "),s("svg",{staticClass:"icon-location",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 8"}},[s("path",{attrs:{fill:"#FFF","fill-rule":"evenodd",d:"M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"}})])])]),t._v(" "),s("section",{staticClass:"search"},[s("div",{staticClass:"button"},[s("a",{attrs:{href:""}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[s("path",{attrs:{"fill-opacity":".38",d:"M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"}})]),t._v(" "),s("span",[t._v("搜索饿了么商家、商品名称")])])])]),t._v(" "),s("section",{staticClass:"hot-search"},[s("ul",t._l(t.hotsearch,function(e,n){return s("li",{key:n},[t._v(t._s(e.search_word))])}),0)]),t._v(" "),s("section",{staticClass:"entries"},[s("mt-swipe",{attrs:{auto:4e3}},t._l(t.entries,function(e,n){return s("mt-swipe-item",{key:n},t._l(e,function(e,n){return s("a",{key:n,attrs:{href:""}},[s("img",{attrs:{src:t._f("imgUrl")(e.image_hash),alt:""}}),t._v(" "),s("span",[t._v(t._s(e.name))])])}),0)}),1)],1),t._v(" "),t._m(0),t._v(" "),t._l(t.restaurants,function(e,n){return s("section",{key:n,staticClass:"shop-list"},[s("section",{staticClass:"wrapper"},[s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-logo"},[s("img",{attrs:{src:t._f("imgUrl")(e.restaurant.image_path)}})]),t._v(" "),s("div",{staticClass:"shop-main"},[s("div",{staticClass:"title"},[s("h3",[t._v(t._s(e.restaurant.name))]),t._v(" "),s("span",{staticClass:"supportWrap"},[t._v("···")])]),t._v(" "),s("div",{staticClass:"rating"},[s("div",{staticClass:"ratingWrap"},[s("elm-star",{attrs:{score:e.restaurant.rating,size:24}}),t._v(" "),s("div",{staticClass:"list"},[s("span",[t._v(t._s(e.restaurant.rating))]),t._v(" "),s("span",[t._v("月售"+t._s(e.restaurant.recent_order_num)+"单")])])],1),t._v(" "),s("div",{staticClass:"deliver-mode"},t._l(e.delivery_mode,function(e,n){return s("span",{key:n},[t._v("蜂鸟专送")])}),0)]),t._v(" "),s("div",{staticClass:"fee"},[t._m(1,!0),t._v(" "),s("div",{staticClass:"distance"},[s("span",[t._v(t._s(e.restaurant.distance/1e3)+"km")]),t._v(" "),s("span",[t._v(t._s(e.restaurant.order_lead_time)+"分钟")])])]),t._v(" "),s("div",{staticClass:"shop-activity"},[s("div",{staticClass:"tag-top"},[t._m(2,!0),t._v(" "),s("div",{staticClass:"activityBtn"},[s("span",[t._v(t._s(e.restaurant.activities.length)+"活动")]),t._v(" "),s("img",{attrs:{src:"",alt:""}})])]),t._v(" "),t._l(e.restaurant.activities,function(e,n){return s("div",{key:n,staticClass:"activities"},[s("span",{staticClass:"discount"},[t._v("减")]),t._v(" "),s("span",[t._v(t._s(e.tips))])])})],2)])])])])}),t._v(" "),s("elm-tabbar")],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"shop-title"},[this._v("推荐商家")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"money"},[e("span",[this._v("￥15起送")]),this._v(" "),e("span",[this._v("优惠配送费￥3")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag-line"},[e("img",{attrs:{src:"",alt:""}}),this._v(" "),e("span",[this._v("口碑人气好店")])])}]};var b=s("VU/8")(C,w,!1,function(t){s("J8wn")},"data-v-54b04307",null).exports,x={components:{"elm-tabbar":o}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("\n\t\t发现页面\n\t")]),this._v(" "),e("elm-tabbar")],1)},staticRenderFns:[]};var y=s("VU/8")(x,k,!1,function(t){s("A3lv")},"data-v-173ef236",null).exports,E={components:{"elm-tabbar":o}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("\n\t\t订单页面\n\t")]),this._v(" "),e("elm-tabbar")],1)},staticRenderFns:[]};var $=s("VU/8")(E,F,!1,function(t){s("nO53")},"data-v-12251c44",null).exports,z={components:{"elm-tabbar":o}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("\n\t\t我的页面\n\t")]),this._v(" "),e("elm-tabbar")],1)},staticRenderFns:[]};var R=s("VU/8")(z,U,!1,function(t){s("qog+")},"data-v-6c22a624",null).exports;n.default.use(r.a);var S=new r.a({routes:[{path:"/",redirect:"/msite"},{path:"/msite",component:b},{path:"/discover",component:y},{path:"/order",component:$},{path:"/profile",component:R}]});n.default.config.productionTip=!1,new n.default({el:"#app",router:S,components:{App:i},template:"<App/>"})},gQpz:function(t,e){},nO53:function(t,e){},"qog+":function(t,e){},ukGw:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b98d970dbcf67baef4d0.js.map