"use strict";(self.webpackChunkdynamo_docs=self.webpackChunkdynamo_docs||[]).push([[7094],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,d=u["".concat(i,".").concat(f)]||u[f]||p[f]||o;return r?a.createElement(d,l(l({ref:t},m),{},{components:r})):a.createElement(d,l({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4440:(e,t,r)=>{r.r(t),r.d(t,{TeamProfileCardCol:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var a=r(7462),n=(r(7294),r(3905)),o=r(3427),l=r(4996);const c={sidebar_position:1},i="Collaborate",s={type:"mdx",permalink:"/collaborate",source:"@site/src/pages/collaborate.mdx",title:"Collaborate",description:"Are you curious about Dynamo and want to collaborate with us?",frontMatter:{sidebar_position:1}},m=[];function p(e){return(0,n.kt)(o.Z,(0,a.Z)({},e,{className:"col col--4 margin-bottom--lg",mdxType:"TeamProfileCard"}))}const u={toc:m,TeamProfileCardCol:p};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"collaborate"},"Collaborate"),(0,n.kt)("p",null,"Are you curious about Dynamo and want to collaborate with us? ",(0,n.kt)("br",null),"\nThat's great! Get in touch with us: ",(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("div",{className:"row"},(0,n.kt)(p,{name:"Contact Us",dept:"DynamoFinance",imageUrl:(0,l.Z)("img/planet.svg"),email:"dynamoprotocol@proton.me",mdxType:"TeamProfileCardCol"})))}f.isMDXComponent=!0},3427:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(4996);function o(e){let{className:t,name:r,dept:o,children:l,imageUrl:c,email:i}=e;return a.createElement("div",{className:t},a.createElement("div",{className:"card card--full-height"},a.createElement("div",{className:"card__header"},a.createElement("div",{className:"avatar avatar--vertical"},a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:c?(0,n.Z)(c):"https://eu.ui-avatars.com/api/?size=128&background=830051&color=ffffff&name="+r,onError:e=>{e.target.onerror=null,e.target.src="https://eu.ui-avatars.com/api/?size=128&background=830051&color=ffffff&name="+r}}),a.createElement("div",{className:"avatar__intro padding-top--sm"},a.createElement("h3",{className:"avatar__name"},r)))),a.createElement("div",{className:"card__body text--center"},l),a.createElement("div",{className:"card__footer"},a.createElement("ul",{class:"pills pills--block"},a.createElement("li",{class:"pills__item pills--team-icon"},i&&a.createElement("a",{href:"mailto:"+i},a.createElement("img",{height:"24",src:(0,n.Z)("img/icons/mail.svg")})))))))}}}]);