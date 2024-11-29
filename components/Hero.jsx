"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import profile from "../app/images/profile.jpg";
import { ScrollTrigger } from "gsap/all";
import { FiArrowRight } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";
import GoogleCalendarScheduler from "./GoogleCalendarScheduler";
import { FaSquareWhatsapp } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ setIsHovered }) {
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

  useGSAP(() => {
    gsap.to("#hero-img", {
      scale: 1,
      duration: 1,
      opacity: 1,
      scrollTrigger: "#hero-img",
    });
    gsap.from("#text-reveal-1", {
      y: 40,
      duration: 1,
      opacity: 0,
      scrollTrigger: "#text-reveal-1",
    });
    gsap.from("#text-reveal-2", {
      y: 40,
      duration: 1,
      opacity: 0,
      scrollTrigger: "#text-reveal-2",
    });
    gsap.from("#text-reveal-3", {
      y: 40,
      duration: 1,
      opacity: 0,
      scrollTrigger: "#text-reveal-3",
    });
  }, []);
  return (
    <div className="w-full sm:h-screen bg-[#121212] overflow-hidden py-10 text-white">
      <div className="max-w-[1550px] mx-auto h-full flex sm:flex-row flex-col items-center justify-center relative">
        <div className="w-full h-full relative overflow-hidden">
          <Image
            src={profile}
            alt=""
            id="hero-img"
            className="scale-150 opacity-0"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/4 bg-gradient-to-t from-[#121212] opacity-100"></div>
        </div>
        <div className="w-full h-full flex flex-col justify-center gap-y-10">
          <h1
            className="sm:text-5xl text-3xl sm:text-left text-center sm:px-0 px-5 font-mono capitalize text-pretty"
            id="text-reveal-1"
          >
            Get High-End Custom Websites or Online Shops without Breaking the
            Bank.
          </h1>
          <p
            className="sm:text-[28px] text-xl sm:px-0 px-5 sm:text-left text-center font-light"
            id="text-reveal-2"
          >
            Unleash your brand’s potential with 100% custom-built websites,
            offering speed and seamless performance across all desktop, tablet,
            and mobile platforms.
          </p>

          <div className="flex sm:flex-row flex-col items-center justify-center gap-y-5">
            <GoogleCalendarScheduler>
              <div
                className="flex items-center gap-x-3 justify-center sm:hidden"
                id="text-reveal-3"
              >
                <button className="text-lg uppercase">book a free call</button>
                <button className="size-12 rounded-full bg-white flex items-center justify-center">
                  <BsArrowUpRight className="text-black text-[22px] rotate-45" />
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
                  <button className="size-14 rounded-full bg-transparent border-dashed group-hover:bg-white border-white border-2 group-hover:scale-[1.2] transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                    <FiArrowRight
                      size={24}
                      className="group-hover:text-black absolute text-4xl transition-all transform duration-300 ease-out opacity-100 group-hover:translate-y-[-50px] group-hover:opacity-0"
                    />
                    <FiArrowRight
                      size={24}
                      className="group-hover:text-black absolute text-4xl translate-y-12 opacity-0 transition-all transform duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                    />
                  </button>
                </div>
              </GoogleCalendarScheduler>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=01714461547&text&type=phone_number&app_absent=0"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Adds security when opening links in new tabs
            >
              <button
                className="underline text-lg font-semibold uppercase underline-offset-8 flex items-center gap-x-5"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                or whatsapp me
                <FaSquareWhatsapp className="text-green-500 text-3xl" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
