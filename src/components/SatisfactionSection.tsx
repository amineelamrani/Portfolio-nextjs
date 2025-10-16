import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Directore of AlphaStream Technologies.",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Directore of AlphaStream Technologies.",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Directore of AlphaStream Technologies.",
  },
];
export default function SatisfactionSection() {
  return (
    <div className="flex flex-col gap-10 items-center py-10 w-full">
      <h1 className="text-4xl font-bold text-center">
        Kind words from{" "}
        <span className="text-purple-300">satisfied clients</span>
      </h1>
      <div
        id="animatedReviews"
        className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden w-full pb-5"
      >
        <InfiniteMovingCards
          key={"ldkekldjeldel"}
          items={testimonials}
          direction="right"
          speed="slow"
          className=""
          image="/profile.svg"
        />
      </div>
    </div>
  );
}
