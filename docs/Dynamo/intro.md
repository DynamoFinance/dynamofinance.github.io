---
sidebar_position: 1
title: Introduction
---

The standard DeFi user wants to productively invest his assets in various lending platforms to maximise overall yield.
Most such platforms support lending markets for the largest stablecoins and various other highly liquid assets.
Unfortunately, the nature of lending protocols makes the returns on lent assets inversely proportional to the availability of capital in the respective lending pools.
Thus, in the presence of a surplus of available capital, interest rates on lending protocols decrease.
The existence of multiple DeFi protocols leads to interest rate imbalances that come as a result of different utilisation rates in different lending markets.
Yearn Finance[^1] was the first protocol to take advantage of such discrepancies by providing automatic capital migration to the protocol with the highest returns at the time.

At Dynamo we aim to tackle low liquidity pool yields by developing a modular liquidity management stack comprised of a yield optimiser built on top of BalanceV2.
Since most of the locked liquidity within a pool is idle and does not participate in swap events, we want to use that portion to generate additional interest through lending markets.
The integration of liquidity provision with yield aggregation activities solves the dilemmas that liquidity providers are facing regarding capital allocation by providing them with the option of utilizing a structured liquidity management offering that maintains an optimized market exposure across multiple yield generation venues in the backend while maintaining liquid markets for a whole range of assets.

The Dynamo yield optimizer aggregates different lending markets such as AAVE[^1], Compound[^2],
and Euler[^3] to extract the highest possible interest out of each supported asset by reacting in real-time to interest rate fluctuations across DeFi venues.
We achieve this by rebalancing large portions of the total value locked between multiple lending markets to capture the added value that can be generated through active capital management.
Capital movement between lending markets is achieved through our [vaults](./Vaults/intro).

### Citations

[^1]: AAVE: [Markets](https://app.aave.com/#/markets)
[^2]: Compound Finance: [Website](https://compound.finance/)
[^3]: Euler Finance: [Website](https://www.euler.finance/)
