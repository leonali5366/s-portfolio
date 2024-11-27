// components/OpacityComponent.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const OpacityComponent = ({children}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    // Function to animate opacity based on element's visibility in the viewport
    const handleScroll = () => {
      const rect = element.getBoundingClientRect();

      // Check if the element is in the viewport
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // Element is in the viewport, fade it in
        gsap.to(element, { opacity: 1, duration: 1 });
      } else {
        // Element is out of the viewport, fade it out
        gsap.to(element, { opacity: 0.5, duration: 1 });
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Initial check in case the element is already in view
    handleScroll();

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={elementRef}
      className="opacity-70 transition-opacity duration-75 ease-in-out" // Tailwind for initial opacity
    >
      {children}
    </div>
  );
};

export default OpacityComponent;
