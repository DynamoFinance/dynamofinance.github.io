"use strict";(self.webpackChunkdynamo_docs=self.webpackChunkdynamo_docs||[]).push([[1930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={slug:"vault-development",title:"Vault development",authors:["ehjc","ben"],tags:["vault","erc-4626"]},l=void 0,i={permalink:"/blog/vault-development",editUrl:"https://github.com/DynamoFinance/dynamofinance.github.io/tree/main/blog/2023-01-03-vault-development.md",source:"@site/blog/2023-01-03-vault-development.md",title:"Vault development",description:"Happy new year Dynamos!",date:"2023-01-03T00:00:00.000Z",formattedDate:"January 3, 2023",tags:[{label:"vault",permalink:"/blog/tags/vault"},{label:"erc-4626",permalink:"/blog/tags/erc-4626"}],readingTime:1.25,hasTruncateMarker:!1,authors:[{name:"ehjc",title:"Head of R&D",url:"https://github.com/f3rmion",imageURL:"https://pbs.twimg.com/profile_images/1562388428960006144/bItuzgAV_400x400.jpg",key:"ehjc"},{name:"Ben Scherry",title:"Lead Smart-Contract Engineer",url:"https://github.com/scherrey",imageURL:"https://github.com/scherrey.png",key:"ben"}],frontMatter:{slug:"vault-development",title:"Vault development",authors:["ehjc","ben"],tags:["vault","erc-4626"]},nextItem:{title:"Development grant",permalink:"/blog/balancer-grant"}},s={authorsImageUrls:[void 0,void 0]},p=[{value:"Update 2023-01-13",id:"update-2023-01-13",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Happy new year Dynamos! \ud83c\udf89"),(0,a.kt)("p",null,"We are progressing in the development of our ERC-4626 vault.\nWe plan to apply this vault structure within our decentralised base pool that we deploy as a boosted pool on Balancer V2."),(0,a.kt)("p",null,"A general diagram for the infrastructure can be seen below, however, an overall overview will be posted as a separat part of the documentation.\nFurthermore, we will update this blog post with new insights about development steps."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Vault",src:n(9478).Z,width:"1007",height:"771"})),(0,a.kt)("p",null,"Above the blue parts (Assetmanager) are Vyper contracts that have been developed internally within the past months.\nThose asset manager interact with linear pools as developed by Balancer.\nAll linear pools are incorporated in a boosted stable pool.\nHence we are able to shift most of the liquidity to the ERC-4626 vaults, which will then be deployed to different lending markets (e.g., AAVE or Compound)."),(0,a.kt)("p",null,"The proportions of the underlying lending markets are defined by asset-specific Strategies.\nIn order to participate as a Strategist, a new set of weights has to be proposed.\nThis new set of weights has to increase the APY of the asset-specific vault.\nIf it does, the Strategy goes live and the Strategist earns part of the revenue that is collected while the Strategy is active."),(0,a.kt)("p",null,"The governance part of the ERC-4626 vault will be released soon as well."),(0,a.kt)("h3",{id:"update-2023-01-13"},"Update 2023-01-13"),(0,a.kt)("p",null,"Since the Balancer infrastructure does not allow an easy solution for custom asset manager yet (maybe in Balancer V3?), we decided to interface with the ERC-4626 vaults directly."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Vault-2",src:n(1486).Z,width:"1007",height:"771"})))}u.isMDXComponent=!0},1486:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-01-13_vault-2cbf7e314d84e99184fe25c40f79aa86.png"},9478:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vault-c1109c70e909563c54d2060132092d99.png"}}]);