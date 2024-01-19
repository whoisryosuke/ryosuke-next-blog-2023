import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import Input from "../Input/Input";
import { BiSolidDownArrow } from "react-icons/bi";

const DropdownContainer = styled(Box)`
  & select {
    color: ${({ theme }) => theme.colors.text};
  }

  & option {
    color: initial;
  }

  & .icon {
    color: ${({ theme }) => theme.colors.button.default};
    position: absolute;
    top: ${({ theme }) => theme.space[4]};
    right: ${({ theme }) => theme.space[4]};
    width: 12px;
    height: 12px;

    /* Animation */
    @media (prefers-reduced-motion: no-preference) {
      transition-property: color;
      transition-duration: 420ms;
    }
  }

  &:hover .icon {
    color: ${({ theme }) => theme.colors.button.hovered};
  }

  &:active .icon {
    color: ${({ theme }) => theme.colors.button.pressed};
  }

  &:disabled .icon {
    color: ${({ theme }) => theme.colors.button.disabledText};
  }
`;

type Props = React.HTMLAttributes<HTMLSelectElement> & {
  name?: string;
  width?: string;
};

const Dropdown = ({ children, width, ...props }: PropsWithChildren<Props>) => {
  return (
    <DropdownContainer position="relative" width={width}>
      {/* @ts-ignore */}
      <Input as="select" {...props}>
        {children}
      </Input>
      <BiSolidDownArrow className="icon" />
    </DropdownContainer>
  );
};

export default Dropdown;
