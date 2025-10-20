import React from "react";
import { Send } from "lucide-react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Hero() {
  return (
    <div className="relative py-14 sm:py-24 flex flex-col items-center justify-center text-center">
      <h3 className=" text-gray-400 uppercase z-10">
        Dynamic Web Magic with Next.js
      </h3>
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold z-10 text-white pb-7">
        <TextGenerateEffect
          className="text-white text-5xl md:text-6xl lg:text-8xl font-bold z-10"
          words={`Transforming Concepts into Seamless User Experiences`}
          filter={false}
        />
      </h1>
      <h2 className="text-lg md:text-xl lg:text-2xl z-10 pt-5 pb-10">
        Hi! I&apos;m Amine, a MERN & Next.js Developer based in Morocco.
      </h2>
      <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <div className="flex items-center gap-1 justify-center z-10">
            <p>Show my work </p>
            <Send size={10} />
          </div>
        </span>
      </button>
    </div>
  );
}
