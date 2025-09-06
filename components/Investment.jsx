import React from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import Magnet from "./Magnet";
import GoogleCalendarScheduler from "./GoogleCalendarScheduler";
import { motion } from "framer-motion";

const Investment = ({ pricing, setIsHovered }) => {
  return (
    <div className="bg-[#121212] xl:py-[150px] py-10 text-white" ref={pricing}>
      <div className="flex flex-col gap-y-10">
        {/* header */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="xl:text-[84px] md:text-6xl max-xl:text-center text-4xl font-mono md:mb-10 px-5"
        >
          The Investment
        </motion.h1>

        {/* packages grid */}
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 gap-5 px-5 items-stretch">
          {/* package 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[700px] mx-auto w-full bg-[#282828] sm:p-3 p-2 flex"
          >
            <div className="w-full border xl:p-[50px] p-5 flex flex-col justify-between gap-y-7">
              <h1 className="sm:text-[36px] text-2xl font-mono border-b-2 text-nowrap sm:leading-[4rem]">
                Business Website Design
              </h1>
              <ul className="flex flex-col gap-y-5 flex-1">
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> A complete custom
                  website
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> Optimized SEO for
                  Google Ranking
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> Responsive design
                  (Desktop & mobile-friendly)
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> Custom unlimited
                  page design
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> Fast Response and
                  Timely Delivery
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> 24/7 Support (1h
                  reply)
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> 15 Days Support
                  after project
                </li>
              </ul>
              <h1 className="sm:text-xl sm:text-left text-center">
                Your website must be professional and functional. We create
                custom websites based on your wishes.
              </h1>
              <Magnet>
                <GoogleCalendarScheduler>
                  <div className="flex items-center gap-x-3 justify-center xl:hidden">
                    <button className="text-lg uppercase">
                      make a schedule
                    </button>
                    <button className="size-12 rounded-full bg-white flex items-center justify-center">
                      <BsArrowUpRight className="text-black text-[22px] rotate-45" />
                    </button>
                  </div>
                </GoogleCalendarScheduler>
                <GoogleCalendarScheduler>
                  <div
                    className="flex items-center gap-x-5 group max-xl:hidden"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      transition: "transform 0.3s ease-out",
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <button className="flex gap-x-5 items-center text-2xl font-medium group uppercase w-fit text-nowrap">
                      make a schedule
                    </button>
                    <button className="size-14 rounded-full bg-transparent border-dashed group-hover:bg-white border-2 group-hover:scale-[1.2] transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                      <FiArrowRight
                        size={24}
                        className="group-hover:text-black absolute text-4xl transition-all transform duration-300 ease-out opacity-100 group-hover:translate-y-[-50px] group-hover:opacity-0"
                      />
                      <FiArrowRight
                        size={24}
                        className="group-hover:text-black absolute text-4xl translate-y-12 opacity-0 transition-all transform duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                      />
                    </button>
                  </div>
                </GoogleCalendarScheduler>
              </Magnet>
            </div>
          </motion.div>

          {/* package 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-[700px] mx-auto w-full bg-[#282828] sm:p-3 p-2 flex"
          >
            <div className="w-full border xl:p-[50px] p-5 flex flex-col justify-between gap-y-7">
              <h1 className="sm:text-[36px] text-xl font-mono border-b-2 text-nowrap sm:leading-[4rem]">
                E-Commerce Website Design
              </h1>
              <ul className="flex flex-col gap-y-3 flex-1">
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> Dashboard for
                  efficiently managing orders
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> Payment integrations
                  (Stripe, Mollie, etc.)
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> Responsive design
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> SEO + Marketing
                  tools
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> Upload 20+ Products
                  with Variations
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> Fast Response &
                  Delivery
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> 24/7 Support (1h
                  reply)
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> 15 Days Support
                  after project
                </li>
              </ul>
              <h1 className="xl:text-xl md:text-base sm:text-left text-center">
                Start a new webshop or refresh your existing one with a custom
                dashboard for easy order management.
              </h1>
              <Magnet>
                <GoogleCalendarScheduler>
                  <div className="flex items-center gap-x-3 justify-center xl:hidden">
                    <button className="text-lg uppercase">
                      make a schedule
                    </button>
                    <button className="size-12 rounded-full bg-white flex items-center justify-center">
                      <BsArrowUpRight className="text-black text-[22px] rotate-45" />
                    </button>
                  </div>
                </GoogleCalendarScheduler>
                <GoogleCalendarScheduler>
                  <div
                    className="flex items-center gap-x-5 group max-xl:hidden"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      transition: "transform 0.3s ease-out",
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <button className="flex gap-x-5 items-center text-2xl font-medium group uppercase w-fit text-nowrap">
                      make a schedule
                    </button>
                    <button className="size-14 rounded-full bg-transparent border-dashed group-hover:bg-white border-2 group-hover:scale-[1.2] transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                      <FiArrowRight
                        size={24}
                        className="group-hover:text-black absolute text-4xl transition-all transform duration-300 ease-out opacity-100 group-hover:translate-y-[-50px] group-hover:opacity-0"
                      />
                      <FiArrowRight
                        size={24}
                        className="group-hover:text-black absolute text-4xl translate-y-12 opacity-0 transition-all transform duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                      />
                    </button>
                  </div>
                </GoogleCalendarScheduler>
              </Magnet>
            </div>
          </motion.div>

          {/* package 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-[700px] mx-auto w-full bg-[#282828] sm:p-3 p-2 flex"
          >
            <div className="w-full border xl:p-[50px] p-5 flex flex-col justify-between gap-y-7">
              <h1 className="sm:text-[36px] text-2xl font-mono border-b-2 text-nowrap sm:leading-[4rem]">
                Redesign Website
              </h1>
              <ul className="flex flex-col gap-y-3 flex-1">
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> 100% unique custom
                  design
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> SEO & Marketing
                  integration
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> Property completion
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> Fast Response &
                  Delivery
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> Satisfaction
                  guarantee
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> 15 Days Support
                  after project
                </li>
                <li className="flex sm:gap-x-5 gap-x-3 items-center sm:text-[22px] font-light">
                  <IoCheckmarkDone className="min-w-fit" /> 24/7 Support (1h
                  reply)
                </li>
              </ul>
              <h1 className="sm:text-xl sm:text-left text-center">
                Transform your website with a fresh look and full support.
                Tailored to your unique business needs.
              </h1>
              <Magnet>
                <GoogleCalendarScheduler>
                  <div className="flex items-center gap-x-3 justify-center xl:hidden">
                    <button className="text-lg uppercase">
                      make a schedule
                    </button>
                    <button className="size-12 rounded-full bg-white flex items-center justify-center">
                      <BsArrowUpRight className="text-black text-[22px] rotate-45" />
                    </button>
                  </div>
                </GoogleCalendarScheduler>
                <GoogleCalendarScheduler>
                  <div
                    className="flex items-center gap-x-5 group max-xl:hidden"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      transition: "transform 0.3s ease-out",
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <button className="flex gap-x-5 items-center text-2xl font-medium group uppercase w-fit text-nowrap">
                      make a schedule
                    </button>
                    <button className="size-14 rounded-full bg-transparent border-dashed group-hover:bg-white border-2 group-hover:scale-[1.2] transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                      <FiArrowRight
                        size={24}
                        className="group-hover:text-black absolute text-4xl transition-all transform duration-300 ease-out opacity-100 group-hover:translate-y-[-50px] group-hover:opacity-0"
                      />
                      <FiArrowRight
                        size={24}
                        className="group-hover:text-black absolute text-4xl translate-y-12 opacity-0 transition-all transform duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                      />
                    </button>
                  </div>
                </GoogleCalendarScheduler>
              </Magnet>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
