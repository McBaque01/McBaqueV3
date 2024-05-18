import React from "react";

import { motion } from "framer-motion";

interface FadeJrType {
  children?: React.ReactNode;
  direction?: string;
  delay?: number;
  classname?: string;
  duration?: number;
}

export const FadeJr = ({
  children,
  direction,
  delay,
  classname,
  duration,
}: FadeJrType) => {
  const Fademotion = {
    hidden: {
      opacity: 0,
      x: direction === "right" ? -20 : direction === "left" ? 20 : 0,
      y: direction === "up" ? 20 : direction === "down" ? -100 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,

      transition: {
        type: "tween",
        duration: duration,
        ...(delay && { delay: delay }),
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
  return (
    <motion.div
      variants={Fademotion}
      className={classname}
      // whileHover={{scale:1.1}}
    >
      {children}
    </motion.div>
  );
};
