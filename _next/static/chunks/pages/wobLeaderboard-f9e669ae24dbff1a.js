(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{5608:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wobLeaderboard",function(){return r(4114)}])},4114:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return D}});var s=r(5893),t=r(9008),n=r.n(t),l=r(5675),i=r.n(l),o=r(7294),c=r(5028);var d=r(5432),m=r(2169),x=r(3179),p=r(917),u=r(6554),f=r(7030),h=r(7634),b=(0,m.m)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),g=(0,x.gJ)("skeleton-start-color"),v=(0,x.gJ)("skeleton-end-color"),j=(0,p.F4)({from:{opacity:0},to:{opacity:1}}),y=(0,p.F4)({from:{borderColor:g.reference,background:g.reference},to:{borderColor:v.reference,background:v.reference}}),w=(0,u.G)(((e,a)=>{const r={...e,fadeDuration:"number"===typeof e.fadeDuration?e.fadeDuration:.4,speed:"number"===typeof e.speed?e.speed:.8},t=(0,f.mq)("Skeleton",r),n=function(){const e=(0,o.useRef)(!0);return(0,o.useEffect)((()=>{e.current=!1}),[]),e.current}(),{startColor:l="",endColor:i="",isLoaded:c,fadeDuration:p,speed:u,className:w,fitContent:N,...k}=(0,x.Lr)(r),[E,F]=(0,h.dQ)("colors",[l,i]),_=function(e){const a=(0,o.useRef)();return(0,o.useEffect)((()=>{a.current=e}),[e]),a.current}(c),B=(0,d.cx)("chakra-skeleton",w),S={...E&&{[g.variable]:E},...F&&{[v.variable]:F}};if(c){const e=n||_?"none":`${j} ${p}s`;return(0,s.jsx)(m.m.div,{ref:a,className:B,__css:{animation:e},...k})}return(0,s.jsx)(b,{ref:a,className:B,...k,__css:{width:N?"fit-content":void 0,...t,...S,_dark:{...t._dark,...S},animation:`${u}s linear infinite alternate ${y}`}})}));w.displayName="Skeleton";var N=({size:e="2rem",...a})=>(0,s.jsx)(w,{borderRadius:"full",boxSize:e,...a});N.displayName="SkeletonCircle";var k=Object.freeze(["base","sm","md","lg","xl","2xl"]);var E=r(6336);var F=r(8940);function _(e){var a,r;const s=(0,d.Kn)(e)?e:{fallback:null!=e?e:"base"},t=(0,F.F)().__breakpoints.details.map((({minMaxQuery:e,breakpoint:a})=>({breakpoint:a,query:e.replace("@media screen and ","")}))),n=t.map((e=>e.breakpoint===s.fallback)),l=function(e,a={}){const{ssr:r=!0,fallback:s}=a,{getWindow:t}=(0,E.O)(),n=Array.isArray(e)?e:[e];let l=Array.isArray(s)?s:[s];l=l.filter((e=>null!=e));const[i,c]=(0,o.useState)((()=>n.map(((e,a)=>({media:e,matches:r?!!l[a]:t().matchMedia(e).matches})))));return(0,o.useEffect)((()=>{const e=t();c(n.map((a=>({media:a,matches:e.matchMedia(a).matches}))));const a=n.map((a=>e.matchMedia(a))),r=e=>{c((a=>a.slice().map((a=>a.media===e.media?{...a,matches:e.matches}:a))))};return a.forEach((e=>{"function"===typeof e.addListener?e.addListener(r):e.addEventListener("change",r)})),()=>{a.forEach((e=>{"function"===typeof e.removeListener?e.removeListener(r):e.removeEventListener("change",r)}))}}),[t]),i.map((e=>e.matches))}(t.map((e=>e.query)),{fallback:n,ssr:s.ssr});return null!=(r=null==(a=t[l.findIndex((e=>1==e))])?void 0:a.breakpoint)?r:s.fallback}function B(e,a){var r;const s=_((0,d.Kn)(a)?a:{fallback:null!=a?a:"base"}),t=(0,F.F)();if(!s)return;const n=Array.from((null==(r=t.__breakpoints)?void 0:r.keys)||[]),l=Array.isArray(e)?Object.fromEntries(Object.entries(function(e,a=k){const r={};return e.forEach(((e,s)=>{const t=a[s];null!=e&&(r[t]=e)})),r}(e,n)).map((([e,a])=>[e,a]))):e;return function(e,a,r=k){let s=Object.keys(e).indexOf(a);if(-1!==s)return e[a];let t=r.indexOf(a);for(;t>=0;){const a=r[t];if(e.hasOwnProperty(a)){s=t;break}t-=1}if(-1!==s)return e[r[s]]}(l,s,n)}var S=3,C=e=>{const{noOfLines:a=S,spacing:r="0.5rem",skeletonHeight:t="0.5rem",className:n,startColor:l,endColor:i,isLoaded:o,fadeDuration:c,speed:x,variant:p,size:u,colorScheme:f,children:h,...b}=e,g=B("number"===typeof a?[a]:a)||S,v=Array(g).fill(1).map(((e,a)=>a+1));const j=e=>g>1&&e===v.length?"80%":"100%",y=(0,d.cx)("chakra-skeleton__group",n);return(0,s.jsx)(m.m.div,{className:y,...b,children:v.map(((e,a)=>{if(o&&a>0)return null;const n=o?null:{mb:e===v.length?"0":r,width:j(e),height:t};return(0,s.jsx)(w,{startColor:l,endColor:i,isLoaded:o,fadeDuration:c,speed:x,variant:p,size:u,colorScheme:f,...n,children:0===a?h:void 0},v.length.toString()+e)}))})};C.displayName="SkeletonText";var L=r(9603),A=r(3024);var D=function(){var e=[{rank:"99999",avatar:"/WoB/top_leads1.png",name:"Raadha",prs:"99999",score:"99999"},{rank:"99999",avatar:"/WoB/top_leads.png",name:"Raadha",prs:"99999",score:"99999"},{rank:"99999",avatar:"/WoB/top_leads.png",name:"Raadha",prs:"99999",score:"99999"},{rank:"99999",avatar:"/WoB/leaderbord_Avatar.png",name:"mahoganycrib",prs:"99999",score:"99999"},{rank:"99999",avatar:"/WoB/leaderbord_Avatar.png",name:"mahoganycrib",prs:"99999",score:"99999"}];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n(),{children:[(0,s.jsx)("title",{children:"Leaderboard | GirlScript Winter of Blockchain 2024 | GirlScript Foundation India"}),(0,s.jsx)("meta",{name:"description",content:"GirlScript Winter of Blockchain Leaderboard"}),(0,s.jsx)("title",{children:"GirlScript Winter of Blockchain 2024 | GirlScript Foundation India"}),(0,s.jsx)("link",{rel:"icon",href:"/WoB/Favicon.ico"})]}),(0,s.jsx)(c.L,{mt:10}),(0,s.jsx)("div",{className:"self-stretch flex w-screen flex-col items-center justify-start py-0 px-0 box-border max-w-full text-center text-4xl text-skyblue font-semibold",children:(0,s.jsx)("div",{className:"flex flex-col items-center justify-start gap-[66px] w-full",children:(0,s.jsxs)("div",{className:"w-full flex items-center justify-center gap-1",children:[(0,s.jsx)("div",{className:"flex-grow pt-2 flex items-center justify-start",children:(0,s.jsx)("div",{className:"h-[2px] w-full rounded-md bg-gradient-to-r from-[#00008B] to-[#ADD8E6] p-[2px]"})}),(0,s.jsxs)("h1",{className:"m-0 text-4xl sm:text-5xl font-semibold text-[#00008B]",children:[(0,s.jsx)("span",{className:"text-[#23A3CD]",children:"WOB 2024 "}),"Top Performers"]}),(0,s.jsx)("div",{className:"flex-grow flex pt-2 items-center justify-end",children:(0,s.jsx)("div",{className:"h-[2px] w-full rounded-md bg-gradient-to-r from-[#00008B] to-[#ADD8E6] p-[2px]"})})]})})}),(0,s.jsx)(c.L,{mt:16}),(0,s.jsxs)("div",{className:"py-5 px-0 xl:pb-12 xl:px-48 xl:pt-0 text-center",children:[(0,s.jsxs)("div",{className:"flex md:flex-row justify-between gap-y-1 gap-x-1 md:gap-x-2 items-center my-10",children:[(0,s.jsxs)("div",{className:"bg-[#B9EEFF] shadow-2xl rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto",children:[void 0===e[1]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(N,{className:"skeleton-circle-md"}),(0,s.jsx)(C,{mt:"4",noOfLines:1,spacing:"4"})]}),void 0!==e[1]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{className:"w-12 md:w-16 lg:w-24 rounded-full m-auto inline-block object-cover bg-[#B9EEFF]",src:void 0!==e[1]?e[1].avatar:null,alt:""}),(0,s.jsx)(L.G,{className:"invisible lg:visible w-8 h-8 rounded-full border-5 border-white absolute bottom-[30%] right-[30%] bg-[#CD7F32] inline-block",icon:A.zhw,size:"2x"}),(0,s.jsx)("h3",{className:"text-black font-semibold mt-2 text-xs sm:text-sm md:text-md",children:void 0!==e[1]?e[1].name:null})]})]}),(0,s.jsxs)("div",{className:"bg-[#B9EEFF] shadow-2xl rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto",children:[void 0===e[0]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(N,{className:"skeleton-circle-lg"}),(0,s.jsx)(C,{mt:"4",noOfLines:1,spacing:"4"})]}),void 0!==e[0]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{className:"w-12 md:w-16 lg:w-40 rounded-full m-auto bg-[#B9EEFF]",src:void 0!==e[0]?e[0].avatar:null,alt:""}),(0,s.jsx)(L.G,{className:"invisible lg:visible w-10 h-10 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-[#FFD700] inline-block",icon:A.zhw,size:"3x"}),(0,s.jsx)("h3",{className:"text-black font-semibold mt-4 text-xs sm:text-sm md:text-md",children:void 0!==e[0]?e[0].name:null})]})]}),(0,s.jsxs)("div",{className:"bg-[#B9EEFF] shadow-2xl rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto",children:[void 0===e[2]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(N,{className:"skeleton-circle-md"}),(0,s.jsx)(C,{mt:"4",noOfLines:1,spacing:"4"})]}),void 0!==e[2]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{className:"w-12 md:w-16 lg:w-24 rounded-full m-auto bg-[#B9EEFF]",src:void 0!==e[2]?e[2].avatar:null,alt:""}),(0,s.jsx)(L.G,{className:"invisible lg:visible w-8 h-8 rounded-full border-5 border-white absolute bottom-[30%] right-[30%] bg-[#C0C0C0] inline-block",icon:A.zhw,size:"2x"}),(0,s.jsx)("h3",{className:"text-black font-semibold mt-2 text-xs sm:text-sm md:text-md",children:void 0!==e[2]?e[2].name:null})]})]})]}),(0,s.jsx)("div",{className:"w-full max-w-[1171px] p-5 m-auto rounded-[35px] mt-5 border-2 bg-[#B9EEFF]",children:(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"min-w-full text-left text-sm whitespace-nowrap",children:[(0,s.jsxs)("thead",{children:[(0,s.jsxs)("tr",{className:"bg-[#00008B] text-[#56AAC5] font-semibold text-lg h-[89px] opacity-70",children:[(0,s.jsx)("th",{scope:"col",className:"px-6 py-4 rounded-l-[35px]",children:"Rank"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-4",children:"Avatar"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-4",children:"Github Username"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-4",children:"No. of PR\u2019s"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-4",children:"Score"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-4 rounded-r-[35px]",children:"Badge"})]}),(0,s.jsx)("br",{})]}),(0,s.jsx)("tbody",{children:e.map((function(e,a){return(0,s.jsxs)("tr",{className:"h-[89px] text-lg text-[#56AAC5] ".concat(a%2===0?"bg-white":"bg-gradient-to-r from-[#ADD8E6] to-[#00008B] text-white opacity-70"," hover:bg-neutral-100 rounded-[35px]"),children:[(0,s.jsx)("td",{scope:"row",className:"px-6 py-4 rounded-l-[35px]",children:e.rank}),(0,s.jsx)("td",{className:"px-6 py-4",children:(0,s.jsx)(i(),{className:"rounded-full",width:"40px",height:"40px",src:e.avatar,alt:""})}),(0,s.jsx)("td",{className:"px-6 py-4",children:(0,s.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,s.jsx)(i(),{className:"rounded-full",width:"24px",height:"24px",src:"/WoB/leaderboard_github.png",alt:""}),e.name]})}),(0,s.jsx)("td",{className:"px-6 py-4",children:e.prs}),(0,s.jsx)("td",{className:"px-6 py-4",children:e.score}),(0,s.jsx)("td",{className:"px-6 py-4 rounded-r-[35px]",children:e.badge&&(0,s.jsx)(i(),{src:e.badge,alt:""})})]},a)}))})]})})})]})]})}},5028:function(e,a,r){"use strict";r.d(a,{L:function(){return s}});var s=(0,r(2169).m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});s.displayName="Spacer"}},function(e){e.O(0,[948,870,774,888,179],(function(){return a=5608,e(e.s=a);var a}));var a=e.O();_N_E=a}]);