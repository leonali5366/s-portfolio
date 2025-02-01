import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Nav from "./nav";

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
}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="flex items-center justify-between px-5 h-16 fixed top-0 w-full bg-black/60 backdrop-blur z-[999]">
      <span className="xl:text-5xl md:text-4xl text-3xl text-white">
        ShuvoDesign
      </span>
      <ul className="2xl:flex hidden items-center gap-x-5 text-xl text-white">
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300"
          onClick={() => scrollToSection(home)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Home
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300"
          onClick={() => scrollToSection(pricing)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Pricing
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300"
          onClick={() => scrollToSection(aboutMe)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          About me
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300"
          onClick={() => scrollToSection(aboutus)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Why me
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300"
          onClick={() => scrollToSection(process)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Process
        </li>

        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300"
          onClick={() => scrollToSection(testimonial)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Testimonial
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300"
          onClick={() => scrollToSection(contact)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Contact us
        </li>
        {/* <li
          className="flex flex-col items-center justify-center gap-y-2 cursor-pointer group"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <button
            className={`w-10 h-[2px] bg-black ${
              !isOpen && "group-hover:translate-x-1"
            } ${
              isOpen && "rotate-45 translate-y-[5.5px]"
            } transition-transform duration-300`}
          ></button>
          <button
            className={`w-10 h-[2px] bg-white ${
              !isOpen && "group-hover:-translate-x-1"
            } ${
              isOpen && "-rotate-45 -translate-y-[5.5px]"
            } transition-transform duration-300`}
          ></button>
        </li> */}
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
          />
        )}
      </AnimatePresence>
    </header>
  );
}
