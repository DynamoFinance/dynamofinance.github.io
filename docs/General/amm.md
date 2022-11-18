---
sidebar_position: 2
title: Automated market maker
---

The concept of an automated market maker (AMM) was first discussed by Vitalik
Buterin,[^1] later generalized by Alan Lu,[^2] and finally proven viable for market
making by the well-established Uniswap[^3] [^4] automated market maker. AMMs
are based on invariants that describe how assets should be priced upon swap events
within liquidity pools. Uniswap’s constant product invariant describes liquidity as
uniformly distributed along the

$$
q_P \times q_L = K
$$

reserve curve, where $q_P$ and $q_L$ are the respective reserves of two assets $P$ and $L$,
and $K$ is the invariant.
Let us take this reserve curve as a basis for an example to show how a swapping event would look like. Imagine we have a liquidity pool that is composed of two assets each holding 100 coins (coin $A$ and coin $B$). The invariant is calculated as follows

$$
q_A \times q_B = (100) \times (100) = 10000
$$

The reserve curve determines how much $B$ a user gets for a certain amount of $A$

$$
(q_B - p) \times (q_A + l) = K = 10000
$$

and for an example amount of 50 $A$

$$
p = q_B - \frac{K}{q_A + l} = 100 - \frac{10000}{100 + 50} \approx 33.3
$$

we calculate that the user obtains 33.3 $B$ in exchange.

Balancer[^5] introduced a multi-dimensional reserve curve that defines a cost function for the exchange of any pair of tokens held in a Balancer Pool ($BP$). The price
reserve is defined as

$$
K = \prod\limits_t\,B_t^{W_t}
$$

where $t$ ranges over the tokens in the $BP$, $B_t$ is the balance of the tokens in the
$BP$, and $W_t$ is the normalized weight of the tokens such that the sum of all weights
equals unity.

Each pair of tokens (in = $i$ and out = $o$) has a spot price ($SP$) defined entirely by their weights ($W_i$ and $W_o$) and balances ($B_i$ and $B_o$)

$$
SP_i^o = \frac{B_i/W_i}{B_o/W_o}
$$

Swap fees ($x$) are taken into account by adjusting the given definition slightly

$$
SP_i^o(x) = \frac{SP_i^o}{1-x}.
$$

Furthermore, a stablecoin reserve curve has been implemented to allow for swaps
between assets that are pegged with each other.
Most common examples are US Dollar tracked stablecoins and other assets that track the price of Bitcoin or ETH.
Spot prices are determined by the $BP$ balances, the amplification parameter $A$,
and the amount of tokens that are being swapped.
Ideally, it would make sense to simply allow for one-to-one swaps between assets, which would be a constant sum reserve curve.
However, once an asset loses its peg and its value diverges, it would make sense to enforce trade rules for uncorrelated assets, which would be a constant product reserve curve as discussed above. Balancer therefore uses the amplification parameter to define to which degree the reserve curve approximates the constant product curve ($A = 0$), or the constant sum curve ($A \rightarrow \infty$).

$$
A n^n \sum\limits_i B_i + K = A K n^n + \frac{K^{n+1}}{n^n \prod\limits_i B_i}
$$

where $n$ is the number of tokens, $B_i$ is the balance of token $i$, and $A$ is the amplification parameter.
In order to solve this equation either for $B_i$ or $K$, we need to define it in a form like $F(B, K) = 0$.
Then the invariant ($K$) is solved iteratively using the Newton-Raphson method.
The idea is to start with an initial guess, approximate the function by its tangent line, and finally compute the intercept of this tangent line.
This intercept will typically be a better approximation to the original function’s root than the first guess, and the method is iterated until convergence is reached.
If the tangent line to the curve $F(B, K)$ at $K = K_n$ intercepts at $K_{n+1}$ then the slope is

$$
F'(B, K_n) = \frac{F(B, K_n) - 0}{K_n - K_{n + 1}} \rightarrow K_{n + 1} = K_n - \frac{F(B, K_n)}{F'(B, K_{n})}
$$

The algorithm for swaps first solves $F(B, K) = 0$ equation against $K$, then against $B_j$ given $B_i$ which is increased by the amount of coin $i$ that is traded in.

$$
B_{i, k+1} = B_{i, k} - \frac{F(B_{i,k}, \dots, K)}{F'(B_{i,k}, \dots, K)}
$$

### Citations

[^1]: Vitalik Buterin: [AMM](https://www.reddit.com/r/ethereum/comments/55m04x/let__run_onchain_decentralized_exchanges_the_way/)
[^2]: Alan Lu: [AMM](https://blog.gnosis.pm/building-a-decentralized-exchange-in-ethereum-eea4e7452d6e)
[^3]: Uniswap: [White paper v2](https://uniswap.org/whitepaper.pdf)
[^4]: Uniswap: [White paper v3](https://uniswap.org/whitepaper-v3.pdf)
[^5]: Balancer: [White paper](https://balancer.fi/whitepaper.pdf)
