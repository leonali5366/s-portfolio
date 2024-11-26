import React from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import Magnet from "./Magnet";

const Investment = () => {
  return (
    <div className="bg-[#121212] sm:py-[150px] py-10 sm:px-0 px-5">
      <div className="max-w-[1400px] mx-auto space-y-10 flex flex-col gap-y-10">
        <h1 className="sm:text-[84px] font-mono">The Investment</h1>
        <div className="flex sm:flex-row flex-col sm:gap-x-20 gap-y-10 h-auto">
          <div className="w-full sm:h-screen bg-[#282828] sm:p-3 p-2">
            <div className="w-full h-full border sm:p-[50px] p-5 flex flex-col items-center justify-between gap-y-7">
              <h1 className="sm:text-[46px] text-2xl font-mono border-b-2 text-nowrap sm:leading-[4rem]">
                Business
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
          <div className="w-full h-screen bg-[#282828] p-3">
            <div className="w-full h-full border p-[50px] flex flex-col items-center justify-between gap-y-7">
              <h1 className="text-[46px] font-mono border-b-2 text-nowrap">
                Webshop
              </h1>
              <ul className="flex flex-col gap-y-3">
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone size={30} className="min-w-6" />
                  <p className="text-[22px] font-light text-left mt-2">
                    You have your dashboard for efficiently managing orders.
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone size={30} className="min-w-6" />
                  <p className="text-[22px] font-light text-left mt-2">
                    Links with payment providers like Mollie, Sisow, Stripe etc.
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone size={30} className="min-w-6" />
                  <p className="text-[22px] font-light text-left mt-2">
                    Responsive design ( Desktop & mobile-friendly )
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone size={30} className="min-w-6" />
                  <p className="text-[22px] font-light text-left mt-2">
                    SEO Setup and marketing tools integration
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone size={30} className="min-w-6" />
                  <p className="text-[22px] font-light text-left mt-2">
                    Upload more than 20+ Products with Variation
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone size={30} className="min-w-6" />
                  <p className="text-[22px] font-light text-left mt-2">
                    Fast Response and Timely Delivery
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone size={30} className="min-w-6" />
                  <p className="text-[22px] font-light text-left mt-2">
                    24/7 Support Let&apos;s get started. (1h replay)
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone size={30} className="min-w-6" />
                  <p className="text-[22px] font-light text-left mt-2">
                    Support 15 Days after complete project
                  </p>
                </li>
              </ul>
              <h1 className="text-xl text-pretty">
                Do you want to start an online web store or is your existing
                webshop ready for a renewal? (website name) creates rare sites
                that correspond to your desires. Dashboard makes managing new
                orders easy.
              </h1>
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
        <div className="flex justify-center">
          <div className="w-[47%] h-screen bg-[#282828] p-3">
            <div className="w-full h-full border p-[50px] flex flex-col items-center justify-between gap-y-7">
              <h1 className="text-[46px] font-mono border-b-2 text-nowrap">
                Redesign
              </h1>
              <ul className="flex flex-col gap-y-3">
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone size={30} className="min-w-6" />
                  <p className="text-[22px] font-light text-left mt-2">
                    100% unique custom web design
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone size={30} className="min-w-6" />
                  <p className="text-[22px] font-light text-left mt-2">
                    SEO Setup and marketing tools integration
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone size={30} className="min-w-6" />
                  <p className="text-[22px] font-light text-left mt-2">
                    Completely your property
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone size={30} className="min-w-6" />
                  <p className="text-[22px] font-light text-left mt-2">
                    Fast Response and Timely Delivery
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone size={30} className="min-w-6" />
                  <p className="text-[22px] font-light text-left mt-2">
                    Including satisfaction guarantee
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone size={30} className="min-w-6" />
                  <p className="text-[22px] font-light text-left mt-2">
                    Support 15 Days after complete project
                  </p>
                </li>
                <li className="flex gap-x-5 items-center">
                  <IoCheckmarkDone size={30} className="min-w-6" />
                  <p className="text-[22px] font-light text-left mt-2">
                    24/7 Support Let&apos;s get started. (1h replay)
                  </p>
                </li>
              </ul>
              <h1 className="text-xl text-pretty">
                Dedicated to creating stunning, functional websites tailored to
                your unique business needs. Transform Your Website with a Fresh
                Look and Full Support—Message Us to Get Started Today!
              </h1>
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
