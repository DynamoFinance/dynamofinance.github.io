"use strict";(self.webpackChunkdynamo_docs=self.webpackChunkdynamo_docs||[]).push([[6389],{6869:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=a(7462),n=(a(7294),a(3905)),r=a(8209);const o={sidebar_position:3,title:"ERC-4626"},i="Smart-contract architecture",l={unversionedId:"Products/Vault/technical",id:"Products/Vault/technical",title:"ERC-4626",description:"Red letters are contract addresses.",source:"@site/docs/Products/Vault/technical.mdx",sourceDirName:"Products/Vault",slug:"/Products/Vault/technical",permalink:"/docs/Products/Vault/technical",draft:!1,editUrl:"https://github.com/DynamoFinance/dynamofinance.github.io/tree/main/docs/Products/Vault/technical.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"ERC-4626"},sidebar:"tutorialSidebar",previous:{title:"Litepaper",permalink:"/docs/Products/Vault/lite-paper"},next:{title:"Governance",permalink:"/docs/Products/Vault/governance"}},d={},c=[{value:"Use Cases for Dynamo4626 Contracts",id:"use-cases-for-dynamo4626-contracts",level:3},{value:"Dynamo4626 Transactional Use Cases",id:"dynamo4626-transactional-use-cases",level:3},{value:"deposit (assets, destination) -&gt; shares",id:"deposit-assets-destination---shares",level:4},{value:"mint (shares, destination) -&gt; assets",id:"mint-shares-destination---assets",level:4},{value:"withdraw (assets, destination, owner) -&gt; shares",id:"withdraw-assets-destination-owner---shares",level:4},{value:"withdraw (assets, destination, owner) -&gt; shares",id:"withdraw-assets-destination-owner---shares-1",level:4},{value:"Dynamo4626 Supporting Functions",id:"dynamo4626-supporting-functions",level:3},{value:"Dynamo4626 Configuration/Deployment Use Cases",id:"dynamo4626-configurationdeployment-use-cases",level:3},{value:"activateStrategy()",id:"activatestrategy",level:4},{value:"balanceAdapters(target_asset_balance = 0)",id:"balanceadapterstarget_asset_balance--0",level:4}],u={toc:c},p="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,s.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"smart-contract-architecture"},"Smart-contract architecture"),(0,n.kt)("p",null,"Red letters are contract addresses.\nBold black items are actual ERC20/Pool assets. Blue zone is Vyper contract code.\nThe dotted line LPAdapters are logical contracts but likely will just be code in the larger AssetManager contract code base which forward requests to deployments of Lending Platform Specific Adapters.\nGreen zones are Balancer Linear Pools which will require small amounts of Solidity code to construct properly.\nYellow zone is the Balancer Boosted Pool which will require some Solidity code to fully implement/integrate.\nAt the bottom outside the yellow zone are the various Lending Platforms."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"dUSD",src:a(2952).Z,width:"1007",height:"771"})),(0,n.kt)("h3",{id:"use-cases-for-dynamo4626-contracts"},"Use Cases for Dynamo4626 Contracts"),(0,n.kt)("p",null,"The Dynamo4626 Contracts will act as AssetManagers for the Balancer LinearPools but can be treated as their own Vaults/Pools outside of the deployed Balancer Vault."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Given:")),(0,n.kt)("p",null,"Governance = address variable - Governance contract responsible for this Vault."),(0,n.kt)("p",null,"Being ERC-4626 Contracts, they expose the full ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-20"},"ERC-20 ABI"),"."),(0,n.kt)("h3",{id:"dynamo4626-transactional-use-cases"},"Dynamo4626 Transactional Use Cases"),(0,n.kt)("p",null,"Definitions:"),(0,n.kt)("p",null,"asset - underlying token by which value transactions are ultimately denominated.\nFor DynamoUSD this would be one of DAI, FRAX, or GHO initially."),(0,n.kt)("p",null,"shares - the 4626 token representing the investment of liquidity to ultimately be converted back into assets.\nFor DynamoUSD this would be dDAI, dFRAX, dGHO, and dUSD."),(0,n.kt)("p",null,"destination - the address of the contract or wallet to receive the value of the transaction."),(0,n.kt)("p",null,"owner - the address of the contract that holds the assets in question."),(0,n.kt)("p",null,"Transfer - struct for transaction definition containing a signed qty and Adapter addr."),(0,n.kt)("h4",{id:"deposit-assets-destination---shares"},"deposit (assets, destination) -> shares"),(0,n.kt)("p",null,"Deposit fixed number of X assets for destination to receive Y shares representing the new investment.\nShares will be credited to destination address."),(0,n.kt)(r.G,{chart:'sequenceDiagram\n    participant u as Investor\n    participant a4626 as d<Token>4626    \n    participant lpa as LP Adapter\n    participant asset as <ERC20 Asset Token><br>"asset"\n    #participant lp as LP\n    #participant share as <ERC20 LP Share>\n    participant eth as Ethereum Mainnet\n    note over a4626: a4626 = d<Token>4626 contract address\n    autonumber\n    u->>a4626:deposit(_asset_amount = 500, _receiver = Investor)\n        note over a4626, asset: We must first move the funds into the contract\'s balance so _getBalanceTxs will know how to best re-adjust.    \n        a4626--\x3e>a4626: Shares = _convertToShares(_asset_amount)\n        a4626->>asset: transferFrom(from=Investor, to=a4626, amt=500)\n        Note over asset: balanceOf[Investor]-=500<br>balanceOf[d<Token>4626]+=500\n        asset->>a4626: amt=500\n        a4626--\x3e>a4626: balanceAdapters(_target_asset_balance=0)\n        Note over a4626: See balanceAdapters use case diagram below.\n        Note over a4626: Compute most efficient rebalancing transactions.<br>Txs = _genBalanceTxs()\n        a4626--\x3e>a4626: _genBalanceTxs() -> Transfer[]\n        loop for Tx: Transfer in Txs<br>(limited to maxTxs iterations)\n            alt if Tx.Qty==0\n                note over a4626: break\n            else if Tx.Qty > 0\n                a4626->>lpa: (Tx.Adapter).deposit(Tx.Qty)\n                    note over lpa: asset.balanceOf[d<Token>4626]-=Tx.Qty<br>asset.balanceOf[LP]+=Tx.Qty<br>share.balanceOf[d<Token>4626]+=~Tx.Qty          \n            else (elif Tx.Qty < 0)\n                a4626->>lpa: (Tx.Adapter).withdraw(<br>asset_amount=-1 * Tx.Qty,<br>withdraw_to=d<Token>4626)\n                    note over lpa: asset.balanceOf[LP]-=~Tx.Qty<br>share.balanceOf[d<Token>4626]-=~Tx.Qty<br>asset.balanceOf[d<Token>4626]+=Tx.Qty\n            end\n        end\n        a4626->a4626: Assets = _mint(dest=Investor, amt=Shares)\n            note over a4626:d<Token>4626.balanceOf[Investor]+=Shares\n        a4626->u: return Shares',mdxType:"Mermaid"}),(0,n.kt)("h4",{id:"mint-shares-destination---assets"},"mint (shares, destination) -> assets"),(0,n.kt)("p",null,"Deposit X assets where X is determined to be the quantity required to receive Y shares representing the new investment.",(0,n.kt)("br",{parentName:"p"}),"\n","Shares will be credited to destination address. For DynamoUSD this would be the LinearPool which this\ncontract is an AssetManager for."),(0,n.kt)("h4",{id:"withdraw-assets-destination-owner---shares"},"withdraw (assets, destination, owner) -> shares"),(0,n.kt)("p",null,"Convert X shares controlled by owner back to Y assets to be credited to destination."),(0,n.kt)(r.G,{chart:"sequenceDiagram\nparticipant u as Investor\nparticipant a4626 as d<Token>4626\nparticipant lpa as LP Adapter\nparticipant asset as <ERC20 Asset Token><br>\"asset\"\n#participant lp as LP\n#participant share as <ERC20 LP Share>\nparticipant eth as Ethereum Mainnet\n    autonumber\n    u->>a4626:withdraw(asset_amount = 500, receiver = Investor, owner = Investor)\n    Note over a4626: Map asset_amount to share value<br>& get owner's share balance.\n    a4626--\x3e>a4626: shares = _convertToShares(asset_amount)\n    a4626--\x3e>a4626: xcbal = self.balanceOf[owner]\n    Note over a4626: Is the owner not the receiver?\n    alt if msg.sender != owner\n        Note over a4626: Confirm msg.sender has adequate allowance from owner.\n        Note over a4626: Reduce msg.senders allowance from owner.\n    end\n    Note over a4626: Reduce owner balance of shares.<br>Reduce total supply of shares.\n    a4626->>eth: log Transfer(owner, 0, shares) (Burn shares)\n    a4626--\x3e>a4626: balanceAdapters(_target_asset_balance = asset_amount)\n    Note over a4626: See balanceAdapters use case diagram below.\n    Note over a4626: Move asset tokens to receiver.\n    a4626->>asset: transfer(Investor, asset_amount)\n    Note over a4626: Update Vault's total_assets_withdrawn by asset_amount.\n    a4626->>eth: log Withdraw(msg.sender, Investor, owner, asset_amount, shares)\n    a4626->>u: return shares",mdxType:"Mermaid"}),(0,n.kt)("h4",{id:"withdraw-assets-destination-owner---shares-1"},"withdraw (assets, destination, owner) -> shares"),(0,n.kt)("p",null,"Convert X shares controlled by owner where X is determined to be the quantity required to receive Y assets\n(to be credited to destination) resulting from the share value of the investment."),(0,n.kt)("h3",{id:"dynamo4626-supporting-functions"},"Dynamo4626 Supporting Functions"),(0,n.kt)("p",null,"There may be matching preview",(0,n.kt)("em",{parentName:"p"}," and max")," functions for each of the deposit/mint/redeem/withdraw functions.\nThese simply provide read-only outcome 'previews' or maximum values possible given current balances respectively."),(0,n.kt)("h3",{id:"dynamo4626-configurationdeployment-use-cases"},"Dynamo4626 Configuration/Deployment Use Cases"),(0,n.kt)("h4",{id:"activatestrategy"},"activateStrategy()"),(0,n.kt)("p",null,"Checks to see if the Governance contract has a new strategy ready to activate.\nIf so, makes it the new current strategy then calls rebalance to put it into effect.\nThis function may be called by anyone."),(0,n.kt)("h4",{id:"balanceadapterstarget_asset_balance--0"},"balanceAdapters(target_asset_balance = 0)"),(0,n.kt)("p",null,"Compares the current cash & asset values across the lending platforms, computes an\noptimum set of transactions necessary to best meet the current Strategy's desired\nbalances, then proceeds to move assets across the lending platforms to best meet the\ncurrent strategy. If target_asset_balance == 0 then it is a request to move all asset into\nvarious adapters. If target_asset_balance > 0 then it is a request to move this sum of\nassets into the 4626 vault so it can be available for a withdrawl and move the rest of the\nassets to adapters according to the current Strategy."),(0,n.kt)("p",null,"This function may be called by anyone."),(0,n.kt)("p",null,"balanceAdapters Use Case"),(0,n.kt)(r.G,{chart:"sequenceDiagram \n    participant user as Calling Wallet\n    participant a4626 as d<Token>4626\n    participant fund as FundsAllocator\n    #participant lpa as LP Adapter\n    participant eth as Ethereum Mainnet\n    autonumber\n    user->>a4626: balanceAdapters(_target_asset_balance=0)\n    Note over a4626:Call _getCurrentBalances to copy state of the 4626 because all functions<br>in FundsAllocator are stateless so must be passed these values.<br>_total_assets = current assets in vault<br>_total_ratios = sum of strategy ratios in vault<br>_pool_states = [each pool struct = {adapter, current assets in pool, ratio for this adapter},...]\n    a4626->>fund: getBalanceTxs(_target_asset_balance,<br>_min_proposer_payout,<br>_total_assets,<br>_total_ratios,<br>_pool_states)\n    Note over fund:The functions in the FundsAllocator are upgradable but have<br>no access to Vault data beyond what is passed to it.<br>It's purpose is to create a list of transactions that<br>will optimally result in final balances of assets<br>in the 4626 Vault + move funds across the adapters to<br>achieve tarets established by the current strategy.\n    fund->>a4626: txs = TXS, blocked_adapters = [Blocked_Adapters]\n    Note over a4626: If there are blocked adapters then<br>set their strategy ratios to zero.\n    loop for Adapter: adapter in blocked_adapters\n        alt if Adapter != 0\n            Note over a4626: Funds missing from this Adapter!<br>Revise strategy ratio and publish PoolLoss event!\n            Note over a4626: new_strat = self.strategy[Adapter]<br>new_strat.ratio = 0<br>self.strategy[Adapter] = new_strat\n            a4626->>eth: log PoolLoss(Adapter, new_strat.last_asset_value, self._poolAssets(Adapter))\n        end\n    end\n    Note over a4626: Now actually move the funds for qualified txs.\n    loop for Dtx: dtx in txs\n        alt if Dtx.qty > 0 and Dtx.qty > Minimum TX Value from Strategy\n            Note over a4626: Execute a deposit into the adapter<br>large enough to be worth the gas<br>from the 4626 Vault.\n        else if Dtx.qrt < 0:\n            Note over a4626: Execute a withdraw from the adapter into the 4626 Vault.\n        end\n    end",mdxType:"Mermaid"}))}h.isMDXComponent=!0},2952:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/dUSDdiagram-1b050bedac7b252f672624807e844940.png"}}]);