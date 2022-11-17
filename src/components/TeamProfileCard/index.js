/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function TeamProfileCard({
  className,
  name,
  dept,
  children,
  imageUrl,
  email,
}) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={
                imageUrl
                  ? useBaseUrl("img/team/" + imageUrl)
                  : "https://eu.ui-avatars.com/api/?size=128&background=830051&color=ffffff&name=" +
                    name
              }
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://eu.ui-avatars.com/api/?size=128&background=830051&color=ffffff&name=" +
                  name;
              }}
            />
            <div className="avatar__intro padding-top--sm">
              <h3 className="avatar__name">{name}</h3>
            </div>
          </div>
        </div>
        <div className="card__body text--center">{children}</div>
        <div className="card__footer">
          <ul class="pills pills--block">
            <li class="pills__item pills--team-icon">
              {email && (
                <a href={"mailto:" + email}>
                  <img height="24" src={useBaseUrl("img/icons/mail.svg")}></img>
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
