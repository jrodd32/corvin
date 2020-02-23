(window["webpackJsonpcorvin"]=window["webpackJsonpcorvin"]||[]).push([[9],{"0/lV":function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"categories"},t._l(t.filteredCategories,(function(e){return t.hasCategories?a("corvin-category-listing",{key:e.slug,attrs:{category:e}}):t._e()})),1)};var s=[];var i=a("JTJg");var n=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"category"},[a("h2",{staticClass:"category-title"},[a("doe-link",{attrs:{href:t.category.uri},domProps:{innerHTML:t._s(t.category.title)}})],1),t._v(" "),a("div",{staticClass:"category-image"},[a("doe-link",{staticClass:"overlay-effect",attrs:{href:t.category.uri}},[a("div")]),t._v(" "),a("base-picture",{attrs:{picture:t.category.background}})],1),t._v(" "),a("div",{staticClass:"category-content"},[a("p",{staticClass:"category-description",domProps:{innerHTML:t._s(t.category.shortDescription)}}),t._v(" "),a("doe-link",{staticClass:"read-more",attrs:{href:t.category.uri,"is-anchor":""}},[t._v("\n      Read More\n    ")])],1)])};var o=[];var c={props:{category:{type:Object,default(){return{}}}}};var d=c;var l=a("WVEE");var u=a("KHd+");var h=Object(u["a"])(d,n,o,false,null,"450386d0",null);var p=h.exports;var v={components:{CorvinCategoryListing:p},props:{categories:{type:Array,default(){return[]}}},data(){return{filterBy:""}},computed:{hasCategories(){return this.categories&&this.categories.length>0},filteredCategories(){if(this.filterBy){return this.categories.filter(t=>t.tags.includes(this.filterBy))}return this.categories},styleModifiers(){return this.listingType==="category"?"is-category-listing":""}}};var g=v;var f=a("X5Eg");var m=Object(u["a"])(g,r,s,false,null,"45605ee0",null);var _=e["a"]=m.exports},"2Kzn":function(t,e,a){"use strict";var r=a("B7QJ");var s=a.n(r);var i=s.a},"3jCI":function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"products-filters"},[a("div",{staticClass:"products",class:t.styleModifiers},t._l(t.filteredProducts,(function(e){return t.hasProducts?a("corvin-product-listing",{key:e.slug,attrs:{product:e,productStyle:t.listingType}}):t._e()})),1)])};var s=[];var i=a("JTJg");var n=a("Ztx5");var o=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"filters"},t._l(t.filters,(function(t){return a("corvin-store-filter",{key:t.filterName,attrs:{filter:t}})})),1)};var c=[];var d=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"filter dropdown"},[a("div",{staticClass:"dropdown-trigger"},[a("span",{attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu"},on:{click:function(e){return t.handleFilterDropDownClick(t.filter.title)}}},[a("span",[t._v(t._s(t.filter.title))])]),t._v(" "),a("span",{staticClass:"arrow-down"})]),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{id:t.filter.title,role:"menu"}},t._l(t.filter.options,(function(e){return a("span",{key:e.target,staticClass:"dropdown-item",on:{click:function(a){return t.handleFilterClick(e.target)}}},[t._v("\n        "+t._s(e.name)+"\n    ")])})),0)])};var l=[];var u={props:{filter:{type:Object,default(){return{}}}},methods:{handleFilterDropDownClick(t=null){if(!t){return}document.getElementById(t).classList.toggle("is-active")},handleFilterClick(t=null){if(!t){return}this.$eventBus.$emit("filter-products",t)}}};var h=u;var p=a("p73R");var v=a("KHd+");var g=Object(v["a"])(h,d,l,false,null,"7ac2b4e4",null);var f=g.exports;var m={components:{CorvinStoreFilter:f},data(){return{brands:[],categories:[],colors:[],filters:[]}},props:{products:{type:Array,default(){return[]}}},created(){this.setFilters()},methods:{clearAllFilters(){this.$eventBus.$emit("clear-filters")},setFilters(){this.products.forEach(t=>{this.brands.push(t.productBrand[0]);this.categories.push(t.productCategory[0]);this.colors.push(t.productColor)})}}};var _=m;var C=a("afW/");var y=Object(v["a"])(_,o,c,false,null,"17515a78",null);var S=y.exports;var w={components:{CorvinProductListing:n["a"],CorvinStoreFilters:S},props:{hasFilters:{type:Boolean,default(){return false}},listingType:{type:String,default(){return""}},products:{type:Array,default(){return[]}}},data(){return{filterBy:""}},computed:{hasProducts(){return this.products&&this.products.length>0},filteredProducts(){if(this.filterBy){return this.products.filter(t=>t.tags.includes(this.filterBy))}return this.products},styleModifiers(){return this.listingType==="category"?"is-category-listing":""}},created(){this.$eventBus.$on("filter-products",t=>{this.handleFilterProducts(t)});this.$eventBus.$on("clear-filters",()=>{this.handleClearFilters()})},methods:{handleClearFilters(){this.filterBy=null},handleFilterProducts(t){this.filterBy=t}}};var b=w;var k=a("2Kzn");var P=Object(v["a"])(b,r,s,false,null,"2738bacf",null);var q=e["a"]=P.exports},"6B3c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t.loading?a("corvin-loading"):a("main",{staticClass:"page store-item-page no-bottom-padding"},[a("div",{staticClass:"is-contained content-wrapper is-no-margin"},[a("h2",{class:t.pageHeadlineClass},[t._v("\n      Shop\n    ")]),t._v(" "),a("div",{staticClass:"breadcrumbs"},[a("doe-link",{attrs:{href:"/shop",text:"Shop Home","is-anchor":""}}),t._v("\n\n      /\n\n      "),t.hasCategoryLink?a("doe-link",{attrs:{href:"/shop/"+t.data.categorySlug,text:t.data.category,"is-anchor":""}}):t._e(),t._v("\n\n      /\n\n      "),t.hasBrand?a("p",{domProps:{innerHTML:t._s(t.data.productBrand[0].title)}}):t._e(),t._v("\n\n      /\n\n      "),a("p",{staticClass:"product-name",domProps:{innerHTML:t._s(t.data.productName)}})],1)]),t._v(" "),a("div",{staticClass:"is-contained content-wrapper is-small-margin"},[a("div",{staticClass:"product-item"},[t.hasPicture?a("div",{staticClass:"product-image"},[a("base-picture",{attrs:{picture:t.data.square[0]}})],1):t._e(),t._v(" "),a("div",{staticClass:"product-quick-facts"},[a("div",{staticClass:"product-overview"},[a("div",{staticClass:"product-brand"},[t.hasBrand?a("p",[t._v("\n              "+t._s(t.data.productBrand[0].title)+"\n            ")]):t._e()]),t._v(" "),t.hasName?a("h1",{staticClass:"product-name",domProps:{innerHTML:t._s(t.calculatedProductName)}}):t._e(),t._v(" "),t.data.productColor?a("p",{staticClass:"product-color"},[t._v("\n            "+t._s(t.data.productColor)+"\n          ")]):t._e(),t._v(" "),t.data.productPrice?a("p",{staticClass:"product-price"},[t._v("\n            "+t._s(t.data.productPrice)+"\n          ")]):t._e()]),t._v(" "),a("div",{staticClass:"product-meta"},[t.hasProductSqFtBox?a("p",[a("span",{staticClass:"product-label"},[t._v("SQ. FT. / BOX:")]),t._v(" "),t._v("\n            36.30\n          ")]):t._e(),t._v(" "),t.hasProductSize?a("p",[a("span",{staticClass:"product-label"},[t._v("Size:")]),t._v("\n            "+t._s(t.data.productSize)+"\n          ")]):t._e(),t._v(" "),t.hasProductThickness?a("p",[a("span",{staticClass:"product-label"},[t._v("Thickness:")]),t._v("\n            "+t._s(t.data.productThickness)+"\n          ")]):t._e(),t._v(" "),t.hasProductWarranty?a("p",[a("span",{staticClass:"product-label"},[t._v("Warranty:")]),t._v("\n            "+t._s(t._f("filterHtml")(t.data.productWarranty))+"\n          ")]):t._e(),t._v(" "),t.hasProductSpecies?a("p",[a("span",{staticClass:"product-label"},[t._v("Species:")]),t._v("\n            "+t._s(t.data.productSpecies)+"\n          ")]):t._e(),t._v(" "),t.hasProductJankaRating?a("p",[a("span",{staticClass:"product-label"},[t._v("Janka Rating (Hardiness):")]),t._v("\n            "+t._s(t.data.productJankaRating)+"\n          ")]):t._e(),t._v(" "),t.hasProductSpecs?a("p",[a("span",{staticClass:"product-label"},[t._v("Specs:")]),t._v("\n            "+t._s(t._f("filterHtml")(t.data.productSpecs))+"\n          ")]):t._e()]),t._v(" "),t.hasGallery?a("div",{staticClass:"product-gallery"},t._l(t.data.square,(function(t,e){return a("base-picture",{key:e,attrs:{picture:t}})})),1):t._e(),t._v(" "),a("doe-link",{staticClass:"calculate-sq-ft",attrs:{"is-button":"","is-blue":"",text:"Calculate Sq. Footage"},nativeOn:{click:function(e){return t.handleCalculateSqFt(e)}}})],1)])]),t._v("'\n\n  "),t.hasRelatedProducts?a("corvin-related-products",{attrs:{products:t.data.relatedProducts}}):t._e(),t._v(" "),t.showModal?a("doe-modal",{staticClass:"calculator-modal",on:{close:t.handleModalClose}},[a("div",{staticClass:"calculator"},[a("h3",[t._v("Cost Estimate")]),t._v(" "),a("p",[t._v("Enter the number of square feet needed and we will calculate the price for you.")]),t._v(" "),a("doe-input",{attrs:{field:"price",disabled:"","skip-validation":""},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}}),t._v(" "),a("doe-input",{attrs:{field:"feet"},model:{value:t.feet,callback:function(e){t.feet=e},expression:"feet"}}),t._v(" "),a("p",{staticClass:"total"},[t._v("\n        Estimated total: "+t._s(t.calculatedPrice)+"\n      ")])],1)]):t._e()],1)};var s=[];var i=a("toAj");var n=a("Rm1S");var o=a("UxlC");var c=a("KwuT");var d=a("wB7W");var l=a("vgCd");var u=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"related-products container"},[a("div",{staticClass:"content-wrapper"},[a("h2",[t._v("\n      Still Looking? You Might Also Like These Additional Options or\n      "),a("doe-link",{staticClass:"cta-link",attrs:{href:"/shop","is-anchor":"",text:"Shop All Floors›"}})],1),t._v(" "),a("div",{staticClass:"products"},t._l(t.products,(function(e){return t.hasProducts?a("corvin-product-listing",{key:e.id,attrs:{product:e,"show-product-content":false}}):t._e()})),1)])])};var h=[];var p=a("Ztx5");var v={components:{CorvinProductListing:p["a"]},props:{products:{type:Array,default(){return[]}},listingStyle:{type:String,default(){return"product"}}},computed:{hasProducts(){return this.products.length>0}}};var g=v;var f=a("niCC");var m=a("KHd+");var _=Object(m["a"])(g,u,h,false,null,"9b8ea8e6",null);var C=_.exports;var y={filters:{filterHtml(t){return t.replace("<p>","").replace("</p>","")}},components:{CorvinLoading:l["a"],CorvinRelatedProducts:C},mixins:[c["a"],d["a"]],data(){return{feet:"",showModal:false}},computed:{calculatedPrice(){const t=(parseFloat(this.price)*parseInt(this.feet,10)).toFixed(2);return isNaN(t)?"":t},calculatedProductName(){if(this.hasBrand){return this.data.productName.replace(this.data.productBrand[0].title,"")}return this.data.productName},hasBrand(){return"productBrand"in this.data&&this.data.productBrand&&this.data.productBrand.length>0},hasCategory(){return"category"in this.data&&this.data.category!==null&&this.data.category.length>0},hasCategorySlug(){return"categorySlug"in this.data&&this.data.categorySlug!==null&&this.data.categorySlug.length>0},hasCategoryLink(){return this.hasCategory&&this.hasCategorySlug},hasGallery(){return"square"in this.data&&this.data.square!==null&&this.data.square.length>1},hasName(){return"productName"in this.data&&this.data.productName!==null&&this.data.productName.length>0},hasPicture(){return"square"in this.data},hasProductColor(){return"productColor"in this.data&&this.data.productColor!==null&&this.data.productColor.length>0},hasProductJankaRating(){return"productJankaRating"in this.data&&this.data.productJankaRating!==null&&this.data.productJankaRating.length>0},hasProductPrice(){return"productPrice"in this.data&&this.data.productPrice!==null&&this.data.productPrice.length>0},hasProductSize(){return"productSize"in this.data&&this.data.productSize!==null&&this.data.productSize.length>0},hasProductSpecies(){return"productSpecies"in this.data&&this.data.productSpecies!==null&&this.data.productSpecies.length>0},hasProductSpecs(){return"productSpecs"in this.data&&this.data.productSpecs!==null&&this.data.productSpecs.length>0},hasProductSqFtBox(){return false},hasProductThickness(){return"productThickness"in this.data&&this.data.productThickness!==null&&this.data.productThickness.length>0},hasProductWarranty(){return"productWarranty"in this.data&&this.data.productWarranty!==null&&this.data.productWarranty.length>0},hasStyleNumber(){return"productStyleNumber"in this.data&&this.data.productStyleNumber!==null&&this.data.productStyleNumber.length>0},hasRelatedProducts(){return"relatedProducts"in this.data&&this.data.relatedProducts&&this.data.relatedProducts.length>0},pageHeadlineClass(){return this.isMobile?"is-h3":"is-h1"},price(){return this.data.productPrice.match(/[+-]?\d+(?:\.\d+)?/g)}},methods:{handleCalculateSqFt(){this.showModal=true},handleModalClose(){this.showModal=false}}};var S=y;var w=a("rOV2");var b=Object(m["a"])(S,r,s,false,null,"57c187fb",null);var k=e["default"]=b.exports},"8YUt":function(t,e,a){},"9j0D":function(t,e,a){"use strict";var r=a("8YUt");var s=a.n(r);var i=s.a},AYp5:function(t,e,a){},B7QJ:function(t,e,a){},CgiD:function(t,e,a){},KwuT:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a.d(e,"b",(function(){return c}));var r=a("4Brf");var s=a.n(r);var i=a("EnZy");var n=a.n(i);const o={props:{forceAjax:{type:Boolean,default(){return false}}},data(){return{data:{},handle:null,loadedViaJson:false,loading:!(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]),slug:null,url:null}},created(){this.loadData()},beforeMount(){if(this.loadedViaJson){this.loading=false}},activated(){this.updateHead()},methods:{afterLoadData(){},loadData(t=null,e=true){if(!this.forceAjax){if(window.data&&window.data.page&&window.data.page.url&&window.data.page.url===window.location.href.split("?")[0]){this.data=window.data.page;this.loadedViaJson=true;this.afterLoadData();if(e){this.updateHead()}return}}const a=window.location.pathname.split("/");a.shift();let r=a[0];let s=a[1];let i=a[2];if(r.length===0){r="home"}if(this.handle){r=this.handle}if(this.slug){s=this.slug}let n=s===undefined?"".concat(r):"".concat(r,"/").concat(s);n=i===undefined?n:"".concat(r,"/").concat(s,"/").concat(i);this.$axios.get(t||this.url||"/v1/".concat(n)).then(t=>{this.data=t.data;if(this.data.status){this.loading=false;return}this.afterLoadData();if(e){this.updateHead()}this.loading=false;if(this.$prerender){this.$eventBus.$emit("page-loaded",this.data.lastUpdated)}}).catch(t=>{if(t.response){console.log("Data:");console.log(t.response.data);console.log("Status:");console.log(t.response.status);console.log("Headers:");console.log(t.response.headers)}else if(t.request){console.log("Request:");console.log(t.request)}else{console.log("Error",t.message)}console.log("Config:");console.log(t.config);if(t.response&&t.response.status===404){this.$eventBus.$emit("error",404);return}this.$eventBus.$emit("error",500,t)})},updateHead(){let t="Corvin's Furniture of Bardstown";let e="";let a="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.data&&this.data.meta&&this.data.meta.title){t="".concat(this.data.meta.title)}if(this.data&&this.data.meta&&this.data.meta.description){e=this.data.metaDescription}if(this.data&&this.data.meta&&this.data.meta.socialImage&&this.data.meta.socialImage.url){a=this.data.socialImage.url}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=e;document.head.querySelector('meta[property="og:description"]').content=e;document.head.querySelector('meta[name="twitter:description"]').content=e;document.head.querySelector('meta[itemprop="description"]').content=e;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=a;document.head.querySelector('meta[name="twitter:image:src"]').content=a;document.head.querySelector('meta[itemprop="image"]').content=a;if(this.data&&this.data.canonicalUrl){if(document.head.querySelector("[rel='canonical']")){document.head.querySelector("[rel='canonical']").href=this.data.canonicalUrl}else{const t=document.createElement("link");t.rel="canonical";t.href=this.data.canonicalUrl;document.head.appendChild(t)}}else if(document.head.querySelector("[rel='canonical']")){const t=document.head.querySelector("[rel='canonical']");t.parentNode.removeChild(t)}if(this.data){this.$eventBus.$emit("set-breadcrumb",this.data.title)}}}};const c={data(){return{metaTitle:null,metaDescription:null,socialImage:null}},created(){this.updateHead()},mounted(){if(this.$prerender){this.$eventBus.$emit("page-loaded","na")}},activated(){this.updateHead()},methods:{updateHead(){let t="Corvin Furniture of Bardstown";let e="";let a="".concat(this.$cdnUrl,"/images/og-image.jpg");if(this.metaTitle){t="".concat(this.metaTitle)}if(this.metaDescription){e=this.metaDescription}if(this.socialImage){a=this.data.socialImage}document.title=t;document.head.querySelector('meta[property="og:title"]').content=t;document.head.querySelector('meta[name="twitter:title"]').content=t;document.head.querySelector('meta[itemprop="name"]').content=t;document.head.querySelector('meta[name="description"]').content=e;document.head.querySelector('meta[property="og:description"]').content=e;document.head.querySelector('meta[name="twitter:description"]').content=e;document.head.querySelector('meta[itemprop="description"]').content=e;document.head.querySelector('meta[property="og:url"]').content=window.location.href;document.head.querySelector('meta[name="twitter:url"]').content=window.location.href;document.head.querySelector('meta[property="og:image"]').content=a;document.head.querySelector('meta[name="twitter:image:src"]').content=a;document.head.querySelector('meta[itemprop="image"]').content=a}}}},NweO:function(t,e,a){},TqqQ:function(t,e,a){},WVEE:function(t,e,a){"use strict";var r=a("fmHT");var s=a.n(r);var i=s.a},X5Eg:function(t,e,a){"use strict";var r=a("NweO");var s=a.n(r);var i=s.a},ZlhO:function(t,e,a){},Ztx5:function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"product"},[a("h2",{staticClass:"product-title"},[a("doe-link",{attrs:{href:t.productLink},domProps:{innerHTML:t._s(t.product.productStyleNumber)}})],1),t._v(" "),a("div",{staticClass:"product-image"},[a("doe-link",{staticClass:"overlay-effect",attrs:{href:t.productLink}},[a("div")]),t._v(" "),a("base-picture",{attrs:{picture:t.picture}})],1),t._v(" "),a("div",{staticClass:"product-content"},[t.showProductContent?a("div",{staticClass:"details"},[a("p",{staticClass:"brand"},[t._v("\n        Brand: "),a("span",[t._v(t._s(t.product.productBrand[0].title))])]),t._v(" "),a("p",{staticClass:"color"},[t._v("\n        Color: "),a("span",[t._v(t._s(t.product.productColor))])])]):t._e(),t._v(" "),a("div",{staticClass:"link"},[a("doe-link",{attrs:{href:t.productLink,"is-blue-alt":""}},[t._v("\n        View details\n      ")])],1)])])};var s=[];var i={props:{product:{type:Object,default(){return{}}},productStyle:{type:String,default(){return""}},showProductContent:{type:Boolean,default(){return true}}},computed:{productLink(){if(this.showProductContent===false){return"/shop".concat(this.product.uri)}return"".concat(this.$route.path,"/").concat(this.product.slug)},picture(){if("square"in this.product){return this.product.square[0]}if("background"in this.product){return this.product.background}if("image"in this.product){return this.product.image}return{}}}};var n=i;var o=a("9j0D");var c=a("KHd+");var d=Object(c["a"])(n,r,s,false,null,"ec88e0f4",null);var l=e["a"]=d.exports},a4SA:function(t,e,a){},"afW/":function(t,e,a){"use strict";var r=a("a4SA");var s=a.n(r);var i=s.a},bypC:function(t,e,a){"use strict";var r=a("TqqQ");var s=a.n(r);var i=s.a},cahS:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t.loading?a("corvin-loading"):a("main",{staticClass:"page has-inset is-gapless products"},[t.hasHero?a("corvin-page-hero",{attrs:{hero:t.data.content.hero}}):t._e(),t._v(" "),t.hasProducts?a("corvin-categories",{staticClass:"is-contained content-wrapper",attrs:{categories:t.data.content.products.grid.items,"has-filters.boolean":"false","listing-type":"store"}}):t._e()],1)};var s=[];var i=a("KwuT");var n=a("vgCd");var o=a("do7L");var c=a("0/lV");var d={components:{CorvinLoading:n["a"],CorvinPageHero:o["a"],CorvinCategories:c["a"]},mixins:[i["a"]],data(){return{jsonUrl:"/".concat(this.$api.pages.shop)}},computed:{hasContent(){return"content"in this.data},hasHero(){return this.hasContent&&"hero"in this.data.content},hasProducts(){return this.hasContent&&"products"in this.data.content&&"grid"in this.data.content.products&&"items"in this.data.content.products.grid&&this.data.content.products.grid.items.length>0}},activated(){this.$emit("page-activated");this.$eventBus.$emit("page-loaded")}};var l=d;var u=a("KHd+");var h=Object(u["a"])(l,r,s,false,null,null,null);var p=e["default"]=h.exports},do7L:function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"page-hero",class:t.modifiers},[a("div",{staticClass:"page-hero-content is-contained content-wrapper"},[t.hasHeadline?a("h1",{domProps:{innerHTML:t._s(t.hero.headline)}}):t._e(),t._v(" "),t.hasContent?a("div",{staticClass:"page-hero-intro"},[a("div",{domProps:{innerHTML:t._s(t.hero.content)}})]):t._e()]),t._v(" "),t.hasMedia?a("div",{staticClass:"page-hero-media"},[a("base-picture",{attrs:{picture:t.hero.background}})],1):t._e()])};var s=[];var i={props:{hero:{type:Object,default(){return{}}}},computed:{modifiers(){return{"has-content":this.hasContent,"has-media":this.hasMedia}},hasContent(){return this.hero&&"content"in this.hero&&this.hero.content.length>0},hasHeadline(){return this.hero&&"headline"in this.hero&&this.hero.headline.length>0},hasMedia(){return this.hero&&"background"in this.hero&&"url"in this.hero.background&&this.hero.background.url.length>0}}};var n=i;var o=a("f6Vo");var c=a("KHd+");var d=Object(c["a"])(n,r,s,false,null,"ad719bce",null);var l=e["a"]=d.exports},f6Vo:function(t,e,a){"use strict";var r=a("CgiD");var s=a.n(r);var i=s.a},fmHT:function(t,e,a){},niCC:function(t,e,a){"use strict";var r=a("pofE");var s=a.n(r);var i=s.a},p73R:function(t,e,a){"use strict";var r=a("AYp5");var s=a.n(r);var i=s.a},pofE:function(t,e,a){},qGIM:function(t,e,a){"use strict";var r=a("x2At");var s=a.n(r);var i=s.a},rOV2:function(t,e,a){"use strict";var r=a("ZlhO");var s=a.n(r);var i=s.a},vSmc:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t.loading?a("corvin-loading"):a("main",{staticClass:"page has-inset is-gapless products no-bottom-padding"},[t.hasHero?a("corvin-page-hero",{attrs:{hero:{headline:t.data.title,background:t.data.image,content:t.description}}}):t._e(),t._v(" "),t.hasProducts?a("corvin-products",{staticClass:"is-contained content-wrapper",attrs:{products:t.data.products}}):t._e(),t._v(" "),t.hasRelatedCategories?a("corvin-related-categories",{attrs:{categories:t.data.relatedCategories,"current-category":t.data.title}}):t._e()],1)};var s=[];var i=a("KwuT");var n=a("vgCd");var o=a("do7L");var c=a("3jCI");var d=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"related-categories container"},[a("div",{staticClass:"content-wrapper"},[a("h2",[t._v("\n      Having second thoughts about "+t._s(t.currentCategory)+"?\n      "),a("doe-link",{staticClass:"cta-link",attrs:{href:"/shop","is-anchor":"",text:"Try›"}})],1),t._v(" "),a("corvin-categories",{attrs:{categories:t.categories}})],1)])};var l=[];var u=a("0/lV");var h={components:{CorvinCategories:u["a"]},props:{categories:{type:Array,default(){return[]}},currentCategory:{type:String,default(){return""}}},computed:{hasCategories(){return this.categories.length>0}}};var p=h;var v=a("qGIM");var g=a("KHd+");var f=Object(g["a"])(p,d,l,false,null,"1e45759a",null);var m=f.exports;var _={components:{CorvinLoading:n["a"],CorvinPageHero:o["a"],CorvinProducts:c["a"],CorvinRelatedCategories:m},mixins:[i["a"]],data(){return{handle:"product-categories",slug:this.$route.params.category}},computed:{description(){if("fullDescription"in this.data&&this.data.fullDescription&&this.data.fullDescription.length>0){return this.data.fullDescription}if("shortDescription"in this.data&&this.data.shortDescription&&this.data.shortDescription.length>0){return this.data.shortDescription}return"description needed"},hasContent(){return"content"in this.data},hasHero(){return"image"in this.data&&"title"in this.data&&"fullDescription"in this.data},hasProducts(){return"products"in this.data&&this.data.products.length>0},hasRelatedCategories(){return"relatedCategories"in this.data&&this.data.relatedCategories&&this.data.relatedCategories.length>0}},activated(){this.$emit("page-activated");this.$eventBus.$emit("page-loaded")}};var C=_;var y=Object(g["a"])(C,r,s,false,null,null,null);var S=e["default"]=y.exports},vgCd:function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t._m(0)};var s=[function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"overlay"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"loading"},[a("div",{staticClass:"bounceball"}),t._v(" "),a("div",{staticClass:"text"},[t._v("LOADING")])])])])}];var i={};var n=i;var o=a("bypC");var c=a("KHd+");var d=Object(c["a"])(n,r,s,false,null,"e37ae440",null);var l=e["a"]=d.exports},x2At:function(t,e,a){}}]);