import { base, themes } from "@/theme/index";
import React, { useEffect, useRef } from "react";
import { useTheme } from "src/context/theme";
import useStore from "src/store";
import { TbMoonStars, TbSun } from "react-icons/tb/index";
import { buttonStyles } from "./ToggleTheme.css";

type Props = {};

const ThemeToggle = (props: Props) => {
  const { theme, toggleTheme, setSelectedTheme } = useStore();
  const prevTheme = useRef("");
  const rootDiv = useRef(null);
  const colorMode = theme === "light" ? themes.light : themes.dark;
  const oldTheme = theme !== "light" ? themes.light : themes.dark;
  const themeClass = `${base.class} ${colorMode}`;

  // If theme was toggled, change the class on the root div
  // This is a nasty workaround because Astro islands are suffocating
  useEffect(() => {
    if (prevTheme.current !== theme) {
      if (!rootDiv.current) {
        rootDiv.current = window.document.body;
      }
      console.log("toggling theme class", rootDiv.current);
      // rootDiv.current.className = themeClass;
      rootDiv.current.classList.remove(oldTheme);
      rootDiv.current.classList.add(colorMode);
      rootDiv.current.classList.add(base.class);
      prevTheme.current = theme;
    }
  }, [theme]);

  // Check the user's device setting and override with that
  useEffect(() => {
    const setDarkMode = () => setSelectedTheme("dark");
    const setLightMode = () => setSelectedTheme("light");

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
    <button className={buttonStyles} onClick={toggleTheme}>
      {theme === "light" ? <TbMoonStars /> : <TbSun />}
    </button>
  );
};

export default ThemeToggle;
