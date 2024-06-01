import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import HomeDetails from "./homeDetails";
import ResumeLogo from "../public/resume.png";
import { RiFileDownloadFill } from "react-icons/ri";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30">
        <div
          className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
        h-full container mx-auto"
        >
          <HomeDetails />

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <div>
            <button class="Download-button z-10">
              <a
                href="/GK_Resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="download-link"
              >
                <RiFileDownloadFill className="w-full h-full" />
                <span>Download Resume</span>
              </a>
            </button>
          </div>

          {/* <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex xl:mb-10"
          >
            <ProjectsBtn />
          </motion.div> */}
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>

        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" max-w-[737px] max-h-[737px] absolute -bottom-32
          lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
