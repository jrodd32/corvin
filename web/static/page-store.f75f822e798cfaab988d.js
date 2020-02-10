(window["webpackJsonpcorvin"]=window["webpackJsonpcorvin"]||[]).push([[10],{"4IGF":function(t,a,r){},"6B3c":function(t,a,r){"use strict";r.r(a);var s=function(){var t=this;var a=t.$createElement;var r=t._self._c||a;return t.loading?r("corvin-loading"):r("main",{staticClass:"page store-item-page no-bottom-padding"},[r("div",{staticClass:"is-contained content-wrapper is-no-margin"},[r("h2",{class:t.pageHeadlineClass},[t._v("\n      Shop\n    ")]),t._v(" "),r("div",{staticClass:"breadcrumbs"},[r("doe-link",{attrs:{href:"/shop",text:"Shop Home","is-anchor":""}}),t._v("\n\n      /\n\n      "),t.hasCategoryLink?r("doe-link",{attrs:{href:"/shop/"+t.data.categorySlug,text:t.data.category,"is-anchor":""}}):t._e(),t._v("\n\n      /\n\n      "),t.hasBrand?r("p",{domProps:{innerHTML:t._s(t.data.productBrand[0].title)}}):t._e(),t._v("\n\n      /\n\n      "),r("p",{staticClass:"product-name",domProps:{innerHTML:t._s(t.data.productName)}})],1)]),t._v(" "),r("div",{staticClass:"is-contained content-wrapper is-small-margin"},[r("div",{staticClass:"product-item"},[r("div",{staticClass:"product-image"},[r("img",{attrs:{alt:t.data.productGallery[0].alt,src:t.data.productGallery[0].url}})]),t._v(" "),r("div",{staticClass:"product-quick-facts"},[r("div",{staticClass:"product-overview"},[r("div",{staticClass:"product-brand"},[t.hasBrand?r("p",[t._v("\n              "+t._s(t.data.productBrand[0].title)+"\n            ")]):t._e()]),t._v(" "),t.hasName?r("h1",{staticClass:"product-name",domProps:{innerHTML:t._s(t.calculatedProductName)}}):t._e(),t._v(" "),t.data.productColor?r("p",{staticClass:"product-color"},[t._v("\n            "+t._s(t.data.productColor)+"\n          ")]):t._e(),t._v(" "),t.data.productPrice?r("p",{staticClass:"product-price"},[t._v("\n            "+t._s(t.data.productPrice)+"\n          ")]):t._e()]),t._v(" "),r("div",{staticClass:"product-meta"},[t.hasProductSqFtBox?r("p",[r("span",{staticClass:"product-label"},[t._v("SQ. FT. / BOX:")]),t._v(" "),t._v("\n            36.30\n          ")]):t._e(),t._v(" "),t.hasProductSize?r("p",[r("span",{staticClass:"product-label"},[t._v("Size:")]),t._v("\n            "+t._s(t.data.productSize)+"\n          ")]):t._e(),t._v(" "),t.hasProductThickness?r("p",[r("span",{staticClass:"product-label"},[t._v("Thickness:")]),t._v("\n            "+t._s(t.data.productThickness)+"\n          ")]):t._e(),t._v(" "),t.hasProductWarranty?r("p",[r("span",{staticClass:"product-label"},[t._v("Warranty:")]),t._v("\n            "+t._s(t._f("filterHtml")(t.data.productWarranty))+"\n          ")]):t._e(),t._v(" "),t.hasProductSpecies?r("p",[r("span",{staticClass:"product-label"},[t._v("Species:")]),t._v("\n            "+t._s(t.data.productSpecies)+"\n          ")]):t._e(),t._v(" "),t.hasProductJankaRating?r("p",[r("span",{staticClass:"product-label"},[t._v("Janka Rating (Hardiness):")]),t._v("\n            "+t._s(t.data.productJankaRating)+"\n          ")]):t._e(),t._v(" "),t.hasProductSpecs?r("p",[r("span",{staticClass:"product-label"},[t._v("Specs:")]),t._v("\n            "+t._s(t._f("filterHtml")(t.data.productSpecs))+"\n          ")]):t._e()]),t._v(" "),t.hasGallery?r("div",{staticClass:"product-gallery"},t._l(t.data.productGallery,(function(t,a){return r("img",{key:a,attrs:{alt:t.alt,src:t.url}})})),0):t._e(),t._v(" "),r("doe-link",{staticClass:"calculate-sq-ft",attrs:{"is-button":"","is-blue":"",text:"Calculate Sq. Footage"},nativeOn:{click:function(a){return t.handleCalculateSqFt(a)}}})],1)])]),t._v("'\n\n  "),t.hasRelatedProducts?r("corvin-related-products",{attrs:{products:t.data.relatedProducts}}):t._e(),t._v(" "),t.showModal?r("doe-modal",{staticClass:"calculator-modal",on:{close:t.handleModalClose}},[r("div",{staticClass:"calculator"},[r("h3",[t._v("Cost Estimate")]),t._v(" "),r("p",[t._v("Enter the number of square feet needed and we will calculate the price for you.")]),t._v(" "),r("doe-input",{attrs:{field:"price",disabled:"","skip-validation":""},model:{value:t.price,callback:function(a){t.price=a},expression:"price"}}),t._v(" "),r("doe-input",{attrs:{field:"feet"},model:{value:t.feet,callback:function(a){t.feet=a},expression:"feet"}}),t._v(" "),r("p",{staticClass:"total"},[t._v("\n        Estimated total: "+t._s(t.calculatedPrice)+"\n      ")])],1)]):t._e()],1)};var e=[];var i=r("toAj");var n=r("Rm1S");var o=r("UxlC");var d=r("KwuT");var c=r("wB7W");var l=r("vgCd");var u=r("yFtu");var p={filters:{filterHtml(t){return t.replace("<p>","").replace("</p>","")}},components:{CorvinLoading:l["a"],CorvinRelatedProducts:u["a"]},mixins:[d["a"],c["a"]],data(){return{feet:"",showModal:false}},computed:{calculatedPrice(){const t=(parseFloat(this.price)*parseInt(this.feet,10)).toFixed(2);return isNaN(t)?"":t},calculatedProductName(){if(this.hasBrand){return this.data.productName.replace(this.data.productBrand[0].title,"")}return this.data.productName},hasBrand(){return"productBrand"in this.data&&this.data.productBrand&&this.data.productBrand.length>0},hasCategory(){return"category"in this.data&&this.data.category!==null&&this.data.category.length>0},hasCategorySlug(){return"categorySlug"in this.data&&this.data.categorySlug!==null&&this.data.categorySlug.length>0},hasCategoryLink(){return this.hasCategory&&this.hasCategorySlug},hasGallery(){return"productGallery"in this.data&&this.data.productGallery!==null&&this.data.productGallery.length>1},hasName(){return"productName"in this.data&&this.data.productName!==null&&this.data.productName.length>0},hasProductColor(){return"productColor"in this.data&&this.data.productColor!==null&&this.data.productColor.length>0},hasProductJankaRating(){return"productJankaRating"in this.data&&this.data.productJankaRating!==null&&this.data.productJankaRating.length>0},hasProductPrice(){return"productPrice"in this.data&&this.data.productPrice!==null&&this.data.productPrice.length>0},hasProductSize(){return"productSize"in this.data&&this.data.productSize!==null&&this.data.productSize.length>0},hasProductSpecies(){return"productSpecies"in this.data&&this.data.productSpecies!==null&&this.data.productSpecies.length>0},hasProductSpecs(){return"productSpecs"in this.data&&this.data.productSpecs!==null&&this.data.productSpecs.length>0},hasProductSqFtBox(){return false},hasProductThickness(){return"productThickness"in this.data&&this.data.productThickness!==null&&this.data.productThickness.length>0},hasProductWarranty(){return"productWarranty"in this.data&&this.data.productWarranty!==null&&this.data.productWarranty.length>0},hasStyleNumber(){return"productStyleNumber"in this.data&&this.data.productStyleNumber!==null&&this.data.productStyleNumber.length>0},hasRelatedProducts(){return"relatedProducts"in this.data&&this.data.relatedProducts&&this.data.relatedProducts.length>0},pageHeadlineClass(){return this.isMobile?"is-h3":"is-h1"},price(){return this.data.productPrice.match(/[+-]?\d+(?:\.\d+)?/g)}},methods:{handleCalculateSqFt(){this.showModal=true},handleModalClose(){this.showModal=false}}};var h=p;var v=r("kJZG");var g=r("KHd+");var _=Object(g["a"])(h,s,e,false,null,"f8d7a382",null);var m=a["default"]=_.exports},cahS:function(t,a,r){"use strict";r.r(a);var s=function(){var t=this;var a=t.$createElement;var r=t._self._c||a;return t.loading?r("corvin-loading"):r("main",{staticClass:"page has-inset is-gapless products"},[t.hasHero?r("corvin-page-hero",{attrs:{hero:t.data.content.hero}}):t._e(),t._v(" "),t.hasProducts?r("corvin-products",{staticClass:"is-contained",attrs:{products:t.data.content.products.grid.items,"has-filters.boolean":"false","listing-type":"store"}}):t._e()],1)};var e=[];var i=r("KwuT");var n=r("vgCd");var o=r("do7L");var d=r("3jCI");var c={components:{CorvinLoading:n["a"],CorvinPageHero:o["a"],CorvinProducts:d["a"]},mixins:[i["a"]],data(){return{jsonUrl:"/".concat(this.$api.pages.shop)}},computed:{hasContent(){return"content"in this.data},hasHero(){return this.hasContent&&"hero"in this.data.content},hasProducts(){return this.hasContent&&"products"in this.data.content&&"grid"in this.data.content.products&&"items"in this.data.content.products.grid&&this.data.content.products.grid.items.length>0}},activated(){this.$emit("page-activated");this.$eventBus.$emit("page-loaded")}};var l=c;var u=r("KHd+");var p=Object(u["a"])(l,s,e,false,null,null,null);var h=a["default"]=p.exports},cicY:function(t,a,r){},kJZG:function(t,a,r){"use strict";var s=r("cicY");var e=r.n(s);var i=e.a},kjtv:function(t,a,r){"use strict";var s=r("4IGF");var e=r.n(s);var i=e.a},vSmc:function(t,a,r){"use strict";r.r(a);var s=function(){var t=this;var a=t.$createElement;var r=t._self._c||a;return t.loading?r("corvin-loading"):r("main",{staticClass:"page has-inset is-gapless products"},[t.hasHero?r("corvin-page-hero",{attrs:{hero:{headline:t.data.title,backgroundImage:{alt:t.data.image.alt,url:t.data.image.url},content:t.description}}}):t._e(),t._v(" "),t.hasProducts?r("corvin-products",{staticClass:"is-contained",attrs:{products:t.data.products,"has-filters.boolean":"true","listing-type":"category"}}):t._e(),t._v(" "),r("corvin-related-products",{attrs:{products:t.data.relatedProducts}})],1)};var e=[];var i=r("KwuT");var n=r("vgCd");var o=r("do7L");var d=r("3jCI");var c=r("yFtu");var l={components:{CorvinLoading:n["a"],CorvinPageHero:o["a"],CorvinProducts:d["a"],CorvinRelatedProducts:c["a"]},mixins:[i["a"]],data(){return{handle:"product-categories",slug:this.$route.params.category}},computed:{description(){if("fullDescription"in this.data&&this.data.fullDescription&&this.data.fullDescription.length>0){return this.data.fullDescription}if("shortDescription"in this.data&&this.data.shortDescription&&this.data.shortDescription.length>0){return this.data.shortDescription}return"description needed"},hasContent(){return"content"in this.data},hasHero(){return"image"in this.data&&"title"in this.data&&"fullDescription"in this.data},hasProducts(){return"products"in this.data&&this.data.products.length>0}},activated(){this.$emit("page-activated");this.$eventBus.$emit("page-loaded")}};var u=l;var p=r("KHd+");var h=Object(p["a"])(u,s,e,false,null,null,null);var v=a["default"]=h.exports},yFtu:function(t,a,r){"use strict";var s=function(){var t=this;var a=t.$createElement;var r=t._self._c||a;return r("div",{staticClass:"related-products container"},[r("div",{staticClass:"content-wrapper"},[r("h2",[t._v("\n      Still Looking? You Might Also Like These Additional Options  or\n      "),r("doe-link",{staticClass:"cta-link",attrs:{href:"/shop","is-anchor":"",text:"Shop All Floors›"}})],1),t._v(" "),r("div",{staticClass:"products"},t._l(t.products,(function(a){return t.hasProducts?r("corvin-product-listing",{key:a.id,attrs:{product:a,"show-product-content":false}}):t._e()})),1)])])};var e=[];var i=r("Ztx5");var n={components:{CorvinProductListing:i["a"]},props:{products:{type:Array,default(){return[]}}},computed:{hasProducts(){return this.products.length>0}}};var o=n;var d=r("kjtv");var c=r("KHd+");var l=Object(c["a"])(o,s,e,false,null,"7c274d62",null);var u=a["a"]=l.exports}}]);