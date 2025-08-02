import React from "react";
import { Helmet } from "react-helmet-async";
import {
  about_sec3,
  brain,
  focus,
  hand,
  heart,
  network,
  process,
  shade_4,
  skill,
} from "../assets";
import Brands from "../components/layouts/Brands";
import Faqs from "../components/layouts/Faqs";
import Reviews from "../components/layouts/Reviews";
import Hero from "../components/ui/Hero";
import Subtitle from "../components/ui/Subtitle";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - GCC Royals Capital</title>
      </Helmet>
      <Hero
        title="About Us"
        text="lorem ipsum dolor sit amet consectetur adipisicing elit Ut, necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit Ut, necessitatibus"
      />
      <section className="pt-[120px] rounded-t-[60px] -mt-[60px] bg-[#F3F5F4] mb-[160px]">
        <div className="flex flex-col text-center">
          <div className="inline-block mb-2.5">
            <Subtitle>Our Mission</Subtitle>
            <div className="mb-20">
              <div className="text-[clamp(2.25rem,2.0549rem_+_0.8917vw,3.125rem)] font-medium *:mx-[7px] text-black">
                <div className="inline">
                  Our experienced team provides tailored office
                </div>
                <div className="inline-block">
                  <img src={brain} className="size-10" />
                </div>
                <div className="inline">support and</div>
                <div className="inline text-primary">smart solutions</div>
                <div className="inline-block">
                  <img src={heart} className="size-10" />
                </div>
                <div className="inline">to help businesses</div>
                <div className="inline-block">
                  <img src={hand} className="size-10" />
                </div>
                <div className="inline">operate efficiently</div>
              </div>
            </div>
            <div className="relative">
              <div className="flex w-auto flex-wrap justify-center">
                {[
                  { title: "16 +", text: "Broad Career Experience" },
                  { title: "22k +", text: "High-Earning Growth" },
                  { title: "15k", text: "Happy Clients World wide" },
                  { title: "96%", text: "Customer Retention Rate" },
                ].map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="lg:w-fit relative float-left min-h-px cursor-pointer"
                    >
                      <div
                        className={`text-center justify-center size-[clamp(11.875rem,7.2917rem_+_9.5486vw,18.75rem)] bg-white/50 backdrop-blur-[10px] rounded-full grid place-content-center p-[clamp(0.625rem,-2.9464rem_+_5.5804vw,3.75rem)] shadow-[0_0_30px_10px] shadow-[rgba(208,208,208,0.3)] relative z-[3] will-change-transform after:size-full after:-z-[1] after:absolute after:bg-white after:inline-block after:rounded-full after:left-0 ${
                          idx !== 0 ? "-ml-2.5" : ""
                        } bg_grd2 group`}
                      >
                        <div className="mb-3.5">
                          <div className="text-[clamp(2.5rem,2.082rem_+_1.9108vw,4.375rem)] font-medium leading-none text-black group-hover:text-primary-500 transition-all duration-300 ease-in-out">
                            {item.title}
                          </div>
                        </div>
                        <h5 className="text-[clamp(1rem,0.8333rem_+_0.3472vw,1.25rem)] font-normal px-5 text-black">
                          {item.text}
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="rounded-t-[40px] -mt-10 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${shade_4})` }}
      >
        <div className="grow shrink flex pt-20 pb-[120px]">
          <div className="flex flex-col w-full gap-y-[60px]">
            <div className="max-w-full w-[525px] space-y-2.5">
              <Subtitle white>Our Features</Subtitle>
              <h2 className="text-white">
                Lorem ipsum dolor sit amet consectetur
              </h2>
            </div>
            <div className="grid grid-cols-[520px_auto] gap-[30px] 2xl:gap-[50px]">
              <div>
                <img
                  src={about_sec3}
                  className="h-full w-[594px] object-cover rounded-[30px]"
                  alt=""
                />
              </div>
              <div className="w-auto -m-2.5 2xl:-m-5 flex flex-wrap">
                {[
                  {
                    title: "Expert Skills.",
                    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod",
                    img: skill,
                  },
                  {
                    title: "Our Process.",
                    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod",
                    img: process,
                  },
                  {
                    title: "Main Focus.",
                    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod",
                    img: focus,
                  },
                  {
                    title: "Our Network.",
                    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod",
                    img: network,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 2xl:p-5 [flex:0_0_50%]">
                    <div className="overflow-hidden rounded-[20px] flex h-full backdrop-blur-[10px] bg-white/[0.05] text-left justify-start">
                      <div className="p-[30px] space-y-3.5 mb-1.5">
                        <div className="inline-flex">
                          <div className="p-2.5 bg-white rounded-[20px]">
                            <div
                              className="size-[55px] text-[30px] rounded-xl bg-gradient-to-r from-secondary-200 via-primary-400 to-secondary-200 bg-top-right text-black inline-flex justify-center items-center p-[5px]"
                              style={{ backgroundSize: "300% 200%" }}
                            >
                              <img
                                src={item.img}
                                className="size-full"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <h5 className="text-2xl text-white">{item.title}</h5>
                        <p className="text-white text-sm">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Brands />
      <Faqs />
      <Reviews second />
    </>
  );
};

export default About;
