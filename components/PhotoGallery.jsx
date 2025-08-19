"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Make sure to install shadcn/ui skeleton
import axios from "axios";
import { toast } from "sonner"; // or your toast library

export default function PhotoGallery() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/add-project");
      // Limit to 16 projects on the client side
      setProjects(response.data.data.slice(0, 16));
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to fetch projects");
    } finally {
      setIsLoading(false);
    }
  };

  // Random delay between 0 and 0.5 seconds for each image
  const getRandomDelay = () => Math.random() * 0.5;

  // Random initial y position between 20 and 100px
  const getRandomY = () => 20 + Math.random() * 80;

  // Skeleton grid that matches your masonry layout
  const renderSkeletons = () => (
    <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
      {Array.from({ length: 16 }).map((_, index) => (
        <div
          key={index}
          className="break-inside-avoid overflow-hidden rounded-lg"
        >
          <Skeleton className="h-[200px] w-full rounded-lg bg-gray-200" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-4 text-center text-4xl font-extrabold sm:text-5xl"
      >
        Photo Gallery
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-10 text-center font-medium text-gray-600 sm:text-lg"
      >
        Our service photos
      </motion.p>

      {/* Loading state */}
      {isLoading && renderSkeletons()}

      {/* Content state */}
      {!isLoading && projects.length > 0 && (
        <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: getRandomY() }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: getRandomDelay(),
                ease: "backOut",
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="break-inside-avoid overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={project.imageUrl}
                width={600}
                height={400}
                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                alt={`Gallery image ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {!isLoading && projects.length === 0 && (
        <div className="flex h-64 items-center justify-center">
          <p className="text-gray-500">No photos found</p>
        </div>
      )}
    </div>
  );
}
