(window["webpackJsonpcorvin"]=window["webpackJsonpcorvin"]||[]).push([[7],{"32i4":function(e,t,a){},Alfw:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return e.loading?a("corvin-loading"):a("main",{staticClass:"page flooring-home is-gapless no-bottom-padding is-inset"},[e.hasHero?a("fixed-hero",{attrs:{hero:e.data.content.hero},on:{"set-hero-offset":e.handleSetHeroOffset}}):e._e(),e._v(" "),a("div",{staticClass:"after-hero",style:e.heroOffset},[e.hasCategories?a("div",{staticClass:"shop-by-category"},[a("h2",{staticClass:"section-heading",domProps:{innerHTML:e._s(e.data.content.categories.headline)}}),e._v(" "),a("div",{staticClass:"category-wrapper"},e._l(e.data.content.categories.grid.items,(function(t){return a("div",{staticClass:"category"},[a("h3",[e._v(e._s(t.title))]),e._v(" "),a("figure",[a("img",{attrs:{alt:t.homeImage.alt,src:t.homeImage.url}})]),e._v(" "),a("doe-link",{attrs:{href:e._f("categoryUrl")(t.slug),text:"Shop Now","is-blue":""}})],1)})),0)]):e._e(),e._v(" "),e.hasQuote?a("div",{staticClass:"customer-quote",style:e.quoteBackground},[a("blockquote",[a("div",{domProps:{innerHTML:e._s(e.activeQuote.quote)}}),e._v(" "),a("span",{staticClass:"line"}),e._v(" "),a("cite",[e._v(e._s(e.activeQuote.cite)+" "),a("span",{domProps:{innerHTML:e._s(e.activeQuote.location)}})])])]):e._e(),e._v(" "),e.hasSocial?a("div",{staticClass:"social"},[a("div",{staticClass:"content"},[a("h4",{staticClass:"section-heading",domProps:{innerHTML:e._s(e.data.content.social.headline)}}),e._v(" "),a("div",{domProps:{innerHTML:e._s(e.data.content.social.description)}})]),e._v(" "),e.hasSocialMedia?a("div",{staticClass:"media"},e._l(e.data.content.social.media,(function(e){return a("figure",[a("img",{attrs:{alt:e.alt,src:e.url}})])})),0):e._e()]):e._e()])],1)};var o=[];var r=a("KwuT");var i=a("vgCd");var s=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"fixed-hero",style:e.background},[a("figure",{ref:"hero"},[a("img",{attrs:{alt:e.hero.featuredImage.alt,src:e.hero.featuredImage.url}}),e._v(" "),a("figcaption",[a("h1",{domProps:{innerHTML:e._s(e.hero.headline)}}),e._v(" "),a("div",{staticClass:"hero-content",domProps:{innerHTML:e._s(e.hero.content)}}),e._v(" "),a("doe-link",{attrs:{href:e.hero.button.href,text:e.hero.button.text,"is-orange":""}})],1)])])};var c=[];var d={props:{hero:{type:Object,default(){return{}}}},computed:{hasBackgroundImage(){return"backgroundImage"in this.hero},hasFeaturedImage(){return"featuredImage"in this.hero},background(){return this.hasBackgroundImage?"background-image: url('".concat(this.hero.backgroundImage.url,"')"):""}},mounted(){this.$nextTick(()=>{window.addEventListener("resize",this.getHeroHeight);this.getHeroHeight()})},destroyed(){window.removeEventListener("resize",this.getHeroHeight)},methods:{getHeroHeight(){const e=document.getElementsByClassName("header")[0].offsetHeight;const t=window.innerHeight-e;return this.$emit("set-hero-offset",t)}}};var l=d;var h=a("TQ4s");var u=a("KHd+");var m=Object(u["a"])(l,s,c,false,null,"c5cfa77e",null);var v=m.exports;var g={components:{CorvinLoading:i["a"],FixedHero:v},filters:{categoryUrl(e){return"/shop/".concat(e)}},mixins:[r["a"]],data(){return{heroHeight:0,jsonUrl:"/".concat(this.$api.pages.home)}},computed:{activeQuote(){return this.hasQuote?this.data.content.blockquote.testimonial[0]:""},hasCategories(){return this.hasContent&&"categories"in this.data.content},hasContent(){return"content"in this.data},hasHero(){return this.hasContent&&"hero"in this.data.content},hasQuote(){return this.hasContent&&"blockquote"in this.data.content},hasSocial(){return this.hasContent&&"social"in this.data.content},hasSocialMedia(){return this.hasSocial&&"media"in this.data.content.social},heroOffset(){return"margin-top: ".concat(this.heroHeight,"px")},quoteBackground(){return"background-image:url(".concat(this.data.content.blockquote.backgroundImage.url,")")}},methods:{handleSetHeroOffset(e){console.log(e);this.heroHeight=e+50}}};var f=g;var p=a("wisL");var w=Object(u["a"])(f,n,o,false,null,"4fe9b27e",null);var _=t["default"]=w.exports},HFgW:function(e,t,a){"use strict";var n=a("ho7u");var o=a.n(n);var r=o.a},KwuT:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a.d(t,"b",(function(){return c}));var n=a("4Brf");var o=a.n(n);var r=a("EnZy");var i=a.n(r);const s={props:{forceAjax:{type:Boolean,default(){return false}}},data(){return{data:{},handle:null,loadedViaJson:false,loading:!(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]),slug:null,url:null}},created(){this.loadData()},beforeMount(){if(this.loadedViaJson){this.loading=false}},activated(){this.updateHead()},methods:{afterLoadData(){},loadData(e=null,t=true){if(!this.forceAjax){if(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]){this.data=window.data.page;this.loadedViaJson=true;this.afterLoadData();if(t){this.updateHead()}return}}const a=window.location.pathname.split("/");a.shift();let n=a[0];let o=a[1];let r=a[2];if(n.length===0){n="home"}if(this.handle){n=this.handle}if(this.slug){o=this.slug}let i=o===undefined?"".concat(n):"".concat(n,"/").concat(o);i=r===undefined?i:"".concat(n,"/").concat(o,"/").concat(r);this.$axios.get(e||this.url||"/v1/".concat(i)).then(e=>{this.data=e.data;if(this.data.status){this.loading=false;return}this.afterLoadData();if(t){this.updateHead()}this.loading=false;if(this.$prerender){this.$eventBus.$emit("page-loaded",this.data.lastUpdated)}}).catch(e=>{if(e.response){console.log("Data:");console.log(e.response.data);console.log("Status:");console.log(e.response.status);console.log("Headers:");console.log(e.response.headers)}else if(e.request){console.log("Request:");console.log(e.request)}else{console.log("Error",e.message)}console.log("Config:");console.log(e.config);if(e.response&&e.response.status===404){this.$eventBus.$emit("error",404);return}this.$eventBus.$emit("error",500,e)})},updateHead(){let e="Corvin's Furniture of Bardstown";let t="";let a="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.data&&this.data.meta&&this.data.meta.title){e="".concat(this.data.meta.title)}if(this.data&&this.data.meta&&this.data.meta.description){t=this.data.metaDescription}if(this.data&&this.data.meta&&this.data.meta.socialImage&&this.data.meta.socialImage.url){a=this.data.socialImage.url}document.title=e;document.head.querySelector('meta[property="og:title"]').content=e;document.head.querySelector('meta[name="twitter:title"]').content=e;document.head.querySelector('meta[itemprop="name"]').content=e;document.head.querySelector('meta[name="description"]').content=t;document.head.querySelector('meta[property="og:description"]').content=t;document.head.querySelector('meta[name="twitter:description"]').content=t;document.head.querySelector('meta[itemprop="description"]').content=t;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=a;document.head.querySelector('meta[name="twitter:image:src"]').content=a;document.head.querySelector('meta[itemprop="image"]').content=a;if(this.data&&this.data.canonicalUrl){if(document.head.querySelector("[rel='canonical']")){document.head.querySelector("[rel='canonical']").href=this.data.canonicalUrl}else{const e=document.createElement("link");e.rel="canonical";e.href=this.data.canonicalUrl;document.head.appendChild(e)}}else if(document.head.querySelector("[rel='canonical']")){const e=document.head.querySelector("[rel='canonical']");e.parentNode.removeChild(e)}if(this.data){this.$eventBus.$emit("set-breadcrumb",this.data.title)}}}};const c={data(){return{metaTitle:null,metaDescription:null,socialImage:null}},created(){this.updateHead()},mounted(){if(this.$prerender){this.$eventBus.$emit("page-loaded","na")}},activated(){this.updateHead()},methods:{updateHead(){let e="Corvin Furniture of Bardstown";let t="";let a="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.metaTitle){e="".concat(this.metaTitle)}if(this.metaDescription){t=this.metaDescription}if(this.socialImage){a=this.data.socialImage}document.title=e;document.head.querySelector('meta[property="og:title"]').content=e;document.head.querySelector('meta[name="twitter:title"]').content=e;document.head.querySelector('meta[itemprop="name"]').content=e;document.head.querySelector('meta[name="description"]').content=t;document.head.querySelector('meta[property="og:description"]').content=t;document.head.querySelector('meta[name="twitter:description"]').content=t;document.head.querySelector('meta[itemprop="description"]').content=t;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=a;document.head.querySelector('meta[name="twitter:image:src"]').content=a;document.head.querySelector('meta[itemprop="image"]').content=a}}}},"NKq/":function(e,t,a){"use strict";var n=a("32i4");var o=a.n(n);var r=o.a},ONGt:function(e,t,a){"use strict";var n=a("RTsl");var o=a.n(n);var r=o.a},RTsl:function(e,t,a){},Sxbn:function(e,t,a){},TQ4s:function(e,t,a){"use strict";var n=a("tziG");var o=a.n(n);var r=o.a},TqqQ:function(e,t,a){},bypC:function(e,t,a){"use strict";var n=a("TqqQ");var o=a.n(n);var r=o.a},do7L:function(e,t,a){"use strict";var n=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"page-hero",class:e.modifiers},[a("div",{staticClass:"page-hero-content is-contained content-wrapper"},[e.hasHeadline?a("h1",{domProps:{innerHTML:e._s(e.hero.headline)}}):e._e(),e._v(" "),e.hasContent?a("div",{staticClass:"page-hero-intro"},[a("div",{domProps:{innerHTML:e._s(e.hero.content)}})]):e._e()]),e._v(" "),e.hasMedia?a("div",{staticClass:"page-hero-media"},[a("img",{attrs:{alt:e.hero.backgroundImage.alt,src:e.hero.backgroundImage.url}})]):e._e()])};var o=[];var r={props:{hero:{type:Object,default(){return{}}}},computed:{modifiers(){return{"has-content":this.hasContent,"has-media":this.hasMedia}},hasContent(){return this.hero&&"content"in this.hero&&this.hero.content.length>0},hasHeadline(){return this.hero&&"headline"in this.hero&&this.hero.headline.length>0},hasMedia(){return this.hero&&"backgroundImage"in this.hero&&"url"in this.hero.backgroundImage&&this.hero.backgroundImage.url.length>0}}};var i=r;var s=a("ONGt");var c=a("KHd+");var d=Object(c["a"])(i,n,o,false,null,"165cddb6",null);var l=t["a"]=d.exports},ho7u:function(e,t,a){},tziG:function(e,t,a){},vgCd:function(e,t,a){"use strict";var n=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return e._m(0)};var o=[function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"overlay"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"loading"},[a("div",{staticClass:"bounceball"}),e._v(" "),a("div",{staticClass:"text"},[e._v("LOADING")])])])])}];var r={};var i=r;var s=a("bypC");var c=a("KHd+");var d=Object(c["a"])(i,n,o,false,null,"e37ae440",null);var l=t["a"]=d.exports},w466:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return e.loading?a("corvin-loading"):a("main",{staticClass:"page has-inset is-gapless has-cta maintenance"},[a("corvin-page-hero",{attrs:{hero:e.data.content.hero}}),e._v(" "),a("corvin-accordion",{staticClass:"is-contained content-wrapper"},e._l(e.data.faqEntries,(function(e,t){return a("corvin-accordion-row",{key:t,attrs:{heading:e.faqSectionHeading,intro:e.faqSectionIntro,content:e.faqSectionContent}})})),1),e._v(" "),a("div",{staticClass:"cta maintenance-cta"},[a("h3",[e._v("Still have questions? Contact us and one of our staff will help.")])])],1)};var o=[];var r=a("KwuT");var i=a("vgCd");var s=a("do7L");var c=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"accordion"},[e._t("default")],2)};var d=[];var l={created(){this.$on("rowOpened",e=>{this.$children.forEach(t=>t.hide(e));this.$parent.$emit("rowOpened")})}};var h=l;var u=a("KHd+");var m=Object(u["a"])(h,c,d,false,null,null,null);var v=m.exports;var g=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{class:[e.accordionRowModifiers]},[a("div",{staticClass:"accordion-row-title",on:{click:e.handleClick}},[a("h2",[e._v(e._s(e.heading))]),e._v(" "),a("p",[e._v(e._s(e.intro))])]),e._v(" "),a("div",{ref:"content",staticClass:"accordion-row-content"},[e._t("default",[a("div",{domProps:{innerHTML:e._s(e.content)}})]),e._v(" "),a("div",{staticClass:"accordion-row-footer"},[a("doe-link",{staticClass:"accordion-row-close",attrs:{"is-button":""},nativeOn:{click:function(t){t.preventDefault();return e.hide(t)}}})],1)],2)])};var f=[];var p={props:{heading:{type:String,required:true},content:{type:String,default(){return""}},intro:{type:String,default(){return""}}},data(){return{opened:false}},computed:{accordionRowModifiers(){return{"accordion-row":true,"is-active":this.opened}}},methods:{handleClick(){return this.opened?this.hide():this.show()},hide(e=null){if(!e||e!==this._uid){const{content:e}=this.$refs;e.style.maxHeight="0px";this.opened=false;setTimeout(()=>{e.removeAttribute("style");e.classList.remove("is-visible")},501)}},show(){if(this.opened){this.hide();return}this.$parent.$emit("rowOpened",this._uid);this.opened=true;const{content:e}=this.$refs;e.classList.add("is-invisible");const t=e.offsetHeight;e.classList.remove("is-invisible");e.classList.add("is-visible");setTimeout(()=>{e.style.maxHeight="".concat(t,"px")},10)}}};var w=p;var _=a("NKq/");var y=Object(u["a"])(w,g,f,false,null,"9dcef302",null);var C=y.exports;var q={components:{CorvinAccordion:v,CorvinAccordionRow:C,CorvinLoading:i["a"],CorvinPageHero:s["a"]},mixins:[r["a"]]};var b=q;var H=a("HFgW");var S=Object(u["a"])(b,n,o,false,null,"14187734",null);var $=t["default"]=S.exports},wisL:function(e,t,a){"use strict";var n=a("Sxbn");var o=a.n(n);var r=o.a}}]);