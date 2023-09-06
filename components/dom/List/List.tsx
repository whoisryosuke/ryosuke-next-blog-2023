import React, { PropsWithChildren } from "react";
import Box from "../Box/Box";
import styled from "styled-components";

const StyledList = styled("ul")`
  color: ${({ theme }) => theme.colors.text};
  margin: 0.25em;
`;

type Props = {};

const List = ({ children, ...props }: PropsWithChildren<Props>) => {
  return <StyledList>{children}</StyledList>;
};

export default List;
