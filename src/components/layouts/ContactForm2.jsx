import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router-dom";
import { contactDetails } from "../../constants";
import { MotionInView, variants, viewportOnce20 } from "../../utils/motion";
import Form from "../ui/Form";
import Subtitle from "../ui/Subtitle";

const ContactForm2 = () => {
  return (
    <MotionInView
      as={motion.section}
      v={variants.slideUp}
      viewport={viewportOnce20}
      className="bg-[#F3F5F4] -mt-10 rounded-t-[40px]"
    >
      <div className="flex grow shrink pb-[120px] pt-[60px]">
        <div className="flex gap-[30px] items-center">
          <div className="lg:w-1/2 flex flex-col grow-0 shrink basis-auto">
            <div className="pb-10">
              <div className="space-y-2.5">
                <Subtitle>Let's Start Talking</Subtitle>
                <MotionInView
                  as={motion.h2}
                  v={variants.slideUp}
                  viewport={{ once: true, amount: 1 }}
                >
                  Send Us Your Query
                </MotionInView>
                <MotionInView
                  as={motion.p}
                  v={variants.slideUp}
                  viewport={{ once: true, amount: 1 }}
                >
                  Whether you're exploring partnership opportunities, seeking
                  investment advice, or require a tailored financial strategy,
                  our team is here to help.
                </MotionInView>
              </div>
            </div>
            <div>
              <div className="flex -m-5 flex-wrap">
                {contactDetails.map((item, idx) => {
                  const Wrapper = item.url ? Link : "div";
                  return (
                    <MotionInView
                      as={motion.div}
                      v={variants.slideUp}
                      viewport={{ once: true, amount: 1 }}
                      key={idx}
                      className="w-full p-5"
                    >
                      <Wrapper
                        {...(item.url && { to: item.url })}
                        {...(idx === 0 && {
                          rel: "noopener",
                          target: "_blank",
                        })}
                        className="inline-flex items-center gap-[clamp(0.9375rem,0.8333rem_+_0.3472vw,1.25rem)] group"
                      >
                        <div className="bg-white p-[13px] rounded-xl inline-flex">
                          <div className="text-[clamp(1.5rem,1.4164rem_+_0.3822vw,1.875rem)] p-3 bg-gradient-to-r from-primary-400 to-primary-200 bg-center rounded-lg text-black inline-flex items-center group-hover:scale-110 transition-all duration-300 ease-in-out">
                            {<item.icon />}
                          </div>
                        </div>
                        <div>
                          <div className="mb-2.5 text-black">
                            <h5 className="text-xl text-black">{item.title}</h5>
                          </div>
                          <p className="text-[15px] group-hover:text-primary transition-colors duration-300 ease-in-out">
                            {item.text}
                          </p>
                        </div>
                      </Wrapper>
                    </MotionInView>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bg-white lg:w-1/2 p-[50px] flex flex-col rounded-[30px]">
            <MotionInView
              as={motion.h4}
              v={variants.slideUp}
              viewport={{ once: true, amount: 1 }}
              className="mb-10"
            >
              Book Your Free Consultation
            </MotionInView>
            <Form />
          </div>
        </div>
      </div>
    </MotionInView>
  );
};

export default ContactForm2;
