"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import Image from "next/image";

const CertificateSlide = () => {
  return (
    <div className="flex flex-row gap-x-10 ">
      <CardContainer>
        <CardBody className="bg-gray-50 p-8 xl:w-[30vw] xl:h-[60vh] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-auto rounded-xl border  ">
          <CardItem
            translateZ="50"
            className="text-xl w-full font-bold text-neutral-600 dark:text-white"
          >
            <h1 className="text-2xl grow font-semibold text-center text-white">
              Academic <span className="text-accent">Certificate</span>
            </h1>
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 w-full text-center text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Certifications from or related to Academic
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="./Non_Aca_Cert.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="Certificate"
            />
          </CardItem>
          <div className="flex w-full justify-end items-center mt-7">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://main--frabjous-mooncake-48fb11.netlify.app/"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Check now →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer>
        <CardBody className="bg-gray-50 p-8 xl:w-[30vw] xl:h-[60vh] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-auto rounded-xl border  ">
          <CardItem
            translateZ="50"
            className="text-xl w-full font-bold text-neutral-600 dark:text-white"
          >
            <h1 className="text-2xl grow font-semibold text-center text-white">
              Non-Academic <span className="text-accent">Certificate</span>
            </h1>
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 w-full text-center text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Certifications from or related to Non-Academics
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="./Aca_Cert.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="Certificate"
            />
          </CardItem>
          <div className="flex w-full justify-end items-center mt-7">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://main--frabjous-mooncake-48fb11.netlify.app/"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Check now →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default CertificateSlide;
