import { useToastStore } from "@store/toasts";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Stack from "../Stack/Stack";
import Toast from "./Toast";
import styled from "styled-components";
import Box from "../Box/Box";
import { BREAKPOINTS } from "@theme/tokens";

const ToastManagerContainer = styled(Box)`
  @media (min-width: ${BREAKPOINTS.tablet}) {
    mask-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 10%
      ),
      linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%);
    webkit-mask-composite: source-in;
    mask-composite: intersect;
  }

  overflow-x: hidden;

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    transition-property: transform;
    transition-duration: 710ms;
  }
`;

type Props = {};

const TOAST_DURATION = 3000;
const TOAST_EXIT_DURATION = 1000;

const ToastManager = (props: Props) => {
  const { toasts, removeToast, updateToast } = useToastStore();
  const removeQueue = useRef({});

  const toastMap = Object.values(toasts);

  useEffect(() => {
    toastMap.forEach((toast) => {
      // New toast? Set a timer to hide it.
      if (!(toast.time in removeQueue.current)) {
        // Mark for deletion
        removeQueue.current[toast.time] = setTimeout(() => {
          removeToast(toast.time);
          delete removeQueue.current[toast.time];
        }, TOAST_DURATION);
      }
    });
  }, [toasts]);

  return (
    <ToastManagerContainer
      position="absolute"
      top={0}
      right={0}
      p={{
        default: 5,
        tablet: 3,
      }}
      width={{ default: "100%", tablet: "250px" }}
      background={{
        default:
          "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%,rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 100%)",
        tablet:
          "radial-gradient(circle at 150% -150%, rgba(0,0,0,0.65) 50%,rgba(0,0,0,0) 80%)",
      }}
      style={{
        perspective: "500px",
        minHeight: toastMap.length > 0 ? "300px" : 0,
        zIndex: 420,
        opacity: toastMap.length > 0 ? 1 : 0,
      }}
    >
      <Stack
        vertical
        gap="2px"
        //@ts-ignore
        role="region"
        aria-live="polite"
      >
        <AnimatePresence>
          {toastMap.map((toast, index) => (
            <motion.div
              key={toast.time}
              initial={{
                opacity: 0,
                filter: "blur(20px)",
                transform:
                  "translateY(-100px) translateX(125px) translateZ(200px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0)",
                transform: `translateY(${
                  index * 90
                }px) translateX(0px) translateZ(0px)`,
              }}
              exit={{
                filter: "blur(20px)",
                opacity: 0,
                transform: "translateX(125px) translateZ(-200px)",
                transformOrigin: "top center",
              }}
              transition={{ duration: 0.7 }}
              style={{ position: "absolute", width: "100%", zIndex: 710 }}
            >
              <Toast toast={toast} />
            </motion.div>
          ))}
        </AnimatePresence>
      </Stack>
    </ToastManagerContainer>
  );
};

export default ToastManager;
