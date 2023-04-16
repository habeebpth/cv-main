import React from "react";
import { LabelPrimary } from "../commons";

const Awards = () => {
  const awards = [
    {
      key: React.useId(),
      title: "National Conference in Frontiers IN Computing - Participant",
      org: "MES College of Engineering",
    },
  ];
  return (
    <>
      <LabelPrimary title="Awards" />
      <div className="award-section m-t-15">
        {awards.map((award) => (
          <div className="award-section-card" key={award.key}>
            <h4 className="label-tertiary">{award.title}</h4>
            <p className="summary-text">{award.org}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Awards;
