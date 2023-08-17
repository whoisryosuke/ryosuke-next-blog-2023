import React, { useEffect } from "react";
import { useAppStore } from "store/app";

type Props = {};

type MediaQueryEventCallback = (this: any, ev: MediaQueryListEvent) => void;
const useMediaQuery = (query: string, event: MediaQueryEventCallback) => {
  useEffect(() => {
    let mediaQuery;
    if (typeof window !== "undefined") {
      mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", event);
    }

    return () => {
      if (mediaQuery) mediaQuery.removeEventListener("change", event);
    };
  }, []);
};

const A11yCheck = (props: Props) => {
  const { setUserAnimation } = useAppStore();

  const updateMotionSetting = (event) => {
    console.log("motion changed", event);
    // We're checking if they want to reduce motion so
    // reduce motion = true
    // animation ok = false
    const shouldReduceMotion = event.matches;

    setUserAnimation({
      active: !shouldReduceMotion,
    });
  };

  useMediaQuery("(prefers-reduced-motion: reduce)", updateMotionSetting);

  return <></>;
};

export default A11yCheck;
