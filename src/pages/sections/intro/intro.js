import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import styles from "../../styles.module.css";

export default function Intro() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <div className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row padding-horiz--md padding-vert--md">
          <div className="col col--8 margin-top--xl">
            <div>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
          </div>
          <div className="col col--4 padding--md">
            <img src={useBaseUrl("img/explore.svg")} />
          </div>
        </div>
      </div>
    </div>
  );
}
