// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Weather App",
          path: "/Weather_App.jpg",
        },
        // {
        //   title: 'title',
        //   path: '/thumb2.jpg',
        // },
        // {
        //   title: 'title',
        //   path: '/thumb3.jpg',
        // },
        // {
        //   title: 'title',
        //   path: '/thumb4.jpg',
        // },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/thumb4.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb1.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb2.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb3.jpg',
    //     },
    //   ],
    // },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={{ Pagination }}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex
                  items-center justify-center group " key={index}>
                    <div className="flex items-center justify-center 
                    relative overflow-hidden group">
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt="Work Image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#00FFFF] to-[#4A22BD]
                      opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute bottom-0translate-y-full group-hover:-translate-y-10 
                      group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2text-[13px] tracking-[0.2rem] ">
                          {/* <div className="delay-100"> LIVE </div> */}
                          <div className="translate-y-[500%] text-black group-hover:translate-y-0
                          transition-all duration-300 delay-150" style={{fontWeight: 800 }}> {image.title} </div>
                          <div className="text-xl translate-y-[500%] text-black
                          group-hover:translate-y-0 transition-all duration-300
                          delay-200"><BsArrowRight/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
