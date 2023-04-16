import React from "react";
import { LabelPrimary } from "../commons";

const TechnicalSummary = () => {
  const titles: Array<{ title: string; text: string }> = [
    {
      title: "Programming",
      text: "PHP, JavaScript, TypeScript",
    },
    {
      title: "Operating System",
      text: "Windows, Linux and macOS",
    },
    {
      title: "Database",
      text: "MySQL, MSSQL",
    },
    {
      title: "Server",
      text: "Apache HTTP Server, Nginx, NodeJS",
    },
    {
      title: "Tools and Libraries",
      text: "GIT, Bootstrap, Vuetify, SCSS, React",
    },
    {
      title: "Frameworks",
      text: "Laravel, VueJS, Angular, Codeigniter, Lumen, NestJS",
    },
  ];
  return (
    <>
      <LabelPrimary title="Technical Profile" />
      <div className="technical-profile m-t-15">
        {titles.map((data, index) => (
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

export default TechnicalSummary;
