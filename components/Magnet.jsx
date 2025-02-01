import { useEffect, useRef } from "react";
import gsap from "gsap";

const Magnet = ({ children }) => {
  const magnetRef = useRef(null);

  useEffect(() => {
    const magnetElement = magnetRef.current;

    // Function to handle mouse move event while the mouse is inside the element
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Get the position of the magnet element
      const magnetRect = magnetElement.getBoundingClientRect();
      const magnetX = magnetRect.left + magnetRect.width / 2;
      const magnetY = magnetRect.top + magnetRect.height / 2;

      // Calculate distance between mouse and magnet center
      const deltaX = mouseX - magnetX;
      const deltaY = mouseY - magnetY;

      // Use GSAP to animate the magnet to the mouse position
      gsap.to(magnetElement, {
        x: deltaX / 4, // Scale the movement
        y: deltaY / 4,
        duration: 0.3, // Smooth animation
        ease: "power2.out", // Easing for smoothness
        scale: 1.1, // Slightly scale up the element for magnet effect
      });
    };

    // Function to handle mouse enter event to start the effect
    const handleMouseEnter = () => {
      window.addEventListener("mousemove", handleMouseMove);
    };

    // Function to handle mouse leave event to stop the effect
    const handleMouseLeave = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.to(magnetElement, {
        x: 0,
        y: 0,
        scale: 1, // Reset the scale
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Add event listeners for mouse enter and mouse leave
    magnetElement.addEventListener("mouseenter", handleMouseEnter);
    magnetElement.addEventListener("mouseleave", handleMouseLeave);

    // Clean up event listeners on component unmount
    return () => {
      magnetElement.removeEventListener("mouseenter", handleMouseEnter);
      magnetElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <div ref={magnetRef} className="relative w-full">{children}</div>;
};

export default Magnet;
