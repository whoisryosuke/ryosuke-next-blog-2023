import React from "react";
import { PortfolioNavigationProps, WorkCardData } from "./types";
import Box from "../Box/Box";
import { motion } from "framer-motion";

type Props = PortfolioNavigationProps & {
  item: WorkCardData;
  selected: boolean;
};

const PortfolioThumbnailItem = ({
  item,
  selected,
  handleNavigateWork,
}: Props) => {
  const handleClick = () => {
    handleNavigateWork(item.id);
  };

  return (
    <Box onClick={handleClick}>
      <motion.img
        src={item.src}
        alt={item.title}
        height="86px"
        style={{ objectFit: "cover", borderRadius: "5px" }}
        animate={{
          width: selected ? "86px" : "50px",
          marginRight: selected ? "8px" : "2px",
          marginLeft: selected ? "8px" : "2px",
        }}
      />
    </Box>
  );
};

export default PortfolioThumbnailItem;
