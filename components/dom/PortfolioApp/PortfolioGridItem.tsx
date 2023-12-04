import React from "react";
import Image from "../Image/Image";
import { PortfolioNavigationProps, WorkCardProps } from "./types";
import Box from "../Box/Box";

type Props = PortfolioNavigationProps &
  WorkCardProps & {
    id: number;
    imageSize: {
      width: string;
      height: string;
    };
    borderTopRight?: boolean;
  };

const PortfolioGridItem = ({
  src,
  //   video,
  title,
  date,
  //   prototype,
  id,
  handleNavigateWork,
  imageSize,
  borderTopRight,
  ...props
}: Props) => {
  const handleClick = () => {
    handleNavigateWork(id);
  };

  return (
    <Box onClick={handleClick} {...props} position="relative">
      {src && (
        <img
          src={src}
          style={{
            width: "100%",
            height: props?.height ?? "auto",
            objectFit: "cover",
            margin: 0,
            borderTopRightRadius: borderTopRight ? "21px" : "",
          }}
        />
      )}
    </Box>
  );
};

export default PortfolioGridItem;
