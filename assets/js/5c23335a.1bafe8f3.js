"use strict";(self.webpackChunkdynamo_docs=self.webpackChunkdynamo_docs||[]).push([[2553],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var s=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=s.createContext({}),o=function(e){var t=s.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=o(e.components);return s.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,m=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=o(a),h=n,d=c["".concat(m,".").concat(h)]||c[h]||u[h]||r;return a?s.createElement(d,p(p({ref:t},l),{},{components:a})):s.createElement(d,p({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=h;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[c]="string"==typeof e?e:n,p[1]=i;for(var o=2;o<r;o++)p[o]=a[o];return s.createElement.apply(null,p)}return s.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6754:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var s=a(7462),n=(a(7294),a(3905));const r={sidebar_position:1,title:"Vault"},p=void 0,i={unversionedId:"Products/Vault/vault",id:"Products/Vault/vault",title:"Vault",description:"Dynamo vaults are the epicenter of Dynamo's infrastructure and their task is to maximise the yield of the assets that liquidity providers and other users provide to the protocol. Dynamo vaults allocate 90% of their liquidity to the underlying lending markets in proportions that are represented by weights that sum up to unity. Vault weights are subject to change through a process that allows independent strategists to submit weight proposals for specific Dynamo vaults in exchange for 1% of the yield that the vaults generate as a result of the proposed allocation.",source:"@site/docs/Products/Vault/vault.md",sourceDirName:"Products/Vault",slug:"/Products/Vault/",permalink:"/docs/Products/Vault/",draft:!1,editUrl:"https://github.com/DynamoFinance/dynamofinance.github.io/tree/main/docs/Products/Vault/vault.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Vault"},sidebar:"tutorialSidebar",previous:{title:"Base pool",permalink:"/docs/Concepts/base_pool"},next:{title:"Dynamo4626",permalink:"/docs/Products/Vault/technical"}},m={},o=[],l={toc:o},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,s.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Dynamo vaults are the epicenter of Dynamo's infrastructure and their task is to maximise the yield of the assets that liquidity providers and other users provide to the protocol. Dynamo vaults allocate 90% of their liquidity to the underlying lending markets in proportions that are represented by weights that sum up to unity. Vault weights are subject to change through a process that allows independent strategists to submit weight proposals for specific Dynamo vaults in exchange for 1% of the yield that the vaults generate as a result of the proposed allocation."),(0,n.kt)("p",null,"Dynamo vaults are completely decentralised and everyone is allowed to engage with the weight management process which is entirely permissionless. By opening up the weight management process to the defi community Dynamo vaults are able to optimise the vault management process through it's complete decentralisation. The decentralisation of the vault reweight process eliminates the need for the existence of whitelisted accounts as every defi user can participate in the capital allocation process enabling Dynamo vaults to offer an outsized performance to their users. Safety mechanisms ensure that no weight distribution is accepted at ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"t"),(0,n.kt)("mn",{parentName:"msub"},"1"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t = t_1")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7651em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))))))," that gives a lower return than was available at ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"t"),(0,n.kt)("mn",{parentName:"msub"},"0"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t = t_0")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7651em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))))))),"."),(0,n.kt)("p",null,"Dynamo vaults can integrate with a multitude of defi protocols in the future with the deployment of suitable protocol adapters enabling Dynamo vaults to stay up to date with defi yield opportunities as the defi space evolves over time. The integration of new protocols with the Dynamo architecture will expand the range of venues that can be utilised by the underlying Dynamo vaults enabling the further optimisation of the yield generation process. Dynamo vaults are essentially a pool of capital with the objective of generating the highest possible yield for each supported asset in a diversified manner."))}u.isMDXComponent=!0}}]);