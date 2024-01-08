import React, { HTMLProps, RefObject, forwardRef } from "react";
import {
  HeightProps,
  MarginProps,
  WidthProps,
  height,
  margin,
  width,
} from "styled-system";
import styled from "styled-components";
import { Theme } from "@theme/index";
import { borderShineEffect } from "@theme/styles/glass";

export type VideoProps = HTMLProps<HTMLVideoElement> &
  MarginProps &
  WidthProps &
  HeightProps & {
    borderRadius?: keyof Theme["radius"];
  };

const StyledVideo = styled("video")<VideoProps>`
  max-width: 100%;
  object-fit: cover;
  position: relative;

  border-radius: ${({ theme, borderRadius }) =>
    borderRadius ? theme.radius[borderRadius] : theme.radius[1]};

  video::-webkit-media-controls {
    display: none;
  }

  ${width}
  ${height}
`;

const VideoContent = (
  { borderRadius, src, alt, ...props }: VideoProps,
  ref: RefObject<HTMLVideoElement>
) => {
  return <StyledVideo ref={ref} src={src} alt={alt} {...props} />;
};

const Video = forwardRef(VideoContent);

export default Video;
