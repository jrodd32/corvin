(window["webpackJsonpCorvin"]=window["webpackJsonpCorvin"]||[]).push([[7],{"+ekn":function(t,e,a){"use strict";var r=a("uHj4");var i=a.n(r);var n=i.a},"7PFO":function(t,e,a){},S73L:function(t,e,a){"use strict";var r=a("7PFO");var i=a.n(r);var n=i.a},do7L:function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"page-hero"},[a("div",{staticClass:"page-hero-wrapper is-contained"},[t.hasHeadline?a("h1",{domProps:{innerHTML:t._s(t.hero.headline)}}):t._e(),t._v(" "),t.hasContent?a("div",{staticClass:"intro",domProps:{innerHTML:t._s(t.hero.content)}}):t._e()]),t._v(" "),t.hasMedia?a("div",{staticClass:"page-hero-media"},[a("img",{attrs:{alt:t.hero.backgroundImage.alt,src:t.hero.backgroundImage.url}})]):t._e()])};var i=[];var n={props:{hero:{type:Object,default:function t(){return{}}}},computed:{hasContent:function t(){return this.hero&&"content"in this.hero&&this.hero.content.length>0},hasHeadline:function t(){return this.hero&&"headline"in this.hero&&this.hero.headline.length>0},hasMedia:function t(){return this.hero&&"backgroundImage"in this.hero&&"url"in this.hero.backgroundImage&&this.hero.backgroundImage.url.length>0}}};var o=n;var s=a("S73L");var l=a("KHd+");var h=Object(l["a"])(o,r,i,false,null,"71673c65",null);var c=e["a"]=h.exports},uHj4:function(t,e,a){},zdxX:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("main",{staticClass:"page has-inset is-gapless gallery"},[a("corvin-page-hero",{attrs:{heading:t.tempGalleryHeadingData}}),t._v(" "),a("div",{staticClass:"image-gallery"},[a("transition-group",{staticClass:"thumbnails",attrs:{name:"thumbnailfade",tag:"div"}},t._l(t.images,function(e,r){return a("figure",{key:r},[a("img",{attrs:{src:t._f("appendDirectory")(e.name,t.assetDir),alt:e.alt,title:e.alt},on:{click:function(a){return t.showLightbox(e.name)}}})])}),0),t._v(" "),a("lightbox",{ref:"lightbox",attrs:{id:"mylightbox",directory:t.assetDir,images:t.images,timeoutDuration:5e3}})],1)],1)};var i=[];var n=a("do7L");var o=[{alt:"",filter:"",name:"bathroom@2x.jpg"},{alt:"",filter:"",name:"bed@2x.jpg"},{alt:"",filter:"",name:"brown-flooring@2x.jpg"},{alt:"",filter:"",name:"carpet@2x.jpg"},{alt:"",filter:"",name:"couch@2x.jpg"},{alt:"",filter:"",name:"dark-flooring@2x.jpg"},{alt:"",filter:"",name:"family-room@2x.jpg"},{alt:"",filter:"",name:"grey-flooring@2x.jpg"},{alt:"",filter:"",name:"half-wall@2x.jpg"},{alt:"",filter:"",name:"kitchen-island@2x.jpg"},{alt:"",filter:"",name:"light-hardwood@2x.jpg"},{alt:"",filter:"",name:"stairs@2x.jpg"},{alt:"",filter:"",name:"stools@2x.jpg"},{alt:"",filter:"",name:"tile@2x.jpg"},{alt:"",filter:"",name:"white-stools@2x.jpg"}];var s={title:"Gallery",content:"Corvin’s wouldn’t exist without the amazing people with creative ideas we’ve had the opportunity to serve over the years. We’d love to show off your rooms with our products. Tag your photos on Instagram with #CorvinsFlooring or email your us to be featured."};var l={components:{CorvinPageHero:n["a"]},filters:{appendDirectory:function t(e,a){return a+e}},data:function t(){return{images:o,tempGalleryHeadingData:s}},computed:{assetDir:function t(){if(this.$local||this.$dev){return"https://corvin.nyc3.digitaloceanspaces.com/dev/gallery/"}return"https://corvin.nyc3.digitaloceanspaces.com/prod/gallery/"}},activated:function t(){this.$emit("page-activated");this.$eventBus.$emit("page-loaded")},methods:{showLightbox:function t(e){this.$refs.lightbox.show(e)}}};var h=l;var c=a("+ekn");var u=a("KHd+");var g=Object(u["a"])(h,r,i,false,null,"308e8334",null);var d=e["default"]=g.exports}}]);