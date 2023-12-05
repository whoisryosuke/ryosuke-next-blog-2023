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
    borderRadius?: string;
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
  borderRadius,
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
            maxHeight: props?.maxHeight ?? "",
            objectFit: "cover",
            margin: 0,
            borderTopRightRadius: borderTopRight ? "21px" : "",
            borderRadius: borderRadius ?? "",
          }}
        />
      )}
    </Box>
  );
};

export default PortfolioGridItem;
