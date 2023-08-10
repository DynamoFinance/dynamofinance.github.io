"use strict";(self.webpackChunkdynamo_docs=self.webpackChunkdynamo_docs||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"vault-audited","metadata":{"permalink":"/blog/vault-audited","editUrl":"https://github.com/DynamoFinance/dynamofinance.github.io/tree/main/blog/2023-08-10-audit.md","source":"@site/blog/2023-08-10-audit.md","title":"Vault audited","description":"The last month has been exciting in terms of the progress we have been able to make a lot of progress.","date":"2023-08-10T00:00:00.000Z","formattedDate":"August 10, 2023","tags":[{"label":"vault","permalink":"/blog/tags/vault"},{"label":"erc-4626","permalink":"/blog/tags/erc-4626"},{"label":"audit","permalink":"/blog/tags/audit"}],"readingTime":0.375,"hasTruncateMarker":false,"authors":[{"name":"Ben Scherry","title":"Lead Smart-Contract Engineer","url":"https://github.com/scherrey","imageURL":"https://github.com/scherrey.png","key":"ben"},{"name":"Sajal Kayan","title":"Smart-Contract Engineer","url":"https://github.com/sajal","imageURL":"https://biggestlab.io/img/sajal.webp","key":"sajal"},{"name":"Eike Caldeweyher","title":"Head of R&D","url":"https://github.com/f3rmion","imageURL":"https://pbs.twimg.com/profile_images/1686636029338357760/wl4xd6XJ_400x400.jpg","key":"ehjc"}],"frontMatter":{"slug":"vault-audited","title":"Vault audited","authors":["ben","sajal","ehjc"],"tags":["vault","erc-4626","audit"]},"nextItem":{"title":"Vault development finished","permalink":"/blog/vault-finished"}},"content":"The last month has been exciting in terms of the progress we have been able to make a lot of progress.\\nOur ERC-4626 vault was examined by [0x52](https://twitter.com/IAm0x52) in a four-day smart-contract security audit.\\nOur smart-contract team (led by Ben and Sajal) were able to fix all highly and medium classified issues - no critical issue was found.\\n\\nThe [full audit report](https://dynamofinance.github.io/docs/security) is available in our docs and we are currently preparing our testnet deployments."},{"id":"vault-finished","metadata":{"permalink":"/blog/vault-finished","editUrl":"https://github.com/DynamoFinance/dynamofinance.github.io/tree/main/blog/2023-05-23-vault-ready.md","source":"@site/blog/2023-05-23-vault-ready.md","title":"Vault development finished","description":"We finished our ERC-4626 vault development and the boosted pool integration in the Balancer ecosystem!","date":"2023-05-23T00:00:00.000Z","formattedDate":"May 23, 2023","tags":[{"label":"vault","permalink":"/blog/tags/vault"},{"label":"erc-4626","permalink":"/blog/tags/erc-4626"},{"label":"balancer","permalink":"/blog/tags/balancer"}],"readingTime":0.335,"hasTruncateMarker":false,"authors":[{"name":"Eike Caldeweyher","title":"Head of R&D","url":"https://github.com/f3rmion","imageURL":"https://pbs.twimg.com/profile_images/1686636029338357760/wl4xd6XJ_400x400.jpg","key":"ehjc"}],"frontMatter":{"slug":"vault-finished","title":"Vault development finished","authors":["ehjc"],"tags":["vault","erc-4626","balancer"]},"prevItem":{"title":"Vault audited","permalink":"/blog/vault-audited"},"nextItem":{"title":"Vault development","permalink":"/blog/vault-development"}},"content":"We finished our ERC-4626 vault development and the boosted pool integration in the Balancer ecosystem!\\nAfter an internal code review from Balancer we received also the first tranche of our grant and\\nare now moving forward to the first smart-contract audit.\\nThe first audit will most probably be happening in early June, and we plan to get a second competitive audit on top.\\n\\nKeep tuned!\\n\\nCheers,\\n\\nehjc"},{"id":"vault-development","metadata":{"permalink":"/blog/vault-development","editUrl":"https://github.com/DynamoFinance/dynamofinance.github.io/tree/main/blog/2023-01-03-vault-development.md","source":"@site/blog/2023-01-03-vault-development.md","title":"Vault development","description":"Happy new year Dynamos!","date":"2023-01-03T00:00:00.000Z","formattedDate":"January 3, 2023","tags":[{"label":"vault","permalink":"/blog/tags/vault"},{"label":"erc-4626","permalink":"/blog/tags/erc-4626"}],"readingTime":1.25,"hasTruncateMarker":false,"authors":[{"name":"Eike Caldeweyher","title":"Head of R&D","url":"https://github.com/f3rmion","imageURL":"https://pbs.twimg.com/profile_images/1686636029338357760/wl4xd6XJ_400x400.jpg","key":"ehjc"},{"name":"Ben Scherry","title":"Lead Smart-Contract Engineer","url":"https://github.com/scherrey","imageURL":"https://github.com/scherrey.png","key":"ben"}],"frontMatter":{"slug":"vault-development","title":"Vault development","authors":["ehjc","ben"],"tags":["vault","erc-4626"]},"prevItem":{"title":"Vault development finished","permalink":"/blog/vault-finished"},"nextItem":{"title":"Development grant","permalink":"/blog/balancer-grant"}},"content":"Happy new year Dynamos! :tada:\\n\\nWe are progressing in the development of our ERC-4626 vault.\\nWe plan to apply this vault structure within our decentralised base pool that we deploy as a boosted pool on Balancer V2.\\n\\nA general diagram for the infrastructure can be seen below, however, an overall overview will be posted as a separat part of the documentation.\\nFurthermore, we will update this blog post with new insights about development steps.\\n\\n![Vault](./assets/vault.png)\\n\\nAbove the blue parts (Assetmanager) are Vyper contracts that have been developed internally within the past months.\\nThose asset manager interact with linear pools as developed by Balancer.\\nAll linear pools are incorporated in a boosted stable pool.\\nHence we are able to shift most of the liquidity to the ERC-4626 vaults, which will then be deployed to different lending markets (e.g., AAVE or Compound).\\n\\nThe proportions of the underlying lending markets are defined by asset-specific Strategies.\\nIn order to participate as a Strategist, a new set of weights has to be proposed.\\nThis new set of weights has to increase the APY of the asset-specific vault.\\nIf it does, the Strategy goes live and the Strategist earns part of the revenue that is collected while the Strategy is active.\\n\\nThe governance part of the ERC-4626 vault will be released soon as well.\\n\\n### Update 2023-01-13\\n\\nSince the Balancer infrastructure does not allow an easy solution for custom asset manager yet (maybe in Balancer V3?), we decided to interface with the ERC-4626 vaults directly.\\n\\n![Vault-2](./assets/2023-01-13_vault.png)"},{"id":"balancer-grant","metadata":{"permalink":"/blog/balancer-grant","editUrl":"https://github.com/DynamoFinance/dynamofinance.github.io/tree/main/blog/2022-11-13-balancer-grant.md","source":"@site/blog/2022-11-13-balancer-grant.md","title":"Development grant","description":"The team at Balancer Grants is proud to announce the approval of the grant application by Dynamo to use Balancer V2 architecture to build a yield aggregator for decentralised stablecoins and other assets such as Ethereum staking derivatives by aggregating lending markets such as Aave and Compound.","date":"2022-11-13T00:00:00.000Z","formattedDate":"November 13, 2022","tags":[{"label":"balancer","permalink":"/blog/tags/balancer"},{"label":"development","permalink":"/blog/tags/development"},{"label":"grant","permalink":"/blog/tags/grant"}],"readingTime":2.805,"hasTruncateMarker":true,"authors":[{"name":"Rohmanus","title":"Head of BizDev","url":"https://twitter.com/RohmanusC","imageURL":"https://pbs.twimg.com/profile_images/1455325167228440579/38hdzAOc_400x400.jpg","key":"rohmanus"},{"name":"Max Entropy","title":"Head of Communications","url":"https://twitter.com/0xMaxEntropy","imageURL":"https://pbs.twimg.com/profile_images/1138346724282503168/9g8zYema_400x400.png","key":"max"},{"name":"greenbergz","title":"Lead Front-end Engineer","url":"https://github.com/justingreenberg","imageURL":"https://github.com/justingreenberg.png","key":"greenbergz"},{"name":"Eike Caldeweyher","title":"Head of R&D","url":"https://github.com/f3rmion","imageURL":"https://pbs.twimg.com/profile_images/1686636029338357760/wl4xd6XJ_400x400.jpg","key":"ehjc"}],"frontMatter":{"slug":"balancer-grant","title":"Development grant","authors":["rohmanus","max","greenbergz","ehjc"],"tags":["balancer","development","grant"]},"prevItem":{"title":"Vault development","permalink":"/blog/vault-development"}},"content":"The team at Balancer Grants is proud to announce the approval of the grant application by Dynamo to use Balancer V2 architecture to build a yield aggregator for decentralised stablecoins and other assets such as Ethereum staking derivatives by aggregating lending markets such as Aave and Compound.\\n\\n\x3c!--truncate--\x3e\\n\\nBy aggregating lending markets, Dynamo generates an optimised yield for depositors that comes from shifting TVL between different lending markets in order to take advantage of shifts in interest rates as they occur in real time and generate an optimised lending yield.\\n\\nDynamo plans to use this infrastructure in order to generate yield optimised liquidity pools for decentralized stablecoins and other assets such as Ethereum staking derivatives by tapping into the Balancer V2 architecture in order to build liquidity solutions on top of the Balancer Boosted Pool framework. Furthermore, by tapping into Balancer\u2019s asset management capabilities Dynamo can develop yield optimised liquidity pools for decentralised stablecoins and other assets on top of its base pools turning them into a highly active liquidity layer.\\n\\nThrough this grant, Balancer aims for the end result to be a new boosted pool use case of ERC4626 bringing more liquidity and fees to the protocol and set a precedent for more people to build.\\n\\n> \u201cDynamo is taking Balancer boosted pools to the next level with their yield aggregation vaults that optimizes yield across the major money markets. It\u2019s great that defi teams are starting to realize the potential of Balancer boosted pools to create sustainable yield for liquidity providers.\u201d\\n>\\n> -- <cite>Mike B, Balancer Grants Committee Member & Maxi</cite>\\n\\n> \u201cAfter spending a lot of time looking for an AMM solution to build upon, the Balancer V2 architecture stood out to us as the best option because of its unique boosted pool infrastructure. This architecture enables us to offer a capital efficient solution for liquidity providers who are looking for the best way to deploy their capital. We believe that Balancer is poised to grow into a systemically important defi lego because of its extremely vibrant ecosystem and we are very happy to support it.\u201d\\n>\\n> -- <cite>Rohmanus Dynamo team member</cite>\\n\\n## About Dynamo\\n\\nDynamo is a yield generation platform that aims to serve liquidity providers by turning their previously idle liquidity into an active resource through the use of lending markets. Dynamo achieves this through the use of Dynamo vaults which maintain a diversified exposure profile in whitelisted lending venues such as Aave, Compound and Euler aiming to generate an optimised lending yield by shifting liquidity around in order to stay on top of interest rate fluctuations. By taking advantage of defi\u2019s inherent composability Dynamo can become a building block for capital efficient liquidity provision and other defi activities.\\n\\nBy activating previously idle liquidity, Dynamo offers an enhanced user experience to liquidity providers through the use of Balancer\u2019s boosted pool architecture. Dynamo is building on top of the boosted pool architecture in order to offer a suite of yield optimised liquidity pools by starting with a liquidity solution for the decentralised stablecoin community through the Dynamo base pool. This pool is comprised of decentralised stablecoins and generates yield for liquidity providers on Aave, Compound, Euler and Fraxlend integrating liquidity provision and optimised lending under one roof in order to function as a base liquidity layer for decentralised stablecoins and other assets.\\n\\n[Original Medium resource](https://medium.com/@BalancerGrants/dynamo-is-using-balancer-boosted-pools-to-build-yield-optimised-liquidity-512fbb5b08a0)"}]}')}}]);