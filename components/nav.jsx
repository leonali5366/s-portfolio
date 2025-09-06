import React from "react";
import { motion } from "framer-motion";
import { menuSlide } from "./anime";
import Links from "./Links";
import Curve from "./Curve";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";

export default function Nav({
  aboutMe,
  aboutus,
  pricing,
  home,
  testimonial,
  contact,
  scrollToSection,
  process,
  processRes,
  setIsActive,
  project,
}) {
  const navItems = [
    { title: "Home", href: home },
    { title: "Pricing", href: pricing },
    { title: "About me", href: aboutMe },
    { title: "Why me", href: aboutus },
    { title: "Projects", href: project },
    { title: "Process", href: process, name: "process" },
    { title: "Process", href: processRes, name: "processRes" },
    { title: "Services", href: "/services", isParent: true }, // 👈 services main link
    { title: "Testimonial", href: testimonial },
    { title: "Contact me", href: contact },
  ];

  // Submenu for Services
  const serviceSubItems = [
    {
      title: "Web Design & Development",
      href: "/services/web-design-development",
    },
    {
      title: "Search Engine Optimization",
      href: "/services/search-engine-optimization",
    },
    { title: "Google Ads Management", href: "/services/google-ads-management" },
    {
      title: "Social Media Ads Management",
      href: "/services/social-media-ads-management",
    },
  ];

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-0 top-0 h-screen bg-[rgb(41,41,41)] text-white 2xl:hidden"
    >
      <Curve />

      <div className="box-border h-full xl:p-[100px] md:px-[80px] p-[60px] flex flex-col justify-between gap-5 overflow-auto">
        <div className="flex flex-col gap-3 text-5xl">
          <div className="text-[rgb(153,153,153)] border-b border-[rgb(153,153,153)] uppercase text-xs xl:mb-10 mb-5">
            <p>Navigation</p>
          </div>

          {navItems.map((data, index) => (
            <div key={index} className="flex flex-col gap-2">
              <Links
                scrollToSection={scrollToSection}
                setIsActive={setIsActive}
                data={{ ...data, index }}
              />

              {/* Always expanded Services submenu */}
              {data.isParent && (
                <div className="pl-6 flex flex-col gap-2 text-lg">
                  {serviceSubItems.map((sub, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setIsActive(false);
                        window.location.href = sub.href; // simple navigation
                      }}
                      className="text-white transition text-start"
                    >
                      {sub.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <a
            href="https://www.linkedin.com/in/shohanur-reza-shuvo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="xl:text-3xl md:text-2xl text-xl" />
          </a>
          <a href="mailto:shohanurrezashuvo20@gmail.com">
            <MdAlternateEmail className="xl:text-3xl md:text-2xl text-xl" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=01771674511&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="xl:text-3xl md:text-2xl text-xl" />
          </a>
          <a
            href="https://www.pixelwebmakers.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiGlobe className="xl:text-3xl md:text-2xl text-xl" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
