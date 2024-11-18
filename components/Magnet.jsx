"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function Magnet({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    var currRef = ref.current;
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1.5,
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1.5,
    });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };
    const mouseLeave = (e) => {
      xTo(0);
      yTo(0);
    };

    ref.current.addEventListener("mousemove", mouseMove);
    ref.current.addEventListener("mouseleave", mouseLeave);
    return () => {
      currRef.addEventListener("mousemove", mouseMove);
      currRef.addEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref });
}
