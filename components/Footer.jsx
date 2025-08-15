import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Magnet from "./Magnet";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BsArrowUpRight } from "react-icons/bs";
import GoogleCalendarScheduler from "./GoogleCalendarScheduler";

const Footer = ({ setIsHovered, scrollToSection, contact }) => {
  const magnetRef = useRef(null);

  useEffect(() => {
    const magnetElement = magnetRef.current;

    // Function to handle mouse move event while the mouse is inside the element
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Get the position of the magnet element
      const magnetRect = magnetElement.getBoundingClientRect();
      const magnetX = magnetRect.left + magnetRect.width / 2;
      const magnetY = magnetRect.top + magnetRect.height / 2;

      // Calculate distance between mouse and magnet center
      const deltaX = mouseX - magnetX;
      const deltaY = mouseY - magnetY;

      // Use GSAP to animate the magnet to the mouse position
      gsap.to(magnetElement, {
        x: deltaX / 4, // Scale the movement
        y: deltaY / 4,
        duration: 0.3, // Smooth animation
        ease: "power2.out", // Easing for smoothness
        scale: 1.1, // Slightly scale up the element for magnet effect
      });
    };

    // Function to handle mouse enter event to start the effect
    const handleMouseEnter = () => {
      window.addEventListener("mousemove", handleMouseMove);
    };

    // Function to handle mouse leave event to stop the effect
    const handleMouseLeave = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.to(magnetElement, {
        x: 0,
        y: 0,
        scale: 1, // Reset the scale
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Add event listeners for mouse enter and mouse leave
    magnetElement.addEventListener("mouseenter", handleMouseEnter);
    magnetElement.addEventListener("mouseleave", handleMouseLeave);

    // Clean up event listeners on component unmount
    return () => {
      magnetElement.removeEventListener("mouseenter", handleMouseEnter);
      magnetElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div className="bg-[#F5F5F5] text-black pt-20 flex flex-col xl:gap-y-20 gap-y-10 overflow-hidden xl:px-10 px-5">
      <h1 className="text-center xl:text-7xl md:text-5xl font-mono text-4xl text-pretty">
        Let&apos;s create a custom website that works <br /> for your business &
        increase your sales.
      </h1>
      <p className="text-center xl:text-3xl md:text-2xl text-xl">
        Book a free 30-minute strategy call and we’ll <br /> figure out your
        next best move, together
      </p>
      <div className="flex xl:flex-row flex-col items-center justify-center gap-y-5">
        <GoogleCalendarScheduler>
          <div className="flex items-center gap-x-3 justify-center xl:hidden">
            <button className="text-lg uppercase font-semibold">
              book a 30 min free call
            </button>
            <button className="size-12 rounded-full bg-black flex items-center justify-center">
              <BsArrowUpRight className="text-white text-[22px] rotate-45" />
            </button>
          </div>
        </GoogleCalendarScheduler>
        <div ref={magnetRef} className="w-[400px] relative xl:block hidden">
          <GoogleCalendarScheduler>
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
                Book a 30 min free call
              </button>
              <button className="size-14 rounded-full bg-transparent border-dashed group-hover:bg-black border-black border-2 group-hover:scale-[1.2] transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                <FiArrowRight
                  size={24}
                  className="group-hover:text-white absolute text-4xl transition-all transform duration-300 ease-out opacity-100 group-hover:translate-y-[-50px] group-hover:opacity-0"
                />
                <FiArrowRight
                  size={24}
                  className="group-hover:text-white absolute text-4xl translate-y-12 opacity-0 transition-all transform duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                />
              </button>
            </div>
          </GoogleCalendarScheduler>
        </div>
        {/* <button
          className="underline text-lg font-semibold uppercase underline-offset-8"
          onClick={() => scrollToSection(contact)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          or sent me an email
        </button> */}
      </div>
      <div className="flex flex-col xl:gap-y-5 md:gap-y-3 gap-y-1 mb-5">
        <div className="flex items-center justify-between flex-wrap">
          <h1 className="xl:text-3xl md:text-2xl text-xl">ShuvoDesign</h1>
          <div className="flex items-center gap-x-3">
            <Magnet>
              <a
                href="https://www.linkedin.com/in/shohanur-reza-shuvo/"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Adds security when opening links in new tabs
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="size-8">
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="#0A66C2"
                        d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </a>
            </Magnet>
            <Magnet>
              <a
                href="mailto:rezaclick2022@gmail.com"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="size-8">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
                        fill="#EA4335"
                      ></path>{" "}
                      <path
                        d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
                        fill="#FBBC05"
                      ></path>{" "}
                      <path
                        d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
                        fill="#34A853"
                      ></path>{" "}
                      <path
                        d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
                        fill="#C5221F"
                      ></path>{" "}
                      <path
                        d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
                        fill="#C5221F"
                      ></path>{" "}
                      <path
                        d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z"
                        fill="#C5221F"
                      ></path>{" "}
                      <path
                        d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                        fill="#4285F4"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </a>
            </Magnet>
            <Magnet>
              <a
                href="https://api.whatsapp.com/send/?phone=01771674511&text&type=phone_number&app_absent=0"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Adds security when opening links in new tabs
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="size-7">
                  <svg viewBox="0 0 48 48" fill="#000000">
                    <g id="SVGRepo_iconCarrier">
                      <g
                        id="Icons"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Color-"
                          transform="translate(-700.000000, -360.000000)"
                          fill="#67C15E"
                        >
                          <path
                            d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                            id="Whatsapp"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </a>
            </Magnet>
            <Magnet>
              <a
                href="http://www.youtube.com/@shuvo_design"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Adds security when opening links in new tabs
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="size-8">
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="red"
                        d="M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z"
                      ></path>
                      <path
                        fill="#ffffff"
                        d="M6.593 10.11l3.644-2.098-3.644-2.11v4.208z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </a>
            </Magnet>
            <Magnet>
              <a
                href="https://www.instagram.com/shuvo_design/"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Adds security when opening links in new tabs
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="size-7">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint0_radial_87_7153)"
                      ></rect>{" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint1_radial_87_7153)"
                      ></rect>{" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint2_radial_87_7153)"
                      ></rect>{" "}
                      <path
                        d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                        fill="white"
                      ></path>{" "}
                      <defs>
                        {" "}
                        <radialGradient
                          id="paint0_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                        >
                          {" "}
                          <stop stopColor="#B13589"></stop>{" "}
                          <stop offset="0.79309" stopColor="#C62F94"></stop>{" "}
                          <stop offset="1" stopColor="#8A3AC8"></stop>{" "}
                        </radialGradient>{" "}
                        <radialGradient
                          id="paint1_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                        >
                          {" "}
                          <stop stopColor="#E0E8B7"></stop>{" "}
                          <stop offset="0.444662" stopColor="#FB8A2E"></stop>{" "}
                          <stop offset="0.71474" stopColor="#E2425C"></stop>{" "}
                          <stop
                            offset="1"
                            stopColor="#E2425C"
                            stopOpacity="0"
                          ></stop>{" "}
                        </radialGradient>{" "}
                        <radialGradient
                          id="paint2_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                        >
                          {" "}
                          <stop
                            offset="0.156701"
                            stopColor="#406ADC"
                          ></stop>{" "}
                          <stop offset="0.467799" stopColor="#6A45BE"></stop>{" "}
                          <stop
                            offset="1"
                            stopColor="#6A45BE"
                            stopOpacity="0"
                          ></stop>{" "}
                        </radialGradient>{" "}
                      </defs>{" "}
                    </g>
                  </svg>
                </div>
              </a>
            </Magnet>
            <Magnet>
              <a
                href="https://www.facebook.com/profile.php?id=61575314655271"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Adds security when opening links in new tabs
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="size-8">
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="#1877F2"
                        d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                      ></path>
                      <path
                        fill="#ffffff"
                        d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </a>
            </Magnet>
            <Magnet>
              <a
                href="https://www.behance.net/pixelwebmakers"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Adds security when opening links in new tabs
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="size-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Behance"
                    role="img"
                    viewBox="0 0 512 512"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect
                        width="512"
                        height="512"
                        rx="15%"
                        fill="#4175fa"
                      ></rect>
                      <path
                        d="m346.12 211.86c-73.376 0-73.471 73.1-73.471 73.476 0 0-5.027 73.191 73.471 73.191 0 0 65.465 3.722 65.465-50.938h-33.615s1.114 20.578-30.731 20.578c0 0-33.616 2.237-33.616-33.244h99.081s10.896-83.063-66.584-83.063zm-32.873 57.454s4.099-29.427 33.62-29.427c29.613 0 29.146 29.427 29.146 29.427h-62.766zm-83.987-18.807s29.146-2.142 29.146-36.41c0-34.173-23.838-50.938-54.103-50.938h-99.551v191.36h99.542s60.81 1.866 60.81-56.521c5e-3 0 2.613-47.491-35.844-47.491zm-80.645-53.361h55.684s13.504 0 13.504 19.926-7.916 22.815-16.95 22.815h-52.238v-42.741zm52.894 123.39h-52.894v-51.218h55.684s20.211-.186 20.116 26.352c0 22.353-14.99 24.68-22.906 24.866zm103.45-146.1v23.562h78.969v-23.562h-78.969z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </svg>
                </div>
              </a>
            </Magnet>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black"></div>
        <p className="md:text-base text-center text-sm mt-1">
          ©2025 All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
