import { motion } from "motion/react";
import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MotionInView, variants, viewportOnce20 } from "../../utils/motion";
import Company from "../svgs/Company";
import Company2 from "../svgs/Company2";
import Company3 from "../svgs/Company3";
import Finance from "../svgs/Finance";
import Finance2 from "../svgs/Finance2";
import Growtech from "../svgs/Growtech";
import Growth from "../svgs/Growth";
import Hertz from "../svgs/Hertz";
import Narrow from "../svgs/Narrow";
import Teamwork from "../svgs/Teamwork";
import Subtitle from "../ui/Subtitle";

const brandSLides = [
  {
    slides: [Company, Finance, Growth, Hertz, Growtech],
  },
  {
    slides: [Company2, Narrow, Teamwork, Company3, Finance2],
  },
];

const Brands = ({ white = false }) => {
  return (
    <MotionInView
      as={motion.section}
      v={variants.slideUp}
      viewport={viewportOnce20}
      className={`rounded-t-[40px] -mt-10 ${
        white ? "bg-white" : "bg-[#F3F5F4]"
      }`}
    >
      <div className="flex flex-col pt-[100px] pb-[120px]">
        <div className="pb-10 text-center space-y-2.5">
          <Subtitle>Our Company</Subtitle>
          <MotionInView
            as={motion.h2}
            v={variants.slideUp}
            viewport={{ once: true, amount: 1 }}
          >
            Trusted Business Partner
          </MotionInView>
        </div>
        <div className="w-full">
          {brandSLides.map((item, idx) => {
            const slidesToRender = [...item.slides, ...item.slides];
            return (
              <div className={idx === 0 ? "px-20 mb-[30px]" : ""} key={idx}>
                <div
                  className={`w-full relative ${
                    white
                      ? "psuedo_shadow psuedo_shadow_white"
                      : "psuedo_shadow"
                  }`}
                >
                  <Swiper
                    modules={[Autoplay]}
                    loop
                    allowTouchMove={false}
                    speed={4000}
                    spaceBetween={0}
                    slidesPerView="auto"
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      reverseDirection: idx === 1,
                    }}
                    className="continuous-swiper touch-pan-y! overflow-clip! *:ease-linear! size-full"
                  >
                    {slidesToRender.map((SlideComp, slideIdx) => {
                      return (
                        <SwiperSlide
                          key={slideIdx}
                          className="backface-hidden! w-auto!"
                        >
                          <div className="inline-flex text-center relative items-center justify-center text-black/30 hover:text-black hover:border-transparent text-[clamp(5.625rem,4.9283rem_+_3.1847vw,8.75rem)] p-[clamp(1.25rem,1.1107rem_+_0.6369vw,1.875rem)_clamp(1.5625rem,1.2838rem_+_1.2739vw,2.8125rem)] m-[0_clamp(0.625rem,0.5553rem_+_0.3185vw,0.9375rem)] border border-black/10 rounded-[20px] bg_grad3 cursor-pointer *:h-auto!">
                            <SlideComp />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .continuous-swiper .swiper-wrapper {
          transition-timing-function: linear;
        }
      `}</style>
    </MotionInView>
  );
};

export default Brands;
