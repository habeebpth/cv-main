import React from "react";
import { LabelPrimary } from "../commons";

const ProfessionalExperience = () => {
  const experiences: Array<{
    key: string;
    duration: string;
    companyName: string;
    position: string;
    place?: string;
    companyLink?: string;
    responsibilities: Array<string>;
  }> = [
    {
      key: React.useId(),
      duration: "Oct 2021 - present",
      companyName: "Alwafaa Group Dubai",
      position: "Senior Software Engineer",
      place: "Al-Qiyadha, Dubai, Uae",
      companyLink: "https://www.alwafaagroup.com/",
      responsibilities: [
        "Designed the Technical Specification for largest project requirements.",
        `Involved in reviewing coding and testing for teams. 
        Impact analysis of the new requirement or change
        request on the existing programs initiated by the client.`,
        `Involved in designing the Technical Specification.`,
        `Migrated existing Applications to new Framework.`,
        `Training interns`
      ],
    },
    {
      key: React.useId(),
      duration: "Oct 2020 - Oct 2021",
      companyName: "Cybase Technologies Pvt. Ltd.",
      position: "Technical Lead",
      place: "Eranamkulam, KL, India",
      companyLink: "https://cybasetech.com/",
      responsibilities: [
        `Active participant and contributor in all phases of
      development, with the inception of Conceptual-Model
      through the Functional and detailed design to the
      Implementation, Debugging and Deployment of the
      software solution.`,
        `Proactive contributor through direction and participation
      with team members in the Analysis, Development and
      Delivery of all support and project work for assigned
      applications.`,
        `Acknowledged for Design and Development of Backend
      Application that serves the new product of the
      organization enhancing the performance of existing
      products by optimizing API's and introducing
      Socket-Communication, Caching and optimizing SQL
      queries.`,
      ],
    },
    {
      key: React.useId(),
      duration: "Jul 2018 - Oct 2020",
      companyName: "D5N Digital Solutions LLP",
      position: "Software Engineer - Full Stack",
      place: "Kottakkal, KL, India",
      companyLink: "https://www.d5ndigital.com",
      responsibilities: [
        `Implemented RESTful web apis using PHP`,
        `Designed and developed UI for web applications using
       Angular and VueJS.`,
        `Worked as a Lead Developer in project EMM and OPM.`,
        `Support in maintenance and bug fixes.`,
      ],
    },
  ];
  return (
    <>
      <LabelPrimary title="Professional Experience" />
      <div className="professional-experience m-t-15">
        {experiences.map((experience) => (
          <div key={experience.key} className="professional-experience-card">
            <div className="duration summary-text">{experience.duration}</div>
            <div className="responsibilitiesAndCompanyDetails">
              <div className="companyDetails">
                <h4 className="label-tertiary">{experience.position}</h4>
                <a href={experience.companyLink} className="summary-text">
                  {experience.companyName}{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square m-l-5"></i>
                </a>
              </div>
              <div className="responsibilities">
                <ul>
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="summary-text">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="location summary-text">{experience.place}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfessionalExperience;
