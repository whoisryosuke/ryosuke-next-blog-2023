import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

type Props = {};

const PortfolioTransition = ({
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.42,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PortfolioTransition;
