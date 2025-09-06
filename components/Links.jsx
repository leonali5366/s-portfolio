import { motion } from "framer-motion";
import { scale, slide } from "./anime";

export default function Links({ data, scrollToSection, setIsActive }) {
  const { title, href, index, name } = data;

  const handleClick = () => {
    if (typeof href === "string") {
      // 🔗 Navigate to a page (like /services)
      window.location.href = href;
    } else if (href?.current) {
      // 🔗 Scroll to section
      scrollToSection(href);
    }
    setIsActive(false);
  };

  return (
    <motion.div
      className={`relative flex items-center  ${
        name === "processRef" && "lg:hidden"
      } ${name === "process" && "max-lg:hidden"}`}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        className="w-2.5 h-2.5 bg-white rounded-full absolute left-[-30px]"
      ></motion.div>
      <button
        onClick={handleClick}
        className="text-white text-2xl xl:text-3xl"
      >
        {title}
      </button>
    </motion.div>
  );
}
