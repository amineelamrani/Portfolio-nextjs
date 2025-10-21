import React from "react";
import ProjectsCard from "./customComponents/ProjectsCard";

const projectData = [
  {
    image: "/p1.png",
    title: "FOREVER E-commerce Website with Admin Dashboard",
    description:
      "Shop effortlessly on this sleek e-commerce platform built with Next.js and TypeScript, featuring secure JWT login, Stripe payments, and an intuitive admin dashboard to manage orders.",
    url: "https://ecommerce-forever-store-next-js-v2.vercel.app/",
    techStack: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "stripe.svg"],
  },
  {
    image: "/p2.png",
    title: "Amine's Code Chronicles : Modern Personal Blog",
    description:
      "Amine Blog APP - Built using Next.js, TypeScript, and TailwindCSS, featuring Firebase OAuth and authentication for a modern, secure, and responsive blogging experience.",
    url: "https://amine-blog-next-js-v2-0.vercel.app/",
    techStack: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/mongodb.svg"],
  },
  {
    image: "/p3.png",
    title: "Branwave AI Landing Page",
    description:
      "A Beautiful AI Landing Page Built using React.js, TailwindCSS and DaisyUI",
    url: "https://brainwave-amin-amra.netlify.app/",
    techStack: ["/re.svg", "/tail.svg", "/daisyui.svg"],
  },
  {
    image: "/p4.png",
    title: "Amine's Calisthenics Business website idea",
    description: "Modern and responsive Bootstap based Calisthenics website",
    url: "https://amineelamrani.github.io/BTI/",
    techStack: ["/javascript.svg", "/bootstrap.svg"],
  },
];

export default function ProjectSelection() {
  return (
    <div
      className="flex flex-col gap-10 items-center py-10 w-full"
      id="projects"
    >
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
        A small selection of{" "}
        <span className="text-purple-300">recent projects</span>
      </h1>
      <div
        id="SelectedProject-container"
        className="w-full flex flex-wrap justify-center items-stretch"
      >
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
