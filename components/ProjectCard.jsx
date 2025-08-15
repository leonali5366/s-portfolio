"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "sonner";
import Link from "next/link";
import { Card } from "./ui/card";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { Skeleton } from "./ui/skeleton";
import { FiArrowRight } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Grid } from "swiper";
import Magnet from "./Magnet";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCard({ setIsHovered, project }) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const controls = useAnimation();
  const swiperRef = useRef(null); // store swiper instance

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (!isLoading && projects.length > 0) {
      controls.start("visible");
    }
  }, [isLoading, projects, controls]);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/add-project");
      setProjects(response.data.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to fetch projects");
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={project} className="bg-[#121212] xl:min-h-screen">
      <div className="px-5 py-20 md:space-y-32 space-y-16 max-w-[90rem] mx-auto">
        <h1 className="text-white xl:text-[84px] md:text-6xl text-4xl font-mono text-center">
          Recent Projects
        </h1>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[...Array(4)].map((_, idx) => (
              <Skeleton key={idx} className="w-full h-[285px] rounded-xl" />
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="relative">
              {/* Swiper carousel */}
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                  640: { slidesPerView: 2, grid: { rows: 1 } },
                  768: { slidesPerView: 2, grid: { rows: 2 } },
                }}
                grid={{ rows: 1, fill: "row" }}
                modules={[Grid]}
                className="pb-10"
              >
                {projects.map((project, i) => (
                  <SwiperSlide key={i}>
                    <motion.div variants={itemVariants}>
                      <Card className="h-[285px] overflow-hidden group relative border-none">
                        <div className="w-full h-full relative">
                          <Image
                            src={project.imageUrl}
                            alt=""
                            fill
                            className="object-cover object-top group-hover:scale-105 transition-all duration-500 ease-in-out"
                          />
                        </div>
                        <div
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                          className="absolute inset-0 bg-gradient-to-l from-sky-300 via-red-400 to-blue-400 opacity-0 lg:group-hover:opacity-80 max-lg:opacity-80 text-white transition-all duration-700 flex items-center justify-center"
                        >
                          <a
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-0 translate-y-full lg:group-hover:-translate-y-10 max-lg:-translate-y-28 group-hover:xl:-translate-y-28 transition-all duration-300"
                          >
                            <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                              <div className="delay-100">LIVE</div>
                              <div className="translate-y-[500%] lg:group-hover:translate-y-0 max-lg:translate-y-0 transition-all duration-300 delay-150">
                                PROJECT
                              </div>
                              <div className="text-xl translate-y-[500%] lg:group-hover:translate-y-0 max-lg:translate-y-0 transition-all duration-300 delay-200">
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

              {/* Custom Navigation Buttons - OUTSIDE carousel */}
              <div className="flex justify-end items-center mt-8 gap-3">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="p-3 bg-white text-black rounded-full shadow-lg hover:scale-105 transition"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="p-3 bg-white text-black rounded-full shadow-lg hover:scale-105 transition"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* View all button */}
        <div className="flex items-center justify-center max-sm:flex-wrap max-w-2xl mx-auto">
          <Magnet>
            <Link href={"/projects"}>
              <div className="flex items-center gap-x-3 justify-center xl:hidden">
                <button className="text-lg uppercase text-white">
                  View all
                </button>
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
            </Link>
          </Magnet>
          <Magnet>
            <a
              href="https://www.behance.net/pixelwebmakers"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Adds security when opening links in new tabs
            >
              <div className="flex items-center gap-x-3 justify-center xl:hidden">
                <button className="text-lg uppercase text-white flex items-center gap-3">
                  behance profile{" "}
                  <div className="w-8 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Behance"
                      role="img"
                      viewBox="0 0 512 512"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <rect
                          width="512"
                          height="512"
                          rx="15%"
                          fill="#4175fa"
                        ></rect>
                        <path
                          d="m346.12 211.86c-73.376 0-73.471 73.1-73.471 73.476 0 0-5.027 73.191 73.471 73.191 0 0 65.465 3.722 65.465-50.938h-33.615s1.114 20.578-30.731 20.578c0 0-33.616 2.237-33.616-33.244h99.081s10.896-83.063-66.584-83.063zm-32.873 57.454s4.099-29.427 33.62-29.427c29.613 0 29.146 29.427 29.146 29.427h-62.766zm-83.987-18.807s29.146-2.142 29.146-36.41c0-34.173-23.838-50.938-54.103-50.938h-99.551v191.36h99.542s60.81 1.866 60.81-56.521c5e-3 0 2.613-47.491-35.844-47.491zm-80.645-53.361h55.684s13.504 0 13.504 19.926-7.916 22.815-16.95 22.815h-52.238v-42.741zm52.894 123.39h-52.894v-51.218h55.684s20.211-.186 20.116 26.352c0 22.353-14.99 24.68-22.906 24.866zm103.45-146.1v23.562h78.969v-23.562h-78.969z"
                          fill="#ffffff"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </button>
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
                  behance profile{" "}
                  <div className="w-8 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Behance"
                      role="img"
                      viewBox="0 0 512 512"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <rect
                          width="512"
                          height="512"
                          rx="15%"
                          fill="#4175fa"
                        ></rect>
                        <path
                          d="m346.12 211.86c-73.376 0-73.471 73.1-73.471 73.476 0 0-5.027 73.191 73.471 73.191 0 0 65.465 3.722 65.465-50.938h-33.615s1.114 20.578-30.731 20.578c0 0-33.616 2.237-33.616-33.244h99.081s10.896-83.063-66.584-83.063zm-32.873 57.454s4.099-29.427 33.62-29.427c29.613 0 29.146 29.427 29.146 29.427h-62.766zm-83.987-18.807s29.146-2.142 29.146-36.41c0-34.173-23.838-50.938-54.103-50.938h-99.551v191.36h99.542s60.81 1.866 60.81-56.521c5e-3 0 2.613-47.491-35.844-47.491zm-80.645-53.361h55.684s13.504 0 13.504 19.926-7.916 22.815-16.95 22.815h-52.238v-42.741zm52.894 123.39h-52.894v-51.218h55.684s20.211-.186 20.116 26.352c0 22.353-14.99 24.68-22.906 24.866zm103.45-146.1v23.562h78.969v-23.562h-78.969z"
                          fill="#ffffff"
                        ></path>
                      </g>
                    </svg>
                  </div>
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
            </a>
          </Magnet>
        </div>
      </div>
    </div>
  );
}
