"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BsStarFill, BsX } from "react-icons/bs";

const Tilt = ({ setIsHovered, aboutMe, scrollToSection,setIsVisible }) => {
  const [Hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const videoModalVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    exit: { scale: 0, opacity: 0 },
  };

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angleY = (x - centerX) / 80;
    const angleX = (centerY - y) / 80;

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

  const toggleVideo = () => {
    setShowVideo(!showVideo);
    setIsHovered(!showVideo);
    setIsVisible(false)
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid lg:grid-cols-2 place-items-center min-h-screen bg-[#121212] p-4 gap-10 max-lg:pt-20"
    >
      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <motion.div
              variants={videoModalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-4xl bg-[#121212] rounded-xl overflow-hidden relative"
            >
              <button
                onClick={toggleVideo}
                className="absolute top-4 right-4 z-10 text-white hover:text-green-500 transition-colors"
              >
                <BsX size={32} />
              </button>

              <div className="aspect-video w-full relative">
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your video URL
                  title="Client Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.div
        variants={itemVariants}
        className="flex flex-col lg:flex-row justify-between w-full lg:px-10 gap-10"
      >
        <div className="text-white rotate-0 lg:rotate-90 text-2xl flex items-center max-xl:hidden">
          <div className="w-16 h-1 rounded bg-white"></div>
          <h1 className="py-1 px-3 bg-slate-800 text-nowrap">Found Me</h1>
        </div>
        <div className="text-white space-y-8">
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-lg font-medium">Fiverr Profile</h1>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <h1 className="font-bold text-3xl mt-1.5">fi</h1>
              </div>
              <BsStarFill size={20} color="white" />
              <span className="font-bold">
                4.9 <span className="font-normal text-gray-300">(360+)</span>
              </span>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="text-green-500 text-lg">Hello! I am</h1>
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="text-4xl md:text-5xl font-semibold"
            >
              SHUVO
            </motion.h1>
            <div>
              <p className="text-xl md:text-2xl">Expert Wordpress Developer</p>
              <p className="text-sm">
                & Elementor, Bricks, Oxygen Builder Specialist
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10"
          >
            {/* ... About Me button ... */}
             <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => scrollToSection(aboutMe)}
              className="px-5 py-2 bg-green-500 font-semibold text-lg rounded hover:bg-green-600 transition-colors"
            >
              About Me
            </button>
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex items-center gap-3 cursor-pointer"
              onClick={toggleVideo}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center"
              >
                <div
                  style={{
                    width: "17px",
                    height: "17px",
                    backgroundColor: "#22c55e",
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    rotate: "90deg",
                  }}
                />
              </motion.div>
              <span>Client Say?</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div
        className="w-full max-w-[800px] h-[280px] 2xl:h-[600px] xl:h-[450px] sm:h-[500px] lg:h-[400px] md:h-[600px] bg-black/50 rounded-2xl shadow-lg overflow-hidden relative cursor-pointer p-3 sm:p-7"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Shiny reflection effect - only show on non-mobile */}
        {Hovered && !isMobile && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute w-[200%] h-[200%] rounded-full bg-gradient-to-br from-transparent via-white/20 to-transparent"
              style={{
                transform: `rotate(45deg) translate(${
                  mousePosition.x * 100 - 50
                }%, ${mousePosition.y * 100 - 50}%)`,
                transition: "transform 0.1s ease-out",
                left: "-50%",
                top: "-50%",
              }}
            />
          </div>
        )}

        {/* Card content */}
        <div
          className="h-full flex flex-col justify-between bg-gradient-to-br from-gray-900 to-gray-800 rounded-md"
          style={{ transform: isMobile ? "none" : "translateZ(40px)" }}
        >
          <div className="w-full h-full relative">
            <Image
              src="/images/ShohanurFiverr.png"
              alt="Shohanur fiverr"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tilt;
