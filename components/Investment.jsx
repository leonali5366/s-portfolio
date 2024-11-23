import React from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

const Investment = () => {
  return (
    <div className="bg-[#121212] pb-[150px]">
      <div className="max-w-[1400px] mx-auto space-y-10">
        <h1 className="text-[84px] font-mono">The Investment</h1>
        <div className="flex gap-x-20 h-auto">
          <div className="w-full h-full bg-[#282828] p-3">
            <div className="w-full h-full border p-[50px] flex flex-col items-center justify-center gap-y-3">
              <h1 className="text-[46px] font-mono border-b-2">Standard</h1>
              <span className="text-[20px]">up to 8 pages</span>
              <ul className="flex flex-col gap-y-3">
                <li className="flex gap-x-5">
                  <IoCheckmarkDone size={50} className="min-w-8" />
                  <p className="text-[22px] font-light text-left mt-2">
                    <strong>Custom website</strong> that speaks to your audience
                    and helps you in getting more customers
                  </p>
                </li>
                <li className="flex gap-x-5">
                  <IoCheckmarkDone size={50} className="min-w-8" />
                  <p className="text-[22px] font-light text-left mt-2">
                    <strong>Responsive design</strong> make your website look
                    great on all screen sizes, from phones to desktops
                  </p>
                </li>
                <li className="flex gap-x-5">
                  <IoCheckmarkDone size={50} className="min-w-8" />
                  <p className="text-[22px] font-light text-left mt-2">
                    <strong>SEO</strong> (Search Engine Optimization) will
                    increase the number of people who find your website through
                    organic search and raise your brand awareness
                  </p>
                </li>
                <li className="flex gap-x-5">
                  <IoCheckmarkDone size={50} className="min-w-8" />
                  <p className="text-[22px] font-light text-left mt-2">
                    <strong>One year of post-project support</strong> so you can
                    always rely on me for assistance
                  </p>
                </li>
                <li className="flex gap-x-5 opacity-50">
                  <IoCheckmarkDone size={50} className="min-w-8" />
                  <p className="text-[22px] font-light text-left mt-2 line-through">
                    <strong>Blog</strong> will help you educate your customers,
                    establish your company&apos;s authority, and earn greater
                    visibility
                  </p>
                </li>
                <li className="flex gap-x-5 opacity-50">
                  <IoCheckmarkDone size={50} className="min-w-8" />
                  <p className="text-[22px] font-light text-left mt-2 line-through">
                    <strong>Eye-catching animations</strong> will boost your
                    visitor engagement and keep them on your website longer,
                    lowering your bounce rate.
                  </p>
                </li>
              </ul>
              <h1 className="text-[50px] font-mono">$3500</h1>
              <div className="flex gap-x-5 items-center text-2xl font-medium group uppercase w-fit">
                Book a free call
                <button className="size-16 rounded-full bg-transparent border-dashed group-hover:bg-opacity-100 bg-opacity-0 bg-white border-2 group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                  <BsArrowRight
                    size={24}
                    className="group-hover:text-black transition-colors duration-300"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-[#282828] p-3">
            <div className="w-full h-full border p-[50px] flex flex-col items-center justify-center gap-y-3">
              <h1 className="text-[46px] font-mono border-b-2">Enhanced</h1>
              <span className="text-[20px]">unlimited number of pages</span>
              <ul className="flex flex-col gap-y-3">
                <li className="flex gap-x-5">
                  <IoCheckmarkDone size={50} className="min-w-8" />
                  <p className="text-[22px] font-light text-left mt-2">
                    <strong>Custom website</strong> that speaks to your audience
                    and helps you in getting more customers
                  </p>
                </li>
                <li className="flex gap-x-5">
                  <IoCheckmarkDone size={50} className="min-w-8" />
                  <p className="text-[22px] font-light text-left mt-2">
                    <strong>Responsive design</strong> make your website look
                    great on all screen sizes, from phones to desktops
                  </p>
                </li>
                <li className="flex gap-x-5">
                  <IoCheckmarkDone size={50} className="min-w-8" />
                  <p className="text-[22px] font-light text-left mt-2">
                    <strong>SEO</strong> (Search Engine Optimization) will
                    increase the number of people who find your website through
                    organic search and raise your brand awareness
                  </p>
                </li>
                <li className="flex gap-x-5">
                  <IoCheckmarkDone size={50} className="min-w-8" />
                  <p className="text-[22px] font-light text-left mt-2">
                    <strong>One year of post-project support</strong> so you can
                    always rely on me for assistance
                  </p>
                </li>
                <li className="flex gap-x-5">
                  <IoCheckmarkDone size={50} className="min-w-8" />
                  <p className="text-[22px] font-light text-left mt-2">
                    <strong>Blog</strong> will help you educate your customers,
                    establish your company&apos;s authority, and earn greater
                    visibility
                  </p>
                </li>
                <li className="flex gap-x-5">
                  <IoCheckmarkDone size={50} className="min-w-8" />
                  <p className="text-[22px] font-light text-left mt-2">
                    <strong>Eye-catching animations</strong> will boost your
                    visitor engagement and keep them on your website longer,
                    lowering your bounce rate.
                  </p>
                </li>
              </ul>
              <h1 className="text-[50px] font-mono">$4500</h1>
              <div className="flex gap-x-5 items-center text-2xl font-medium group uppercase w-fit">
                Book a free call
                <button className="size-16 rounded-full bg-transparent border-dashed group-hover:bg-opacity-100 bg-opacity-0 bg-white border-2 group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                  <BsArrowRight
                    size={24}
                    className="group-hover:text-black transition-colors duration-300"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
