import React from "react";
import { Button } from "./ui/Moving-border2";

export default function WorkExperienceSection() {
  return (
    <div className="flex flex-col gap-10 items-center py-10 w-full">
      <h1 className="text-4xl font-bold text-center">
        My <span className="text-purple-300">work experience</span>
      </h1>
      <div id="experiences-grid">
        <Button
          borderRadius="1.75rem"
          className="border-slate-800"
          borderClassName="h-70 bg-[radial-gradient(#593d78_100%,#593d78_50%)]"
        >
          Borders are cool
        </Button>
      </div>
    </div>
  );
}
