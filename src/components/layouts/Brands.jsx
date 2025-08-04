import { motion } from "motion/react";
import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  banks_bank_of_america,
  banks_bank_of_china,
  banks_barclay,
  banks_bnp_paribas,
  banks_citibank,
  banks_credit_agricole,
  banks_credit_suisse,
  banks_dbs,
  banks_deutsche,
  banks_hbsc,
  banks_industrial_and_commercial_bank_of_china,
  banks_jpmorgan_chase,
  banks_mufg,
  banks_standard_chartered,
} from "../../assets";
import { MotionInView, variants, viewportOnce20 } from "../../utils/motion";
import Subtitle from "../ui/Subtitle";

const brandSLides = [
  {
    slides: [
      banks_hbsc,
      banks_bnp_paribas,
      banks_bank_of_america,
      banks_citibank,
      banks_standard_chartered,
      banks_dbs,
      banks_mufg,
    ],
  },
  {
    slides: [
      banks_barclay,
      banks_jpmorgan_chase,
      banks_credit_suisse,
      banks_deutsche,
      banks_bank_of_china,
      banks_industrial_and_commercial_bank_of_china,
      banks_credit_agricole,
    ],
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
                          <div className="inline-flex text-center relative items-center justify-center text-black/30 hover:text-black hover:border-transparent text-[clamp(5.625rem,4.9283rem_+_3.1847vw,8.75rem)] p-[clamp(1.25rem,1.1107rem_+_0.6369vw,1.875rem)_clamp(1.5625rem,1.2838rem_+_1.2739vw,2.8125rem)] m-[0_clamp(0.625rem,0.5553rem_+_0.3185vw,0.9375rem)] border border-black/10 rounded-[20px] bg_grad3 cursor-pointer">
                            <img
                              src={SlideComp}
                              className="h-[40px] w-auto max-w-[auto]"
                              alt=""
                            />
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
