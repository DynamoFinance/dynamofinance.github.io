"use strict";(self.webpackChunkdynamo_docs=self.webpackChunkdynamo_docs||[]).push([[9635],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return a?o.createElement(g,i(i({ref:t},c),{},{components:a})):o.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},24126:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));const r={slug:"balancer-grant",title:"Development grant",authors:["rohmanus","max","greenbergz","ehjc"],tags:["balancer","development","grant"]},i=void 0,l={permalink:"/blog/balancer-grant",editUrl:"https://github.com/DynamoFinance/dynamofinance.github.io/tree/main/blog/2022-11-13-balancer-grant.md",source:"@site/blog/2022-11-13-balancer-grant.md",title:"Development grant",description:"The team at Balancer Grants is proud to announce the approval of the grant application by Dynamo to use Balancer V2 architecture to build a yield aggregator for decentralised stablecoins and other assets such as Ethereum staking derivatives by aggregating lending markets such as Aave and Compound.",date:"2022-11-13T00:00:00.000Z",formattedDate:"November 13, 2022",tags:[{label:"balancer",permalink:"/blog/tags/balancer"},{label:"development",permalink:"/blog/tags/development"},{label:"grant",permalink:"/blog/tags/grant"}],readingTime:2.805,hasTruncateMarker:!0,authors:[{name:"Rohmanus",title:"Head of BizDev",url:"https://twitter.com/RohmanusC",imageURL:"https://pbs.twimg.com/profile_images/1455325167228440579/38hdzAOc_400x400.jpg",key:"rohmanus"},{name:"Max Entropy",title:"Head of Communications",url:"https://twitter.com/0xMaxEntropy",imageURL:"https://pbs.twimg.com/profile_images/1138346724282503168/9g8zYema_400x400.png",key:"max"},{name:"greenbergz",title:"Lead Front-end Engineer",url:"https://github.com/justingreenberg",imageURL:"https://github.com/justingreenberg.png",key:"greenbergz"},{name:"ehjc",title:"Head of R&D",url:"https://github.com/f3rmion",imageURL:"https://pbs.twimg.com/profile_images/1562388428960006144/bItuzgAV_400x400.jpg",key:"ehjc"}],frontMatter:{slug:"balancer-grant",title:"Development grant",authors:["rohmanus","max","greenbergz","ehjc"],tags:["balancer","development","grant"]},prevItem:{title:"Vault development",permalink:"/blog/vault-development"}},s={authorsImageUrls:[void 0,void 0,void 0,void 0]},u=[{value:"About Dynamo",id:"about-dynamo",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The team at Balancer Grants is proud to announce the approval of the grant application by Dynamo to use Balancer V2 architecture to build a yield aggregator for decentralised stablecoins and other assets such as Ethereum staking derivatives by aggregating lending markets such as Aave and Compound."),(0,n.kt)("p",null,"By aggregating lending markets, Dynamo generates an optimised yield for depositors that comes from shifting TVL between different lending markets in order to take advantage of shifts in interest rates as they occur in real time and generate an optimised lending yield."),(0,n.kt)("p",null,"Dynamo plans to use this infrastructure in order to generate yield optimised liquidity pools for decentralized stablecoins and other assets such as Ethereum staking derivatives by tapping into the Balancer V2 architecture in order to build liquidity solutions on top of the Balancer Boosted Pool framework. Furthermore, by tapping into Balancer\u2019s asset management capabilities Dynamo can develop yield optimised liquidity pools for decentralised stablecoins and other assets on top of its base pools turning them into a highly active liquidity layer."),(0,n.kt)("p",null,"Through this grant, Balancer aims for the end result to be a new boosted pool use case of ERC4626 bringing more liquidity and fees to the protocol and set a precedent for more people to build."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u201cDynamo is taking Balancer boosted pools to the next level with their yield aggregation vaults that optimizes yield across the major money markets. It\u2019s great that defi teams are starting to realize the potential of Balancer boosted pools to create sustainable yield for liquidity providers.\u201d"),(0,n.kt)("p",{parentName:"blockquote"},"-- ",(0,n.kt)("cite",null,"Mike B, Balancer Grants Committee Member & Maxi"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u201cAfter spending a lot of time looking for an AMM solution to build upon, the Balancer V2 architecture stood out to us as the best option because of its unique boosted pool infrastructure. This architecture enables us to offer a capital efficient solution for liquidity providers who are looking for the best way to deploy their capital. We believe that Balancer is poised to grow into a systemically important defi lego because of its extremely vibrant ecosystem and we are very happy to support it.\u201d"),(0,n.kt)("p",{parentName:"blockquote"},"-- ",(0,n.kt)("cite",null,"Rohmanus Dynamo team member"))),(0,n.kt)("h2",{id:"about-dynamo"},"About Dynamo"),(0,n.kt)("p",null,"Dynamo is a yield generation platform that aims to serve liquidity providers by turning their previously idle liquidity into an active resource through the use of lending markets. Dynamo achieves this through the use of Dynamo vaults which maintain a diversified exposure profile in whitelisted lending venues such as Aave, Compound and Euler aiming to generate an optimised lending yield by shifting liquidity around in order to stay on top of interest rate fluctuations. By taking advantage of defi\u2019s inherent composability Dynamo can become a building block for capital efficient liquidity provision and other defi activities."),(0,n.kt)("p",null,"By activating previously idle liquidity, Dynamo offers an enhanced user experience to liquidity providers through the use of Balancer\u2019s boosted pool architecture. Dynamo is building on top of the boosted pool architecture in order to offer a suite of yield optimised liquidity pools by starting with a liquidity solution for the decentralised stablecoin community through the Dynamo base pool. This pool is comprised of decentralised stablecoins and generates yield for liquidity providers on Aave, Compound, Euler and Fraxlend integrating liquidity provision and optimised lending under one roof in order to function as a base liquidity layer for decentralised stablecoins and other assets."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://medium.com/@BalancerGrants/dynamo-is-using-balancer-boosted-pools-to-build-yield-optimised-liquidity-512fbb5b08a0"},"Original Medium resource")))}d.isMDXComponent=!0}}]);