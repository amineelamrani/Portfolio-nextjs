import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className=" relative flex justify-between items-center w-full p-10">
      <div className="text-xs md:text-base">
        Copyright © 2025 Amine ELAMRANI
      </div>
      <div className="flex gap-2 items-center">
        <a
          href="https://github.com/amineelamrani/Portfolio-nextjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/code.svg"}
            alt=""
            width={50}
            height={50}
            className="w-5 h-5 md:w-8  md:h-8 "
          />
        </a>

        <a
          href="https://ma.linkedin.com/in/amine-elamrani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/link.svg"}
            alt=""
            width={50}
            height={50}
            className="w-5 h-5 md:w-8  md:h-8 "
          />
        </a>
        <a
          href="https://github.com/amineelamrani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/git.svg"}
            alt=""
            width={50}
            height={50}
            className="w-5 h-5 md:w-8  md:h-8"
          />
        </a>
      </div>
      <div className="-z-10 absolute bg-[url(/footer-grid.svg)] w-full h-100 bg-cover bg-top right-0 left-0 bottom-0"></div>
    </div>
  );
}
