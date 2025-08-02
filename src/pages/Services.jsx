import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/layouts/ContactForm";
import Button from "../components/ui/Button";
import Hero from "../components/ui/Hero";
import Subtitle from "../components/ui/Subtitle";
import { services } from "../constants";

const Services = () => {
  const [isServiceActive, setIsServiceActive] = useState(0);
  return (
    <>
      <Helmet>
        <title>Services - GCC Royals Capital</title>
      </Helmet>
      <Hero
        title="Our Services"
        text="We design practical, finance-led services that drive growth, strengthen operations, and control risk. From strategy and funding to tech upgrades and process optimization, every solution is built around your goals."
      />
      <section className="bg-[#F3F5F4] -mt-10 rounded-[40px] flex">
        <div className="flex pt-[60px] pb-[120px] grow shrink basis-auto">
          <div className="flex flex-col grow-0 shrink basis-auto w-full">
            <div className="flex flex-col grow shrink basis-auto gap-y-10 w-full max-w-[min(100%,1100px)]">
              <div className="text-center space-y-2.5">
                <Subtitle>Professional Guidance</Subtitle>
                <h2>Precision Tailored Services</h2>
                <p>
                  We don’t just offer services, we craft strategies. Each
                  solution is shaped by industry insight, financial acumen, and
                  a commitment to results.
                </p>
              </div>
              <div className="w-full relative">
                <div className="flex flex-nowrap [scrollbar-width:_thin;scrollbar-color:#38f084;counter-reset:count]">
                  {services.map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() => setIsServiceActive(idx)}
                      className={`h-[550px] flex cursor-pointer not-last:mr-[30px] ${
                        isServiceActive === idx
                          ? "[flex:4] act_grd"
                          : "[flex:1]"
                      } w-full! overflow-hidden flex-col relative transition-[flex] duration-[800ms] ease-[cubic-bezier(.29,0,.2,1)] will-change-[flex] bg-center bg-no-repeat bg-cover rounded-[20px] before:absolute before:inset-0 before:block before:bg-transparent bg_grad4`}
                    >
                      <span className="srv_count">{idx + 1}</span>
                      <div
                        className={`${
                          isServiceActive === idx
                            ? "p-[clamp(1.875rem,1.2535rem_+_2.0804vw,3.75rem)]"
                            : "py-10"
                        } px-[35px] flex mt-auto items-end`}
                      >
                        <div
                          className={`${
                            isServiceActive === idx
                              ? "block opacity-0 -ml-10"
                              : ""
                          } text-black grow-0 shrink basis-0 text-[clamp(1.875rem,1.7914rem_+_0.3822vw,2.25rem)] rotate-180 [writing-mode:vertical-lr] text-start flex items-center leading-[1.2] font-semibold capitalize transition duration-[375ms] ease-[cubic-bezier(0.7,0,0.3,1)]`}
                        >
                          {service.title}
                        </div>

                        <div className="text-black pt-[30px] grow shrink basis-0 space-y-[30px] *:transition *:duration-[375ms] *:ease-[cubic-bezier(0.7,0,0.3,1)] *:w-full">
                          <div
                            className={`${
                              isServiceActive === idx
                                ? "delay-[350ms] translate-y-0 opacity-100"
                                : "opacity-0 delay-[2ms] translate-y-[50px]"
                            } [writing-mode:unset] z-[2] relative text-black text-[clamp(1.875rem,1.7914rem_+_0.3822vw,2.25rem)] text-start flex items-center leading-[1.2] font-semibold capitalize`}
                          >
                            {service.title}
                          </div>

                          <div
                            className={
                              isServiceActive === idx
                                ? "delay-[400ms] translate-y-0 opacity-100"
                                : "delay-[2ms] translate-y-[50px] opacity-0"
                            }
                          >
                            <img
                              src={service.img}
                              className="rounded-xl"
                              width={600}
                              height={340}
                              alt={service.title}
                            />
                          </div>

                          <div
                            className={
                              isServiceActive === idx
                                ? "delay-[450ms] translate-y-0 opacity-100"
                                : "delay-[2ms] translate-y-[50px] opacity-0"
                            }
                          >
                            <p>{service.text}</p>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default Services;
