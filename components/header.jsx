/* eslint-disable @next/next/no-img-element */
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Nav from "./nav";
import Link from "next/link";

export default function Header({
  setIsHovered,
  scrollToSection,
  aboutMe,
  aboutus,
  pricing,
  home,
  testimonial,
  contact,
  process,
  processRes,
  project,
}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="flex items-center justify-between px-5 h-16 fixed top-0 w-full bg-black/60 backdrop-blur z-[999]">
      <Link
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href={"/"}
        className="w-auto h-full"
      >
        <abbr title="Home">
          <img src="/images/logo.png" alt="logo" className="w-auto h-full" />
        </abbr>
      </Link>
      <ul className="2xl:flex hidden items-center gap-x-5 text-xl text-white">
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300 cursor-pointer"
          onClick={() => scrollToSection(home)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Home
        </li>
        <Link href={"/services"}>
          <li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group cursor-pointer hover:border-b-2 border-b-2 border-transparent hover:border-indigo-400 transition-all duration-300"
          >
            <span className="text-white font-medium">Services</span>

            <div className="absolute left-0 mt-1 w-max rounded-lg bg-gray-900/95 backdrop-blur-lg shadow-lg border border-gray-800 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-10">
              <ul className="p-2">
                <Link href={"/services/web-design-development"}>
                  <li className="whitespace-nowrap py-2 px-4 rounded-md text-gray-200 hover:text-white hover:bg-gradient-to-r from-indigo-500/30 to-purple-500/30 transition-all duration-300">
                    Website design and development
                  </li>
                </Link>
                <Link href={"/services/search-engine-optimization"}>
                  <li className="py-2 px-4 rounded-md text-gray-200 hover:text-white hover:bg-gradient-to-r from-indigo-500/30 to-purple-500/30 transition-all duration-300">
                    Search Engine Optimization
                  </li>
                </Link>
                <Link href={"/services/google-ads-management"}>
                  <li className="py-2 px-4 rounded-md text-gray-200 hover:text-white hover:bg-gradient-to-r from-indigo-500/30 to-purple-500/30 transition-all duration-300">
                    Google Ads Management
                  </li>
                </Link>
                <Link href={"/services/social-media-ads-management"}>
                  <li className="py-2 px-4 rounded-md text-gray-200 hover:text-white hover:bg-gradient-to-r from-indigo-500/30 to-purple-500/30 transition-all duration-300">
                    Social Media Ads Management
                  </li>
                </Link>
              </ul>
            </div>
          </li>
        </Link>

        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300 cursor-pointer"
          onClick={() => scrollToSection(pricing)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Pricing
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300 cursor-pointer"
          onClick={() => scrollToSection(aboutMe)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          About me
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300 cursor-pointer"
          onClick={() => scrollToSection(project)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Projects
        </li>

        <li
          className="hover:border-b-2 border-b-2 lg:block hidden border-transparent hover:border-white transition-[border] duration-300 cursor-pointer"
          onClick={() => scrollToSection(process)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Process
        </li>
        <li
          className="hover:border-b-2 lg:hidden border-b-2 border-transparent hover:border-white transition-[border] duration-300 cursor-pointer"
          onClick={() => scrollToSection(processRes)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Process
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300 cursor-pointer"
          onClick={() => scrollToSection(aboutus)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Why me
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300 cursor-pointer"
          onClick={() => scrollToSection(testimonial)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Testimonial
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300 cursor-pointer"
          onClick={() => scrollToSection(contact)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Contact me
        </li>
      </ul>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="size-[50px] rounded-full bg-[#455CE9] cursor-pointer flex items-center justify-center z-10 2xl:hidden"
      >
        <div
          className={`w-full before:content-[''] before:block before:h-px before:w-2/5 before:top-[5px] after:top-[-5px] before:mx-auto before:bg-white before:relative before:transition-transform before:duration-300 after:content-[''] after:block after:h-px after:w-2/5 after:mx-auto after:bg-white after:relative after:transition-transform after:duration-300 ${
            isActive
              ? "before:transform before:-rotate-45 after:transform after:rotate-45 after:mt-2"
              : ""
          }`}
        ></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <Nav
            aboutMe={aboutMe}
            aboutus={aboutus}
            pricing={pricing}
            home={home}
            testimonial={testimonial}
            contact={contact}
            scrollToSection={scrollToSection}
            process={process}
            processRes={processRes}
            setIsActive={setIsActive}
            project={project}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
