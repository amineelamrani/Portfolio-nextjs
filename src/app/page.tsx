import GetInTouchSection from "@/components/GetInTouchSection";
import Hero from "@/components/Hero";
import HighlightGrid from "@/components/HighlightGrid";
import ProjectSelection from "@/components/ProjectSelection";
// import SatisfactionSection from "@/components/SatisfactionSection";
import { Spotlight } from "@/components/ui/spotlight";
import WorkApproachSection from "@/components/WorkApproachSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <Spotlight
        className="-top-40 -left-50 md:-top-30 md:-left-20"
        fill="white"
      />
      <Spotlight
        className="-top-40 left-10 md:-top-60 md:left-40"
        fill="blue"
      />

      <div className="absolute bg-[url(/grid.svg)] top-0 left-0 right-0 h-200 md:h-150 lg:h-200 bg-contain bg-center bg-repeat-round" />

      <div className="container mx-auto px-5 lg:px-15 pt-25 flex flex-col items-center">
        <Hero />
        <HighlightGrid />
        <ProjectSelection />
        {/* <SatisfactionSection /> */}
        <WorkExperienceSection />
        <WorkApproachSection />
        <GetInTouchSection />
      </div>
    </div>
  );
}
