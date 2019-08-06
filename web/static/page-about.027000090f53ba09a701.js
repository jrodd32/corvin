(window["webpackJsonpCorvin"]=window["webpackJsonpCorvin"]||[]).push([[3],{"7PFO":function(e,t,a){},"7p7G":function(e,t,a){"use strict";var i=a("xY8s");var n=a.n(i);var o=n.a},Dqcz:function(e,t,a){"use strict";var i=a("pXcU");var n=a.n(i);var o=n.a},KwuT:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var i=a("pNMO");var n=a.n(i);var o=a("4Brf");var r=a.n(o);var s=a("ma9I");var l=a.n(s);var c=a("EnZy");var d=a.n(c);var u={props:{forceAjax:{type:Boolean,default:function e(){return false}}},data:function e(){return{data:{},handle:null,loadedViaJson:false,loading:!(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]),slug:null,url:null}},created:function e(){this.loadData()},beforeMount:function e(){if(this.loadedViaJson){this.loading=false}},activated:function e(){this.updateHead()},methods:{afterLoadData:function e(){},loadData:function e(){var t=this;var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(!this.forceAjax){if(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]){this.data=window.data.page;this.loadedViaJson=true;this.afterLoadData();if(i){this.updateHead()}return}}var n=window.location.pathname.split("/");n.shift();var o=n[0];var r=n[1];if(o.length===0){o="home"}if(this.handle){o=this.handle}if(this.slug){r=this.slug}var s=r===undefined?"".concat(o):"".concat(o,"/").concat(r);this.$axios.get(a||this.url||"/v1/".concat(s)).then(function(e){t.data=e.data;if(t.data.status){t.loading=false;return}t.afterLoadData();if(i){t.updateHead()}t.loading=false;if(t.$prerender){t.$eventBus.$emit("page-loaded",t.data.lastUpdated)}}).catch(function(e){if(e.response&&e.response.status===404){t.$eventBus.$emit("error",404);return}t.$eventBus.$emit("error",500,e)})},updateHead:function e(){var t="Corvin's Furniture of Bardstown";var a="";var i="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.data&&this.data.meta&&this.data.meta.title){t="".concat(this.data.meta.title)}if(this.data&&this.data.meta&&this.data.meta.description){a=this.data.metaDescription}if(this.data&&this.data.meta&&this.data.meta.socialImage&&this.data.meta.socialImage.url){i=this.data.socialImage.url}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=a;document.head.querySelector('meta[property="og:description"]').content=a;document.head.querySelector('meta[name="twitter:description"]').content=a;document.head.querySelector('meta[itemprop="description"]').content=a;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=i;document.head.querySelector('meta[name="twitter:image:src"]').content=i;document.head.querySelector('meta[itemprop="image"]').content=i;if(this.data&&this.data.canonicalUrl){if(document.head.querySelector("[rel='canonical']")){document.head.querySelector("[rel='canonical']").href=this.data.canonicalUrl}else{var n=document.createElement("link");n.rel="canonical";n.href=this.data.canonicalUrl;document.head.appendChild(n)}}else if(document.head.querySelector("[rel='canonical']")){var o=document.head.querySelector("[rel='canonical']");o.parentNode.removeChild(o)}if(this.data){this.$eventBus.$emit("set-breadcrumb",this.data.title)}}}};var m={data:function e(){return{metaTitle:null,metaDescription:null,socialImage:null}},created:function e(){this.updateHead()},mounted:function e(){if(this.$prerender){this.$eventBus.$emit("page-loaded","na")}},activated:function e(){this.updateHead()},methods:{updateHead:function e(){var t="Corvin Furniture of Bardstown";var a="";var i="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.metaTitle){t="".concat(this.metaTitle)}if(this.metaDescription){a=this.metaDescription}if(this.socialImage){i=this.data.socialImage}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=a;document.head.querySelector('meta[property="og:description"]').content=a;document.head.querySelector('meta[name="twitter:description"]').content=a;document.head.querySelector('meta[itemprop="description"]').content=a;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=i;document.head.querySelector('meta[name="twitter:image:src"]').content=i;document.head.querySelector('meta[itemprop="image"]').content=i}}}},OEW6:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("main",{staticClass:"page is-inset is-gapless about"},[e.hasHeading?a("corvin-page-hero",{attrs:{heading:e.tempAboutHeading}}):e._e(),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"about-team is-contained"},[a("h2",{staticClass:"section-heading"},[e._v("Our Team")]),e._v(" "),a("div",{staticClass:"profiles"},e._l(e.profiles,function(e,t){return a("corvin-profile",{key:t,attrs:{profile:e}})}),1)]),e._v(" "),e._m(1)],1)};var n=[function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"about-intro is-contained"},[a("div",{staticClass:"content"},[a("p",[e._v("\n        Mark started the business in a small 5,000SF building selling only furniture and has since grown it to a 100,000SF building selling Furniture, Flooring, a Traders Mall and a Moving service.\n      ")]),e._v(" "),a("p",[e._v("\n        People shop at Corvin's because we have one of the biggest showrooms in the state of Kentucky.\n        We will aggressively bid out any job small or big and promise to treat all of our customers\n        as if they are family. Our sales staff is very knowledgeable on all aspects of floorings\n        and will make sure each job is done correctly.\n      ")]),e._v(" "),a("p",[e._v("\n        We offer a vast array of different options in Hardwood, Laminate, Tile, Vinyl and Carpet. Our\n        Shaw products include: Anso, Caress, Clearly Chic, ClearTouch, EverTouch, R2X Stain Remover,\n        LifeHappens, St. Jude Carpet Cushion, Tuftex, and Floorte. We also install all flooring and\n        we do custom showers.\n      ")])]),e._v(" "),a("aside",{staticClass:"pull-quote"},[a("blockquote",[a("span",[e._v("Our Mission:")]),e._v("\n        To champion every client’s flooring with passion & integrity.\n      ")])])])},function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"about-cta"},[a("h3",[e._v("Contact one of our team members today and we will assist you")])])}];var o=a("KwuT");var r=a("do7L");var s=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"profile"},[a("img",{staticClass:"profile-image",attrs:{alt:e.profile.image.alt,src:e.profile.image}}),e._v(" "),a("h2",{staticClass:"profile-name"},[e._v(e._s(e.profile.name))]),e._v(" "),a("p",{staticClass:"profile-title"},[e._v(e._s(e.profile.title))])])};var l=[];var c={props:{profile:{type:Object,default:function e(){return{}}}}};var d=c;var u=a("Dqcz");var m=a("KHd+");var h=Object(m["a"])(d,s,l,false,null,"0a974db2",null);var p=h.exports;var v=[{name:"Service Name",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?",icon:"https://placehold.it/150x150",class:"column is-one-quarter"},{name:"Service Name",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?",icon:"https://placehold.it/150x150",class:"column is-one-quarter"},{name:"Service Name",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?",icon:"https://placehold.it/150x150",class:"column is-one-quarter"},{name:"Service Name",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?",icon:"https://placehold.it/150x150",class:"column is-one-quarter"},{name:"Service Name",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?",icon:"https://placehold.it/150x150",class:"column is-one-quarter"},{name:"Service Name",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?",icon:"https://placehold.it/150x150",class:"column is-one-quarter"},{name:"Service Name",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?",icon:"https://placehold.it/150x150",class:"column is-one-quarter"},{name:"Service Name",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque non amet aliquid nemo laboriosam?",icon:"https://placehold.it/150x150",class:"column is-one-quarter"}];var f=[{name:"Mark Corvin",title:"CO-OWNER, PRESIDENT",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"David Brown",title:"FLOORING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"Tyler Corvin",title:"ASSISTANT FLOORING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"Paola Ogadzhanova ",title:"MARKETING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"Mark Corvin",title:"CO-OWNER, PRESIDENT",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"David Brown",title:"FLOORING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"Tyler Corvin",title:"ASSISTANT FLOORING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"},{name:"Paola Ogadzhanova ",title:"MARKETING MANAGER",image:"https://placehold.it/256x280",alt:"Profile image"}];var g={title:"About Corvin's",content:"Corvin’s Flooring & Furniture, LLC has been a family-owned business in Bardstown, Kentucky since its founding in 1987. We are a current member of the Bardstown Chamber of Commerce.",media:{alt:"Picture of the Corvin furniture team.",src:"https://satyr.io/1920x700"}};var w={components:{CorvinPageHero:r["a"],CorvinProfile:p},mixins:[o["a"]],data:function e(){return{jsonUrl:"/".concat(this.$api.pages.home),profiles:f,tempAboutHeading:g}},computed:{hasHeading:function e(){return true}}};var y=w;var q=a("7p7G");var S=Object(m["a"])(y,i,n,false,null,"f2f347c2",null);var b=t["default"]=S.exports},S73L:function(e,t,a){"use strict";var i=a("7PFO");var n=a.n(i);var o=n.a},do7L:function(e,t,a){"use strict";var i=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",{staticClass:"page-hero"},[a("div",{staticClass:"page-hero-wrapper is-contained"},[e.hasHeadline?a("h1",{domProps:{innerHTML:e._s(e.hero.headline)}}):e._e(),e._v(" "),e.hasContent?a("div",{staticClass:"intro",domProps:{innerHTML:e._s(e.hero.content)}}):e._e()]),e._v(" "),e.hasMedia?a("div",{staticClass:"page-hero-media"},[a("img",{attrs:{alt:e.hero.backgroundImage.alt,src:e.hero.backgroundImage.url}})]):e._e()])};var n=[];var o={props:{hero:{type:Object,default:function e(){return{}}}},computed:{hasContent:function e(){return this.hero&&"content"in this.hero&&this.hero.content.length>0},hasHeadline:function e(){return this.hero&&"headline"in this.hero&&this.hero.headline.length>0},hasMedia:function e(){return this.hero&&"backgroundImage"in this.hero&&"url"in this.hero.backgroundImage&&this.hero.backgroundImage.url.length>0}}};var r=o;var s=a("S73L");var l=a("KHd+");var c=Object(l["a"])(r,i,n,false,null,"71673c65",null);var d=t["a"]=c.exports},pXcU:function(e,t,a){},xY8s:function(e,t,a){}}]);