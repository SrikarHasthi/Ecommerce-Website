(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var i=a(1),r=a(12),c=a.n(r),n=a(2),s=a(15),o=a(14),l=a(0),d=function(){return Object(l.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Shopping Mall"})})})},h=a(3),p="ADD_TO_CART",m="REMOVE_FROM_CART",u="FILTER_SELECTED",j="SEARCH_SELECTED",g="PAGINATION",b=function(e){return{type:p,payload:e}},f=function(e){return{type:u,payload:e}},O=function(e){return{type:g,payload:e}},y=(a(31),function(e){var t=Object(n.b)(),a=Object(h.f)();return Object(l.jsxs)("div",{className:"col-4 product-card",children:[Object(l.jsx)("div",{onClick:function(){a.push("/productdetail/".concat(e.data.id))},className:"product-img",children:Object(l.jsx)("img",{alt:"",src:e.data.image})}),Object(l.jsxs)("div",{className:"product-card-info",children:[e.data.title.slice(0,25),"..."]}),Object(l.jsxs)("div",{className:"product-buy-btn",children:[Object(l.jsxs)("h5",{className:"product-price",children:["$",e.data.price]}),Object(l.jsx)("button",{onClick:function(){t(b(e.data.id)),alert("Item added to cart")},className:"buy-btn",children:"Buy"})]})]})}),x=(a(32),a(20)),v=function(){var e=Object(n.c)((function(e){return e.data})),t=Object(x.a)(new Set(e.map((function(e){return e.category})))),a=Object(n.b)(),i=Object(n.c)((function(e){return e.filter}));return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("ul",{className:"list-group",style:{cursor:"pointer"},children:[Object(l.jsx)("li",{onClick:function(){a(f("All Items"))},className:"list-group-item ".concat("All Items"===i?"active":""),"aria-current":"true",children:"ALL ITEMS"}),t.map((function(e){return Object(l.jsx)("li",{onClick:function(){a(f(e)),a(O({currPage:1}))},className:"list-group-item ".concat(i===e?"active":""),children:e.toUpperCase()},e)}))]})})},N=(a(33),function(){var e=Object(n.b)();return Object(l.jsx)("div",{className:"row mb-4",children:Object(l.jsx)("div",{className:"col-xl-5 col-lg-5 col-md-6 col-sm-12",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row d-flex justify-content-center search-outer",children:Object(l.jsx)("div",{className:"d-flex justify-content-center search-inner",children:Object(l.jsxs)("div",{className:"search",children:[" ",Object(l.jsx)("input",{onChange:function(t){var a;e((a=t.currentTarget.value,{type:j,payload:a})),e(O({currPage:1}))},type:"text",className:"search-input",placeholder:"Search...",name:""})," ",Object(l.jsx)("a",{href:"/#",className:"search-icon",children:Object(l.jsx)("span",{className:"material-icons-outlined",children:" search "})})," "]})})})})})})}),k=function(){for(var e=Object(n.c)((function(e){return e.pagination})),t=e.numberOfPages,a=e.currPage,i=Object(n.b)(),r=[],c=1;c<=t;c++)r.push(c);return Object(l.jsx)("nav",{"aria-label":"Page navigation example",children:Object(l.jsx)("ul",{className:"pagination",children:r.map((function(e){return Object(l.jsx)("li",{onClick:function(){i(O({currPage:e}))},className:"page-item ".concat(e===a?"active":""),children:Object(l.jsx)("a",{href:"/#",className:"page-link",children:e})},e)}))})})},S=function(){var e=Object(h.f)(),t=Object(n.b)(),a=Object(n.c)((function(e){return e.data})),r=Object(n.c)((function(e){return e.filter})),c=Object(n.c)((function(e){return e.searchValue})),s=Object(n.c)((function(e){return e.pagination})),o=a.filter((function(e){return"All Items"===r||e.category===r}));o=o.filter((function(e){var t=e.title;t=t.toLowerCase();var a=c.toLowerCase();return t.includes(a)}));var d=Math.ceil(o.length/9);Object(i.useEffect)((function(){t(O({numberOfPages:d}))}),[d,t]);var p=9*(s.currPage-1),m=Math.min(o.length,9*s.currPage),u=o.slice(p,m);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"main-container",children:[Object(l.jsx)("div",{className:"sliding-container",children:Object(l.jsx)("div",{className:"sliding-container-two",children:Object(l.jsxs)("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel",children:[Object(l.jsxs)("ol",{className:"carousel-indicators",children:[Object(l.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),Object(l.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),Object(l.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})]}),Object(l.jsxs)("div",{className:"carousel-inner",children:[Object(l.jsx)("div",{className:"carousel-item active",children:Object(l.jsx)("img",{className:"d-block w-100",src:"https://www.annfone.com/img/cms/mobiles-phones-banner.png",alt:"First slide"})}),Object(l.jsx)("div",{className:"carousel-item",children:Object(l.jsx)("img",{className:"d-block w-100",src:"https://i.pinimg.com/originals/45/de/10/45de10991f7f94728f80339cd4c8e2f9.png",alt:"Second slide"})}),Object(l.jsx)("div",{className:"carousel-item",children:Object(l.jsx)("img",{className:"d-block w-100",src:"https://realkart.in/images/home/slide-2.jpg",alt:"Third slide"})})]}),Object(l.jsxs)("a",{className:"carousel-control-prev carousel-cp-btn",href:"#carouselExampleIndicators",role:"button","data-slide":"prev",children:[Object(l.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(l.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(l.jsxs)("a",{className:"carousel-control-next carousel-cp-btn",href:"#carouselExampleIndicators",role:"button","data-slide":"next",children:[Object(l.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(l.jsx)("span",{className:"sr-only",children:"Next"})]})]})})}),Object(l.jsxs)("div",{className:"row m-5",children:[Object(l.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-12",children:Object(l.jsx)(v,{})}),Object(l.jsxs)("div",{className:"col-xl-9 col-lg-9 col-md-6 col-sm-12",children:[Object(l.jsx)(N,{}),Object(l.jsx)("div",{className:"product-container",children:Object(l.jsx)("div",{className:"row",children:u.map((function(e,t){return Object(l.jsx)(y,{data:e},t)}))})}),Object(l.jsx)("div",{style:{marginLeft:"2rem"},children:Object(l.jsx)(k,{})})]})]}),Object(l.jsx)("button",{onClick:function(){e.push("/cart")},className:"cart-btn",children:Object(l.jsx)("span",{className:"material-icons",children:"shopping_cart"})})]})})},w=(a(34),function(){var e=Object(h.f)("/cart"),t=Object(n.b)(),a=Object(h.g)().id,i=Object(n.c)((function(e){return e.data})).filter((function(e){return e.id==a}))[0];return Object(l.jsxs)("div",{className:"productdetail-container",children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12",children:Object(l.jsx)("div",{className:"productdetail-img ",children:Object(l.jsx)("img",{alt:"",src:i.image})})}),Object(l.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12",children:Object(l.jsxs)("div",{className:"productdetail-info",children:[Object(l.jsx)("h2",{children:i.title}),Object(l.jsx)("h5",{children:i.description}),Object(l.jsx)("span",{className:"productdetail-price",children:Object(l.jsxs)("h5",{children:["$",i.price]})}),Object(l.jsx)("button",{onClick:function(){t(b(a)),alert("Item added to cart")},children:"Add to Cart"})]})})]}),Object(l.jsx)("button",{onClick:function(){e.push("/cart")},className:"cart-btn",children:Object(l.jsx)("span",{className:"material-icons",children:"shopping_cart"})})]})}),C=(a(35),function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e.data})).filter((function(e){return e.qty>0})),a=0,i=0;return Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-sm-12",children:Object(l.jsx)("div",{className:"cart-container",children:Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"#"}),Object(l.jsx)("th",{scope:"col"}),Object(l.jsx)("th",{scope:"col",className:"table-name",children:"Name"}),Object(l.jsx)("th",{scope:"col",children:"Price"}),Object(l.jsx)("th",{scope:"col",children:"Quantity"}),Object(l.jsx)("th",{scope:"col",children:"Amount"}),Object(l.jsx)("th",{scope:"col"})]})}),Object(l.jsxs)("tbody",{children:[t.map((function(t,r){return i=t.price*t.qty,a+=i,Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"row",children:r+1}),Object(l.jsx)("td",{className:"table-image",children:Object(l.jsx)("img",{alt:"",src:t.image})}),Object(l.jsx)("td",{className:"table-name",children:t.title}),Object(l.jsxs)("td",{children:["$",t.price]}),Object(l.jsx)("td",{children:t.qty}),Object(l.jsxs)("td",{children:["$",(t.price*t.qty).toFixed(2)]}),Object(l.jsx)("td",{children:Object(l.jsx)("span",{onClick:function(){var a;e((a=t.id,{type:m,payload:a}))},className:"material-icons-outlined delete",children:"delete"})})]},r)})),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{children:"Total"}),Object(l.jsxs)("td",{children:["$",a]}),Object(l.jsx)("td",{})]})]})]})})})})}),_=function(){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(h.c,{children:[Object(l.jsx)(h.a,{path:"/productdetail/:id",children:Object(l.jsx)(w,{})}),Object(l.jsx)(h.a,{path:"/cart",children:Object(l.jsx)(C,{})}),Object(l.jsx)(h.a,{path:"/",children:Object(l.jsx)(S,{})})]})]})},A=a(10),L=[{id:1,title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",price:109.95,description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",category:"men's clothing",image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",rating:{rate:3.9,count:120}},{id:2,title:"Mens Casual Premium Slim Fit T-Shirts ",price:22.3,description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",category:"men's clothing",image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",rating:{rate:4.1,count:259}},{id:3,title:"Mens Cotton Jacket",price:55.99,description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",category:"men's clothing",image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",rating:{rate:4.7,count:500}},{id:4,title:"Mens Casual Slim Fit",price:15.99,description:"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",category:"men's clothing",image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",rating:{rate:2.1,count:430}},{id:5,title:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",price:695,description:"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",category:"jewelery",image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",rating:{rate:4.6,count:400}},{id:6,title:"Solid Gold Petite Micropave ",price:168,description:"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",category:"jewelery",image:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",rating:{rate:3.9,count:70}},{id:7,title:"White Gold Plated Princess",price:9.99,description:"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",category:"jewelery",image:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",rating:{rate:3,count:400}},{id:8,title:"Pierced Owl Rose Gold Plated Stainless Steel Double",price:10.99,description:"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",category:"jewelery",image:"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",rating:{rate:1.9,count:100}},{id:9,title:"WD 2TB Elements Portable External Hard Drive - USB 3.0 ",price:64,description:"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user\u2019s hardware configuration and operating system",category:"electronics",image:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",rating:{rate:3.3,count:203}},{id:10,title:"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",price:109,description:"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5\u201d hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",category:"electronics",image:"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",rating:{rate:2.9,count:470}},{id:11,title:"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",price:109,description:"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",category:"electronics",image:"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",rating:{rate:4.8,count:319}},{id:12,title:"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",price:114,description:"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",category:"electronics",image:"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",rating:{rate:4.8,count:400}},{id:13,title:"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",price:599,description:"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",category:"electronics",image:"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",rating:{rate:2.9,count:250}},{id:14,title:"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) \u2013 Super Ultrawide Screen QLED ",price:999.99,description:"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",category:"electronics",image:"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",rating:{rate:2.2,count:140}},{id:15,title:"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",price:56.99,description:"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",category:"women's clothing",image:"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",rating:{rate:2.6,count:235}},{id:16,title:"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",price:29.95,description:"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",category:"women's clothing",image:"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",rating:{rate:2.9,count:340}},{id:17,title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",price:39.99,description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",category:"women's clothing",image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",rating:{rate:3.8,count:679}},{id:18,title:"MBJ Women's Solid Short Sleeve Boat Neck V ",price:9.85,description:"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",category:"women's clothing",image:"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",rating:{rate:4.7,count:130}},{id:19,title:"Opna Women's Short Sleeve Moisture",price:7.95,description:"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",category:"women's clothing",image:"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",rating:{rate:4.5,count:146}},{id:20,title:"DANVOUY Womens T Shirt Casual Cotton Short",price:12.99,description:"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",category:"women's clothing",image:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",rating:{rate:3.6,count:145}}].map((function(e){return Object(A.a)(Object(A.a)({},e),{},{qty:0})})),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,a=[],i=-1;switch(t.type){case p:return(a=e.map((function(e){return e})))[i=t.payload-1].qty=a[i].qty+1,a;case m:return(a=e.map((function(e){return e})))[i=t.payload-1].qty>0&&(a[i].qty=a[i].qty-1),a;default:return e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"All Items",t=arguments.length>1?arguments[1]:void 0;return t.type===u?t.payload:e},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return t.type===j?t.payload:e},I={numberOfPages:1,currPage:1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type===g?Object(A.a)(Object(A.a)({},e),t.payload):e},H=Object(s.a)({data:P,filter:D,searchValue:E,pagination:T}),R=Object(s.b)(H);c.a.render(Object(l.jsx)(n.a,{store:R,children:Object(l.jsx)(_,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.93c13b05.chunk.js.map