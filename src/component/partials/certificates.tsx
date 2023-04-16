import React from "react";
import { LabelPrimary } from "../commons";

const Certificates = () => {
  const certificates: Array<{ title: string; text: string }> = [
    
    {
      title: "Data Mining",
      text: "IIT - Madras",
    },
  ];
  return (
    <>
      <LabelPrimary title="Certificates" />
      <div className="technical-profile m-t-15">
        {certificates.map((data, index) => (
          <div
            className={`technical-profile-card ${index > 1 && "m-t-10"}`}
            key={index}
          >
            <h4 className="label-tertiary">{data.title}</h4>
            <p className="summary-text">{data.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certificates;
