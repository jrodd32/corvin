(window["webpackJsonpcorvin"]=window["webpackJsonpcorvin"]||[]).push([[4],{"7w97":function(a,t,e){"use strict";var r=e("DBmD");var n=e.n(r);var s=n.a},D2qR:function(a,t,e){},DBmD:function(a,t,e){},FhbR:function(a,t,e){"use strict";var r=e("chnq");var n=e.n(r);var s=n.a},G1Ao:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this;var t=a.$createElement;var e=a._self._c||t;return a.loading?e("corvin-loading"):e("main",{staticClass:"page has-inset is-gapless products"},[a.hasHero?e("corvin-page-hero",{attrs:{hero:a.data.content.hero}}):a._e(),a._v(" "),a.hasProducts?e("corvin-products",{staticClass:"is-contained",attrs:{products:a.data.products,"has-filters.boolean":"false","listing-type":"all-flooring"}}):a._e()],1)};var n=[];var s=e("KwuT");var i=e("vgCd");var o=e("do7L");var l=e("3jCI");var c={components:{CorvinLoading:i["a"],CorvinPageHero:o["a"],CorvinProducts:l["a"]},mixins:[s["a"]],data(){return{handle:"all-flooring"}},computed:{hasContent(){return"content"in this.data},hasHero(){return this.hasContent&&"hero"in this.data.content},hasProducts(){return"products"in this.data&&this.data.products.length>0}},activated(){this.$emit("page-activated");this.$eventBus.$emit("page-loaded")}};var v=c;var u=e("KHd+");var p=Object(u["a"])(v,r,n,false,null,null,null);var d=t["default"]=p.exports},"JOP+":function(a,t,e){"use strict";var r=e("D2qR");var n=e.n(r);var s=n.a},OEW6:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this;var t=a.$createElement;var e=a._self._c||t;return a.loading?e("corvin-loading"):e("main",{staticClass:"page is-inset is-gapless has-cta about"},[a.hasHeading?e("corvin-page-hero",{attrs:{hero:a.data.content.hero}}):a._e(),a._v(" "),e("content-quote",{staticClass:"about-intro is-contained content-wrapper",attrs:{item:a.data.content.contentQuote}}),a._v(" "),e("hr",{staticClass:"is-contained"}),a._v(" "),e("div",{staticClass:"about-team is-contained content-wrapper"},[e("h2",{staticClass:"section-heading"},[a._v("Our Team")]),a._v(" "),e("div",{staticClass:"profiles"},a._l(a.data.content.team.team,(function(a,t){return e("corvin-profile",{key:t,attrs:{profile:a}})})),1)]),a._v(" "),e("div",{staticClass:"cta about-cta"},[e("div",{staticClass:"is-contained"},[e("h3",[a._v("Contact one of our team members today and we will assist you")])])])],1)};var n=[];var s=e("KwuT");var i=function(){var a=this;var t=a.$createElement;var e=a._self._c||t;return e("div",{staticClass:"content-and-quote"},[e("div",{staticClass:"content",domProps:{innerHTML:a._s(a.item.content)}}),a._v(" "),e("aside",{staticClass:"pull-quote"},[e("blockquote",[e("span",{domProps:{innerHTML:a._s(a.item.sidebarHeadline)}}),a._v(" "),e("div",{domProps:{innerHTML:a._s(a.item.sidebarContent)}})])])])};var o=[];var l={props:{item:{type:Object,default(){return{}}}}};var c=l;var v=e("JOP+");var u=e("KHd+");var p=Object(u["a"])(c,i,o,false,null,"9f19d692",null);var d=p.exports;var h=e("vgCd");var f=e("do7L");var m=function(){var a=this;var t=a.$createElement;var e=a._self._c||t;return e("div",{staticClass:"profile"},[e("img",{staticClass:"profile-image",attrs:{alt:a.profile.teamMemberImage.alt,src:a.profile.teamMemberImage.url}}),a._v(" "),e("h2",{staticClass:"profile-name"},[a._v("\n    "+a._s(a.profile.teamMemberName)+"\n  ")]),a._v(" "),e("p",{staticClass:"profile-title"},[a._v("\n    "+a._s(a.profile.teamMemberTitle)+"\n  ")]),a._v(" "),a.hasPhone?e("p",{staticClass:"profile-phone"},[a._v("\n    "+a._s(a.profile.phone)+"\n  ")]):a._e(),a._v(" "),a.hasEmail?e("p",{staticClass:"profile-email"},[a._v("\n    "+a._s(a.profile.email)+"\n  ")]):a._e()])};var _=[];var C={props:{profile:{type:Object,default(){return{}}}},computed:{hasEmail(){return"email"in this.profile&&this.profile.email!==null&&this.profile.email.length>0},hasPhone(){return"phone"in this.profile&&this.profile.phone!==null&&this.profile.phone.length>0}}};var g=C;var b=e("7w97");var w=Object(u["a"])(g,m,_,false,null,"64d1d304",null);var P=w.exports;var H={components:{ContentQuote:d,CorvinLoading:h["a"],CorvinPageHero:f["a"],CorvinProfile:P},mixins:[s["a"]],data(){return{jsonUrl:"/".concat(this.$api.pages.about)}},computed:{hasHeading(){return true}}};var O=H;var j=e("FhbR");var q=e("W3D/");var D=Object(u["a"])(O,r,n,false,null,"e307c23c",null);var $=t["default"]=D.exports},"W3D/":function(a,t,e){"use strict";var r=e("l1nw");var n=e.n(r);var s=n.a},chnq:function(a,t,e){},l1nw:function(a,t,e){}}]);