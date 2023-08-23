import React, { AnchorHTMLAttributes } from "react";
import Box from "../Box/Box";
import Text from "../Text/Text";

export type ImageProps = AnchorHTMLAttributes<HTMLImageElement> & {
  alt: string;
};

const Image = ({ className, alt, ...props }: ImageProps) => {
  return (
    <Box>
      <img alt={alt} {...props} />
      {alt && (
        <Box>
          <Box aria-hidden>
            <Text>{alt}</Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Image;
