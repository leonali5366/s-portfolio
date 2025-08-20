"use client";
import Cursor from "@/components/Cursor";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import Investment from "@/components/Investment";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import ReactLenis from "@studio-freight/react-lenis";
import { useRef, useState } from "react";
import ProcessRes from "@/components/ProcessRes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutMe";
import Customer from "@/components/Customer";
import Personal from "@/components/Personal";
import VideoSwiper from "@/components/VideoSwiper";
import ProjectCard from "@/components/ProjectCard";
import Services from "@/components/Services";
import FacebookPixel from "@/components/FacebookPixel";
// import Tilt from "@/components/Tilt";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const aboutus = useRef();
  const pricing = useRef();
  const contact = useRef();
  const aboutMe = useRef();
  const home = useRef();
  const testimonial = useRef();
  const process = useRef();
  const processRes = useRef();
  const project = useRef();

  // Function to handle scrolling to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
    });
  };
  const [isVisible, setIsVisible] = useState(true);
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1, smoothTouch: true }}>
      <main className="relative">
        <FacebookPixel />
        <Header
          scrollToSection={scrollToSection}
          aboutMe={aboutMe}
          aboutus={aboutus}
          pricing={pricing}
          home={home}
          project={project}
          process={process}
          processRes={processRes}
          contact={contact}
          testimonial={testimonial}
          setIsHovered={setIsHovered}
        />
        <Cursor
          isHovered={isHovered}
          setIsVisible={setIsVisible}
          isVisible={isVisible}
        />
        <Hero setIsHovered={setIsHovered} home={home} />
        {/* <Tilt
          setIsHovered={setIsHovered}
          home={home}
          aboutMe={aboutMe}
          scrollToSection={scrollToSection}
          setIsVisible={setIsVisible}
        /> */}
        <Customer
          setIsHovered={setIsHovered}
          scrollToSection={scrollToSection}
          aboutMe={aboutMe}
        />
        <Investment
          scrollToSection={scrollToSection}
          pricing={pricing}
          setIsHovered={setIsHovered}
          contact={contact}
        />
        <Personal aboutMe={aboutMe} setIsHovered={setIsHovered} />
        <ProjectCard setIsHovered={setIsHovered} project={project} />
        <Services setIsHovered={setIsHovered} />
        {/* <ImageSlider /> */}
        <Process process={process} />
        <ProcessRes processRes={processRes} />
        <AboutUs aboutus={aboutus} />
        <VideoSwiper />
        <div className="flex xl:flex-row max-xl:py-10 flex-col items-center justify-center gap-x-5 bg-[#121212] text-white">
          <Contact contact={contact} />
          <Testimonial testimonial={testimonial} />
        </div>
        <Footer
          setIsHovered={setIsHovered}
          scrollToSection={scrollToSection}
          contact={contact}
        />
      </main>
    </ReactLenis>
  );
}
