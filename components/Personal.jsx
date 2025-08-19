"use client";
import Image from "next/image";
import React from "react";

import img3 from "../app/images/img3.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Personal = ({ aboutMe, setIsHovered }) => {
  useGSAP(() => {
    gsap.from("#text", {
      y: 100,
      duration: 0.7,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#text",
        start: "bottom bottom",
      },
    });
    gsap.from("#line", { y: -500, duration: 2, delay: 0.2 });
    gsap.from("#percentage", {
      y: 20,
      delay: 1,
      duration: 0.6,
      opacity: 0,
      scrollTrigger: "#percentage",
    });
    gsap.from("#text-3", { y: 70, duration: 0.3, scrollTrigger: "#text-3" });
    gsap.from("#text-4", {
      y: 70,
      duration: 0.3,
      delay: 0.2,
      scrollTrigger: "#text-4",
    });
    gsap.from("#text-5", {
      y: 60,
      duration: 0.3,
      delay: 0.4,
      opacity: 0,
      scrollTrigger: "#text-5",
    });
    gsap.from("#text-6", {
      y: 60,
      duration: 0.3,
      delay: 0.4,
      opacity: 0,
      scrollTrigger: "#text-6",
    });
    gsap.to("#image-wrappper-1", {
      y: "-100%",
      duration: 1,
      opacity: 1,
      scrollTrigger: "#img-trg-1",
    });
    gsap.to("#image-wrapper-1-o", {
      duration: 1,
      opacity: 1,
      scrollTrigger: "#img-trg-1",
    });
    gsap.from("#reveal-trg", {
      y: 40,
      duration: 0.4,
      opacity: 0,
      scrollTrigger: "#reveal-trg",
    });
  }, []);
  return (
    <div
      className="w-full xl:py-36 bg-[#121212] sm:px-0 px-5 text-white"
      ref={aboutMe}
    >
      <div className="max-w-[1600px] mx-auto flex lg:flex-row flex-col-reverse sm:justify-between lg:gap-x-20 gap-y-10">
        <div className="w-full flex flex-col sm:gap-y-10 gap-5">
          <div className="flex flex-col sm:gap-y-3">
            <div className="overflow-hidden">
              <h6 className="sm:text-5xl text-xl font-mono" id="text-3">
                <small>Hi! I&apos;m</small> Shohanur Reza Shuvo —{" "}
                <small>your</small>
              </h6>
            </div>
            <div className="overflow-hidden">
              <h1 className="sm:text-5xl text-xl font-mono py-2" id="text-4">
                Website Designer - <small>Owner</small>
              </h1>
            </div>
            <div
              className="opacity-90 sm:text-2xl font-light text-lg max-sm:mt-3"
              id="reveal-trg"
            >
              <p id="text-reveal">Some guidance is offered personally</p>
              <p id="text-reveal">Customer oriented, result oriented</p>
              <p id="text-reveal">
                Over 7 Years of experience in web design field
              </p>
              <p id="text-reveal">A young and dynamic company</p>
              <p id="text-reveal">Good accessibility</p>
            </div>
          </div>
          <div className="flex flex-col sm:gap-y-10 gap-y-3">
            <p
              className="sm:text-[26px] text-lg font-light text-slate-300"
              id="text-5"
            >
              Your success is always my priority and success. That’s why I avoid
              one-size-fits-all solutions and focus on a personalized approach
              to meet your unique goals. I design professional, responsive
              websites tailored to help your business stand out online. With
              ongoing support, I’ll ensure your online presence works to grow
              your brand, attract customers, and increase revenue.
            </p>
            <p
              className="sm:text-[26px] text-lg font-light text-slate-300"
              id="text-6"
            >
              I’m here to support you, whether you require a complete website
              redesign, a brand-new website, or expert guidance on your digital
              strategy to elevate your business. Together, we can bring your
              vision live and take your online presence to the next level. Let’s
              make it happen!
            </p>
          </div>
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="overflow-hidden relative"
          id="img-trg-1"
        >
          <a
            href="https://bit.ly/41AXLZx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/images/ShohanurFiverr.png"}
              width={1200}
              height={1200}
              alt=""
              className="opacity-0"
              id="image-wrapper-1-o"
            />
          </a>
          <div
            className="absolute top-0 left-0 w-full h-1/2 bg-[#121212]"
            id="image-wrappper-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Personal;
