import React from "react";
import WorkExperienceCards from "./customComponents/WorkExperienceCards";

const experiencesData = [
  {
    logo: "/exp1.png",
    title: "Capgemini Engineering - Systems Engineer (Hybrid, Morocco)",
    description:
      "Provide consulting services to Stellantis, contributing to the design and development of complex system architectures with a focus on systems thinking and cross-functional alignment.",
  },
  {
    logo: "/exp2.webp",
    title: "Alten Maroc - EE Architect (Hybrid, Morocco)",
    description:
      "Provide technical guidance and apply analytical and systems thinking to optimize EE architecture performance.",
  },
  {
    logo: "/exp2.webp",
    title: "Alten Maroc - Automotive EE Intern (Onsite, Morocco)",
    description:
      "Gain hands-on experience in engineering workflows and team collaboration.",
  },
  {
    logo: "/exp4.png",
    title: "ETAS GmbH - Electromechanical Engineering Intern (Remote, Germany)",
    description:
      "Identify existing measurement and calibration tools designed for battery electric vehicles and lead weekly meetings with the different stakeholders.",
  },
];

export default function WorkExperienceSection() {
  return (
    <div className="flex flex-col gap-10 items-center py-10 w-full">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
        My <span className="text-purple-300">work experience</span>
      </h1>
      <h2 className="text-xs sm:text-sm md:text-base text-center">
        While my professional experience has been in systems and electrical
        engineering, I bring a unique combination of technical problem-solving,
        client collaboration, and team coordination. Coupled with the web
        projects I&apos;ve built,{" "}
        <span className="text-purple-300 font-bold">
          I can contribute significantly as a full stack developer and be a
          valuable asset to any team.
        </span>
      </h2>
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
            boxIndex={index}
          />
        ))}
      </div>
    </div>
  );
}
