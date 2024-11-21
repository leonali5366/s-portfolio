"use client";
import Image from "next/image";
import nature from "../app/images/nature.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import Magnet from "./Magnet";
import { GoArrowRight } from "react-icons/go";
import profile from "../app/images/profile.jpg";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ setIsHovered }) {
  useGSAP(() => {
    gsap.to("#hero-img", {
      scale: 1,
      duration: 1,
      scrollTrigger: "#hero-img",
    });
  }, []);
  return (
    <div className="w-full h-screen bg-[#121212] overflow-hidden">
      <div className="max-w-[1550px] mx-auto h-full flex items-center">
        <div className="w-full max-h-full">
          <Image
            src={profile}
            alt=""
            width="100%"
            height="100%"
            id="hero-img"
            className="scale-150"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-center gap-y-10">
          <div className="text-5xl font-mono leading-snug">
            I help you book more clients <br /> and standout from the <br />{" "}
            competition with a{" "}
            <h1 className="flex gap-x-5">
              <p className="underline underline-thickness underline-offset-[0.8rem]">
                cost-effective
              </p>{" "}
              website
            </h1>
          </div>
          <p className="text-[28px] font-light">
            If you already have a website, book a FREE 30 call to get clear
            steps on improving its performance now!
          </p>
          <button
            className="flex gap-x-5 items-center text-2xl font-medium group uppercase w-fit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Book a free call{" "}
            <div className="size-16 rounded-full bg-transparent border-dashed group-hover:bg-white border group-hover:scale-125 transition-all duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
