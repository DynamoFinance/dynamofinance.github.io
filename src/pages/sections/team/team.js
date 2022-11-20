import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import styles from "../../styles.module.css";

export default function Team() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <div className={clsx("whiteBanner", styles.whiteBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--4 margin-vert--lg padding-horiz--xl">
            <h2>We are happy to get in touch with you</h2>

            <div className="padding--sm">
              <a
                className="button button--secondary button--block margin-vert--xs"
                href={useBaseUrl("/collaborate")}
              >
                Collaborate
              </a>

              <a
                className="button button--secondary button--block margin-vert--xs"
                href={useBaseUrl("/team")}
              >
                Team
              </a>
            </div>
          </div>

          <div className="col col--8 padding-horiz--xl margin-vert--lg">
            <a href={useBaseUrl("#")}>
              <img src={useBaseUrl("img/team.svg")} height="300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
