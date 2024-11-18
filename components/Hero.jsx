"use client";
import Image from "next/image";
import nature from "../app/images/nature.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import Magnet from "./Magnet";
import { GoArrowRight } from "react-icons/go";

export default function Hero({ setIsHovered }) {
  return (
    <div className="w-full h-screen bg-[#121212]">
      <div className="max-w-[1550px] mx-auto h-full flex items-center">
        <div className="w-full h-full">
          <img
            src="https://cdn.prod.website-files.com/66277b11e48ec235af18f9cc/66277b11e48ec235af18faa4_Vlad-Tro-smiling.webp"
            alt=""
            className="w-fit h-fit object-cover"
          />
        </div>
        <div className="w-full flex flex-col gap-y-10">
          <div className="text-6xl font-mono leading-snug">
            I help you book more clients and standout from the competition with
            a{" "}
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
