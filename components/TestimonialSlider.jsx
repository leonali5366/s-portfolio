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
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

// icons
import { FaQuoteLeft } from "react-icons/fa";

// next image
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="xl:h-[400px] h-[200px] xl:w-[800px]"
    >
      {testimonialData.map((review, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="h-full flex items-center justify-center">
              <Image src={review.image} alt="" className="rounded-lg"/>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
