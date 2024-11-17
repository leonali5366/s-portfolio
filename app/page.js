"use client";
import Cursor from "@/components/Cursor";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  useGSAP(() => {
    gsap.from("#text", { y: 100, duration: 0.7, stagger: 0.2 });
    gsap.from("#line", { y: -500, duration: 2, delay:0.2 });
  }, []);
  return (
    <main className="relative">
      <Header setIsHovered={setIsHovered} />
      <Cursor isHovered={isHovered} />
      {/* <div className="min-w-full min-h-screen" /> */}
      <Hero />
      <div className="bg-[#F5F5F5] text-black">
        <div className="max-w-[1550px] mx-auto py-32 space-y-44">
          <div className="w-full flex justify-center gap-x-28">
            <div className="flex w-full h-fit sticky top-10">
              <div className="h-auto w-1 mr-5 overflow-hidden">
                <div className="w-full h-full bg-black" id="line" />
              </div>
              <div className="w-full flex flex-col gap-y-10">
                <div className="w-full text-[68px] font-mono flex flex-col text-nowrap">
                  <div className="overflow-hidden">
                    <p id="text">You'r losing customers,</p>
                  </div>
                  <div className="overflow-hidden">
                    <p id="text">if your business dosen't</p>
                  </div>
                  <div className="overflow-hidden">
                    <p id="text">have a website!</p>
                  </div>
                </div>
                <p className="text-[34px]">
                  That's why a strong online presence <br /> is vital for your
                  company
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-y-10 w-full">
              <h1 className="text-[74px] font-mono">90%</h1>
              <p className="text-[26px]  text-gray-600">
                of people look for local services online first, according to
                data. Not having a website means missing out on potential new
                clients.
              </p>
              <p className="text-[26px]  text-gray-600">
                A website helps your company rank higher in search results,
                providing you with a greater competitive edge.
              </p>
              <p className="text-[26px]  text-gray-600">
                In fact, customers today browse websites before picking up the
                phone. People expect you to have a website. Without one, they
                might think you're new, unskilled, or not interested in your
                business.
              </p>
              <p className="text-[26px] font-medium">
                In other words, if you want to attract more clients and gain
                their trust, you need a website!
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-end gap-x-14">
            <img
              src="https://cdn.prod.website-files.com/66277b11e48ec235af18f9cc/66277b11e48ec235af18faaa_Vlad-Tro-talking-on-phone%400.25x.webp"
              alt=""
              className="w-full h-[1050px] object-cover"
            />
            <div className="w-full h-full space-y-10">
              <p className="text-[28px] text-gray-600 font-normal">
                I often hear this from small business owners I work with. Yet,
                to effectively represent your brand, you need more than just
                social media.
              </p>
              <p className="text-[28px] text-gray-600 font-normal">
                A social media profile is free and takes only 5 minutes to set
                up. Because anyone can use a Facebook business page, it won't
                help you stand out.
              </p>
              <p className="text-[28px] text-gray-800 font-medium">
                Whereas a professionally-designed website enables you to:
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="text-[28px] text-gray-600 font-normal flex items-center gap-x-5">
                  <GiCheckMark />
                  Make a striking first impression that lasts;
                </li>
                <li className="text-[28px] text-gray-600 font-normal flex items-center gap-x-5">
                  <GiCheckMark />
                  Improve your brand image and customer retention;
                </li>
                <li className="text-[28px] text-gray-600 font-normal flex items-center gap-x-5">
                  <GiCheckMark />
                  Increase your company's credibility;
                </li>
                <li className="text-[28px] text-gray-600 font-normal flex items-center gap-x-5">
                  <GiCheckMark />
                  And most of all, stand out from your competitors.
                </li>
              </ul>
              <p className="text-[28px] text-gray-800 font-medium">
                To put it simply, your website is the backbone of your business
                that generates leads and helps you grow 24/7!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-36 bg-[#121212]">
        <div className="max-w-[1550px] mx-auto flex items-center justify-between gap-x-28">
          <div className="w-full flex flex-col gap-y-10">
            <h6 className="text-[65px] font-mono">
              Hi! I'm Vlad — your website designer
            </h6>
            <p className="text-[28px] font-light text-slate-300">
              I'm here to help you get more clients so you can focus on the
              reason you probably started your business: making the world a more
              beautiful place.
            </p>
            <p className="text-[28px] font-light text-slate-300">
              I design all-in-one, cost-effective websites that set you apart
              from your competitors, represent your values, and build your brand
              authority.
            </p>
            <p className="text-[28px] font-light text-slate-300">
              As a person, I'm a very positive and self-disciplined human being.
              Attention to detail — is at the heart of everything that I do. I
              strive to improve my work with each project, prioritizing quality
              over anything else.
            </p>
          </div>
          <img
            src="https://cdn.prod.website-files.com/66277b11e48ec235af18f9cc/66277b11e48ec235af18fab5_Vlad-Tro-smiling-standing%400.25x.webp"
            alt=""
            className="h-[1000px] w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
