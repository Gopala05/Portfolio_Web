import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CertificateSlide from "../../components/CertificateSlide";

const Certificates = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8">
          <div className="text-center flex flex-col mt-5 mb-0 justify-center xl:mb-0 xl:mt-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-5xl xl:mt-8 mt-10"
            >
              My <span className="text-accent">Certifications.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto lg:mx-0 hidden xl:block"
            >
              In my pursuit of excellence and staying ahead in the ever-evolving
              tech landscape, I have earned over 20 certifications. These
              certifications highlight my commitment to continuous learning and
              my proficiency in diverse areas of software development, project
              management, and emerging technologies.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:w-full m-0 flex justify-center"
          >
            <CertificateSlide />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Certificates;
