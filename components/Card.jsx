import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import web1 from "../app/images/web1.png";
import web2 from "../app/images/web2.png";
import web3 from "../app/images/web3.png";
import web4 from "../app/images/web4.png";
import web5 from "../app/images/web5.png";
import web6 from "../app/images/web6.png";
import web7 from "../app/images/web7.png";
import web8 from "../app/images/web8.png";
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
      <div className="max-w-[1450px] mx-auto flex items-center justify-center sm:px-0 px-5">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div
            className="sm:size-[500px] w-full h-[500px] overflow-hidden group relative rounded-lg"
            id="box-1"
          >
            <Image
              src={web1}
              alt=""
              className="w-full h-auto group-hover:-translate-y-1/2 transition-transform duration-1000"
            />
            <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:opacity-50 opacity-0 group-hover:backdrop-blur transition-all duration-500 flex items-center justify-center">
              <button className="size-16 rounded-full bg-white flex items-center justify-center backdrop-blur">
                <GoArrowUpRight size={32} className="text-black" />
              </button>
            </div>
          </div>
          <div className="sm:size-[500px] w-full h-[500px]" id="box-2">
            <div
              className="sm:size-[500px] w-full h-[500px] overflow-hidden group relative rounded-lg"
              id="box-2"
            >
              <Image
                src={web2}
                alt=""
                className="w-full h-auto group-hover:-translate-y-1/2 transition-transform duration-1000"
              />
              <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:opacity-50 opacity-0 group-hover:backdrop-blur transition-all duration-500 flex items-center justify-center">
                <button className="size-16 rounded-full bg-white flex items-center justify-center backdrop-blur">
                  <GoArrowUpRight size={32} className="text-black" />
                </button>
              </div>
            </div>
          </div>
          <div className="sm:size-[500px] w-full h-[500px]" id="box-3">
            <div
              className="sm:size-[500px] w-full h-[500px] overflow-hidden group relative rounded-lg"
              id="box-1"
            >
              <Image
                src={web3}
                alt=""
                className="w-full h-auto group-hover:-translate-y-1/2 transition-transform duration-1000"
              />
              <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:opacity-50 opacity-0 group-hover:backdrop-blur transition-all duration-500 flex items-center justify-center">
                <button className="size-16 rounded-full bg-white flex items-center justify-center backdrop-blur">
                  <GoArrowUpRight size={32} className="text-black" />
                </button>
              </div>
            </div>
          </div>
          <div className="sm:size-[500px] w-full h-[500px]" id="box-4">
            <div
              className="sm:size-[500px] w-full h-[500px] overflow-hidden group relative rounded-lg"
              id="box-1"
            >
              <Image
                src={web4}
                alt=""
                className="w-full h-auto group-hover:-translate-y-1/2 transition-transform duration-1000"
              />
              <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:opacity-50 opacity-0 group-hover:backdrop-blur transition-all duration-500 flex items-center justify-center">
                <button className="size-16 rounded-full bg-white flex items-center justify-center backdrop-blur">
                  <GoArrowUpRight size={32} className="text-black" />
                </button>
              </div>
            </div>
          </div>
          <div className="sm:size-[500px] w-full h-[500px]" id="box-5">
            <div
              className="sm:size-[500px] w-full h-[500px] overflow-hidden group relative rounded-lg"
              id="box-1"
            >
              <Image
                src={web5}
                alt=""
                className="w-full h-auto group-hover:-translate-y-1/2 transition-transform duration-1000"
              />
              <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:opacity-50 opacity-0 group-hover:backdrop-blur transition-all duration-500 flex items-center justify-center">
                <button className="size-16 rounded-full bg-white flex items-center justify-center backdrop-blur">
                  <GoArrowUpRight size={32} className="text-black" />
                </button>
              </div>
            </div>
          </div>
          <div className="sm:size-[500px] w-full h-[500px]" id="box-6">
            <div
              className="sm:size-[500px] w-full h-[500px] overflow-hidden group relative rounded-lg"
              id="box-1"
            >
              <Image
                src={web6}
                alt=""
                className="w-full h-auto group-hover:-translate-y-1/2 transition-transform duration-1000"
              />
              <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:opacity-50 opacity-0 group-hover:backdrop-blur transition-all duration-500 flex items-center justify-center">
                <button className="size-16 rounded-full bg-white flex items-center justify-center backdrop-blur">
                  <GoArrowUpRight size={32} className="text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
