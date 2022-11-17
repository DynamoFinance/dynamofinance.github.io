import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Boosted liquidity pools",
    Svg: require("@site/static/img/cloud.svg").default,
    description: <>We improve base APYs by lending out idle liquidity.</>,
  },
  {
    title: "Best interest rates",
    Svg: require("@site/static/img/augmented.svg").default,
    description: (
      <>
        We obtain best interest rates by allowing strategists to propose new
        sets of weights that will result in the highest APYs.
      </>
    ),
  },
  {
    title: "Liquidity mining",
    Svg: require("@site/static/img/technology.svg").default,
    description: (
      <>
        By providing liquidity you can stake your LP tokens to obtain additional
        Balancer liquidity rewards.
      </>
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
