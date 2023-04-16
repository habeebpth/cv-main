import React from "react";
import { OverviewAddrLineProps } from "../types";

const OverviewAddrLine = ({
  iconName,
  text,
  isLink,
  path,
}: OverviewAddrLineProps) => (
  <div className="details-section-addr-sec">
    <i className={`${iconName} fa-2x`}></i>
    {isLink ? (
      <a className="details-section-addr-sec-link" href={path}>
        {text}
      </a>
    ) : (
      <p className="details-section-addr-sec-link">{text}</p>
    )}
  </div>
);

export default OverviewAddrLine;
