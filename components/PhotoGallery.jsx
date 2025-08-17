"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function PhotoGallery() {
  const images = [
    "https://res.cloudinary.com/dknscjfgf/image/upload/v1744979282/blog13_kj4b4d.jpg",
    "https://res.cloudinary.com/dknscjfgf/image/upload/v1744979280/blog3_vwcf2f.jpg",
    "https://res.cloudinary.com/dknscjfgf/image/upload/v1744979279/blog1_eruhy9.jpg",
    "https://res.cloudinary.com/dknscjfgf/image/upload/v1744979278/blog7_joaodx.jpg",
    "https://res.cloudinary.com/dknscjfgf/image/upload/v1744979277/blog6_vhj3p0.jpg",
    "https://res.cloudinary.com/dknscjfgf/image/upload/v1744979275/blog5_agprik.jpg",
    "https://res.cloudinary.com/dknscjfgf/image/upload/v1744979272/blog4_ewput8.jpg",
    "https://res.cloudinary.com/dknscjfgf/image/upload/v1744979264/blog14_glgj1v.jpg",
    "https://res.cloudinary.com/dknscjfgf/image/upload/v1744979261/blog10_pmrij1.jpg",
    "https://res.cloudinary.com/dknscjfgf/image/upload/v1744979261/blog12_jeyenk.jpg",
    "https://res.cloudinary.com/dknscjfgf/image/upload/v1744979260/blog8_jgqzdo.jpg",
  ];

  // Random delay between 0 and 0.5 seconds for each image
  const getRandomDelay = () => Math.random() * 0.5;

  // Random initial y position between 20 and 100px
  const getRandomY = () => 20 + Math.random() * 80;

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

      {/* Masonry Style Columns */}
      <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
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
              src={src}
              width={600}
              height={400}
              className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
              alt={`Gallery image ${index + 1}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
