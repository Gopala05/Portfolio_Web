  import React, { useState } from "react";
  // icons
  import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaAndroid,
    FaJava,
    FaPython,
  } from "react-icons/fa";

  import {
    SiAndroidstudio,
    SiUnity,
    SiBlender,
    SiCsharp,
    SiDjango,
    SiKalilinux,
    SiWireshark,
    SiVmware,
    SiWearos,
    SiArduino,
  } from "react-icons/si";

  import { RiAndroidLine, RiFlutterLine } from "react-icons/ri";

  //  data
  const aboutData = [
    {
      title: "skills",
      info: [
        {
          title: "Web Development",
          icons: [
            <FaHtml5 key="html" />,
            <FaCss3 key="css" />,
            <FaJs key="js" />,
            <FaReact key="react" />,
            <SiDjango key="django" />,
          ],
        },
        {
          title: "Android Development",
          icons: [
            <FaAndroid key="android" />,
            <SiWearos key="wearos" />,
            <FaJava key="java" />,
            <RiFlutterLine key="flutter" />,
            <SiAndroidstudio key="androidstudio" />,
          ],
        },
        {
          title: "Game Development",
          icons: [
            <SiCsharp key="csharp" />,
            <SiBlender key="blender" />,
            <SiUnity key="unity" />,
          ],
        },
        {
          title: "Ethical Hacking",
          icons: [
            <SiKalilinux key="kalilinux" />,
            <SiWireshark key="wireshark" />,
            <SiVmware key="vmware" />,
          ],
        },
        {
          title: "IOT",
          icons: [<FaPython key="python" />, <SiArduino key="arduino" />],
        },
      ],
    },
    // {
    //   title: "awards",
    //   info: [
    //     {
    //       title: "Webby Awards - Honoree",
    //       stage: "2011 - 2012",
    //     },
    //     {
    //       title: "Adobe Design Achievement Awards - Finalist",
    //       stage: "2009 - 2010",
    //     },
    //   ],
    // },
    {
      title: "experience",
      info: [
        {
          title: "Junior Software Developer - Tvast Company",
          stage: "2023 - Present",
        },
        {
          title: "Junior Software Developer - Rekonsile Company",
          stage: "2023 - Present",
        },
        {
          title: "Youth for Seva - Volunteer + Intern",
          stage: "2021 - Present",
        },
        {
          title: "National Servic Scheme - Volunteer",
          stage: "2021 - Present",
        },
      ],
    },
    {
      title: "Certifications",
      info: [
        {
          title: "Ethical Hacking - NPTEL",
          stage: "2021",
        },
        {
          title: "UI/UX - Great Learning ",
          stage: "2021",
        },
        {
          title: "No-Code AI Model - Navan.ai ",
          stage: "2021",
        },
        {
          title: "Python - NPTEL/ Data Flair",
          stage: "2022",
        },
        {
          title: "Java - KSIT",
          stage: "2022",
        },
        {
          title: "Chess - VTU",
          stage: "2022",
        },
      ],
    },
  ];

  import Avatar from "../../components/Avatar";
  import Circles from "../../components/Circles";

  import { motion } from "framer-motion";
  import { fadeIn } from "../../variants";

  import CountUp from "react-countup";

  const About = () => {
    const [index, setIndex] = useState(0);
    return (
      <div className="h-full bg-primary/30 py-36 text-center xl:text-left overflow-y-auto">
        <Circles />

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden md:hidden xl:flex absolute bottom-0 -left-[200px]"
        >
          <Avatar />
        </motion.div>
        <div
          className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 xl:ml-[300px]"
          // style={{ marginRight: 0, marginLeft: 300}}
        >
          <div className="flex flex-col justify-center ">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[500px] h2"
              // style={{ fontSize: '36px' }}
            >
              Versatile Tech <span className="text-accent"> Professional </span>
              Fusing Innovation
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 hidden xl:block"
              style={{ textAlign: "justify" }}
            >
              With expertise in languages like HTML, CSS, JavaScript, React,
              Flutter and Java, I bring over 2 years of experience as a Junior
              Software Developer. Committed to continuous learning, I hold 15+
              certifications, reflecting my passion for innovation and excellence
              in the ever-evolving tech landscape.
            </motion.p>
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden md:flex mx-auto xl:mx-0 mb-0 max-w-[500px] "
            >
              <div className="flex flex-1 xl:gap-x-9">
                <div
                  className="relative flex-1 after:w-[1px] 
              after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                    <CountUp start={-2} end={2} duration={5} /> +
                  </div>
                  <div
                    className="text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]"
                  >
                    {" "}
                    Years of experience{" "}
                  </div>
                </div>
                <div
                  className="relative flex-1 after:w-[1px] 
              after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                    <CountUp start={-2} end={5} duration={5} /> +
                  </div>
                  <div
                    className="text-xs uppercase"
                  >
                    {" "}
                    Projects{" "}
                  </div>
                </div>
                <div
                  className="relative flex-1 after:w-[1px] 
              after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                    <CountUp start={-2} end={15} duration={5} /> +
                  </div>
                  <div
                    className="text-xs uppercase"
                  >
                    {" "}
                    Certifications{" "}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[48%] h-[480px] overflow-y-auto"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((items, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={` ${
                      index === itemIndex &&
                      "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 
                    after:h-[2px] after:bg-white after:absolute after:-bottom-1 
                    after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {items.title}
                  </div>
                );
              })}
            </div>
            <div
              className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
            items-center xl:items-start"
            >
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex-1 flex flex-col md:flex-row
                  max-w-max gap-x-2 items-center text-white/60"
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                  >
                    <div className="font-light md-2 md:mb-0">{item.title}</div>
                    <div className="hidden md:flex"> - </div>
                    <div> {item.stage} </div>
                    <div className="flex gap-x-4">
                      {item.icons?.map((icon, itemIndex) => {
                        return (
                          <div className="text-2xl text-white" key={index}>
                            {icon}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  export default About;
