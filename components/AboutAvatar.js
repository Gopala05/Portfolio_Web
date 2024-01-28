import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "next/image";

function AboutAvatar() {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden md:hidden xl:block absolute bottom-0 -left-[10%]"
      style={{ maxWidth: "600px" }} // Adjust the maximum width
    >
      <style jsx>{`
        @media (max-width: 768px) {
          .responsive-image {
            width: 100%;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .responsive-image {
            width: 450px;
          }
        }

        @media (min-width: 1025px) {
          .responsive-image {
            width: 500px;
          }
        }
      `}</style>

      <Image
        src={"/GK_.png"}
        alt="Picture"
        width={500}
        height={600}
        className="responsive-image"
      />
    </motion.div>
  );
}

export default AboutAvatar;

