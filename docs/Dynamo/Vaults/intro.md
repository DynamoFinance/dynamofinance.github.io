---
sidebar_position: 1
title: Introduction
---

At the heart of our protocol are our vaults.
Each vault is able to allocate 90% of its liquidity to lending markets to generate additional interest.
Proportions of lending markets are represented by weights that sum up to unity.
It is important that the weights within the vault can be adjusted in a permissionless manner to drive decentralisation forward.
The advantage of this design is that there is no need for the existence of whitelisted accounts that are constantly aware of the current returns by opening the vault rebalancing process to every user of the protocol.
Safety mechanisms ensure that no weight distribution is accepted at $t = t_1$ that gives a lower return than was available at $t = t_0$.
Additional lending protocols can be added to a vault in the future by deploying a suitable
protocol adapter.
All lending markets that support a newly added asset are then deployed as token adapters and logged by an adapter registry and are immediately available for use within the vault.
Each vault is therefore a pool of capital that represents a particular asset that is deposited into the vault by its users and which asset is allocated dynamically across the underlying markets for the generation of yield.
