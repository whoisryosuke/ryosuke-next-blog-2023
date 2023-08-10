import { Theme } from "@theme/index";

/**
 * Utility prop generator. Grabs a property from a part of theme or returns default value,.
 * @param prop The component prop you want to grab `<Component thisPropName={}>`
 * @param themeProperty Top level theme property (e.g. `colors` in `theme.colors.blue`)
 * @param defaultValue if no prop found, will use this or empty string
 * @returns 
 */
export const up = (prop, themeProperty: keyof Theme, defaultValue = '') => props => props[prop] in props.theme[themeProperty] ? props.theme[themeProperty][props[prop]] : defaultValue

// Utility prop functions
// Margin
export const m = up('m', 'space', '0');
export const mt = up('mt', 'space', '0');
export const mr = up('mr', 'space', '0');
export const mb = up('mb', 'space', '0');
export const ml = up('ml', 'space', '0');
export const mx = up('mx', 'space', '0');
export const my = up('my', 'space', '0');
export const p = up('p', 'space', '0');
export const pt = up('pt', 'space', '0');
export const pr = up('pr', 'space', '0');
export const pb = up('pb', 'space', '0');
export const pl = up('pl', 'space', '0');
export const px = up('px', 'space', '0');
export const py = up('py', 'space', '0');

// Color
export const bg = up('bg', 'gradients', 'none');
export const color = up('color', 'colors');

// Fonts
export const fontSize = up('fontSize', 'fontSizes');