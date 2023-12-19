import React, {
  CSSProperties,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import styled from "styled-components";

const SLIDER_HEIGHT = "12px";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  style?: React.CSSProperties;
};

const StyledInput = styled("input")<Props>`
  -webkit-appearance: none;
  background: transparent;
  width: 100%;
  height: ${({ height }) => height ?? SLIDER_HEIGHT};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: transparent;
    filter: none;
    box-shadow: none;
    border: 0;
    border-radius: 50%;

    height: 25px;
    width: 25px;
  }
`;

const StyledContainer = styled("div")<Partial<StyledProgressBarProps>>`
  width: 100%;
  position: relative;
  height: ${({ height }) => `calc(${height} + 6px)` ?? SLIDER_HEIGHT};

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -2;
    background: ${({ theme }) => theme.colors.darkGlass.input};
    border-radius: ${({ theme }) => theme.radius[1]};

    box-shadow:
      0px -1px 4px rgba(0, 0, 0, 0.25),
      1px 2px 1px rgba(255, 255, 255, 0.2),
      inset 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

type StyledProgressBarProps = {
  percent: number;
  height: CSSProperties["height"];
};

const StyledProgressBar = styled("div")<StyledProgressBarProps>`
  width: ${({ percent }) => percent}%;
  height: ${({ height }) => height ?? SLIDER_HEIGHT};
  position: absolute;
  top: 3px;
  left: 3px;
  z-index: -1;
  background: ${({ theme }) => theme.colors.darkGlass.focused};
  border-radius: ${({ theme }) => theme.radius[1]};
  box-shadow:
    0px -1px 4px rgba(0, 0, 0, 0.1),
    1px 2px 1px rgba(255, 255, 255, 0.1),
    inset 3px 3px 3px rgba(0, 0, 0, 0.2);
`;

const Slider = ({ style, value, min, max, height, ...props }: Props) => {
  // @ts-ignore
  const percentComplete = ((value - min) / (max - min)) * 100;

  return (
    <StyledContainer height={height} style={style}>
      <StyledProgressBar height={height} percent={percentComplete} />
      <StyledInput
        type="range"
        min={min}
        max={max}
        value={value}
        height={height}
        {...props}
      />
    </StyledContainer>
  );
};

export default Slider;
