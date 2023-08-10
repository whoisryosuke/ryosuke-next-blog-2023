import { AnimatePresence, motion } from "framer-motion";
import React, { PropsWithChildren, useState } from "react";
import Box, { BoxProps } from "../Box/Box";
import Text from "../Text/Text";
import { accordionBarStyles, accordionButtonStyles } from "./Accordion.css";

type Props = BoxProps & {
  title: React.ReactNode;
};

const Accordion = ({ children, title, ...props }: PropsWithChildren<Props>) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    console.log("clicked!", isExpanded);
    setIsExpanded((prevValue) => !prevValue);
  };
  return (
    <Box style={{ width: "100%" }} {...props}>
      <Box
        display="flex"
        justifyContent="space-between"
        className={accordionBarStyles}
      >
        <button className={accordionButtonStyles} onClick={handleToggle}>
          <Text as="h2" fontFamily="heading" fontSize={4} id={title}>
            {title}
          </Text>
        </button>
        <Text fontFamily="heading" fontSize={4}>
          {isExpanded ? "-" : "+"}
        </Text>
      </Box>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              ease: "easeInOut",
            }}
            style={{
              transformOrigin: "top center",
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Accordion;
