import React from "react";
import { Helmet } from "react-helmet-async";
import { home_sec1 } from "../assets";
import ContactForm from "../components/layouts/ContactForm";
import Faqs from "../components/layouts/Faqs";
import HomeHero from "../components/layouts/HomeHero";
import Reviews from "../components/layouts/Reviews";
import TextSlider from "../components/layouts/TextSlider";
import Button from "../components/ui/Button";
import Subtitle from "../components/ui/Subtitle";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - GCC Royals Capital</title>
      </Helmet>
      <HomeHero />
      <section className="bg-[#F3F5F4] rounded-t-[60px] -mt-[60px]">
        <div className="pt-[100px] pb-[70px]">
          <div className="flex flex-col gap-[60px]">
            <div className="[flex:0_0_calc(72%_-_calc(60px_/_2))] relative">
              <div className="w-full h-fit relative">
                <div className="w-full">
                  <div className="flex gap-[60px]">
                    <div
                      className="bg-center bg-cover w-1/2 rounded-[30px] h-[500px] grow-0 shrink basis-auto"
                      style={{ backgroundImage: `url(${home_sec1})` }}
                    />
                    <div className="w-1/2 flex flex-col grow-0 shrink basis-auto gap-y-[50px] py-20">
                      <div className="*:mb-2.5">
                        <Subtitle>Guidance, Trust, Results.</Subtitle>
                        <h2>Lorem ipsum dolor sit ametad consectetur.</h2>
                        <p className="pr-[15%]">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Obcaecati sit omnis earum quaerat saepe est
                          veniam alias voluptates in laudantium!
                        </p>
                      </div>
                      <div>
                        <Button>Get Started</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="[flex:0_0_calc(28%_calc(60px_/_2))]">
              <ul className="justify-start flex gap-[50px]">
                {[
                  {
                    title: "reliability",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, odio debitis.",
                  },
                  {
                    title: "customer Care",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, odio debitis.",
                  },
                  {
                    title: "Business Continuity",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, odio debitis.",
                  },
                  {
                    title: "Experience",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, odio debitis.",
                  },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="leading-normal cursor-pointer transition-all duration-300 ease-in-out opacity-30 hover:opacity-100 group"
                  >
                    <div className="flex flex-col">
                      <div className="pb-5 mb-5 border-b border-[#d0d0d0] relative before:w-0 before:absolute before:h-px before:bg-black before:left-0 before:top-auto before:-bottom-px before:m-auto before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full">
                        <span className="text-[50px] text-black group-hover:text-primary transition-all duration-300 ease-in-out inline-flex items-center justify-center ">
                          <i>
                            {idx === 0 ? (
                              <svg
                                className="fill-current size-[50px]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                              >
                                <path d="M47,32.42a10.16,10.16,0,0,1,0-14.48,9.94,9.94,0,0,0,3-7.07A10.11,10.11,0,0,0,32.84,3.71a11.06,11.06,0,0,1-15.52-.19A10.11,10.11,0,0,0,0,10.5a10.12,10.12,0,0,0,17.16,7.16,11,11,0,0,1,15.51.19l.09.09a10.18,10.18,0,0,1,0,14.49,9.94,9.94,0,0,0-2.95,7.07,10.1,10.1,0,0,0,20.2,0,9.94,9.94,0,0,0-2.95-7.07Z"></path>
                                <path d="M17.65,46.14A9.93,9.93,0,0,0,16.81,32a10.16,10.16,0,0,0-14.26.84A9.93,9.93,0,0,0,3.39,47,10.17,10.17,0,0,0,17.65,46.14Z"></path>
                              </svg>
                            ) : idx === 1 ? (
                              <svg
                                className="fill-current size-[50px]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                              >
                                <path d="M50,10.86A10.11,10.11,0,0,0,30.08,8.55h0a28.45,28.45,0,0,1-22,21.14,10,10,0,0,0,2,19.81,10.07,10.07,0,0,0,9.82-7.69h0a28.44,28.44,0,0,1,22-21.14A10,10,0,0,0,50,10.86Z"></path>
                                <path d="M42,49.29a10,10,0,1,0-12-7.73A10.1,10.1,0,0,0,42,49.29Z"></path>
                                <path d="M19.45,14.29a10,10,0,0,0-5.52-13A10.13,10.13,0,0,0,.76,6.71,10,10,0,0,0,6.27,19.76,10.13,10.13,0,0,0,19.45,14.29Z"></path>
                              </svg>
                            ) : idx === 2 ? (
                              <svg
                                className="fill-current size-[50px]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                              >
                                <path d="M47,32.42a10.16,10.16,0,0,1,0-14.48,9.92,9.92,0,0,0,3-7.08A10.12,10.12,0,0,0,32.83,3.71a11.06,11.06,0,0,1-15.52-.2A10.12,10.12,0,0,0,0,10.5a10.12,10.12,0,0,0,17.16,7.16A11,11,0,0,1,27.67,15,28.61,28.61,0,0,1,8.09,29.7a10,10,0,0,0,2,19.8,10.08,10.08,0,0,0,9.82-7.69h0a28.39,28.39,0,0,1,15.56-19,10.16,10.16,0,0,1-2.73,9.62,9.91,9.91,0,0,0-3,7.07A10.11,10.11,0,0,0,50,39.5a9.91,9.91,0,0,0-3-7.07Z"></path>
                              </svg>
                            ) : (
                              <svg
                                className="fill-current size-[50px]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                              >
                                <path d="M47,32.42a10.16,10.16,0,0,1,0-14.48,9.94,9.94,0,0,0,3-7.07,10.1,10.1,0,0,0-20.2,0,9.91,9.91,0,0,0,3,7.07,10.18,10.18,0,0,1,0,14.48,11,11,0,0,1-15.51,0,10.42,10.42,0,0,1,0-14.84A10,10,0,0,0,10.1.5,10.06,10.06,0,0,0,0,10.5a9.92,9.92,0,0,0,3,7.08A10.42,10.42,0,0,1,3,32.42,9.92,9.92,0,0,0,0,39.5a10.12,10.12,0,0,0,17.24,7.07,11.06,11.06,0,0,1,15.52,0A10.12,10.12,0,0,0,50,39.5a9.92,9.92,0,0,0-3-7.08Z"></path>
                              </svg>
                            )}
                          </i>
                        </span>
                      </div>
                      <h4 className="text-[clamp(1.5rem,1.4164rem_+_0.3822vw,1.875rem)]">
                        {item.title}
                      </h4>
                      <div className="mt-5 text-wrap">{item.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <TextSlider />
      <Reviews />
      <Faqs />
      <ContactForm />
    </>
  );
};

export default Home;
