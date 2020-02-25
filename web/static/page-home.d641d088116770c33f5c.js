(window["webpackJsonpcorvin"]=window["webpackJsonpcorvin"]||[]).push([[8],{"0Agv":function(t,e,a){},KwuT:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));a.d(e,"b",(function(){return c}));var n=a("4Brf");var i=a.n(n);var r=a("EnZy");var o=a.n(r);const d={props:{forceAjax:{type:Boolean,default(){return false}}},data(){return{data:{},handle:null,loadedViaJson:false,loading:!(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]),slug:null,url:null}},created(){this.loadData()},beforeMount(){if(this.loadedViaJson){this.loading=false}},activated(){this.updateHead();if(this.data&&!this.$prerender){this.$eventBus.$emit("page-loaded",this.data.lastUpdated)}},methods:{afterLoadData(){},loadData(t=null,e=true){if(!this.forceAjax){}const a=window.location.pathname.split("/");a.shift();let n=a[0];let i=a[1];const r=a[2];if(n.length===0){n="home"}if(this.handle){n=this.handle}if(this.slug){i=this.slug}let o=i===undefined?"".concat(n):"".concat(n,"/").concat(i);o=r===undefined?o:"".concat(n,"/").concat(i,"/").concat(r);this.$axios.get(t||this.url||"/v1/".concat(o)).then(t=>{this.data=t.data;if(this.data.status){this.$eventBus.$emit("error",404);this.loading=false;return}this.afterLoadData();if(e){this.updateHead()}this.loading=false;this.$eventBus.$emit("page-loaded",this.data.lastUpdated)}).catch(t=>{if(t.response&&t.response.status===404){this.$eventBus.$emit("error",404);return}this.$eventBus.$emit("error",500,t)})},updateHead(){let t="Corvin's Furniture of Bardstown";let e="";let a="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.data&&this.data.meta&&this.data.meta.title){t="".concat(this.data.meta.title)}if(this.data&&this.data.meta&&this.data.meta.description){e=this.data.meta.description}if(this.data&&this.data.meta&&this.data.meta.socialImage&&this.data.meta.socialImage.url){a=this.data.socialImage.url}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=e;document.head.querySelector('meta[property="og:description"]').content=e;document.head.querySelector('meta[name="twitter:description"]').content=e;document.head.querySelector('meta[itemprop="description"]').content=e;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=a;document.head.querySelector('meta[name="twitter:image:src"]').content=a;document.head.querySelector('meta[itemprop="image"]').content=a;if(this.data&&this.data.canonicalUrl){if(document.head.querySelector("[rel='canonical']")){document.head.querySelector("[rel='canonical']").href=this.data.canonicalUrl}else{const t=document.createElement("link");t.rel="canonical";t.href=this.data.canonicalUrl;document.head.appendChild(t)}}else if(document.head.querySelector("[rel='canonical']")){const t=document.head.querySelector("[rel='canonical']");t.parentNode.removeChild(t)}}}};const c={data(){return{metaTitle:null,metaDescription:null,socialImage:null}},created(){this.updateHead()},mounted(){if(this.$prerender){this.$eventBus.$emit("page-loaded","na")}},activated(){this.updateHead()},methods:{updateHead(){let t="Corvin's Furniture of Bardstown";let e="";let a="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.data&&this.data.meta&&this.data.meta.title){t="".concat(this.data.meta.title)}if(this.data&&this.data.meta&&this.data.meta.description){e=this.data.meta.description}if(this.data&&this.data.meta&&this.data.meta.socialImage&&this.data.meta.socialImage.url){a=this.data.socialImage.url}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=e;document.head.querySelector('meta[property="og:description"]').content=e;document.head.querySelector('meta[name="twitter:description"]').content=e;document.head.querySelector('meta[itemprop="description"]').content=e;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=a;document.head.querySelector('meta[name="twitter:image:src"]').content=a;document.head.querySelector('meta[itemprop="image"]').content=a}}}},TqqQ:function(t,e,a){},ZTH9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t.loading?a("corvin-loading"):a("main",{staticClass:"page is-gapless no-bottom-padding home"},[a("div",{staticClass:"departments"},[a("div",{staticClass:"furniture"},[a("figure",[a("a",{staticClass:"overlay-link",attrs:{href:"https://www.corvinsofbardstown.com/",rel:"noopener",target:"_BLANK"}},[a("span",{staticClass:"hidden-text"},[t._v("Corvin's of Bardstown")])]),t._v(" "),a("img",{attrs:{src:t.furnitureImage,alt:"Furniture landing page background image"}}),t._v(" "),a("figcaption",[a("h2",[t._v("Furniture")])])])]),t._v(" "),a("div",{staticClass:"flooring"},[a("figure",[a("router-link",{staticClass:"overlay-link",attrs:{to:"/home"}},[a("span",{staticClass:"hidden-text"},[t._v("Flooring")])]),t._v(" "),a("img",{attrs:{src:t.flooringImage,alt:"Flooring landing page background image"}}),t._v(" "),a("figcaption",[a("h2",[t._v("Flooring")])])],1)])])])};var i=[];var r=a("vgCd");var o=a("KwuT");var d={components:{CorvinLoading:r["a"]},mixins:[o["b"]],data(){return{loading:true}},computed:{imagePath(){if(this.$prerender){return"/static/images"}return"../../images"},flooringImage(){return"".concat(this.imagePath,"/flooring-landing-img.jpg")},furnitureImage(){return"".concat(this.imagePath,"/furniture-landing.jpg")}},mounted(){this.loading=false}};var c=d;var s=a("jbUg");var l=a("KHd+");var u=Object(l["a"])(c,n,i,false,null,"aeee5232",null);var m=e["default"]=u.exports},bypC:function(t,e,a){"use strict";var n=a("TqqQ");var i=a.n(n);var r=i.a},jbUg:function(t,e,a){"use strict";var n=a("0Agv");var i=a.n(n);var r=i.a},vgCd:function(t,e,a){"use strict";var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t._m(0)};var i=[function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"overlay"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"loading"},[a("div",{staticClass:"bounceball"}),t._v(" "),a("div",{staticClass:"text"},[t._v("LOADING")])])])])}];var r={};var o=r;var d=a("bypC");var c=a("KHd+");var s=Object(c["a"])(o,n,i,false,null,"e37ae440",null);var l=e["a"]=s.exports}}]);