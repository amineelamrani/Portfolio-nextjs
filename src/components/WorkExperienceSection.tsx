import React from "react";
import WorkExperienceCards from "./customComponents/WorkExperienceCards";

const experiencesData = [
  {
    logo: "/exp1.svg",
    title: "Frontend Engineer Intern",
    description:
      "Assisted in the development of a web-based platform using React.js, enhancing interactivity",
  },
  {
    logo: "/exp2.svg",
    title: "Mobile App Dev - JSM Tech",
    description:
      "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  },
  {
    logo: "/exp3.svg",
    title: "Freelance App Dev Project",
    description:
      "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  },
  {
    logo: "/exp4.svg",
    title: "Lead Frontend Developer",
    description:
      "Developed and maintained user-facing features using modern frontend technologies.",
  },
];

export default function WorkExperienceSection() {
  return (
    <div className="flex flex-col gap-10 items-center py-10 w-full">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
        My <span className="text-purple-300">work experience</span>
      </h1>
      <div
        id="experiences-grid"
        className="w-full flex flex-wrap justify-center items-stretch "
      >
        {experiencesData.map((experience, index) => (
          <WorkExperienceCards
            key={`experience-${experience.title}-${index}`}
            logo={experience.logo}
            title={experience.title}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
}
