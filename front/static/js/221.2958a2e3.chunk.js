/*! For license information please see 221.2958a2e3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunktvoishop=self.webpackChunktvoishop||[]).push([[221],{1928:(e,t,n)=>{n.d(t,{Ad:()=>o});n(2394);var s=n(184);const o=e=>(0,s.jsxs)("div",{className:"fixed flex flex-col justify-center items-center p-5",children:[(0,s.jsx)("img",{src:e.image,className:"lg:w-[350px] w-[250px]"}),(0,s.jsx)("span",{className:"gilroy lg:text-2xl text-xl text-[#919191] text-center mt-2 bg-white rounded-2xl p-3 shadow-lg shadow-[#ccc]",children:e.title})]})},7221:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M,postIcons:()=>A});var s=n(2791),o=(n(2394),n(8070),n(4270)),a=n(7689),r=n(5615),c=n(2804),i=n(2018),l=n(5544),d=n(184);const m=e=>{const[t,n]=(0,s.useState)(!1);return(0,d.jsx)("div",{className:"order-parent",children:(0,d.jsx)(r.U,{from:"bottom",positionOffset:400,triggerOffset:500,delayInMilliseconds:-550,durationInMilliseconds:850,children:(0,d.jsx)(i.Z,{onOutsideClick:e.onCancel,children:(0,d.jsxs)("div",{className:"paymentMethodeStyle",children:[(0,d.jsxs)("div",{className:"d-flex justify-content-center",children:[(0,d.jsx)("h6",{children:(0,l.O)("options|A")}),(0,d.jsx)(c.r,{className:"positionRight",onClick:e.onCancel})]}),(0,d.jsx)("div",{className:"order-element",children:(0,d.jsxs)("div",{className:"form-check",children:[(0,d.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault",checked:t,onChange:t=>{n(t.target.checked),t.target.checked?(e.handleButtonChange((0,l.O)("paymentMethod_post|A")),e.handlePaymentMethodChange((0,l.O)("paymentMethod_post|A"))):(e.handleButtonChange((0,l.O)("select|A")),e.handlePaymentMethodChange("")),setTimeout((()=>e.onCancel()),100)}}),(0,d.jsx)("label",{className:"form-check-label",children:(0,l.O)("paymentMethod_post|A")})]})})]})})})})};var h=n(5294),p=n(8329);const u=new class{constructor(){this.cookieOptions={httpOnly:!0,secure:!0,sameSite:"strict"}}setCookie(e,t,n){p.Z.set(e,t,{expires:n})}getCookie(e){return p.Z.get(e)}deleteCookie(e){p.Z.remove(e)}};n(456);const f="Bearer",x=()=>u.getCookie(f);function g(){var e={},t=x();return t&&(e.Authorization="Bearer "+t),{headers:e}}function v(e){return t="order",n=e,h.Z.post(t,n,g());var t,n}var y=n(1198),j=n(1882),w=n(6877),C=n(6384),O=n(3505),N=n(4140),k=n(1928),b=n(3254);const A=[{name:(0,l.O)("nova post|A"),src:"https://play-lh.googleusercontent.com/mtyOm0Rp0PeG_BWE7M5j9gBWuU1Du34LLj-dLdSE1-006_BkFg32W3Cca00l2BBvNM0",alt:"Nova Post"},{name:(0,l.O)("ukr post|A"),src:"https://www.ukrposhta.ua/uploads/files/shares/pin_2.png",alt:"Ukr Post"},{name:(0,l.O)("meest|A"),src:"https://www.ukraqua.com/wp-content/uploads/2022/04/group_303_0.png",alt:"Meest"}],M=()=>{const{userData:e,setUserData:t,handleImageClick:n,handleInputChange:c,handlePaymentMethodChange:i,onCalcSymbolsOnlyChange:h,isActive:p,setIsActive:u}=(0,s.useContext)(O.S),{cart:f,endedPrice:x}=(0,s.useContext)(w.A),{paymentWindow:g,setPaymentWindow:M}=(0,s.useContext)(C.H),[I,S]=(0,s.useState)(!1),[B,E]=(0,s.useState)((0,l.O)("select|A")),[U,P]=(0,s.useState)(!1),Z=(0,a.s0)(),_=(0,b.Z)().width<620,{town:D,postOffice:R,paymentMethod:T,selectedImage:L,name:W,phone:z,email:F}=e,q=e=>I&&!e,Y=()=>{M(!g),u(!p)};return(0,d.jsxs)("div",{className:"grid md:grid-cols-2 grid-cols-1 mt-[50px] bg-white",children:[(0,d.jsxs)(r.U,{from:"bottom",positionOffset:700,triggerOffset:200,delayInMilliseconds:-550,durationInMilliseconds:850,children:[(0,d.jsx)(o.q,{children:(0,d.jsx)("title",{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448\u0456 \u0434\u0430\u043d\u0456 \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 | TVOI"})}),(0,d.jsxs)("div",{className:"p-3",children:[(0,d.jsx)("div",{className:"w-full flex justify-center",children:(0,d.jsxs)("div",{className:"step-style text-secondary flex items-center cursor-pointer",onClick:()=>Z(-1),children:[(0,d.jsx)(j.r,{className:"w-[30px] pr-2"}),(0,d.jsxs)("div",{children:[(0,l.O)("step|A")," 2/2"]})]})}),(0,d.jsxs)("div",{className:"order-element",children:[(0,d.jsxs)("label",{className:"inputStyle",children:["\xa0\xa0\xa0\xa0",(0,l.O)("post select|A"),":*"]}),(0,d.jsx)("div",{className:"rowStyle justify-content-center p-3",children:A.map((e=>(0,d.jsxs)("div",{className:"post-icon-container ".concat(L===e.name?"selected":"").concat(q(L)?"error":""),onClick:()=>n(e.name),children:[(0,d.jsx)("img",{className:"post-icon-size",src:e.src,alt:e.alt}),(0,d.jsx)("span",{children:e.name})]},e.name)))}),(0,d.jsxs)("label",{className:"inputStyle",children:["\xa0\xa0\xa0\xa0",(0,l.O)("town select|A"),":*"]}),(0,d.jsxs)("div",{className:"rowStyle w-100",children:[(0,d.jsx)("div",{className:"columnStyle m-2 component-fill",children:(0,d.jsx)("input",{type:"text",name:"town",className:"form-control ".concat(q(D)?"error":""),placeholder:(0,l.O)("ex town|A"),value:D,onChange:c})}),(0,d.jsx)("div",{className:"columnStyle m-2 component-fill",children:(0,d.jsx)("input",{type:"text",name:"postOffice",className:"form-control ".concat(q(R)?"error":""),placeholder:(0,l.O)("ex post|A"),value:R,onKeyPress:h,onChange:c})})]})]}),(0,d.jsxs)("div",{className:"order-element",children:[(0,d.jsxs)("div",{className:"inputStyle columnStyle mt-2 ",children:["\xa0\xa0\xa0\xa0",(0,l.O)("payment|A"),":*"]}),(0,d.jsxs)("button",{className:"showbutton border !border-[#81a1f3] ".concat(p?"active":""," ").concat(q(T)?"error":""),onClick:Y,children:[U?(0,l.O)("loading..|A"):B,(0,d.jsx)("span",{className:"arrow"})]}),(0,d.jsxs)("span",{className:"inputStyle",children:[(0,l.O)("questions|A"),"?",(0,d.jsxs)("a",{href:"https://www.instagram.com/love.tvoi/?igshid=YmMyMTA2M2Y%3D",children:[" ",(0,l.O)("write us|A")]})]})]})]}),(0,d.jsx)("div",{className:"confirm-footer",children:(0,d.jsx)("div",{className:"w-100",children:(0,d.jsx)("button",{className:"btnConfirmCartStyle success-action",onClick:async()=>{if(P(!0),setTimeout((()=>{P(!1)}),5e3),!D||!R||!T||!W||!z||!F)return t((e=>({...e,selectedImage:e.selectedImage||null,town:e.town||"",postOffice:e.postOffice||"",paymentMethod:e.paymentMethod||"",name:e.name||"",phone:e.phone||"",email:e.email||""}))),void S(!0);try{await v({name:W,phone:z,email:F,selectedImage:L,town:D,postOffice:R,paymentMethod:T,products:f.data,summary:x}),y.Z.callToastr("Order placed successfully!"),Z((0,N.B)("order_confirmation"))}catch(e){P(!1),y.Z.callToastr("Error placing the order. Please try again")}},disabled:U,children:U?(0,l.O)("loading..|A"):l.Z.translate("ok|A")})})}),g&&(0,d.jsx)(m,{onCancel:Y,handleButtonChange:e=>{E(e)},handlePaymentMethodChange:i})]}),!_&&(0,d.jsx)("div",{className:"ad-pos",children:(0,d.jsx)(k.Ad,{title:"\u0406\u0456\u0456... \u043e\u0441\u0442\u0430\u043d\u043d\u0456\u0439 \u043a\u0440\u043e\u043a \u0456 \u0442\u0432\u043e\u0454 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0443\u0436\u0435 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u044f\u0454\u0442\u044c\u0441\u044f \u0434\u043e \u0442\u0435\u0431\u0435. \u041d\u0435 \u0437\u0443\u043f\u0438\u043d\u044f\u0439\u0441\u044f!",image:"animalsChris/cat_4.png"})})]})}},2018:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(2791),o=n(184);function a(e){let{children:t,onOutsideClick:n}=e;const a=(0,s.useRef)(null);return function(e,t){(0,s.useEffect)((()=>{function n(n){e.current&&!e.current.contains(n.target)&&t(n)}return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}}),[e])}(a,n),(0,o.jsx)("div",{ref:a,children:t})}},456:(e,t,n)=>{function s(e){this.message=e}s.prototype=new Error,s.prototype.name="InvalidCharacterError";"undefined"!=typeof window&&window.atob&&window.atob.bind(window);function o(e){this.message=e}o.prototype=new Error,o.prototype.name="InvalidTokenError"},2394:()=>{},8070:()=>{},8329:(e,t,n)=>{function s(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)e[s]=n[s]}return e}n.d(t,{Z:()=>o});var o=function e(t,n){function o(e,o,a){if("undefined"!==typeof document){"number"===typeof(a=s({},n,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var c in a)a[c]&&(r+="; "+c,!0!==a[c]&&(r+="="+a[c].split(";")[0]));return document.cookie=e+"="+t.write(o,e)+r}}return Object.create({set:o,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],s={},o=0;o<n.length;o++){var a=n[o].split("="),r=a.slice(1).join("=");try{var c=decodeURIComponent(a[0]);if(s[c]=t.read(r,c),e===c)break}catch(i){}}return e?s[e]:s}},remove:function(e,t){o(e,"",s({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,s({},this.attributes,t))},withConverter:function(t){return e(s({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}}]);
//# sourceMappingURL=221.2958a2e3.chunk.js.map