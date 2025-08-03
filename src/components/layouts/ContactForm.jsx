import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router-dom";
import { contact_sec } from "../../assets";
import { MotionInView, variants, viewportOnce20 } from "../../utils/motion";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Subtitle from "../ui/Subtitle";

const ContactForm = () => {
  return (
    <MotionInView
      as={motion.section}
      v={variants.slideUp}
      viewport={viewportOnce20}
      className="bg-center bg-no-repeat bg-cover rounded-t-[40px] -mt-10 relative"
      style={{ backgroundImage: `url(${contact_sec})` }}
    >
      <div className="absolute inset-0 bg-black/40 max-w-full rounded-t-[40px]" />
      <div className="grow shrink basis-auto py-[120px] flex flex-col lg:flex-row">
        <div className="lg:w-1/2"></div>
        <div className="lg:w-1/2 px-5 py-10 lg:p-10 flex flex-col rounded-[20px] bg-white/70 backdrop-blur-[7px]">
          <div className="space-y-2.5 pb-[15px]">
            <Subtitle>Let's Talk</Subtitle>
            <MotionInView
              as={motion.h2}
              v={variants.slideUp}
              viewport={{ once: true, amount: 1 }}
            >
              Connect With Us
            </MotionInView>
          </div>
          <div>
            <MotionInView
              as={motion.p}
              v={variants.slideUp}
              viewport={{ once: true, amount: 1 }}
              className="ml-[2%]"
            >
              Let’s explore how GRC Capital can support your financial
              ambitions. Whether you're ready to partner or simply want more
              details, reach out today.
            </MotionInView>
          </div>
          <div>
            <div className="pt-10">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </MotionInView>
  );
};

export default ContactForm;
