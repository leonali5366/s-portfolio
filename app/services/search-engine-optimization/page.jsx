/* eslint-disable @next/next/no-img-element */
"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiSearch,
  FiCpu,
  FiGlobe,
  FiMapPin,
  FiChevronRight,
  FiBarChart2,
} from "react-icons/fi";
import Cursor from "@/components/Cursor";
import Link from "next/link";
import ReactLenis from "@studio-freight/react-lenis";
import ServiceNav from "@/components/ServiceNav";

const SEOPage = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
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
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Search Engine{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Optimization
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            >
              Rank Higher. Get Found. Grow Your Business.
            </motion.p>
            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-400 max-w-4xl mx-auto"
            >
              At Shuvo Design, we provide result-driven SEO services that help
              your business appear at the top of Google search results. Whether
              you&apos;re targeting local customers in Bangladesh, UK, or going
              global, our strategies are designed to increase visibility, drive
              traffic, and boost conversions.
            </motion.p>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              SEO Services
            </span>
          </motion.h2>

          <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* On-Page SEO */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="h-2 bg-gradient-to-r from-emerald-600 to-teal-500"></div>
              <div className="p-8">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <FiSearch className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">On-Page SEO</h3>
                <p className="text-gray-400 mb-6">
                  Optimize every element of your website to improve search
                  rankings.
                </p>
                <ul className="space-y-3">
                  {[
                    "Keyword research & optimization",
                    "SEO-friendly content structure",
                    "Meta tags & heading optimization",
                    "Internal linking & URL structure",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Technical SEO */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
              <div className="p-8">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <FiCpu className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Technical SEO</h3>
                <p className="text-gray-400 mb-6">
                  Ensure your site meets Google&apos;s technical standards.
                </p>
                <ul className="space-y-3">
                  {[
                    "Site speed optimization",
                    "Mobile responsiveness",
                    "XML sitemap & robots.txt",
                    "Fix crawl errors & indexing issues",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Off-Page SEO */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="h-2 bg-gradient-to-r from-purple-600 to-indigo-500"></div>
              <div className="p-8">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <FiGlobe className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Off-Page SEO</h3>
                <p className="text-gray-400 mb-6">
                  Build your website&apos;s authority with trusted backlinks.
                </p>
                <ul className="space-y-3">
                  {[
                    "High-quality link building",
                    "Guest posting & outreach",
                    "Local citations & directory listings",
                    "Brand mentions across the web",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Local SEO */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="h-2 bg-gradient-to-r from-amber-600 to-yellow-500"></div>
              <div className="p-8">
                <div className="bg-gradient-to-r from-amber-600 to-yellow-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <FiMapPin className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Local SEO</h3>
                <p className="text-gray-400 mb-6">
                  Dominate your local market and get more nearby customers.
                </p>
                <ul className="space-y-3">
                  {[
                    "Google Business Profile optimization",
                    "Local keyword targeting",
                    "Map listing & reviews management",
                    "Hyper-local content creation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#1a1a1a] rounded-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Shuvo Design for SEO?
            </span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "Why should I choose Shuvo Design for SEO services?",
                answer:
                  "We deliver proven results, helping businesses boost their search rankings, organic traffic, and conversions through strategic optimization.",
              },
              {
                question: "How do you ensure SEO campaigns are effective?",
                answer:
                  "Our SEO strategies are data-driven — every decision is backed by analytics, keyword research, and competitor analysis to maximize results.",
              },
              {
                question: "Will I get updates on my SEO progress?",
                answer:
                  "Yes. We provide transparent monthly reports with detailed insights on rankings, traffic growth, and conversion improvements.",
              },
              {
                question: "Do you have experience in my industry?",
                answer:
                  "Most likely! We have SEO expertise across multiple niches and markets, adapting strategies to suit your specific business needs.",
              },
              {
                question: "How long does it take to see SEO results?",
                answer:
                  "Typically, you can start seeing noticeable improvements within 3–6 months, depending on your industry, competition, and website condition.",
              },
              {
                question: "What's included in your SEO service?",
                answer:
                  "Our SEO services include technical SEO, on-page optimization, content strategy, backlink building, and performance tracking.",
              },
              {
                question: "Can you handle both local and international SEO?",
                answer:
                  "Yes. Whether you want to rank in your local city or expand globally, we create customized strategies to achieve your goals.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 last:mb-0"
              >
                <div className="border-b border-gray-800 pb-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <FiChevronRight className="text-emerald-400 mr-2" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 pl-6">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Our SEO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Process
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Audit & Analysis",
                description: "Identify strengths, weaknesses & opportunities",
              },
              {
                title: "Strategy Development",
                description: "Create a custom plan for your goals",
              },
              {
                title: "Implementation",
                description:
                  "Apply technical, on-page & off-page optimizations",
              },
              {
                title: "Monitoring & Reporting",
                description: "Track progress & refine strategies",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="text-emerald-400 text-2xl font-bold mb-2">
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
            className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 p-12 rounded-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let&apos;s Get You to the Top of Google 🚀
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              If you want more traffic, leads, and sales, it&apos;s time to
              invest in professional SEO.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                📞 Contact Shuvo Design
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default SEOPage;
