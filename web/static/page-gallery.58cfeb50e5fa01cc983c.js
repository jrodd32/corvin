(window["webpackJsonpcorvin"]=window["webpackJsonpcorvin"]||[]).push([[7],{KwuT:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("pNMO");var r=a.n(n);var o=a("4Brf");var i=a.n(o);var s=a("ma9I");var c=a.n(s);var d=a("EnZy");var l=a.n(d);var u={props:{forceAjax:{type:Boolean,default:function e(){return false}}},data:function e(){return{data:{},handle:null,loadedViaJson:false,loading:!(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]),slug:null,url:null}},created:function e(){this.loadData()},beforeMount:function e(){if(this.loadedViaJson){this.loading=false}},activated:function e(){this.updateHead()},methods:{afterLoadData:function e(){},loadData:function e(){var t=this;var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(!this.forceAjax){if(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]){this.data=window.data.page;this.loadedViaJson=true;this.afterLoadData();if(n){this.updateHead()}return}}var r=window.location.pathname.split("/");r.shift();var o=r[0];var i=r[1];if(o.length===0){o="home"}if(this.handle){o=this.handle}if(this.slug){i=this.slug}var s=i===undefined?"".concat(o):"".concat(o,"/").concat(i);this.$axios.get(a||this.url||"/v1/".concat(s)).then((function(e){t.data=e.data;if(t.data.status){t.loading=false;return}t.afterLoadData();if(n){t.updateHead()}t.loading=false;if(t.$prerender){t.$eventBus.$emit("page-loaded",t.data.lastUpdated)}})).catch((function(e){if(e.response){console.log("Data:");console.log(e.response.data);console.log("Status:");console.log(e.response.status);console.log("Headers:");console.log(e.response.headers)}else if(e.request){console.log("Request:");console.log(e.request)}else{console.log("Error",e.message)}console.log("Config:");console.log(e.config);if(e.response&&e.response.status===404){t.$eventBus.$emit("error",404);return}t.$eventBus.$emit("error",500,e)}))},updateHead:function e(){var t="Corvin's Furniture of Bardstown";var a="";var n="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.data&&this.data.meta&&this.data.meta.title){t="".concat(this.data.meta.title)}if(this.data&&this.data.meta&&this.data.meta.description){a=this.data.metaDescription}if(this.data&&this.data.meta&&this.data.meta.socialImage&&this.data.meta.socialImage.url){n=this.data.socialImage.url}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=a;document.head.querySelector('meta[property="og:description"]').content=a;document.head.querySelector('meta[name="twitter:description"]').content=a;document.head.querySelector('meta[itemprop="description"]').content=a;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=n;document.head.querySelector('meta[name="twitter:image:src"]').content=n;document.head.querySelector('meta[itemprop="image"]').content=n;if(this.data&&this.data.canonicalUrl){if(document.head.querySelector("[rel='canonical']")){document.head.querySelector("[rel='canonical']").href=this.data.canonicalUrl}else{var r=document.createElement("link");r.rel="canonical";r.href=this.data.canonicalUrl;document.head.appendChild(r)}}else if(document.head.querySelector("[rel='canonical']")){var o=document.head.querySelector("[rel='canonical']");o.parentNode.removeChild(o)}if(this.data){this.$eventBus.$emit("set-breadcrumb",this.data.title)}}}};var h={data:function e(){return{metaTitle:null,metaDescription:null,socialImage:null}},created:function e(){this.updateHead()},mounted:function e(){if(this.$prerender){this.$eventBus.$emit("page-loaded","na")}},activated:function e(){this.updateHead()},methods:{updateHead:function e(){var t="Corvin Furniture of Bardstown";var a="";var n="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.metaTitle){t="".concat(this.metaTitle)}if(this.metaDescription){a=this.metaDescription}if(this.socialImage){n=this.data.socialImage}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=a;document.head.querySelector('meta[property="og:description"]').content=a;document.head.querySelector('meta[name="twitter:description"]').content=a;document.head.querySelector('meta[itemprop="description"]').content=a;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=n;document.head.querySelector('meta[name="twitter:image:src"]').content=n;document.head.querySelector('meta[itemprop="image"]').content=n}}}},QMIg:function(e,t,a){"use strict";var n=a("gLkz");var r=a.n(n);var o=r.a},SuLF:function(e,t,a){"use strict";var n=a("sIHD");var r=a.n(n);var o=r.a},do7L:function(e,t,a){"use strict";var n=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"page-hero",class:e.modifiers},[a("div",{staticClass:"page-hero-content is-contained"},[e.hasHeadline?a("h1",{domProps:{innerHTML:e._s(e.hero.headline)}}):e._e(),e._v(" "),e.hasContent?a("div",{staticClass:"page-hero-intro"},[a("div",{domProps:{innerHTML:e._s(e.hero.content)}})]):e._e()]),e._v(" "),e.hasMedia?a("div",{staticClass:"page-hero-media"},[a("img",{attrs:{alt:e.hero.backgroundImage.alt,src:e.hero.backgroundImage.url}})]):e._e()])};var r=[];var o={props:{hero:{type:Object,default:function e(){return{}}}},computed:{modifiers:function e(){return{"has-content":this.hasContent,"has-media":this.hasMedia}},hasContent:function e(){return this.hero&&"content"in this.hero&&this.hero.content.length>0},hasHeadline:function e(){return this.hero&&"headline"in this.hero&&this.hero.headline.length>0},hasMedia:function e(){return this.hero&&"backgroundImage"in this.hero&&"url"in this.hero.backgroundImage&&this.hero.backgroundImage.url.length>0}}};var i=o;var s=a("SuLF");var c=a("KHd+");var d=Object(c["a"])(i,n,r,false,null,"0c106f50",null);var l=t["a"]=d.exports},gLkz:function(e,t,a){},oEyL:function(e,t,a){},sIHD:function(e,t,a){},vgCd:function(e,t,a){"use strict";var n=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return e._m(0)};var r=[function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"lds-roller"},[a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div")])}];var o={};var i=o;var s=a("QMIg");var c=a("KHd+");var d=Object(c["a"])(i,n,r,false,null,"ce092508",null);var l=t["a"]=d.exports},"vo/i":function(e,t,a){"use strict";var n=a("oEyL");var r=a.n(n);var o=r.a},zdxX:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return e.loading?a("corvin-loading"):a("main",{staticClass:"page has-inset is-gapless gallery"},[a("corvin-page-hero",{attrs:{hero:e.data.content.hero}}),e._v(" "),e.hasImages?a("div",{staticClass:"image-gallery is-contained"},[a("transition-group",{staticClass:"thumbnails",attrs:{name:"thumbnailfade",tag:"div"}},e._l(e.data.content.gallery.galleryImages,(function(t,n){return a("figure",{key:n},[a("img",{attrs:{src:t.url,alt:t.alt,title:t.alt},on:{click:function(a){return e.showLightbox(t.url)}}})])})),0),e._v(" "),a("lightbox",{ref:"lightbox",attrs:{id:"mylightbox",directory:e.assetDir,images:e.transformedImages,timeoutDuration:5e3}})],1):e._e()],1)};var r=[];var o=a("EnZy");var i=a("FZtP");var s=a("KwuT");var c=a("vgCd");var d=a("do7L");var l={components:{CorvinLoading:c["a"],CorvinPageHero:d["a"]},filters:{appendDirectory:function e(t,a){return a+t}},mixins:[s["a"]],data:function e(){return{assetDir:"https://corvin.nyc3.digitaloceanspaces.com/gallery/",jsonUrl:"/".concat(this.$api.pages.gallery)}},computed:{hasImages:function e(){return"content"in this.data&&"gallery"in this.data.content&&"galleryImages"in this.data.content.gallery&&this.data.content.gallery.galleryImages.length>0},transformedImages:function e(){var t=[];this.data.content.gallery.galleryImages.forEach((function(e){t.push({name:e.url.split("/").pop()})}));return t}},activated:function e(){this.$emit("page-activated");this.$eventBus.$emit("page-loaded")},methods:{showLightbox:function e(t){this.$refs.lightbox.show(t)}}};var u=l;var h=a("vo/i");var m=a("KHd+");var g=Object(m["a"])(u,n,r,false,null,"58125e12",null);var v=t["default"]=g.exports}}]);