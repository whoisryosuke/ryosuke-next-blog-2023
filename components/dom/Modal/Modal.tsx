import { isServer } from "@utils/next";
import React, { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import ModalContainer from "./ModalContainer";
import Dialog from "./Dialog";
import ModalCurtain from "./ModalCurtain";
import ThemeProvider from "../ThemeProvider/ThemeProvider";

const MODAL_THEME = {
  modal: false,
  colors: {
    textOverlay: "rgba(255,255,255,1.0)",
  },
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  width?: any;
};

const Modal = ({
  children,
  isOpen,
  onClose,
  width,
  ...props
}: PropsWithChildren<Props>) => {
  const rootRef = useRef<Element | null>(null);

  // Grabs the root element for React's Portal
  useEffect(() => {
    if (!isServer()) {
      rootRef.current = document.getElementById("root-content");
    }
  }, []);

  // Close modal when user presses escape key
  // @see: https://w3.org/WAI/ARIA/apg/patterns/dialog-modal/#keyboardinteraction
  useEffect(() => {
    const closeModalKeyboardEsc = (e) => e.key === "Escape" && onClose();

    if (!isServer()) {
      document.body.addEventListener("keydown", closeModalKeyboardEsc);
    }

    return () => {
      if (!isServer()) {
        document.body.removeEventListener("keydown", closeModalKeyboardEsc);
      }
    };
  }, [onClose]);

  return rootRef.current
    ? createPortal(
        <ThemeProvider
          //@ts-ignore more need for partials
          theme={MODAL_THEME}
        >
          <ModalContainer isOpen={isOpen} {...props}>
            <ModalCurtain onClose={onClose} />
            <Dialog width={width} onClose={onClose}>
              {children}
            </Dialog>
          </ModalContainer>
        </ThemeProvider>,
        rootRef.current
      )
    : null;
};

export default Modal;
