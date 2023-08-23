import React, { HTMLProps } from "react";
import { MarginProps, margin } from "styled-system";
import styled from "styled-components";
import NextImage from 'next/image'
import { Theme } from "@theme/index";

export type ImageProps = HTMLProps<HTMLImageElement> & MarginProps & {
  borderRadius?: keyof Theme["radius"];
};

const StyledImage = styled('img')<ImageProps>`

  width: auto;
  margin: auto;
  max-width: 100%;

  border-radius: ${({theme, borderRadius}) => borderRadius ? theme.radius[borderRadius] : theme.radius[1]};

  ${margin}
`

const Image = ({ ...props }: ImageProps) => {
  return (
    <StyledImage {...props} />
  );
};

export default Image;
