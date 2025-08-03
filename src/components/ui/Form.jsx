import { motion } from "motion/react";
import React from "react";
import { MotionInView, variants } from "../../utils/motion";
import Button from "./Button";

const Form = () => {
  return (
    <form>
      <div className="grid md:grid-cols-2 gap-[22px] mb-[22px]">
        <MotionInView
          as={motion.input}
          v={variants.slideUp}
          viewport={{ once: true, amount: 0.7 }}
          type="text"
          name="fname"
          placeholder="First Name*"
        />
        <MotionInView
          as={motion.input}
          v={variants.slideUp}
          viewport={{ once: true, amount: 0.7 }}
          type="text"
          name="lname"
          placeholder="Last Name*"
        />
        <MotionInView
          as={motion.input}
          v={variants.slideUp}
          viewport={{ once: true, amount: 0.7 }}
          type="email"
          name="email"
          placeholder="Email Address*"
        />
        <MotionInView
          as={motion.input}
          v={variants.slideUp}
          viewport={{ once: true, amount: 0.7 }}
          type="tel"
          name="phone"
          placeholder="Phone Number*"
        />
      </div>
      <div className="mb-[0.75rem]">
        <MotionInView
          as={motion.textarea}
          v={variants.slideUp}
          viewport={{ once: true, amount: 0.7 }}
          name="message"
          cols={40}
          rows={4}
          placeholder="Additional Message"
        />
      </div>
      <MotionInView
        as={motion.div}
        v={variants.slideUp}
        viewport={{ once: true, amount: 1 }}
        className="mt-14 inline-flex"
      >
        <Button primary>Submit</Button>
      </MotionInView>
    </form>
  );
};

export default Form;
