"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export default function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-10 sm:py-20 flex flex-col md:flex-row items-stretch justify-center w-full gap-4 mx-auto px-8">
        <Card
          title="Planning & Strategy"
          desc="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
          icon={<PhaseButton phaseNumber={1} />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          desc="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
          icon={<PhaseButton phaseNumber={2} />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#ab189f]"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={3}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Development & Launch"
          desc="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
          icon={<PhaseButton phaseNumber={3} />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  desc,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  desc: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-gray-500  group/canvas-card flex items-center justify-center dark:border-white/[0.2]  w-full mx-auto px-4 py-14 md:py-34 relative lg:min-w-[250px]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 h-full">
        <div className="absolute flex items-center justify-center group-hover/canvas-card:opacity-0 transition duration-200 w-full h-full mx-auto">
          {icon}
        </div>

        <div className="h-full text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10  group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 flex flex-col gap-5 items-center justify-center">
          <h1 className="text-xl lg:text-2xl font-bold text-center">{title}</h1>
          <p className="text-sm lg:text-base text-center">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const PhaseButton = ({ phaseNumber }: { phaseNumber: number }) => {
  return (
    <>
      <button className="relative inline-flex h-15 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-xl font-bold text-purple-300 backdrop-blur-3xl">
          <p>Phase {phaseNumber}</p>
        </span>
      </button>
    </>
  );
};
