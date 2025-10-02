/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import ShinyText from "./ShinyText";

const Services = ({ setIsHovered }) => {
  const services = [
    {
      title: "Website design and development",
      link: "/services/web-design-development",
      icon: "/images/Website-design-and-development.png",
      description:
        "Custom, responsive websites tailored to your brand with modern technologies and optimized performance.",
      startDate: "Feb 2020",
      image:
        "https://html.ravextheme.com/redox/dark/assets/imgs/project/image-1.webp",
    },
    {
      title: "Search Engine Optimization (SEO)",
      link: "/services/search-engine-optimization",
      icon: "/images/search-engine-optimization.png",
      description:
        "Increase organic traffic with comprehensive SEO strategies including keyword research and content optimization.",
      startDate: "Mar 2020",
      image:
        "https://html.ravextheme.com/redox/dark/assets/imgs/project/image-2.webp",
    },
    {
      title: "Google Ads Management (PPC)",
      link: "/services/google-ads-management",
      icon: "/images/google-add-management.png",
      description:
        "Maximize ROI with expertly managed pay-per-click campaigns targeting your ideal customers.",
      startDate: "Apr 2020",
      image:
        "https://html.ravextheme.com/redox/dark/assets/imgs/project/image-3.webp",
    },
    {
      title: "Social Media Ads Management",
      link: "/services/social-media-ads-management",
      icon: "/images/social-media.png",
      description:
        "Engage your audience with targeted social media campaigns across all major platforms.",
      startDate: "May 2020",
      image:
        "https://html.ravextheme.com/redox/dark/assets/imgs/project/image-4.webp",
    },
  ];

  return (
    <section className="md:py-20 py-10 px-4 sm:px-6 lg:px-8 bg-[#121212] min-h-screen">
      <div className="md:mx-[5rem]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white md:mb-16 mb-8"
        >
          <ShinyText
            text="Featured Services"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <ServiceCard
                service={service}
                index={index}
                setIsHovered={setIsHovered}
              />
            </div>
          ))}
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
      className={`relative group cursor-pointer flex flex-col gap-3`}
    >
      {/* Content */}
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.3 }}
        className="relative p-8 rounded-3xl h-[36rem] overflow-hidden"
      >
        <motion.img
          src={service.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl z-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.3 }}
        />
      </motion.div>
      <div className="flex flex-col gap-1">
        <p className="text-xl text-white font-mono">{service.title}</p>
        <p className="font-mono text-sm text-gray-400">{service.startDate}</p>
      </div>
    </div>
  );
};

export default Services;
