import { useState } from "react";

export default function Header({
  setIsHovered,
  scrollToSection,
  portfolio,
  aboutus,
  pricing,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex items-center justify-between px-5 h-16 fixed top-0 w-full bg-black/60 backdrop-blur z-[999]">
      <span className="text-5xl">VeelMan</span>
      <ul className="sm:flex hidden items-center gap-x-5 text-xl">
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300"
          href="#"
          onClick={() => scrollToSection(portfolio)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Portfolio
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300"
          onClick={() => scrollToSection(aboutus)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href="#"
        >
          <a href="#">About me</a>
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300"
          onClick={() => scrollToSection(pricing)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href="#"
        >
          <a href="#">Pricing</a>
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300"
          onClick={() => scrollToSection(portfolio)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href="#"
        >
          <a href="#">Testimonial</a>
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
    </header>
  );
}
