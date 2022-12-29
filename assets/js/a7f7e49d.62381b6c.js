"use strict";(self.webpackChunkdynamo_docs=self.webpackChunkdynamo_docs||[]).push([[7595],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var r=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||n;return o?r.createElement(m,a(a({ref:t},u),{},{components:o})):r.createElement(m,a({ref:t},u))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<n;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1921:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=o(7462),i=(o(7294),o(3905));const n={sidebar_position:8,title:"Base pool architecture"},a=void 0,l={unversionedId:"Dynamo/Protocol/base_pool_architecture",id:"Dynamo/Protocol/base_pool_architecture",title:"Base pool architecture",description:"The graph below serves as a visualisation of Dynamo's base pool architecture:",source:"@site/docs/Dynamo/Protocol/8_base_pool_architecture.md",sourceDirName:"Dynamo/Protocol",slug:"/Dynamo/Protocol/base_pool_architecture",permalink:"/docs/Dynamo/Protocol/base_pool_architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Dynamo/Protocol/8_base_pool_architecture.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Base pool architecture"},sidebar:"tutorialSidebar",previous:{title:"Base pool compositions",permalink:"/docs/Dynamo/Protocol/base_pool_composition"},next:{title:"Future growth",permalink:"/docs/Dynamo/Protocol/future_growth"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The graph below serves as a visualisation of Dynamo's base pool architecture:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Base pool architecture",src:o(5137).Z,width:"2825",height:"1853"})),(0,i.kt)("p",null,"The Dynamo decentralised stablecoin base pool is built on top of the Balancer boosted pool infrastructure and enables liquidity providers to optimise their yield through the use of Dynamo's vault architecture. A Balancer liquidity provider (BLP) is able to provide liquidity in exchange for the liquidity pool token (termed as USD in this depiction). If a user provides DAI to the liquidity pool, the DAI will be deposited in the DAI linear pool while the liquidity provider will receive USD in return. Due to the way boosted pools work 90% of the DAI that's deposited in the decentralised stablecoin base pool will be routed into the Dynamo DAI vault. The Dynamo DAI vault will then mobilise that capital in supported lending venues."),(0,i.kt)("p",null,"The capital that flows into a Dynamo vault becomes active through the vault rebalancing process which puts that capital into productive use by splitting it into the underlying lending platforms based on the current vault allocation as outlined in the weight distribution of the respective vault. Weight distributions are determined through the vault reweight process which keeps the allocations of Dynamo vaults in sync with interest rates by allowing independent strategists to submit weight proposals that increase Dynamo vault yields in exchange for 1.0% of the yield that is generated by the respective vault for as long as the proposal remains active. Please review the Governance section to get a better understanding of the Dynamo vault infrastructure."),(0,i.kt)("p",null,"On top of enabling liquidity providers to integrate lending into their strategies Dynamo will also allow them to optimise their liquidity mining activities by offering a range of autocompounding vaults that liquidity providers can utilise in order to interact with the Dynamo base pool infrastructure in a plug and play manner. Dynamo's autocompounding vaults will maximise the efficiency of the yield farming process by socialing the costs that come with it. The Dynamo autocompounding vault infrastructure will also enable the development of metapool liquidity by allowing the liquidity providers of Dynamo metapools to tap into the liquidity mining rewards of Dynamo's base pools."))}p.isMDXComponent=!0},5137:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/base_pool-34b714d8f8997a268c256fa4067d6eef.png"}}]);