import { Theme } from "@theme/index";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

type GridProps = {
  columnGap?: keyof Theme["space"];
  rowGap?: keyof Theme["space"];
  cols?: number;
};

const StyledGrid = styled("div")<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  grid-template-rows: repeat(${({ cols }) => cols}, auto);
  column-gap: ${({ theme, columnGap }) => theme.space[columnGap]};
  row-gap: ${({ theme, rowGap }) => theme.space[rowGap]};
`;

const Grid = ({ children, ...props }: PropsWithChildren<GridProps>) => {
  return <StyledGrid {...props}>{children}</StyledGrid>;
};

Grid.defaultProps = {
  columnGap: 3,
  rowGap: 4,
  cols: 3,
};

export default Grid;
