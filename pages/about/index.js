import React, { useState } from "react";
// icons
import {
  FaJs,
  FaReact,
  FaAndroid,
  FaJava,
  FaPython,
  FaAws,
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
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiExpress,
  SiRedux,
  SiNodedotjs,
  SiAudacity,
  SiBlockchaindotcom,
  SiEthereum,
  SiRemix,
  SiSolidity,
  SiVirtualbox,
  SiMqtt,
  SiDart,
  SiNotion,
  SiSlack,
  SiZoho,
  SiGithub,
  SiAzuredevops,
  SiDocker,
  SiElasticsearch,
  SiKibana,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

import { RiFlutterLine } from "react-icons/ri";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaJs key="js" />,
          <SiTypescript key="ts" />,
          <FaReact key="react" />,
          <SiNextdotjs key="django" />,
          <SiTailwindcss key="tailwind" />,
          <SiAntdesign key="antd" />,
          <SiExpress key="exp" />,
          <SiRedux key="redux" />,
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
          <SiDart key="dart" />,
        ],
      },
      {
        title: "Data Base",
        icons: [
          <SiDjango key="django" />,
          <SiPostgresql key="postgre" />,
          <SiNodedotjs key="node" />,
          <SiMongodb key="mongo" />,
          <SiFirebase key="firebase" />,
        ],
      },
      {
        title: "Web3",
        icons: [
          <SiBlockchaindotcom key="block" />,
          <SiEthereum key="eth" />,
          <SiRemix key="remix" />,
          <SiSolidity key="sol" />,
        ],
      },
      {
        title: "DevOps",
        icons: [
          <FaAws key="aws_dev" />,
          <SiAzuredevops key="azure" />,
          <SiDocker key="docker" />,
          <SiElasticsearch key="es" />,
          <SiKibana key="kibana" />,
        ],
      },
      {
        title: "Game Development",
        icons: [
          <SiCsharp key="csharp" />,
          <SiBlender key="blender" />,
          <SiUnity key="unity" />,
          <SiAudacity key="auda" />,
        ],
      },
      {
        title: "Ethical Hacking",
        icons: [
          <SiKalilinux key="kalilinux" />,
          <SiWireshark key="wireshark" />,
          <SiVmware key="vmware" />,
          <SiVirtualbox key="vbox" />,
        ],
      },
      {
        title: "IOT",
        icons: [
          <FaPython key="python" />,
          <SiArduino key="arduino" />,
          <FaAws key="aws" />,
          <SiMqtt key="mqtt" />,
        ],
      },
      {
        title: "Project Management",
        icons: [
          <SiNotion key="notion" />,
          <SiSlack key="slack" />,
          <SiZoho key="zoho" />,
        ],
      },

      {
        title: "Version Control",
        icons: [<SiGithub key="github" />],
      },
    ],
  },
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
        title: "Full stack - Xcel Corps Company",
        stage: "2024 (1 Month)",
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
  // {
  //   title: "Certifications",
  //   info: [
  //     {
  //       title: "Ethical Hacking - NPTEL",
  //       stage: "2021",
  //     },
  //     {
  //       title: "UI/UX - Great Learning ",
  //       stage: "2021",
  //     },
  //     {
  //       title: "No-Code AI Model - Navan.ai ",
  //       stage: "2021",
  //     },
  //     {
  //       title: "Python - NPTEL/ Data Flair",
  //       stage: "2022",
  //     },
  //     {
  //       title: "Java - KSIT",
  //       stage: "2022",
  //     },
  //     {
  //       title: "Chess - VTU",
  //       stage: "2022",
  //     },
  //     {
  //       title: "Computer Networks - NPTEL",
  //       stage: "2024",
  //     },
  //   ],
  // },
];

import AboutAvatar from "../../components/AboutAvatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-36 text-center xl:text-left overflow-y-hidden overflow-x-hidden">
      <Circles />

      <AboutAvatar />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 xl:ml-[300px]">
        <div className="flex flex-col justify-center xl:mt-10">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] h2 xl:text-5xl lg:text-5xl md:text-6xl sm:text-6xl"
          >
            About <span className="text-accent"> Me </span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] text-sm mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 hidden xl:block"
            style={{ textAlign: "justify" }}
          >
            Motivated and detail-oriented Computer Science Engineering student
            with a strong foundation in programming languages including Java,
            Python, C, and web development technologies like HTML, CSS, and
            JavaScript. Proficient in full-stack web development using
            frameworks such as Django and React.js, along with expertise in
            Next.js and Flutter for mobile development. Experienced in utilizing
            component libraries like Shadcn and antd to enhance user interfaces.
            Skilled in DevOps practices, leveraging AWS, Docker, and ES for
            efficient deployment and maintenance of applications. Proficient in
            project management tools such as Notion and Slack, ensuring
            streamlined collaboration and organization. Well-versed in version
            control systems, particularly GitHub. Possesses excellent
            communication and teamwork abilities, coupled with a strong
            analytical mindset for problem-solving and innovation. I bring over
            1 years of IT experience as a Junior Software Developer (SDE).
            Committed to continuous learning, I hold 10+ certifications,
            reflecting my passion for innovation and excellence in the
            ever-evolving tech landscape.
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
                  <CountUp start={0.2} end={1} duration={5} /> +
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]"
                >
                  Years of experience
                </div>
              </div>
              <div
                className="relative flex-1 after:w-[1px] 
              after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase">Projects</div>
              </div>
              <div
                className="relative flex-1 after:w-[1px] 
              after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase">Certifications</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] overflow-y-hidden"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((items, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 grow
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
                  style={{ maxHeight: "300px", overflowY: "hidden" }}
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
