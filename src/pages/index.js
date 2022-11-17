import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import GetStarted from "./sections/get-started/get-started.js";
import Intro from "./sections/intro/intro.js";
import Usage from "./sections/usage/usage.js";

import styles from "./styles.module.css";
import Team from "./sections/team/team.js";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <Intro />
      <div className={styles.diagonalBottomPurple} />
      <div className={clsx("greybanner", styles.greyBanner)}>
        <HomepageFeatures />
      </div>
      <div className={styles.diagonalBottom} />
      <Usage />
      <div className={styles.diagonalTop} />
      <GetStarted />
      <div className={styles.diagonalBottom} />
      <Team />
      <div className={styles.diagonalTopGrey} />
    </Layout>
  );
}
