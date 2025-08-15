/* eslint-disable @next/next/no-img-element */
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const Services = ({ setIsHovered }) => {
  const services = [
    {
      title: "Website design and development",
      link: "/services/web-design-development",
      icon: "/images/Website-design-and-development.png",
      description:
        "Custom, responsive websites tailored to your brand with modern technologies and optimized performance.",
      startDate: "Feb 2020",
    },
    {
      title: "Search Engine Optimization (SEO)",
      link: "/services/search-engine-optimization",
      icon: "/images/search-engine-optimization.png",
      description:
        "Increase organic traffic with comprehensive SEO strategies including keyword research and content optimization.",
      startDate: "Mar 2020",
    },
    {
      title: "Google Ads Management (PPC)",
      link: "/services/google-ads-management",
      icon: "/images/google-add-management.png",
      description:
        "Maximize ROI with expertly managed pay-per-click campaigns targeting your ideal customers.",
      startDate: "Apr 2020",
    },
    {
      title: "Social Media Ads Management",
      link: "/services/social-media-ads-management",
      icon: "/images/social-media.png",
      description:
        "Engage your audience with targeted social media campaigns across all major platforms.",
      startDate: "May 2020",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Function to get current date in "Month YYYY" format
  const getCurrentDate = () => {
    const options = { year: "numeric", month: "short" };
    return new Date().toLocaleDateString("en-US", options);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#121212] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Our <span className="text-blue-400">Services</span>
        </h2>

        <div
          ref={containerRef}
          className="flex flex-col items-center justify-center"
        >
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const verticalDelay = index * 0.8;

            return (
              <div
                key={index}
                className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12"
              >
                {/* Left-aligned content for even indexes */}
                {isEven ? (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.2, delay: verticalDelay + 0.8 }}
                    className="w-full max-md:mt-8"
                  >
                    <ServiceCard
                      title={service.title}
                      icon={service.icon}
                      description={service.description}
                      isEven={isEven}
                      setIsHovered={setIsHovered}
                      link={service.link}
                    />
                  </motion.div>
                ) : (
                  <div className="w-full" />
                )}

                {/* Vertical line with sequential animation - hidden on mobile */}
                <div className="hidden md:block w-1.5 h-96 bg-white/70 relative">
                  <div className="w-full h-full relative overflow-hidden">
                    <motion.div
                      initial={{ y: 0 }}
                      animate={isInView ? { y: "100%" } : {}}
                      transition={{ duration: 0.8, delay: verticalDelay }}
                      className="absolute top-0 left-0 bottom-0 right-0 bg-[#121212]"
                    />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: verticalDelay + 0.8, duration: 0.2 }}
                    className="absolute top-10 -left-[27px] size-14 rounded-full border-4 bg-slate-900 z-[1] flex items-center justify-center text-2xl"
                  >
                    <img
                      src={`${service.icon}`}
                      alt="icon"
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>

                {/* Right-aligned content for odd indexes */}
                {!isEven ? (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.2, delay: verticalDelay + 0.8 }}
                    className="w-full"
                  >
                    <ServiceCard
                      title={service.title}
                      icon={service.icon}
                      description={service.description}
                      isEven={isEven}
                      link={service.link}
                      setIsHovered={setIsHovered}
                    />
                  </motion.div>
                ) : (
                  <div className="w-full" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  title,
  icon,
  description,
  isEven,
  setIsHovered,
  link,
}) => {
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`h-[300px] bg-[#1f1f1f] border-b-4 ${
        isEven ? "border-blue-400" : "border-blue-400"
      } rounded-md p-6 flex flex-col`}
    >
      <div className="flex items-center gap-4 mb-6">
        <img src={`${icon}`} alt="icon" className="w-10 h-auto" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 flex-grow">{description}</p>
      <div className="mt-auto">
        <Link href={`${link}`}>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded-md text-white font-medium">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
