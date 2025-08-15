/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiSearch,
  FiImage,
  FiShoppingCart,
  FiRepeat,
  FiBarChart2,
  FiChevronRight,
} from "react-icons/fi";
import Cursor from "@/components/Cursor";
import Link from "next/link";
import ReactLenis from "@studio-freight/react-lenis";

const PPCPage = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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
              Google Ads{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Management (PPC)
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            >
              Instant Visibility. Targeted Traffic. Maximum ROI.
            </motion.p>
            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-400 max-w-4xl mx-auto"
            >
              At Shuvo Design, we create and manage high-performing Google Ads
              campaigns that get you noticed by the right audience at the right
              time. Whether your goal is more leads, online sales, or brand
              awareness, our PPC strategies are designed to deliver measurable
              results fast.
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
              Google Ads Services
            </span>
          </motion.h2>

          <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Search Ads */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="h-2 bg-gradient-to-r from-amber-600 to-yellow-500"></div>
              <div className="p-8">
                <div className="bg-gradient-to-r from-amber-600 to-yellow-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <FiSearch className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Search Ads</h3>
                <p className="text-gray-400 mb-6">
                  Appear at the top of Google search results when potential
                  customers are looking for your products or services.
                </p>
                <ul className="space-y-3">
                  {[
                    "Keyword targeting & bidding strategies",
                    "Ad copywriting & optimization",
                    "Competitor analysis",
                    "Conversion-focused campaigns",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Display Ads */}
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
                  <FiImage className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Display Ads</h3>
                <p className="text-gray-400 mb-6">
                  Show your ads on millions of websites, apps, and videos to
                  boost brand awareness.
                </p>
                <ul className="space-y-3">
                  {[
                    "Creative, eye-catching visuals",
                    "Audience segmentation & targeting",
                    "Remarketing to past visitors",
                    "Brand visibility across Google Display Network",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Shopping Ads */}
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
                  <FiShoppingCart className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Shopping Ads</h3>
                <p className="text-gray-400 mb-6">
                  Perfect for e-commerce businesses looking to boost product
                  sales.
                </p>
                <ul className="space-y-3">
                  {[
                    "Product feed optimization",
                    "Campaign setup & management",
                    "High-intent audience targeting",
                    "Real-time performance tracking",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Remarketing Campaigns */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="h-2 bg-gradient-to-r from-pink-600 to-rose-500"></div>
              <div className="p-8">
                <div className="bg-gradient-to-r from-pink-600 to-rose-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <FiRepeat className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Remarketing Campaigns
                </h3>
                <p className="text-gray-400 mb-6">
                  Reconnect with people who&apos;ve already shown interest in
                  your business.
                </p>
                <ul className="space-y-3">
                  {[
                    "Tailored remarketing lists",
                    "Personalized ad messaging",
                    "Multi-channel retargeting",
                    "Increase conversions from warm leads",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-2"></div>
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
              Shuvo Design for PPC?
            </span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question:
                  "Why should I choose Shuvo Design for PPC advertising?",
                answer:
                  "We are certified Google Ads experts with experience managing campaigns for businesses of all sizes, ensuring your ad spend delivers results.",
              },
              {
                question: "How do you manage PPC budgets effectively?",
                answer:
                  "Whether your budget is big or small, we optimize every penny to maximize clicks, conversions, and overall return on investment (ROI).",
              },
              {
                question: "What makes your PPC approach different?",
                answer:
                  "Our strategies are data-driven, using analytics, A/B testing, and performance tracking to make informed campaign decisions.",
              },
              {
                question: "Will I know where my ad budget is going?",
                answer:
                  "Absolutely! We provide transparent reporting so you can see exactly where your money is spent and the results it's generating.",
              },
              {
                question: "Can you improve my PPC ROI?",
                answer:
                  "Yes — we focus on ROI-driven campaigns, optimizing for higher conversions and better cost-per-click (CPC) performance.",
              },
              {
                question: "Do you manage all types of Google Ads campaigns?",
                answer:
                  "Yes. We handle Search Ads, Display Ads, Shopping Ads, and Remarketing Campaigns, tailored to your goals.",
              },
              {
                question: "How quickly can I see PPC results?",
                answer:
                  "PPC ads can start generating traffic and leads within 24 hours of launch, though ongoing optimization improves results over time.",
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
                    <FiChevronRight className="text-amber-400 mr-2" />
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
            Our PPC{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
              Management Process
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Research & Strategy",
                description: "Understanding your audience & competitors",
              },
              {
                title: "Campaign Setup",
                description: "Designing high-converting ad groups",
              },
              {
                title: "Optimization",
                description: "Continuous A/B testing & bid adjustments",
              },
              {
                title: "Reporting & Scaling",
                description: "Improving results month after month",
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
                <div className="text-amber-400 text-2xl font-bold mb-2">
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
            className="bg-gradient-to-r from-amber-600/20 to-yellow-600/20 p-12 rounded-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Get More Clicks. More Leads. More Sales. 🚀
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Google Ads works — but only when managed by experts. Let&apos;s
              grow your business with targeted PPC campaigns.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-full text-lg"
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

export default PPCPage;
