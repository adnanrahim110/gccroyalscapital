import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { banners_home_hero_1, hero_shade } from "../../assets";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";

const heroSlider = [
  {
    subtitle: "Bussiness Growth",
    title: "Digital Marketing Consulting solutions",
    img: banners_home_hero_1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    subtitle: "Bussiness Growth",
    title: "Digital Marketing Consulting solutions",
    img: banners_home_hero_1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
];

const HomeHero = () => {
  return (
    <section className="relative h-full px-0">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        className="relative size-full"
      >
        {heroSlider.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="size-full bg-no-repeat bg-cover relative px-[30px]"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundPosition: "top center",
              }}
            >
              <div
                className="absolute top-0 left-0 size-full bg-black opacity-40 bg-no-repeat bg-contain brightness-[20%] contrast-100 saturate-100 origin-[100%_50%] animate-zoomEffect"
                style={{
                  backgroundImage: `url(${hero_shade})`,
                  backgroundPosition: "center left",
                }}
              />
              <div className="flex grow shrink justify-start items-center size-full pt-20 pb-[180px] relative z-[1]">
                <div className="lg:w-1/2 py-[100px] flex-col max-lg:flex-wrap">
                  <div className="pb-[50px] *:not-last:mb-2.5">
                    <Subtitle white>{item.subtitle}</Subtitle>
                    <h1 className="capitalize text-white">{item.title}</h1>
                    <p className="pr-[10%] text-white">{item.text}</p>
                  </div>
                  <div>
                    <Button primary>Free Consultation</Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeHero;
