import React, { useRef } from "react";
import { PortfolioNavigationProps, WorkCardData } from "./types";
import Box from "../Box/Box";
import { motion } from "framer-motion";
import { getImageThumbnail } from "@utils/image";

type Props = PortfolioNavigationProps & {
  item: WorkCardData;
  selected: boolean;
  handleScroll: (x: number, y: number) => void;
};

const PortfolioThumbnailItem = ({
  item,
  selected,
  handleNavigateWork,
  handleScroll,
}: Props) => {
  const ref = useRef<HTMLImageElement>(null);
  const thumbnailImage = getImageThumbnail(item.src);

  const handleClick = () => {
    const thumbnailPosition = ref.current.getBoundingClientRect();
    handleScroll(thumbnailPosition.left, thumbnailPosition.top);
    handleNavigateWork(item.id);
  };

  return (
    <Box onClick={handleClick} position="relative">
      <motion.img
        ref={ref}
        src={thumbnailImage}
        alt={item.title}
        height="86px"
        style={{ objectFit: "cover", borderRadius: "5px" }}
        animate={{
          width: selected ? "86px" : "50px",
          marginRight: selected ? "8px" : "2px",
          marginLeft: selected ? "8px" : "2px",
          opacity: selected ? "1" : "0.5",
        }}
      />
    </Box>
  );
};

export default PortfolioThumbnailItem;
