"use client";

import { useState, useEffect } from "react";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiAndroidstudio,
  SiDart,
  SiFirebase,
  SiMongodb,
  SiTypescript,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiRedux,
  SiSocketdotio,
  SiDjango,
  SiAntdesign,
  SiPostgresql,
  SiBlockchaindotcom,
  SiEthereum,
  SiSolidity,
  SiAmazonaws,
  SiMqtt,
  SiAmazoniam,
  SiAmazonec2,
} from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FaLocationArrow } from "react-icons/fa6";

import { PinContainer } from "./ui/3d-pin";
import Link from "next/link";
import { RiNftFill } from "react-icons/ri";

// data
const Projects = [
  {
    title: "Chat Application",
    path: "/Chat_App.png",
    bg: "/Chat_App.png",
    width: 250,
    des: "Real time Chat Application-MERN",
    tools: [
      <SiMongodb key="monogo" />,
      <SiExpress key="express" />,
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiTailwindcss key="tailwind" />,
      <SiRedux key="redux" />,
      <SiSocketdotio key="socketio" />,
    ],
    source: "Deployed on Render",
    url: "https://chatforever.onrender.com/",
  },
  {
    title: "AWS IOT Core Project",
    path: "/AWS.jpg",
    bg: "/AWS.jpg",
    des: "IOT Communication (Confedential)",
    width: 250,
    tools: [
      <SiReact key="react" />,
      <SiRedux key="redux" />,
      <SiAmazonaws key="aws" />,
      <SiAmazoniam key="iam" />,
      <SiAmazonec2 key="ec2" />,
      <SiMqtt key="mqtt" />,
    ],
    source: "Deployed on AWS",
    url: "https://gk-portfoio.netlify.app/",
  },
  {
    title: "Web3",
    path: "/Web3.png",
    bg: "/Web3.png",
    des: "Certificate Validation System",
    width: 400,
    tools: [
      <SiSolidity key="solidity" />,
      <SiBlockchaindotcom key="blochchain" />,
      <SiEthereum key="ethereum" />,
      <SiMongodb key="mongo" />,
      <SiNextdotjs key="next" />,
      <SiTailwindcss key="tailwind" />,
      <RiNftFill key="nft" />,
    ],
    source: "Render",
    url: "https://synergy-certificate-validation-using.onrender.com/",
  },
  {
    title: "Weather App",
    path: "/Weather_App1.jpg",
    bg: "/Weather_App1.jpg",
    width: 180,
    des: "Flutter Based Project",
    tools: [
      <SiAndroidstudio key="androidStudio" />,
      <SiFlutter key="flutter" />,
      <SiDart key="dart" />,
      <SiFirebase key="firebase" />,
    ],
    source: "GitHub",
    url: "https://github.com/Gopala05/Flutter_Weather_App",
  },
  {
    title: "CRM Project",
    path: "/CRM.avif",
    bg: "/CRM.avif",
    des: "Real time CRM Project (Confedential)",
    width: 250,
    tools: [
      <SiDjango key="django" />,
      <SiPostgresql key="postgre" />,
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiRedux key="redux" />,
      <SiTypescript key="ts" />,
      <SiAntdesign key="antd" />,
    ],
    source: "Deployed on Azure",
    url: "https://main--frabjous-mooncake-48fb11.netlify.app/",
  },
  {
    title: "Tour Management System",
    path: "/TMS.png",
    bg: "/TMS.png",
    des: "DBMS based Project",
    width: 270,
    tools: [
      <SiDjango key="django" />,
      <SiPostgresql key="postgre" />,
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiRedux key="redux" />,
      <SiTypescript key="ts" />,
      <SiAntdesign key="antd" />,
    ],
    source: "GitHub",
    url: "https://github.com/Gopala05/Tour-Management_Frontend",
  },
];

// Breakpoints for different screen sizes
const breakpoints = {
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
};

const WorkSlider = () => {
  const [screenSize, setScreenSize] = useState("xl");

  // Function to update screenSize state based on window.innerWidth
  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= breakpoints.xl) {
      setScreenSize("xl");
    } else if (width >= breakpoints.md) {
      setScreenSize("md");
    } else {
      setScreenSize("sm");
    }
  };

  // UseEffect hook to handle resizing of window
  useEffect(() => {
    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);
    // Call handleResize on initial load
    handleResize();
    // Clean up event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      spaceBetween={0}
      slidesPerView={screenSize === "xl" ? 3 : 1}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <div className="flex flex-wrap h-[20vh] items-base justify-center p-4 gap-16 mt-10">
        {Projects.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex xl:p-0 items-center justify-center sm:p-40 sm:pt-0 sm:pr-60"
            >
              <div
                className="lg:min-h-[32.5rem] h-[25rem] mb-10 flex items-center justify-center"
                key={item.id}
              >
                <PinContainer
                  title={item.source}
                  className="bg-secondary/30 p-2 min-h-80 min-w-72 lg:h-[50vh] lg:w-[20vw]"
                >
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative bg-primary/30 flex items-center justify-center min-h-40 h-full lg:w-[19vw] lg:h-[25vh] overflow-hidden  mb-10">
                      <div
                        className="relative w-full h-full max-h-40 lg:max-h-full rounded-3xl overflow-hidden blur-sm"
                        style={{ backgroundColor: "#13162D" }}
                      >
                        <img src={item.bg} alt="bgimg" />
                      </div>
                      <img
                        src={item.path}
                        alt="Project Image"
                        width={screenSize === "xl" ? item.width : "130vw"}
                        className="z-10 absolute bottom-0 rounded-3xl min-h-40"
                      />
                    </div>

                    <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                      {item.title}
                    </h1>

                    <p
                      className="lg:text-sm lg:font-normal font-light text-sm line-clamp-2"
                      style={{
                        color: "#BEC1DD",
                        margin: "1vh 0",
                      }}
                    >
                      {item.des}
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3">
                      <div className="flex items-center">
                        {item.tools.map((icon, index) => (
                          <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * index + 2}px)`,
                            }}
                          >
                            {icon}
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center items-center">
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                      </div>
                    </div>
                  </Link>
                </PinContainer>
              </div>
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
  );
};

export default WorkSlider;
