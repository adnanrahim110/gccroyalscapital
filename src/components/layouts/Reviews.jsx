import React from "react";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  clients_img,
  hero_shade,
  rev_sec,
  shade_2,
  shade_3,
} from "../../assets";
import { reviews } from "../../constants";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";

const Reviews = ({ second = false }) => {
  return (
    <section
      className={second ? "bg-[#F3F5F4] -mt-10 pt-20 rounded-t-[40px]" : ""}
    >
      <div className="flex flex-col grow shrink flex-wrap pb-[120px]">
        <div className="w-full flex justify-center items-center">
          <div className="w-[760px] max-w-full pb-[50px] text-center">
            <div className="*:not-last:mb-2.5">
              <Subtitle>Testimonials</Subtitle>
              <h2>Hear What Our CLients Say</h2>
              <div className="px-[5%]">
                At GRC Capital, client satisfaction is our top priority. Here's
                what our partners say about their experience with us.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="bg-white lg:w-[73%] flex flex-col lg:flex-row overflow-hidden px-5 lg:pr-5 shadow-[0_0_20px] shadow-black/[0.08] rounded-[20px]">
            <div className="p-[50px] w-full lg:w-[55%] flex flex-col justify-center relative">
              <div
                className="absolute brightness-[20%] contrast-0 saturate-0 bg-center bg-no-repeat bg-cover inset-0 opacity-10 z-0"
                style={{ backgroundImage: `url(${hero_shade})` }}
              />
              <div className="pb-[50px] *:not-last:mb-2.5 relative z-[1]">
                <h4>
                  Trusted By Over <br /> 100+ Loyal Clients
                </h4>
                <div>
                  From real estate developers to oil & gas innovators, our
                  clients trust us to deliver results through insight-driven
                  financial solutions.
                </div>
              </div>
              <div className="inline-flex cursor-pointer relative z-[1]">
                <Button to="/contact-us">Contact Us</Button>
              </div>
            </div>
            <div className="w-full lg:w-[45%] flex gap-5">
              <div className="w-full max-h-[550px] relative">
                <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent z-[2]" />
                <div className="absolute -bottom-1 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-[2]" />
                <Swiper
                  modules={[Autoplay]}
                  direction="vertical"
                  autoplay={{ delay: 0 }}
                  speed={3000}
                  loop
                  slidesPerView="auto"
                  spaceBetween={0}
                  className="size-full overflow-clip! *:ease-linear! touch-pan-y!"
                >
                  {reviews.map((review, idx) => (
                    <SwiperSlide
                      key={idx}
                      className="backface-hidden! w-auto! h-auto!"
                    >
                      <div className="p-[clamp(1.25rem,1.1107rem_+_0.6369vw,1.875rem)] bg-[#f3f5f4] rounded-xl my-5">
                        <div>
                          <span className="flex text-3xl text-black mb-3.5">
                            <svg
                              className="size-[30px]"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 100 100"
                              style={{ enableBackground: "new 0 0 100 100" }}
                            >
                              <g>
                                <path d="M75.3,86.8c12.3,0,22.2-10,22.2-22.3s-9.9-22.3-22.2-22.3c-2.6,0-5,0.4-7.3,1.2L57.3,13.2h-4.2v51.3  C53.1,76.8,63.1,86.8,75.3,86.8z"></path>
                                <path d="M24.7,86.8c12.3,0,22.2-10,22.2-22.3s-9.9-22.3-22.2-22.3c-2.6,0-5,0.4-7.3,1.2L6.7,13.2H2.5v51.3  C2.5,76.8,12.4,86.8,24.7,86.8z"></path>
                              </g>
                            </svg>
                          </span>
                          <div className="mb-5">{review.comment}</div>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <img
                            src={review.img}
                            alt={review.name}
                            className="size-10 rounded-full"
                          />
                          <div>
                            <div className="text-black">{review.name}</div>
                            <span className="text-[15px] text-black/40 font-semibold leading-none">
                              {review.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 flex flex-col gap-[30px]">
            <div className="bg-white rounded-[20px] p-[45px] flex flex-col gap-5 justify-center text-center relative">
              <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-15"
                style={{ backgroundImage: `url(${shade_2})` }}
              />
              <span className="text-[45px] leading-none font-semibold text-black">
                4.80
              </span>
              <ul className="flex justify-center items-center gap-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400" />
                ))}
              </ul>
              <div className="flex flex-col text-center items-center justify-center">
                <p>2,548 Reviews and counting</p>
              </div>
              <ul className="flex items-center justify-center -mx-2 flex-wrap">
                <li className="mx-2 [word-break:break-word] flex items-center justify-center text-[inherit] relative pointer-events-none">
                  <span className="flex text-center">
                    <svg
                      className="fill-black size-7"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 50 50"
                      style={{ enableBackground: "new 0 0 50 50" }}
                    >
                      <path d="M34.9,2.6c0,5.5-4.4,10-9.9,10c0-0.4-0.1-0.8-0.1-1.2c0-5.5,4.4-10,9.9-10C34.9,1.8,34.9,2.2,34.9,2.6z"></path>
                      <path d="M34.9,2.6c0,5.5-4.4,10-9.9,10c0-0.4-0.1-0.8-0.1-1.2c0-5.5,4.4-10,9.9-10C34.9,1.8,34.9,2.2,34.9,2.6z"></path>
                      <path d="M45,36c-1.4,4.3-3.9,8.1-7.1,11.1c0,0-0.1,0.1-0.1,0.1c-1.1,1-2.5,1.6-4.1,1.6c-1,0-1.9-0.2-2.7-0.6 c-0.1-0.1-0.3-0.1-0.4-0.2c0,0,0,0,0,0c-1.3-0.7-2.8-1-4.4-1c-1.6,0-3,0.3-4.3,1c0,0,0,0,0,0c-0.2,0.1-0.5,0.2-0.7,0.4 c-0.8,0.3-1.6,0.5-2.5,0.5c-1.6,0-3-0.6-4.1-1.6c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0C9.2,42.3,6,35.5,6,27.9c0-2.3,0-4.6,0.8-6.6 c4.2-10.2,12.4-8.7,16.5-6.6c4.5,2.2,4.4-1.8,11.2-1.8c3.3,0,7.3,2.1,9.2,4.6c-3.3,1.6-5.6,5-5.6,9c0,2.2,0.7,4.2,1.9,5.9 C41.2,34,43,35.3,45,36L45,36z"></path>
                    </svg>
                  </span>
                </li>
                <li className="mx-2 [word-break:break-word] flex items-center justify-center text-[inherit] relative pointer-events-none">
                  <span className="flex text-center">
                    <svg
                      className="size-7"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 50 50"
                      style={{ enableBackground: "new 0 0 50 50" }}
                    >
                      <g>
                        <path
                          className="icon-st1"
                          d="M47.2,34.3c0-0.1,0.1-0.1,0.1-0.2c1.4-3.4,2-7.1,1.7-10.8l-0.2-3.2H25.2v9.5h13.7c-1,3-3,5.5-5.5,7.3l7.7,6   c0.4-0.3,0.7-0.6,1-1C44.2,39.8,46,37.2,47.2,34.3L47.2,34.3z"
                        ></path>
                        <path
                          className="icon-st2"
                          d="M25,10.5c3.6,0,7.1,1.3,9.7,3.7l6.3-7C36.7,3.2,31,1,25,1c-3.2,0-6.4,0.6-9.4,1.9C12.8,4.1,10.2,5.8,8,8   c-1.8,1.8-3.3,3.8-4.4,6l7.7,6C13.4,14.5,18.8,10.5,25,10.5L25,10.5z"
                        ></path>
                        <path
                          className="icon-st3"
                          d="M10.5,25c0-1.7,0.3-3.4,0.9-5l-7.7-6c-0.3,0.5-0.5,1.1-0.8,1.6C1.6,18.6,1,21.8,1,25s0.6,6.4,1.9,9.3   c0.2,0.5,0.4,0.9,0.6,1.4l7.8-5.9C10.8,28.3,10.5,26.7,10.5,25L10.5,25z"
                        ></path>
                        <path
                          className="icon-st4"
                          d="M25,39.5c-6.3,0-11.7-4-13.7-9.7l-7.8,5.9C4.7,38,6.2,40.1,8,42c2.2,2.2,4.8,3.9,7.6,5.1   c3,1.3,6.1,1.9,9.4,1.9s6.4-0.6,9.4-1.9c2.4-1,4.6-2.4,6.6-4.2l-7.7-6C30.9,38.6,28.1,39.5,25,39.5L25,39.5z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </li>
                <li className="mx-2 [word-break:break-word] flex items-center justify-center text-[inherit] relative pointer-events-none">
                  <span className="flex text-center">
                    <svg
                      className="size-7"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 50 50"
                      style={{ enableBackground: "new 0 0 50 50" }}
                    >
                      <g>
                        <path
                          fill="#E23E2B"
                          d="M48.1,14.4c-0.4-1.5-1.6-3.5-4.1-4.2c-3.3-0.8-11.7-0.9-18.3-1c-3.3,0-7,0.1-10.3,0.2   C12,9.6,9.1,9.8,7.4,10.2c-2.5,0.7-3.7,2.7-4.1,4.2c-0.7,2.1-1,7.8-1,11.3s0.3,9.2,1,11.3c0.4,1.5,1.6,3.5,4.1,4.2   c3.3,0.8,11.7,0.9,18.3,1c3.3,0,7-0.1,10.3-0.2c3.3-0.1,6.3-0.4,7.9-0.8c2.5-0.7,3.7-2.7,4.1-4.2c0.7-2.1,1-7.8,1-11.3   S48.7,16.5,48.1,14.4z M20.9,32.6V18.7l12.2,6.9L20.9,32.6L20.9,32.6z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-primary-600 to-primary-300 p-[30px] flex flex-col relative rounded-[20px]">
              <div
                className="absolute inset-0 bg-center opacity-10 "
                style={{ backgroundImage: `url(${rev_sec})` }}
              />
              <div className="w-[70%]">
                <h5 className="capitalize">Group Cooperation</h5>
              </div>
              <div className="w-full h-[100px]" />
              <div className="text-right">
                <img
                  src={clients_img}
                  className="h-[50px] w-[167px] inline-block"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#161616] p-10 w-full rounded-[20px] relative overflow-hidden">
          <div
            className="absolute bg-no-repeat bg-cover inset-0 opacity-60"
            style={{
              backgroundImage: `url(${shade_3})`,
              backgroundPosition: "top center",
            }}
          />
          <div>
            <div className="grid max-lg:gap-10 lg:grid-cols-3 max-lg:divide-y-2 lg:divide-x-2 divide-white/15 relative z-[1]">
              <div className="text-white text-center max-lg:pb-10">
                <div className="leading-none mb-3.5 text-[clamp(2.5rem,2.082rem_+_1.9108vw,4.375rem)] font-medium">
                  25+
                </div>
                <div className="text-[clamp(1.125rem,1.0417rem_+_0.1736vw,1.25rem)] tracking-[0.2px] leading-[1.2]">
                  Years of Experience
                </div>
              </div>
              <div className="text-white text-center max-lg:pb-10">
                <div className="leading-none mb-3.5 text-[clamp(2.5rem,2.082rem_+_1.9108vw,4.375rem)] font-medium">
                  100+
                </div>
                <div className="text-[clamp(1.125rem,1.0417rem_+_0.1736vw,1.25rem)] tracking-[0.2px] leading-[1.2]">
                  Happy Clients Globally
                </div>
              </div>
              <div className="text-white text-center max-lg:pb-10">
                <div className="leading-none mb-3.5 text-[clamp(2.5rem,2.082rem_+_1.9108vw,4.375rem)] font-medium">
                  100M+
                </div>
                <div className="text-[clamp(1.125rem,1.0417rem_+_0.1736vw,1.25rem)] tracking-[0.2px] leading-[1.2]">
                  High-Earning Growth
                </div>
              </div>
              <div className="text-white text-center max-lg:pb-10">
                <div className="leading-none mb-3.5 text-[clamp(2.5rem,2.082rem_+_1.9108vw,4.375rem)] font-medium">
                  96%
                </div>
                +
                <div className="text-[clamp(1.125rem,1.0417rem_+_0.1736vw,1.25rem)] tracking-[0.2px] leading-[1.2]">
                  Customer Retention Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
