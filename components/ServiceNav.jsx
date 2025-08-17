import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuSlide } from "./anime";
import Curve from "./Curve";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { slide } from "./anime";
import Link from "next/link";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    subItems: [
      {
        title: "Website design and development",
        href: "/services/web-design-development",
      },
      {
        title: "Search Engine Optimization",
        href: "/services/search-engine-optimization",
      },
      {
        title: "Google Ads Management",
        href: "/services/google-ads-management",
      },
      {
        title: "Social Media Ads Management",
        href: "/services/social-media-ads-management",
      },
    ],
  },
];

export default function ServiceNav() {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-0 top-0 h-screen bg-[rgb(41,41,41)] text-white 2xl:hidden z-[9]"
    >
      <Curve />

      <div className="box-border h-full md:p-[100px] p-[50px] flex flex-col justify-between">
        <div className="flex flex-col gap-3 text-5xl">
          <div className="text-[rgb(153,153,153)] border-b border-[rgb(153,153,153)] uppercase text-xs mb-10">
            <p>Navigation</p>
          </div>

          {navItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-start"
              custom={index}
              variants={slide}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {item.href ? (
                <Link href={item.href} className="w-full">
                  <button className="text-white max-md:text-3xl text-left">
                    {item.title}
                  </button>
                </Link>
              ) : (
                <>
                  <div className="flex items-center justify-between w-full">
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="text-white max-md:text-3xl text-left flex items-center justify-between w-full gap-5"
                    >
                      {item.title}
                      <FaChevronDown className="text-sm" />
                    </button>
                  </div>

                  <AnimatePresence>
                    {activeSubmenu === index && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-2 w-full"
                      >
                        {item.subItems.map((subItem, subIndex) => (
                          <motion.li
                            key={subIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.1 }}
                            className="whitespace-nowrap py-2 rounded-md text-white max-md:text-lg hover:bg-gradient-to-r from-indigo-500/30 to-purple-500/30 transition-all duration-300"
                          >
                            <Link href={subItem.href}>{subItem.title}</Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              )}
            </motion.div>
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
