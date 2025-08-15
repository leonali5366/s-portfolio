/* eslint-disable @next/next/no-img-element */
"use client";
import Cursor from "@/components/Cursor";
import ReactLenis from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  FiCode,
  FiLayers,
  FiZap,
  FiCheckCircle,
  FiChevronRight,
} from "react-icons/fi";

const WebDesignPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
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
                  <FiLayers className="text-2xl text-white" />
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
                  <FiZap className="text-2xl text-white" />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Shuvo Design?
            </span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question:
                  "What makes Shuvo Design different from other agencies?",
                answer:
                  "At Shuvo Design, every project begins with in-depth research and a clear strategy. We focus on understanding your brand, target audience, and goals before creating any campaign.",
              },
              {
                question: "Do you focus more on creativity or performance?",
                answer:
                  "We combine both. Our creative & strategic approach ensures your ads look amazing while being performance-driven for maximum engagement, leads, and conversions.",
              },
              {
                question: "Will my campaigns be optimized for SEO and speed?",
                answer:
                  "Yes. Even in ad landing pages, we ensure fast load times, SEO best practices, and high conversion rates to give you the best ROI possible.",
              },
              {
                question:
                  "Can you create scalable campaigns for growing businesses?",
                answer:
                  "Absolutely! We design future-proof ad strategies that can easily scale as your business expands, whether you're running local campaigns or targeting global markets.",
              },
              {
                question:
                  "Do you provide ongoing support after launching my ads?",
                answer:
                  "Yes, we offer end-to-end support — from campaign setup and creative design to performance tracking, optimization, and scaling.",
              },
              {
                question: "How do you ensure ads reach the right audience?",
                answer:
                  "We use advanced targeting methods including demographics, interests, behavior, and remarketing strategies to make sure your ads reach the most relevant people.",
              },
              {
                question: "Will I get reports on my ad performance?",
                answer:
                  "Yes, we provide transparent performance reports so you can track impressions, clicks, conversions, and ROI — keeping you in control of your ad spend.",
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
                    <FiChevronRight className="text-blue-400 mr-2" />
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
      </div>
    </ReactLenis>
  );
};

export default WebDesignPage;
