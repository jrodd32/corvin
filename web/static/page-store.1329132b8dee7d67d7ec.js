(window["webpackJsonpcorvin"]=window["webpackJsonpcorvin"]||[]).push([[8],{"+V4O":function(t,e,a){},"0/lV":function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"categories"},t._l(t.filteredCategories,(function(e){return t.hasCategories?a("corvin-category-listing",{key:e.slug,attrs:{category:e}}):t._e()})),1)};var s=[];var i=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"category"},[a("h2",{staticClass:"category-title"},[a("doe-link",{attrs:{href:t.category.uri},domProps:{innerHTML:t._s(t.category.title)}})],1),t._v(" "),a("div",{staticClass:"category-image"},[a("doe-link",{staticClass:"overlay-effect",attrs:{href:t.category.uri}},[a("div")]),t._v(" "),a("base-picture",{attrs:{picture:t.category.background}})],1),t._v(" "),a("div",{staticClass:"category-content"},[a("p",{staticClass:"category-description",domProps:{innerHTML:t._s(t.category.shortDescription)}}),t._v(" "),a("doe-link",{staticClass:"read-more",attrs:{href:t.category.uri,"is-anchor":""}},[t._v("\n      Read More\n    ")])],1)])};var n=[];var o={props:{category:{type:Object,default(){return{}}}}};var c=o;var d=a("WVEE");var l=a("KHd+");var u=Object(l["a"])(c,i,n,false,null,"450386d0",null);var h=u.exports;var p={components:{CorvinCategoryListing:h},props:{categories:{type:Array,default(){return[]}}},data(){return{filterBy:""}},computed:{hasCategories(){return this.categories&&this.categories.length>0},filteredCategories(){if(this.filterBy){return this.categories.filter(t=>t.tags.includes(this.filterBy))}return this.categories},styleModifiers(){return this.listingType==="category"?"is-category-listing":""}}};var v=p;var g=a("X5Eg");var f=Object(l["a"])(v,r,s,false,null,"45605ee0",null);var m=e["a"]=f.exports},"2Kzn":function(t,e,a){"use strict";var r=a("B7QJ");var s=a.n(r)},"3jCI":function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"products-filters"},[a("div",{staticClass:"products",class:t.styleModifiers},t._l(t.filteredProducts,(function(e){return t.hasProducts?a("corvin-product-listing",{key:e.slug,attrs:{product:e,productStyle:t.listingType}}):t._e()})),1)])};var s=[];var i=a("Ztx5");var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"filters"},t._l(t.filters,(function(t){return a("corvin-store-filter",{key:t.filterName,attrs:{filter:t}})})),1)};var o=[];var c=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"filter dropdown"},[a("div",{staticClass:"dropdown-trigger"},[a("span",{attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu"},on:{click:function(e){return t.handleFilterDropDownClick(t.filter.title)}}},[a("span",[t._v(t._s(t.filter.title))])]),t._v(" "),a("span",{staticClass:"arrow-down"})]),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{id:t.filter.title,role:"menu"}},t._l(t.filter.options,(function(e){return a("span",{key:e.target,staticClass:"dropdown-item",on:{click:function(a){return t.handleFilterClick(e.target)}}},[t._v("\n        "+t._s(e.name)+"\n    ")])})),0)])};var d=[];var l={props:{filter:{type:Object,default(){return{}}}},methods:{handleFilterDropDownClick(){let t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(!t){return}document.getElementById(t).classList.toggle("is-active")},handleFilterClick(){let t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(!t){return}this.$eventBus.$emit("filter-products",t)}}};var u=l;var h=a("p73R");var p=a("KHd+");var v=Object(p["a"])(u,c,d,false,null,"7ac2b4e4",null);var g=v.exports;var f={components:{CorvinStoreFilter:g},data(){return{brands:[],categories:[],colors:[],filters:[]}},props:{products:{type:Array,default(){return[]}}},created(){this.setFilters()},methods:{clearAllFilters(){this.$eventBus.$emit("clear-filters")},setFilters(){this.products.forEach(t=>{this.brands.push(t.productBrand[0]);this.categories.push(t.productCategory[0]);this.colors.push(t.productColor)})}}};var m=f;var _=a("afW/");var C=Object(p["a"])(m,n,o,false,null,"17515a78",null);var y=C.exports;var S={components:{CorvinProductListing:i["a"],CorvinStoreFilters:y},props:{hasFilters:{type:Boolean,default(){return false}},listingType:{type:String,default(){return""}},products:{type:Array,default(){return[]}}},data(){return{filterBy:""}},computed:{hasProducts(){return this.products&&this.products.length>0},filteredProducts(){if(this.filterBy){return this.products.filter(t=>t.tags.includes(this.filterBy))}return this.products},styleModifiers(){return this.listingType==="category"?"is-category-listing":""}},created(){this.$eventBus.$on("filter-products",t=>{this.handleFilterProducts(t)});this.$eventBus.$on("clear-filters",()=>{this.handleClearFilters()})},methods:{handleClearFilters(){this.filterBy=null},handleFilterProducts(t){this.filterBy=t}}};var P=S;var w=a("2Kzn");var b=Object(p["a"])(P,r,s,false,null,"2738bacf",null);var k=e["a"]=b.exports},"6B3c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t.loading?a("corvin-loading"):a("main",{staticClass:"page store-item-page no-bottom-padding"},[a("div",{staticClass:"is-contained content-wrapper is-no-margin"},[a("h2",{class:t.pageHeadlineClass},[t._v("\n      Shop\n    ")]),t._v(" "),a("div",{staticClass:"breadcrumbs"},[a("doe-link",{attrs:{href:"/shop",text:"Shop Home","is-anchor":""}}),t._v("\n\n      /\n\n      "),t.hasCategoryLink?a("doe-link",{attrs:{href:"/shop/"+t.data.categorySlug,text:t.data.category,"is-anchor":""}}):t._e(),t._v("\n\n      /\n\n      "),t.hasBrand?a("p",{domProps:{innerHTML:t._s(t.data.productBrand[0].title)}}):t._e(),t._v("\n\n      /\n\n      "),a("p",{staticClass:"product-name",domProps:{innerHTML:t._s(t.data.productName)}})],1)]),t._v(" "),a("div",{staticClass:"is-contained content-wrapper is-small-margin"},[a("div",{staticClass:"product-item"},[t.hasPicture?a("div",{staticClass:"product-image"},[a("img",{attrs:{alt:t.data.square[t.activePictureIndex].alt,src:t.data.square[t.activePictureIndex].url}})]):t._e(),t._v(" "),a("div",{staticClass:"product-quick-facts"},[a("div",{staticClass:"product-overview"},[a("div",{staticClass:"product-brand"},[t.hasBrand?a("p",[t._v("\n              "+t._s(t.data.productBrand[0].title)+"\n            ")]):t._e()]),t._v(" "),t.hasName?a("h1",{staticClass:"product-name",domProps:{innerHTML:t._s(t.calculatedProductName)}}):t._e(),t._v(" "),t.data.productColor?a("p",{staticClass:"product-color"},[t._v("\n            "+t._s(t.data.productColor)+"\n          ")]):t._e(),t._v(" "),t.data.productPrice?a("p",{staticClass:"product-price"},[t._v("\n            "+t._s(t.computedPrice)+"\n          ")]):t._e()]),t._v(" "),a("div",{staticClass:"product-meta"},[t.hasProductSqFtBox?a("p",[a("span",{staticClass:"product-label"},[t._v("SQ. FT. / BOX:")]),t._v("\n            "+t._s(t.data.productSqFtBox)+"\n          ")]):t._e(),t._v(" "),t.hasProductSize?a("p",[a("span",{staticClass:"product-label"},[t._v("Size:")]),t._v("\n            "+t._s(t.data.productSize)+"\n          ")]):t._e(),t._v(" "),t.hasProductThickness?a("p",[a("span",{staticClass:"product-label"},[t._v("Thickness:")]),t._v("\n            "+t._s(t.data.productThickness)+"\n          ")]):t._e(),t._v(" "),t.hasProductWarranty?a("p",[a("span",{staticClass:"product-label"},[t._v("Warranty:")]),t._v("\n            "+t._s(t._f("filterHtml")(t.data.productWarranty))+"\n          ")]):t._e(),t._v(" "),t.hasProductSpecies?a("p",[a("span",{staticClass:"product-label"},[t._v("Species:")]),t._v("\n            "+t._s(t.data.productSpecies)+"\n          ")]):t._e(),t._v(" "),t.hasProductJankaRating?a("p",[a("span",{staticClass:"product-label"},[t._v("Janka Rating (Hardiness):")]),t._v("\n            "+t._s(t.data.productJankaRating)+"\n          ")]):t._e(),t._v(" "),t.hasProductSpecs?a("p",[a("span",{staticClass:"product-label"},[t._v("Specs:")]),t._v("\n            "+t._s(t._f("filterHtml")(t.data.productSpecs))+"\n          ")]):t._e()]),t._v(" "),t.hasGallery?a("div",{staticClass:"product-gallery"},t._l(t.data.square,(function(e,r){return a("base-picture",{key:r,attrs:{picture:e},nativeOn:{click:function(e){return t.handleImageClick(r)}}})})),1):t._e(),t._v(" "),a("doe-link",{staticClass:"calculate-sq-ft",attrs:{"is-button":"","is-blue":"",text:"Calculate Sq. Footage"},nativeOn:{click:function(e){return t.handleCalculateSqFt.apply(null,arguments)}}})],1)])]),t._v(" "),t.hasRelatedProducts?a("corvin-related-products",{attrs:{products:t.data.relatedProducts}}):t._e(),t._v(" "),t.showModal?a("doe-modal",{staticClass:"calculator-modal",on:{close:t.handleModalClose}},[a("div",{staticClass:"calculator"},[a("h3",[t._v("Cost Estimate")]),t._v(" "),a("p",[t._v("Enter the number of square feet needed and we will calculate the price for you.")]),t._v(" "),a("doe-input",{attrs:{field:"price",disabled:"","skip-validation":""},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}}),t._v(" "),a("doe-input",{attrs:{field:"feet"},model:{value:t.feet,callback:function(e){t.feet=e},expression:"feet"}}),t._v(" "),a("p",{staticClass:"total"},[t._v("\n        Estimated total: "+t._s(t.calculatedPrice)+"\n      ")])],1)]):t._e()],1)};var s=[];var i=a("KwuT");var n=a("wB7W");var o=a("vgCd");var c=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"related-products container"},[a("div",{staticClass:"content-wrapper"},[a("h2",[t._v("\n      Still Looking? You Might Also Like These Additional Options or\n      "),a("doe-link",{staticClass:"cta-link",attrs:{href:"/shop","is-anchor":"",text:"Shop All Floors›"}})],1),t._v(" "),a("div",{staticClass:"products"},t._l(t.products,(function(e){return t.hasProducts?a("corvin-product-listing",{key:e.id,attrs:{product:e,"show-product-content":false}}):t._e()})),1)])])};var d=[];var l=a("Ztx5");var u={components:{CorvinProductListing:l["a"]},props:{products:{type:Array,default(){return[]}},listingStyle:{type:String,default(){return"product"}}},computed:{hasProducts(){return this.products.length>0}}};var h=u;var p=a("niCC");var v=a("KHd+");var g=Object(v["a"])(h,c,d,false,null,"9b8ea8e6",null);var f=g.exports;var m={filters:{filterHtml(t){return t.replace("<p>","").replace("</p>","")}},components:{CorvinLoading:o["a"],CorvinRelatedProducts:f},mixins:[i["a"],n["a"]],data(){return{activePictureIndex:0,feet:"",showModal:false}},computed:{activePicture(){return this.data.square[this.activePictureIndex]},calculatedPrice(){const t=(parseFloat(this.price)*parseInt(this.feet,10)).toFixed(2);return isNaN(t)?"":t},calculatedProductName(){if(this.hasBrand){return this.data.productName.replace(this.data.productBrand[0].title,"")}return this.data.productName},computedPrice(){return this.data.productPrice.includes("SF")?this.data.productPrice:`${this.data.productPrice} SF`},hasBrand(){return"productBrand"in this.data&&this.data.productBrand&&this.data.productBrand.length>0},hasCategory(){return"category"in this.data&&this.data.category!==null&&this.data.category.length>0},hasCategorySlug(){return"categorySlug"in this.data&&this.data.categorySlug!==null&&this.data.categorySlug.length>0},hasCategoryLink(){return this.hasCategory&&this.hasCategorySlug},hasGallery(){return"square"in this.data&&this.data.square!==null&&this.data.square.length>1},hasName(){return"productName"in this.data&&this.data.productName!==null&&this.data.productName.length>0},hasPicture(){return"square"in this.data},hasProductColor(){return"productColor"in this.data&&this.data.productColor!==null&&this.data.productColor.length>0},hasProductJankaRating(){return"productJankaRating"in this.data&&this.data.productJankaRating!==null&&this.data.productJankaRating.length>0},hasProductPrice(){return"productPrice"in this.data&&this.data.productPrice!==null&&this.data.productPrice.length>0},hasProductSize(){return"productSize"in this.data&&this.data.productSize!==null&&this.data.productSize.length>0},hasProductSpecies(){return"productSpecies"in this.data&&this.data.productSpecies!==null&&this.data.productSpecies.length>0},hasProductSpecs(){return"productSpecs"in this.data&&this.data.productSpecs!==null&&this.data.productSpecs.length>0},hasProductSqFtBox(){return false},hasProductThickness(){return"productThickness"in this.data&&this.data.productThickness!==null&&this.data.productThickness.length>0},hasProductWarranty(){return"productWarranty"in this.data&&this.data.productWarranty!==null&&this.data.productWarranty.length>0},hasStyleNumber(){return"productStyleNumber"in this.data&&this.data.productStyleNumber!==null&&this.data.productStyleNumber.length>0},hasRelatedProducts(){return"relatedProducts"in this.data&&this.data.relatedProducts&&this.data.relatedProducts.length>0},pageHeadlineClass(){return this.isMobile?"is-h3":"is-h1"},price(){return this.data.productPrice.match(/[+-]?\d+(?:\.\d+)?/g)}},methods:{handleCalculateSqFt(){this.showModal=true},handleImageClick(t){this.$nextTick(()=>{this.activePictureIndex=t})},handleModalClose(){this.showModal=false}}};var _=m;var C=a("rxke");var y=Object(v["a"])(_,r,s,false,null,"c1df0f9e",null);var S=e["default"]=y.exports},AYp5:function(t,e,a){},B7QJ:function(t,e,a){},CgiD:function(t,e,a){},KwuT:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a.d(e,"b",(function(){return s}));const r={props:{forceAjax:{type:Boolean,default(){return false}}},data(){return{data:{},handle:null,loadedViaJson:false,loading:!(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]),slug:null,url:null}},created(){this.loadData()},beforeMount(){if(this.loadedViaJson){this.loading=false}},activated(){this.updateHead();if(this.data&&!this.$prerender){this.$eventBus.$emit("page-loaded",this.data.lastUpdated)}},methods:{afterLoadData(){},loadData(){let t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;let e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(!this.forceAjax){}const a=window.location.pathname.split("/");a.shift();let r=a[0];let s=a[1];const i=a[2];if(r.length===0){r="home"}if(this.handle){r=this.handle}if(this.slug){s=this.slug}let n=s===undefined?`${r}`:`${r}/${s}`;n=i===undefined?n:`${r}/${s}/${i}`;this.$axios.get(t||this.url||`/v1/${n}`).then(t=>{this.data=t.data;if(this.data.status){this.$eventBus.$emit("error",404);this.loading=false;return}this.afterLoadData();if(e){this.updateHead()}this.loading=false;this.$eventBus.$emit("page-loaded",this.data.lastUpdated)}).catch(t=>{if(t.response&&t.response.status===404){this.$eventBus.$emit("error",404);return}this.$eventBus.$emit("error",500,t)})},updateHead(){let t="Corvin's Furniture of Bardstown";let e="";let a=`${this.$cdnUrl}/images/og-image.jpg`;if(this.data&&this.data.meta&&this.data.meta.title){t=`${this.data.meta.title}`}if(this.data&&this.data.meta&&this.data.meta.description){e=this.data.meta.description}if(this.data&&this.data.meta&&this.data.meta.socialImage&&this.data.meta.socialImage.url){a=this.data.socialImage.url}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=e;document.head.querySelector('meta[property="og:description"]').content=e;document.head.querySelector('meta[name="twitter:description"]').content=e;document.head.querySelector('meta[itemprop="description"]').content=e;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=a;document.head.querySelector('meta[name="twitter:image:src"]').content=a;document.head.querySelector('meta[itemprop="image"]').content=a;if(this.data&&this.data.canonicalUrl){if(document.head.querySelector("[rel='canonical']")){document.head.querySelector("[rel='canonical']").href=this.data.canonicalUrl}else{const t=document.createElement("link");t.rel="canonical";t.href=this.data.canonicalUrl;document.head.appendChild(t)}}else if(document.head.querySelector("[rel='canonical']")){const t=document.head.querySelector("[rel='canonical']");t.parentNode.removeChild(t)}}}};const s={data(){return{metaTitle:null,metaDescription:null,socialImage:null}},created(){this.updateHead()},mounted(){if(this.$prerender){this.$eventBus.$emit("page-loaded","na")}},activated(){this.updateHead()},methods:{updateHead(){let t="Corvin's Furniture of Bardstown";let e="";let a=`${this.$cdnUrl}/images/og-image.jpg`;if(this.data&&this.data.meta&&this.data.meta.title){t=`${this.data.meta.title}`}if(this.data&&this.data.meta&&this.data.meta.description){e=this.data.meta.description}if(this.data&&this.data.meta&&this.data.meta.socialImage&&this.data.meta.socialImage.url){a=this.data.socialImage.url}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=e;document.head.querySelector('meta[property="og:description"]').content=e;document.head.querySelector('meta[name="twitter:description"]').content=e;document.head.querySelector('meta[itemprop="description"]').content=e;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=a;document.head.querySelector('meta[name="twitter:image:src"]').content=a;document.head.querySelector('meta[itemprop="image"]').content=a}}}},NweO:function(t,e,a){},Qw8c:function(t,e,a){"use strict";var r=a("VKkA");var s=a.n(r)},TqqQ:function(t,e,a){},VKkA:function(t,e,a){},WVEE:function(t,e,a){"use strict";var r=a("fmHT");var s=a.n(r)},X5Eg:function(t,e,a){"use strict";var r=a("NweO");var s=a.n(r)},Ztx5:function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"product"},[a("h2",{staticClass:"product-title"},[a("doe-link",{attrs:{href:t.productLink},domProps:{innerHTML:t._s(t.product.productStyleNumber)}})],1),t._v(" "),a("div",{staticClass:"product-image"},[a("doe-link",{staticClass:"overlay-effect",attrs:{href:t.productLink}},[a("div")]),t._v(" "),a("base-picture",{attrs:{picture:t.picture}})],1),t._v(" "),a("div",{staticClass:"product-content"},[t.showProductContent?a("div",{staticClass:"details"},[a("p",{staticClass:"brand"},[t._v("\n        Brand: "),a("span",[t._v(t._s(t.product.productBrand[0].title))])]),t._v(" "),a("p",{staticClass:"color"},[t._v("\n        Color: "),a("span",[t._v(t._s(t.product.productColor))])]),t._v(" "),a("p",[t._v("Cost: "),a("span",[t._v(" "+t._s(t.computedPrice))])])]):t._e(),t._v(" "),a("div",{staticClass:"link"},[a("doe-link",{attrs:{href:t.productLink,"is-blue-alt":""}},[t._v("\n        View details\n      ")])],1)])])};var s=[];var i={props:{product:{type:Object,default(){return{}}},productStyle:{type:String,default(){return""}},showProductContent:{type:Boolean,default(){return true}}},computed:{computedPrice(){return this.product.productPrice.includes("SF")?this.product.productPrice:`${this.product.productPrice} SF`},productLink(){if(this.showProductContent===false){return`/shop${this.product.uri}`}return`${this.$route.path}/${this.product.slug}`},picture(){if("square"in this.product){return this.product.square[0]}if("background"in this.product){return this.product.background}if("image"in this.product){return this.product.image}return{}}}};var n=i;var o=a("Qw8c");var c=a("KHd+");var d=Object(c["a"])(n,r,s,false,null,"61bd65d9",null);var l=e["a"]=d.exports},a4SA:function(t,e,a){},"afW/":function(t,e,a){"use strict";var r=a("a4SA");var s=a.n(r)},bypC:function(t,e,a){"use strict";var r=a("TqqQ");var s=a.n(r)},cahS:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t.loading?a("corvin-loading"):a("main",{staticClass:"page has-inset is-gapless products"},[t.hasHero?a("corvin-page-hero",{attrs:{hero:t.data.content.hero}}):t._e(),t._v(" "),t.hasProducts?a("corvin-categories",{staticClass:"is-contained content-wrapper",attrs:{categories:t.data.content.products.grid.items,"has-filters.boolean":"false","listing-type":"store"}}):t._e()],1)};var s=[];var i=a("KwuT");var n=a("vgCd");var o=a("do7L");var c=a("0/lV");var d={components:{CorvinLoading:n["a"],CorvinPageHero:o["a"],CorvinCategories:c["a"]},mixins:[i["a"]],data(){return{jsonUrl:`/${this.$api.pages.shop}`}},computed:{hasContent(){return"content"in this.data},hasHero(){return this.hasContent&&"hero"in this.data.content},hasProducts(){return this.hasContent&&"products"in this.data.content&&"grid"in this.data.content.products&&"items"in this.data.content.products.grid&&this.data.content.products.grid.items.length>0}}};var l=d;var u=a("KHd+");var h=Object(u["a"])(l,r,s,false,null,null,null);var p=e["default"]=h.exports},do7L:function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"page-hero",class:t.modifiers},[a("div",{staticClass:"page-hero-content is-contained content-wrapper"},[t.hasHeadline?a("h1",{domProps:{innerHTML:t._s(t.hero.headline)}}):t._e(),t._v(" "),t.hasContent?a("div",{staticClass:"page-hero-intro"},[a("div",{domProps:{innerHTML:t._s(t.hero.content)}})]):t._e()]),t._v(" "),t.hasMedia?a("div",{staticClass:"page-hero-media"},[a("base-picture",{attrs:{picture:t.hero.background}})],1):t._e()])};var s=[];var i={props:{hero:{type:Object,default(){return{}}}},computed:{modifiers(){return{"has-content":this.hasContent,"has-media":this.hasMedia}},hasContent(){return this.hero&&"content"in this.hero&&this.hero.content.length>0},hasHeadline(){return this.hero&&"headline"in this.hero&&this.hero.headline.length>0},hasMedia(){return this.hero&&"background"in this.hero&&"url"in this.hero.background&&this.hero.background.url.length>0}}};var n=i;var o=a("f6Vo");var c=a("KHd+");var d=Object(c["a"])(n,r,s,false,null,"ad719bce",null);var l=e["a"]=d.exports},f6Vo:function(t,e,a){"use strict";var r=a("CgiD");var s=a.n(r)},fmHT:function(t,e,a){},niCC:function(t,e,a){"use strict";var r=a("pofE");var s=a.n(r)},p73R:function(t,e,a){"use strict";var r=a("AYp5");var s=a.n(r)},pofE:function(t,e,a){},qGIM:function(t,e,a){"use strict";var r=a("x2At");var s=a.n(r)},rxke:function(t,e,a){"use strict";var r=a("+V4O");var s=a.n(r)},vSmc:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t.loading?a("corvin-loading"):a("main",{staticClass:"page has-inset is-gapless products no-bottom-padding"},[t.hasHero?a("corvin-page-hero",{attrs:{hero:{headline:t.data.title,background:t.data.image,content:t.description}}}):t._e(),t._v(" "),a("div",{staticClass:"is-contained content-wrapper"},[a("h2",[t._v("Currently updating our catalog. "),a("br"),t._v(" Check back soon!")])]),t._v(" "),t.hasProducts?a("corvin-products",{staticClass:"is-contained content-wrapper",attrs:{products:t.data.products}}):t._e(),t._v(" "),t.hasRelatedCategories?a("corvin-related-categories",{attrs:{categories:t.data.relatedCategories,"current-category":t.data.title}}):t._e()],1)};var s=[];var i=a("KwuT");var n=a("vgCd");var o=a("do7L");var c=a("3jCI");var d=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"related-categories container"},[a("div",{staticClass:"content-wrapper"},[a("h2",[t._v("\n      Having second thoughts about "+t._s(t.currentCategory)+"?\n      "),a("doe-link",{staticClass:"cta-link",attrs:{href:"/shop","is-anchor":"",text:"Try›"}})],1),t._v(" "),a("corvin-categories",{attrs:{categories:t.categories}})],1)])};var l=[];var u=a("0/lV");var h={components:{CorvinCategories:u["a"]},props:{categories:{type:Array,default(){return[]}},currentCategory:{type:String,default(){return""}}},computed:{hasCategories(){return this.categories.length>0}}};var p=h;var v=a("qGIM");var g=a("KHd+");var f=Object(g["a"])(p,d,l,false,null,"1e45759a",null);var m=f.exports;var _={components:{CorvinLoading:n["a"],CorvinPageHero:o["a"],CorvinProducts:c["a"],CorvinRelatedCategories:m},mixins:[i["a"]],computed:{description(){if("fullDescription"in this.data&&this.data.fullDescription&&this.data.fullDescription.length>0){return this.data.fullDescription}if("shortDescription"in this.data&&this.data.shortDescription&&this.data.shortDescription.length>0){return this.data.shortDescription}return"description needed"},hasContent(){return"content"in this.data},hasHero(){return"image"in this.data&&"title"in this.data&&"fullDescription"in this.data},hasProducts(){return"products"in this.data&&this.data.products.length>0},hasRelatedCategories(){return"relatedCategories"in this.data&&this.data.relatedCategories&&this.data.relatedCategories.length>0}}};var C=_;var y=Object(g["a"])(C,r,s,false,null,null,null);var S=e["default"]=y.exports},vgCd:function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t._m(0)};var s=[function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"overlay"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"loading"},[a("div",{staticClass:"bounceball"}),t._v(" "),a("div",{staticClass:"text"},[t._v("LOADING")])])])])}];var i={};var n=i;var o=a("bypC");var c=a("KHd+");var d=Object(c["a"])(n,r,s,false,null,"e37ae440",null);var l=e["a"]=d.exports},x2At:function(t,e,a){}}]);