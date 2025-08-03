import { motion } from "motion/react";

const soft = { duration: 1, ease: [0.22, 1, 0.36, 1] };

export const variants = {
  fadeRise: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: soft },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: soft },
  },
  slideUp: {
    hidden: { y: 50 },
    visible: { y: 0, transition: soft },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: soft },
  },
  stagger: (gap = 0.12, delay = 0.1) => ({
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: gap, delayChildren: delay },
    },
  }),
};

// Default viewport options
export const viewportOnce20 = { once: true, amount: 0.2 };

export const MotionInView = ({
  as: Tag = motion.div,
  children,
  v = variants.fadeRise,
  viewport = viewportOnce20,
  className,
  ...rest
}) => (
  <Tag
    variants={v}
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    className={className}
    {...rest}
  >
    {children}
  </Tag>
);
