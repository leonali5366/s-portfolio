"use client";
import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = ({testimonial}) => {
  return (
    <div className="h-full w-full xl:py-32 text-center px-5" ref={testimonial}>
      <div className="w-full mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <h2 className="xl:text-[54px] md:text-5xl text-4xl sm:mb-8 xl:mb-0 font-bold">
          What client <span className="text-red-600">say.</span>
        </h2>
        {/* slider */}
        <div>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
