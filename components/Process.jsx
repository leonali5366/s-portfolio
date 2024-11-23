import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const [number, setNumber] = useState(1);
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
    <div className="bg-[#121212] pb-32">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col gap-y-20">
        <h5 className="text-[84px] font-mono">My web design process</h5>
        <div className="flex w-full relative">
          <div className="w-[95%] sticky top-[60%] h-fit">
            <h1 className="text-[180px] text-white font-mono">{number}</h1>
          </div>
          <div className="flex flex-col gap-y-24 pb-32">
            <div className="flex flex-col gap-y-10 opacity-50" ref={sec1}>
              <div className="w-full h-[3px] bg-white" />
              <div className="flex gap-x-20">
                <h1 className="text-[50px] font-mono text-nowrap leading-9 w-full min-w-[320px]">
                  Setting goals
                </h1>
                <p className="text-[24px] ml-20">
                  I start by asking you questions to get to know your company,
                  your pain points, and your audience. We discuss the main goals
                  for the website and then I create a sketch.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-10 opacity-50" ref={sec2}>
              <div className="w-full h-[3px] bg-white" />
              <div className="flex gap-x-20">
                <h1 className="text-[50px] font-mono text-nowrap leading-9 w-full min-w-[320px]">
                  Visual design
                </h1>
                <p className="text-[24px] ml-20">
                  I choose colors, fonts, and styles for your website. I design
                  it with your audience in mind to ensure it effectively
                  represents your brand and fulfills your requirements. I&apos;m
                  always updating you throughout the process.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-10 opacity-50" ref={sec3}>
              <div className="w-full h-[3px] bg-white" />
              <div className="flex gap-x-20">
                <h1 className="text-[50px] font-mono text-nowrap leading-9 w-full min-w-[320px]">
                  Development
                </h1>
                <p className="text-[24px] ml-20">
                  When you&apos;re happy with the design, I&apos;ll start
                  bringing it to life. I make sure everything works smoothly on
                  all devices. Also, I make sure it loads quickly, is secure,
                  and is SEO friendly.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-10 opacity-50" ref={sec4}>
              <div className="w-full h-[3px] bg-white" />
              <div className="flex gap-x-20">
                <h1 className="text-[50px] font-mono text-nowrap leading-9 w-full min-w-[320px]">
                  Launch
                </h1>
                <p className="text-[24px] ml-20">
                  After I double-checked everything, the website is ready to
                  launch. I walk you through your new website and teach you how
                  to add content by yourself. We are going live and starting to
                  tell your audience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
