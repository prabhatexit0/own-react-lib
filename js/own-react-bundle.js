(()=>{"use strict";var n={958:(n,e,t)=>{t.d(e,{Z:()=>l});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,".__btn {\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 1.25rem;\n  outline-offset: 1px;\n  padding: 1.25rem 3rem;\n  border-radius: 0.5rem;\n  border: 1px solid #1a1a1a;\n  outline: 1px solid transparent;\n  transition: all 0.375s ease-in-out;\n}\n\n.__btn:hover,\n.__btn:focus {\n  color: #fafafa;\n  outline-offset: 1px;\n  border: 1px solid #fafafa;\n  background-color: #1a1a1a;\n  outline: 1px solid #1a1a1a;\n}\n",""]);const l=i},767:(n,e,t)=>{t.d(e,{Z:()=>l});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"*,\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: monospace;\n}\n\nhtml,\nbody {\n  padding: 1rem;\n}\n\nhtml,\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  padding-bottom: 1rem;\n}\n",""]);const l=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],l=0;l<n.length;l++){var s=n[l],c=o.base?s[0]+o.base:s[0],u=a[c]||0,d="".concat(c," ").concat(u);a[c]=u+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=r(f,o);o.byIndex=l,e.splice(l,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var l=t(a[i]);e[l].references--}for(var s=o(n,r),c=0;c<a.length;c++){var u=t(a[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=function(n){return 0===Object.keys(n).length?"":Object.keys(n).reduce((function(e,t){return e+t.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+n[t]+";"}),"")};function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(n)}var o=function(n,e){3===n.nodeType&&3===e.nodeType&&n.textContent!==e.textContent&&(n.textContent=e.textContent),3===n.nodeType&&3!==e.nodeType&&n.replaceWith(e),3!==n.nodeType&&3===e.nodeType&&n.replaceWith(e),3!==n.nodeType&&3!==e.nodeType&&(n.tagName!==e.tagName&&n.replaceWith(e),n.tagName===e.tagName&&(r(n,e),a(n,e)))},r=function(n,e){var t=Array.from(n.attributes),o=Array.from(e.attributes);t.forEach((function(e){n.removeAttribute(e.name)})),o.forEach((function(e){n.setAttribute(e.name,e.value)}))},a=function(n,e){var t=Array.from(n.childNodes),r=Array.from(e.childNodes);r.forEach((function(e,o){o>=t.length&&n.appendChild(e)})),t.forEach((function(e,t){t>=r.length&&n.removeChild(e)})),t.forEach((function(n,e){e<r.length&&o(n,r[e])}))};const i=function(t){var o,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i="string"==typeof t?null===(o=document)||void 0===o?void 0:o.createElement(t):t();a&&"object"===e(a)&&Object.keys(a).length>0&&(null===(r=Object.keys(a))||void 0===r||r.map((function(e){e.includes("on")?i.addEventListener(e.slice(2).toLowerCase(),a[e]):"classname"===e.toLowerCase()?i.setAttribute("class",a[e]):"style"===e.toLowerCase()?i.setAttribute("style",n(a[e])):null==i||i.setAttribute(e,a[e])})));for(var l=arguments.length,s=new Array(l>2?l-2:0),c=2;c<l;c++)s[c-2]=arguments[c];return null==s||s.map((function(n){"string"==typeof n|"number"==typeof n|"boolean"==typeof n|void 0===n|null===n?i.innerHTML=n:i.appendChild(n)})),i},l=function(n,e){var t=document.getElementById(e);if(!t.firstChild)return t.appendChild(n);var r=t.firstChild;o(r,n)};var s=t(379),c=t.n(s),u=t(795),d=t.n(u),p=t(569),f=t.n(p),h=t(565),m=t.n(h),v=t(216),y=t.n(v),b=t(589),g=t.n(b),T=t(958),x={};x.styleTagTransform=g(),x.setAttributes=m(),x.insert=f().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=y(),c()(T.Z,x),T.Z&&T.Z.locals&&T.Z.locals;const C=function(n){return i("button",{className:"__btn",onClick:function(){console.log("Button clicked")}},n)};var A=t(767),w={};w.styleTagTransform=g(),w.setAttributes=m(),w.insert=f().bind(null,"head"),w.domAPI=d(),w.insertStyleElement=y(),c()(A.Z,w),A.Z&&A.Z.locals&&A.Z.locals;var M=function(){return i("div",{id:"root3"},i("h1",null,"My Second Own React App"),i("p",null,i("div",{className:"testing"},i("h1",null,"My Second Own React App with custom Babel and Webpack config"),i("p",null,"This is another nesting level"),i("p",null,"This is another nesting level"),i("p",null,"This is another nesting level"),i(C,null,"Click me second"))))},E=function(){return i("div",{id:"root4"},i("h1",null,"My Third Own React App"),i("p",null,i("div",{className:"testing"},i("h1",null,"My Third Own React App with custom Babel and Webpack config"),i("p",null,"This is another nesting level"),i("p",null,"This is another another nesting level"),i(C,null,"Click me third"))))},O=function(){return i("div",{id:"root4"},i("h1",null,"My Fourth Own React App"))};l(i((function(){return i("div",{id:"root2"},i("h1",null,"My First Own React App"),i("p",null,i("div",{className:"testing"},i("h1",null,"My First Own React App with custom Babel and Webpack config"),i("p",null,"This is another nesting level"),i(C,null,"Click me"))))}),null),"root"),setTimeout((function(){l(i(M,null),"root")}),5e3),setTimeout((function(){l(i(E,null),"root")}),1e4),setTimeout((function(){l(i(O,null),"root")}),15e3)})()})();