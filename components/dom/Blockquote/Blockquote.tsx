import { PropsWithChildren } from "react";
import styled from "styled-components";
import Text from "@components/dom/Text/Text";

const StyledBlockquote = styled("blockquote")`
  background-color: ${({ theme }) => theme.colors.glassOverlay};
  border-radius: ${({ theme }) => theme.radius[3]};
  padding: ${({ theme }) => theme.space[5]};
  padding-bottom: ${({ theme }) => theme.space[3]};
  border: 0;
  margin: 0;
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

/* eslint-disable-next-line */
type BlockquoteProps = {};

export function Blockquote({
  children,
  ...props
}: PropsWithChildren<BlockquoteProps>) {
  return <StyledBlockquote {...props}>{children}</StyledBlockquote>;
}

export default Blockquote;
