(window["webpackJsonpcorvin"]=window["webpackJsonpcorvin"]||[]).push([[9],{"+CCM":function(t,e,r){},"2sF9":function(t,e,r){"use strict";var i=r("+CCM");var a=r.n(i);var o=a.a},"6B3c":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("main",{staticClass:"page store-item-page"},[r("h2",[t._v("Store")]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"product-image"},[r("div",{staticClass:"product-category"},[t._v(t._s(t.activeProduct.category))]),t._v(" "),r("img",{attrs:{alt:"",src:"https://placehold.it/1600x900"}}),t._v(" "),r("div",{staticClass:"product-quick-facts"},[r("h1",[t._v(t._s(t.activeProduct.title))]),t._v(" "),r("p",[t._v("Style No. "+t._s(t.activeProduct.style))]),t._v(" "),r("p",[t._v(t._s(t.activeProduct.price))]),t._v(" "),t._l(t.activeProduct.gallery,function(t,e){return r("img",{key:e,attrs:{src:t,alt:""}})}),t._v(" "),r("p",[t._v(t._s(t.activeProduct.color))]),t._v(" "),r("p",[t._v(t._s(t.activeProduct.brand))]),t._v(" "),r("p",[t._v(t._s(t.activeProduct.width))])],2)]),t._v(" "),r("div",{staticClass:"product-detail"},[r("div",{staticClass:"description"},[r("h3",[t._v("Description")]),t._v(" "),r("p",[t._v(t._s(t.activeProduct.description))])]),t._v(" "),r("div",{staticClass:"good-for"},[r("h4",[t._v("Good for")]),t._v(" "),r("corvin-list",{attrs:{items:t.activeProduct.goodFor}})],1),t._v(" "),r("div",{staticClass:"care-items"},[r("h4",[t._v("Product care")]),t._v(" "),r("corvin-list",{attrs:{items:t.activeProduct.productCareItems}})],1)])]),t._v(" "),r("div",{staticClass:"container"},[r("h2",[t._v("You might also like")]),t._v(" "),t._l(t.relatedProducts,function(t){return r("corvin-product-listing",{key:t.id,attrs:{product:t}})})],2)])};var a=[];var o=r("TeQF");var s=r("fbCW");var n=r("yq1k");var l=r("JTJg");var c=r("UxlC");var u=r("oRqQ");var d=r("Ztx5");var p={components:{CorvinProductListing:d["a"]},data:function t(){return{activeProduct:{},products:u["c"],relatedProducts:[]}},activated:function t(){var e=this;this.activeProduct=u["c"].find(function(t){return t.slug===window.location.pathname.replace("/store/","")});this.relatedProducts=u["c"].filter(function(t){return e.activeProduct.relatedProducts.includes(t.id)});this.$emit("page-activated");this.$eventBus.$emit("page-loaded")}};var v=p;var m=r("KHd+");var g=Object(m["a"])(v,i,a,false,null,null,null);var h=e["default"]=g.exports},"8ofS":function(t,e,r){},BZPm:function(t,e,r){"use strict";var i=r("QYly");var a=r.n(i);var o=a.a},IsE6:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("main",{staticClass:"page has-inset is-gapless products"},[r("corvin-page-hero",{attrs:{hero:t.computedHeadingContent}}),t._v(" "),r("corvin-products",{staticClass:"is-contained",attrs:{"has-filters":t.showFilters,"listing-type":t.computedListingType}})],1)};var a=[];var o=r("do7L");var s=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("div",{staticClass:"products-filters"},[t.hasFilters?r("corvin-store-filters"):t._e(),t._v(" "),r("div",{staticClass:"products-listing",class:t.styleModifiers},t._l(t.filteredProducts,function(e){return t.hasProducts?r("corvin-product-listing",{key:e.slug,attrs:{product:e,productStyle:t.listingType}}):t._e()}),1)],1)};var n=[];var l=r("TeQF");var c=r("yq1k");var u=r("JTJg");var d=r("oRqQ");var p=r("Ztx5");var v=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("div",{staticClass:"filters"},t._l(t.filters,function(t){return r("corvin-store-filter",{key:t.filterName,attrs:{filter:t}})}),1)};var m=[];var g=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("div",{staticClass:"filter dropdown"},[r("div",{staticClass:"dropdown-trigger"},[r("span",{attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu"},on:{click:function(e){return t.handleFilterDropDownClick(t.filter.title)}}},[r("span",[t._v(t._s(t.filter.title))])]),t._v(" "),r("span",{staticClass:"arrow-down"})]),t._v(" "),r("div",{staticClass:"dropdown-menu",attrs:{id:t.filter.title,role:"menu"}},t._l(t.filter.options,function(e){return r("span",{key:e.target,staticClass:"dropdown-item",on:{click:function(r){return t.handleFilterClick(e.target)}}},[t._v("\n        "+t._s(e.name)+"\n    ")])}),0)])};var h=[];var f={props:{filter:{type:Object,default:function t(){return{}}}},methods:{handleFilterDropDownClick:function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(!e){return}document.getElementById(e).classList.toggle("is-active")},handleFilterClick:function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(!e){return}this.$eventBus.$emit("filter-products",e)}}};var y=f;var _=r("p73R");var C=r("KHd+");var b=Object(C["a"])(y,g,h,false,null,"7ac2b4e4",null);var w=b.exports;var k={components:{CorvinStoreFilter:w},data:function t(){return{filters:d["a"]}},methods:{clearAllFilters:function t(){this.$eventBus.$emit("clear-filters")}}};var P=k;var F=r("BZPm");var x=Object(C["a"])(P,v,m,false,null,"e6d5038c",null);var T=x.exports;var N={components:{CorvinProductListing:p["a"],CorvinStoreFilters:T},props:{hasFilters:{type:Boolean,default:function t(){return false}},listingType:{type:String,default:function t(){return""}}},data:function t(){return{filterBy:"",products:d["c"],productCategories:d["b"]}},computed:{activeProducts:function t(){return this.listingType==="category"?d["b"]:d["c"]},hasProducts:function t(){return this.products&&this.products.length>0},filteredProducts:function t(){var e=this;if(this.filterBy){return this.activeProducts.filter(function(t){return t.tags.includes(e.filterBy)})}return this.activeProducts},styleModifiers:function t(){return this.listingType==="category"?"is-category-listing":""}},created:function t(){var e=this;this.$eventBus.$on("filter-products",function(t){e.handleFilterProducts(t)});this.$eventBus.$on("clear-filters",function(){e.handleClearFilters()})},methods:{handleClearFilters:function t(){this.filterBy=null},handleFilterProducts:function t(e){this.filterBy=e}}};var B=N;var E=r("KbWc");var S=Object(C["a"])(B,s,n,false,null,"fc4d381a",null);var q=S.exports;var L={headline:"What Are You Looking For?",content:"At Corvin’s, we pride ourselves on championing every client’s flooring with passion and integrity. We offer a vast array of different options in hardwood, laminate, tile, vinyl and carpet. We also install flooring and custom showers. View our floor offerings below.",backgroundImage:{alt:"Image of a man cutting tile.",url:"../../images/store-landing-hero.jpg"}};var $={headline:"Shop All Floors",content:"Not sure what you’re looking for? No problem. Filter all floors below by style, category (i.e. hardwood vs. tile, etc.), color, price and brand. Let us help you create the room you’re dreaming of."};var H={components:{CorvinPageHero:o["a"],CorvinProducts:q},computed:{categoryStyle:function t(){return this.$route.params.slug===undefined},computedHeadingContent:function t(){return this.categoryStyle?L:$},computedListingType:function t(){return this.categoryStyle?"category":""},showFilters:function t(){return!this.categoryStyle}},activated:function t(){this.$emit("page-activated");this.$eventBus.$emit("page-loaded")}};var I=H;var M=Object(C["a"])(I,i,a,false,null,null,null);var W=e["default"]=M.exports},KbWc:function(t,e,r){"use strict";var i=r("lXTY");var a=r.n(i);var o=a.a},QYly:function(t,e,r){},WGZJ:function(t,e,r){},Ztx5:function(t,e,r){"use strict";var i=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("div",{staticClass:"product"},[r("h2",{staticClass:"product-title",domProps:{innerHTML:t._s(t.product.title)}}),t._v(" "),r("img",{staticClass:"product-image",attrs:{alt:t.product.image.alt,src:t.product.image.src}}),t._v(" "),t.isCategoryStyle?r("div",{staticClass:"category-content"},[t._l(t.product.description,function(e){return r("p",{staticClass:"product-description",domProps:{innerHTML:t._s(e)}})}),t._v(" "),r("doe-link",{staticClass:"read-more",attrs:{to:t.product.slug,"is-anchor":""}},[t._v("\n      Read More\n    ")])],2):r("div",{staticClass:"product-content"},[r("div",{staticClass:"details"},[r("p",{staticClass:"brand"},[t._v("Brand: "),r("span",[t._v(t._s(t.product.brand))])]),t._v(" "),r("p",{staticClass:"color"},[t._v("Color: "),r("span",[t._v(t._s(t.product.color))])])]),t._v(" "),r("div",{staticClass:"link"},[r("doe-link",{attrs:{to:"/store/"+t.product.slug,"is-button":"","is-blue-alt":""}},[t._v("\n        View details\n      ")])],1)])])};var a=[];var o={props:{categoryStyle:{type:Boolean,default:function t(){return false}},product:{type:Object,default:function t(){return{}}},productStyle:{type:String,default:function t(){return""}}},computed:{isCategoryStyle:function t(){return this.productStyle==="category"}}};var s=o;var n=r("2sF9");var l=r("KHd+");var c=Object(l["a"])(s,i,a,false,null,"48fb871f",null);var u=e["a"]=c.exports},do7L:function(t,e,r){"use strict";var i=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("div",{staticClass:"page-hero",class:t.modifiers},[r("div",{staticClass:"page-hero-content is-contained"},[t.hasHeadline?r("h1",{domProps:{innerHTML:t._s(t.hero.headline)}}):t._e(),t._v(" "),t.hasContent?r("div",{staticClass:"page-hero-intro"},[r("p",{domProps:{innerHTML:t._s(t.hero.content)}})]):t._e()]),t._v(" "),t.hasMedia?r("div",{staticClass:"page-hero-media"},[r("img",{attrs:{alt:t.hero.backgroundImage.alt,src:t.hero.backgroundImage.url}})]):t._e()])};var a=[];var o={props:{hero:{type:Object,default:function t(){return{}}}},computed:{modifiers:function t(){return{"has-content":this.hasContent,"has-media":this.hasMedia}},hasContent:function t(){return this.hero&&"content"in this.hero&&this.hero.content.length>0},hasHeadline:function t(){return this.hero&&"headline"in this.hero&&this.hero.headline.length>0},hasMedia:function t(){return this.hero&&"backgroundImage"in this.hero&&"url"in this.hero.backgroundImage&&this.hero.backgroundImage.url.length>0}}};var s=o;var n=r("kWt4");var l=r("KHd+");var c=Object(l["a"])(s,i,a,false,null,"0c8c8f8e",null);var u=e["a"]=c.exports},kWt4:function(t,e,r){"use strict";var i=r("WGZJ");var a=r.n(i);var o=a.a},lXTY:function(t,e,r){},oRqQ:function(t,e,r){"use strict";r.d(e,"a",function(){return i});r.d(e,"c",function(){return a});r.d(e,"b",function(){return o});var i=[{slug:"/",title:"Floor style",options:[]},{slug:"/",title:"Category",options:[]},{slug:"/",title:"Color",options:[]},{slug:"/",title:"Price",options:[]},{slug:"/",title:"Brand",options:[]}];var a=[{brand:"Bella Cerra",category:"",color:"Golden Oak",description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est."],goodFor:[],image:{alt:"",src:"https://satyr.io/400x400"},slug:"/bella-cerra",title:"Church Hill Oak",price:"",productCare:[],styleNumber:"",width:""},{brand:"Bruce",category:"",color:"Gunstock",description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est."],goodFor:[],image:{alt:"",src:"https://satyr.io/400x400"},slug:"/",title:"Waltham Plank",price:"",productCare:[],styleNumber:"",width:""},{brand:"Johnson",category:"",color:"Burlap",description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est."],goodFor:[],image:{alt:"",src:"https://satyr.io/400x400"},slug:"/",title:"Maple Distressed",price:"",productCare:[],styleNumber:"",width:""},{brand:"Johnson",category:"",color:"Toscana",description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est."],goodFor:[],image:{alt:"",src:"https://satyr.io/400x400"},slug:"/",title:"Renaissance Hickory",price:"",productCare:[],styleNumber:"",width:""},{brand:"Shaw",category:"",color:"Sugar Cane 295",description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est."],goodFor:[],image:{alt:"",src:"https://satyr.io/400x400"},slug:"/",title:"Barlow Road",price:"",productCare:[],styleNumber:"",width:""},{brand:"Timeless Designs",category:"",color:"Durango",description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est."],goodFor:[],image:{alt:"",src:"https://satyr.io/400x400"},slug:"/",title:"Solid Maple",price:"",productCare:[],styleNumber:"",width:""},{brand:"Timeless Designs",category:"",color:"Bronze Blend",description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est."],goodFor:[],image:{alt:"",src:"https://satyr.io/400x400"},slug:"/",title:"Acacia",price:"",productCare:[],styleNumber:"",width:""},{brand:"WFS Flooring",category:"",color:"Gunstock",description:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est."],goodFor:[],image:{alt:"",src:"https://satyr.io/400x400"},slug:"/",title:"Sanibel Oak",price:"",productCare:[],styleNumber:"",width:""}];var o=[{title:"Carpet",description:["Rich and inviting, hardwood makes a distinctive statement. Because of a great range of natural variations—from boards with extreme character, graining, and …"],image:{alt:"Carpet image",src:"https://satyr.io/530x380"},slug:"/product-category/carpet"},{title:"Solid Hardwood",description:[" Carpet has so many things going for it. It’s soft, safe, warm and quiet. It’s stain-resistant and gives excellent value for the price—and it saves energy. Carpet is …"],image:{alt:"image",src:"https://satyr.io/530x380"},slug:"/product-category/solid-hardwood"},{title:"Engineered Hardwood",description:["We need someone to write a three line sentence about engineered hardwood for this space. Can really just be an introduction to another paragraph describing …"],image:{alt:"image",src:"https://satyr.io/530x380"},slug:"/product-category/engineered-hardwood"},{title:"Laminate",description:["Appealing hardwood visuals and marvelous slate and stone looks are the hallmark of today’s laminate. Laminate is great for busy families and simply looks…"],image:{alt:"image",src:"https://satyr.io/530x380"},slug:"/product-category/laminate"},{title:"Tile & Stone",description:["Carpet has so many things going for it. It’s soft, safe, warm and quiet. It’s stain-resistant and gives excellent value for the price—and it saves energy. Carpet is also prov…"],image:{alt:"image",src:"https://satyr.io/530x380"},slug:"/product-category/tile-stone"},{title:"Vinyl Plank",description:["We need someone to write a three line sentence about engineered hardwood for this space. Can really just be an introduction to another paragraph describing …"],image:{alt:"image",src:"https://satyr.io/530x380"},slug:"/product-category/vinyl-plank"}];var s=[{email:"title@corvinfurniture.com",name:"Employee Name",phone:"(502) - 555-5555",title:"Employee Title"},{email:"title@corvinfurniture.com",name:"Employee name",phone:"(502) - 555-5555",title:"Employee Title"},{email:"title@corvinfurniture.com",name:"Employee Name",phone:"(502) - 555-5555",title:"Employee Title"},{email:"name@corvinfurniture.com",name:"Employee Name",phone:"(502) - 555-5555",title:"Employee Title"},{email:"name@corvinfurniture.com",name:"Employee Name",phone:"(502) - 555-5555",title:"Employee Title"},{email:"name@corvinfurniture.com",name:"Employee Name",phone:"(502) - 555-5555",title:"Employee Title"},{email:"name@corvinfurniture.com",name:"Employee Name",phone:"(502) - 555-5555",title:"Employee Title"},{email:"name@corvinfurniture.com",name:"Employee Name",phone:"(502) - 555-5555",title:"Employee Title"}]},p73R:function(t,e,r){"use strict";var i=r("8ofS");var a=r.n(i);var o=a.a}}]);