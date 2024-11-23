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
    gsap.to("#image-wrappper", {
      y: "-100%",
      duration: 1,
      scrollTrigger: "#img-trg",
    });
  }, []);
  return (
    <div className="bg-[#121212] pb-[150px]">
      <div className="max-w-[1400px] mx-auto space-y-20">
        <h1 className="text-[84px] font-mono">What makes me different</h1>
        <div className="flex gap-x-10">
          <div
            className="w-full h-[97vh] overflow-hidden relative"
            id="img-trg"
          >
            <Image src={img} alt="" className="w-full h-full" />
            <div
              className="absolute top-0 left-0 w-full h-1/2 bg-[#121212]"
              id="image-wrappper"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col" id="trigger-1">
              <span className="text-white opacity-50 uppercase text-[16px] tracking-widest">
                One
              </span>
              <div className="flex flex-col gap-y-7">
                <div className="overflow-hidden">
                  <header className="text-5xl font-mono" id="textH-1">
                    Reasonable price
                  </header>
                </div>
                <description className="text-2xl font-light" id="textD-1">
                  Great web design shouldn&apos;t be a luxury. I build websites
                  that meet your budget and have no hidden fees.
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
                  <header className="text-5xl font-mono" id="textH-2">
                    Premier experience
                  </header>
                </div>
                <description className="text-2xl font-light" id="textD-2">
                  I pay attention to every single detail to give you the finest
                  website experience you’ve ever had. So you can be certain that
                  your website is in good hands.
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
                  <header className="text-5xl font-mono" id="textH-3">
                    Speed
                  </header>
                </div>
                <description className="text-2xl font-light" id="textD-2">
                  Many web design companies take months to create a website. I
                  deliver a fully functional website in just 2-3 weeks.
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
                  <header className="text-5xl font-mono" id="textH-4">
                    Post-project support
                  </header>
                </div>
                <description className="text-2xl font-light" id="textD-2">
                  I never abandon my clients. My fee includes one year of
                  post-project support. So you can always count on me for help.
                </description>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
