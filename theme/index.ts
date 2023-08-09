import { light } from "./light.css";
import { base } from "./base.css";
import { colorTokens as tokens } from "./colormode.css";
import { dark } from "./dark.css";

/**
 * Color tokens and "themes" (aka color modes)
 */
const themes = {
  light,
  tokens,
  dark,
};

export { themes, base };
