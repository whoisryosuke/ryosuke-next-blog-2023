import { base, themes } from "@theme/index";
import React, { useEffect, useRef } from "react";
import { TbMoonStars, TbSun } from "react-icons/tb/index";
import { useAppStore } from "store/app";

type Props = {};

const ThemeToggle = (props: Props) => {
  const { setTheme } = useAppStore();

  // Check the user's device setting and override with that
  useEffect(() => {
    const setDarkMode = () => setTheme("dark");
    const setLightMode = () => setTheme("light");

    const setMode = (e) => {
      if (e.matches) {
        setDarkMode();
      } else {
        setLightMode();
      }
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", setMode);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", setMode);
    };
  }, []);

  return <></>;
};

export default ThemeToggle;
