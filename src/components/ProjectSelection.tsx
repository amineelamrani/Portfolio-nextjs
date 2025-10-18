import React from "react";
import ProjectsCard from "./customComponents/ProjectsCard";

const projectData = [
  {
    image: "/p1.svg",
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    url: "https://github.com/amineelamrani",
    techStack: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  },
  {
    image: "/p2.svg",
    title: "Yoom - Video Conferencing App",
    description:
      "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    url: "https://github.com/amineelamrani",
    techStack: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  },
  {
    image: "/p3.svg",
    title: "AI Image SaaS - Canva Application",
    description:
      "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    url: "https://github.com/amineelamrani",
    techStack: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  },
  {
    image: "p4.svg",
    title: "Animated Apple Iphone 3D Website",
    description:
      "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    url: "https://github.com/amineelamrani",
    techStack: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  },
];

export default function ProjectSelection() {
  return (
    <div className="flex flex-col gap-10 items-center py-10 w-full">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        A small selection of{" "}
        <span className="text-purple-300">recent projects</span>
      </h1>
      <div id="SelectedProject-container" className="w-full flex flex-wrap ">
        {projectData.map((project, index) => (
          <ProjectsCard
            key={`project.title-${index}`}
            image={project.image}
            title={project.title}
            description={project.description}
            url={project.url}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
}
