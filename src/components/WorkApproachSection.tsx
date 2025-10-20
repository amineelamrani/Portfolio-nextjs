import React from "react";
import CanvasRevealEffectDemo from "./customComponents/approachItems";

export default function WorkApproachSection() {
  return (
    <div className="flex flex-col gap-0 sm:gap-10 items-center py-8 sm:py-10 w-full">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
        My <span className="text-purple-300">approach</span>
      </h1>

      <CanvasRevealEffectDemo />
    </div>
  );
}
