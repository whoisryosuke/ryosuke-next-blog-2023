import React, { useEffect } from "react";
import { useAppStore } from "store/app";

const REDUCED_MOTION_MEDIA_QUERY = "(prefers-reduced-motion: reduce)";

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

  // Check on changes to settings using media queries
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
  useMediaQuery(REDUCED_MOTION_MEDIA_QUERY, updateMotionSetting);

  // Check on initial page load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const shouldReduceMotion = window.matchMedia(REDUCED_MOTION_MEDIA_QUERY);
      setUserAnimation({
        active: !shouldReduceMotion.matches,
      });
    }
  }, []);

  return <></>;
};

export default A11yCheck;
