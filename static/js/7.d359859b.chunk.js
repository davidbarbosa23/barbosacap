(this.webpackJsonpbarbosacap=this.webpackJsonpbarbosacap||[]).push([[7],{56:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var a=n(57),c=n(0),r=n(2),l=Object(c.createContext)({}),s=function(e){var t=e.children,n=Object(c.useState)(false),s=Object(a.a)(n,2),i=s[0],o=s[1];return Object(r.jsx)(l.Provider,{value:{contactShow:i,setContactShow:o},children:t})},i=function(){return Object(c.useContext)(l)}},60:function(e,t,n){},61:function(e,t,n){e.exports={navItem:"styles_navItem__dKxSt",active:"styles_active__1vNKL"}},62:function(e,t,n){e.exports={langSelector:"styles_langSelector__3IvL8","nav-item":"styles_nav-item__2hRih"}},63:function(e,t,n){e.exports={navbar:"styles_navbar__2_ADT",langButton:"styles_langButton__3QXrU"}},64:function(e,t,n){e.exports={header:"styles_header__RxlAF",brand:"styles_brand__1Tg0B"}},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return Q}));var a=n(0),c=n.n(a),r=n(58),l=n(56),s=n(68),i=n.n(s),o=n(69),u=n(74),b=n(55),j=n(97),d=n(70),m=(n(76),n(75),d.a.initializeApp({apiKey:"AIzaSyBs1hrB4NmfEMpsjJh2IFaecx_FMXS3R7o",authDomain:"barbosacap-53e95.firebaseapp.com",databaseURL:"https://barbosacap-53e95.firebaseio.com",projectId:"barbosacap-53e95",storageBucket:"barbosacap-53e95.appspot.com",messagingSenderId:"341892524274",appId:"1:341892524274:web:a294e1990e5cf17ce4c86b",measurementId:"G-1JJ0VBFPKE"})),h=(m.analytics(),m.firestore()),p=n(60),O=n.n(p),f=n(2),x=function(){var e=Object(b.a)().t,t=Object(l.b)(),n=t.contactShow,a=t.setContactShow,s=c.a.useRef(null),d=Object(u.a)(),m=d.handleSubmit,p=d.register,x=d.errors,v=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.collection("contacts").doc().set(t);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(j.a,{nodeRef:s,in:n,timeout:400,classNames:"modal-contact",unmountOnExit:!0,children:Object(f.jsx)("div",{className:"".concat(O.a.modalContainer," modal-container"),children:Object(f.jsxs)("div",{ref:s,className:"container modal-contact",children:[Object(f.jsx)("div",{className:"highlight",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:e("about.title")}),Object(f.jsx)("p",{children:e("contact.about.desc")})]})}),Object(f.jsx)("div",{className:"form",children:Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"close-modal",onClick:function(){a&&a(!1)},children:[Object(f.jsx)("span",{}),Object(f.jsx)("span",{})]}),Object(f.jsx)("h3",{children:e("contact.title")}),Object(f.jsxs)("form",{action:"",onSubmit:m((function(t){v(t)?(a&&a(!1),r.b.success(e("toast.success.attempt"))):r.b.error(e("toast.fail.attempt"))})),children:[Object(f.jsxs)("div",{className:"input ",children:[Object(f.jsx)("input",{id:"name",name:"name",className:x.name&&"invalid",type:"text",ref:p({required:!0,maxLength:80})}),Object(f.jsx)("label",{htmlFor:"name",children:e("name")})]}),Object(f.jsxs)("div",{className:"input ",children:[Object(f.jsx)("input",{id:"email",name:"email",className:x.email&&"invalid",type:"email",ref:p({required:"Required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}})}),Object(f.jsx)("label",{htmlFor:"email",children:e("email")})]}),Object(f.jsxs)("div",{className:"input ",children:[Object(f.jsx)("textarea",{id:"message",name:"message",className:x.message&&"invalid",ref:p({required:!0})}),Object(f.jsx)("label",{htmlFor:"message",children:e("message")})]}),Object(f.jsx)("button",{className:"btn",type:"submit",children:e("submit")})]})]})})]})})})},v=function(){var e=(new Date).getFullYear();return Object(f.jsx)("footer",{children:Object(f.jsxs)("div",{children:["\xa9 ",e," ","BarbosaCap"]})})},g=n(18);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function N(e,t){var n=e.title,c=e.titleId,r=w(e,["title","titleId"]);return a.createElement("svg",y({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},r),n?a.createElement("title",{id:c},n):null,a.createElement("path",{style:{fill:"#FFDA44"},d:"M0,256c0,31.314,5.633,61.31,15.923,89.043L256,367.304l240.077-22.261 C506.367,317.31,512,287.314,512,256s-5.633-61.31-15.923-89.043L256,144.696L15.923,166.957C5.633,194.69,0,224.686,0,256z"}),a.createElement("g",null,a.createElement("path",{style:{fill:"#D80027"},d:"M496.077,166.957C459.906,69.473,366.071,0,256,0S52.094,69.473,15.923,166.957H496.077z"}),a.createElement("path",{style:{fill:"#D80027"},d:"M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957H15.923z"})))}var _=a.forwardRef(N);n.p;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function S(e,t){var n=e.title,c=e.titleId,r=E(e,["title","titleId"]);return a.createElement("svg",C({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},r),n?a.createElement("title",{id:c},n):null,a.createElement("circle",{style:{fill:"#F0F0F0"},cx:256,cy:256,r:256}),a.createElement("g",null,a.createElement("path",{style:{fill:"#D80027"},d:"M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z"}),a.createElement("path",{style:{fill:"#D80027"},d:"M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z"}),a.createElement("path",{style:{fill:"#D80027"},d:"M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z"}),a.createElement("path",{style:{fill:"#D80027"},d:"M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819 C15.236,346.596,24.993,369.036,37.574,389.565z"})),a.createElement("path",{style:{fill:"#0052B4"},d:"M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037 C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941 c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444 C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4 l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z  M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822 L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822 l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822 l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509 l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z"}))}var L=a.forwardRef(S),k=(n.p,{en:Object(f.jsx)(L,{}),es:Object(f.jsx)(_,{})}),B=n(57),I=n(3),z=n(10),F=n(73),M=function(e,t){var n="/:locale/:path*",a=Object(F.a)(n),c=Object(F.b)(n).exec(t),r=null;return c&&c[2]&&(r=c[2].split("/")),a({locale:e,path:r})},P=function(e,t){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};Object(a.useEffect)((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))},D=n(61),H=n.n(D),R=function(e){var t=Object(a.useState)(!1),n=Object(B.a)(t,2),c=n[0],r=n[1],l=Object(a.useRef)(null);return P(l,(function(){r(!1)})),Object(f.jsxs)("li",{ref:l,className:H.a.navItem,onClick:function(){return r(!c)},children:[null===e.to?Object(f.jsxs)("button",{className:e.className,onClick:e.clickHandler,children:[e.icon,e.content]}):Object(f.jsxs)(g.c,{activeClassName:H.a.active,className:e.className,to:e.to,children:[e.icon,e.content]}),c&&e.children]})},A=n(62),J=n.n(A),q=function(){var e=Object(I.g)();return Object(f.jsx)("ul",{className:J.a.langSelector,children:Object.entries(z.a).map((function(t,n){var a=Object(B.a)(t,2),c=a[0],r=a[1];return Object(f.jsx)(R,{to:M(c,e.pathname),content:r,icon:k[c]},n)}))})},K=n(63),X=n.n(K),T=function(){var e=Object(b.a)().t,t=Object(l.b)().setContactShow;return Object(f.jsx)("nav",{className:X.a.navbar,children:Object(f.jsxs)("ul",{children:[Object(f.jsx)(R,{to:null,content:e("menu.contact"),clickHandler:function(){t&&t(!0)}}),Object(f.jsx)(R,{to:null,className:X.a.langButton,icon:k[e("lang")],children:Object(f.jsx)(q,{})})]})})},V=n.p+"static/media/logo_barbosacap.1140ab4d.svg",Z=n(64),U=n.n(Z),G=function(){var e=Object(b.a)().t;return Object(f.jsxs)("header",{className:U.a.header,children:[Object(f.jsx)(g.b,{to:"/".concat(e("lang")),className:U.a.brand,children:Object(f.jsx)("img",{src:V,alt:"".concat("BarbosaCap"," Logo")})}),Object(f.jsx)(T,{})]})},Q=function(e){var t=e.children,n=e.className;return Object(f.jsxs)(l.a,{children:[Object(f.jsx)(G,{}),Object(f.jsx)("main",{className:n,children:t}),Object(f.jsx)(v,{}),Object(f.jsx)(x,{}),Object(f.jsx)(r.a,{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}},89:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);n(0);var a=n(14),c=n(55),r=n(65),l=n(89),s=n.n(l),i=n(2);t.default=function(){var e=Object(c.a)().t;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(a.a,{children:[Object(i.jsxs)("title",{children:[e("projects.title")," | ","BarbosaCap"]}),Object(i.jsx)("meta",{name:"description",content:"Projects | Experiments"})]}),Object(i.jsx)(r.a,{className:"".concat(s.a.Projects," container"),children:Object(i.jsx)("div",{className:s.a.container,children:Object(i.jsx)("h1",{children:e("projects.title")})})})]})}}}]);
//# sourceMappingURL=7.d359859b.chunk.js.map