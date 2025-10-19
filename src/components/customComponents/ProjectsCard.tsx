import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ComponentProps {
  image: string;
  title: string;
  description: string;
  url: string;
  techStack: string[];
}

export default function ProjectsCard({
  image,
  title,
  description,
  url,
  techStack,
}: ComponentProps) {
  return (
    <div className="w-full lg:w-1/2 relative px-5 py-2 lg:min-w-[450px]">
      <PinContainer
        title="Visit"
        href={url}
        containerClassName="w-full h-full p-0 top-0 bg-transparent"
        className="flex flex-col w-full gap-5 p-0 top-0 bg-transparent"
      >
        <div className="w-full  bg-[url('/bg.png')] bg-cover bg-center flex justify-center items-center pt-15">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={800}
            className="w-4/5"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-base sm:text-xl md:text-2xl font-bold py-2">
            {title}
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base">
            {description}
          </p>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex gap-0">
            {techStack.map((tech, index) => (
              <div
                key={`${tech}-${index}-tooltip-imagetechstack`}
                className={`bg-[rgb(9,0,31)] -mr-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-gray-500 border-[0.2px] flex items-center justify-center`}
              >
                <Image
                  src={tech}
                  width={50}
                  height={50}
                  className="w-3 h-3 sm:w-5 sm:h-5"
                  alt={`tech-${tech}`}
                />
              </div>
            ))}
          </div>
          <p className="text-purple-300 font-bold text-sm sm:text-lg md:text-xl flex gap-1 items-center">
            Check Live Site <ArrowUpRight />
          </p>
        </div>
      </PinContainer>
    </div>
  );
}
