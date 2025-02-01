import React from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import Magnet from "./Magnet";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const packageContent = [
  {
    title: "Business Website Design",
    benefits: [
      "A complete custom website.",
      "Optimized SEO for Google Ranking.",
      "Responsive design (Desktop & mobile-friendly).",
      "Custom unlimited page design as your requirements.",
      "Fast Response and Timely Delivery",
      "24/7 Support Let&apos;s get started.(1h replay)",
      "Support 15 Days after complete project.",
    ],
    description:
      "Your website must have a professional look and be well functioning. Based on your wishes, we create custom websites for you.",
  },
  {
    title: "Ecomerce Website Design",
    benefits: [
      "You have your dashboard for efficiently managing orders.",
      "Links with payment providers like Mollie, Sisow, Stripe etc.",
      "Responsive design (Desktop & mobile-friendly).",
      "SEO Setup and marketing tools integration.",
      "Upload more than 20+ Products with Variation.",
      "Fast Response and Timely Delivery",
      "24/7 Support Let&apos;s get started.(1h replay)",
      "Support 15 Days after complete project.",
    ],
    description:
      "Do you want to start an online web store or is your existing webshop ready for a renewal? (website name) creates rare sites that correspond to your desires. Dashboard makes managing new orders easy.",
  },
  {
    title: "Redesign Website",
    benefits: [
      "100% unique custom web design",
      "SEO Setup and marketing tools integration",
      "Complete your property",
      "Fast Response and Timely Delivery",
      "Including satisfaction guarantee",
      "Support 15 Days after complete project",
      "24/7 Support Let&apos;s get started.(1h replay)",
    ],
    description:
      "Dedicated to creating stunning, functional websites tailored to your unique business needs. Transform Your Website with a Fresh Look and Full Support—Message Us to Get Started Today!",
  },
];

const Investment = ({ pricing, setIsHovered, scrollToSection, contact }) => {
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
    <div className="bg-[#121212] xl:py-[150px] py-10 text-white" ref={pricing}>
      <div className="flex flex-col gap-y-10">
        {/* header */}
        <h1
          className="xl:text-[84px] md:text-6xl max-xl:text-center text-4xl font-mono mb-10 pl-5"
          id="text-reveal"
        >
          The Investment
        </h1>
        {/* packages */}
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 gap-5 px-5 items-center justify-center">
          {/* package 1 */}
          <div
            className="max-w-[700px] mx-auto w-full sm:h-screen bg-[#282828] sm:p-3 p-2"
            id="reveal-card-1"
          >
            {/* package 1 */}

            <div className="w-full h-full border xl:p-[50px] max-xl:pb-10 p-5 flex flex-col items-center justify-between gap-y-7">
              <h1 className="sm:text-[36px] text-2xl font-mono border-b-2 text-nowrap sm:leading-[4rem]">
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
                    Responsive design (Desktop & mobile-friendly)
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
                Your website must be professional and functional. We create
                custom websites based on your wishes.
              </h1>
              <div
                onClick={() => scrollToSection(contact)}
                className="flex items-center gap-x-3 justify-center xl:hidden"
              >
                <button className="text-lg uppercase">contact us</button>
                <button className="size-12 rounded-full bg-white flex items-center justify-center">
                  <BsArrowUpRight className="text-black text-[22px] rotate-45" />
                </button>
              </div>
              <Magnet>
                <div
                  className="flex items-center gap-x-5 group max-xl:hidden"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", // Center the content inside the element
                    transition: "transform 0.3s ease-out",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => scrollToSection(contact)}
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
          {/* package 2 */}

          <div
            className="max-w-[700px] mx-auto w-full sm:h-screen bg-[#282828] sm:p-3 p-2"
            id="reveal-card-2"
          >
            {/* package 2 */}
            <div className="w-full h-full border xl:p-[50px] max-xl:pb-10 p-5 flex flex-col items-center justify-between gap-y-7">
              <h1 className="sm:text-[36px] text-2xl font-mono border-b-2 text-nowrap sm:leading-[4rem]">
                E-Commerce Website Design
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
                    Responsive design (Desktop & mobile-friendly)
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
                Do you want to start an online web store, or is your existing
                webshop ready for a renewal? (website name) creates rare sites
                that correspond to your desires. The dashboard makes managing
                new orders easy.
              </h1>
              <div
                onClick={() => scrollToSection(contact)}
                className="flex items-center gap-x-3 justify-center xl:hidden"
              >
                <button className="text-lg uppercase">contact us</button>
                <button className="size-12 rounded-full bg-white flex items-center justify-center">
                  <BsArrowUpRight className="text-black text-[22px] rotate-45" />
                </button>
              </div>
              <Magnet>
                <div
                  className="flex items-center gap-x-5 group max-xl:hidden"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", // Center the content inside the element
                    transition: "transform 0.3s ease-out",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => scrollToSection(contact)}
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
          {/* package 3 */}
          <div
            className="max-w-[700px] mx-auto w-full sm:h-screen bg-[#282828] sm:p-3 p-2"
            id="reveal-card-3"
          >
            <div className="w-full h-full border xl:p-[50px] max-xl:pb-10 p-5 flex flex-col items-center justify-between gap-y-7">
              <h1 className="sm:text-[36px] text-2xl font-mono border-b-2 text-nowrap sm:leading-[4rem]">
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
              <div
                onClick={() => scrollToSection(contact)}
                className="flex items-center gap-x-3 justify-center xl:hidden"
              >
                <button className="text-lg uppercase">contact us</button>
                <button className="size-12 rounded-full bg-white flex items-center justify-center">
                  <BsArrowUpRight className="text-black text-[22px] rotate-45" />
                </button>
              </div>
              <Magnet>
                <div
                  className="flex items-center gap-x-5 group max-xl:hidden"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", // Center the content inside the element
                    transition: "transform 0.3s ease-out",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => scrollToSection(contact)}
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
