import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import styles from "../../styles.module.css";

export default function Usage() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <div className={clsx("whiteBanner", styles.whiteBanner)}>
      <div className="container">
        <div className="margin-vert--md margin-horiz--lg padding-bottom--sm">
          <Strategist />
        </div>
        <div className="margin-vert--xl margin-horiz--lg padding-bottom--sm">
          <Vaults />
        </div>
      </div>
    </div>
  );
}

function Strategist() {
  return (
    <div className="row margin-horiz--lg">
      <div className="col col--6 padding-vert--lg padding-right--lg">
        <h1 style={{ textAlign: "left" }}>Strategists earn revenue</h1>
        <div style={{ textAlign: "justify" }}>
          Become a strategist and earn part of our revenue by improving our APY.{" "}
        </div>
        <div style={{ textAlign: "right" }}>
          <a href={useBaseUrl("docs/Dynamo/base_pool_architecture")}>
            {" "}
            <b>Read more</b>
          </a>
        </div>
      </div>
      <div className="col col--6 margin-bottom--sm">
        <img width="70%" src={useBaseUrl("img/strategist.svg")} />
      </div>
    </div>
  );
}

function Vaults() {
  return (
    <div className={clsx(styles.reverse, "row", "margin-horiz--lg")}>
      <div className="col col--6 margin-vert--sm">
        <img width="80%" src={useBaseUrl("img/vault.svg")} />
      </div>

      <div className="col col--6 margin-vert--xl">
        <h1 style={{ textAlign: "right" }}>Vaults</h1>
        <div style={{ textAlign: "justify" }}>
          Rebalance idle liquidity between different whitelisted lending
          protocols.{" "}
        </div>
        <div style={{ textAlign: "right" }}>
          <a href={useBaseUrl("docs/Dynamo/Vaults/governance")}>
            {" "}
            <b>Read more</b>
          </a>
        </div>
      </div>
    </div>
  );
}
