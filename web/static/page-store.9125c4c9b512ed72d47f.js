(window["webpackJsonpcorvin"]=window["webpackJsonpcorvin"]||[]).push([[10],{"6B3c":function(t,a,r){"use strict";r.r(a);var i=function(){var t=this;var a=t.$createElement;var r=t._self._c||a;return r("main",{staticClass:"page store-item-page"},[r("h2",[t._v("Store")]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"product-image"},[r("div",{staticClass:"product-category"},[t._v(t._s(t.activeProduct.category))]),t._v(" "),r("img",{attrs:{alt:"",src:"https://placehold.it/1600x900"}}),t._v(" "),r("div",{staticClass:"product-quick-facts"},[r("h1",[t._v(t._s(t.activeProduct.title))]),t._v(" "),r("p",[t._v("Style No. "+t._s(t.activeProduct.style))]),t._v(" "),r("p",[t._v(t._s(t.activeProduct.price))]),t._v(" "),t._l(t.activeProduct.gallery,(function(t,a){return r("img",{key:a,attrs:{src:t,alt:""}})})),t._v(" "),r("p",[t._v(t._s(t.activeProduct.color))]),t._v(" "),r("p",[t._v(t._s(t.activeProduct.brand))]),t._v(" "),r("p",[t._v(t._s(t.activeProduct.width))])],2)]),t._v(" "),r("div",{staticClass:"product-detail"},[r("div",{staticClass:"description"},[r("h3",[t._v("Description")]),t._v(" "),r("p",[t._v(t._s(t.activeProduct.description))])]),t._v(" "),r("div",{staticClass:"good-for"},[r("h4",[t._v("Good for")]),t._v(" "),r("corvin-list",{attrs:{items:t.activeProduct.goodFor}})],1),t._v(" "),r("div",{staticClass:"care-items"},[r("h4",[t._v("Product care")]),t._v(" "),r("corvin-list",{attrs:{items:t.activeProduct.productCareItems}})],1)])]),t._v(" "),r("div",{staticClass:"container"},[r("h2",[t._v("You might also like")]),t._v(" "),t._l(t.relatedProducts,(function(t){return r("corvin-product-listing",{key:t.id,attrs:{product:t}})}))],2)])};var e=[];var s=r("TeQF");var n=r("fbCW");var o=r("yq1k");var c=r("JTJg");var d=r("UxlC");var u=r("oRqQ");var v=r("Ztx5");var l={components:{CorvinProductListing:v["a"]},data:function t(){return{activeProduct:{},products:u["b"],relatedProducts:[]}},activated:function t(){var a=this;this.activeProduct=u["b"].find((function(t){return t.slug===window.location.pathname.replace("/store/","")}));this.relatedProducts=u["b"].filter((function(t){return a.activeProduct.relatedProducts.includes(t.id)}));this.$emit("page-activated");this.$eventBus.$emit("page-loaded")}};var h=l;var p=r("KHd+");var _=Object(p["a"])(h,i,e,false,null,null,null);var g=a["default"]=_.exports},cahS:function(t,a,r){"use strict";r.r(a);var i=function(){var t=this;var a=t.$createElement;var r=t._self._c||a;return r("main",{staticClass:"page has-inset is-gapless products"},[t.hasHero?r("corvin-page-hero",{attrs:{hero:t.data.content.hero}}):t._e(),t._v(" "),t.hasProducts?r("corvin-products",{staticClass:"is-contained",attrs:{products:t.data.content.products.grid.items,"has-filters.boolean":"false","listing-type":"store"}}):t._e()],1)};var e=[];var s=r("KwuT");var n=r("do7L");var o=r("3jCI");var c={components:{CorvinPageHero:n["a"],CorvinProducts:o["a"]},mixins:[s["a"]],data:function t(){return{jsonUrl:"/".concat(this.$api.pages.shop)}},computed:{hasContent:function t(){return"content"in this.data},hasHero:function t(){return this.hasContent&&"hero"in this.data.content},hasProducts:function t(){return this.hasContent&&"products"in this.data.content&&"grid"in this.data.content.products&&"items"in this.data.content.products.grid&&this.data.content.products.grid.items.length>0}},activated:function t(){this.$emit("page-activated");this.$eventBus.$emit("page-loaded")}};var d=c;var u=r("KHd+");var v=Object(u["a"])(d,i,e,false,null,null,null);var l=a["default"]=v.exports},vSmc:function(t,a,r){"use strict";r.r(a);var i=function(){var t=this;var a=t.$createElement;var r=t._self._c||a;return r("main",{staticClass:"page has-inset is-gapless products"},[t.hasHero?r("corvin-page-hero",{attrs:{hero:{headline:t.data.title,backgroundImage:{alt:t.data.image.alt,url:t.data.image.url},content:t.description}}}):t._e(),t._v(" "),t.hasProducts?r("corvin-products",{staticClass:"is-contained",attrs:{products:t.data.products,"has-filters.boolean":"true","listing-type":"category"}}):t._e()],1)};var e=[];var s=r("KwuT");var n=r("do7L");var o=r("3jCI");var c={components:{CorvinPageHero:n["a"],CorvinProducts:o["a"]},mixins:[s["a"]],data:function t(){return{handle:"product-categories",slug:this.$route.params.category}},computed:{description:function t(){if("fullDescription"in this.data&&this.data.fullDescription&&this.data.fullDescription.length>0){return this.data.fullDescription}if("shortDescription"in this.data&&this.data.shortDescription&&this.data.shortDescription.length>0){return this.data.shortDescription}return"description needed"},hasContent:function t(){return"content"in this.data},hasHero:function t(){return"image"in this.data&&"title"in this.data&&"fullDescription"in this.data},hasProducts:function t(){return"products"in this.data&&this.data.products.length>0}},activated:function t(){this.$emit("page-activated");this.$eventBus.$emit("page-loaded")}};var d=c;var u=r("KHd+");var v=Object(u["a"])(d,i,e,false,null,null,null);var l=a["default"]=v.exports}}]);