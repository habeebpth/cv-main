import React from "react";
import { LabelPrimary, SummaryText } from "../commons";

const ProfileSummary = () => {
  return (
    <>
      <LabelPrimary title="Profile Summary" />
      <div className="m-t-15">
        <SummaryText
          summary="A passionate Full Stack Developer skilled at developing efficient and scalable solutions for complex
problems with a demonstrated work history in full-stack software development."
        />
      </div>
    </>
  );
};

export default ProfileSummary;
