"use strict";(self.webpackChunkdynamo_docs=self.webpackChunkdynamo_docs||[]).push([[7974],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var i=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,r=function(e,t){if(null==e)return{};var o,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),h=r,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||n;return o?i.createElement(f,a(a({ref:t},c),{},{components:o})):i.createElement(f,a({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,a=new Array(n);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<n;u++)a[u]=o[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}h.displayName="MDXCreateElement"},9009:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var i=o(7462),r=(o(7294),o(3905));const n={sidebar_position:6,title:"Base pool"},a=void 0,l={unversionedId:"Products/Vault/Primers/base_pool",id:"Products/Vault/Primers/base_pool",title:"Base pool",description:"We aim to build different Dynamo base pools to cover a wide range of liquidity products in the near future.",source:"@site/docs/Products/Vault/Primers/base_pool.md",sourceDirName:"Products/Vault/Primers",slug:"/Products/Vault/Primers/base_pool",permalink:"/docs/Products/Vault/Primers/base_pool",draft:!1,editUrl:"https://github.com/DynamoFinance/dynamofinance.github.io/tree/main/docs/Products/Vault/Primers/base_pool.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Base pool"},sidebar:"tutorialSidebar",previous:{title:"Liquidity activation",permalink:"/docs/Products/Vault/Primers/dynamo_solution"}},s={},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We aim to build different Dynamo base pools to cover a wide range of liquidity products in the near future.\nOur aim is to develop and deploy a decentralised stable coin, a centralised stable coin and an eth-based base pool.\nA potential decentral stable coin base pool (DEC) consists of Frax, GHO, and DAI, and the ETH base pool (ETH) consists of native ETH and frxETH."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Base pool composition",src:o(4915).Z,width:"2172",height:"1104"})),(0,r.kt)("p",null,"The graph below serves as an in-depth visualization for this DEC base pool:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Base pool architecture",src:o(5137).Z,width:"2825",height:"1853"})),(0,r.kt)("p",null,"The DEC is built on top of the Balancer boosted pool infrastructure and enables liquidity providers to optimise their yield through the use of our vault architecture.\nA Balancer liquidity provider (BLP) is able to provide liquidity in exchange for the liquidity pool token (termed as USD in the depiction).\nIf a user provides DAI to the liquidity pool, the DAI will be deposited in the DAI linear pool while the liquidity provider will receive USD in return.\nDue to the way boosted pools work 90% of the DAI that is deposited in the DEC will be routed into our DAI vault.\nThe DAI vault will then mobilise that capital in supported lending venues."),(0,r.kt)("p",null,"The capital that flows into a Dynamo vault becomes active through the vault rebalancing process, which puts that capital into productive use by splitting it into the underlying lending platforms based on the current vault allocation as outlined in the weight distribution of the respective vault.\nWeight distributions are determined through the vault reweight process which keeps the allocations of Dynamo vaults in sync with interest rates by allowing independent strategists to submit weight proposals that increase Dynamo vault yields in exchange for 1.0% of the yield that is generated by the respective vault for as long as the proposal remains active."),(0,r.kt)("p",null,"On top of enabling liquidity providers to integrate lending into their strategies, our protocol will also allow them to optimise their liquidity mining activities by offering a range of autocompounding vaults that liquidity providers can utilise in order to interact with our base pool infrastructures in a plug and play manner.\nOur autocompounding vaults will maximise the efficiency of the yield farming process by socialing the costs that come with it.\nThis autocompounding vault infrastructures will also enable the development of metapool liquidity by allowing the liquidity providers of metapools to tap into the liquidity mining rewards of our base pools."))}d.isMDXComponent=!0},5137:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/base_pool-34b714d8f8997a268c256fa4067d6eef.png"},4915:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/basepools-eea2e93f76c24e59ac9388bd48bc579f.png"}}]);