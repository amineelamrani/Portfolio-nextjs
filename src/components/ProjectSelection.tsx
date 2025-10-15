import React from "react";
import ProjectsCard from "./customComponents/ProjectsCard";

export default function ProjectSelection() {
  return (
    <div className="flex flex-col items-center py-10 w-full">
      <h1 className="text-4xl font-bold">
        A small selection of{" "}
        <span className="text-purple-300">recent projects</span>
      </h1>
      <div id="SelectedProject-container" className="w-full flex flex-wrap ">
        <ProjectsCard
          image="/p1.svg"
          title="3D Solar System Planets to Explore"
          description="Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js"
          url="https://google.com"
          techStack={["/next.svg", "ts.svg"]}
        />
        <ProjectsCard
          image="/p1.svg"
          title="3D Solar System Planets to Explore"
          description="Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js"
          url="https://google.com"
          techStack={["/next.svg", "ts.svg"]}
        />
        <ProjectsCard
          image="/p1.svg"
          title="3D Solar System Planets to Explore"
          description="Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js"
          url="https://google.com"
          techStack={["/next.svg", "ts.svg"]}
        />
      </div>
    </div>
  );
}
