import React, { useRef } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { shade_3 } from "../../assets";
import { services } from "../../constants";
import Subtitle from "../ui/Subtitle";
import SwiperBtn from "../ui/SwiperBtn";
import ServiceSlide from "./ServiceSlide";

const ServiceSec = ({ second = false }) => {
  const swiperRef = useRef(null);
  return (
    <section
      className="bg-center bg-no-repeat -mt-10 lg:rounded-t-[40px] relative overflow-hidden"
      style={{ backgroundImage: `url(${shade_3})` }}
    >
      {!second && <span className="absolute inset-0 block bg-white/80" />}
      {second && <span className="absolute inset-0 block bg-black/40" />}
      <div className="flex pt-[100px] pb-[260px] flex-col relative z-[1]">
        <div
          className={`w-full pb-[60px] space-y-2.5 text-center ${
            second ? "text-white" : "text-black"
          }`}
        >
          <Subtitle white={second}>Professional Guidance</Subtitle>
          <h2 className={second ? "text-white" : "text-black"}>
            Precision <span className="text-primary">Tailored</span> Services
          </h2>
          <p>
            We don’t just offer services, we craft strategies. Each solution is
            shaped by industry insight, financial acumen, and a commitment to
            results.
          </p>
        </div>
        <div className="w-full relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation]}
            loop
            slidesPerView={2}
            centeredSlides
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 2,
                centeredSlides: true,
              },
              1280: {
                slidesPerView: 3,
                centeredSlides: true,
              },
            }}
            spaceBetween={30}
            className="serv_Slider *:items-stretch!"
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx} className="h-full!">
                <ServiceSlide dark={second} service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div>
            <SwiperBtn
              white={second}
              direction={"prev"}
              onClick={() => swiperRef.current.slidePrev()}
            />
            <SwiperBtn
              white={second}
              direction={"next"}
              onClick={() => swiperRef.current.slideNext()}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSec;
