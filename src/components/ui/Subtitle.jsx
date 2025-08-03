import { motion } from "motion/react";
import React from "react";
import { MotionInView, variants } from "../../utils/motion";
const Subtitle = ({ children, white = false }) => {
  return (
    <MotionInView
      as={motion.div}
      v={variants.fadeRise}
      viewport={{ once: true, amount: 1 }}
      className={`subtitle ${white ? "text-white" : "text-black"}`}
    >
      {children}
    </MotionInView>
  );
};

export default Subtitle;
