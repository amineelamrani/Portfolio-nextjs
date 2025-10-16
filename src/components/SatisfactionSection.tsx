import React from "react";

export default function SatisfactionSection() {
  return (
    <div className="flex flex-col gap-10 items-center py-10 w-full">
      <h1 className="text-4xl font-bold text-center">
        Kind words from{" "}
        <span className="text-purple-300">satisfied clients</span>
      </h1>
      <div id="animatedReviews"></div>
    </div>
  );
}
