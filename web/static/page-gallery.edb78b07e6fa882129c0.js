(window["webpackJsonpcorvin"]=window["webpackJsonpcorvin"]||[]).push([[7],{AIbu:function(t,e,a){"use strict";var n=a("huKL");var r=a.n(n);var i=r.a},CgiD:function(t,e,a){},KwuT:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a.d(e,"b",(function(){return c}));var n=a("4Brf");var r=a.n(n);var i=a("EnZy");var o=a.n(i);const s={props:{forceAjax:{type:Boolean,default(){return false}}},data(){return{data:{},handle:null,loadedViaJson:false,loading:!(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]),slug:null,url:null}},created(){this.loadData()},beforeMount(){if(this.loadedViaJson){this.loading=false}},activated(){this.updateHead();if(this.data&&!this.$prerender){this.$eventBus.$emit("page-loaded",this.data.lastUpdated)}},methods:{afterLoadData(){},loadData(t=null,e=true){if(!this.forceAjax){}const a=window.location.pathname.split("/");a.shift();let n=a[0];let r=a[1];const i=a[2];if(n.length===0){n="home"}if(this.handle){n=this.handle}if(this.slug){r=this.slug}let o=r===undefined?"".concat(n):"".concat(n,"/").concat(r);o=i===undefined?o:"".concat(n,"/").concat(r,"/").concat(i);this.$axios.get(t||this.url||"/v1/".concat(o)).then(t=>{this.data=t.data;if(this.data.status){this.$eventBus.$emit("error",404);this.loading=false;return}this.afterLoadData();if(e){this.updateHead()}this.loading=false;this.$eventBus.$emit("page-loaded",this.data.lastUpdated)}).catch(t=>{if(t.response&&t.response.status===404){this.$eventBus.$emit("error",404);return}this.$eventBus.$emit("error",500,t)})},updateHead(){let t="Corvin's Furniture of Bardstown";let e="";let a="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.data&&this.data.meta&&this.data.meta.title){t="".concat(this.data.meta.title)}if(this.data&&this.data.meta&&this.data.meta.description){e=this.data.meta.description}if(this.data&&this.data.meta&&this.data.meta.socialImage&&this.data.meta.socialImage.url){a=this.data.socialImage.url}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=e;document.head.querySelector('meta[property="og:description"]').content=e;document.head.querySelector('meta[name="twitter:description"]').content=e;document.head.querySelector('meta[itemprop="description"]').content=e;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=a;document.head.querySelector('meta[name="twitter:image:src"]').content=a;document.head.querySelector('meta[itemprop="image"]').content=a;if(this.data&&this.data.canonicalUrl){if(document.head.querySelector("[rel='canonical']")){document.head.querySelector("[rel='canonical']").href=this.data.canonicalUrl}else{const t=document.createElement("link");t.rel="canonical";t.href=this.data.canonicalUrl;document.head.appendChild(t)}}else if(document.head.querySelector("[rel='canonical']")){const t=document.head.querySelector("[rel='canonical']");t.parentNode.removeChild(t)}}}};const c={data(){return{metaTitle:null,metaDescription:null,socialImage:null}},created(){this.updateHead()},mounted(){if(this.$prerender){this.$eventBus.$emit("page-loaded","na")}},activated(){this.updateHead()},methods:{updateHead(){let t="Corvin's Furniture of Bardstown";let e="";let a="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.data&&this.data.meta&&this.data.meta.title){t="".concat(this.data.meta.title)}if(this.data&&this.data.meta&&this.data.meta.description){e=this.data.meta.description}if(this.data&&this.data.meta&&this.data.meta.socialImage&&this.data.meta.socialImage.url){a=this.data.socialImage.url}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=e;document.head.querySelector('meta[property="og:description"]').content=e;document.head.querySelector('meta[name="twitter:description"]').content=e;document.head.querySelector('meta[itemprop="description"]').content=e;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=a;document.head.querySelector('meta[name="twitter:image:src"]').content=a;document.head.querySelector('meta[itemprop="image"]').content=a}}}},TqqQ:function(t,e,a){},bypC:function(t,e,a){"use strict";var n=a("TqqQ");var r=a.n(n);var i=r.a},do7L:function(t,e,a){"use strict";var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"page-hero",class:t.modifiers},[a("div",{staticClass:"page-hero-content is-contained content-wrapper"},[t.hasHeadline?a("h1",{domProps:{innerHTML:t._s(t.hero.headline)}}):t._e(),t._v(" "),t.hasContent?a("div",{staticClass:"page-hero-intro"},[a("div",{domProps:{innerHTML:t._s(t.hero.content)}})]):t._e()]),t._v(" "),t.hasMedia?a("div",{staticClass:"page-hero-media"},[a("base-picture",{attrs:{picture:t.hero.background}})],1):t._e()])};var r=[];var i={props:{hero:{type:Object,default(){return{}}}},computed:{modifiers(){return{"has-content":this.hasContent,"has-media":this.hasMedia}},hasContent(){return this.hero&&"content"in this.hero&&this.hero.content.length>0},hasHeadline(){return this.hero&&"headline"in this.hero&&this.hero.headline.length>0},hasMedia(){return this.hero&&"background"in this.hero&&"url"in this.hero.background&&this.hero.background.url.length>0}}};var o=i;var s=a("f6Vo");var c=a("KHd+");var d=Object(c["a"])(o,n,r,false,null,"ad719bce",null);var l=e["a"]=d.exports},f6Vo:function(t,e,a){"use strict";var n=a("CgiD");var r=a.n(n);var i=r.a},huKL:function(t,e,a){},vgCd:function(t,e,a){"use strict";var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t._m(0)};var r=[function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"overlay"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"loading"},[a("div",{staticClass:"bounceball"}),t._v(" "),a("div",{staticClass:"text"},[t._v("LOADING")])])])])}];var i={};var o=i;var s=a("bypC");var c=a("KHd+");var d=Object(c["a"])(o,n,r,false,null,"e37ae440",null);var l=e["a"]=d.exports},zdxX:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t.loading?a("corvin-loading"):a("main",{staticClass:"page has-inset is-gapless gallery"},[a("corvin-page-hero",{attrs:{hero:t.data.content.hero}}),t._v(" "),t.hasImages?a("div",{staticClass:"image-gallery is-contained"},[a("transition-group",{staticClass:"thumbnails",attrs:{name:"thumbnailfade",tag:"div"}},t._l(t.data.content.gallery.square,(function(e){return a("base-picture",{key:e.url,attrs:{picture:e},nativeOn:{click:function(a){return t.showLightbox(e.url)}}})})),1),t._v(" "),a("lightbox",{ref:"lightbox",attrs:{id:"mylightbox",directory:t.assetDir,images:t.transformedImages,timeoutDuration:5e3}})],1):t._e()],1)};var r=[];var i=a("EnZy");var o=a("KwuT");var s=a("x0D+");var c=a("vgCd");var d=a("do7L");const l=document.body;var u={components:{CorvinLoading:c["a"],CorvinPageHero:d["a"]},filters:{appendDirectory(t,e){return e+t}},mixins:[o["a"]],data(){return{assetDir:"https://corvin.nyc3.digitaloceanspaces.com/gallery/",jsonUrl:"/".concat(this.$api.pages.gallery)}},computed:{hasImages(){return"content"in this.data&&"gallery"in this.data.content&&"square"in this.data.content.gallery&&this.data.content.gallery.square.length>0},transformedImages(){const t=[];this.data.content.gallery.square.forEach(e=>{t.push({name:e.url.split("/").pop()})});return t}},methods:{showLightbox(t){this.$refs.lightbox.show(t)}}};var h=u;var m=a("AIbu");var p=a("KHd+");var v=Object(p["a"])(h,n,r,false,null,"ee59c394",null);var g=e["default"]=v.exports}}]);