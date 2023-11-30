import React from "react";
import Box from "../Box/Box";
import styled from "styled-components";

type Props = {};

const OverlayCard = styled(Box)`
  background: ${({ theme }) => theme.colors.darkGlass.input};
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius ? theme.radius[borderRadius] : theme.radius[2]};
`;

export default OverlayCard;
