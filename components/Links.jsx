import { motion } from "framer-motion";
import { scale, slide } from "./anime";

export default function Links({ data, scrollToSection, setIsActive }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
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
        onClick={() => {
          scrollToSection(href);
          setIsActive(false);
        }}
        className="text-white max-md:text-3xl"
      >
        {title}
      </button>
    </motion.div>
  );
}
