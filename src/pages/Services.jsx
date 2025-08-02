import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { shade_3 } from "../assets";
import ContactForm from "../components/layouts/ContactForm";
import ServiceSlide from "../components/layouts/ServiceSlide";
import Hero from "../components/ui/Hero";
import Subtitle from "../components/ui/Subtitle";
import SwiperBtn from "../components/ui/SwiperBtn";
import { services } from "../constants";

const Services = () => {
  const swiperRef = useRef(null);
  return (
    <>
      <Helmet>
        <title>Services - GCC Royals Capital</title>
      </Helmet>
      <Hero
        title="Our Services"
        text="We design practical, finance-led services that drive growth, strengthen operations, and control risk. From strategy and funding to tech upgrades and process optimization, every solution is built around your goals."
      />
      <section
        className="bg-center bg-no-repeat -mt-10 lg:rounded-t-[40px] relative overflow-hidden"
        style={{ backgroundImage: `url(${shade_3})` }}
      >
        <div className="flex pt-[100px] pb-[260px] flex-col relative z-[1]">
          <div className="w-full pb-[60px] space-y-2.5 text-center text-white">
            <Subtitle white>Professional Guidance</Subtitle>
            <h2 className="text-white">
              Precision <span className="text-primary">Tailored</span> Services
            </h2>
            <p>
              We don’t just offer services, we craft strategies. Each solution
              is shaped by industry insight, financial acumen, and a commitment
              to results.
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
              className="serv_Slider"
            >
              {services.map((service, idx) => (
                <SwiperSlide key={idx}>
                  <ServiceSlide service={service} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div>
              <SwiperBtn
                direction={"prev"}
                onClick={() => swiperRef.current.slidePrev()}
              />
              <SwiperBtn
                direction={"next"}
                onClick={() => swiperRef.current.slideNext()}
              />
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default Services;
