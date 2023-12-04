import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

type Props = {};

const PortfolioTransition = ({
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 300 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 300 }}
      transition={{
        duration: 0.71,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PortfolioTransition;
