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
}) {
  const navItems = [
    {
      title: "Home",
      href: home,
    },
    {
      title: "Pricing",
      href: pricing,
    },
    {
      title: "About me",
      href: aboutMe,
    },
    {
      title: "Why me",
      href: aboutus,
    },
    {
      title: "Process",
      href: process,
    },
    {
      title: "Testimonial",
      href: testimonial,
    },
    {
      title: "Contact us",
      href: contact,
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

      <div className="box-border h-full md:p-[100px] p-[50px] flex flex-col justify-between">
        <div className="flex flex-col gap-3 text-5xl md:mt-20 mt-10">
          <div className="text-[rgb(153,153,153)] border-b border-[rgb(153,153,153)] uppercase text-xs mb-10">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <Links
              scrollToSection={scrollToSection}
              key={index}
              data={{ ...data, index }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <a
            href="https://www.linkedin.com/in/shohanur-reza-shuvo/"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Adds security when opening links in new tabs
          >
            <FaLinkedinIn className="xl:text-3xl md:text-2xl text-xl" />
          </a>
          <a href="mailto:shohanurrezashuvo20@gmail.com">
            <MdAlternateEmail className="xl:text-3xl md:text-2xl text-xl" />
          </a>
          <a
            href="https://wa.me/+8801714-461547"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Adds security when opening links in new tabs
          >
            <FaWhatsapp className="xl:text-3xl md:text-2xl text-xl" />
          </a>
          <a
            href="https://www.pixelwebmakers.com"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Adds security when opening links in new tabs
          >
            <CiGlobe className="xl:text-3xl md:text-2xl text-xl" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
