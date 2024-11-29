"use client";
import Cursor from "@/components/Cursor";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import Investment from "@/components/Investment";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import ReactLenis from "@studio-freight/react-lenis";
import { useRef, useState } from "react";
import Customer from "@/components/Customer";
import Personal from "@/components/Personal";
import ProcessRes from "@/components/ProcessRes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutMe";
import Card from "@/components/Card";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const portfolio = useRef(null);
  const aboutus = useRef(null);
  const pricing = useRef(null);

  // Function to handle scrolling to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start", // Align to the top of the viewport
    });
  };

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1, smoothTouch: true }}>
      <main className="relative">
        <Header
          scrollToSection={scrollToSection}
          portfolio={portfolio}
          aboutus={aboutus}
          pricing={pricing}
          setIsHovered={setIsHovered}
        />
        <Cursor isHovered={isHovered} />
        <Hero setIsHovered={setIsHovered} />
        <Personal setIsHovered={setIsHovered} />
        <Investment pricing={pricing} setIsHovered={setIsHovered} />
        <Customer portfolio={portfolio} />
        <Card />
        <Process />
        <ProcessRes />
        <AboutUs aboutus={aboutus} />
        <div className="flex sm:flex-row flex-col items-center justify-center gap-x-5 bg-[#121212] text-white">
          <Contact />
          <Testimonial />
        </div>
        <Footer setIsHovered={setIsHovered} />
      </main>
    </ReactLenis>
  );
}
