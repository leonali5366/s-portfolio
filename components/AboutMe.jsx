import Image from "next/image";
import React from "react";
import img from "../app/images/img2.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = ({ aboutus }) => {
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
    gsap.from("#image-wrappper", {
      translateY: "0%",
      duration: 2,
      delay: 1,
      scrollTrigger: "#img-trg",
    });
    gsap.to("#img", {
      opacity: 1,
      scale: 1,
      duration: 2,
      scrollTrigger: "#img-trg",
    });
  }, []);
  return (
    <div className="bg-[#121212] lg:pb-[150px] px-5 text-white" ref={aboutus}>
      <div className="max-w-[1400px] mx-auto sm:space-y-20 space-y-10">
        <h1 className="xl:text-[84px] md:text-6xl sm:text-5xl text-4xl font-mono">
          What makes us different
        </h1>
        <div className="flex flex-col gap-y-10">
          <div className="w-full h-full overflow-hidden relative" id="img-trg">
            <div className="relative w-full lg:h-[500px] md:h-[400px] sm:h-[350px] h-[300px]">
              <Image
                src={"/images/work.webp"}
                alt=""
                objectFit="cover"
                layout="fill"
                className="rounded-md opacity-0 scale-105"
                id="img"
              />
            </div>
            <div
              className="absolute inset-0 translate-y-full bg-[#121212]"
              id="image-wrappper"
            />
          </div>
          <div className="flex flex-col justify-center gap-y-16">
            <div className="flex flex-col" id="trigger-1">
              <span className="text-white opacity-50 uppercase md:text-[16px] text-sm tracking-widest">
                One
              </span>
              <div className="flex flex-col gap-y-7">
                <div className="overflow-hidden">
                  <header
                    className="md:text-4xl text-3xl font-mono"
                    id="textH-1"
                  >
                    Affordable Price
                  </header>
                </div>
                <description
                  className="md:text-2xl text-xl font-light"
                  id="textD-1"
                >
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
              <span className="text-white opacity-50 uppercase md:text-[16px] text-sm tracking-widest">
                two
              </span>
              <div className="flex flex-col gap-y-7">
                <div className="overflow-hidden">
                  <header
                    className="md:text-4xl text-3xl font-mono"
                    id="textH-2"
                  >
                    Premier Experience (7 Years)
                  </header>
                </div>
                <description
                  className="md:text-2xl text-xl font-light"
                  id="textD-2"
                >
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
              <span className="text-white opacity-50 uppercase md:text-[16px] text-sm tracking-widest">
                three
              </span>
              <div className="flex flex-col gap-y-7">
                <div className="overflow-hidden">
                  <header
                    className="md:text-4xl text-3xl font-mono"
                    id="textH-3"
                  >
                    Honesty You Can Trust
                  </header>
                </div>
                <description
                  className="md:text-2xl text-xl font-light"
                  id="textD-2"
                >
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
              <span className="text-white opacity-50 uppercase md:text-[16px] text-sm tracking-widest">
                four
              </span>
              <div className="flex flex-col gap-y-7">
                <div className="overflow-hidden">
                  <header
                    className="md:text-4xl text-3xl font-mono"
                    id="textH-4"
                  >
                    On-Time Delivery & Support
                  </header>
                </div>
                <description
                  className="md:text-2xl text-xl font-light"
                  id="textD-2"
                >
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

export default AboutUs;
