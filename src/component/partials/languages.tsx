import React from "react";
import { LabelPrimary } from "../commons";

const Languages = () => {
  const languages = ["English", "Malayalam", "Hindi"];
  return (
    <>
      <LabelPrimary title="Languages" />
      <div className="language-section">
        <ul>
          {languages.map((language) => (
            <li className="summary-text" key={language}>
              {language}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Languages;
