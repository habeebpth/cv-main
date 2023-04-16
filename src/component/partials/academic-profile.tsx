import React from "react";
import { LabelPrimary } from "../commons";

const AcademicProfile = () => {
  const academicProfiles = [
    {
      year: "2015 - 2018",
      course: {
        program: "Master of Computer Applications",
        college: "MES College of Engineering",
        collegeLink: "https://www.mesce.ac.in/",
      },
      place: "Kerala, India",
    },
    {
      year: "2012 - 2015",
      course: {
        program: "Bachelor of Science in Computer Science",
        college: "Majlis Arts and Science College",
        collegeLink: "https://www.masc.edu.in/",
      },
      place: "Kerala, India",
    },
  ];
  return (
    <>
      <LabelPrimary title="Academic Profile" />
      <div className="academic-profile m-t-15">
        {academicProfiles.map((academicProfile, index) => (
          <div className="academic-profile-card" key={index}>
            <div className="academic-profile-card-year">
              <p className="summary-text"> {academicProfile.year}</p>
            </div>
            <div className="academic-profile-card-college">
              <h4 className="label-tertiary">
                {academicProfile.course.program}
              </h4> 
              <a
                className="summary-text"
                href={academicProfile.course.collegeLink}
              >
                {academicProfile.course.college}
                <i className="fa-solid fa-arrow-up-right-from-square m-l-5"></i>
              </a>
            </div>
            <div className="academic-profile-card-place">
              <p className="summary-text">{academicProfile.place}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AcademicProfile;
