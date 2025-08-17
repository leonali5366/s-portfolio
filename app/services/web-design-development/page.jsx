/* eslint-disable @next/next/no-img-element */
"use client";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import ServiceNav from "@/components/ServiceNav";
import Testimonial from "@/components/Testimonial";
import VideoSwiper from "@/components/VideoSwiper";
import ReactLenis from "@studio-freight/react-lenis";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { FiCode, FiCheckCircle, FiChevronDown } from "react-icons/fi";
import {
  Shield,
  XCircle,
  Tag,
  Zap,
  Globe,
  BarChart,
  FileText,
} from "lucide-react";

const WebDesignPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const contact = useRef();
  const testimonial = useRef();
  // Function to handle scrolling to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
    });
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      question: "What makes Shuvo Design different from other agencies?",
      answer:
        "At Shuvo Design, every project begins with in-depth research and a clear strategy. We focus on understanding your brand, target audience, and goals before creating any campaign.",
    },
    {
      icon: <XCircle className="w-6 h-6 text-purple-400" />,
      question: "Do you focus more on creativity or performance?",
      answer:
        "We combine both. Our creative & strategic approach ensures your ads look amazing while being performance-driven for maximum engagement, leads, and conversions.",
    },
    {
      icon: <Tag className="w-6 h-6 text-cyan-400" />,
      question: "Will my campaigns be optimized for SEO and speed?",
      answer:
        "Yes. Even in ad landing pages, we ensure fast load times, SEO best practices, and high conversion rates to give you the best ROI possible.",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      question: "Can you create scalable campaigns for growing businesses?",
      answer:
        "Absolutely! We design future-proof ad strategies that can easily scale as your business expands, whether you're running local campaigns or targeting global markets.",
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      question: "Do you provide ongoing support after launching my ads?",
      answer:
        "Yes, we offer end-to-end support — from campaign setup and creative design to performance tracking, optimization, and scaling.",
    },
    {
      icon: <BarChart className="w-6 h-6 text-pink-400" />,
      question: "How do you ensure ads reach the right audience?",
      answer:
        "We use advanced targeting methods including demographics, interests, behavior, and remarketing strategies to make sure your ads reach the most relevant people.",
    },
    {
      icon: <FileText className="w-6 h-6 text-orange-400" />,
      question: "Will I get reports on my ad performance?",
      answer:
        "Yes, we provide transparent performance reports so you can track impressions, clicks, conversions, and ROI — keeping you in control of your ad spend.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1, smoothTouch: true }}>
      <div className="bg-[#121212] text-white min-h-screen">
        <header className="flex items-center justify-between px-5 h-16 fixed top-0 w-full bg-black/60 backdrop-blur z-[999]">
          <Link
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href={"/"}
            className="w-auto h-full"
          >
            <abbr title="Home">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-auto h-full"
              />
            </abbr>
          </Link>
          <ul className="2xl:flex hidden items-center gap-x-5 text-xl text-white">
            <Link href={"/"}>
              <li className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300 cursor-pointer">
                Home
              </li>
            </Link>
            <Link href={"/services"}>
              <li
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group cursor-pointer hover:border-b-2 border-b-2 border-transparent hover:border-indigo-400 transition-all duration-300"
              >
                <span className="text-white font-medium">Services</span>

                <div className="absolute right-0 mt-1 w-max rounded-lg bg-gray-900/95 backdrop-blur-lg shadow-lg border border-gray-800 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-10">
                  <ul className="p-2">
                    <Link href={"/services/web-design-development"}>
                      <li className="whitespace-nowrap py-2 px-4 rounded-md text-gray-200 hover:text-white hover:bg-gradient-to-r from-indigo-500/30 to-purple-500/30 transition-all duration-300">
                        Website design and development
                      </li>
                    </Link>
                    <Link href={"/services/search-engine-optimization"}>
                      <li className="py-2 px-4 rounded-md text-gray-200 hover:text-white hover:bg-gradient-to-r from-indigo-500/30 to-purple-500/30 transition-all duration-300">
                        Search Engine Optimization
                      </li>
                    </Link>
                    <Link href={"/services/google-ads-management"}>
                      <li className="py-2 px-4 rounded-md text-gray-200 hover:text-white hover:bg-gradient-to-r from-indigo-500/30 to-purple-500/30 transition-all duration-300">
                        Google Ads Management
                      </li>
                    </Link>
                    <Link href={"/services/social-media-ads-management"}>
                      <li className="py-2 px-4 rounded-md text-gray-200 hover:text-white hover:bg-gradient-to-r from-indigo-500/30 to-purple-500/30 transition-all duration-300">
                        Social Media Ads Management
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
            </Link>
            <li
              className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300 cursor-pointer"
              onClick={() => scrollToSection(testimonial)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Testimonial
            </li>
            <li
              className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-[border] duration-300 cursor-pointer"
              onClick={() => scrollToSection(contact)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Contact me
            </li>
          </ul>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="size-[50px] rounded-full bg-[#455CE9] cursor-pointer flex items-center justify-center z-10 2xl:hidden"
          >
            <div
              className={`w-full before:content-[''] before:block before:h-px before:w-2/5 before:top-[5px] after:top-[-5px] before:mx-auto before:bg-white before:relative before:transition-transform before:duration-300 after:content-[''] after:block after:h-px after:w-2/5 after:mx-auto after:bg-white after:relative after:transition-transform after:duration-300 ${
                isActive
                  ? "before:transform before:-rotate-45 after:transform after:rotate-45 after:mt-2"
                  : ""
              }`}
            ></div>
          </div>
          <AnimatePresence mode="wait">
            {isActive && <ServiceNav />}
          </AnimatePresence>
        </header>
        <Cursor
          isHovered={isHovered}
          setIsVisible={setIsVisible}
          isVisible={isVisible}
        />
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Website Design{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                & Development
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            >
              Bring Your Vision to Life with Shuvo Design
            </motion.p>
            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-400 max-w-4xl mx-auto"
            >
              At Shuvo Design, we craft beautiful, high-performing websites that
              not only look stunning but also deliver real business results.
              Whether you&apos;re a startup or an established brand, our team
              creates custom solutions that reflect your identity and connect
              with your audience.
            </motion.p>
          </motion.div>
        </section>

        {/* Expertise Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Expertise
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WordPress Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="p-8">
                <div className="bg-gradient-to-r from-purple-600 to-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <div className="size-10">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <circle
                          cx="16"
                          cy="16"
                          r="14"
                          fill="#028CB0"
                        ></circle>{" "}
                        <path
                          d="M6.45538 16C6.45538 19.7823 8.65538 23.04 11.8369 24.5885L7.28462 12.1162C6.73798 13.338 6.45541 14.6615 6.45538 16ZM16 25.5446C17.1085 25.5446 18.1746 25.35 19.1731 25.0031L19.1054 24.8762L16.1692 16.8377L13.3092 25.1554C14.1554 25.4092 15.0608 25.5446 16 25.5446ZM17.3115 11.5238L20.7638 21.7877L21.72 18.6062C22.1262 17.2862 22.4392 16.3385 22.4392 15.5177C22.4392 14.3331 22.0162 13.5208 21.6608 12.8946C21.17 12.0992 20.7215 11.4308 20.7215 10.6523C20.7215 9.77231 21.3815 8.96 22.3292 8.96H22.4477C20.689 7.34546 18.3874 6.45141 16 6.45538C14.4192 6.45509 12.8632 6.84777 11.4718 7.59809C10.0805 8.34842 8.89746 9.43285 8.02923 10.7538L8.63846 10.7708C9.63692 10.7708 11.1769 10.6438 11.1769 10.6438C11.7015 10.6185 11.7608 11.3715 11.2446 11.4308C11.2446 11.4308 10.7285 11.4985 10.1446 11.5238L13.6308 21.8638L15.7208 15.6023L14.2315 11.5238C13.898 11.5054 13.565 11.4772 13.2331 11.4392C12.7169 11.4054 12.7762 10.6185 13.2923 10.6438C13.2923 10.6438 14.8662 10.7708 15.8054 10.7708C16.8038 10.7708 18.3438 10.6438 18.3438 10.6438C18.86 10.6185 18.9277 11.3715 18.4115 11.4308C18.4115 11.4308 17.8954 11.49 17.3115 11.5238ZM20.7977 24.25C22.2416 23.4104 23.4399 22.2066 24.2729 20.7589C25.1059 19.3112 25.5444 17.6703 25.5446 16C25.5446 14.3415 25.1215 12.7846 24.3769 11.4223C24.5281 12.9211 24.3012 14.4339 23.7169 15.8223L20.7977 24.25ZM16 27C13.0826 27 10.2847 25.8411 8.22183 23.7782C6.15893 21.7153 5 18.9174 5 16C5 13.0826 6.15893 10.2847 8.22183 8.22183C10.2847 6.15893 13.0826 5 16 5C18.9174 5 21.7153 6.15893 23.7782 8.22183C25.8411 10.2847 27 13.0826 27 16C27 18.9174 25.8411 21.7153 23.7782 23.7782C21.7153 25.8411 18.9174 27 16 27Z"
                          fill="white"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">WordPress Websites</h3>
                <p className="text-gray-400 mb-6">
                  The world&apos;s most popular CMS—ideal for blogs, business
                  websites, e-commerce, and more.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Easy to manage and update",
                    "Flexible themes & plugins",
                    "SEO-friendly structure",
                    "Scalable for future growth",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <FiCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Webflow Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="p-8">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <img
                    src="https://dhygzobemt712.cloudfront.net/Logo/Social_Circle_Blue.svg"
                    alt=""
                    className="size-8"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">Webflow Websites</h3>
                <p className="text-gray-400 mb-6">
                  A modern, no-code/low-code platform for visually stunning and
                  responsive sites.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Pixel-perfect designs",
                    "Fully responsive layouts",
                    "Lightning-fast loading",
                    "Custom animations & interactions",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <FiCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Next.js Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="p-8">
                <div className="bg-gradient-to-r from-amber-600 to-yellow-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <FiCode className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Custom-Coded (Next.js)
                </h3>
                <p className="text-gray-400 mb-6">
                  For maximum performance, flexibility, and scalability.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Blazing-fast speed with SSR",
                    "Highly secure architecture",
                    "Fully tailored to your needs",
                    "Perfect for complex platforms",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <FiCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-[#111] rounded-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            {" "}
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}
              Shuvo Design?{" "}
            </span>{" "}
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] rounded-xl shadow-md border border-gray-800"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5"
                >
                  <div className="flex items-center gap-3 text-left">
                    {faq.icon}
                    <h3 className="text-lg font-semibold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <FiChevronDown
                    className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180 text-blue-400" : ""
                    }`}
                  />
                </button>

                {/* Answer with smooth expand */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-14 pb-5 text-gray-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        <PhotoGallery />

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Process
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Discovery & Planning",
                description: "Understanding your goals and audience",
              },
              {
                title: "Design & Prototyping",
                description: "Crafting user-friendly, modern layouts",
              },
              {
                title: "Development",
                description:
                  "Bringing the design to life with clean, optimized code",
              },
              {
                title: "Launch & Optimization",
                description: "Ensuring a flawless, high-performance website",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all"
              >
                <div className="text-blue-400 text-2xl font-bold mb-2">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-12 rounded-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Let&apos;s create something extraordinary—whether it&apos;s a
              WordPress masterpiece, a sleek Webflow design, or a lightning-fast
              Next.js platform.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-full text-lg"
            >
              📞 Contact Us Today
            </motion.button>
          </motion.div>
        </section>
        <VideoSwiper />
        <div className="flex xl:flex-row max-xl:py-10 flex-col items-center justify-center gap-x-5 bg-[#121212] text-white">
          <Contact contact={contact} />
          <Testimonial testimonial={testimonial} />
        </div>
        <Footer
          setIsHovered={setIsHovered}
          scrollToSection={scrollToSection}
          contact={contact}
        />
      </div>
    </ReactLenis>
  );
};

export default WebDesignPage;
