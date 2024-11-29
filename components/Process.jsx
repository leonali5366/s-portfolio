'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const [number, setNumber] = useState("01");
  const sec1 = useRef();
  const sec2 = useRef();
  const sec3 = useRef();
  const sec4 = useRef();
  useGSAP(() => {
    const tween1 = gsap.fromTo(sec1.current, { opacity: 1 }, { opacity: 0.5 });
    const tween2 = gsap.fromTo(sec2.current, { opacity: 1 }, { opacity: 0.5 });
    const tween3 = gsap.fromTo(sec3.current, { opacity: 1 }, { opacity: 0.5 });
    const tween4 = gsap.fromTo(sec4.current, { opacity: 1 }, { opacity: 0.5 });

    ScrollTrigger.create({
      trigger: sec1.current,
      start: "top 70%",
      end: "bottom center",
      animation: tween1,
      scrub: 1,
      onEnter: () => setNumber("01"),
      onEnterBack: () => setNumber("01"),
    });
    ScrollTrigger.create({
      trigger: sec2.current,
      start: "top 70%",
      end: "bottom center",
      animation: tween2,
      scrub: 1,
      onEnter: () => setNumber("02"),
      onEnterBack: () => setNumber("02"),
    });
    ScrollTrigger.create({
      trigger: sec3.current,
      start: "top 70%",
      end: "bottom center",
      animation: tween3,
      scrub: 1,
      onEnter: () => setNumber("03"),
      onEnterBack: () => setNumber("03"),
    });
    ScrollTrigger.create({
      trigger: sec4.current,
      start: "top 70%",
      end: "bottom center",
      animation: tween4,
      scrub: 1,
      onEnter: () => setNumber("04"),
      onEnterBack: () => setNumber("04"),
    });
  }, []);
  return (
    <div className="bg-[#121212] pb-32 sm:block hidden text-white">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col gap-y-20">
        <h5 className="text-[84px] font-mono">My web design process</h5>
        <div className="flex w-full relative">
          <div className="w-[50%] sticky top-[60%] h-fit">
            <h1 className="text-[180px] text-white font-mono">{number}</h1>
          </div>
          <div className="w-full flex flex-col gap-y-24">
            <div className="flex flex-col gap-y-10 opacity-50" ref={sec1}>
              <div className="w-full h-[3px] bg-white" />
              <div className="flex justify-between">
                <h1 className="text-[50px] font-mono text-nowrap leading-9 w-full min-w-[300px]">
                  Setting goals
                </h1>
                <p className="text-[24px] ml-20">
                  First, (15 mins) we have a conversation about your goals for
                  the business, who your audiences are and what you’re looking
                  to achieve. With clear goals, your website is aligned with
                  your brand and delivers. It’s a step that establishes the
                  basis for a growth strategy focused on users and the
                  competitiveness within your industry.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-10 opacity-50" ref={sec2}>
              <div className="w-full h-[3px] bg-white" />
              <div className="flex justify-between">
                <h1 className="text-[50px] font-mono text-nowrap leading-9 w-full min-w-[300px]">
                  Visual design
                </h1>
                <p className="text-[24px] ml-20">
                  Expert designers at Gloriousenthemes take care of visually
                  stunning layouts as per your brand identity. We build your
                  website with focus on aesthetics and user experience,
                  designing your website that will make your audience
                  captivated, improve navigation, and present your website
                  professionally on any device.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-10 opacity-50" ref={sec3}>
              <div className="w-full h-[3px] bg-white" />
              <div className="flex justify-between">
                <h1 className="text-[50px] font-mono text-nowrap leading-9 w-full min-w-[300px]">
                  Development
                </h1>
                <p className="text-[24px] ml-20">
                  Using what is available now, we bring the designs to life with
                  a fully responsive and working website. Our objective is to
                  deliver your site with speed, top performance, and effortless
                  integration of features to help you gain conversions and
                  guarantee longevity.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-10 opacity-50" ref={sec4}>
              <div className="w-full h-[3px] bg-white" />
              <div className="flex justify-between">
                <h1 className="text-[50px] font-mono text-nowrap leading-9 w-full min-w-[300px]">
                  Launch
                </h1>
                <p className="text-[24px] ml-20">
                  Our testing for quality & functionality is rigorous, and we
                  launch your website with precision. We’ll get the ball
                  rolling, ensure it all runs smoothly, and get your site out
                  there, saving to make an impact. We offer post launch support
                  to help keep your site up to date and healthy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
