import React from "react";
import { OverviewAddrLine } from "../commons";
import { OverviewAddrLineProps } from "../types";

const OverviewSection = () => {
  const addressDetails: Array<OverviewAddrLineProps> = [
    {
      iconName: "fa-solid fa-location-pin",
      text: "Al-Nahda, Dubai, UAE",
      isLink: false,
    },
    {
      iconName: "fa-solid fa-envelope",
      text: "habeeb.pth1@gmail.com",
      isLink: true,
      path: "mailto:habeeb.pth1@gmail.com",
    },
    {
      iconName: "fa-solid fa-phone",
      text: "+971-527402017",
      isLink: true,
      path: "tel:+971-527402017",
    },
    {
      iconName: "fa-solid fa-calendar-days",
      text: "28-feb-1994",
      isLink: false,
    },
    {
      iconName: "fa-brands fa-linkedin",
      text: "https://www.linkedin.com/in/habeebpth",
      isLink: true,
      path: "https://www.linkedin.com/in/habeebpth",
    },
    {
      iconName: "fa-brands fa-github",
      text: "https://github.com/habeebpth",
      isLink: true,
      path: "https://github.com/habeebpth",
    },
  ];
  return (
    <div className="overview-section">
      <img
        src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
        className="profile-image"
        alt="profile pic"
      />
      <div className="details">
        <h1 className="heading-one text-white">Habeeb Rahman</h1>
        <h2 className="heading-two text-white text-italic">
          Full-stack Developer
        </h2>
        <div className="details-section">
          {addressDetails.map((addr, index) => (
            <OverviewAddrLine
              key={index}
              iconName={addr.iconName}
              text={addr.text}
              isLink={addr.isLink}
              path={addr.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
