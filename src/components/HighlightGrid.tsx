import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export default function HighlightGrid() {
  return (
    <div className="w-full flex flex-col gap-7 md:gap-7 py-5">
      <div id="upper-grid" className="flex flex-col lg:flex-row w-full gap-7">
        <WobbleCard containerClassName="w-full lg:w-1/2">
          <h1>Card1</h1>
        </WobbleCard>

        <div className="w-full lg:w-1/2 flex flex-col md:flex-row lg:flex-col gap-7">
          <WobbleCard containerClassName="w-full md:w-1/2 lg:w-full">
            <h1>Card2</h1>
          </WobbleCard>

          <WobbleCard containerClassName="w-full md:w-1/2 lg:w-full">
            <h1>Card3</h1>
          </WobbleCard>
        </div>
      </div>

      <div id="lower-grid" className="flex flex-col md:flex-row w-full gap-7">
        <div className="w-full md:w-1/2 flex flex-col gap-7">
          <WobbleCard containerClassName="w-full">
            <h1>Card4</h1>
          </WobbleCard>

          <WobbleCard containerClassName="w-full">
            <h1>Card5</h1>
          </WobbleCard>
        </div>

        <WobbleCard containerClassName="w-full md:w-1/2">
          <h1>Card6</h1>
        </WobbleCard>
      </div>
    </div>
  );
}
