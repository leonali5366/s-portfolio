import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React from "react";
import pixel from "../app/images/test.png";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  useGSAP(() => {
    gsap.from("#box-1", {
      x: -700,
      duration: 0.9,
      opacity: 0,
      scrollTrigger: {
        trigger: "#box-1",
        start: "top bottom",
        end: "top center",
        scrub: 0.6,
      },
    });
    gsap.from("#box-2", {
      x: 700,
      duration: 0.9,
      opacity: 0,
      scrollTrigger: {
        trigger: "#box-2",
        start: "top bottom",
        end: "top center",
        scrub: 0.6,
      },
    });
    gsap.from("#box-3", {
      x: -700,
      duration: 0.9,
      opacity: 0,
      scrollTrigger: {
        trigger: "#box-3",
        start: "top bottom",
        end: "top center",
        scrub: 0.6,
      },
    });
    gsap.from("#box-4", {
      x: 700,
      duration: 0.9,
      opacity: 0,
      scrollTrigger: {
        trigger: "#box-4",
        start: "top bottom",
        end: "top center",
        scrub: 0.6,
      },
    });
    gsap.from("#box-5", {
      x: -700,
      duration: 0.9,
      opacity: 0,
      scrollTrigger: {
        trigger: "#box-5",
        start: "top bottom",
        end: "top center",
        scrub: 0.6,
      },
    });
    gsap.from("#box-6", {
      x: 700,
      duration: 0.9,
      opacity: 0,
      scrollTrigger: {
        trigger: "#box-6",
        start: "top bottom",
        end: "top center",
        scrub: 0.6,
      },
    });
  }, []);
  return (
    <div className="bg-[#121212] pb-32 overflow-hidden">
      <div className="max-w-[1450px] mx-auto flex items-center justify-center">
        <div className="grid grid-cols-2 gap-10">
          <div
            className="size-[400px] overflow-hidden group relative"
            id="box-1"
          >
            <Image
              src={pixel}
              alt=""
              className="w-full h-auto group-hover:-translate-y-1/2 transition-transform duration-1000"
            />
            <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:opacity-50 opacity-0 group-hover:backdrop-blur transition-all duration-500 flex items-center justify-center">
              <button className="size-16 rounded-full bg-white flex items-center justify-center backdrop-blur">
                <GoArrowUpRight size={32} className="text-black" />
              </button>
            </div>
          </div>
          <div className="size-[400px] border" id="box-2"></div>
          <div className="size-[400px] border" id="box-3"></div>
          <div className="size-[400px] border" id="box-4"></div>
          <div className="size-[400px] border" id="box-5"></div>
          <div className="size-[400px] border" id="box-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
