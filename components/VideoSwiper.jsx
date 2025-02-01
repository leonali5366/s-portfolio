"use client";
// components/VideoSwiper.js
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.css";
import { toast } from "sonner";
import axios from "axios";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const VideoSwiper = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch projects on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/add-video");
      const allVideos = response.data.data;
      const limitedVideos = allVideos.slice(0, 6);
      setVideos(limitedVideos);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to fetch projects");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-[#121212] h-screen flex items-center justify-center">
        <div className="text-white">Loading videos...</div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-5 py-8 bg-[#121212]">
      <h1 className="xl:text-6xl md:text-5xl text-4xl text-white text-center md:mb-10 mb-5 font-mono">
        Client&apos;s Success Stories
      </h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          // When window width is >= 640px (sm breakpoint)
          640: {
            slidesPerView: 2, // Show 2 slides on medium screens
          },
          // When window width is >= 1024px (lg breakpoint)
          1024: {
            slidesPerView: 3, // Show 3 slides on larger screens
          },
        }}
        className="w-full py-20"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={video.id}>
            <div
              className={`relative ${
                index === 1 ? "scale-100" : "scale-75"
              } transition-transform duration-300 ease-in-out`}
            >
              <iframe
                className="w-full h-64 rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoSwiper;
