import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

type Props = {};

const PageTransition = ({ children }: PropsWithChildren<Props>) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: "-100vw",
        translateY: 300,
        translateZ: 30,
        rotateY: 30,
        filter: "blur(30px)",
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotateY: 0,
        filter: "blur(0px)",
        scale: 1,
      }}
      exit={{
        opacity: 0,
        translateX: "-100vw",
        translateY: 300,
        translateZ: 30,
        rotateY: 30,
        filter: "blur(30px)",
        scale: 0.5,
      }}
      transition={{
        duration: 0.75,
      }}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
