"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[674],{67865:function(e,t,r){r.r(t),r.d(t,{default:function(){return $}});var n=r(57437),l=r(42362),a=r(93259),i=r(30551),s=r(2265),o=r(72435),c=r(62444),u=r(84637),f=r(48854),d=r(29908),p=r(14208),h=r(31258),m=r(41937),x=r(81165),g=r(86276),v=r(96659),y=r(39806),b=r(19323),w=r(33303),j=r(55865),O=r(12426),k=r(16384),N=r(82702);function E(e,t,r,n){var l;return"number"==typeof t?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):"<"===t?r:null!==(l=n.get(t))&&void 0!==l?l:e}let _=(e,t,r)=>{let n=t-e;return((r-e)%n+n)%n+e};var P=r(10113),A=r(50406),M=r(5312);function S(e,t){return e.at!==t.at?e.at-t.at:null===e.value?1:null===t.value?-1:0}function B(e,t){return t.has(e)||t.set(e,{}),t.get(e)}function C(e,t){return t[e]||(t[e]=[]),t[e]}let I=e=>"number"==typeof e,F=e=>e.every(I);function D(e,t,r,n){let l=(0,u.I)(e,n),a=l.length;(0,d.k)(!!a,"No valid element provided.");let i=[];for(let e=0;e<a;e++){let n=l[e];f.R.has(n)||function(e){let t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},r=(0,m.v)(e)?new x.e(t,{enableHardwareAcceleration:!1}):new g.W(t,{enableHardwareAcceleration:!0});r.mount(e),f.R.set(e,r)}(n);let s=f.R.get(n),o={...r};"function"==typeof o.delay&&(o.delay=o.delay(e,a)),i.push(...(0,h.w)(s,{...t,transition:o},{}))}return new p.s(i)}let z=e=>Array.isArray(e)&&Array.isArray(e[0]),R=e=>function(t,r,n){let l;return l=z(t)?function(e,t,r){let n=[];return(function(e,{defaultTransition:t={},...r}={},n){let l=t.duration||.3,a=new Map,i=new Map,s={},o=new Map,c=0,f=0,d=0;for(let r=0;r<e.length;r++){let a=e[r];if("string"==typeof a){o.set(a,f);continue}if(!Array.isArray(a)){o.set(a.name,E(f,a.at,c,o));continue}let[p,h,m={}]=a;void 0!==m.at&&(f=E(f,m.at,c,o));let x=0,g=(e,r,n,a=0,i=0)=>{let s=Array.isArray(e)?e:[e],{delay:o=0,times:c=(0,j.Y)(s),type:u="keyframes",...p}=r,{ease:h=t.ease||"easeOut",duration:m}=r,g="function"==typeof o?o(a,i):o,v=s.length;if(v<=2&&"spring"===u){let e=100;2===v&&F(s)&&(e=Math.abs(s[1]-s[0]));let t={...p};void 0!==m&&(t.duration=(0,w.w)(m));let r=function(e,t=100){let r=(0,y.S)({keyframes:[0,t],...e}),n=Math.min((0,b.i)(r),b.E);return{type:"keyframes",ease:e=>r.next(n*e).value/t,duration:(0,w.X)(n)}}(t,e);h=r.ease,m=r.duration}null!=m||(m=l);let k=f+g,N=k+m;1===c.length&&0===c[0]&&(c[1]=1);let E=c.length-s.length;E>0&&(0,O.c)(c,E),1===s.length&&s.unshift(null),function(e,t,r,n,l,a){!function(e,t,r){for(let n=0;n<e.length;n++){let l=e[n];l.at>t&&l.at<r&&((0,A.cl)(e,l),n--)}}(e,l,a);for(let s=0;s<t.length;s++){var i;e.push({value:t[s],at:(0,M.t)(l,a,n[s]),easing:(i=s,(0,P.N)(r)?r[_(0,r.length,i)]:r)})}}(n,s,h,c,k,N),x=Math.max(g+m,x),d=Math.max(N,d)};if((0,N.i)(p))g(h,m,C("default",B(p,i)));else{let e=(0,u.I)(p,n,s),t=e.length;for(let r=0;r<t;r++){let n=B(e[r],i);for(let e in h)g(h[e],m[e]?{...m,...m[e]}:{...m},C(e,n),r,t)}}c=f,f+=x}return i.forEach((e,n)=>{for(let l in e){let i=e[l];i.sort(S);let s=[],o=[],c=[];for(let e=0;e<i.length;e++){let{at:t,value:r,easing:n}=i[e];s.push(r),o.push((0,k.Y)(0,d,t)),c.push(n||"easeOut")}0!==o[0]&&(o.unshift(0),s.unshift(s[0]),c.unshift("easeInOut")),1!==o[o.length-1]&&(o.push(1),s.push(null)),a.has(n)||a.set(n,{keyframes:{},transition:{}});let u=a.get(n);u.keyframes[l]=s,u.transition[l]={...t,duration:d,ease:c,times:o,...r}}}),a})(e,t,r).forEach(({keyframes:e,transition:t},r)=>{let l;l=(0,N.i)(r)?(0,v.D)(r,e.default,t.default):D(r,e,t),n.push(l)}),new p.s(n)}(t,r,e):"object"!=typeof r||Array.isArray(r)?(0,v.D)(t,r,n):D(t,r,n,e),e&&e.animations.push(l),l};R();var G=r(47544),U=r(73587),W=r(1657);let Y=e=>{let{words:t,className:r}=e,[l,a]=function(){let e=(0,o.h)(()=>({current:null,animations:[]})),t=(0,o.h)(()=>R(e));return(0,c.z)(()=>{e.animations.forEach(e=>e.stop())}),[e,t]}(),i=t.split(" ");return(0,s.useEffect)(()=>{console.log(i),a("span",{opacity:1},{duration:2,delay:function(e=.1,{startDelay:t=0,from:r=0,ease:n}={}){return(l,a)=>{let i=e*Math.abs(("number"==typeof r?r:function(e,t){if("first"===e)return 0;{let r=t-1;return"last"===e?r:r/2}}(r,a))-l);if(n){let t=a*e;i=(0,G.R)(n)(i/t)*t}return t+i}}(.2)})},[l.current]),(0,n.jsx)("div",{className:(0,W.cn)("font-bold",r),children:(0,n.jsx)("div",{className:"my-4",children:(0,n.jsx)("div",{className:" dark:text-white text-black leading-snug tracking-wide",children:(0,n.jsx)(U.E.div,{ref:l,children:i.map((e,t)=>(0,n.jsxs)(U.E.span,{className:" ".concat(t>3?"text-purple":"dark:text-white text-black"," opacity-0"),children:[e," "]},e+t))})})})})};var $=()=>(0,n.jsxs)("div",{className:"pb-16 pt-20",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(i.$,{className:"-top-40 -left-10 md:-left-32 md:-top-20 h-screen",fill:"white"}),(0,n.jsx)(i.$,{className:"h-[80vh] w-[50vw] top-10 left-full",fill:"purple"}),(0,n.jsx)(i.$,{className:"left-80 top-28 h-[80vh] w-[50vw]",fill:"blue"})]}),(0,n.jsx)("div",{className:"h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]   absolute top-0 left-0 flex items-center justify-center",children:(0,n.jsx)("div",{className:"absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100   bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"})}),(0,n.jsx)("div",{className:"flex justify-center relative my-20 z-10",children:(0,n.jsxs)("div",{className:"max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center",children:[(0,n.jsx)("p",{className:"uppercase tracking-widest text-xs text-center text-blue-100 max-w-80",children:"MAGIE VISUELLE DYNAMIQUE"}),(0,n.jsx)(Y,{words:"Transforming Moments into Timeless Stories",className:"text-center text-[40px] md:text-5xl lg:text-6xl"}),(0,n.jsx)("p",{className:"text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl",children:"Hi! I'm Yessine, a professional Photo/ Videographer based in Morocco."}),(0,n.jsx)("a",{href:"#projects",children:(0,n.jsx)(a.Z,{title:"Montrer mon travail",icon:(0,n.jsx)(l.nkz,{}),position:"right"})})]})})]})},93259:function(e,t,r){var n=r(57437);r(2265),t.Z=e=>{let{title:t,icon:r,position:l,handleClick:a,otherClasses:i}=e;return(0,n.jsxs)("button",{className:"relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none",onClick:a,children:[(0,n.jsx)("span",{className:"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"}),(0,n.jsxs)("span",{className:"inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg\n             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ".concat(i),children:["left"===l&&r,t,"right"===l&&r]})]})}},30551:function(e,t,r){r.d(t,{$:function(){return a}});var n=r(57437),l=r(1657);r(2265);let a=e=>{let{className:t,fill:r}=e;return(0,n.jsxs)("svg",{className:(0,l.cn)("animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 3787 2842",fill:"none",children:[(0,n.jsx)("g",{filter:"url(#filter)",children:(0,n.jsx)("ellipse",{cx:"1924.71",cy:"273.501",rx:"1924.71",ry:"273.501",transform:"matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)",fill:r||"white",fillOpacity:"0.21"})}),(0,n.jsx)("defs",{children:(0,n.jsxs)("filter",{id:"filter",x:"0.860352",y:"0.838989",width:"3785.16",height:"2840.26",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,n.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,n.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,n.jsx)("feGaussianBlur",{stdDeviation:"151",result:"effect1_foregroundBlur_1065_8"})]})})]})}},70158:function(e,t,r){r.d(t,{w_:function(){return u}});var n=r(2265),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(l),i=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var n,l;n=t,l=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(f,s({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:l,size:a,title:o}=e,u=function(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(e,i),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(l)}}}]);