import React from "react";
import CanvasRevealEffectDemo from "./customComponents/approachItems";

export default function WorkApproachSection() {
  return (
    <div className="flex flex-col gap-10 items-center py-10 w-full">
      <h1 className="text-4xl font-bold text-center">
        My <span className="text-purple-300">approach</span>
      </h1>

      <CanvasRevealEffectDemo />
    </div>
  );
}
