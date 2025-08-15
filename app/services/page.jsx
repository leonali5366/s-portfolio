"use client";
import Cursor from "@/components/Cursor";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { FiCode, FiSearch, FiDollarSign, FiShare2 } from "react-icons/fi";

const Services = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const services = [
    {
      title: "Website Design & Development",
      link: "/services/web-design-development",
      icon: <FiCode className="text-3xl" />,
      description:
        "We craft stunning, high-performance websites tailored to your brand identity with modern technologies like React, Next.js, and headless CMS solutions.",
      features: [
        "Custom UI/UX Design",
        "Mobile-First Approach",
        "E-Commerce Solutions",
        "Ongoing Maintenance",
      ],
      color: "from-purple-600 to-blue-500",
    },
    {
      title: "Search Engine Optimization (SEO)",
      link: "/services/search-engine-optimization",
      icon: <FiSearch className="text-3xl" />,
      description:
        "Boost your organic visibility with our comprehensive SEO strategies that drive targeted traffic and improve search rankings.",
      features: [
        "Keyword Research",
        "Technical SEO Audits",
        "Content Optimization",
        "Link Building",
      ],
      color: "from-emerald-600 to-teal-500",
    },
    {
      title: "Google Ads Management (PPC)",
      link: "/services/google-ads-management",
      icon: <FiDollarSign className="text-3xl" />,
      description:
        "Maximize your advertising ROI with expertly managed pay-per-click campaigns that convert visitors into customers.",
      features: [
        "Campaign Strategy",
        "Ad Copywriting",
        "Conversion Tracking",
        "Performance Analysis",
      ],
      color: "from-amber-600 to-yellow-500",
    },
    {
      title: "Social Media Ads Management",
      link: "/services/social-media-ads-management",
      icon: <FiShare2 className="text-3xl" />,
      description:
        "Engage your ideal audience with data-driven social media campaigns across all major platforms.",
      features: [
        "Platform-Specific Strategies",
        "Audience Targeting",
        "Creative Development",
        "ROI Optimization",
      ],
      color: "from-pink-600 to-rose-500",
    },
  ];
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212] min-h-screen overflow-hidden">
      <Cursor
        isHovered={isHovered}
        setIsVisible={setIsVisible}
        isVisible={isVisible}
      />
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We deliver comprehensive digital solutions to help your business
            thrive in the online world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ServiceCard
                service={service}
                index={index}
                setIsHovered={setIsHovered}
              />
            </motion.div>
          ))}
        </div>

        {/* Animated Decorative Elements */}
        <div className="mt-24 relative">
          <motion.div
            animate={{
              x: [0, 20, 0],
              transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
            }}
            className="absolute -left-20 top-1/3 w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full filter blur-3xl opacity-20"
          />
          <motion.div
            animate={{
              y: [0, -20, 0],
              transition: { repeat: Infinity, duration: 8, ease: "easeInOut" },
            }}
            className="absolute -right-20 bottom-0 w-40 h-40 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full filter blur-3xl opacity-20"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index, setIsHovered }) => {
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full flex flex-col bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-[#1a1a1a]/50"
    >
      {/* Gradient Header */}
      <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

      {/* Card Content - flex-grow allows this to take remaining space */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <div
            className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mr-4`}
          >
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
        </div>

        <p className="text-gray-400 mb-6">{service.description}</p>

        <ul className="space-y-2 mb-6 flex-grow">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center text-gray-300">
              <svg
                className="w-4 h-4 mr-2 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Button Container - mt-auto pushes it to bottom */}
        <div className="mt-auto pt-4">
          <Link href={`${service.link}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 px-4 rounded-lg font-medium bg-gradient-to-r ${service.color} text-white hover:shadow-lg transition-all`}
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
