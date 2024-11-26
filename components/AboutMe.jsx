import Image from "next/image";
import React from "react";
import img from "../app/images/img2.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useGSAP(() => {
    gsap.from("#textH-1", {
      y: 40,
      duration: 0.8,
      opacity: 0,
      scrollTrigger: "#trigger-1",
    });
    gsap.from("#textH-2", {
      y: 40,
      duration: 0.8,
      opacity: 0,
      scrollTrigger: "#trigger-2",
    });
    gsap.from("#textH-3", {
      y: 40,
      duration: 0.8,
      opacity: 0,
      scrollTrigger: "#trigger-3",
    });
    gsap.from("#textH-4", {
      y: 40,
      duration: 0.8,
      opacity: 0,
      scrollTrigger: "#trigger-4",
    });
    gsap.from("#textD-1", {
      y: 10,
      duration: 0.8,
      delay: 0.5,
      opacity: 0,
      scrollTrigger: "#trigger-1",
    });
    gsap.from("#textD-2", {
      y: 10,
      duration: 0.8,
      delay: 0.5,
      opacity: 0,
      scrollTrigger: "#trigger-2",
    });
    gsap.from("#textD-3", {
      y: 10,
      duration: 0.8,
      delay: 0.5,
      opacity: 0,
      scrollTrigger: "#trigger-3",
    });
    gsap.from("#textD-4", {
      y: 10,
      duration: 0.8,
      delay: 0.5,
      opacity: 0,
      scrollTrigger: "#trigger-4",
    });
    gsap.to("#line-1", {
      x: "100%",
      duration: 2,
      delay: 1,
      scrollTrigger: "#trigger-1",
    });
    gsap.to("#line-2", {
      x: "100%",
      duration: 2,
      delay: 1,
      scrollTrigger: "#trigger-2",
    });
    gsap.to("#line-3", {
      x: "100%",
      duration: 2,
      delay: 1,
      scrollTrigger: "#trigger-3",
    });
    gsap.to("#line-4", {
      x: "100%",
      duration: 2,
      delay: 1,
      scrollTrigger: "#trigger-4",
    });
    gsap.to("#image-wrappper", {
      y: "-100%",
      duration: 1,
      scrollTrigger: "#img-trg",
    });
  }, []);
  return (
    <div className="bg-[#121212] pb-[150px]">
      <div className="max-w-[1400px] mx-auto space-y-20">
        <h1 className="text-[84px] font-mono">What makes us different</h1>
        <div className="flex justify-between gap-x-20">
          <div
            className="w-full h-full overflow-hidden relative"
            id="img-trg"
          >
            <Image src={img} alt="" className="" />
            <div
              className="absolute top-0 left-0 w-full h-1/2 bg-[#121212]"
              id="image-wrappper"
            />
          </div>
          <div className="flex flex-col justify-center gap-y-16">
            <div className="flex flex-col" id="trigger-1">
              <span className="text-white opacity-50 uppercase text-[16px] tracking-widest">
                One
              </span>
              <div className="flex flex-col gap-y-7">
                <div className="overflow-hidden">
                  <header className="text-4xl font-mono" id="textH-1">
                    Affordable Price
                  </header>
                </div>
                <description className="text-2xl font-light" id="textD-1">
                  At a price that fits your budget, I provide high quality web
                  design services. My vision is to deliver world class
                  experience without sacrificing design or results.
                </description>
                <line className="w-full h-[3px] bg-white relative overflow-hidden">
                  <div
                    className="absolute top-0 right-0 h-full w-full bg-[#121212]"
                    id="line-1"
                  />
                </line>
              </div>
            </div>
            <div className="flex flex-col" id="trigger-2">
              <span className="text-white opacity-50 uppercase text-[16px] tracking-widest">
                two
              </span>
              <div className="flex flex-col gap-y-7">
                <div className="overflow-hidden">
                  <header className="text-4xl font-mono" id="textH-2">
                    Premier Experience (7 Years)
                  </header>
                </div>
                <description className="text-2xl font-light" id="textD-2">
                  I have over 7 years of experience and can combine expertise,
                  creativity and industry knowledge on every project. We know
                  your website will not only look great, but it will do the real
                  business thing too.
                </description>
                <line className="w-full h-[3px] bg-white relative overflow-hidden">
                  <div
                    className="absolute top-0 right-0 h-full w-full bg-[#121212]"
                    id="line-2"
                  />
                </line>
              </div>
            </div>
            <div className="flex flex-col" id="trigger-3">
              <span className="text-white opacity-50 uppercase text-[16px] tracking-widest">
                three
              </span>
              <div className="flex flex-col gap-y-7">
                <div className="overflow-hidden">
                  <header className="text-4xl font-mono" id="textH-3">
                    Honesty You Can Trust
                  </header>
                </div>
                <description className="text-2xl font-light" id="textD-2">
                  My work is based on transparency and trust. Throughout the
                  process, I tell you how it’s going to be, with no surprises,
                  no hidden costs.
                </description>
                <line className="w-full h-[3px] bg-white relative overflow-hidden">
                  <div
                    className="absolute top-0 right-0 h-full w-full bg-[#121212]"
                    id="line-3"
                  />
                </line>
              </div>
            </div>
            <div className="flex flex-col" id="trigger-4">
              <span className="text-white opacity-50 uppercase text-[16px] tracking-widest">
                four
              </span>
              <div className="flex flex-col gap-y-7">
                <div className="overflow-hidden">
                  <header className="text-4xl font-mono" id="textH-4">
                    On-Time Delivery & Support
                  </header>
                </div>
                <description className="text-2xl font-light" id="textD-2">
                  I am conscious of deadlines. timely delivery and reliable
                  support on the website after we completed the project.
                </description>
                <line className="w-full h-[3px] bg-white relative overflow-hidden">
                  <div
                    className="absolute top-0 right-0 h-full w-full bg-[#121212]"
                    id="line-4"
                  />
                </line>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
