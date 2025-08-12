"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";
import GoogleCalendarScheduler from "./GoogleCalendarScheduler";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Hero({ setIsHovered, home }) {
  const magnetRef = useRef(null);

  const words =
    "Get High-End Custom Websites or Online Shops without Breaking the Bank.".split(
      " "
    );
  const [highlighted, setHighlighted] = useState([]);

  // After initial reveal, pick random words to spin every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndexes = [];
      while (randomIndexes.length < 2) {
        const rand = Math.floor(Math.random() * words.length);
        if (!randomIndexes.includes(rand)) randomIndexes.push(rand);
      }
      setHighlighted(randomIndexes);

      // Remove highlight after animation ends
      setTimeout(() => setHighlighted([]), 1200);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

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
        {/* <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
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

            <a
              href="https://bit.ly/41AXLZx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/ShohanurFiverr.png"
                alt="fiverr"
                className="w-full h-auto rounded-md"
              />
            </a>
          </div>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-full lg:h-[500px] sm:h-[400px] h-[300px]"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oXr_k1xNvoA?autoplay=1&mute=1&playsinline=1&rel=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </motion.div>

        <div className="w-full h-full flex flex-col justify-center gap-y-10">
          {/* Animated headline with word flip and random animation */}
          <motion.div
            className="sm:text-5xl text-3xl lg:text-left text-center sm:px-0 px-5 font-mono capitalize flex flex-wrap gap-2"
            style={{ lineHeight: "1.2" }}
          >
            {words.map((word, wordIdx) => (
              <span key={wordIdx} className="inline-flex">
                {word.split("").map((char, letterIdx) => (
                  <motion.span
                    key={letterIdx}
                    initial={{
                      opacity: 0,
                      rotateY: 90,
                      y: Math.random() * 40 - 20,
                      scale: 0.8 + Math.random() * 0.4,
                    }}
                    animate={{
                      opacity: 1,
                      rotateY: 0,
                      y: 0,
                      scale: 1,
                      rotateX: highlighted.includes(wordIdx) ? 360 : 0,
                      color: highlighted.includes(wordIdx) ? "#22c55e" : "#fff",
                    }}
                    transition={{
                      duration: highlighted.includes(wordIdx) ? 0.6 : 0.6,
                      ease: "easeInOut",
                      delay: highlighted.includes(wordIdx)
                        ? letterIdx * 0.05 // sequential spin in word
                        : wordIdx * 0.03, // initial reveal delay
                    }}
                    style={{
                      display: "inline-block",
                      transformOrigin: "center",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.div>

          {/* Animated paragraph with word flip and random animation */}
          <motion.div
            className="sm:text-[28px] text-xl sm:px-0 px-5 lg:text-left text-center font-light flex flex-wrap gap-2"
            style={{ lineHeight: "1.3" }}
          >
            {`Unleash your brand’s potential with 100% custom-built websites, offering speed and seamless performance across all desktop, tablet, and mobile platforms.`
              .split(" ")
              .map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{
                    opacity: 0,
                    rotateY: 90,
                    y: Math.random() * 30 - 15,
                    scale: 0.8 + Math.random() * 0.4,
                  }}
                  whileInView={{
                    opacity: 1,
                    rotateY: 0,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: 0.2 + Math.random() * 0.4,
                  }}
                  style={{ display: "inline-block", marginRight: "6px" }}
                >
                  {word}
                </motion.span>
              ))}
          </motion.div>

          <div className="flex sm:flex-row flex-wrap flex-col items-center justify-center gap-y-5">
            <GoogleCalendarScheduler>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.8, ease: "easeInOut" }}
                className="flex items-center gap-x-3 justify-center sm:hidden opacity-0 translate-y-10"
              >
                <button className="text-lg uppercase">book a 30 min free call</button>
                <button className="size-12 rounded-full bg-white flex items-center justify-center">
                  <BsArrowUpRight className="text-black text-[22px] rotate-45" />
                </button>
              </motion.div>
            </GoogleCalendarScheduler>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeInOut" }}
              ref={magnetRef}
              className="w-[500px] relative sm:block hidden opacity-0 translate-y-10"
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
                    Book a 30 min free call
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
            </motion.div>
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeInOut" }}
              href="https://api.whatsapp.com/send/?phone=01771674511&text&type=phone_number&app_absent=0"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Adds security when opening links in new tabs
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
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
