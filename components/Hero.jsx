"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import profile from "../app/images/profile.jpg";
import { ScrollTrigger } from "gsap/all";
import { FiArrowRight } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";
import GoogleCalendarScheduler from "./GoogleCalendarScheduler";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ setIsHovered, home }) {
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
    gsap.to("#text-reveal-1", {
      y: 0,
      duration: 1,
      opacity: 1,
      delay: 0.3,
      scrollTrigger: "#text-reveal-1",
    });
    gsap.to("#text-reveal-2", {
      y: 0,
      duration: 1,
      opacity: 1,
      delay: 0.5,
      scrollTrigger: "#text-reveal-2",
    });
    gsap.to("#text-reveal-3", {
      y: 0,
      duration: 1,
      opacity: 1,
      delay: 0.7,
      scrollTrigger: "#text-reveal-3",
    });
    gsap.to("#text-reveal-4", {
      y: 0,
      duration: 1,
      opacity: 1,
      delay: 0.9,
      scrollTrigger: "#text-reveal-4",
    });
    gsap.to("#text-reveal-5", {
      y: 0,
      duration: 1,
      opacity: 1,
      delay: 1.1,
      scrollTrigger: "#text-reveal-5",
    });
  }, []);

  const [Hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // 768px is typically the breakpoint for md in Tailwind
      };

      // Set initial value
      handleResize();

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Clean up
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angleY = (x - centerX) / 100;
    const angleX = (centerY - y) / 100;

    setMousePosition({ x: x / rect.width, y: y / rect.height });
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setHovered(true);
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    if (isMobile) return;
    setHovered(false);
    setIsHovered(false);
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      className="w-full lg:h-screen bg-[#121212] overflow-hidden py-10 text-white"
      ref={home}
    >
      <div className="w-full xl:px-20 md:px-10 px-5 flex items-center lg:flex-row flex-col justify-between lg:mt-32 mt-12 xl:gap-32 md:gap-16 gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-full"
        >
          <div
            className="w-full h-full bg-black/50 rounded-md shadow-lg overflow-hidden relative cursor-pointer p-3 sm:p-5"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transformStyle: `${isMobile ? "none" : "preserve-3d"}`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Card content */}

            <img
              src="/images/ShohanurFiverr.png"
              alt="fiverr"
              className="w-full h-auto rounded-md"
            />
          </div>
        </motion.div>

        <div className="w-full h-full flex flex-col justify-center gap-y-10">
          <h1
            className="sm:text-5xl text-3xl lg:text-left text-center sm:px-0 px-5 font-mono capitalize text-pretty opacity-0 translate-y-10"
            id="text-reveal-1"
          >
            Get High-End Custom Websites or Online Shops without Breaking the
            Bank.
          </h1>
          <p
            className="sm:text-[28px] text-xl sm:px-0 px-5 lg:text-left text-center font-light opacity-0 translate-y-10"
            id="text-reveal-2"
          >
            Unleash your brand’s potential with 100% custom-built websites,
            offering speed and seamless performance across all desktop, tablet,
            and mobile platforms.
          </p>

          <div className="flex sm:flex-row flex-wrap flex-col items-center justify-center gap-y-5">
            <GoogleCalendarScheduler>
              <div
                className="flex items-center gap-x-3 justify-center sm:hidden opacity-0 translate-y-10"
                id="text-reveal-3"
              >
                <button className="text-lg uppercase">book a free call</button>
                <button className="size-12 rounded-full bg-white flex items-center justify-center">
                  <BsArrowUpRight className="text-black text-[22px] rotate-45" />
                </button>
              </div>
            </GoogleCalendarScheduler>
            <div
              ref={magnetRef}
              className="w-[400px] relative sm:block hidden opacity-0 translate-y-10"
              id="text-reveal-4"
            >
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
              href="https://api.whatsapp.com/send/?phone=01771674511&text&type=phone_number&app_absent=0"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Adds security when opening links in new tabs
              id="text-reveal-5"
              className="opacity-0 translate-y-10"
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
