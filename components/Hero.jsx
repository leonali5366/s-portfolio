"use client";
import Image from "next/image";
import nature from "../app/images/nature.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import Magnet from "./Magnet";

export default function Hero() {
  //   const first = useRef(null);
  //   const sec = useRef(null);
  //   const thirt = useRef(null);
  //   const forth = useRef(null);
  //   let yPer = 0;
  //   useEffect(() => {
  //     requestAnimationFrame(animation);
  //   }, []);

  //   const animation = () => {
  //     gsap.set(first.current, { yPercent: yPer });
  //     gsap.set(sec.current, { yPercent: yPer });
  //     gsap.set(thirt.current, { yPercent: yPer });
  //     gsap.set(forth.current, { yPercent: yPer });
  //     yPer += 1;
  //     requestAnimationFrame(animation);
  //   };absolute top-0 left-0 
  return (
    <div className="w-full h-full bg-[#121212]">
      <div className="max-w-[1550px] mx-auto h-full flex">
        <div className="w-full h-full">
          <img
            src="https://cdn.prod.website-files.com/66277b11e48ec235af18f9cc/66277b11e48ec235af18faa4_Vlad-Tro-smiling.webp"
            alt=""
            className="w-fit h-[1100px] object-cover sticky top-0"
          />
        </div>
        <div className="w-full h-full">
          <div className="sticky top-[30%] flex flex-col gap-y-10">
            <div className="text-6xl font-mono leading-snug">
              I help you book more clients and standout from the competition
              with a{" "}
              <h1 className="flex gap-x-5">
                <p className="underline underline-thickness underline-offset-[0.8rem]">cost-effective</p>{" "}
                website
              </h1>
            </div>
            <p className="text-[28px] font-light">
              If you already have a website, book a FREE 30 call to get clear
              steps on improving its performance now!
            </p>
            <button className="flex gap-x-5 items-center text-2xl font-medium group uppercase">
              Book a free call{" "}
              <div className="size-16 rounded-full bg-transparent border-dashed group-hover:bg-white border group-hover:scale-125 transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
