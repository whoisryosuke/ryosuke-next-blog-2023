import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import DialogClose from "./DialogClose";
import { motion } from "framer-motion";
import { LayoutProps, layout } from "styled-system";

const StyledDialog = styled("dialog")`
  position: absolute;
  top: ${({ theme }) => theme.space[5]};
  background: transparent;
  border: 0;
  display: block;
  padding: 0;

  ${layout}
`;
const DialogContent = styled("div")`
  z-index: 700;
  & > div {
    box-shadow: 0px 0px 42px rgba(0, 0, 0, 0.25);
  }
`;

type Props = LayoutProps & {
  onClose: () => void;
};

const ANIMATION_INITAL = {
  scale: 1,
  opacity: 0,
  translateX: "500px",
  translateZ: "0px",
  rotateX: "1.11deg",
  rotateY: "-3.94deg",
  transformOrigin: "bottom center",
};
const ANIMATION_EXIT = { scale: 1.1, opacity: 0, translateY: "-50px" };

const Dialog = ({ children, onClose, ...props }: PropsWithChildren<Props>) => {
  return (
    <motion.div
      initial={ANIMATION_INITAL}
      animate={{
        scale: 1,
        opacity: 1,
        translateX: "0px",
        translateZ: "0",
        rotateX: "0",
        rotateY: "0",
        transformOrigin: "bottom center",
      }}
      exit={ANIMATION_INITAL}
      transition={{
        duration: 0.42,
        ease: "easeInOut",
      }}
    >
      <StyledDialog {...props}>
        <DialogClose onClose={onClose} />
        <DialogContent>{children}</DialogContent>
      </StyledDialog>
    </motion.div>
  );
};

export default Dialog;
