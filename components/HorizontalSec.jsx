import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import nature1 from "../app/images/nature1.jpg";
import nature2 from "../app/images/nature2.jpg";
import nature3 from "../app/images/nature3.jpg";
import nature4 from "../app/images/nature4.jpg";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalSec() {
  const triggerRef = useRef();
  const sectionRef = useRef();

  function getScrollAmount() {
    let divWidth = sectionRef.current.scrollWidth;
    return -(divWidth - window.innerWidth);
  }

  useGSAP(() => {
    const tween = gsap.to(sectionRef.current, {
      translateX: getScrollAmount,
      duration: 1,
      ease: "none",
    });
    ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
    });
  }, []);
  return (
    <div ref={triggerRef} className="overflow-hidden bg-[#121212]">
      <div
        ref={sectionRef}
        className="w-[200vw] h-screen flex gap-x-10 p-10 items-center"
      >
        <div className="w-[900px] h-auto relative">
          <Image
            src={nature1}
            alt=""
            width="100%"
            height="100%"
            className="rounded-xl"
          />
          <h1 className="absolute bottom-7 left-5 text-lg">Nature Beauty</h1>
          <h1 className="absolute bottom-2 left-5 text-sm">Healthy Food</h1>
          <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 group">
            <div className="size-20 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <IoMdArrowForward size={28} className="text-gray-600 -rotate-45"/>
            </div>
          </div>
        </div>
        <div className="w-[900px] h-auto relative">
          <Image
            src={nature2}
            alt=""
            width="100%"
            height="100%"
            className="rounded-xl"
          />
          <h1 className="absolute bottom-7 left-5 text-lg">Nature Beauty</h1>
          <h1 className="absolute bottom-2 left-5 text-sm">Healthy Food</h1>
          <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 group">
            <div className="size-20 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <IoMdArrowForward size={28} className="text-gray-600 -rotate-45"/>
            </div>
          </div>
        </div>
        <div className="w-[900px] h-auto relative">
          <Image
            src={nature3}
            alt=""
            width="100%"
            height="100%"
            className="rounded-xl"
          />
          <h1 className="absolute bottom-7 left-5 text-lg">Nature Beauty</h1>
          <h1 className="absolute bottom-2 left-5 text-sm">Healthy Food</h1>
          <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 group">
            <div className="size-20 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <IoMdArrowForward size={28} className="text-gray-600 -rotate-45"/>
            </div>
          </div>
        </div>
        <div className="w-[900px] h-auto relative">
          <Image
            src={nature4}
            alt=""
            width="100%"
            height="100%"
            className="rounded-xl"
          />
          <h1 className="absolute bottom-7 left-5 text-lg">Nature Beauty</h1>
          <h1 className="absolute bottom-2 left-5 text-sm">Healthy Food</h1>
          <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 group">
            <div className="size-20 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <IoMdArrowForward size={28} className="text-gray-600 -rotate-45"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
