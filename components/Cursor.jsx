"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Cursor({ isHovered, setIsVisible, isVisible }) {
  const size = isHovered ? 70 : 15;
  const circle = useRef();
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const delayedMouse = useRef({
    x: 0,
    y: 0,
  });

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
    // Make cursor visible when moving
    if (!isVisible) setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.1),
      y: lerp(y, mouse.current.y, 0.1),
    };
    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={circle}
      className={`fixed top-0 left-0 rounded-full mix-blend-difference pointer-events-none transition-[width,height,border,background-color,opacity] duration-300 z-[9999] xl:block hidden`}
      style={{
        width: size,
        height: size,
        opacity: isVisible ? 1 : 0,
        border: `${isHovered && "1px solid white"}`,
        backgroundColor: `${isHovered ? "" : "white"}`,
      }}
    />
  );
}
