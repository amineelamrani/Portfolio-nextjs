import React from "react";
import { Button } from "./ui/Moving-border2";

export default function WorkExperienceSection() {
  return (
    <div className="flex flex-col gap-10 items-center py-10 w-full">
      <h1 className="text-4xl font-bold text-center">
        My <span className="text-purple-300">work experience</span>
      </h1>
      <div id="experiences-grid" className="w-full">
        <Button
          borderRadius="1.75rem"
          className="bg-[rgb(4, 7, 29)] border-slate-800 backdrop-blur-xl "
          borderClassName="h-30 w-20 rounded-full bg-[radial-gradient(#593d78_80%,#593d78_50%)] "
          containerClassName="w-full h-50 "
          duration={8000}
        >
          Borders are cool
        </Button>
      </div>
    </div>
  );
}
