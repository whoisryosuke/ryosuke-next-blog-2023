import { useToastStore } from "@store/toasts";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Stack from "../Stack/Stack";
import Toast from "./Toast";

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
      top={3}
      right={3}
      width={"250px"}
      role="region"
      aria-live="polite"
      style={{ perspective: "500px" }}
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
            style={{ position: "absolute" }}
          >
            <Toast toast={toast} />
          </motion.div>
        ))}
      </AnimatePresence>
    </Stack>
  );
};

export default ToastManager;
