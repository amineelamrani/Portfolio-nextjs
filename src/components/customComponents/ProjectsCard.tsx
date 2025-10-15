import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";

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
    <div className="border w-full lg:w-1/2 relative p-5">
      <PinContainer
        title="Visit"
        href={url}
        containerClassName="w-full h-full p-0 top-0"
        className="flex flex-col w-full gap-2 p-0 top-0 "
      >
        <Image src={image} alt={title} width={500} height={300} />
        <div className="flex flex-col">
          <h1 className="text-2xl">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="w-full flex justify-between">
          <div></div>
          <p>Check Live Site /</p>
        </div>
      </PinContainer>
    </div>
  );
}
