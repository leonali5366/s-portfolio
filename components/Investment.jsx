import React from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import Magnet from "./Magnet";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Investment = ({ pricing, setIsHovered }) => {
  useGSAP(() => {
    gsap.from("#text-reveal", {
      y: 40,
      duration: 1,
      opacity: 0,
      scrollTrigger: "#text-reveal",
    });
    gsap.from("#reveal-card-1", {
      y: 40,
      duration: 1,
      opacity: 0,
      delay: 0.5,
      scrollTrigger: "#reveal-card-1",
    });
    gsap.from("#reveal-card-2", {
      y: 40,
      duration: 1,
      opacity: 0,
      delay: 0.5,
      scrollTrigger: "#reveal-card-2",
    });
    gsap.from("#reveal-card-3", {
      y: 40,
      duration: 1,
      opacity: 0,
      delay: 1,
      scrollTrigger: "#reveal-card-3",
    });
  }, []);

  return (
    <div
      className="bg-[#121212] sm:py-[150px] py-10 sm:px-0 px-5 text-white"
      ref={pricing}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col gap-y-10">
        <h1
          className="sm:text-[84px] text-4xl font-mono mb-10"
          id="text-reveal"
        >
          The Investment
        </h1>
        <div className="flex sm:flex-row flex-col sm:gap-x-20 gap-y-10 h-auto">
          <div
            className="w-full sm:h-screen bg-[#282828] sm:p-3 p-2"
            id="reveal-card-1"
          >
            <div className="w-full h-full border sm:p-[50px] p-5 flex flex-col items-center justify-between gap-y-7">
              <h1 className="sm:text-[46px] text-2xl font-mono border-b-2 text-nowrap sm:leading-[4rem]">
                Business Website Design
              </h1>
              <ul className="flex flex-col gap-y-3">
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    A complete custom website
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    Optimized SEO for Google Ranking
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    Responsive design (Desktop & mobile-friendly )
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    Custom unlimited page design as your requirements
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    Fast Response and Timely Delivery
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    24/7 Support Let&apos;s get started. (1h replay)
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    Support 15 Days after complete project
                  </p>
                </li>
              </ul>
              <h1 className="sm:text-xl sm:text-left text-center">
                Your website must have a professional look and be well
                functioning. Based on your wishes, we create custom websites for
                you.
              </h1>
              <div className="flex items-center gap-x-3 justify-center sm:hidden">
                <button className="text-lg uppercase">contact us</button>
                <button className="size-12 rounded-full bg-white flex items-center justify-center">
                  <BsArrowUpRight className="text-black text-[22px] rotate-45" />
                </button>
              </div>
              <Magnet>
                <div
                  className="flex items-center gap-x-5 group"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", // Center the content inside the element
                    transition: "transform 0.3s ease-out",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <button className="flex gap-x-5 items-center text-2xl font-medium group uppercase w-fit text-nowrap">
                    Contact Us
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
              </Magnet>
            </div>
          </div>
          <div
            className="w-full sm:h-screen bg-[#282828] sm:p-3 p-2"
            id="reveal-card-2"
          >
            <div className="w-full h-full border sm:p-[50px] p-5 flex flex-col items-center justify-between gap-y-7">
              <h1 className="sm:text-[46px] text-2xl font-mono border-b-2 text-nowrap sm:leading-[4rem]">
                Ecomerce Website Design
              </h1>
              <ul className="flex flex-col gap-y-3">
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    You have your dashboard for efficiently managing orders.
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    Links with payment providers like Mollie, Sisow, Stripe etc.
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    Responsive design ( Desktop & mobile-friendly )
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    SEO Setup and marketing tools integration
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    Upload more than 20+ Products with Variation
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    Fast Response and Timely Delivery
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    24/7 Support Let&apos;s get started. (1h replay)
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    Support 15 Days after complete project
                  </p>
                </li>
              </ul>
              <h1 className="sm:text-xl sm:text-left text-center">
                Do you want to start an online web store or is your existing
                webshop ready for a renewal? (website name) creates rare sites
                that correspond to your desires. Dashboard makes managing new
                orders easy.
              </h1>
              <div className="flex items-center gap-x-3 justify-center sm:hidden">
                <button className="text-lg uppercase">contact us</button>
                <button className="size-12 rounded-full bg-white flex items-center justify-center">
                  <BsArrowUpRight className="text-black text-[22px] rotate-45" />
                </button>
              </div>
              <Magnet>
                <div
                  className="flex items-center gap-x-5 group"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", // Center the content inside the element
                    transition: "transform 0.3s ease-out",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <button className="flex gap-x-5 items-center text-2xl font-medium group uppercase w-fit text-nowrap">
                    Contact Us
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
              </Magnet>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:justify-center">
          <div
            className="sm:w-[47%] w-full sm:h-screen bg-[#282828] sm:p-3 p-2"
            id="reveal-card-3"
          >
            <div className="w-full h-full border sm:p-[50px] p-5 flex flex-col items-center justify-between gap-y-7">
              <h1 className="sm:text-[46px] text-2xl font-mono border-b-2 text-nowrap sm:leading-[4rem]">
                Redesign Website
              </h1>
              <ul className="flex flex-col gap-y-3">
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    100% unique custom web design
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    SEO Setup and marketing tools integration
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    Completely your property
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    Fast Response and Timely Delivery
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    Including satisfaction guarantee
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    Support 15 Days after complete project
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone className="sm:min-w-6 min-w-5 sm:text-[30px] text-lg" />
                  <p className="sm:text-[22px] text-lg font-light text-left mt-2">
                    24/7 Support Let&apos;s get started. (1h replay)
                  </p>
                </li>
              </ul>
              <h1 className="sm:text-xl sm:text-left text-center">
                Dedicated to creating stunning, functional websites tailored to
                your unique business needs. Transform Your Website with a Fresh
                Look and Full Support—Message Us to Get Started Today!
              </h1>
              <div className="flex items-center gap-x-3 justify-center sm:hidden">
                <button className="text-lg uppercase">contact us</button>
                <button className="size-12 rounded-full bg-white flex items-center justify-center">
                  <BsArrowUpRight className="text-black text-[22px] rotate-45" />
                </button>
              </div>
              <Magnet>
                <div
                  className="flex items-center gap-x-5 group"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", // Center the content inside the element
                    transition: "transform 0.3s ease-out",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <button className="flex gap-x-5 items-center text-2xl font-medium group uppercase w-fit text-nowrap">
                    Contact Us
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
              </Magnet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
