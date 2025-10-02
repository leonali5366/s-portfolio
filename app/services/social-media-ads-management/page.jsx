/* eslint-disable @next/next/no-img-element */
"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiFacebook,
  FiLinkedin,
  FiYoutube,
  FiRepeat,
  FiChevronRight,
} from "react-icons/fi";
import Cursor from "@/components/Cursor";
import Link from "next/link";
import ReactLenis from "@studio-freight/react-lenis";
import ServiceNav from "@/components/ServiceNav";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const SocialMediaAdsPage = () => {
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
            <HoverCard>
              <HoverCardTrigger
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link
                  href={"/services"}
                  className="hover:border-b-2 border-b-2 border-transparent hover:border-white transition-all duration-300"
                >
                  Services
                </Link>
              </HoverCardTrigger>
              <HoverCardContent
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="p-0 bg-black/60 backdrop-blur border border-gray-800"
              >
                <ul className="flex flex-col gap-y-1">
                  <Link href={"/services/web-design-development"}>
                    <li>
                      <Button
                        className="w-full rounded flex justify-start"
                        variant={"secondary"}
                      >
                        Website design and development
                      </Button>
                    </li>
                  </Link>
                  <Link href={"/services/search-engine-optimization"}>
                    <li>
                      <Button
                        className="w-full rounded flex justify-start"
                        variant={"secondary"}
                      >
                        Search Engine Optimization
                      </Button>
                    </li>
                  </Link>
                  <Link href={"/services/google-ads-management"}>
                    <li>
                      <Button
                        className="w-full rounded flex justify-start"
                        variant={"secondary"}
                      >
                        Google Ads Management
                      </Button>
                    </li>
                  </Link>
                  <Link href={"/services/social-media-ads-management"}>
                    <li>
                      <Button
                        className="w-full rounded flex justify-start"
                        variant={"secondary"}
                      >
                        Social Media Ads Management
                      </Button>
                    </li>
                  </Link>
                </ul>
              </HoverCardContent>
            </HoverCard>

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
              Social Media{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                Ads Management
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            >
              Engage. Convert. Grow.
            </motion.p>
            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-400 max-w-4xl mx-auto"
            >
              At Shuvo Design, we craft and manage high-impact social media
              advertising campaigns that connect your brand with the right
              audience — at the right time. From boosting brand awareness to
              generating direct sales, our social media ad strategies are
              designed to maximize every click, like, and share.
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
              Social Media Advertising Services
            </span>
          </motion.h2>

          <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Facebook & Instagram Ads */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-500"></div>
              <div className="p-8">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <FiFacebook className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Facebook & Instagram Ads
                </h3>
                <p className="text-gray-400 mb-6">
                  Reach millions of potential customers with hyper-targeted
                  campaigns.
                </p>
                <ul className="space-y-3">
                  {[
                    "Demographic, interest, and behavior targeting",
                    "Eye-catching visuals & copywriting",
                    "Carousel, story, and video ads",
                    "Remarketing to past visitors and followers",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* LinkedIn Ads */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="p-8">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <FiLinkedin className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">LinkedIn Ads</h3>
                <p className="text-gray-400 mb-6">
                  Perfect for B2B lead generation and professional outreach.
                </p>
                <ul className="space-y-3">
                  {[
                    "Sponsored content & message ads",
                    "Job title, industry, and company targeting",
                    "Lead form campaigns",
                    "Conversion tracking & reporting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* TikTok & YouTube Ads */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="h-2 bg-gradient-to-r from-red-600 to-pink-500"></div>
              <div className="p-8">
                <div className="bg-gradient-to-r from-red-600 to-pink-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <FiYoutube className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  TikTok & YouTube Ads
                </h3>
                <p className="text-gray-400 mb-6">
                  Engage audiences through creative, short-form, and video
                  storytelling.
                </p>
                <ul className="space-y-3">
                  {[
                    "In-feed & branded content ads",
                    "Skippable & non-skippable video campaigns",
                    "Influencer collaborations",
                    "Trend-based ad creatives",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-2"></div>
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
              <div className="h-2 bg-gradient-to-r from-purple-600 to-violet-500"></div>
              <div className="p-8">
                <div className="bg-gradient-to-r from-purple-600 to-violet-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <FiRepeat className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Remarketing Campaigns
                </h3>
                <p className="text-gray-400 mb-6">
                  Reconnect with users who have interacted with your brand
                  before.
                </p>
                <ul className="space-y-3">
                  {[
                    "Custom audience segmentation",
                    "Personalized ad messaging",
                    "Multi-platform retargeting",
                    "Increased conversion rates",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-2"></div>
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
              Shuvo Design for Social Media Ads?
            </span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question:
                  "Why should I choose Shuvo Design for social media advertising?",
                answer:
                  "We are certified social media marketers with expertise in all major ad platforms, including Facebook, Instagram, LinkedIn, TikTok, and more.",
              },
              {
                question: "What makes your social media ads stand out?",
                answer:
                  "Our creative-first approach delivers eye-catching visuals and persuasive ad copy that grab attention and drive action.",
              },
              {
                question: "How do you target the right audience?",
                answer:
                  "We use advanced targeting techniques such as demographics, interests, behaviors, and custom audiences to reach your ideal customers.",
              },
              {
                question: "Can I track the results of my ads?",
                answer:
                  "Yes — we provide transparent performance reports so you can see exactly how your campaigns are performing.",
              },
              {
                question: "Do you handle ads for multiple platforms?",
                answer:
                  "Absolutely! We run campaigns on Facebook, Instagram, LinkedIn, TikTok, Twitter/X, Pinterest, and more.",
              },
              {
                question: "Will social media ads help my business grow?",
                answer:
                  "Yes — our performance-driven strategies focus on increasing leads, sales, and brand awareness for long-term growth.",
              },
              {
                question:
                  "How quickly can I see results from social media ads?",
                answer:
                  "Social media ads can generate engagement and traffic within days, with ongoing optimization delivering better ROI over time.",
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
                    <FiChevronRight className="text-pink-400 mr-2" />
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
            Our Social Media Ads{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
              Management Process
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                title: "Research & Audience Analysis",
                description: "Understanding your ideal customer",
              },
              {
                title: "Creative Development",
                description: "Designing ads that grab attention",
              },
              {
                title: "Campaign Setup",
                description: "Launching optimized ad sets for maximum reach",
              },
              {
                title: "Ongoing Optimization",
                description: "Testing, tweaking, and improving results",
              },
              {
                title: "Reporting & Scaling",
                description: "Expanding campaigns for consistent growth",
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
                <div className="text-pink-400 text-2xl font-bold mb-2">
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
            className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 p-12 rounded-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Turn Followers into Customers. 🚀
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Social media ads work — but only when done strategically. Let us
              help you build campaigns that deliver real results.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-4 px-8 rounded-full text-lg"
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

export default SocialMediaAdsPage;
