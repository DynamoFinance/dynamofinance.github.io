"use strict";(self.webpackChunkdynamo_docs=self.webpackChunkdynamo_docs||[]).push([[78],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),d=n,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1,title:"Introduction"},i=void 0,s={unversionedId:"Dynamo/Vaults/intro",id:"Dynamo/Vaults/intro",title:"Introduction",description:"Dynamo vaults are the epicenter of Dynamo's infrastructure and their task is to maximise the yield of the assets that liquidity providers and other users provide to the protocol. Dynamo vaults allocate 90% of their liquidity to the underlying lending markets in proportions that are represented by weights that sum up to unity. Vault weights are subject to change through a process that allows independent strategists to submit weight proposals for specific Dynamo vaults in exchange for 1% of the yield that the vaults generate as a result of the proposed allocation.",source:"@site/docs/Dynamo/Vaults/intro.md",sourceDirName:"Dynamo/Vaults",slug:"/Dynamo/Vaults/intro",permalink:"/docs/Dynamo/Vaults/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Dynamo/Vaults/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Base pool architecture",permalink:"/docs/Dynamo/base_pool_architecture"},next:{title:"Governance",permalink:"/docs/Dynamo/Vaults/governance"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Dynamo vaults are the epicenter of Dynamo's infrastructure and their task is to maximise the yield of the assets that liquidity providers and other users provide to the protocol. Dynamo vaults allocate 90% of their liquidity to the underlying lending markets in proportions that are represented by weights that sum up to unity. Vault weights are subject to change through a process that allows independent strategists to submit weight proposals for specific Dynamo vaults in exchange for 1% of the yield that the vaults generate as a result of the proposed allocation."),(0,n.kt)("p",null,"Dynamo vaults are completely decentralised and everyone is allowed to engage with the weight management process which is entirely permissionless. By opening up the weight management process to the defi community Dynamo vaults are able to optimise the vault management process through it's complete decentralisation. The decentralisation of the vault reweight process eliminates the need for the existence of whitelisted accounts as every defi user can participate in the capital allocation process enabling Dynamo vaults to offer an outsized performance to their users. Safety mechanisms ensure that no weight distribution is accepted at t = t1 that gives a lower return than was available at t = t0."),(0,n.kt)("p",null,"Dynamo vaults can integrate with a multitude of defi protocols in the future with the deployment of suitable protocol adapters enabling Dynamo vaults to stay up to date with defi yield opportunities as the defi space evolves over time. The integration of new protocols with the Dynamo architecture will expand the range of venues that can be utilised by the underlying Dynamo vaults enabling the further optimisation of the yield generation process. Dynamo vaults are essentially a pool of capital with the objective of generating the highest possible yield for each supported asset in a diversified manner."))}p.isMDXComponent=!0}}]);