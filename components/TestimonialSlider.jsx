import Review1 from "../app/images/Review1.png";
import Review2 from "../app/images/Review2.png";
import Review3 from "../app/images/Review3.png";
import Review4 from "../app/images/Review4.png";
import Review5 from "../app/images/Review5.png";
import Review6 from "../app/images/Review6.png";
import Review7 from "../app/images/Review7.png";
import Review8 from "../app/images/Review8.png";
import Review9 from "../app/images/Review9.png";

const testimonialData = [
  { image: Review1 },
  { image: Review2 },
  { image: Review3 },
  { image: Review4 },
  { image: Review5 },
  { image: Review6 },
  { image: Review7 },
  { image: Review8 },
  { image: Review9 },
];

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// icons
import { ChevronLeft, ChevronRight } from "lucide-react";

// next image
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <div className="relative xl:w-[800px] w-full">
      <Swiper
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation]}
        className="xl:h-[400px] h-[200px]"
      >
        {testimonialData.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="h-full flex items-center justify-center">
              <Image src={review.image} alt="" className="rounded-lg" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute -bottom-6 right-6 flex gap-2 z-10">
        <button className="custom-prev bg-white text-black sm:p-3 p-2 rounded-full">
          <ChevronLeft />
        </button>
        <button className="custom-next bg-white text-black sm:p-3 p-2 rounded-full">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
