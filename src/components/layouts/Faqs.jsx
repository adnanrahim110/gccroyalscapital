import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faq_sec, shade_4 } from "../../assets";
import { contactDetails, faqs } from "../../constants";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";

const Faqs = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  return (
    <section
      className="flex flex-col bg-cover bg-center bg-no-repeat rounded-t-[40px] -mt-10"
      style={{ backgroundImage: `url(${shade_4})` }}
    >
      <div className="flex flex-col lg:flex-row grow shrink gap-[30px] pt-20 pb-[180px]">
        <div className="w-full lg:w-[65%] flex flex-col gap-y-10 grow-0 shrink basis-auto">
          <div className="*:not-last:mb-2.5 text-white text-center lg:text-left">
            <Subtitle white>Our Faq</Subtitle>
            <h2 className="text-white">
              Frequently Asked&nbsp;
              <span className="inline-block bg-clip-text mr-[0.2em] text-transparent bg-gradient-to-r from-primary-500 to-primary-300">
                Questions
              </span>
            </h2>
            <p>
              Have questions about our services, processes, or financial
              products? Here are some of the most commonly asked questions.
            </p>
          </div>
          <div className="w-full space-y-5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`flex justify-start text-start flex-wrap w-full ${
                  idx === activeFaq ? "bg-left text-black" : "text-white"
                } bg-grad bg-white/20 backdrop-blur-[10px] rounded-[20px] overflow-hidden`}
              >
                <button
                  onClick={() => setActiveFaq(idx)}
                  className={`p-[clamp(1.25rem,0.7514rem_+_1.6655vw,2.75rem)] bg-transparent ${
                    activeFaq === idx
                      ? "pb-[clamp(0.9375rem,0.8678rem_+_0.3185vw,1.25rem)] text-black"
                      : "text-white"
                  } bg-transparent text-[clamp(1.25rem,1.1943rem_+_0.2548vw,1.5rem)] flex relative items-center w-full cursor-pointer transition duration-[375ms] ease-[cubic-bezier(0.7,0,0.3,1)]`}
                >
                  <div className="text-left transition duration-[375ms] ease-[cubic-bezier(0.7,0,0.3,1)] grow">
                    {faq.question}
                  </div>
                  <div
                    className={`relative flex size-[1em] ml-2.5 transition-all duration-300 ease-in-out ${
                      activeFaq === idx ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="fill-current size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15.62 10.97"
                    >
                      <path d="M6.77,10.47a1.32,1.32,0,0,0,2.07,0l6.5-8.35A1.31,1.31,0,0,0,14.3,0h-13a1.31,1.31,0,0,0-1,2.12Z"></path>
                    </svg>
                  </div>
                </button>
                <div
                  className={`${
                    activeFaq === idx ? "" : "hidden"
                  } p-[clamp(1.25rem,0.7514rem_+_1.6655vw,2.75rem)] pt-0 pr-[20%] text-base`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="grow-0 shrink basis-auto flex flex-col items-center lg:w-[35%] bg-center bg-cover bg-no-repeat p-[30px] pb-10 justify-center relative rounded-[30px] *:relative *:z-[1] text-center"
          style={{ backgroundImage: `url(${faq_sec})` }}
        >
          <div className="absolute! inset-0 bg-gradient-to-r from-primary-300 to-secondary-100 opacity-90 rounded-[30px] z-0!" />
          <div className="text-center">
            <div className="text-black text-[100px] inline-block leading-none text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 22.66"
                className="fill-black"
              >
                <path d="M3.88,19.29c.19-1.52.28-2.78.53-4a1.22,1.22,0,0,0-.68-1.51A7,7,0,0,1,0,8.23,6.47,6.47,0,0,1,2.63,2.62C6.75-.85,14-.87,18.14,2.56c3.61,3,3.61,7.57,0,10.51a11.77,11.77,0,0,1-8.4,2.5,2.93,2.93,0,0,0-2.26.78c-1.1,1-2.25,1.86-3.56,2.94Z"></path>
                <path d="M26.11,22.66c-1.3-1.07-2.41-1.89-3.42-2.81a3.26,3.26,0,0,0-2.6-.92,11.74,11.74,0,0,1-7.84-2.21c3.3-.66,6.16-1.75,8.12-4.37a7.22,7.22,0,0,0,.33-8.71c3.65-.45,8.27,2.68,9.12,6.09.67,2.72-.53,5.46-3.35,7.27a1.63,1.63,0,0,0-.88,1.93c.22,1.13.33,2.28.52,3.73Z"></path>
              </svg>
            </div>
          </div>
          <div>
            <div className="mb-[50px] text-center space-y-2.5">
              <h4>Have Questions About Something?</h4>
              <div className="text-black">
                Check our FAQs or message us for a quick, clear answer.
              </div>
            </div>
          </div>
          <div>
            <Button white to="/contact-us">
              Contact Us
            </Button>
          </div>
          <div className="mt-[60px]">
            <div className="flex flex-col">
              {contactDetails.map((item, idx) => {
                const Wrapper = item.url ? Link : "span";
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-[15px] [flex:0_0_100%] text-center text-black"
                  >
                    <div className="mb-1.5">
                      <div className="text-lg font-medium capitalize">
                        {item.title}
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-[15px]">
                      <div className="w-fit text-black">
                        <span>
                          <Icon className="size-6" />
                        </span>
                      </div>
                      <div className="w-fit">
                        <h5 className="text-[1.25em] font-semibold">
                          <Wrapper
                            {...(item.url && {
                              to: item.url,
                              target: "_blank",
                            })}
                            {...(idx === 0 && { rel: "noopener" })}
                            className=""
                          >
                            {item.text}
                          </Wrapper>
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
