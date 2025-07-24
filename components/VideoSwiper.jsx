"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.css";
import { toast } from "sonner";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const VideoSwiper = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // Skeleton loader component using shadcn/ui
  const SkeletonLoader = () => (
    <div className="mx-auto px-5 py-8 bg-[#121212]">
      <Skeleton className="h-12 w-3/4 mx-auto mb-10 bg-gray-700" />
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={1}
        spaceBetween={20}
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
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full py-20"
      >
        {[...Array(3)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="space-y-2">
              <Skeleton className="h-64 w-full rounded-lg bg-gray-700" />
              <Skeleton className="h-4 w-3/4 bg-gray-700" />
              <Skeleton className="h-4 w-1/2 bg-gray-700" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  // If no videos and not loading, don't render the section
  if (!isLoading && videos.length === 0) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="mx-auto px-5 py-8 bg-[#121212]">
          <h1 className="xl:text-6xl md:text-5xl text-4xl text-white text-center md:mb-10 mb-5 font-mono">
            Client&apos;s Success Stories
          </h1>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={1}
            spaceBetween={20}
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
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full py-20"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="relative">
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
      )}
    </>
  );
};

export default VideoSwiper;
