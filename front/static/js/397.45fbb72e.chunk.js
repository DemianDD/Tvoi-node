"use strict";(self.webpackChunktvoishop=self.webpackChunktvoishop||[]).push([[397],{1980:function(e,t,r){r.d(t,{Z:function(){return a}});var s=r(9867),n=r(2834);function a(e){var t=e.children,r=e.onOutsideClick,a=(0,s.useRef)(null);return function(e,t){(0,s.useEffect)((function(){function r(r){e.current&&!e.current.contains(r.target)&&t(r)}return document.addEventListener("mousedown",r),function(){document.removeEventListener("mousedown",r)}}),[e])}(a,r),(0,n.jsx)("div",{ref:a,children:t})}},170:function(e,t,r){r.r(t),r.d(t,{default:function(){return Ne}});var s,n=r(2982),a=r(1413),l=r(885),c=r(9867),A=r(4670),o="...",i={id:o,count:0,collection:o,category:o,labelName:o,brand:o,price:0,salePrice:0,images:[{id:o,url:"https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg"}],weight:0,colors:[{id:o,name:o}],metal:o,sizes:[{id:o,value:o}],description:o,popularity:0,customPopularity:0,packaging:o,realPhotos:[{id:o,url:"https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg"}]},d=r(4439),u=r(5538),g=r(1980),m=["title","titleId"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},p.apply(this,arguments)}function x(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function f(e,t){var r=e.title,n=e.titleId,a=x(e,m);return c.createElement("svg",p({className:"closeIcon",focusable:"false","aria-hidden":"true",fill:"#ffffff",viewBox:"0 0 24 24","data-testid":"CloseRoundedIcon",ref:t,"aria-labelledby":n},a),r?c.createElement("title",{id:n},r):null,s||(s=c.createElement("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})))}var h=c.forwardRef(f),w=(r.p,r(3474)),j=r(2834),B=[{name:"bracelets",howTo:(0,u.O)("insctruction bracelet|A")},{name:"rings",howTo:(0,u.O)("dimensional grid|A")+" 52 - 16, 54 - 17, 56 - 17,5"}],C=w.Cx.map((function(e){var t=B.find((function(t){return t.name===e.category}));return(0,a.Z)((0,a.Z)({},e),{},{howTo:t?t.howTo:""})})).filter((function(e){return""!==e.howTo})),v=function(e){var t=e.onCancel;e.isOpen;return(0,j.jsx)(g.Z,{onOutsideClick:t,children:(0,j.jsxs)("div",{className:"panelStyle",children:[(0,j.jsxs)("div",{className:"text-[#6a6a6a] py-2 px-3 rounded-3xl mb-3 bg-[#f2f2f2]",children:[(0,u.O)("right size|A"),":"]}),(0,j.jsx)("div",{className:"w-full flex flex-wrap p-3 border border-[#f2f2f2] rounded-xl mb-3",children:C.map((function(e,t){return(0,j.jsxs)("div",{className:"bg-[#f2f2f2] py-2 px-4 rounded-md text-sm m-1 w-full",children:[(0,j.jsx)("div",{className:"font-[600]",children:e.title}),(0,j.jsx)("div",{children:e.howTo})]},t)}))}),(0,j.jsx)("div",{className:"bg-[#e6e6e6] rounded-full p-1 cursor-pointer hover:bg-[#ccc] duration-300",onClick:t,children:(0,j.jsx)(h,{className:"w-[30px]"})})]})})},b=(r(904),r(6372)),N=r(6110),y=function(){return(0,j.jsxs)("div",{className:"prTextDesc",children:[(0,j.jsx)("div",{children:u.Z.translate("deliveryInfo|A")}),(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:"text-base text-[#8c8c8c]",children:u.Z.translate("pay|A")}),(0,j.jsx)("div",{children:u.Z.translate("payingInfo|A")})]})]})},Q=function(e){var t=e.products.map((function(e,t){return(0,j.jsxs)("div",{className:"prTextDesc",children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:"text-base text-[#8c8c8c]",children:u.Z.translate("brand|A")}),e.brand]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:"text-base text-[#8c8c8c]",children:u.Z.translate("metal|A")}),e.metal]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:"text-base text-[#8c8c8c]",children:u.Z.translate("weight|A")}),e.weight," \u0433"]}),e.description.length>10?(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:"text-base text-[#8c8c8c]",children:u.Z.translate("desc|A")}),e.description]}):(0,j.jsx)(j.Fragment,{}),(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:"text-base text-[#8c8c8c]",children:u.Z.translate("package|A")}),e.packaging]})]},t)}));return(0,j.jsx)("div",{children:t})},I=r(4861),k=[{id:1,target:"_blank",image:"icons/insta.svg",href:"https://www.instagram.com/love.tvoi/?igshid=YmMyMTA2M2Y%3D"},{id:2,target:"_blank",image:"icons/telegram.png",href:"https://telegram.me/tvoiwatch"}],S=function(){var e=(0,I.Z)().width<770;return(0,j.jsxs)("div",{className:"prTextDesc",children:[(0,j.jsx)("div",{children:u.Z.translate("garantyInfo|A")}),e?(0,j.jsx)(j.Fragment,{}):(0,j.jsxs)("div",{className:"mt-3 w-full flex items-start flex-col",children:[(0,j.jsxs)("span",{children:[(0,u.O)("questions|A"),"? ",(0,u.O)("write us|A"),":"]}),(0,j.jsx)("div",{className:"flex flex-row gap-1 w-full",children:k.map((function(e,t){return(0,j.jsx)("a",{href:e.href,target:e.target,className:"flex items-center",children:(0,j.jsx)("img",{src:e.image,className:"w-[25px] mx-1"})},t)}))})]})]})},E=r(4367),O=r(815),F=r(1236),Z=function(e){(0,I.Z)().width;var t,r=(0,c.useState)(null),s=(0,l.Z)(r,2),n=s[0],a=s[1],o=(0,c.useState)(i),d=(0,l.Z)(o,2),g=(d[0],d[1]),m=(0,c.useState)([]),p=(0,l.Z)(m,2),x=p[0],f=p[1],h=(0,A.UO)().id,w=[{panel:(0,j.jsx)(Q,{products:x}),button:u.Z.translate("details|A"),icon:(0,j.jsx)(E.Z,{})},{panel:(0,j.jsx)(y,{}),button:u.Z.translate("delv|A"),icon:(0,j.jsx)(O.Z,{})},{panel:(0,j.jsx)(S,{}),button:u.Z.translate("warranty|A"),icon:(0,j.jsx)(F.Z,{})}],B=null!==(t=e.products.find((function(e){return e.id===h})))&&void 0!==t?t:i;(0,c.useEffect)((function(){var t,r=null!==(t=e.products.filter((function(e){return e.id===h})))&&void 0!==t?t:i;g(B),f(r)}),[h,B]);return(0,j.jsxs)("div",{className:"toolbarPosition",children:[(0,j.jsx)("div",{className:"toolbarStyle",children:w.filter((function(e){return e.button})).map((function(e,t){return(0,j.jsxs)("div",{className:"toolbarBtn flex items-center bg-blue-50 text-blue-400",onClick:function(){return function(e){a(n===e?null:e)}(t)},children:[(0,j.jsx)("span",{className:"pr-1",children:e.icon}),e.button]},t)}))},h),w.map((function(e,t){return t===n&&e.panel}))]})},D=r(2874),G=r(5323);r(6224),r(6640),r(1263),r(4888);var X,Y=function(e){var t=(0,c.useState)(e.photos),r=(0,l.Z)(t,2),s=r[0],a=r[1];return(0,c.useEffect)((function(){a((0,n.Z)(e.photos))}),[e.photos]),(0,j.jsx)(D.tq,{modules:[G.tl,G.LW],spaceBetween:50,slidesPerView:1,pagination:{clickable:!1},children:s.map((function(e,t){return(0,j.jsx)(D.o5,{children:(0,j.jsx)("img",{src:e.url,className:"w-full max-h-[430px] object-contain"})},t)}))})},M=["title","titleId"];function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},V.apply(this,arguments)}function P(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function L(e,t){var r=e.title,s=e.titleId,n=P(e,M);return c.createElement("svg",V({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"33px",height:"33px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve",ref:t,"aria-labelledby":s},n),r?c.createElement("title",{id:s},r):null,X||(X=c.createElement("image",{id:"image0",width:512,height:512,x:0,y:0,href:"data:image/png;base64,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"})))}var W,R,q,U,z=c.forwardRef(L),H=(r.p,["title","titleId"]);function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},K.apply(this,arguments)}function J(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function T(e,t){var r=e.title,s=e.titleId,n=J(e,H);return c.createElement("svg",K({width:"50px",height:"50px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},n),r?c.createElement("title",{id:s},r):null,W||(W=c.createElement("circle",{cx:12,cy:13,r:3,stroke:"#60a5fa",strokeWidth:1})),R||(R=c.createElement("path",{d:"M3.0001 12.9999C3.0001 10.191 2.99995 8.78673 3.67407 7.77783C3.96591 7.34107 4.34091 6.96607 4.77767 6.67423C5.78656 6.00011 7.19103 6.00011 9.99995 6.00011H14C16.8089 6.00011 18.2133 6.00011 19.2222 6.67423C19.659 6.96607 20.034 7.34107 20.3258 7.77783C21 8.78673 21.0001 10.191 21.0001 12.9999C21.0001 15.8088 21.0001 17.2133 20.326 18.2222C20.0341 18.6589 19.6591 19.0339 19.2224 19.3258C18.2135 19.9999 16.809 19.9999 14.0001 19.9999H10.0001C7.19117 19.9999 5.78671 19.9999 4.77782 19.3258C4.34106 19.0339 3.96605 18.6589 3.67422 18.2222C3.44239 17.8752 3.29028 17.4815 3.19049 16.9999",stroke:"#60a5fa",strokeWidth:1,strokeLinecap:"round"})),q||(q=c.createElement("path",{d:"M18 10H17.5",stroke:"#60a5fa",strokeWidth:1,strokeLinecap:"round"})),U||(U=c.createElement("path",{d:"M14.5 3.5H9.5",stroke:"#60a5fa",strokeWidth:1,strokeLinecap:"round"})))}var _=c.forwardRef(T),$=(r.p,r(823)),ee="https://htmlcolorcodes.com/assets/images/colors/rose-gold-color-solid-background-1920x1080.png",te=function(e){var t=c.useState(null),r=(0,l.Z)(t,2),s=r[0],n=r[1],a=function(t,r){return(0,j.jsxs)("div",{className:"rowStyle align-items-center color-parent ".concat(s===t?"selected-item":""),onClick:function(){return function(t){n(t),e.onColorSelect(t)}(t)},children:[(0,j.jsx)("img",{src:r,alt:t,className:"color-image m-1"}),(0,j.jsx)("span",{children:t})]},t)};return(0,j.jsx)("div",{className:"selector-container",children:e.colors.map((function(e){var t="";return e.name===(0,u.O)("silver|A")?t="https://htmlcolorcodes.com/assets/images/colors/silver-color-solid-background-1920x1080.png":e.name===(0,u.O)("gold|A")?t="https://htmlcolorcodes.com/assets/images/colors/gold-color-solid-background-1920x1080.png":e.name===(0,u.O)("rosegold|A")?t=ee:e.name===(0,u.O)("white|A")?t="https://www.color-name.com/color-image?c=FCFBF4&desktop":e.name===(0,u.O)("black|A")?t="https://htmlcolorcodes.com/assets/images/colors/black-color-solid-background-1920x1080.png":e.name===(0,u.O)("bluetiffany|A")?t="https://miro.medium.com/v2/resize:fit:1200/1*2aBDS1l1PpHDoPX29S7FzA.jpeg":e.name===(0,u.O)("red|A")?t="https://htmlcolorcodes.com/assets/images/colors/blood-red-color-solid-background-1920x1080.png":e.name===(0,u.O)("military|A")?t="https://static.vecteezy.com/system/resources/previews/006/174/696/original/military-army-black-brown-cream-and-green-color-camouflage-seamless-pattern-free-vector.jpg":e.name===(0,u.O)("rose|A")?t=ee:e.name===(0,u.O)("darkblue|A")&&(t="https://wallpaperaccess.com/full/2517069.jpg"),a(e.name,t)}))})},re=function(e){var t=c.useState(null),r=(0,l.Z)(t,2),s=r[0],n=r[1],a=function(t){return(0,j.jsx)("div",{className:"selector-item ".concat(s===t?"selected-item":""),onClick:function(){return function(t){n(t),e.onSizeSelect(t)}(t)},children:t},t)};return(0,j.jsx)("div",{className:"selector-container",children:e.sizes.map((function(e){return a(e.value)}))})},se=r(5119),ne=r(4731),ae=function(e){var t=(0,c.useState)(0),r=(0,l.Z)(t,2),s=r[0],n=r[1];return(0,j.jsxs)("div",{className:"flex items-center flex-col relative",children:[(0,j.jsx)("div",{className:"slider-container",children:e.images.map((function(e,t){return(0,j.jsx)("div",{className:"slider-slide ".concat(s===t?"active":""),style:{transform:"translateX(-".concat(100*s,"%)")},children:(0,j.jsx)(ne.LazyLoadImage,{src:e.url,alt:"Image ".concat(t+1),className:"slider-image"})},t)}))}),e.images.length>1?(0,j.jsxs)("div",{className:"absolute bottom-5 flex items-center mt-[30px] gap-4 p-3",children:[(0,j.jsx)("button",{className:"p-2 bg-[#fff] text-[#ccc] rounded-full shadow-[#ccc] shadow-sm",onClick:function(){var t=(s-1+e.images.length)%e.images.length;n(t)},children:(0,j.jsx)("img",{src:"/icons/left.svg",className:"w-[20px]"})}),(0,j.jsx)("button",{className:"p-2 bg-[#fff] text-[#ccc] rounded-full shadow-[#ccc] shadow-sm",onClick:function(){var t=(s+1)%e.images.length;n(t)},children:(0,j.jsx)("img",{src:"/icons/right.svg",className:"w-[20px]"})})]}):(0,j.jsx)(j.Fragment,{})]})},le=function(e){var t=c.useState(e.photos),r=(0,l.Z)(t,2),s=(r[0],r[1]),a=(0,I.Z)().width<770;return c.useEffect((function(){s((0,n.Z)(e.photos))}),[e.photos]),(0,j.jsxs)("div",{className:"photo-container",children:[(0,j.jsx)("button",{className:"photo-btn-close",onClick:e.close,children:(0,j.jsx)("img",{src:"icons/close.svg"})}),(0,j.jsx)("div",{className:"photo-element",children:a?(0,j.jsxs)("div",{className:"w-full",children:[(0,j.jsx)(Y,{photos:e.photos,isBorderRounded:!0})," "]}):(0,j.jsx)(ae,{images:e.photos})})]})},ce=r(4159),Ae=r(4566),oe=(r(6559),[{title:u.Z.translate("details|A"),component:Q,style:"",img:"icons/desc.svg"},{title:u.Z.translate("delv|A"),component:y,style:"border-x px-3 border-[#f2f2f2]",img:"icons/delivery.svg"},{title:u.Z.translate("warranty|A"),component:S,style:"",img:"icons/warranty.svg"}]),ie=function(e){var t,r=(0,c.useState)([]),s=(0,l.Z)(r,2),n=s[0],a=s[1],o=(0,c.useState)(!1),d=(0,l.Z)(o,2),u=d[0],g=d[1],m=(0,A.UO)().id,p=null!==(t=e.products.find((function(e){return e.id===m})))&&void 0!==t?t:i;(0,c.useEffect)((function(){var t,r=null!==(t=e.products.filter((function(e){return e.id===m})))&&void 0!==t?t:i;a(r)}),[m,p]);return(0,j.jsxs)("div",{className:"bg-white w-full relative ".concat(u?"move-down":"move-up"," "),children:[(0,j.jsx)("div",{className:"max-h-full pt-3 mx-[50px] grid grid-cols-3 gap-x-5 transition-max-h border-t border-[#f2f2f2]",children:oe.map((function(e,t){var r=e.component;return(0,j.jsxs)("div",{className:e.style,children:[(0,j.jsxs)("div",{className:"text-xl text-bold text-blue-200 flex items-center",children:[(0,j.jsx)("img",{src:e.img,className:"mr-1"})," ",e.title]}),(0,j.jsx)(r,{products:n})]},t)}))}),(0,j.jsx)("div",{className:"".concat(u?"":"bg-white shadow-up"," absolute bottom-0 w-full flex justify-center"),children:(0,j.jsx)("button",{className:"showbutton ".concat(u?"active":""," !w-auto mt-2"),onClick:function(){g(!u)},children:(0,j.jsx)("span",{className:"arrow"})})})]})},de=r(2951),ue=r(5023),ge=r(6098),me=r(936),pe=r(854),xe=r(6694),fe=r(7241),he=r(3326),we=r(2746),je=[{type:"text",propertyName:"id",placeholder:"Id"},{type:"text",propertyName:"labelName",placeholder:"Label Name"},{type:"text",propertyName:"price",placeholder:"Price"},{type:"text",propertyName:"salePrice",placeholder:"Sale Price"},{type:"text",propertyName:"brand",placeholder:"Brand"},{type:"text",propertyName:"metal",placeholder:"Metal"},{type:"text",propertyName:"popularity",placeholder:"Popularity"},{type:"text",propertyName:"description",placeholder:"Description"},{type:"text",propertyName:"packaging",placeholder:"Packaging"}],Be=function(){var e=c.useContext(se.H),t=e.handleInputChange,r=e.productFields;return(0,j.jsxs)("div",{className:"flex flex-col items-center",children:[(0,j.jsx)("div",{className:"m-2 text-lg text-[#7c7c7c]",children:"Add new product"}),je&&je.map((function(e){return(0,j.jsx)(he.Z,{size:"small",style:{width:"100%",marginTop:5,marginBottom:5},variant:"outlined",type:e.type,label:e.placeholder,value:r[e.propertyName],onChange:function(r){return t(e.propertyName,r.target.value)}},e.propertyName)}))]})},Ce=function(){var e=c.useContext(se.H),t=e.handleInputChange,r=e.productFields,s=e.updateProduct,n=(0,A.UO)().id;return(0,j.jsxs)("div",{className:"flex flex-col items-center",children:[(0,j.jsx)("div",{className:"m-2 text-lg text-[#7c7c7c]",children:"Edit product"}),je&&je.map((function(e){return(0,j.jsx)(he.Z,{size:"small",style:{width:"100%",marginTop:5,marginBottom:5,color:"black"},variant:"outlined",id:n,type:e.type,label:e.placeholder,value:r[e.propertyName]||"",onChange:function(r){return t(e.propertyName,r.target.value)}},e.id)})),(0,j.jsx)(we.Z,{variant:"contained",onClick:function(){void 0!==n?s(n,r):console.error("Product ID is undefined.")},children:"Save"})]})},ve=function(){return(0,j.jsx)("div",{children:"Delete Window"})},be=function(e){var t=c.useState(1),r=(0,l.Z)(t,2),s=r[0],n=r[1];return(0,j.jsx)(g.Z,{onOutsideClick:e.onCancel,children:(0,j.jsxs)("div",{className:"panelStyle",children:[(0,j.jsx)("div",{className:"w-full border-b border-[#ccc]",children:(0,j.jsxs)(ge.Z,{showLabels:!0,value:s,onChange:function(e,t){n(t)},children:[(0,j.jsx)(me.Z,{label:"Add",icon:(0,j.jsx)(xe.Z,{})}),(0,j.jsx)(me.Z,{label:"Edit",icon:(0,j.jsx)(pe.Z,{})}),(0,j.jsx)(me.Z,{label:"Delete",icon:(0,j.jsx)(fe.Z,{})})]})}),(0,j.jsxs)("div",{className:"w-full",children:[0===s&&(0,j.jsx)(Be,{}),1===s&&(0,j.jsx)(Ce,{}),2===s&&(0,j.jsx)(ve,{})]})]})})},Ne=function(){var e,t=(0,A.UO)().id,r=(0,c.useContext)($.A),s=r.handleClick,o=(r.clearBasket,(0,c.useContext)(se.H).products),g=(0,c.useContext)(ue.S).authorized,m=(0,c.useState)(!1),p=(0,l.Z)(m,2),x=p[0],f=p[1],h=(0,c.useState)(i),w=(0,l.Z)(h,2),B=w[0],C=w[1],y=(0,c.useState)([]),Q=(0,l.Z)(y,2),k=Q[0],S=Q[1],E=c.useState(!1),O=(0,l.Z)(E,2),F=O[0],D=O[1],G=c.useState(!1),X=(0,l.Z)(G,2),M=X[0],V=X[1],P=c.useState(null),L=(0,l.Z)(P,2),W=L[0],R=L[1],q=c.useState(null),U=(0,l.Z)(q,2),H=U[0],K=U[1],J=(0,c.useState)(!1),T=(0,l.Z)(J,2),ee=T[0],ne=T[1],oe=((0,A.s0)(),(0,I.Z)()),ge=null!==(e=o.find((function(e){return e.id===t})))&&void 0!==e?e:i,me=oe.width<770,pe=function(){V(!M)},xe=function(){D(!0),(0,ce.Qp)(document.querySelector(".productInfoView"))},fe=function(e){K(e)};return(0,c.useEffect)((function(){C(ge),ge.sizes&&0!==ge.sizes.length||fe("One Size");var e=(0,n.Z)(o).sort((function(e,t){return e.category===ge.category&&t.category!==ge.category?-1:e.category!==ge.category&&t.category===ge.category?1:e.metal===ge.metal&&t.metal!==ge.metal?-1:e.metal!==ge.metal&&t.metal===ge.metal?1:Math.random()-.5})).filter((function(e){return e.category===ge.category||e.metal===ge.metal}));S(e.splice(0,99))}),[t,ge]),(0,j.jsxs)("div",{className:"page-container",style:{marginBottom:"75px"},children:[(0,j.jsx)(b.q,{children:(0,j.jsx)("title",{children:B.labelName+": \u043a\u0443\u043f\u0438\u0442\u0438 "+B.brand+" | TVOI"})}),(0,j.jsxs)("div",{className:"productInfoView",children:[(0,j.jsxs)("div",{className:"infoViewCard",children:[me?(0,j.jsx)(j.Fragment,{}):(0,j.jsx)("div",{className:"prLblName",children:B.labelName}),(0,j.jsxs)("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-5",children:[(0,j.jsx)("div",{className:"bg-images relative",children:me?(0,j.jsx)(Y,{photos:B.images,isBorderRounded:!1}):(0,j.jsx)(ae,{images:B.images})}),(0,j.jsxs)("div",{className:"columnStyle",children:[(0,j.jsxs)("div",{className:"prColumnPos",children:[me?(0,j.jsxs)("div",{className:"flex items-center w-full py-2 gap-2 border-b border-[#f2f2f2] ",children:[(0,j.jsx)("div",{className:"text-black text-start text-sm flex-1 p-2 bg-[#fff] rounded-xl",children:B.labelName}),me?(0,j.jsxs)("div",{className:"bg-blue-50 text-blue-500 text-sm p-2 rounded-xl text-center",onClick:xe,children:[u.Z.translate("choose size|A"),"?"]}):(0,j.jsx)(j.Fragment,{})]}):(0,j.jsx)(j.Fragment,{}),(0,j.jsxs)("div",{className:"my-3 space-y-5",children:[(0,j.jsxs)("div",{className:"size-color-margin",children:[(0,j.jsxs)("div",{className:"infoText",children:[(0,u.O)("choose color|A"),":*"]}),(0,j.jsx)("div",{className:"rowStyle justify-content-center ".concat(ee&&!W?"error":""),children:(0,j.jsx)(te,{colors:B.colors,onColorSelect:function(e){R(e)}})})]}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"infoText",children:[(0,u.O)("size choose|A"),":*"]}),(0,j.jsx)("div",{className:"rowStyle justify-content-center mb-3 ".concat(ee&&!H?"error":""),children:(0,j.jsx)(re,{sizes:B.sizes,onSizeSelect:fe})}),me?(0,j.jsx)(j.Fragment,{}):(0,j.jsxs)("div",{className:"infoText text-primary",onClick:xe,children:[u.Z.translate("choose size|A"),"?"]})]})]}),(0,j.jsxs)("div",{className:"priceViewProduct flex items-center justify-between",children:[(0,j.jsx)(Ae.t,{product:B,font:"xl",currTypeBack:"\u0433\u0440\u043d."}),g?(0,j.jsx)("button",{className:"bg-blue-300 w-[100px] h-[45px] rounded-lg text-white",onClick:pe,children:"Edit"}):(0,j.jsx)(j.Fragment,{})]})]}),B.realPhotos.length>0?(0,j.jsx)("div",{className:"px-[10px] md:px-0 w-full",children:(0,j.jsxs)("button",{className:"real-photo-btn bg-blue-50 text-blue-400",onClick:function(){f(!0),(0,ce.Qp)(document.querySelector(".productInfoView"))},children:[(0,j.jsx)(_,{className:"w-[35px] md:w-auto"})," ",(0,u.O)("real photos|A")]})}):(0,j.jsx)(j.Fragment,{}),(0,j.jsx)("div",{className:"btnInfoPgStylePos",children:(0,j.jsxs)("button",{className:"btnInfoPg btn-add-cart",onClick:function(){W&&0!==W.length&&("watches"===B.category||"earrings"===B.category||"charms"===B.category||H&&0!==H.length)?(s((0,a.Z)((0,a.Z)({},B),{},{count:1,color:W,size:H})),d.Z.callToastr(u.Z.translate("added to cart|A"))):(ne(!0),setTimeout((function(){return ne(!1)}),2500),d.Z.callToastr(u.Z.translate("error order|A")))},children:[(0,j.jsx)(z,{className:"mr-1"})," ",u.Z.translate("add to cart|A")]})})]}),me?(0,j.jsx)("div",{className:"h-full px-[10px] py-1",children:(0,j.jsx)(Z,{products:o})}):(0,j.jsx)(j.Fragment,{}),(0,j.jsx)("div",{className:"flex items-center justify-center px-4",children:(0,j.jsx)(de.Z,{})})]})]}),me?(0,j.jsx)(j.Fragment,{}):(0,j.jsx)(ie,{products:o})]}),(0,j.jsx)("div",{className:"simItemStyleSpecial",children:u.Z.translate("you may also like|A")}),(0,j.jsx)(N.Z,{products:k,style:"productView"}),F&&(0,j.jsx)(v,{onCancel:function(){D(!1),(0,ce.tG)(document.querySelector(".productInfoView"))},isOpen:F}),M&&(0,j.jsx)(be,{onCancel:pe}),x&&(0,j.jsx)(le,{photos:B.realPhotos,close:function(){f(!1),(0,ce.tG)(document.querySelector(".productInfoView"))}})]})}},6559:function(){}}]);
//# sourceMappingURL=397.45fbb72e.chunk.js.map