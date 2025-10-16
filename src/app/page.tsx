import Hero from "@/components/Hero";
import HighlightGrid from "@/components/HighlightGrid";
import ProjectSelection from "@/components/ProjectSelection";
import SatisfactionSection from "@/components/SatisfactionSection";
import { Spotlight } from "@/components/ui/spotlight";
import React from "react";

export default function Home() {
  return (
    <div>
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-30"
        fill="white"
      />
      <div className="container mx-auto pt-25 flex flex-col items-center">
        <Hero />
        <HighlightGrid />
        <ProjectSelection />
        <SatisfactionSection />
      </div>
    </div>
  );
}
