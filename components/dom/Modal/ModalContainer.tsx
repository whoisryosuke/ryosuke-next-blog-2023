import { getKeyboardFocusableElements } from "@utils/focus";
import { AnimatePresence } from "framer-motion";
import React, { PropsWithChildren, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledModalContainer = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  perspective: 500px;

  z-index: 999;

  /* background: rgba(0,0,0,0.3); */
`;

type Props = {
  isOpen: boolean;
};

const ModalContainer = ({
  children,
  isOpen,
  ...props
}: PropsWithChildren<Props>) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Find a focusable element
      const focusableElements = getKeyboardFocusableElements(modalRef.current);

      // focusableElement.focus?.();
      if (focusableElements.length > 1) {
        // The first element is usually the close button so we skip it
        focusableElements[1].focus();
      }
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <StyledModalContainer ref={modalRef} {...props}>
          {children}
        </StyledModalContainer>
      )}
    </AnimatePresence>
  );
};

export default ModalContainer;
