import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledCodeInline = styled("code")`
  display: inline-block;
  margin-left: ${({ theme }) => theme.space[1]};
  margin-right: ${({ theme }) => theme.space[1]};
  color: ${({ theme }) => theme.colors.text};
  padding-left: ${({ theme }) => theme.space[2]};
  padding-right: ${({ theme }) => theme.space[2]};
  padding-top: ${({ theme }) => theme.space[0]};
  padding-bottom: ${({ theme }) => theme.space[0]};
  position: relative;
  word-break: break-word;

  &:after {
    content: "";
    width: 100%;
    height: 70%;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 15%;

    background: ${({ theme }) => theme.gradients.blue.default};
    z-index: -1;
    opacity: 1;
  }

  &:hover:after {
    opacity: 1;
  }
`;

export type CodeInlineProps = AnchorHTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

const CodeInline = ({
  children,
  ...props
}: PropsWithChildren<CodeInlineProps>) => {
  return <StyledCodeInline {...props}>{children}</StyledCodeInline>;
};

export default CodeInline;
