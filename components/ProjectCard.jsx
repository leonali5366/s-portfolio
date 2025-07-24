"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "sonner";
import Link from "next/link";
import { Card } from "./ui/card";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { Skeleton } from "./ui/skeleton";
import { FiArrowRight } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion"; // Import Framer Motion
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Grid, Navigation, Pagination } from "swiper";
import Magnet from "./Magnet";

export default function ProjectCard({ setIsHovered }) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const controls = useAnimation(); // Framer Motion animation controls

  // Fetch projects on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  // Animate projects when they are loaded
  useEffect(() => {
    if (!isLoading && projects.length > 0) {
      controls.start("visible"); // Start the animation
    }
  }, [isLoading, projects, controls]);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/add-project");
      const allProjects = response.data.data;
      setProjects(allProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to fetch projects");
    } finally {
      setIsLoading(false);
    }
  };

  // Framer Motion variants for stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger effect with 0.2s delay between children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0 }, // Animate to visible and original position
  };

  return (
    <div className="bg-[#121212] xl:min-h-screen">
      <div className="px-5 py-20 md:space-y-32 space-y-16 max-w-7xl mx-auto">
        <h1 className="text-white xl:text-[84px] md:text-6xl text-4xl font-mono text-center">
          Recent Projects
        </h1>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Skeleton className="w-full h-[285px] rounded-xl" />
            <Skeleton className="w-full h-[285px] rounded-xl" />
            <Skeleton className="w-full h-[285px] rounded-xl" />
            <Skeleton className="w-full h-[285px] rounded-xl" />
          </div>
        ) : (
          <motion.div
            variants={containerVariants} // Container variants for stagger
            initial="hidden" // Initial state
            animate={controls} // Control the animation
          >
            <Swiper
              navigation={true}
              pagination={{
                clickable: true,
              }}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  grid: {
                    rows: 1,
                  },
                },
                768: {
                  slidesPerView: 2,
                  grid: {
                    rows: 2,
                  },
                },
              }}
              grid={{
                rows: 1,
                fill: "row",
              }}
              modules={[Navigation, Pagination, Grid]}
              className=""
            >
              {projects.map((project, i) => (
                <SwiperSlide key={i}>
                  <motion.div variants={itemVariants}>
                    {" "}
                    {/* Item variants for individual animation */}
                    <Card className="h-[285px] overflow-hidden group relative border-none">
                      <div className="w-full h-full relative">
                        <Image
                          src={project.imageUrl}
                          alt=""
                          objectFit="cover"
                          layout="fill"
                          objectPosition="top"
                          className="group-hover:scale-105 transition-all duration-500 ease-in-out"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-l from-sky-300 via-red-400 to-blue-400 opacity-0 group-hover:opacity-80 text-white transition-all duration-700 flex items-center justify-center">
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-28 transition-all duration-300"
                        >
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            <div className="delay-100">LIVE</div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </a>
                      </div>
                    </Card>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
        <Link href={"/projects"} className="flex items-center justify-center">
          <Magnet>
            <div className="flex items-center gap-x-3 justify-center xl:hidden">
              <button className="text-lg uppercase text-white">View all</button>
              <button className="size-12 rounded-full bg-white flex items-center justify-center">
                <BsArrowUpRight className="text-black text-[22px] rotate-45" />
              </button>
            </div>
            <div
              className="flex items-center gap-x-5 group max-xl:hidden"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                transition: "transform 0.3s ease-out",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="flex gap-x-5 items-center text-2xl font-medium group uppercase w-fit text-nowrap text-white">
                View all
              </button>
              <button className="size-14 rounded-full bg-transparent border-dashed group-hover:bg-white border-white border-2 group-hover:scale-[1.2] transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                <FiArrowRight
                  size={24}
                  className="group-hover:text-black text-white absolute text-4xl transition-all transform duration-300 ease-out opacity-100 group-hover:translate-y-[-50px] group-hover:opacity-0"
                />
                <FiArrowRight
                  size={24}
                  className="group-hover:text-black absolute text-4xl translate-y-12 opacity-0 transition-all transform duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                />
              </button>
            </div>
          </Magnet>
        </Link>
      </div>
    </div>
  );
}
