import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Magnet from "./Magnet";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import GoogleCalendarScheduler from "./GoogleCalendarScheduler";

const Footer = ({ setIsHovered }) => {
  const magnetRef = useRef(null);

  useEffect(() => {
    const magnetElement = magnetRef.current;

    // Function to handle mouse move event while the mouse is inside the element
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Get the position of the magnet element
      const magnetRect = magnetElement.getBoundingClientRect();
      const magnetX = magnetRect.left + magnetRect.width / 2;
      const magnetY = magnetRect.top + magnetRect.height / 2;

      // Calculate distance between mouse and magnet center
      const deltaX = mouseX - magnetX;
      const deltaY = mouseY - magnetY;

      // Use GSAP to animate the magnet to the mouse position
      gsap.to(magnetElement, {
        x: deltaX / 4, // Scale the movement
        y: deltaY / 4,
        duration: 0.3, // Smooth animation
        ease: "power2.out", // Easing for smoothness
        scale: 1.1, // Slightly scale up the element for magnet effect
      });
    };

    // Function to handle mouse enter event to start the effect
    const handleMouseEnter = () => {
      window.addEventListener("mousemove", handleMouseMove);
    };

    // Function to handle mouse leave event to stop the effect
    const handleMouseLeave = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.to(magnetElement, {
        x: 0,
        y: 0,
        scale: 1, // Reset the scale
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Add event listeners for mouse enter and mouse leave
    magnetElement.addEventListener("mouseenter", handleMouseEnter);
    magnetElement.addEventListener("mouseleave", handleMouseLeave);

    // Clean up event listeners on component unmount
    return () => {
      magnetElement.removeEventListener("mouseenter", handleMouseEnter);
      magnetElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div className="bg-[#F5F5F5] text-black pt-20 flex flex-col sm:gap-y-20 gap-y-10 overflow-hidden sm:px-10 px-5">
      <h1 className="text-center sm:text-7xl font-mono text-4xl text-pretty">
        Let&apos;s create a custom website that works <br /> for your business &
        increase your sales.
      </h1>
      <p className="text-center sm:text-3xl text-xl">
        Book a free 30-minute strategy call and we’ll <br /> figure out your
        next best move, together
      </p>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-y-5">
        <GoogleCalendarScheduler>
          <div className="flex items-center gap-x-3 justify-center sm:hidden">
            <button className="text-lg uppercase font-semibold">
              book a free call
            </button>
            <button className="size-12 rounded-full bg-black flex items-center justify-center">
              <BsArrowUpRight className="text-white text-[22px] rotate-45" />
            </button>
          </div>
        </GoogleCalendarScheduler>
        <div ref={magnetRef} className="w-[400px] relative sm:block hidden">
          <GoogleCalendarScheduler>
            <div
              className="flex items-center gap-x-5 group"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)", // Center the content inside the element
                transition: "transform 0.3s ease-out",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="flex gap-x-5 items-center text-2xl font-medium group uppercase w-fit text-nowrap">
                Book a free call
              </button>
              <button className="size-14 rounded-full bg-transparent border-dashed group-hover:bg-black border-black border-2 group-hover:scale-[1.2] transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                <FiArrowRight
                  size={24}
                  className="group-hover:text-white absolute text-4xl transition-all transform duration-300 ease-out opacity-100 group-hover:translate-y-[-50px] group-hover:opacity-0"
                />
                <FiArrowRight
                  size={24}
                  className="group-hover:text-white absolute text-4xl translate-y-12 opacity-0 transition-all transform duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                />
              </button>
            </div>
          </GoogleCalendarScheduler>
        </div>
        <button
          className="underline text-lg font-semibold uppercase underline-offset-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          or sent me an email
        </button>
      </div>
      <div className="flex flex-col gap-y-5 mb-5">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">Veelman</h1>
          <div className="flex items-center gap-x-3">
            <Magnet>
              <a
                href="https://www.linkedin.com/in/shohanur-reza-shuvo/"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Adds security when opening links in new tabs
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <FaLinkedinIn className="text-3xl" />
              </a>
            </Magnet>
            <Magnet>
              <a
                href="mailto:shohanurrezashuvo20@gmail.com"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <MdAlternateEmail className="text-3xl" />
              </a>
            </Magnet>
            <Magnet>
              <a
                href="https://wa.me/+8801714-461547"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Adds security when opening links in new tabs
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <FaWhatsapp className="text-3xl" />
              </a>
            </Magnet>
            <Magnet>
              <a
                href="https://www.pixelwebmakers.com"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Adds security when opening links in new tabs
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <CiGlobe className="text-3xl" />
              </a>
            </Magnet>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black"></div>
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <p className="sm:text-base text-sm">
            ©2024 All Rights Reserved. Licenses
          </p>
          <p className="sm:text-base text-sm">
            Powered by Webflow, designed by Vlad Tro
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
