(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9191)}])},7895:function(e,t,n){"use strict";n.d(t,{Sr:function(){return l},Y2:function(){return i},c6:function(){return r},tr:function(){return s}});let r=(e,t)=>"/_".concat(e.toLowerCase(),"/").concat(t),s=e=>r("tags",e),l=e=>r("categories",e),i=e=>"/_articles/".concat(e)},9191:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return _}});var r=n(5893),s=n(1664),l=n.n(s);let i=e=>{let{item:t}=e;return(0,r.jsx)(l(),{href:t.href,children:(0,r.jsxs)("div",{className:" m-1 p-2 px-4 font-mono border border-black rounded-lg flex flex-row items-center cursor-pointer gap-2 duration-200 transition-colors hover:bg-teal-200",children:[(0,r.jsx)("span",{className:"text-sm",children:t.display}),(0,r.jsx)("span",{className:" inline-flex items-center justify-center px-1 text-xs font-bold leading-none bg-red-400 text-white rounded-full",children:t.count})]})})},c=e=>{let{items:t}=e;return(0,r.jsx)("div",{className:" flex flex-wrap items-center ",children:t.map((e,t)=>(0,r.jsx)(i,{item:e},t))})};var a=n(7895),o=n(7706),d=n(7294),u=n(2097),x=n(3606),f=n(8108);let h=(e,t)=>Object.entries(e).map(e=>{let[n,r]=e;return{display:n,href:t(n),count:r.count}}).sort((e,t)=>e.display.localeCompare(t.display)),m=e=>{let{title:t,children:n}=e;return(0,r.jsxs)("div",{className:" p-4 m-4 shadow",children:[(0,r.jsx)("span",{className:"text-4xl",children:t}),(0,r.jsx)("div",{className:"my-4 pl-4",children:n})]})},j=e=>{let{content:t}=e;(0,o.Z)();let n=(0,d.useContext)(u.D);return(0,d.useEffect)(()=>n.set(new x.Z(t.articles)),[]),(0,r.jsx)(f.Z.Main,{children:(0,r.jsxs)("div",{className:"m-4 flex flex-col items-center",children:[(0,r.jsx)(m,{title:"Categories",children:(0,r.jsx)(c,{items:h(t.metadataAggregation.categories,e=>a.Sr(e))})}),(0,r.jsx)(m,{title:"Tags",children:(0,r.jsx)(c,{items:h(t.metadataAggregation.tags,e=>a.tr(e))})}),(0,r.jsx)("p",{children:"Todos"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Bread crumbs"}),(0,r.jsx)("li",{children:"Article Content style"}),(0,r.jsx)("li",{children:"General style"}),(0,r.jsx)("li",{children:"Content arrangement"})]})]})})},p=e=>(0,r.jsx)(j,{content:e.content});var g=!0,_=p}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);