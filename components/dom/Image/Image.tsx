import React, { HTMLProps } from "react";
import { MarginProps, margin } from "styled-system";
import styled from "styled-components";
import NextImage from 'next/image'
import { Theme } from "@theme/index";
import { borderShineEffect } from "@theme/styles/glass";
import Box from "../Box/Box";

export type ImageProps = HTMLProps<HTMLImageElement> & MarginProps & {
  borderRadius?: keyof Theme["radius"];
};

const StyledImageContainer = styled(Box)<ImageProps>`
  display:flex;
  border-radius: ${({theme, borderRadius}) => borderRadius ? theme.radius[borderRadius] : theme.radius[1]};
  &:after {
    ${borderShineEffect}
  }
`

const StyledImage = styled('img')<ImageProps>`
  width: auto;
  margin: auto;
  max-width: 100%;

  border-radius: ${({theme, borderRadius}) => borderRadius ? theme.radius[borderRadius] : theme.radius[1]};
`

const Image = ({ borderRadius, src, alt, ...props }: ImageProps) => {
  return (
    <StyledImageContainer borderRadius={borderRadius} {...props}>
        <StyledImage src={src} alt={alt} />
    </StyledImageContainer>
  );
};

export default Image;
