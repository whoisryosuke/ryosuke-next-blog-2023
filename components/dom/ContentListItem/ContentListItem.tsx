import React, { PropsWithChildren } from "react";
import Box from "../Box/Box";
import styled from "styled-components";

type Props = {};

const ContentListItem = styled(Box)`
  &:hover,
  &:focus-within {
    background: ${({ theme }) => theme.colors.glassSidebar};
  }

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    transition-property: background;
    transition-duration: 420ms;
  }
`;

export default ContentListItem;
