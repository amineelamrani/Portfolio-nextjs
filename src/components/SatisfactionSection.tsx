import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Image from "next/image";

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

const appLogos = [
  {
    logo: "/app.svg",
    appName: "/appName.svg",
  },
  {
    logo: "/cloud.svg",
    appName: "/cloudName.svg",
  },
  {
    logo: "/dock.svg",
    appName: "/dockerName.svg",
  },
  {
    logo: "/host.svg",
    appName: "/hostName.svg",
  },
  {
    logo: "/stream.svg",
    appName: "/streamName.svg",
  },
];
export default function SatisfactionSection() {
  return (
    <div className="flex flex-col gap-10 items-center py-10 w-full">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
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
          speed="fast"
          className=""
          image="/profile.svg"
        />
      </div>
      <div
        id="appLogos"
        className="w-full flex flex-wrap justify-center items-center gap-20"
      >
        {appLogos.map((app, index) => (
          <div
            key={`${app.logo}-${index}`}
            className="flex gap-1 items-center justify-center"
          >
            <Image
              src={app.logo}
              alt={`AppLogo-${index}`}
              width={50}
              height={100}
              className=""
            />
            <Image
              src={app.appName}
              alt={`AppLogoName-${index}`}
              width={100}
              height={50}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
