import React from "react";
import OpacityComponent from "./OpacityComponent";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProcessRes = () => {
  useGSAP(() => {
    // sec 1
    gsap.to("#line-p-1", {
      x: "100%",
      duration: 2,
      delay: 1,
      scrollTrigger: "#reveal-trg-1",
    });
    gsap.from("#text-p-reveal-1", {
      y: 100,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: "#reveal-trg-1",
    });
    gsap.from("#text-p-reveal-2", {
      y: 100,
      duration: 0.5,
      opacity: 0,
      delay: 0.3,
      scrollTrigger: "#reveal-trg-1",
    });
    gsap.from("#text-p-reveal-3", {
      y: 50,
      duration: 0.5,
      opacity: 0,
      delay: 0.6,
      scrollTrigger: "#reveal-trg-1",
    });
    // sec 1
    // sec 2
    gsap.to("#line-p-2", {
      x: "100%",
      duration: 2,
      delay: 1,
      scrollTrigger: "#reveal-trg-2",
    });
    gsap.from("#text-p-reveal-4", {
      y: 100,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: "#reveal-trg-2",
    });
    gsap.from("#text-p-reveal-5", {
      y: 100,
      duration: 0.5,
      opacity: 0,
      delay: 0.3,
      scrollTrigger: "#reveal-trg-2",
    });
    gsap.from("#text-p-reveal-6", {
      y: 50,
      duration: 0.5,
      opacity: 0,
      delay: 0.6,
      scrollTrigger: "#reveal-trg-2",
    });
    // sec 2
    // sec 3
    gsap.to("#line-p-3", {
      x: "100%",
      duration: 2,
      delay: 1,
      scrollTrigger: "#reveal-trg-3",
    });
    gsap.from("#text-p-reveal-7", {
      y: 100,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: "#reveal-trg-3",
    });
    gsap.from("#text-p-reveal-8", {
      y: 100,
      duration: 0.5,
      opacity: 0,
      delay: 0.3,
      scrollTrigger: "#reveal-trg-3",
    });
    gsap.from("#text-p-reveal-9", {
      y: 50,
      duration: 0.5,
      opacity: 0,
      delay: 0.6,
      scrollTrigger: "#reveal-trg-3",
    });
    // sec 3
    // sec 4
    gsap.to("#line-p-4", {
      x: "100%",
      duration: 2,
      delay: 1,
      scrollTrigger: "#reveal-trg-4",
    });
    gsap.from("#text-p-reveal-10", {
      y: 100,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: "#reveal-trg-4",
    });
    gsap.from("#text-p-reveal-11", {
      y: 100,
      duration: 0.5,
      opacity: 0,
      delay: 0.3,
      scrollTrigger: "#reveal-trg-4",
    });
    gsap.from("#text-p-reveal-12", {
      y: 50,
      duration: 0.5,
      opacity: 0,
      delay: 0.6,
      scrollTrigger: "#reveal-trg-4",
    });
    // sec 4
  }, []);

  return (
    <div className="bg-[#121212] sm:hidden px-5 flex flex-col gap-y-10 pb-32">
      <h1 className="text-4xl font-mono">My web design process</h1>
      <OpacityComponent>
        <div className="flex flex-col gap-y-5" id="reveal-trg-1">
          <div className="flex items-center justify-between gap-x-12">
            <div className="overflow-hidden min-w-fit">
              <h1 className="text-7xl font-mono" id="text-p-reveal-1">
                01
              </h1>
            </div>
            <div className="w-full flex flex-col gap-y-3">
              <line className="w-full h-[3px] bg-white relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 h-full w-full bg-[#121212]"
                  id="line-p-1"
                />
              </line>
              <div className="overflow-hidden">
                <h1 className="text-3xl font-mono" id="text-p-reveal-2">
                  Setting goals
                </h1>
              </div>
            </div>
          </div>
          <p className="text-xl text-pretty" id="text-p-reveal-3">
            First, (15 mins) we have a conversation about your goals for the
            business, who your audiences are and what you’re looking to achieve.
            With clear goals, your website is aligned with your brand and
            delivers. It’s a step that establishes the basis for a growth
            strategy focused on users and the competitiveness within your
            industry.
          </p>
        </div>
      </OpacityComponent>
      <OpacityComponent>
        <div className="flex flex-col gap-y-5" id="reveal-trg-2">
          <div className="flex items-center justify-between gap-x-12">
            <div className="overflow-hidden min-w-fit">
              <h1 className="text-7xl font-mono" id="text-p-reveal-4">
                02
              </h1>
            </div>
            <div className="w-full flex flex-col gap-y-3">
              <line className="w-full h-[3px] bg-white relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 h-full w-full bg-[#121212]"
                  id="line-p-2"
                />
              </line>
              <div className="overflow-hidden">
                <h1 className="text-3xl font-mono" id="text-p-reveal-5">
                  Visual design
                </h1>
              </div>
            </div>
          </div>
          <p className="text-xl text-pretty" id="text-p-reveal-6">
            Expert designers at Gloriousenthemes take care of visually stunning
            layouts as per your brand identity. We build your website with focus
            on aesthetics and user experience, designing your website that will
            make your audience captivated, improve navigation, and present your
            website professionally on any device.
          </p>
        </div>
      </OpacityComponent>

      <OpacityComponent>
        <div className="flex flex-col gap-y-5" id="reveal-trg-3">
          <div className="flex items-center justify-between gap-x-12">
            <div className="overflow-hidden min-w-fit">
              <h1 className="text-7xl font-mono" id="text-p-reveal-7">
                03
              </h1>
            </div>
            <div className="w-full flex flex-col gap-y-3">
              <line className="w-full h-[3px] bg-white relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 h-full w-full bg-[#121212]"
                  id="line-p-3"
                />
              </line>
              <div className="overflow-hidden">
                <h1 className="text-3xl font-mono" id="text-p-reveal-8">
                  Development
                </h1>
              </div>
            </div>
          </div>
          <p className="text-xl text-pretty" id="text-p-reveal-9">
            Using what is available now, we bring the designs to life with a
            fully responsive and working website. Our objective is to deliver
            your site with speed, top performance, and effortless integration of
            features to help you gain conversions and guarantee longevity.
          </p>
        </div>
      </OpacityComponent>
      <OpacityComponent>
        <div className="flex flex-col gap-y-5" id="reveal-trg-4">
          <div className="flex items-center justify-between gap-x-12">
            <div className="overflow-hidden min-w-fit">
              <h1 className="text-7xl font-mono" id="text-p-reveal-10">
                04
              </h1>
            </div>
            <div className="w-full flex flex-col gap-y-3">
              <line className="w-full h-[3px] bg-white relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 h-full w-full bg-[#121212]"
                  id="line-p-4"
                />
              </line>
              <div className="overflow-hidden">
                <h1 className="text-3xl font-mono" id="text-p-reveal-11">
                  Launch
                </h1>
              </div>
            </div>
          </div>
          <p className="text-xl text-pretty" id="text-p-reveal-12">
            Our testing for quality & functionality is rigorous, and we launch
            your website with precision. We’ll get the ball rolling, ensure it
            all runs smoothly, and get your site out there, saving to make an
            impact. We offer post launch support to help keep your site up to
            date and healthy.
          </p>
        </div>
      </OpacityComponent>
    </div>
  );
};

export default ProcessRes;
