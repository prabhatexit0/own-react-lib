(()=>{"use strict";const e=e=>0===Object.keys(e).length?"":Object.keys(e).reduce(((t,n)=>t+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+e[n]+";"),""),t=(n,s={},l={},r=[],o=null)=>{const c=document?.createElement(n);return"object"==typeof s&&Object.keys(s).length>0&&Object.keys(s)?.map((t=>{t.includes("on")&&c.addEventListener(t.slice(2),s[t]),"classname"!==t.toLowerCase()&&"class"!==t||c.setAttribute("class",s[t]),"style"===t.toLowerCase()&&c.setAttribute("style",e(s[t])),c?.setAttribute(t,s[t])})),"object"==typeof l&&Object.keys(l).length>0&&(c.state={},c.state={...l}),o&&o instanceof HTMLElement&&o.appendChild(c),"string"==typeof r|"number"==typeof r|"boolean"==typeof r|void 0===r|null===r?c.innerHTML=r:r?.map((e=>{t({element:e?.element,props:e?.props,state:e?.state,children:e?.children,parentElement:c})})),c},n={createElement:t,styleToString:e,render:(e,t)=>{document.getElementById(t).appendChild(e)}};n.render((()=>n.createElement("div",null,"\n      ",n.createElement("h1",null,"My First Own React App"),"\n      ",n.createElement("p",null,"Lets see how it works"),"\n    ")),"root")})();