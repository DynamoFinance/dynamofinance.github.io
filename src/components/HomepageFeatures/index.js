import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Boosted liquidity pools",
    Svg: require("@site/static/img/rocket.svg").default,
    description: <>We improve base APYs by lending out idle liquidity.</>,
  },
  {
    title: "Best interest rates",
    Svg: require("@site/static/img/interest.svg").default,
    description: (
      <>
        We improve interest rates by rebalance liquidity across various lending
        markets.
      </>
    ),
  },
  {
    title: "Liquidity mining",
    Svg: require("@site/static/img/chart.svg").default,
    description: (
      <>Farm Balancer liquidity rewards by staking your LP tokens.</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
