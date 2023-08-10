import { base, themes } from "@theme/index";
import React, { useEffect, useRef } from "react";
import { TbMoonStars, TbSun } from "react-icons/tb/index";
import { useAppStore } from "store/app";

type Props = {};

const ThemeToggle = (props: Props) => {
  const { theme, toggleTheme, setTheme } = useAppStore();
  const prevTheme = useRef("");
  const rootDiv = useRef(null);
  const colorMode = theme === "light" ? themes.light : themes.dark;
  const oldTheme = theme !== "light" ? themes.light : themes.dark;


  // Check the user's device setting and override with that
  useEffect(() => {
    const setDarkMode = () => setTheme("dark");
    const setLightMode = () => setTheme("light");

    const setMode = (e) => {
      console.log("device theme detected", theme);
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

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? <TbMoonStars /> : <TbSun />}
    </button>
  );
};

export default ThemeToggle;
