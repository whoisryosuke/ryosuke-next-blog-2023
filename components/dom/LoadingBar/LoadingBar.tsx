import React from "react";
import Box from "../Box/Box";
import { motion } from "framer-motion";
import { RADIUS_PROPERTIES } from "@theme/tokens";

const BAR_HEIGHT = "12px";

type Props = {};

const LoadingBar = (props: Props) => {
  return (
    <Box
      width="20%"
      bg="rgba(0, 0, 0, 0.5)"
      p={2}
      style={{
        borderRadius: RADIUS_PROPERTIES[2],
      }}
    >
      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 4,
          delay: 1,
          repeat: Infinity,
        }}
        style={{
          width: "100%",
          height: BAR_HEIGHT,
          backgroundImage: "linear-gradient(to right, #2C6776, #4EA35B)",
          transformOrigin: "left center",
          borderRadius: RADIUS_PROPERTIES[1],
        }}
      ></motion.div>
    </Box>
  );
};

export default LoadingBar;
