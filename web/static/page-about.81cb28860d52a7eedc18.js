(window["webpackJsonpcorvin"]=window["webpackJsonpcorvin"]||[]).push([[4],{D2qR:function(t,a,e){},EpAE:function(t,a,e){"use strict";var i=e("q9px");var r=e.n(i);var n=r.a},G1Ao:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this;var a=t.$createElement;var e=t._self._c||a;return e("main",{staticClass:"page has-inset is-gapless products"},[t.hasHero?e("corvin-page-hero",{attrs:{hero:t.data.content.hero}}):t._e(),t._v(" "),t.hasProducts?e("corvin-products",{staticClass:"is-contained",attrs:{products:t.data.products,"has-filters.boolean":"false","listing-type":"all-flooring"}}):t._e()],1)};var r=[];var n=e("KwuT");var o=e("do7L");var s=e("3jCI");var l={components:{CorvinPageHero:o["a"],CorvinProducts:s["a"]},mixins:[n["a"]],data:function t(){return{handle:"all-flooring"}},computed:{hasContent:function t(){return"content"in this.data},hasHero:function t(){return this.hasContent&&"hero"in this.data.content},hasProducts:function t(){return"products"in this.data&&this.data.products.length>0}},activated:function t(){this.$emit("page-activated");this.$eventBus.$emit("page-loaded")}};var c=l;var v=e("KHd+");var u=Object(v["a"])(c,i,r,false,null,null,null);var p=a["default"]=u.exports},"H+Oa":function(t,a,e){},"JOP+":function(t,a,e){"use strict";var i=e("D2qR");var r=e.n(i);var n=r.a},OEW6:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this;var a=t.$createElement;var e=t._self._c||a;return t.loading?e("corvin-loading"):e("main",{staticClass:"page is-inset is-gapless has-cta about"},[t.hasHeading?e("corvin-page-hero",{attrs:{hero:t.data.content.hero}}):t._e(),t._v(" "),e("content-quote",{staticClass:"about-intro is-contained content-wrapper",attrs:{item:t.data.content.contentQuote}}),t._v(" "),e("hr",{staticClass:"is-contained"}),t._v(" "),e("div",{staticClass:"about-team is-contained content-wrapper"},[e("h2",{staticClass:"section-heading"},[t._v("Our Team")]),t._v(" "),e("div",{staticClass:"profiles"},t._l(t.data.content.team.team,(function(t,a){return e("corvin-profile",{key:a,attrs:{profile:t}})})),1)]),t._v(" "),e("div",{staticClass:"cta about-cta"},[e("div",{staticClass:"is-contained"},[e("h3",[t._v("Contact one of our team members today and we will assist you")])])])],1)};var r=[];var n=e("KwuT");var o=function(){var t=this;var a=t.$createElement;var e=t._self._c||a;return e("div",{staticClass:"content-and-quote"},[e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.item.content)}}),t._v(" "),e("aside",{staticClass:"pull-quote"},[e("blockquote",[e("span",{domProps:{innerHTML:t._s(t.item.sidebarHeadline)}}),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.item.sidebarContent)}})])])])};var s=[];var l={props:{item:{type:Object,default:function t(){return{}}}}};var c=l;var v=e("JOP+");var u=e("KHd+");var p=Object(u["a"])(c,o,s,false,null,"9f19d692",null);var d=p.exports;var f=e("vgCd");var h=e("do7L");var m=function(){var t=this;var a=t.$createElement;var e=t._self._c||a;return e("div",{staticClass:"profile"},[e("img",{staticClass:"profile-image",attrs:{alt:t.profile.teamMemberImage.alt,src:t._f("profileImage")(t.profile.teamMemberImage.url)}}),t._v(" "),e("h2",{staticClass:"profile-name"},[t._v("\n    "+t._s(t.profile.teamMemberName)+"\n  ")]),t._v(" "),e("p",{staticClass:"profile-title"},[t._v("\n    "+t._s(t.profile.teamMemberTitle)+"\n  ")]),t._v(" "),t.hasPhone?e("p",{staticClass:"profile-phone"},[t._v("\n    "+t._s(t.profile.phone)+"\n  ")]):t._e(),t._v(" "),t.hasEmail?e("p",{staticClass:"profile-email"},[t._v("\n    "+t._s(t.profile.email)+"\n  ")]):t._e()])};var g=[];var _={filters:{profileImage:function t(a){return a.length>0?a:"https://placehold.it/256x280"}},props:{profile:{type:Object,default:function t(){return{}}}},computed:{hasEmail:function t(){return"email"in this.profile&&this.profile.email.length>0},hasPhone:function t(){return"phone"in this.profile&&this.profile.phone!==null&&this.profile.phone.length>0}}};var C=_;var E=e("EpAE");var O=Object(u["a"])(C,m,g,false,null,"00e89086",null);var P=O.exports;var b=[{name:"Mark Corvin",title:"CO-OWNER, PRESIDENT",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"David Brown",title:"FLOORING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"Tyler Corvin",title:"ASSISTANT FLOORING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"Paola Ogadzhanova ",title:"MARKETING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"Mark Corvin",title:"CO-OWNER, PRESIDENT",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"David Brown",title:"FLOORING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"Tyler Corvin",title:"ASSISTANT FLOORING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"Paola Ogadzhanova ",title:"MARKETING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"}];var A={components:{ContentQuote:d,CorvinLoading:f["a"],CorvinPageHero:h["a"],CorvinProfile:P},mixins:[n["a"]],data:function t(){return{jsonUrl:"/".concat(this.$api.pages.about),profiles:b}},computed:{hasHeading:function t(){return true}}};var M=A;var N=e("h5ag");var x=e("W3D/");var R=Object(u["a"])(M,i,r,false,null,"1593cab7",null);var I=a["default"]=R.exports},QMIg:function(t,a,e){"use strict";var i=e("gLkz");var r=e.n(i);var n=r.a},"W3D/":function(t,a,e){"use strict";var i=e("l1nw");var r=e.n(i);var n=r.a},gLkz:function(t,a,e){},h5ag:function(t,a,e){"use strict";var i=e("H+Oa");var r=e.n(i);var n=r.a},l1nw:function(t,a,e){},q9px:function(t,a,e){},vgCd:function(t,a,e){"use strict";var i=function(){var t=this;var a=t.$createElement;var e=t._self._c||a;return t._m(0)};var r=[function(){var t=this;var a=t.$createElement;var e=t._self._c||a;return e("div",{staticClass:"lds-roller"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])}];var n={};var o=n;var s=e("QMIg");var l=e("KHd+");var c=Object(l["a"])(o,i,r,false,null,"ce092508",null);var v=a["a"]=c.exports}}]);