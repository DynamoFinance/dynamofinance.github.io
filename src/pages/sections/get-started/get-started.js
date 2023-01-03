import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import styles from "../../styles.module.css";

const Card = ({ title, description, cardImage, url }) => {
  return (
    <div className="col col--4 margin-vert--md">
      <div className="card">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div
          className="card__image padding-top--lg"
          style={{ height: "120px" }}
        >
          <img src={useBaseUrl(cardImage)} style={{ width: "140px" }} />
        </div>
        <div className="card__body padding-top--xl" style={{ height: "130px" }}>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link
            className="button button--secondary button--block"
            to={useBaseUrl(url)}
          >
            {" "}
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

const CardSoon = ({ title, description, cardImage, url }) => {
  return (
    <div className="col col--4 margin-vert--md">
      <div className="card">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div
          className="card__image padding-top--lg"
          style={{ height: "120px" }}
        >
          <img src={useBaseUrl(cardImage)} style={{ width: "150px" }} />
        </div>
        <div className="card__body padding-top--xl" style={{ height: "130px" }}>
          <p>{description}</p>
        </div>
        <div className="card__footer"></div>
      </div>
    </div>
  );
};

export default function GetStarted() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const CardList = [
    {
      title: "Dynamo:s",
      description: "Become a liquidity provider.",
      cardImage: "img/liquidity_provider.svg",
      url: "docs/Dynamo/Protocol/base_pools",
    },
    {
      title: "Open-source",
      description: "We share our code under MIT.",
      cardImage: "img/software.svg",
      url: "docs/Dynamo/Vault/intro",
    },
  ];
  const CardListSoon = [
    {
      title: "Innovation",
      description: "Profit from our research.",
      cardImage: "img/science.svg",
      url: "",
    },
  ];

  return (
    <div id="getstarted" className={clsx("greyBanner", styles.greyBanner)}>
      <div className="container margin-bottom--xl">
        <div className="row">
          {/*<div className="col col--2"></div>*/}
          <div className="col col--12 padding-horiz--xl">
            <p>Our protocol is available on Balancer</p>
          </div>
          {/*<div className="col col--2"></div>*/}
        </div>
        <div
          className="row padding-vert--lg margin-top--lg padding--md"
          style={{
            background: "#edf0f2",
            borderRadius: 25,
            marginBottom: 25,
          }}
        >
          {CardList.map((card) => (
            <Card
              title={card.title}
              description={card.description}
              cardImage={card.cardImage}
              url={card.url}
            />
          ))}
          {CardListSoon.map((card) => (
            <CardSoon
              title={card.title}
              description={card.description}
              cardImage={card.cardImage}
              url={card.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
