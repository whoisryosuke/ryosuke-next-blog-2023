import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

type Props = {};

const PageTransition = ({ children }: PropsWithChildren<Props>) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 300 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 300 }}
      style={{ width: "100%", position: "absolute", top: 0, left: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
