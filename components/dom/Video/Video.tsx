import React, { HTMLProps } from "react";
import { MarginProps, margin } from "styled-system";
import styled from "styled-components";
import { Theme } from "@theme/index";
import { borderShineEffect } from "@theme/styles/glass";

export type VideoProps = HTMLProps<HTMLVideoElement> &
  MarginProps & {
    borderRadius?: keyof Theme["radius"];
  };

const StyledVideo = styled("video")<VideoProps>`
  max-width: 100%;
  object-fit: cover;

  border-radius: ${({ theme, borderRadius }) =>
    borderRadius ? theme.radius[borderRadius] : theme.radius[1]};

  &:after {
    ${borderShineEffect}
  }
`;

const Video = ({ borderRadius, src, alt, ...props }: VideoProps) => {
  return <StyledVideo src={src} alt={alt} {...props} />;
};

export default Video;
