import { Send } from "lucide-react";
import React from "react";

export default function GetInTouchSection() {
  return (
    <div className="flex flex-col gap-10 items-center py-10 w-full text-center">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
        Ready to take <span className="text-purple-300">your</span> digital
        presence to the next level?
      </h1>
      <p>
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </p>
      <a href="mailto:amine.elamrani.j.s.s.h@gmail.com">
        <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <div className="flex items-center gap-1 justify-center z-10">
              <p>Let&apos;s get in touch </p>
              <Send size={10} />
            </div>
          </span>
        </button>
      </a>
    </div>
  );
}
