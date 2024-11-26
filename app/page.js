"use client";
import AboutMe from "@/components/AboutMe";
import Cursor from "@/components/Cursor";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import HorizontalSec from "@/components/HorizontalSec";
import Investment from "@/components/Investment";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import { useGSAP } from "@gsap/react";
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useRef, useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import img3 from "../app/images/img3.jpg";
import img4 from "../app/images/img4.jpg";
import Card from "@/components/Card";
import Customer from "@/components/Customer";
import Personal from "@/components/Personal";
import Magnet from "@/components/Magnet";



export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1, smoothTouch: true }}>
      <main className="relative">
        <Header setIsHovered={setIsHovered} />
        <Cursor isHovered={isHovered} />
        {/* <div className="min-w-full min-h-screen" /> */}
        <Hero setIsHovered={setIsHovered} />
        <Personal/>
        <Investment />
        <Customer />
        {/* <Card /> */}
        {/* <HorizontalSec /> */}
        <Process />
        <AboutMe />
        <Testimonial />
      </main>
    </ReactLenis>
  );
}
