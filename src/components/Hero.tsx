import React from "react";
import { Send } from "lucide-react";
import { Spotlight } from "./ui/spotlight";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="relative py-24 px-45 flex flex-col items-center justify-center text-center gap-7 border">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:80px_80px] select-none z-0 opacity-50",
          "[background-image:linear-gradient(to_right,#171717_2px,transparent_2px),linear-gradient(to_bottom,#171717_2px,transparent_1px)]"
        )}
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <h3 className="text-xl text-gray-400 uppercase z-10">
        Dynamic Web Magic with Next.js
      </h3>
      <h1 className="text-5xl font-bold z-10">
        Transforming Concepts into Seamless{" "}
        <span className="text-purple-300">User Experiences</span>
      </h1>
      <h2 className="text-2xl z-10">
        Hi! I&apos;m Amine, a MERN & Next.js Developer based in Morocco.
      </h2>
      <button className="flex items-center gap-1 justify-center z-10">
        <p>Show my work </p>
        <Send size={10} />
      </button>
    </div>
  );
}
