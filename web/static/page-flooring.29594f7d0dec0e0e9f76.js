(window["webpackJsonpcorvin"]=window["webpackJsonpcorvin"]||[]).push([[6],{"32i4":function(t,e,a){},"7Mup":function(t,e,a){},"7X1f":function(t,e,a){},Alfw:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t.loading?a("corvin-loading"):a("main",{staticClass:"page flooring-home is-gapless no-bottom-padding is-inset"},[t.hasHero?a("fixed-hero",{attrs:{hero:t.data.content.hero},on:{"set-hero-offset":t.handleSetHeroOffset}}):t._e(),t._v(" "),a("div",{staticClass:"after-hero",style:t.heroOffset},[t.hasCategories?a("div",{staticClass:"shop-by-category"},[a("h2",{staticClass:"section-heading",domProps:{innerHTML:t._s(t.data.content.categories.headline)}}),t._v(" "),a("div",{staticClass:"category-wrapper"},t._l(t.data.content.categories.grid.items,(function(e){return a("div",{key:e.title,staticClass:"category"},[a("h3",[t._v(t._s(e.title))]),t._v(" "),a("base-picture",{attrs:{picture:e.portrait}}),t._v(" "),a("doe-link",{attrs:{href:e.uri,text:"Shop Now","is-blue":""}})],1)})),0)]):t._e(),t._v(" "),t.hasQuote?a("div",{staticClass:"customer-quote",style:t.quoteBackground},[a("blockquote",[a("div",{domProps:{innerHTML:t._s(t.activeQuote.quote)}}),t._v(" "),a("span",{staticClass:"line"}),t._v(" "),a("cite",[t._v(t._s(t.activeQuote.cite)+" "),a("span",{domProps:{innerHTML:t._s(t.activeQuote.location)}})])])]):t._e(),t._v(" "),t.hasSocial?a("div",{staticClass:"social"},[a("div",{staticClass:"content"},[a("h4",{staticClass:"section-heading",domProps:{innerHTML:t._s(t.data.content.social.headline)}}),t._v(" "),a("div",{domProps:{innerHTML:t._s(t.data.content.social.description)}})]),t._v(" "),t.hasSocialMedia?a("div",{staticClass:"media"},t._l(t.data.content.social.square,(function(t){return a("base-picture",{key:t.src,attrs:{picture:t}})})),1):t._e()]):t._e()])],1)};var r=[];var i=a("KwuT");var o=a("vgCd");var s=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"fixed-hero",style:t.background},[a("div",{ref:"hero",staticClass:"figure"},[a("base-picture",{staticClass:"featured",attrs:{picture:t.hero.featured}}),t._v(" "),a("article",[a("h1",{domProps:{innerHTML:t._s(t.hero.headline)}}),t._v(" "),a("div",{staticClass:"hero-content",domProps:{innerHTML:t._s(t.hero.content)}}),t._v(" "),a("doe-link",{attrs:{href:t.hero.button.href,text:t.hero.button.text,"is-orange":""}})],1)],1)])};var c=[];var d={props:{hero:{type:Object,default(){return{}}}},computed:{hasBackgroundImage(){return"background"in this.hero},hasfeatured(){return"featured"in this.hero},background(){return this.hasBackgroundImage?"background-image: url('".concat(this.hero.background.url,"')"):""}},mounted(){this.$nextTick(()=>{window.addEventListener("resize",this.getHeroHeight);this.getHeroHeight()})},destroyed(){window.removeEventListener("resize",this.getHeroHeight)},methods:{getHeroHeight(){const t=document.getElementsByClassName("header")[0].offsetHeight;const e=window.innerHeight-t;return this.$emit("set-hero-offset",e)}}};var l=d;var h=a("V6Tj");var u=a("KHd+");var v=Object(u["a"])(l,s,c,false,null,"2500d4d0",null);var m=v.exports;var p={components:{CorvinLoading:o["a"],FixedHero:m},mixins:[i["a"]],data(){return{heroHeight:0,jsonUrl:"/".concat(this.$api.pages.home)}},computed:{activeQuote(){return this.hasQuote?this.data.content.blockquote.testimonial[0]:""},hasCategories(){return this.hasContent&&"categories"in this.data.content},hasContent(){return"content"in this.data},hasHero(){return this.hasContent&&"hero"in this.data.content},hasQuote(){return this.hasContent&&"blockquote"in this.data.content},hasSocial(){return this.hasContent&&"social"in this.data.content},hasSocialMedia(){return this.hasSocial&&"square"in this.data.content.social},heroOffset(){return"margin-top: ".concat(this.heroHeight,"px")},quoteBackground(){return"background-image:url(".concat(this.data.content.blockquote.background.url,")")}},methods:{handleSetHeroOffset(t){this.heroHeight=t+50}}};var f=p;var g=a("yziq");var _=Object(u["a"])(f,n,r,false,null,"6b0bb308",null);var w=e["default"]=_.exports},CgiD:function(t,e,a){},HFgW:function(t,e,a){"use strict";var n=a("ho7u");var r=a.n(n);var i=r.a},KwuT:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a.d(e,"b",(function(){return c}));var n=a("4Brf");var r=a.n(n);var i=a("EnZy");var o=a.n(i);const s={props:{forceAjax:{type:Boolean,default(){return false}}},data(){return{data:{},handle:null,loadedViaJson:false,loading:!(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]),slug:null,url:null}},created(){this.loadData()},beforeMount(){if(this.loadedViaJson){this.loading=false}},activated(){this.updateHead();if(this.data&&!this.$prerender){this.$eventBus.$emit("page-loaded",this.data.lastUpdated)}},methods:{afterLoadData(){},loadData(t=null,e=true){if(!this.forceAjax){}const a=window.location.pathname.split("/");a.shift();let n=a[0];let r=a[1];const i=a[2];if(n.length===0){n="home"}if(this.handle){n=this.handle}if(this.slug){r=this.slug}let o=r===undefined?"".concat(n):"".concat(n,"/").concat(r);o=i===undefined?o:"".concat(n,"/").concat(r,"/").concat(i);this.$axios.get(t||this.url||"/v1/".concat(o)).then(t=>{this.data=t.data;if(this.data.status){this.$eventBus.$emit("error",404);this.loading=false;return}this.afterLoadData();if(e){this.updateHead()}this.loading=false;this.$eventBus.$emit("page-loaded",this.data.lastUpdated)}).catch(t=>{if(t.response&&t.response.status===404){this.$eventBus.$emit("error",404);return}this.$eventBus.$emit("error",500,t)})},updateHead(){let t="Corvin's Furniture of Bardstown";let e="";let a="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.data&&this.data.meta&&this.data.meta.title){t="".concat(this.data.meta.title)}if(this.data&&this.data.meta&&this.data.meta.description){e=this.data.meta.description}if(this.data&&this.data.meta&&this.data.meta.socialImage&&this.data.meta.socialImage.url){a=this.data.socialImage.url}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=e;document.head.querySelector('meta[property="og:description"]').content=e;document.head.querySelector('meta[name="twitter:description"]').content=e;document.head.querySelector('meta[itemprop="description"]').content=e;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=a;document.head.querySelector('meta[name="twitter:image:src"]').content=a;document.head.querySelector('meta[itemprop="image"]').content=a;if(this.data&&this.data.canonicalUrl){if(document.head.querySelector("[rel='canonical']")){document.head.querySelector("[rel='canonical']").href=this.data.canonicalUrl}else{const t=document.createElement("link");t.rel="canonical";t.href=this.data.canonicalUrl;document.head.appendChild(t)}}else if(document.head.querySelector("[rel='canonical']")){const t=document.head.querySelector("[rel='canonical']");t.parentNode.removeChild(t)}}}};const c={data(){return{metaTitle:null,metaDescription:null,socialImage:null}},created(){this.updateHead()},mounted(){if(this.$prerender){this.$eventBus.$emit("page-loaded","na")}},activated(){this.updateHead()},methods:{updateHead(){let t="Corvin's Furniture of Bardstown";let e="";let a="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.data&&this.data.meta&&this.data.meta.title){t="".concat(this.data.meta.title)}if(this.data&&this.data.meta&&this.data.meta.description){e=this.data.meta.description}if(this.data&&this.data.meta&&this.data.meta.socialImage&&this.data.meta.socialImage.url){a=this.data.socialImage.url}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=e;document.head.querySelector('meta[property="og:description"]').content=e;document.head.querySelector('meta[name="twitter:description"]').content=e;document.head.querySelector('meta[itemprop="description"]').content=e;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=a;document.head.querySelector('meta[name="twitter:image:src"]').content=a;document.head.querySelector('meta[itemprop="image"]').content=a}}}},"NKq/":function(t,e,a){"use strict";var n=a("32i4");var r=a.n(n);var i=r.a},TqqQ:function(t,e,a){},V6Tj:function(t,e,a){"use strict";var n=a("7X1f");var r=a.n(n);var i=r.a},bypC:function(t,e,a){"use strict";var n=a("TqqQ");var r=a.n(n);var i=r.a},do7L:function(t,e,a){"use strict";var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"page-hero",class:t.modifiers},[a("div",{staticClass:"page-hero-content is-contained content-wrapper"},[t.hasHeadline?a("h1",{domProps:{innerHTML:t._s(t.hero.headline)}}):t._e(),t._v(" "),t.hasContent?a("div",{staticClass:"page-hero-intro"},[a("div",{domProps:{innerHTML:t._s(t.hero.content)}})]):t._e()]),t._v(" "),t.hasMedia?a("div",{staticClass:"page-hero-media"},[a("base-picture",{attrs:{picture:t.hero.background}})],1):t._e()])};var r=[];var i={props:{hero:{type:Object,default(){return{}}}},computed:{modifiers(){return{"has-content":this.hasContent,"has-media":this.hasMedia}},hasContent(){return this.hero&&"content"in this.hero&&this.hero.content.length>0},hasHeadline(){return this.hero&&"headline"in this.hero&&this.hero.headline.length>0},hasMedia(){return this.hero&&"background"in this.hero&&"url"in this.hero.background&&this.hero.background.url.length>0}}};var o=i;var s=a("f6Vo");var c=a("KHd+");var d=Object(c["a"])(o,n,r,false,null,"ad719bce",null);var l=e["a"]=d.exports},f6Vo:function(t,e,a){"use strict";var n=a("CgiD");var r=a.n(n);var i=r.a},ho7u:function(t,e,a){},vgCd:function(t,e,a){"use strict";var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t._m(0)};var r=[function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"overlay"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"loading"},[a("div",{staticClass:"bounceball"}),t._v(" "),a("div",{staticClass:"text"},[t._v("LOADING")])])])])}];var i={};var o=i;var s=a("bypC");var c=a("KHd+");var d=Object(c["a"])(o,n,r,false,null,"e37ae440",null);var l=e["a"]=d.exports},w466:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t.loading?a("corvin-loading"):a("main",{staticClass:"page has-inset is-gapless has-cta maintenance"},[a("corvin-page-hero",{attrs:{hero:t.data.content.hero}}),t._v(" "),a("corvin-accordion",{staticClass:"is-contained content-wrapper"},t._l(t.data.faqEntries,(function(t,e){return a("corvin-accordion-row",{key:e,attrs:{heading:t.faqSectionHeading,intro:t.faqSectionIntro,content:t.faqSectionContent}})})),1),t._v(" "),a("div",{staticClass:"cta maintenance-cta"},[a("h3",[t._v("Still have questions? Contact us and one of our staff will help.")])])],1)};var r=[];var i=a("KwuT");var o=a("vgCd");var s=a("do7L");var c=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"accordion"},[t._t("default")],2)};var d=[];var l={created(){this.$on("rowOpened",t=>{this.$children.forEach(e=>e.hide(t));this.$parent.$emit("rowOpened")})}};var h=l;var u=a("KHd+");var v=Object(u["a"])(h,c,d,false,null,null,null);var m=v.exports;var p=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{class:[t.accordionRowModifiers]},[a("div",{staticClass:"accordion-row-title",on:{click:t.handleClick}},[a("h2",[t._v(t._s(t.heading))]),t._v(" "),a("p",[t._v(t._s(t.intro))])]),t._v(" "),a("div",{ref:"content",staticClass:"accordion-row-content"},[t._t("default",[a("div",{domProps:{innerHTML:t._s(t.content)}})]),t._v(" "),a("div",{staticClass:"accordion-row-footer"},[a("doe-link",{staticClass:"accordion-row-close",attrs:{"is-button":""},nativeOn:{click:function(e){e.preventDefault();return t.hide(e)}}})],1)],2)])};var f=[];var g={props:{heading:{type:String,required:true},content:{type:String,default(){return""}},intro:{type:String,default(){return""}}},data(){return{opened:false}},computed:{accordionRowModifiers(){return{"accordion-row":true,"is-active":this.opened}}},methods:{handleClick(){return this.opened?this.hide():this.show()},hide(t=null){if(!t||t!==this._uid){const{content:t}=this.$refs;t.style.maxHeight="0px";this.opened=false;setTimeout(()=>{t.removeAttribute("style");t.classList.remove("is-visible")},501)}},show(){if(this.opened){this.hide();return}this.$parent.$emit("rowOpened",this._uid);this.opened=true;const{content:t}=this.$refs;t.classList.add("is-invisible");const e=t.offsetHeight;t.classList.remove("is-invisible");t.classList.add("is-visible");setTimeout(()=>{t.style.maxHeight="".concat(e,"px")},10)}}};var _=g;var w=a("NKq/");var C=Object(u["a"])(_,p,f,false,null,"9dcef302",null);var y=C.exports;var q={components:{CorvinAccordion:m,CorvinAccordionRow:y,CorvinLoading:o["a"],CorvinPageHero:s["a"]},mixins:[i["a"]]};var b=q;var H=a("HFgW");var S=Object(u["a"])(b,n,r,false,null,"14187734",null);var $=e["default"]=S.exports},yziq:function(t,e,a){"use strict";var n=a("7Mup");var r=a.n(n);var i=r.a}}]);