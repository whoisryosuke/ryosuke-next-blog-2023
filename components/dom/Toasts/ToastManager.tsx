import { useToastStore } from "@store/toasts";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Stack from "../Stack/Stack";
import Toast from "./Toast";
import styled from "styled-components";

const ToastManagerContainer = styled(Stack)`
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
    <Stack
      vertical
      gap="2px"
      position="absolute"
      top={0}
      right={0}
      p={3}
      width={{ default: "100%", tablet: "250px" }}
      role="region"
      aria-live="polite"
      style={{
        perspective: "500px",
        minHeight: "300px",
        background:
          toastMap.length > 0
            ? "radial-gradient(circle at 150% -150%, rgba(0,0,0,0.65) 50%,rgba(0,0,0,0) 80%)"
            : "transparent",

        "-webkit-mask-image": `linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 10%
  ), linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 10%
  )`,
        "-webkit-mask-composite": "source-in" /* For Chrome */,
        "mask-composite": "intersect" /* For Firefox */,
      }}
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
            style={{ position: "absolute", width: "100%" }}
          >
            <Toast toast={toast} />
          </motion.div>
        ))}
      </AnimatePresence>
    </Stack>
  );
};

export default ToastManager;
