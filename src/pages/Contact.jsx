import React from "react";
import { Helmet } from "react-helmet-async";
import Brands from "../components/layouts/Brands";
import Form from "../components/ui/Form";
import Hero from "../components/ui/Hero";
import Subtitle from "../components/ui/Subtitle";
import { contactDetails } from "../constants";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - GCC Royals Capital</title>
      </Helmet>
      <Hero
        title="Contact Us"
        text="We’d love to hear from you. Reach out with your questions or project ideas we’ll respond promptly."
      />
      <section className="bg-[#F3F5F4] -mt-10 rounded-t-[40px]">
        <div className="flex grow shrink pb-[120px] pt-[60px]">
          <div className="flex gap-[30px] items-center">
            <div className="lg:w-1/2 flex flex-col grow-0 shrink basis-auto">
              <div className="pb-10">
                <div className="space-y-2.5">
                  <Subtitle>Let's Start Talking</Subtitle>
                  <h2>Send Us Your Query</h2>
                  <p>
                    Whether you're exploring partnership opportunities, seeking
                    investment advice, or require a tailored financial strategy,
                    our team is here to help.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex -m-5 flex-wrap">
                  {contactDetails.map((item, idx) => (
                    <div key={idx} className="w-full p-5">
                      <div className="inline-flex items-center gap-[clamp(0.9375rem,0.8333rem_+_0.3472vw,1.25rem)]">
                        <div className="bg-white p-[13px] rounded-xl inline-flex">
                          <div className="text-[clamp(1.5rem,1.4164rem_+_0.3822vw,1.875rem)] p-3 bg-gradient-to-r from-primary-400 to-secondary-200 bg-center rounded-lg text-black inline-flex items-center">
                            {<item.icon />}
                          </div>
                        </div>
                        <div>
                          <div className="mb-2.5 text-black">
                            <h5 className="text-xl text-black">{item.title}</h5>
                          </div>
                          <p className="text-[15px]">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white lg:w-1/2 p-[50px] flex flex-col rounded-[30px]">
              <h4 className="mb-10">Book Your Free Consultation</h4>
              <Form />
            </div>
          </div>
        </div>
      </section>
      <Brands white />
    </>
  );
};

export default Contact;
