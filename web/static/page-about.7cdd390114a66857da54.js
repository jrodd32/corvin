(window["webpackJsonpcorvin"]=window["webpackJsonpcorvin"]||[]).push([[3],{"9wsC":function(e,t,a){},AotP:function(e,t,a){"use strict";var n=a("jtwA");var r=a.n(n);var o=r.a},KwuT:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("pNMO");var r=a.n(n);var o=a("4Brf");var i=a.n(o);var s=a("ma9I");var c=a.n(s);var l=a("EnZy");var d=a.n(l);var u={props:{forceAjax:{type:Boolean,default:function e(){return false}}},data:function e(){return{data:{},handle:null,loadedViaJson:false,loading:!(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]),slug:null,url:null}},created:function e(){this.loadData()},beforeMount:function e(){if(this.loadedViaJson){this.loading=false}},activated:function e(){this.updateHead()},methods:{afterLoadData:function e(){},loadData:function e(){var t=this;var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(!this.forceAjax){if(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]){this.data=window.data.page;this.loadedViaJson=true;this.afterLoadData();if(n){this.updateHead()}return}}var r=window.location.pathname.split("/");r.shift();var o=r[0];var i=r[1];if(o.length===0){o="home"}if(this.handle){o=this.handle}if(this.slug){i=this.slug}var s=i===undefined?"".concat(o):"".concat(o,"/").concat(i);this.$axios.get(a||this.url||"/v1/".concat(s)).then((function(e){t.data=e.data;if(t.data.status){t.loading=false;return}t.afterLoadData();if(n){t.updateHead()}t.loading=false;if(t.$prerender){t.$eventBus.$emit("page-loaded",t.data.lastUpdated)}})).catch((function(e){if(e.response){console.log("Data:");console.log(e.response.data);console.log("Status:");console.log(e.response.status);console.log("Headers:");console.log(e.response.headers)}else if(e.request){console.log("Request:");console.log(e.request)}else{console.log("Error",e.message)}console.log("Config:");console.log(e.config);if(e.response&&e.response.status===404){t.$eventBus.$emit("error",404);return}t.$eventBus.$emit("error",500,e)}))},updateHead:function e(){var t="Corvin's Furniture of Bardstown";var a="";var n="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.data&&this.data.meta&&this.data.meta.title){t="".concat(this.data.meta.title)}if(this.data&&this.data.meta&&this.data.meta.description){a=this.data.metaDescription}if(this.data&&this.data.meta&&this.data.meta.socialImage&&this.data.meta.socialImage.url){n=this.data.socialImage.url}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=a;document.head.querySelector('meta[property="og:description"]').content=a;document.head.querySelector('meta[name="twitter:description"]').content=a;document.head.querySelector('meta[itemprop="description"]').content=a;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=n;document.head.querySelector('meta[name="twitter:image:src"]').content=n;document.head.querySelector('meta[itemprop="image"]').content=n;if(this.data&&this.data.canonicalUrl){if(document.head.querySelector("[rel='canonical']")){document.head.querySelector("[rel='canonical']").href=this.data.canonicalUrl}else{var r=document.createElement("link");r.rel="canonical";r.href=this.data.canonicalUrl;document.head.appendChild(r)}}else if(document.head.querySelector("[rel='canonical']")){var o=document.head.querySelector("[rel='canonical']");o.parentNode.removeChild(o)}if(this.data){this.$eventBus.$emit("set-breadcrumb",this.data.title)}}}};var m={data:function e(){return{metaTitle:null,metaDescription:null,socialImage:null}},created:function e(){this.updateHead()},mounted:function e(){if(this.$prerender){this.$eventBus.$emit("page-loaded","na")}},activated:function e(){this.updateHead()},methods:{updateHead:function e(){var t="Corvin Furniture of Bardstown";var a="";var n="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.metaTitle){t="".concat(this.metaTitle)}if(this.metaDescription){a=this.metaDescription}if(this.socialImage){n=this.data.socialImage}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=a;document.head.querySelector('meta[property="og:description"]').content=a;document.head.querySelector('meta[name="twitter:description"]').content=a;document.head.querySelector('meta[itemprop="description"]').content=a;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=n;document.head.querySelector('meta[name="twitter:image:src"]').content=n;document.head.querySelector('meta[itemprop="image"]').content=n}}}},OEW6:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return e.loading?a("corvin-loading"):a("main",{staticClass:"page is-inset is-gapless has-cta about"},[e.hasHeading?a("corvin-page-hero",{attrs:{hero:e.data.content.hero}}):e._e(),e._v(" "),a("content-quote",{staticClass:"about-intro is-contained content-wrapper",attrs:{item:e.data.content.contentQuote}}),e._v(" "),a("hr",{staticClass:"is-contained"}),e._v(" "),a("div",{staticClass:"about-team is-contained content-wrapper"},[a("h2",{staticClass:"section-heading"},[e._v("Our Team")]),e._v(" "),a("div",{staticClass:"profiles"},e._l(e.data.content.team.team,(function(e,t){return a("corvin-profile",{key:t,attrs:{profile:e}})})),1)]),e._v(" "),a("div",{staticClass:"cta about-cta"},[a("div",{staticClass:"is-contained"},[a("h3",[e._v("Contact one of our team members today and we will assist you")])])])],1)};var r=[];var o=a("KwuT");var i=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"content-and-quote"},[a("div",{staticClass:"content",domProps:{innerHTML:e._s(e.item.content)}}),e._v(" "),a("aside",{staticClass:"pull-quote"},[a("blockquote",[a("span",{domProps:{innerHTML:e._s(e.item.sidebarHeadline)}}),e._v(" "),a("div",{domProps:{innerHTML:e._s(e.item.sidebarContent)}})])])])};var s=[];var c={props:{item:{type:Object,default:function e(){return{}}}}};var l=c;var d=a("mcDY");var u=a("KHd+");var m=Object(u["a"])(l,i,s,false,null,"5ea13c93",null);var h=m.exports;var v=a("vgCd");var p=a("do7L");var f=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"profile"},[a("img",{staticClass:"profile-image",attrs:{alt:e.profile.teamMemberImage.alt,src:e._f("profileImage")(e.profile.teamMemberImage.url)}}),e._v(" "),a("h2",{staticClass:"profile-name"},[e._v("\n    "+e._s(e.profile.teamMemberName)+"\n  ")]),e._v(" "),a("p",{staticClass:"profile-title"},[e._v("\n    "+e._s(e.profile.teamMemberTitle)+"\n  ")])])};var g=[];var w={props:{profile:{type:Object,default:function e(){return{}}}},filters:{profileImage:function e(t){return t.length>0?t:"https://placehold.it/256x280"}}};var y=w;var C=a("mBth");var _=Object(u["a"])(y,f,g,false,null,"6d6f16bd",null);var q=_.exports;var S=[{name:"Mark Corvin",title:"CO-OWNER, PRESIDENT",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"David Brown",title:"FLOORING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"Tyler Corvin",title:"ASSISTANT FLOORING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"Paola Ogadzhanova ",title:"MARKETING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"Mark Corvin",title:"CO-OWNER, PRESIDENT",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"David Brown",title:"FLOORING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"Tyler Corvin",title:"ASSISTANT FLOORING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"Paola Ogadzhanova ",title:"MARKETING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"}];var b={components:{ContentQuote:h,CorvinLoading:v["a"],CorvinPageHero:p["a"],CorvinProfile:q},mixins:[o["a"]],data:function e(){return{jsonUrl:"/".concat(this.$api.pages.about),profiles:S}},computed:{hasHeading:function e(){return true}}};var I=b;var O=a("AotP");var M=a("W3D/");var A=Object(u["a"])(I,n,r,false,null,"4619005c",null);var E=t["default"]=A.exports},OGVh:function(e,t,a){},QMIg:function(e,t,a){"use strict";var n=a("gLkz");var r=a.n(n);var o=r.a},"W3D/":function(e,t,a){"use strict";var n=a("l1nw");var r=a.n(n);var o=r.a},do7L:function(e,t,a){"use strict";var n=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"page-hero",class:e.modifiers},[a("div",{staticClass:"page-hero-content is-contained"},[e.hasHeadline?a("h1",{domProps:{innerHTML:e._s(e.hero.headline)}}):e._e(),e._v(" "),e.hasContent?a("div",{staticClass:"page-hero-intro"},[a("p",{domProps:{innerHTML:e._s(e.hero.content)}})]):e._e()]),e._v(" "),e.hasMedia?a("div",{staticClass:"page-hero-media"},[a("img",{attrs:{alt:e.hero.backgroundImage.alt,src:e.hero.backgroundImage.url}})]):e._e()])};var r=[];var o={props:{hero:{type:Object,default:function e(){return{}}}},computed:{modifiers:function e(){return{"has-content":this.hasContent,"has-media":this.hasMedia}},hasContent:function e(){return this.hero&&"content"in this.hero&&this.hero.content.length>0},hasHeadline:function e(){return this.hero&&"headline"in this.hero&&this.hero.headline.length>0},hasMedia:function e(){return this.hero&&"backgroundImage"in this.hero&&"url"in this.hero.backgroundImage&&this.hero.backgroundImage.url.length>0}}};var i=o;var s=a("kWt4");var c=a("KHd+");var l=Object(c["a"])(i,n,r,false,null,"0c8c8f8e",null);var d=t["a"]=l.exports},gLkz:function(e,t,a){},jtwA:function(e,t,a){},kWt4:function(e,t,a){"use strict";var n=a("OGVh");var r=a.n(n);var o=r.a},l1nw:function(e,t,a){},mBth:function(e,t,a){"use strict";var n=a("9wsC");var r=a.n(n);var o=r.a},mcDY:function(e,t,a){"use strict";var n=a("qHpm");var r=a.n(n);var o=r.a},qHpm:function(e,t,a){},vgCd:function(e,t,a){"use strict";var n=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return e._m(0)};var r=[function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"lds-roller"},[a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div")])}];var o={};var i=o;var s=a("QMIg");var c=a("KHd+");var l=Object(c["a"])(i,n,r,false,null,"ce092508",null);var d=t["a"]=l.exports}}]);