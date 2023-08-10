import clsx from "clsx";
import React, { AnchorHTMLAttributes } from "react";
import Box from "../Box/Box";
import Text from "../Text/Text";
import {
  imageStyles,
  imageContainerStyles,
  captionContainerStyles,
} from "./Image.css";

export type ImageProps = AnchorHTMLAttributes<HTMLImageElement> & {
  children: React.ReactNode;
  alt: string;
};

const Image = ({ className, alt, ...props }: ImageProps) => {
  return (
    <Box className={imageContainerStyles}>
      <img className={clsx(imageStyles, className)} alt={alt} {...props} />
      {alt && (
        <Box>
          <Box className={captionContainerStyles} aria-hidden>
            <Text>{alt}</Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Image;
