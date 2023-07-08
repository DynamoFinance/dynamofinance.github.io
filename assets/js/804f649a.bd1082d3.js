"use strict";(self.webpackChunkdynamo_docs=self.webpackChunkdynamo_docs||[]).push([[9865],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=a.createContext({}),c=function(e){var r=a.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(m.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),g=n,f=s["".concat(m,".").concat(g)]||s[g]||d[g]||o;return t?a.createElement(f,i(i({ref:r},p),{},{components:t})):a.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var m in r)hasOwnProperty.call(r,m)&&(l[m]=r[m]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},292:(e,r,t)=>{t.r(r),t.d(r,{TeamProfileCardCol:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var a=t(7462),n=(t(7294),t(3905)),o=t(3427);t(4996);const i={sidebar_position:2},l="Team",m={type:"mdx",permalink:"/team",source:"@site/src/pages/team.mdx",title:"Team",description:"<TeamProfileCardCol",frontMatter:{sidebar_position:2}},c=[{value:"Bug reports",id:"bug-reports",level:2}];function p(e){return(0,n.kt)(o.Z,(0,a.Z)({},e,{className:"col col--4 margin-bottom--lg",mdxType:"TeamProfileCard"}))}const s={toc:c,TeamProfileCardCol:p},d="wrapper";function g(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"team"},"Team"),(0,n.kt)("div",{className:"row"},(0,n.kt)(p,{name:"greenbergz",dept:"Engineer",imageUrl:"https://github.com/justingreenberg.png",email:"",mdxType:"TeamProfileCardCol"},"Lead Front-end Engineer"),(0,n.kt)(p,{name:"Rohmanus",dept:"Research and BizDev",imageUrl:"https://pbs.twimg.com/profile_images/1455325167228440579/38hdzAOc_400x400.jpg",email:"",mdxType:"TeamProfileCardCol"},"Head of BizDev"),(0,n.kt)(p,{name:"Max Entropy",dept:"Communications and BizDev",imageUrl:"https://pbs.twimg.com/profile_images/1138346724282503168/9g8zYema_400x400.png",email:"",mdxType:"TeamProfileCardCol"},"Head of Communications"),(0,n.kt)(p,{name:"ehjc",dept:"Research and Engineer",imageUrl:"https://pbs.twimg.com/profile_images/1562388428960006144/bItuzgAV_400x400.jpg",email:"",mdxType:"TeamProfileCardCol"},"Head of R&D"),(0,n.kt)(p,{name:"Benjamin Scherry",dept:"Engineer",imageUrl:"https://biggestlab.io/img/ben.webp",email:"",mdxType:"TeamProfileCardCol"},"Lead Smart-Contract Engineer"),(0,n.kt)(p,{name:"Yukai 'LaDoger' Jerng",dept:"Vyper Engineer",imageUrl:"https://biggestlab.io/img/yukai.png",email:"",mdxType:"TeamProfileCardCol"},"Vyper Smart-Contract Engineer"),(0,n.kt)(p,{name:"Sajal Kayan",dept:"Vyper Engineer",imageUrl:"https://biggestlab.io/img/sajal.webp",email:"",mdxType:"TeamProfileCardCol"},"Vyper Smart-Contract Engineer"),(0,n.kt)(p,{name:"Morgan 'Morgue' Baugh",dept:"Vyper Engineer",imageUrl:"https://biggestlab.io/img/morgan.webp",email:"",mdxType:"TeamProfileCardCol"},"Vyper Smart-Contract Engineer"),(0,n.kt)(p,{name:"0xPurloiner",dept:"Creative",imageUrl:"https://pbs.twimg.com/profile_images/1599476301269766144/KaMH_EvM_400x400.jpg",email:"",mdxType:"TeamProfileCardCol"},"Head of Creative")),(0,n.kt)("h2",{id:"bug-reports"},"Bug reports"),(0,n.kt)("p",null,"Found a bug? Please let us know and write an email. Thanks!"))}g.isMDXComponent=!0},3427:(e,r,t)=>{t.d(r,{Z:()=>o});var a=t(7294),n=t(4996);function o(e){let{className:r,name:t,dept:o,children:i,imageUrl:l,email:m}=e;return a.createElement("div",{className:r},a.createElement("div",{className:"card card--full-height"},a.createElement("div",{className:"card__header"},a.createElement("div",{className:"avatar avatar--vertical"},a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:l?(0,n.Z)(l):"https://eu.ui-avatars.com/api/?size=128&background=830051&color=ffffff&name="+t,onError:e=>{e.target.onerror=null,e.target.src="https://eu.ui-avatars.com/api/?size=128&background=830051&color=ffffff&name="+t}}),a.createElement("div",{className:"avatar__intro padding-top--sm"},a.createElement("h3",{className:"avatar__name"},t)))),a.createElement("div",{className:"card__body text--center"},i),a.createElement("div",{className:"card__footer"},a.createElement("ul",{class:"pills pills--block"},a.createElement("li",{class:"pills__item pills--team-icon"},m&&a.createElement("a",{href:"mailto:"+m},a.createElement("img",{height:"24",src:(0,n.Z)("img/icons/mail.svg")})))))))}}}]);