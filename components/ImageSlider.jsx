"use client";
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card } from "./ui/card";
import Image from "next/image";
import { toast } from "sonner";
import axios from "axios";

const ImageSlider = () => {
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
    <Carousel className=" bg-black">
      <CarouselContent className="">
        {projects.map((project, i) => {
          return (
            <CarouselItem key={i} className="w-full h-full">
              <div className="relative w-full h-[500px]">
                <Image
                  src={project.imageUrl}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageSlider;
