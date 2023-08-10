// import { textStyles } from "./Text.css";
// import clsx from "clsx";
// import {
//   fontSizeUtilityStyles,
//   FontSizeUtilityStyles,
// } from "../../styles/utility-styles/fontSizes.css";
// import { CSSProperties } from "react";

// /* eslint-disable-next-line */
// export interface TextProps<ComponentType extends React.ElementType> {
//   as?: ComponentType;
//   children: React.ReactNode;
//   fontSize?: FontSizeUtilityStyles["fontSize"];
//   fontFamily?: FontSizeUtilityStyles["fontFamily"];
//   fontWeight?: FontSizeUtilityStyles["fontWeight"];
//   lineHeight?: FontSizeUtilityStyles["lineHeight"];
//   className?: string;
//   style?: CSSProperties;
// }

// export function Text<ComponentType extends React.ElementType>({
//   children,
//   fontSize = 1,
//   fontFamily = "body",
//   fontWeight = "regular",
//   lineHeight = 1,
//   className,
//   ...restProps
// }: TextProps<ComponentType>) {
//   const fontProps = {
//     fontSize,
//     fontFamily,
//     fontWeight,
//     lineHeight,
//   };
//   // We separate the `as` prop so it doesn't get passed to component
//   const { as, ...props } = restProps;
//   // Decide the component type based on `as` prop
//   // You can't use `as` alone - protected word in TS - so we use it from `restProps`
//   const Component = restProps.as ?? ("p" as React.ElementType);
//   return (
//     <Component
//       className={clsx(textStyles, fontSizeUtilityStyles(fontProps), className)}
//       {...props}
//     >
//       {children}
//     </Component>
//   );
// }

// export default Text;


import { styled } from '@linaria/react';
import { Theme, ThemeProp } from '@theme/index';
import { PropsWithChildren } from "react";
import { withTheme } from '../ThemeProvider/ThemeProvider';
import { 
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
} from '@utils/theme-utils';

export type TextProps = ThemeProp & React.HTMLProps<HTMLDivElement> & {
    fontSize?: keyof Theme['fontSizes'];
    fontFamily?: keyof Theme['fonts'];
    fontWeight?: keyof Theme['fontWeights'];
    lineHeight?: keyof Theme['space'];
  };
  
const Text = withTheme(styled.div<TextProps>`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  color: ${({theme}) => theme.colors.text};
`)

Text.defaultProps = {
  fontSize: 1,
  fontFamily: 'body',
  fontWeight: 'regular',
  lineHeight: 2,
}

export default Text;
