import React from "react";
import { Button } from "../ui/Moving-border2";
import Image from "next/image";

interface ComponentExperienceProps {
  logo: string;
  title: string;
  description: string;
}

export default function WorkExperienceCards({
  logo,
  title,
  description,
}: ComponentExperienceProps) {
  return (
    <div className="w-full md:w-1/2 px-2 py-2">
      <Button
        borderRadius="1.75rem"
        className="bg-[rgb(4, 7, 29)] border-slate-800 backdrop-blur-xl flex flex-row items-center justify-center p-7 gap-4 w-full"
        borderClassName="h-30 w-20 rounded-full bg-[radial-gradient(#593d78_80%,#593d78_50%)] "
        containerClassName="w-full h-full"
        duration={8000}
      >
        <Image
          src={logo}
          alt={title}
          width={100}
          height={100}
          className="w-1/4"
        />
        <div className="flex flex-col gap-1 items-start text-start justify-start">
          <h1 className="text-xl font-bold text-white">{title}</h1>
          <p className="">{description}</p>
        </div>
      </Button>
    </div>
  );
}
