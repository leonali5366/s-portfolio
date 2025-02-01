"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import axios from "axios";
import { toast } from "sonner";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch projects on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/add-project");
      const allProjects = response.data.data;
      const limitedProjects = allProjects.slice(0, 6);
      setProjects(limitedProjects);
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
    <div className="bg-[#121212]">
      <div className="max-w-[1200px] mx-auto px-5 py-20 flex flex-col justify-between h-screen gap-20">
        <h1 className="text-white xl:text-[84px] md:text-6xl text-4xl font-mono text-center">
          Projects
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {projects.map((project, i) => {
            return (
              <a href={project.websiteUrl} key={project.id} target="_blank">
                <div className="w-full h-[300px] overflow-hidden group relative rounded-lg">
                  <Image
                    src={project.imageUrl}
                    alt=""
                    objectFit="cover"
                    fill
                    className="rounded-md group-hover:-translate-y-1/2 transition-transform duration-1000"
                  />
                  <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:opacity-50 opacity-0 group-hover:backdrop-blur transition-all duration-500 flex flex-col items-center justify-center gap-5">
                    <h1 className="text-white text-2xl">{project.name}</h1>
                    <button className="size-16 rounded-full bg-white flex items-center justify-center backdrop-blur">
                      <GoArrowUpRight size={32} className="text-black" />
                    </button>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <Link href={"/projects"} className="flex items-center justify-center">
          <button className="px-5 text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 ease-in-out rounded py-2">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
