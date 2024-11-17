import Magnet from "./Magnet";

export default function Header({ setIsHovered }) {
  return (
    <header className="flex items-center justify-between px-5 h-24 fixed top-0 w-full">
      <Magnet>
        <span className="text-5xl">VeelMan</span>
      </Magnet>
      <ul className="flex items-center gap-x-5 text-xl">
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300"
          href="#"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Portfolio
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href="#"
        >
          <a href="#">About me</a>
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href="#"
        >
          <a href="#">Pricing</a>
        </li>
        <li
          className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href="#"
        >
          <a href="#">Testimonial</a>
        </li>
      </ul>
    </header>
  );
}
