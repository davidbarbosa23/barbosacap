(this.webpackJsonpbarbosacap=this.webpackJsonpbarbosacap||[]).push([[4],{52:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,l=c}finally{try{n||null==o.return||o.return()}finally{if(a)throw l}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return a}))},53:function(e,t,r){e.exports=r.p+"static/media/logo_barbosacap.a5065d2a.svg"},54:function(e,t,r){"use strict";r.d(t,"a",(function(){return P}));var n=r(0),a=r.n(n),l=r(16),i=r(52),o=r(2),c=r(51);function u(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:r,value:e[r++]});else{var a=1,l="";if("?"===e[o=r+1])throw new TypeError('Pattern cannot start with "?" at '+o);for(;o<e.length;)if("\\"!==e[o]){if(")"===e[o]){if(0===--a){o++;break}}else if("("===e[o]&&(a++,"?"!==e[o+1]))throw new TypeError("Capturing groups are not allowed at "+o);l+=e[o++]}else l+=e[o++]+e[o++];if(a)throw new TypeError("Unbalanced pattern at "+r);if(!l)throw new TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:l}),r=o}else{for(var i="",o=r+1;o<e.length;){var c=e.charCodeAt(o);if(!(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||95===c))break;i+=e[o++]}if(!i)throw new TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:i}),r=o}else t.push({type:"CLOSE",index:r,value:e[r++]});else t.push({type:"OPEN",index:r,value:e[r++]});else t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});else t.push({type:"MODIFIER",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,a=void 0===n?"./":n,l="[^"+s(t.delimiter||"/#?")+"]+?",i=[],o=0,c=0,u="",f=function(e){if(c<r.length&&r[c].type===e)return r[c++].value},p=function(e){var t=f(e);if(void 0!==t)return t;var n=r[c],a=n.type,l=n.index;throw new TypeError("Unexpected "+a+" at "+l+", expected "+e)},m=function(){for(var e,t="";e=f("CHAR")||f("ESCAPED_CHAR");)t+=e;return t};c<r.length;){var v=f("CHAR"),h=f("NAME"),d=f("PATTERN");if(h||d){var y=v||"";-1===a.indexOf(y)&&(u+=y,y=""),u&&(i.push(u),u=""),i.push({name:h||o++,prefix:y,suffix:"",pattern:d||l,modifier:f("MODIFIER")||""})}else{var E=v||f("ESCAPED_CHAR");if(E)u+=E;else if(u&&(i.push(u),u=""),f("OPEN")){y=m();var g=f("NAME")||"",b=f("PATTERN")||"",x=m();p("CLOSE"),i.push({name:g||(b?o++:""),pattern:g&&!b?l:b,prefix:y,suffix:x,modifier:f("MODIFIER")||""})}else p("END")}}return i}function f(e,t){return function(e,t){void 0===t&&(t={});var r=p(t),n=t.encode,a=void 0===n?function(e){return e}:n,l=t.validate,i=void 0===l||l,o=e.map((function(e){if("object"===typeof e)return new RegExp("^(?:"+e.pattern+")$",r)}));return function(t){for(var r="",n=0;n<e.length;n++){var l=e[n];if("string"!==typeof l){var c=t?t[l.name]:void 0,u="?"===l.modifier||"*"===l.modifier,f="*"===l.modifier||"+"===l.modifier;if(Array.isArray(c)){if(!f)throw new TypeError('Expected "'+l.name+'" to not repeat, but got an array');if(0===c.length){if(u)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var s=0;s<c.length;s++){var p=a(c[s],l);if(i&&!o[n].test(p))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but got "'+p+'"');r+=l.prefix+p+l.suffix}}else if("string"!==typeof c&&"number"!==typeof c){if(!u){var m=f?"an array":"a string";throw new TypeError('Expected "'+l.name+'" to be '+m)}}else{p=a(String(c),l);if(i&&!o[n].test(p))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but got "'+p+'"');r+=l.prefix+p+l.suffix}}else r+=l}return r}}(u(e,t),t)}function s(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function p(e){return e&&e.sensitive?"":"i"}function m(e,t,r){return function(e,t,r){void 0===r&&(r={});for(var n=r.strict,a=void 0!==n&&n,l=r.start,i=void 0===l||l,o=r.end,c=void 0===o||o,u=r.encode,f=void 0===u?function(e){return e}:u,m="["+s(r.endsWith||"")+"]|$",v="["+s(r.delimiter||"/#?")+"]",h=i?"^":"",d=0,y=e;d<y.length;d++){var E=y[d];if("string"===typeof E)h+=s(f(E));else{var g=s(f(E.prefix)),b=s(f(E.suffix));if(E.pattern)if(t&&t.push(E),g||b)if("+"===E.modifier||"*"===E.modifier){var x="*"===E.modifier?"?":"";h+="(?:"+g+"((?:"+E.pattern+")(?:"+b+g+"(?:"+E.pattern+"))*)"+b+")"+x}else h+="(?:"+g+"("+E.pattern+")"+b+")"+E.modifier;else h+="("+E.pattern+")"+E.modifier;else h+="(?:"+g+b+")"+E.modifier}}if(c)a||(h+=v+"?"),h+=r.endsWith?"(?="+m+")":"$";else{var w=e[e.length-1],O="string"===typeof w?v.indexOf(w[w.length-1])>-1:void 0===w;a||(h+="(?:"+v+"(?="+m+"))?"),O||(h+="(?="+v+"|"+m+")")}return new RegExp(h,p(r))}(u(e,r),t,r)}function v(e,t,r){return e instanceof RegExp?function(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,a=r.exec(e.source);a;)t.push({name:a[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),a=r.exec(e.source);return e}(e,t):Array.isArray(e)?function(e,t,r){var n=e.map((function(e){return v(e,t,r).source}));return new RegExp("(?:"+n.join("|")+")",p(r))}(e,t,r):m(e,t,r)}var h=r(12);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var E=function(e){var t=e.svgRef,r=e.title,n=y(e,["svgRef","title"]);return a.a.createElement("svg",d({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t},n),r?a.a.createElement("title",null,r):null,a.a.createElement("circle",{style:{fill:"#F0F0F0"},cx:256,cy:256,r:256}),a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#D80027"},d:"M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z"}),a.a.createElement("path",{style:{fill:"#D80027"},d:"M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z"}),a.a.createElement("path",{style:{fill:"#D80027"},d:"M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z"}),a.a.createElement("path",{style:{fill:"#D80027"},d:"M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819 C15.236,346.596,24.993,369.036,37.574,389.565z"})),a.a.createElement("path",{style:{fill:"#0052B4"},d:"M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037 C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941 c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444 C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4 l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z  M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822 L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822 l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822 l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509 l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z"}))},g=a.a.forwardRef((function(e,t){return a.a.createElement(E,d({svgRef:t},e))}));r.p;function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var w=function(e){var t=e.svgRef,r=e.title,n=x(e,["svgRef","title"]);return a.a.createElement("svg",b({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t},n),r?a.a.createElement("title",null,r):null,a.a.createElement("path",{style:{fill:"#FFDA44"},d:"M0,256c0,31.314,5.633,61.31,15.923,89.043L256,367.304l240.077-22.261 C506.367,317.31,512,287.314,512,256s-5.633-61.31-15.923-89.043L256,144.696L15.923,166.957C5.633,194.69,0,224.686,0,256z"}),a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#D80027"},d:"M496.077,166.957C459.906,69.473,366.071,0,256,0S52.094,69.473,15.923,166.957H496.077z"}),a.a.createElement("path",{style:{fill:"#D80027"},d:"M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957H15.923z"})))},O=a.a.forwardRef((function(e,t){return a.a.createElement(w,b({svgRef:t},e))})),j=(r.p,{en:a.a.createElement(g,null),es:a.a.createElement(O,null)}),A=function(e){var t=Object(n.useState)(!1),r=Object(i.a)(t,2),o=r[0],c=r[1];return a.a.createElement("li",{className:"nav-item",onClick:function(){return c(!o)}},null===e.to?a.a.createElement("button",{className:e.className},e.icon,e.content):a.a.createElement(l.c,{exact:!0,activeClassName:"active",className:e.className,to:e.to},e.icon,e.content),o&&e.children)},C=function(){var e=Object(o.g)();return a.a.createElement("ul",{className:"lang-selector"},Object.entries(h.a).map((function(t,r){var n=Object(i.a)(t,2),l=n[0],o=n[1];return a.a.createElement(A,{key:r,to:N(l,e.pathname),content:o,icon:j[l]})})))},N=function(e,t){var r=f("/:locale/:path*"),n=v("/:locale/:path*").exec(t),a=null;return n&&n[2]&&(a=n[2].split("/")),r({locale:e,path:a})},R=function(){var e=Object(c.a)().t;return a.a.createElement("nav",{className:"navbar"},a.a.createElement("ul",null,a.a.createElement(A,{to:"/".concat(e("lang")),content:e("home.menu")}),a.a.createElement(A,{to:"/".concat(e("lang"),"/projects"),content:e("projects.menu")}),a.a.createElement(A,{to:null,className:"lang-button",icon:j[e("lang")]},a.a.createElement(C,null))))},M=r(53),S=r.n(M),T=function(){return a.a.createElement("header",null,a.a.createElement(l.b,{to:"/",className:"brand"},a.a.createElement("img",{src:S.a,alt:"BarbosaCap Logo"})),a.a.createElement(R,null))},L=function(){var e=Object(c.a)().t;return a.a.createElement("footer",null,e("share"))},P=function(e){var t=e.children,r=e.className;return a.a.createElement(n.Fragment,null,a.a.createElement(T,null),a.a.createElement("main",{className:r},t),a.a.createElement(L,null))}},57:function(e,t,r){},59:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(54);r(57);t.default=function(){return a.a.createElement(l.a,{className:"NotFound"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"PageNotFound Component")))}}}]);
//# sourceMappingURL=4.213559c1.chunk.js.map