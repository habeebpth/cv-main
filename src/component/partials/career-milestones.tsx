import React from "react";
import { LabelPrimary } from "../commons";

const CareerMilestones = () => {
  const milestones = [
    {
      key: React.useId(),
      title: "Open Source Contributor - NPM",
      subTitle: "dev-utilz : String Utility Module",
      link: "https://www.npmjs.com/package/dev-utilz",
      description:
        "String Utility Module handling essential string operations such as: Type Validator, Existent Validator, Capitalizer, Content Processors",
    },
  ];
  return (
    <>
      <LabelPrimary title="Career Milestones" />
      <div className="m-t-15">
        {milestones.map((milestone) => (
          <div className="milestone-section" key={milestone.key}>
            <a href={milestone.link}>
              <h4 className="label-tertiary">
                {milestone.title}
                <i className="fa-solid fa-arrow-up-right-from-square m-l-5"></i>
              </h4>
            </a>
            <p className="summary-text sub-title">{milestone.subTitle}</p>
            <p className="summary-text description">{milestone.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CareerMilestones;
