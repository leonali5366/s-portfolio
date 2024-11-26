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
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ setIsHovered }) {
  useGSAP(() => {
    gsap.to("#hero-img", {
      scale: 1,
      duration: 1,
      opacity: 1,
      scrollTrigger: "#hero-img",
    });
  }, []);
  return (
    <div className="w-full sm:h-screen bg-[#121212] overflow-hidden py-10">
      <div className="max-w-[1550px] mx-auto h-full flex sm:flex-row flex-col items-center justify-center relative">
        <div className="w-full h-full relative overflow-hidden">
          <Image
            src={profile}
            alt=""
            id="hero-img"
            className="scale-150 opacity-0"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/4 bg-gradient-to-t from-[#121212] opacity-100"></div>
        </div>
        <div className="w-full h-full flex flex-col justify-center gap-y-10">
          <div className="sm:text-5xl text-3xl sm:text-left text-center sm:px-0 px-5 font-mono leading-snug capitalize text-pretty">
            Get High-End Custom Websites or Online Shops without Breaking the
            Bank.
          </div>
          <p className="sm:text-[28px] text-xl sm:px-0 px-5 sm:text-left text-center font-light">
            Unleash your brand’s potential with 100% custom-built websites,
            offering speed and seamless performance across all desktop, tablet,
            and mobile platforms.
          </p>
          <Magnet>
            <div
              className="flex items-center gap-x-5 group mt-10"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)", // Center the content inside the element
                transition: "transform 0.3s ease-out",
              }}
            >
              <button
                className="flex gap-x-5 items-center text-2xl font-medium group uppercase w-fit text-nowrap"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Book a free call
              </button>
              <button className="size-14 rounded-full bg-transparent border-dashed group-hover:bg-white border-2 group-hover:scale-[1.2] transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                <FiArrowRight
                  size={24}
                  className="group-hover:text-black absolute text-4xl transition-all transform duration-300 ease-out opacity-100 group-hover:translate-y-[-50px] group-hover:opacity-0"
                />
                <FiArrowRight
                  size={24}
                  className="group-hover:text-black absolute text-4xl translate-y-12 opacity-0 transition-all transform duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                />
              </button>
            </div>
          </Magnet>
        </div>
      </div>
    </div>
  );
}
