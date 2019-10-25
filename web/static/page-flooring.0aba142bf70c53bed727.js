(window["webpackJsonpcorvin"]=window["webpackJsonpcorvin"]||[]).push([[7],{"32i4":function(t,e,a){},Alfw:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t.loading?a("corvin-loading"):a("main",{staticClass:"page flooring-home is-gapless no-bottom-padding is-inset"},[t.hasHero?a("fixed-hero",{attrs:{hero:t.data.content.hero},on:{"set-hero-offset":t.handleSetHeroOffset}}):t._e(),t._v(" "),a("div",{staticClass:"after-hero",style:t.heroOffset},[t.hasCategories?a("div",{staticClass:"shop-by-category"},[a("h2",{staticClass:"section-heading",domProps:{innerHTML:t._s(t.data.content.categories.headline)}}),t._v(" "),a("div",{staticClass:"category-wrapper"},t._l(t.data.content.categories.grid.items,(function(e){return a("div",{staticClass:"category"},[a("h3",[t._v(t._s(e.title))]),t._v(" "),a("figure",[a("img",{attrs:{alt:e.homeImage.alt,src:e.homeImage.url}})]),t._v(" "),a("doe-link",{attrs:{href:t._f("categoryUrl")(e.slug),text:"Shop Now","is-blue":""}})],1)})),0)]):t._e(),t._v(" "),t.hasQuote?a("div",{staticClass:"customer-quote",style:t.quoteBackground},[a("blockquote",[a("div",{domProps:{innerHTML:t._s(t.activeQuote.quote)}}),t._v(" "),a("span",{staticClass:"line"}),t._v(" "),a("cite",[t._v(t._s(t.activeQuote.cite)+" "),a("span",{domProps:{innerHTML:t._s(t.activeQuote.location)}})])])]):t._e(),t._v(" "),t.hasSocial?a("div",{staticClass:"social"},[a("div",{staticClass:"content"},[a("h4",{staticClass:"section-heading",domProps:{innerHTML:t._s(t.data.content.social.headline)}}),t._v(" "),a("div",{domProps:{innerHTML:t._s(t.data.content.social.description)}})]),t._v(" "),t.hasSocialMedia?a("div",{staticClass:"media"},t._l(t.data.content.social.media,(function(t){return a("figure",[a("img",{attrs:{alt:t.alt,src:t.url}})])})),0):t._e()]):t._e()])],1)};var o=[];var r=a("KwuT");var i=a("vgCd");var s=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"fixed-hero",style:t.background},[a("figure",{ref:"hero"},[a("img",{attrs:{alt:t.hero.featuredImage.alt,src:t.hero.featuredImage.url}}),t._v(" "),a("figcaption",[a("h1",{domProps:{innerHTML:t._s(t.hero.headline)}}),t._v(" "),a("div",{staticClass:"hero-content",domProps:{innerHTML:t._s(t.hero.content)}}),t._v(" "),a("doe-link",{attrs:{href:t.hero.button.href,text:t.hero.button.text,"is-orange":""}})],1)])])};var c=[];var d={props:{hero:{type:Object,default:function t(){return{}}}},computed:{hasBackgroundImage:function t(){return"backgroundImage"in this.hero},hasFeaturedImage:function t(){return"featuredImage"in this.hero},background:function t(){return this.hasBackgroundImage?"background-image: url('".concat(this.hero.backgroundImage.url,"')"):""}},mounted:function t(){var e=this;this.$nextTick((function(){window.addEventListener("resize",e.getHeroHeight);e.getHeroHeight()}))},destroyed:function t(){window.removeEventListener("resize",this.getHeroHeight)},methods:{getHeroHeight:function t(){var e=document.getElementsByClassName("header")[0].offsetHeight;var a=window.innerHeight-e;return this.$emit("set-hero-offset",a)}}};var l=d;var u=a("TQ4s");var h=a("KHd+");var v=Object(h["a"])(l,s,c,false,null,"c5cfa77e",null);var f=v.exports;var m={components:{CorvinLoading:i["a"],FixedHero:f},filters:{categoryUrl:function t(e){return"/shop/".concat(e)}},mixins:[r["a"]],data:function t(){return{heroHeight:0,jsonUrl:"/".concat(this.$api.pages.home)}},computed:{activeQuote:function t(){return this.hasQuote?this.data.content.blockquote.testimonial[0]:""},hasCategories:function t(){return this.hasContent&&"categories"in this.data.content},hasContent:function t(){return"content"in this.data},hasHero:function t(){return this.hasContent&&"hero"in this.data.content},hasQuote:function t(){return this.hasContent&&"blockquote"in this.data.content},hasSocial:function t(){return this.hasContent&&"social"in this.data.content},hasSocialMedia:function t(){return this.hasSocial&&"media"in this.data.content.social},heroOffset:function t(){return"margin-top: ".concat(this.heroHeight,"px")},quoteBackground:function t(){return"background-image:url(".concat(this.data.content.blockquote.backgroundImage.url,")")}},methods:{handleSetHeroOffset:function t(e){console.log(e);this.heroHeight=e+50}}};var g=m;var p=a("wisL");var w=Object(h["a"])(g,n,o,false,null,"4fe9b27e",null);var _=e["default"]=w.exports},HFgW:function(t,e,a){"use strict";var n=a("ho7u");var o=a.n(n);var r=o.a},KwuT:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));a.d(e,"b",(function(){return h}));var n=a("pNMO");var o=a.n(n);var r=a("4Brf");var i=a.n(r);var s=a("ma9I");var c=a.n(s);var d=a("EnZy");var l=a.n(d);var u={props:{forceAjax:{type:Boolean,default:function t(){return false}}},data:function t(){return{data:{},handle:null,loadedViaJson:false,loading:!(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]),slug:null,url:null}},created:function t(){this.loadData()},beforeMount:function t(){if(this.loadedViaJson){this.loading=false}},activated:function t(){this.updateHead()},methods:{afterLoadData:function t(){},loadData:function t(){var e=this;var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(!this.forceAjax){if(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]){this.data=window.data.page;this.loadedViaJson=true;this.afterLoadData();if(n){this.updateHead()}return}}var o=window.location.pathname.split("/");o.shift();var r=o[0];var i=o[1];var s=o[2];if(r.length===0){r="home"}if(this.handle){r=this.handle}if(this.slug){i=this.slug}var c=i===undefined?"".concat(r):"".concat(r,"/").concat(i);c=s===undefined?c:"".concat(r,"/").concat(i,"/").concat(s);this.$axios.get(a||this.url||"/v1/".concat(c)).then((function(t){e.data=t.data;if(e.data.status){e.loading=false;return}e.afterLoadData();if(n){e.updateHead()}e.loading=false;if(e.$prerender){e.$eventBus.$emit("page-loaded",e.data.lastUpdated)}})).catch((function(t){if(t.response){console.log("Data:");console.log(t.response.data);console.log("Status:");console.log(t.response.status);console.log("Headers:");console.log(t.response.headers)}else if(t.request){console.log("Request:");console.log(t.request)}else{console.log("Error",t.message)}console.log("Config:");console.log(t.config);if(t.response&&t.response.status===404){e.$eventBus.$emit("error",404);return}e.$eventBus.$emit("error",500,t)}))},updateHead:function t(){var e="Corvin's Furniture of Bardstown";var a="";var n="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.data&&this.data.meta&&this.data.meta.title){e="".concat(this.data.meta.title)}if(this.data&&this.data.meta&&this.data.meta.description){a=this.data.metaDescription}if(this.data&&this.data.meta&&this.data.meta.socialImage&&this.data.meta.socialImage.url){n=this.data.socialImage.url}document.title=e;document.head.querySelector('meta[property="og:title"]').content=e;document.head.querySelector('meta[name="twitter:title"]').content=e;document.head.querySelector('meta[itemprop="name"]').content=e;document.head.querySelector('meta[name="description"]').content=a;document.head.querySelector('meta[property="og:description"]').content=a;document.head.querySelector('meta[name="twitter:description"]').content=a;document.head.querySelector('meta[itemprop="description"]').content=a;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=n;document.head.querySelector('meta[name="twitter:image:src"]').content=n;document.head.querySelector('meta[itemprop="image"]').content=n;if(this.data&&this.data.canonicalUrl){if(document.head.querySelector("[rel='canonical']")){document.head.querySelector("[rel='canonical']").href=this.data.canonicalUrl}else{var o=document.createElement("link");o.rel="canonical";o.href=this.data.canonicalUrl;document.head.appendChild(o)}}else if(document.head.querySelector("[rel='canonical']")){var r=document.head.querySelector("[rel='canonical']");r.parentNode.removeChild(r)}if(this.data){this.$eventBus.$emit("set-breadcrumb",this.data.title)}}}};var h={data:function t(){return{metaTitle:null,metaDescription:null,socialImage:null}},created:function t(){this.updateHead()},mounted:function t(){if(this.$prerender){this.$eventBus.$emit("page-loaded","na")}},activated:function t(){this.updateHead()},methods:{updateHead:function t(){var e="Corvin Furniture of Bardstown";var a="";var n="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.metaTitle){e="".concat(this.metaTitle)}if(this.metaDescription){a=this.metaDescription}if(this.socialImage){n=this.data.socialImage}document.title=e;document.head.querySelector('meta[property="og:title"]').content=e;document.head.querySelector('meta[name="twitter:title"]').content=e;document.head.querySelector('meta[itemprop="name"]').content=e;document.head.querySelector('meta[name="description"]').content=a;document.head.querySelector('meta[property="og:description"]').content=a;document.head.querySelector('meta[name="twitter:description"]').content=a;document.head.querySelector('meta[itemprop="description"]').content=a;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=n;document.head.querySelector('meta[name="twitter:image:src"]').content=n;document.head.querySelector('meta[itemprop="image"]').content=n}}}},"NKq/":function(t,e,a){"use strict";var n=a("32i4");var o=a.n(n);var r=o.a},ONGt:function(t,e,a){"use strict";var n=a("RTsl");var o=a.n(n);var r=o.a},RTsl:function(t,e,a){},Sxbn:function(t,e,a){},TQ4s:function(t,e,a){"use strict";var n=a("tziG");var o=a.n(n);var r=o.a},TqqQ:function(t,e,a){},bypC:function(t,e,a){"use strict";var n=a("TqqQ");var o=a.n(n);var r=o.a},do7L:function(t,e,a){"use strict";var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"page-hero",class:t.modifiers},[a("div",{staticClass:"page-hero-content is-contained content-wrapper"},[t.hasHeadline?a("h1",{domProps:{innerHTML:t._s(t.hero.headline)}}):t._e(),t._v(" "),t.hasContent?a("div",{staticClass:"page-hero-intro"},[a("div",{domProps:{innerHTML:t._s(t.hero.content)}})]):t._e()]),t._v(" "),t.hasMedia?a("div",{staticClass:"page-hero-media"},[a("img",{attrs:{alt:t.hero.backgroundImage.alt,src:t.hero.backgroundImage.url}})]):t._e()])};var o=[];var r={props:{hero:{type:Object,default:function t(){return{}}}},computed:{modifiers:function t(){return{"has-content":this.hasContent,"has-media":this.hasMedia}},hasContent:function t(){return this.hero&&"content"in this.hero&&this.hero.content.length>0},hasHeadline:function t(){return this.hero&&"headline"in this.hero&&this.hero.headline.length>0},hasMedia:function t(){return this.hero&&"backgroundImage"in this.hero&&"url"in this.hero.backgroundImage&&this.hero.backgroundImage.url.length>0}}};var i=r;var s=a("ONGt");var c=a("KHd+");var d=Object(c["a"])(i,n,o,false,null,"165cddb6",null);var l=e["a"]=d.exports},ho7u:function(t,e,a){},tziG:function(t,e,a){},vgCd:function(t,e,a){"use strict";var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t._m(0)};var o=[function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"overlay"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"loading"},[a("div",{staticClass:"bounceball"}),t._v(" "),a("div",{staticClass:"text"},[t._v("LOADING")])])])])}];var r={};var i=r;var s=a("bypC");var c=a("KHd+");var d=Object(c["a"])(i,n,o,false,null,"e37ae440",null);var l=e["a"]=d.exports},w466:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t.loading?a("corvin-loading"):a("main",{staticClass:"page has-inset is-gapless has-cta maintenance"},[a("corvin-page-hero",{attrs:{hero:t.data.content.hero}}),t._v(" "),a("corvin-accordion",{staticClass:"is-contained content-wrapper"},t._l(t.data.faqEntries,(function(t,e){return a("corvin-accordion-row",{key:e,attrs:{heading:t.faqSectionHeading,intro:t.faqSectionIntro,content:t.faqSectionContent}})})),1),t._v(" "),a("div",{staticClass:"cta maintenance-cta"},[a("h3",[t._v("Still have questions? Contact us and one of our staff will help.")])])],1)};var o=[];var r=a("KwuT");var i=a("vgCd");var s=a("do7L");var c=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"accordion"},[t._t("default")],2)};var d=[];var l=a("FZtP");var u={created:function t(){var e=this;this.$on("rowOpened",(function(t){e.$children.forEach((function(e){return e.hide(t)}));e.$parent.$emit("rowOpened")}))}};var h=u;var v=a("KHd+");var f=Object(v["a"])(h,c,d,false,null,null,null);var m=f.exports;var g=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{class:[t.accordionRowModifiers]},[a("div",{staticClass:"accordion-row-title",on:{click:t.handleClick}},[a("h2",[t._v(t._s(t.heading))]),t._v(" "),a("p",[t._v(t._s(t.intro))])]),t._v(" "),a("div",{ref:"content",staticClass:"accordion-row-content"},[t._t("default",[a("div",{domProps:{innerHTML:t._s(t.content)}})]),t._v(" "),a("div",{staticClass:"accordion-row-footer"},[a("doe-link",{staticClass:"accordion-row-close",attrs:{"is-button":""},nativeOn:{click:function(e){e.preventDefault();return t.hide(e)}}})],1)],2)])};var p=[];var w={props:{heading:{type:String,required:true},content:{type:String,default:function t(){return""}},intro:{type:String,default:function t(){return""}}},data:function t(){return{opened:false}},computed:{accordionRowModifiers:function t(){return{"accordion-row":true,"is-active":this.opened}}},methods:{handleClick:function t(){return this.opened?this.hide():this.show()},hide:function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(!e||e!==this._uid){var a=this.$refs.content;a.style.maxHeight="0px";this.opened=false;setTimeout((function(){a.removeAttribute("style");a.classList.remove("is-visible")}),501)}},show:function t(){if(this.opened){this.hide();return}this.$parent.$emit("rowOpened",this._uid);this.opened=true;var e=this.$refs.content;e.classList.add("is-invisible");var a=e.offsetHeight;e.classList.remove("is-invisible");e.classList.add("is-visible");setTimeout((function(){e.style.maxHeight="".concat(a,"px")}),10)}}};var _=w;var y=a("NKq/");var C=Object(v["a"])(_,g,p,false,null,"9dcef302",null);var q=C.exports;var b={components:{CorvinAccordion:m,CorvinAccordionRow:q,CorvinLoading:i["a"],CorvinPageHero:s["a"]},mixins:[r["a"]]};var H=b;var S=a("HFgW");var $=Object(v["a"])(H,n,o,false,null,"14187734",null);var k=e["default"]=$.exports},wisL:function(t,e,a){"use strict";var n=a("Sxbn");var o=a.n(n);var r=o.a}}]);