'use client'
import Image from "next/image";
import React from "react";

import img3 from "../app/images/img3.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Customer = ({ portfolio }) => {
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
    <div className="w-full py-36 bg-[#121212] sm:px-0 px-5 text-white" ref={portfolio}>
      <div className="max-w-[1450px] mx-auto flex sm:flex-row flex-col-reverse sm:justify-between sm:gap-x-20 gap-y-10">
        <div className="w-full flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-3">
            <div className="overflow-hidden">
              <h6
                className="sm:text-5xl text-xl font-mono sm:leading-[5rem]"
                id="text-3"
              >
                <small>Hi! I&apos;m</small> Shohanur Reza Shuvo —{" "}
                <small>your</small>
              </h6>
            </div>
            <div className="overflow-hidden">
              <h1
                className="sm:text-5xl text-xl font-mono sm:leading-[5rem]"
                id="text-4"
              >
                Website Designer - <small>Owner</small>
              </h1>
            </div>
            <div
              className="opacity-90 sm:text-2xl font-light text-lg"
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
          <div className="flex flex-col gap-y-10">
            <p className="sm:text-[28px] font-light text-slate-300" id="text-5">
              It’s your success, my success. That’s why I won’t find a one size
              fits all solution to help your business separate online. I take a
              personalized approach to ensure I understand your goals and can
              deliver a solution that helps your business stand out. Designing
              professional, responsive websites and offering ongoing support,
              you can count on me to help with setting up and working with your
              online presence so it will work to grow your brand, attract
              customers and increase revenue.
            </p>
            <p className="sm:text-[28px] font-light text-slate-300" id="text-6">
              I’m here to help you whether you currently have a website and need
              a redesign, you are in need of a new website altogether, or
              perhaps you just need some guidance on your digital strategy to
              take your business to the next level. Together let’s make it
              happen, let’s turn your vision into reality!
            </p>
          </div>
        </div>
        <div className="overflow-hidden relative" id="img-trg-1">
          <Image
            src={img3}
            alt=""
            className="opacity-0"
            id="image-wrapper-1-o"
          />
          <div
            className="absolute top-0 left-0 w-full h-1/2 bg-[#121212]"
            id="image-wrappper-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Customer;
